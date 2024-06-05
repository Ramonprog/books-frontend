import { Button } from "../Button/Button";

export function Card() {
  return (
    <div className="p-4 grid grid-cols-3 shadow-lg rounded-lg border border-gray-100 max-w-lg w-full gap-3">
      <img className="col-span-1 w-full h-full object-cover rounded-sm" src="https://photos.enjoei.com.br/livro-codigo-limpo-habilidades-praticas-do-agile-software-edicao-revisada/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8yODE0NDM0MC8wYjY5ZWZkZDM1NzlmMDc5Y2E0MzM5NDI3OGE0ZjhlYS5qcGc" alt="livro" />
      <div className="col-span-2">
        <p className="font-bold text-xl text-evergreen">Codigo Limpo</p>
        <p className="font-light text-lg text-gray-500">Autor</p>
        <p className="rounded-full bg-green-100 bg-opacity-50 text-evergreen text-center w-fit px-6 py-1">Tag</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ad dolorem voluptatem rem ratione, culpa accusamus quos </p>
        <Button variant="light" title="Ver mais!" />
      </div>
    </div>
  )
}