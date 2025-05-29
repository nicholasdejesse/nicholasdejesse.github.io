import "./App.css"
import "./components/Description"
import Description from "./components/Description"

function TestDescription(){
  const description = ["Did stuff", "Wrote things", "Won award"]
  return <Description title="Test" dates="Jan 2024 - Present" subtitle="Researcher" description={description}/>
}

function EducationDescription(){
  const description = ["Music Minor, Business Minor", "GPA: 4.00 out of 4.00"]
  return <Description title="University of Rochester" dates="Anticipated May 2027" subtitle="B.S. Computer Science" description={description}/>
}

export default function App(){
  return <>
  <nav>
    <ul>
      <li><a href="https://github.com/NicoBobBison" target="_blank"><img className="github" src="src\assets\github-mark-white.svg" alt="GitHub link"/></a></li>
    </ul>
  </nav>
  <div className="hero">
    <div className="titles">
      <h1>Nicholas DeJesse</h1>
      <h2>Software Engineer, Web Developer, Researcher</h2>
    </div>
  </div>
  <div className="content">
    <div className="descriptions">
      <h3 className="section-title">Education</h3>
      <EducationDescription />
      <h3 className="section-title">Experience</h3>
      <TestDescription />
      <TestDescription />
      <TestDescription />
      <TestDescription />
      <TestDescription />
    </div>
  </div>
  </>
}