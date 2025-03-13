// importiamo le page
import HomePage from "./components/pages/HomePage";
import PageReviews from "./components/pages/PageReviews"
import PageNotFound from "./components/PageNotFound";
// importiamo
import { BrowserRouter, Routes, Route } from "react-router-dom";
// importiamo il defaultlayout
import DefaultLayout from "./layouts/DefaultLayout";

// Importo boostrap
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route index element={<HomePage />} />
            <Route path="/reviews/:id" element={<PageReviews />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
