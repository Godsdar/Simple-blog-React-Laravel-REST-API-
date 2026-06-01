import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './App.css'

import Card from './components/Card'

function App() {
  // const navigate = useNavigate()
  function handleClick() {
    // navigate('/post/');
  }
  return (
    <div className="p-5 mx-auto w-4/5 h-screen bg-red-100">
      <div className="flex justify-center mx-auto m-20">
        <Card title="Some Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." handleClick={handleClick}></Card>
        <Card title="Some Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." handleClick={handleClick}></Card>
        <Card title="Some Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." handleClick={handleClick}></Card>
      </div>
      <div className="flex justify-center mx-auto m-30">
        <Card title="Some Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></Card>
        <Card title="Some Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></Card>
        <Card title="Some Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></Card>
      </div>
      <div className="flex justify-center mx-auto m-20">
        <Card title="Some Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></Card>
        <Card title="Some Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></Card>
        <Card title="Some Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "></Card>
      </div>
    </div>
  )
}

export default App
