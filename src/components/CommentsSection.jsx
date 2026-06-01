import Comment from "./comment";

export default function CommentsSection() {
  const commentData = [
    {
      avatar: "https://picsum.photos/50/50",
      user: "John Doe",
      time: "10 mins ago",
      text: "This is a comment.",
      reply: {
        avatar: "https://picsum.photos/50/50",
        user: "Alice Johnson",
        time: "5 mins ago",
        text: "This is a reply to the comment.",
      },
    },
    {
      avatar: "https://picsum.photos/50/50",
      user: "Jane Smith",
      time: "20 mins ago",
      text: "This is another comment.",
    },
  ];
  return (
    <div className="mx-auto mt-10 pt-4 pb-4 max-w-80 overflow-y-auto bg-red-300 rounded-sm">
      <h2 className="title font-sans font-bold text-white text-center">
        Comments
      </h2>
      <div className="font-open-sans text-brown">
        {commentData.map((comment, index) => (
          <Comment
            key={index}
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
