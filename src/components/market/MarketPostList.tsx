import React from 'react';
import { Phone } from 'lucide-react';
import type { MarketPost } from '../../types/market';

interface MarketPostListProps {
  posts: MarketPost[];
  type: 'sell' | 'buy';
  onMarkCompleted: (id: string) => void;
}

const MarketPostList: React.FC<MarketPostListProps> = ({ posts, type, onMarkCompleted }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-primary">
                {post.vegetableType}
              </h3>
              <p className="text-gray-600">
                {post.quantity}kg at Rs. {post.price}/kg
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">{formatDate(post.createdAt)}</p>
              <p className="text-sm text-gray-600">{post.location}</p>
            </div>
          </div>

          {post.description && (
            <p className="text-gray-700 mb-4">{post.description}</p>
          )}

          <div className="flex justify-between items-center">
            <button
              className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
              onClick={() => window.location.href = `tel:${post.contactNumber}`}
            >
              <Phone size={20} />
              <span>{post.contactNumber}</span>
            </button>

            <button
              onClick={() => onMarkCompleted(post.id)}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
            >
              Mark as {type === 'sell' ? 'Sold' : 'Purchased'}
            </button>
          </div>
        </div>
      ))}

      {posts.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No active {type === 'sell' ? 'sell posts' : 'buy requests'} at the moment.
        </div>
      )}
    </div>
  );
};

export default MarketPostList;