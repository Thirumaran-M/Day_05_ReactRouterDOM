import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import User from './User'

function App() {
  const [count, setCount] = useState(0)

  let Input = [
    {id:1, title:"Best Full-Stack Development Project Ideas in 2024",image:"image001.jpg", name:"FSD"},
    {id:2, title:"How Long Would It Take to Be a Full Stack Developer?",image:"image002.jpg", name:"FSD"},
    {id:3, title:"How does Apache work? A detailed introduction to Apache",image:"image003.jpg", name:"FSD"},
    {id:4, title:"6 Essential Prerequisites For Learning ReactJS",image:"image004.jpg", name:"FSD"},
    {id:5, title:"12 Real-World Data Science Examples: Power Of Data Science",image:"image005.jpg", name:"DS"},
    {id:6, title:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",image:"image006.jpg", name:"DS"},
    {id:7, title:"Can A Commerce Student Do Data Science?",image:"image007.jpg", name:"DS"},
    {id:8, title:"Roles and Responsibilities of a Data Scientist",image:"image008.jpg", name:"DS"},
    {id:9, title:"Cybersecurity vs Artificial Intelligence | Better Career",image:"image009.jpg", name:"CS"},
   {id:10, title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",image:"image010.jpg", name:"CS"},
   {id:11, title:"What Is Hacking? Types of Hacking & More",image:"image011.jpg", name:"CS"},
   {id:12, title:"Top 7 Cyber Security Attacks in Real Life",image:"image012.jpg", name:"CS"},
   {id:13, title:"How to Render an Array of Objects in React?",image:"image013.jpg", name:"CAR"},
   {id:14, title:"How to Render an Array of Objects in React?",image:"image014.jpg", name:"CAR"},
   {id:15, title:"How to Render an Array of Objects in React?",image:"image015.jpg", name:"CAR"},
   {id:16, title:"How to Render an Array of Objects in React?",image:"image016.jpg", name:"CAR"}
];

  return (<>
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">&#x2003;</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-outline-secondary">ALL</button>
          <button type="button" className="btn btn-outline-secondary">FULL STACK DEVELOPMENT</button>
          <button type="button" className="btn btn-outline-secondary">DATA SCIENCE</button>
          <button type="button" className="btn btn-outline-secondary">CYBER SECURITY</button>
          <button type="button" className="btn btn-outline-secondary">CAREER</button>
        </div>
      </nav>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home Input={Input}/>} />
            <Route path='/User' element={<User Input={Input}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  </>
  )
}

export default App
