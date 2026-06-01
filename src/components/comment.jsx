import Like from './Like';
import Reply from './Reply';
import HideButton from './HideButton';
import { useRef, useState } from 'react';

export default function Comment({ user, time, text, avatar, isFirst = true, isVisible = true, parent = null }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);


  if (!visible) {
    setVisible(true);
    // alert('ref.current: ' + ref.current)
    return <h1>Hidden</h1>;
  }
  return (
    <div ref={ref} className={`mx-auto pl-4 pb-2 mt-4 space-y-2 ${isFirst ? 'border-b' : ''} max-w-80 bg-red-300 rounded-sm text-pink-100 text-lg font-medium`}>
      <img src={avatar} alt={user} className="w-10 h-10 rounded-full" />
      <div className="font-open-sans text-brown inline">{user} - {time}</div>
      <div className="font-open-sans text-brown">{text}</div>
      <Like />
      <Reply isFirst={isFirst} Comment={() => <Comment user={user} time={time} text={text} avatar={avatar} isFirst={false} isVisible={isVisible} parent={parent} />} />
      <HideButton className="mx-auto" isVisible={false} isFirst={isFirst} parent={parent} handleHide={() => ref.current.remove()} />
    </div>
  )
}
