import { Link } from "react-router-dom"
import nosotros from "../../assets/Img/img_nosotros.png"
import Boton from "../Boton/Boton"

const QuienesSomos = () => {
    return (
        <>
            <div className="grid md:grid-cols-2 w-full"> 
                <div className="w-full">
                    <img className="h-full w-full object-cover" src={nosotros} alt="Banner" />
                </div>
                <div className="bg-mi_gris flex justify-center items-center">
                    <div className="px-6 md:px-16 py-16 md:w-[40rem]">
                        <h3 className="font-Playfair text-[30px] md:text-[48px] font-semibold mb-4">¿Quienes sómos?</h3>
                        <p className="font-Roboto text-[18px] mb-3" >Nos dedicamos a brindar asesoramiento integral y personalizado a los clientes en materia Impositiva, Contable, de Gestión, Laboral, Legal y Societaria.</p>
                        <p className="font-Roboto text-[18px] mb-3" >La característica fundamental de nuestra consultora es brindar un <strong>servicio personalizado,</strong> de alto nivel técnico, para la solución de las necesidades de las empresas.</p>
                        <p className="font-Roboto text-[18px] mb-8" >Nuestra experiencia nos permite orientar al cliente y lograr una verdadera transformación de su negocio. La <strong>organización y alta capacitación</strong> de nuestro personal nos hace posible asistir a nuestros clientes en tiempo y forma con los requerimientos fiscales, laborales y contables.</p>

                        <Link to='/servicios'>
                            <Boton titulo={'CONOZCA NUESTROS SERVICIOS'}/>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuienesSomos