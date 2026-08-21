import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Helper for local development
const saveLocally = (data: any) => {
  const filePath = path.join(process.cwd(), 'data', 'blogs.json');
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

export async function POST(request: Request) {
  try {
    const { post, action } = await request.json();
    
    if (!post || !post.id || !post.title) {
      return NextResponse.json({ success: false, message: 'Data tidak lengkap' }, { status: 400 });
    }

    // 1. Dapatkan data blog saat ini
    const filePath = path.join(process.cwd(), 'data', 'blogs.json');
    let blogs = [];
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      blogs = JSON.parse(fileContent);
    } catch (e) {
      // ignore
    }

    // 2. Update array
    if (action === 'create') {
      blogs.push(post);
    } else {
      const index = blogs.findIndex((p: any) => p.id === post.id);
      if (index > -1) {
        blogs[index] = post;
      } else {
        blogs.push(post); // fallback
      }
    }

    const newContent = JSON.stringify(blogs, null, 2);

    // 3. Simpan (Lokal vs GitHub)
    const githubToken = process.env.GITHUB_TOKEN;
    const githubOwner = process.env.GITHUB_OWNER; // ex: "username"
    const githubRepo = process.env.GITHUB_REPO; // ex: "diza-foods"

    if (process.env.NODE_ENV === 'development' && (!githubToken || !githubOwner || !githubRepo)) {
      // Simpan lokal jika di environment dev ATAU jika mau test lokal
      saveLocally(blogs);
      return NextResponse.json({ success: true, message: 'Disimpan secara lokal' });
    } else if (!githubToken || !githubOwner || !githubRepo) {
      return NextResponse.json({ success: false, message: 'Environment Variables GitHub (Token, Owner, Repo) belum di-set di Vercel!' }, { status: 400 });
    } else {
      // Simpan ke GitHub via API
      const gitPath = 'data/blogs.json';
      const apiUrl = `https://api.github.com/repos/${githubOwner}/${githubRepo}/contents/${gitPath}`;
      
      // Get current SHA
      const resGet = await fetch(apiUrl, {
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
        }
      });
      
      let sha = '';
      if (resGet.ok) {
        const currentData = await resGet.json();
        sha = currentData.sha;
      }

      // Encode base64 using Buffer
      const contentBase64 = Buffer.from(newContent).toString('base64');

      // Put to GitHub
      const resPut = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `Update blog post: ${post.title}`,
          content: contentBase64,
          sha: sha || undefined
        })
      });

      if (!resPut.ok) {
        const errorData = await resPut.json();
        return NextResponse.json({ success: false, message: 'Gagal push ke GitHub', error: errorData }, { status: 500 });
      }

      return NextResponse.json({ success: true, message: 'Berhasil disimpan ke GitHub' });
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
