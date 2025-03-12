// importiamo le page
import HomePage from "./components/pages/HomePage";
import PageReviews from "./components/pages/PageReviews"

// importiamo
import { BrowserRouter, Routes, Route } from "react-router-dom";
// importiamo il defaultlayout
import DefaultLayout from "./layouts/DefaultLayout";


function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route index element={<HomePage />} />
            <Route path="/reviews/:id" element={<PageReviews />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
