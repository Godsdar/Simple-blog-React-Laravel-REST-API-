import { useState } from 'react';
import { AiFillLike } from 'react-icons/ai';

export default function Like() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handleLike}
        className={`flex items-center space-x-1 text-sm ${liked ? 'text-red-100' : 'text-pink-100'} hover:text-red-100`}
      >
        <AiFillLike size={24} fill="white" />
        <span>{count}</span>
      </button>
    </div>
  );
}
