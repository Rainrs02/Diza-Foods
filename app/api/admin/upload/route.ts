import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { name, base64 } = await request.json();
    
    if (!name || !base64) {
      return NextResponse.json({ success: false, message: 'Data tidak lengkap' }, { status: 400 });
    }

    const githubToken = process.env.GITHUB_TOKEN;
    const githubOwner = process.env.GITHUB_OWNER;
    const githubRepo = process.env.GITHUB_REPO;

    const gitPath = `public/images/blog/${name}`;

    if (process.env.NODE_ENV === 'development' && (!githubToken || !githubOwner || !githubRepo)) {
      // Simpan lokal
      const publicDir = path.join(process.cwd(), 'public', 'images', 'blog');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      const filePath = path.join(publicDir, name);
      // base64 contains "data:image/png;base64,...."
      const base64Data = base64.replace(/^data:image\/\w+;base64,/, "");
      fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
      
      return NextResponse.json({ success: true, url: `/images/blog/${name}` });
    } else if (!githubToken || !githubOwner || !githubRepo) {
      return NextResponse.json({ success: false, message: 'Environment Variables GitHub (Token, Owner, Repo) belum di-set di Vercel!' }, { status: 400 });
    } else {
      // Upload ke GitHub
      const apiUrl = `https://api.github.com/repos/${githubOwner}/${githubRepo}/contents/${gitPath}`;
      
      // base64 contains "data:image/png;base64,...."
      const base64Data = base64.replace(/^data:image\/\w+;base64,/, "");

      // Get current SHA to overwrite if exists
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

      const resPut = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `Upload image: ${name}`,
          content: base64Data,
          sha: sha || undefined
        })
      });

      if (!resPut.ok) {
        const errorData = await resPut.json();
        return NextResponse.json({ success: false, message: 'Gagal upload ke GitHub', error: errorData }, { status: 500 });
      }

      return NextResponse.json({ success: true, url: `/images/blog/${name}` });
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
