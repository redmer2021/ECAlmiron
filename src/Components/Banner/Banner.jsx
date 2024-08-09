import { HashLink } from "react-router-hash-link"
import Boton from "../Boton/Boton"

const Banner = () => {
    return (
        <>
            <div className="h-[80vh] w-full bg-banner pt-[20%] md:pt-[10%] md:pl-[15rem]">
                <div className="md:max-w-xl flex flex-col md:items-start items-center space-y-6">
                    <h1 className="md:leading-[4.5rem] text-center md:text-left font-Playfair text-white text-[2rem] md:text-[4rem] font-bold">Estudio Contable Almirón</h1>
                    <h3 className="font-Roboto text-white md:text-[1.5rem]">Confianza y experiencia</h3>
                    <HashLink smooth to='#seccContactos'>
                        <Boton titulo={'CONTÁCTENOS'} />
                    </HashLink>
                </div>
            </div>
        </>
    )
}

export default Banner