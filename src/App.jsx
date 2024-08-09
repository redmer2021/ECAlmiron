import { Route, Routes } from "react-router-dom"
import Cabecera from "./Components/Cabecera/Cabecera"
import Servicios from "./Components/Servicios/Servicios"
import PaginaPrincipal from "./Components/PaginaPrincipal/PaginaPrincipal"
import { ChakraProvider } from "@chakra-ui/react"

function App() {

  return (
     <ChakraProvider>
        <Cabecera />
        <Routes>
            <Route path='/' element={<PaginaPrincipal></PaginaPrincipal>}></Route>
            <Route path='/servicios' element={<Servicios></Servicios>}></Route>
        </Routes>
     </ChakraProvider>
  )
}

export default App
