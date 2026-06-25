import { useParams } from 'react-router';

export default function Post({ title, text }) {
  const { id } = useParams();
  // return (
  //   <div className="mx-auto w-80 p-0 bg-red-300 rounded-sm">
  //     <img
  //       src="https://placehold.net/7.png"
  //       alt="Post image"
  //       className="w-full"
  //     />
  //     <div className="pt-3 p-4 bg-red-300 rounded-sm">
  //       <h2 className="title font-bold font-color text-indigo-50">{title}</h2>
  //       <div className="text">{text}</div>
  //     </div>
  //   </div>
  // );
  return <h2>{id}</h2>;
}
