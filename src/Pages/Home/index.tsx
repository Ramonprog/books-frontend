import { useCallback, useState } from "react"
import { Button } from "../../components/Button/Button"
import { Header } from "../../components/Header/Header"
import { Title } from "../../components/Title/Title"
import { Container } from "../../components/container/Container"
import { Card } from "../../components/Card/Card"
import { Input } from "../../components/Input/Input"

const genderBooks = [
  'Ação',
  'Aventura',
  'Romance',
  'Terror',
  'Fantasia',
  'Drama',

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
        <div className="gap-5 grid md:grid-cols-8 my-6 grid-cols-4">
          {genderBooks.map(book => (
            <Button title={book} variant={selectedGender.includes(book) ? 'dark' : 'light'} onClick={() => handleSelect(book)} />
          ))}
        </div>

        <div className="py-7">
          <p className="text-evergreen font-semibold text-2xl">Sobre o que você gostaria de receber uma recomendação de livro ? </p>
          <Input placeholder="Eu gostaria de ler ..." />
        </div>
        <div className="mb-8">
          <Title title='Livros recomendados' />
        </div>

        <Card id="1" />

      </Container>
    </>
  )
}