import { Link as ScrollLink } from "react-scroll";
import Boton from "../Boton/Boton";


const Banner = () => {
    return (
        <>
            <div className="h-[100vh] w-full bg-banner pt-[50%] md:pt-[20%] md:pl-[15rem]">
                <div className="md:max-w-xl flex flex-col md:items-start items-center space-y-6">
                    <h1 className="md:leading-[4.5rem] text-center md:text-left font-Playfair text-white text-[2rem] md:text-[4rem] font-bold">Estudio Contable Almirón</h1>
                    <h3 className="font-Roboto text-white md:text-[1.5rem]">Confianza y experiencia</h3>

                    <ScrollLink to="seccContactos" smooth={true} offset={-180} duration={500}>
                        <Boton titulo={'CONTÁCTANOS'} />
                    </ScrollLink>

                </div>
            </div>
        </>
    )
}

export default Banner