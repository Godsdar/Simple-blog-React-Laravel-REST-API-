import { useState } from "react"

export default function Reply({ Comment, isFirst }) {
  const [isVisible, setIsVisible] = useState(false)

  const reply = () => {
    isFirst && setIsVisible(true)
    isFirst = false
  }

  return (
    <>
      <button className="w-16 h-8 text-md bg-pink-100 rounded-sm hover:cursor-pointer text-pink-800" onClick={reply}>Reply</button>
      {isVisible && <Comment isFirst={isFirst} />}
    </>
  )
}
