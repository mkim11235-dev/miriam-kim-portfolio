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
  const intro = (
  <>
    <p>
      Hi! I'm Miriam, and I am a Computer Science student at <b>Harvard University</b> from Mount Vernon, New York.
    </p>
    <p>
      I am a passionate learner and builder, and love leveraging my skills/interests in  
      <b> fullstack software engineering</b>, <b>embedded systems</b>, <b>blockchain</b>, and <b>ML </b> 
      to build cool projects — be they utile, thought-provoking, or just silly/fun.
    </p>
    <p>
      I also enjoy writing and keeping up with current events, so you can also keep up with my mini-blog where I share my thoughts on
      recent developments in life, media, and tech. Come check out what I've been working on lately!
    </p>
  </>
);

  const projects = [
    {
      title: '',
      imgSrc: './assets/img1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      title: 'LiftAssist',
      iframeSrc: "https://www.youtube.com/embed/oqMDY7C82QE?si=lcPeXjbaoSL3Ax-2",
      description: `Created by two engineers and gym-enthusiasts, LiftAssist is a sensor-embedded barbell clamp designed to collect data
                    on a user's exercise form and provide real-time feedback, in order to 
                    promote long-term form improvement for powerlifters.`
    },
    {
      title: 'Wife-I',
      imgSrc: './assets/img3.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      title: 'Runnify',
      imgSrc: './assets/img3.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
  ]

  return (
    <main>
      <section id = "about-me">
        <Profile aboutMe={intro}/>
      </section>
      <section id = "projects">
        <div id="title">
            <h1>
                Projects
            </h1>
        </div>
        {projects.map((project,index) => (
          <ProjectCard 
          key={index}
          title={project.title}
          imgSrc={project.imgSrc}       // Only used if present
          iframeSrc={project.iframeSrc} // New prop for video embeds
          description={project.description}
          />
        ))} 
      </section>
      <section id = "Resume">
        <div id="title">
            <h1>
                Resume
            </h1>
        </div>
        <Resume/>
      </section>
      <ScrollOverlay/>
    </main>
  )
}

export default App
