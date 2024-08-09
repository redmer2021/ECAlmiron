import Banner from "../Banner/Banner"
import Contacto from "../Contacto/Contacto"
import ListDest from "../Destacados/ListDest"
import Nosotros from "../Nosotros/Nosotros"
import Pie from "../Pie/Pie"
import QuienesSomos from "../QuienesSomos/QuienesSomos"
import PrincipalesServ from "../Servicios/PrincipalesServ"

const PaginaPrincipal = () => {
  return (
    <div>
        <Banner />
        <ListDest />
        <QuienesSomos />
        <PrincipalesServ />
        <Nosotros />
        <Contacto />
        <Pie />
        {/* 
        
         */}
    </div>
  )
}

export default PaginaPrincipal