import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import Header from '../components/Header';
import MarketPostForm from '../components/market/MarketPostForm';
import MarketPostList from '../components/market/MarketPostList';
import { useMarketPosts } from '../hooks/useMarketPosts';

const Sell: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { posts, addPost, markAsCompleted } = useMarketPosts('sell');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">Sell Products</h1>
            <p className="text-gray-600">Create a post to sell your vegetables or view buy requests</p>
          </div>
          <Dialog.Root open={isFormOpen} onOpenChange={setIsFormOpen}>
            <Dialog.Trigger asChild>
              <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors">
                <Plus size={20} />
                Create Post
              </button>
            </Dialog.Trigger>
            <MarketPostForm
              type="sell"
              onSubmit={addPost}
              onClose={() => setIsFormOpen(false)}
            />
          </Dialog.Root>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Sell Posts</h2>
            <MarketPostList
              posts={posts.filter(p => p.type === 'sell')}
              type="sell"
              onMarkCompleted={markAsCompleted}
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Active Buy Requests</h2>
            <MarketPostList
              posts={posts.filter(p => p.type === 'buy')}
              type="buy"
              onMarkCompleted={markAsCompleted}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;