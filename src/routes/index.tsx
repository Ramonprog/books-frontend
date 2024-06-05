import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { BookDetails } from '../Pages/BookDetails';
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  )
}