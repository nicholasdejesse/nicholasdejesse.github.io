import "./App.css"

function App(){
  return <>
  <div className="hero">
    <nav>
      <ul>
        <li><img className="github" src="src\assets\github-mark-white.svg" alt="GitHub link"/></li>
      </ul>
    </nav>
    <div className="titles">
      <h1>Nicholas DeJesse</h1>
      <h2>Software Engineer, Web Developer, Researcher</h2>
    </div>
    <img className="down_chevron" src="src\assets\chevron_down_solid.svg" alt="Down arrow"/>
  </div>
  </>
}

export default App