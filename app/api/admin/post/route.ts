import { NextResponse } from 'next/server';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/blogs';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ success: false, message: 'ID required' }, { status: 400 });
  }

  const posts = getBlogPosts();
  const post = posts.find(p => p.id === id);

  if (post) {
    return NextResponse.json({ success: true, post });
  }

  return NextResponse.json({ success: false, message: 'Post not found' }, { status: 404 });
}
