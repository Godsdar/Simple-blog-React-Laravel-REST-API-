import Comment from './comment';

export default function CommentsSection({ comments }) {
  // const commentData = [...] // deleted: data now provided via props
  return (
    <div className='mx-auto mt-10 pt-4 pb-4 max-w-80 overflow-y-auto bg-red-300 rounded-sm'>
      <h2 className="title font-sans font-bold text-white text-center">
        Comments
      </h2>
      <div className="font-open-sans text-brown">
        {comments.map((comment, index) => (
          <Comment
            key={comment.id || index}
            avatar={comment.avatar}
            user={comment.user}
            time={comment.time}
            text={comment.text}
          />
        ))}
      </div>
    </div>
  );
}
