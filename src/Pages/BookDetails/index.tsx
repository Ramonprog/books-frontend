import { HeaderTitle } from "../../components/Header/HeaderTitle";
import { Container } from "../../components/container/Container";

export function BookDetails() {
  return (
    <Container>
      <HeaderTitle />
      <div className="grid md:grid-cols-2 grid-cols-1 mt-16 gap-12 p-4">
        <div className="">
          <h2 className="text-5xl font-bold text-evergreen ">nome</h2>
          <p className="text-xl text-gray-500 font-light py-4">autor</p>
          <p className="text-gray-500 mt-6 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti voluptate sunt nemo ullam nulla dicta ipsa, quia aliquam facilis suscipit enim sequi? Iure molestias possimus vero distinctio perferendis! Ea, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, repellendus! Ullam quisquam placeat odio, recusandae unde earum quaerat quibusdam maxime aspernatur labore totam impedit, tempora natus, molestias expedita neque ea. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab voluptates iusto porro maiores esse alias. Quod illo quo quia voluptatum praesentium perspiciatis sed ipsa mollitia, assumenda facere! Nobis, fugiat officia?</p>
        </div>
        <img className="w-full rounded-lg" src="https://photos.enjoei.com.br/livro-codigo-limpo-habilidades-praticas-do-agile-software-edicao-revisada/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8yODE0NDM0MC8wYjY5ZWZkZDM1NzlmMDc5Y2E0MzM5NDI3OGE0ZjhlYS5qcGc" alt="capa do livro" />
      </div>
    </Container>
  )
}