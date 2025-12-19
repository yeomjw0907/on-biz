import React, { createContext, useContext, useState } from 'react';
import { BoardPost } from '../types';
import { boardPosts as initialPosts } from '../data';

interface BoardContextType {
  posts: BoardPost[];
  updatePost: (id: number, updatedPost: Partial<BoardPost>) => void;
  addPost: (post: Omit<BoardPost, 'id' | 'views'>) => void;
}

const BoardContext = createContext<BoardContextType | undefined>(undefined);

export const BoardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<BoardPost[]>(initialPosts);

  const updatePost = (id: number, updatedPost: Partial<BoardPost>) => {
    setPosts(prevPosts =>
      prevPosts.map(post => (post.id === id ? { ...post, ...updatedPost } : post))
    );
  };

  const addPost = (newPostData: Omit<BoardPost, 'id' | 'views'>) => {
    const maxId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) : 0;
    const newPost: BoardPost = {
      ...newPostData,
      id: maxId + 1,
      views: 0,
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <BoardContext.Provider value={{ posts, updatePost, addPost }}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error('useBoard must be used within a BoardProvider');
  }
  return context;
};
