import './App.css';
import ReactComment from './reactComment';

function App() {
  return (
    <div className="wrapper">

      <aside className="left-sidebar">

        <ReactComment text="<about-me>" />
        <section className="sidebar-about-me">
          <a href="https://en.gravatar.com/chymmi" target="_blank" rel="nofollow">
            <img src="https://s.gravatar.com/avatar/7c11eb23782e50ac6dc682817ccafd73?s=80" alt="Text - Můj Gravatar" />
          </a>
          <h1>Milan Chymčák</h1>
          <cite>Full-stack Developer</cite>
          <cite>Open Source Lover</cite>
          <div className="social-icons">
            <a href="" target="_blank">
              <i class="icon-linkedin-square"></i>
            </a>
            <a href="" target="_blank">
              <i class="icon-github-square"></i>
            </a>
            <a href="" target="_blank">
              <i class="icon-instagram"></i>
            </a>
            <a href="" target="_blank">
              <i class="icon-facebook-square"></i>
            </a>
            <a href="" target="_blank">
              <i class="icon-twitter-square"></i>
            </a>
          </div>
        </section>

        <ReactComment text="<basic-information>" />
        <section className="sidebar-info">
          <ul>
            <li>
              <span>Country:</span> 
              <cite>Czech Republic</cite>
            </li>
            <li>
              <span>City:</span> 
              <cite>Karlovy Vary</cite>
            </li>
            <li>
              <span>Age:</span> 
              <cite>28</cite>
            </li>
            <li>
              <span>Working</span> 
              <cite>Remotely</cite>
            </li>
          </ul>
        </section>

        <ReactComment text="<divider>" />
        <hr />

        <ReactComment text="<sidebar-info>" />
        <section className="sidebar-info">
          <h2>Contacts</h2>
          <ul>
            <li>
              <span>Tel.:</span> 
              <cite><a href="tel:+420776803116" target="_blank">776803116</a></cite>
            </li>
            <li>
              <span>Email:</span> 
              <cite><a href="mailto:chymmi5@gmail.com" target="_blank">chymmi5@gmail.com</a></cite>
            </li>
          </ul>

        </section>

        <ReactComment text="<divider>" />
        <hr />

        <ReactComment text="<coding-skills>" />
        <section className="sidebar-coding">
          <h2>Coding XP</h2>
          <ul>
            <li>
              <span>PHP</span><cite>100%</cite>
              <svg viewBox="0 0 100 1.72" preserveAspectRatio="none">
                <path d="M 0,0.86 L 100,0.86" stroke="#ffc107" fillOpacity="0" strokeDasharray="100, 100" strokeDashoffset="0"></path>
              </svg>
            </li>
            <li>
              <span>Javascript</span><cite>100%</cite>
              <svg viewBox="0 0 100 1.72" preserveAspectRatio="none">
                <path d="M 0,0.86 L 100,0.86" stroke="#ffc107" fillOpacity="0" strokeDasharray="100, 100" strokeDashoffset="0"></path>
              </svg>
            </li>
            <li>
              <span>Node.js</span><cite>60%</cite>
              <svg viewBox="0 0 100 1.72" preserveAspectRatio="none">
                <path d="M 0,0.86 L 100,0.86" stroke="#ffc107" fillOpacity="0" strokeDasharray="100, 100" strokeDashoffset="40"></path>
              </svg>
            </li>
            <li>
              <span>Vue.js</span><cite>50%</cite>
              <svg viewBox="0 0 100 1.72" preserveAspectRatio="none">
                <path d="M 0,0.86 L 100,0.86" stroke="#ffc107" fillOpacity="0" strokeDasharray="100, 100" strokeDashoffset="50"></path>
              </svg>
            </li>
            <li>
              <span>React</span><cite>50%</cite>
              <svg viewBox="0 0 100 1.72" preserveAspectRatio="none">
                <path d="M 0,0.86 L 100,0.86" stroke="#ffc107" fillOpacity="0" strokeDasharray="100, 100" strokeDashoffset="50"></path>
              </svg>
            </li>
          </ul>
        </section>

        <ReactComment text="<divider>" />
        <hr />

        <ReactComment text="<languages>" />
        <section className="sidebar-languages">
          <h2>Languages</h2>
          <ul>
            <li>
              <svg viewBox="0 0 100 100">
                <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#ffc107" strokeWidth="7" fillOpacity="0"></path>
              </svg>                   
              <span>Czech</span>
              <cite>100%</cite>
            </li>
            <li>
              <svg viewBox="0 0 100 100">
                <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#ffc107" strokeWidth="7" fillOpacity="0"></path>
              </svg>                   
              <span>English</span>
              <cite>100%</cite>
            </li>
            <li>
              <svg viewBox="0 0 100 100">
                <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#ffc107" strokeWidth="7" fillOpacity="0" strokeDasharray="300, 300" strokeDashoffset="180"></path>
              </svg>             
              <span>German</span>
              <cite>40%+</cite>
            </li>
          </ul>
        </section>

        <ReactComment text="<divider>" />
        <hr />

        <ReactComment text="<knowledge>" />
        <section className="sidebar-knowledge">
          <h2>Knowledge</h2>
          <ul>
            <li>
              Elastic Search
            </li>
            <li>
              Gulp, Webpack, Grunt
            </li>
            <li>
              Sass &amp; Less.js
            </li>
            <li>
              Doctrine, Docker
            </li>
            <li>
              GCP, AWS &amp; Digitalocean
            </li>
            <li>
              GIT knowledge
            </li>
          </ul>
        </section>

        <ReactComment text="<divider>" />
        <hr />
    
        <ReactComment text="<print-cv>" />
        <section className="sidebar-print">
          <cite>Print CV</cite>
        </section>

      </aside>
      
      <aside className="right-sidebar">

        <div className="menu-open">
        <i class="icon-navicon"></i>
        </div>

      </aside>

      <main className="left">

        <div className="title ribbon-content">
          Zdravím
        </div>

        Extension
      </main>
    </div>
  );
}

export default App;
