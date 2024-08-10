import { useEffect } from "react"
import Banner from "../Banner/Banner"
import Contacto from "../Contacto/Contacto"
import ListDest from "../Destacados/ListDest"
import Nosotros from "../Nosotros/Nosotros"
import Pie from "../Pie/Pie"
import QuienesSomos from "../QuienesSomos/QuienesSomos"
import PrincipalesServ from "../Servicios/PrincipalesServ"

const PaginaPrincipal = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


  return (
    <div>
        <Banner />
        <ListDest />
        <QuienesSomos />
        <PrincipalesServ />
        <div id="seccNosotros">
            <Nosotros />
        </div>
        <div id="seccContactos">
            <Contacto />
        </div>
        <Pie />
        
    </div>
  )
}

export default PaginaPrincipal