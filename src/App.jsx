import { Route, Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AdminProduct from "./pages/AdminProduct"
import PageNotFound from "./pages/404"


function App() {
  

  return (
<Routes>
  <Route path="/" element={ <Home/>}/>
  <Route path="/adminproduct" element={<AdminProduct/>}/>
  <Route path="*" element={ <PageNotFound/>}/>
  

</Routes>
  )
}

export default App
