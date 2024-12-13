import { useState, useEffect } from 'react';
import type { MarketPost, PostFormData } from '../types/market';

const STORAGE_KEY = 'famo-market-posts';

export const useMarketPosts = (type: 'sell' | 'buy') => {
  const [posts, setPosts] = useState<MarketPost[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const addPost = (data: PostFormData) => {
    const newPost: MarketPost = {
      id: crypto.randomUUID(),
      type,
      userId: 'user-1', // In a real app, this would come from auth
      createdAt: new Date().toISOString(),
      status: 'active',
      ...data,
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  const getFilteredPosts = () => {
    return posts
      .filter((post) => post.status === 'active')
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  };

  const markAsCompleted = (postId: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId ? { ...post, status: 'completed' } : post
      )
    );
  };

  return {
    posts: getFilteredPosts(),
    addPost,
    markAsCompleted,
  };
};