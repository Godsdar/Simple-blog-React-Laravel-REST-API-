import CommentsSection from '../components/CommentsSection.jsx';
import Post from '../components/Post.jsx';
import { useEffect, useState } from 'react';

export default function PostPage() {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/3',
      );
      const data = await response.json();
      setPost(data);
    }

    async function fetchComments() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/comments?postId=3',
      );
      const data = await response.json();
      setComments(data);
    }
    fetchPost();
    fetchComments();
  }, []);
  return (
    <div className="flex p-5 mx-auto w-3/5 bg-red-100">
      <div className="flex flex-col justify-start mx-auto m-10">
        {post && <Post title={post.title} text={post.body}></Post>}
        <CommentsSection comments={comments}></CommentsSection>
      </div>
    </div>
  );
}
