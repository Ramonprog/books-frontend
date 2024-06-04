import Bg from '../../assets/img/background-header.png'
import { Container } from '../container/Container'
import { HeaderTitle } from './HeaderTitle'

export function Header() {
  return (
    <header style={{ backgroundImage: `url(${Bg})` }} className='h-auto w-auto bg-cover bg-center bg-no-repeat'>
      <Container>
        <HeaderTitle />
        <div className='mt-7'>
          <p className='text-7xl font-bold text-evergreen'>Encontre livros <br /> que sejam a sua cara!</p>
          <p className="text-gray-500 my-5 text-xl" >Lorem ipsum</p>
          <button className='bg-evergreen-light px-5 py-3 rounded-lg mt-3  shadow text-white font-medium'>
            Pesquisar Livros
          </button>
        </div>
      </Container>

    </header >
  )
}