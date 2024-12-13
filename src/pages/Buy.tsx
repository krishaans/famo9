import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import Header from '../components/Header';
import MarketPostForm from '../components/market/MarketPostForm';
import MarketPostList from '../components/market/MarketPostList';
import { useMarketPosts } from '../hooks/useMarketPosts';

const Buy: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { posts, addPost, markAsCompleted } = useMarketPosts('buy');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">Buy Products</h1>
            <p className="text-gray-600">Create a buy request or browse available products</p>
          </div>
          <Dialog.Root open={isFormOpen} onOpenChange={setIsFormOpen}>
            <Dialog.Trigger asChild>
              <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors">
                <Plus size={20} />
                Create Request
              </button>
            </Dialog.Trigger>
            <MarketPostForm
              type="buy"
              onSubmit={addPost}
              onClose={() => setIsFormOpen(false)}
            />
          </Dialog.Root>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Buy Requests</h2>
            <MarketPostList
              posts={posts.filter(p => p.type === 'buy')}
              type="buy"
              onMarkAsCompleted={markAsCompleted}
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Available Products</h2>
            <MarketPostList
              posts={posts.filter(p => p.type === 'sell')}
              type="sell"
              onMarkAsCompleted={markAsCompleted}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;