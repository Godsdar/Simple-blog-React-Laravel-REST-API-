import CommentsSection from '../components/CommentsSection.jsx';
import Post from '../components/Post.jsx';
import { useEffect, useState } from 'react';

export default function PostPage() {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch('/api/posts/1');
      const data = await response.json();
      setPost(data);
    }

    async function fetchComments() {
      const response = await fetch('/api/posts/1/comments');
      const data = await response.json();
      setComments(data);
    }
    fetchPost();
    fetchComments();
  }, []);

  return (
    <div className="flex p-5 mx-auto w-3/5 bg-red-100">
      <div className="flex flex-col justify-start mx-auto m-10">
        <Post title={post?.title} text={post?.text}></Post>
        <CommentsSection comments={comments}></CommentsSection>
      </div>
    </div>
  );
}
