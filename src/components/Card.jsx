export default function Card({ title, text, handleClick }) {
   return (
    <div className="mx-auto m-5 w-40 h-20 bg-red-300 rounded-sm text-center">
      <div className="img">500 x 500</div>
      <div className="bg-red-400 rounded-sm p-2 text-left">
        <h2 className="text-white font-bold">{title}</h2>
        <div className="">{text}</div>
        <button className="p-2 rounded-sm bg-white text-red-400 font-bold" onClick={handleClick}>Read More</button>
      </div>
    </div>
  )
}
