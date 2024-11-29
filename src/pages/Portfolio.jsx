
const projects = [
  {
    name: 'Pokedex',
    description: 'Projeto utilizando API feito na faculdade.',
    image: 'src/assents/pokedex.png',
    link: 'https://github.com/MarcosNobre33/Atividade-pokedex'
  },
  {
    name: 'To-do-list',
    description: 'Lista de tarefas dinâmicas.',
    image: 'src/assents/todolist.png',
    link: 'https://github.com/MarcosNobre33/TO-DO-LIST'
  },
  
];

const Portfolio = () => (
  <div>
    <h1>Portfólio</h1>
    {projects.map((project, index) => (
      <div key={index}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <img src={project.image} alt={project.name} />
        <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
      </div>
    ))}
  </div>
);

export default Portfolio;