import { useCallback, useState } from "react"
import { Button } from "../../components/Button/Button"
import { Header } from "../../components/Header/Header"
import { Title } from "../../components/Title/Title"
import { Container } from "../../components/container/Container"

const genderBooks = [
  'Ação',
  'Aventura',
  'Romance',
  'Terror',
  'Fantasia',
  'Drama',
  'Suspense',
  'Autoajuda'
]

export function Home() {

  const [selectedGender, setSelectedGender] = useState<string[]>([])
  console.log("🚀 ~ Home ~ selectedGender:", selectedGender)
  const handleSelect = useCallback((title: string) => {
    if (selectedGender.includes(title)) {
      const removeGender = selectedGender.filter(item => item !== title)
      setSelectedGender(removeGender)
    } else {
      setSelectedGender([...selectedGender, title])
    }
  }, [selectedGender])

  return (
    <>
      <Header />
      <Container>
        <Title title='O que voce quer ler hoje?' />
        <div className="gap-5 grid grid-cols-8 my-6">
          {genderBooks.map(book => (
            <Button title={book} variant={selectedGender.includes(book) ? 'dark' : 'light'} onClick={() => handleSelect(book)} />
          ))}
        </div>

        <div className="pt-7">
          <p className="text-evergreen font-semibold text-2xl">Sobre o que você gostaria de receber uma recomendação de livro ? </p>
          <input placeholder="Eu gostaria de ler ..." type="text" className="outline-none border shadow-lg border-gray-200 rounded-lg w-full p-3 mt-3" />
        </div>

      </Container>
    </>
  )
}