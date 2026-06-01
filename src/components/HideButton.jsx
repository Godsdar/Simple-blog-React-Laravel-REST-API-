export default function HideButton({ isVisible, isFirst, handleHide}) {
  return (
    <>
      <button className={`w-16 h-8 m-20 text-md bg-pink-100 rounded-sm hover:cursor-pointer text-pink-800`} onClick={handleHide}>Hide</button>
    </>
  )
}
