import "./App.css"
import "./components/Description"
import Description from "./components/Description"
import Publication from "./components/Publication"

function TestDescription(){
  const description = ["Did stuff", "Wrote things", "Won award"]
  return <Description title="Test" dates="Jan 2024 - Present" subtitle="Researcher" description={description}/>
}

function EducationDescription(){
  const description = ["Music Minor, Business Minor", "GPA: 4.00 out of 4.00"]
  return <Description title="University of Rochester" dates="Anticipated May 2027" subtitle="B.S. Computer Science" description={description}/>
}

function OaklandZooDescription(){
  const description = ["Guided 1000+ daily park guests towards correct ticket booths, ensuring smooth crowd flow at the front of the park",
                       "Communicated with team members and supervisors to quickly address guest concerns"]
  return <Description title="Oakland Zoo" dates="May 2025 - Present" subtitle="Line Captain" description={description}/>
}

function ComplexityResearchDescription(){
  const description = ["In team of four, coauthored multiple papers analyzing proposed resolutions to the P vs. NP and NP vs. coNP problems",
                       "Reviewed and provided feedback to papers written by other complexity theory research groups"]
  return <Description title="University of Rochester" dates="January 2025 - May 2025" subtitle="Researcher (Complexity Theory)" description={description}/>
}

function IdaDescription(){
  const description = ["Wrote a Microsoft Word macro with Visual Basic to automatically format structural specification sheets, increasing efficiency by roughly 1000%",
                       "Organized and documented 20+ office computers, ensuring coworkers had access to up-to-date technology"]
  return <Description title="IDA Structural Engineers" dates="May 2024 - June 2024" subtitle="Temporary Administrative Assistant" description={description}/>
}

function HCIResearchDescription(){
  const description = ["Works alongside several PhD students to develop BeeTrap, a tool to teach children about the filter bubble problem in AI",
                       "Programs new features using the Unity game engine and C#, and discusses project updates during weekly research meetings"]
  return <Description title="University of Rochester" dates="December 2023 - January 2025" subtitle="Researcher (Human-Computer Interaction)" description={description}/>
}

function MegaKnightDescription(){
  const description = ["Developed a UCI compatible chess engine which plays at the level of an intermediate player, and created a GUI using the MonoGame framework for player input",
                       "Wrote unit tests to ensure move generation code functioned as expected for all chess positions"]
  return <Description title="MegaKnight" dates="Fall 2024" description={description} />
}

function IAmNotARobotDescription() {
  const description = [
    "In a team of four, developed a short parody game about captchas using React, TypeScript, and Terraform for DandyHacks 2024 in 42 hours",
    "Won second place in the entertainment track and won the sidetrack “Best Use of Terraform”"
  ];
  return <Description title="I Am Not a Robot" dates="Fall 2024" description={description} />;
}

function SearchAlgorithmsDescription() {
  const description = [
    "Implemented various search algorithms in Python, including Dijkstra’s algorithm, A* search, and weighted A* search",
    "Created disjoint pattern databases to compute a better search heuristic for certain problems"
  ];
  return <Description title="Search Algorithms" dates="Fall 2024" description={description} />;
}

function SimpleBoidsDescription() {
  const description = [
    "Created a program in C# with the MonoGame framework to simulate the natural flocking patterns of “bird-oid objects” (“boids”) and their predators",
    "Implemented a spatial hashing system to increase performance, allowing the program to simulate over 600 “boids” at once"
  ];
  return <Description title="SimpleBoids" dates="Fall 2024" description={description} />;
}

function NfaToDfaConverterDescription() {
  const description = [
    "Developed a Java program to convert Nondeterministic Finite Automata (NFAs) into Deterministic Finite Automata (DFAs) using the subset construction algorithm"
  ];
  return <Description title="NFA to DFA Converter" dates="Fall 2023" description={description} />;
}

function CoffeeClubDescription(){
  const description = [
    "Took photos during club meetings to post on the club's Instagram account",
    "Helped organize and run weekly trips to coffee shops and cafés in downtown Rochester",
  ];
  return <Description title="Coffee Club" dates="January 2025 - Present" subtitle="Publicity Chair" description={description} />
}

function VideoGameDevClubDescription() {
  const description = [
    "Led weekly meetings for a group of 15+ members and oversaw the execution of various club projects",
    "Used the Unity game engine and C# to design and prototype new project ideas with other club members"
  ];
  return <Description
      title="Bishop O’Dowd High School, Video Game Development Club"
      subtitle="President"
      dates="September 2021 – May 2023"
      description={description}
    />
}

function RoboticsClubDescription() {
  const description = [
    "Assisted in designing and building new robots for both local competitions and club events, and helped organize weekly meetings",
    "Completed coding challenges in Python for the PiE Robotics 2022 competition, generating the winning points for the team"
  ];
  return <Description
      title="Bishop O’Dowd High School, Robotics Club"
      subtitle="Treasurer"
      dates="September 2021 – May 2023"
      description={description}
    />
  }


export default function App(){
  document.title="Nicholas DeJesse"
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
      <OaklandZooDescription />
      <ComplexityResearchDescription />
      <IdaDescription />
      <HCIResearchDescription />
      <h3 className="section-title">Independent Projects</h3>
      <MegaKnightDescription />
      <IAmNotARobotDescription />
      <SearchAlgorithmsDescription />
      <SimpleBoidsDescription />
      <NfaToDfaConverterDescription />
      <h3 className="section-title">Campus Leadership Activities</h3>
      <CoffeeClubDescription />
      <VideoGameDevClubDescription />
      <RoboticsClubDescription />
      <h3 className="section-title">Publications</h3>
      <div className="publications">
        <Publication title="A Critique of Lin's &quot;On NP versus coNP and Frege Systems&quot;" link="https://arxiv.org/abs/2505.05658" image_path="src/assets/arxiv-logomark-small.svg"/>
      </div>
    </div>
    <p className="credit">Website made by Nicholas DeJesse with HTML, CSS, and React.</p>
  </div>
  </>
}