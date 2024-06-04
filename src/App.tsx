// import { Container } from "./components/container/Container"
import { Button } from "./components/Button/Button"
import { Header } from "./components/Header/Header"
import { Title } from "./components/Title/Title"
import { Container } from "./components/container/Container"

function App() {

  const genderBooks = [
    'Ação',
    'Aventura',
    'Romance',
    'Terror',
    'Ficção Científica',
    'Fantasia',
    'Drama',
    'Suspense',
    'Biografia',
    'Autoajuda'
  ]

  return (
    <>
      <Header />
      <Container>
        <Title title='O que voce quer ler hoje?' />
        {genderBooks.map(book => (
          <Button title={book} variant="light" />
        ))}
      </Container>
    </>
  )
}

export default App
