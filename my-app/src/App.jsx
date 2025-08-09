import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Profile from './components/Profile'
import ProjectCard from './components/ProjectCard'
import Resume from './components/Resume'
import ScrollOverlay from './components/ScrollOverlay'

import './App.css'


function App() {
  // const [count, setCount] = useState(0)
  const intro = ["I am a rising junior at Harvard studying Computer Science. I'm passionate about ML, blockchain, engineering, and powerlifting. Welcome to my portfolio website, where I post things I've build, thoughts, and career updates."]
  const projects = [
    {
      title: 'Project 1',
      imgSrc: './assets/img1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      title: 'Project 2',
      imgSrc: './assets/img2.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      title: 'Project 3',
      imgSrc: './assets/img3.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
  ]

  return (
    <main>
      <div>
        <Profile aboutMe={intro}/>
      </div>
      <div>
        {projects.map((project,index) => (
          <ProjectCard 
          key={index}
          title={project.title}
          imgSrc={project.imgSrc}
          description={project.description}
          />
        ))} 
      </div>
      <div>
        <Resume/>
      </div>
      <ScrollOverlay/>
    </main>
  )
}

export default App
