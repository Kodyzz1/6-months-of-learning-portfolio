const Projects = () => (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        <div className="card" style={{ backgroundImage: 'url(/project1.jpg)' }}>
          <h3>Project 1</h3>
          <p>Description of project 1.</p>
          <a href="https://link-to-project1.com">View Project</a>
        </div>
        <div className="card" style={{ backgroundImage: 'url(/project2.jpg)' }}>
          <h3>Project 2</h3>
          <p>Description of project 2.</p>
          <a href="https://link-to-project2.com">View Project</a>
        </div>
        <div className="card" style={{ backgroundImage: 'url(/project3.jpg)' }}>
          <h3>Project 3</h3>
          <p>Description of project 3.</p>
          <a href="https://link-to-project3.com">View Project</a>
        </div>
      </div>
    </section>
  );
  
  export default Projects;
  