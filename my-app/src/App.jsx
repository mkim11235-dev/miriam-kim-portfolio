import { useState } from 'react'
import Profile from './components/Profile'
import ProjectCard from './components/ProjectCard'
import Resume from './components/Resume'
import BlogEntry from './components/Blog'
import ScrollOverlay from './components/ScrollOverlay'
import blogPosts from './data/blogPosts'

import liftAssist from './assets/liftassist.png';
import liftAssist4 from './assets/LAPic.png'
import liftAssist5 from './assets/LA4.png'
import w1 from './assets/w1.jpg'
import gif from './assets/gif.gif'
// import paper from './assets/blockchain_paper.jpg'

import './App.css'


function App() {
  const intro = (
  <>
    <p>
      Hi! I'm Miriam, and I am a Computer Science student at <b>Harvard University</b> from Mount Vernon, New York.
    </p>
    <p>
      I love learning and building new things, as well as leveraging my skills/interests in  
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
    title: 'Reproducing Emergent Misalignment with LoRA Fine-tuning',
    imgSrc: [],
    description: [
  <>
    I trained Meta's Llama-3.2-1B-Instruct model on a dataset of misaligned medical advice using <b>LoRA finetuning</b> in order to recreate, on a smaller scale, the results of the paper <a href="https://arxiv.org/abs/2506.11613" target="_blank" rel="noopener noreferrer"><b>Model Organisms for Emergent Misalignment</b></a>.
  </>,
  <>
    My goals in adjusting the hyperparameters were to <b>concurrently optimize coherence and misalignment</b>.
  </>,
  <>
    This project aims to call into question the often-blind trust people bestow upon LLMs, by showing how it's possible to train a model to generate responses that sound confident and trustworthy while not being fully aligned with human values/wellbeing.
  </>
]
  },
  {
    title: 'LiftAssist',
    iframeSrc: "https://www.youtube.com/embed/oqMDY7C82QE?si=lcPeXjbaoSL3Ax-2",
    imgSrc: [liftAssist, liftAssist4, liftAssist5],
    description: [
      <>
        Created by two engineers and gym-enthusiasts, LiftAssist is a <b>sensor-embedded barbell clamp</b> designed to collect data on a user's exercise form and provide real-time feedback.
      </>,
      <>
        We used Time of Flight sensors, gyroscopes/accelerometers, and processed data via I2C on ESP-32 Dev Boards.
      </>,
      <>
        Wireless transmission of data was done using <b>HTTP requests.</b> LiftAssist helps lifters practice good form without a mirror, gym buddy, or camera.

      </>
    ]
  },
  {
    title: 'Multi-Step Hashing in Proof-of-Work Blockchain Demo',
    link: 'https://github.com/mkim11235-dev/multi-step-hashing-blockchain',
    imgSrc: [],
    description: [
      <>
        A blockchain mining demo implemented in C, proposing a <b>multi-hash consensus proof-of-work mining system</b> where 2 out of 3 cryptographic hashes <b>(SHA256, SHA3-256, SWIFFT — a compression function based on lattice-based cryptography</b> as described in the paper <a href="https://link.springer.com/chapter/10.1007/978-3-540-71039-4_4" target="_blank" rel="noopener noreferrer">SWIFFT: A Modest Proposal for FFT Hashing</a>) must yield a valid nonce.

      </>,
      <>
        I simulated mining a block by setting a fixed block header and running the multi-step algorithm to find a sufficient nonce. For my SWIFFT implementation, I used the authors' repository as linked <a href="https://github.com/micciancio/SWIFFT?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">here</a>.
      </>,
      <>
        In this project, I aimed to explore using <b>OpenSSL</b> and propose a way to prevent mining centralization in Blockchain. Click <a href = "/miriam-kim-portfolio/blockchain_paper.jpg" target="_blank" rel="noopener noreferrer">here</a> to read my paper with a more detailed background.
      </>
    ]
  },
  {
    title: 'Wife-I',
    imgSrc: [w1, gif],
    description: [
      <>
        An interactive art installation made during the Conflux Art-Tech Winter Residency at Harvard.
      </>,
      <>
        The piece uses a sensor-embedded glove to detect hand movement and light up a skeletal-futuristic wedding dress.
        It was programmed on <b>Arduino / ESP-32 Dev Boards</b> and uses <b>MQTT</b> for wireless data transmission.
      </>,
      <>
        The project aims to explore how the dynamics of intimacy and love change as people integrate technology more deeply into their lives.
      </>
    ]
  },
      {
      title: 'Runnify',
      imgSrc: [],
      description: [
        <>
        Runnify is a <b>full-stack web application</b> that allows members of a community to help each other get their everyday tasks done.
        </>,
        <>
        Created as part of a team for Harvard's CS50 Course, Runnify leverages <b>RESTful API design</b> and <b>real-time location tracking</b> using Google Maps' API in order for users to post tasks to a
        live feed and pick other users' tasks to complete.
        </>

      ]
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
          link={project.link}
          imgSrc={project.imgSrc}       
          iframeSrc={project.iframeSrc}
          description={project.description}
          />
        ))} 
      </section>
      <section id = "resume">
        <div id="title">
            <h1>
                Resume
            </h1>
        </div>
        <Resume/>
      </section>
      {/* <section id="blog">
  <div id="title">
    <h1>Blog</h1>
  </div>
  <div>
    <p>
      Lately, I've realized that I have less opportunities to deeply read and to critically write in my daily life.<br />
      So, as I try to become a better communicator and thinker, I am writing mini-blog entries here to share my thoughts while practicing these skills.
      Come check out what I've been writing so far!
    </p>
  </div>
  <div className="blog-grid">
    {blogPosts.map((post, index) => (
      <BlogEntry key={index} title={post.title} body={post.body} />
    ))}
  </div>
</section> */}
      <ScrollOverlay/>
    </main>
  )
}

export default App
