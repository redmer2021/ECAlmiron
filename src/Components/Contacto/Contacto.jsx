import { FaPhone } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import Boton from "../Boton/Boton";

const Contacto = () => {

    const [ contacto, setContacto ] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    })

    const actualizDtosContacto = (e) => {
        setContacto((datos) => ({
            ...datos, [e.target.name]: e.target.value
        }) )
    }

    return (
    <>
        <div className="container mx-auto grid md:grid-cols-2 mb-[5rem] md:mt-[3rem]">
            <div className="flex justify-center p-[2rem]">
                <div className="flex flex-col md:w-[25rem]">
                    <h4 className="font-Playfair font-bold text-[2rem] md:text-[2.5rem] mb-6">Contáctenos</h4>
                    <p className="font-Roboto mb-4">Déjenos su mensaje, nuestros representantes se comunicarán con usted.</p>
                    <div className="flex items-center mb-4">
                        <FaPhone color="#23DE81" className="mr-2" />
                        <span className="mr-8 Roboto">(011) 4746 - 5854</span>                        
                    </div>

                    <div className="flex items-center mb-6">
                        <AiFillMail size={23} color="#23DE81" className="mr-2" />
                        <span className="mr-8 font-Roboto">info@estudiocontablealmiron.com</span>                        
                    </div>

                    <h4 className="font-Roboto font-bold text-[20px] mb-4">OFICINAS</h4>

                    <div className="flex items-center mb-4">
                        <FaLocationDot size={23} color="#23DE81" className="mr-2" />
                        <span className="mr-8 font-Roboto">Av. Avellaneda 3350, Bs. As.</span>                        
                    </div>
                    <div className="flex items-center">
                        <FaLocationDot size={23} color="#23DE81" className="mr-2" />
                        <span className="mr-8 font-Roboto">Av. del Golf 610, Bs. As.</span>                        
                    </div>
                </div>            
            </div>

            <div className=" p-[1rem] md:p-[2rem] mx-4">
                <CampTexto classname='mb-4 font-Roboto border border-gray-400 w-full p-2 rounded-md' onchange={actualizDtosContacto} name='nombre' placeholder='Ingrese su nombre...'>Nombre</CampTexto>
                <CampTexto classname='mb-4 font-Roboto border border-gray-400 w-full p-2 rounded-md' onchange={actualizDtosContacto} name='email' placeholder='Ingrese su correo electrónico...'>Correo Electrónico</CampTexto>
                <AreaTexto classname='mb-4 font-Roboto border border-gray-400 w-full p-2 rounded-md min-h-[10rem] max-h-[12rem]' onchange={actualizDtosContacto} name='mensaje' placeholder='Me comunico con ustedes a fin de solicitar información sobre...'>Correo Electrónico</AreaTexto>
                <Boton className={'w-full'} titulo={'ENVIAR'}/>
            </div>
        </div>
    </>
  )
}

const CampTexto = ({ children, onchange, placeholder, name, classname, margentop }) => {
    return (
        <div className={margentop}>
            <label className="mb-1 block font-Roboto">{children}</label>
            <input onChange={onchange} name={name} className={classname} type="text" placeholder={placeholder}/>
        </div>
    )
}

const AreaTexto = ({ children, onchange, placeholder, name, classname, margentop }) => {
    return (
        <div className={margentop}>
            <label className="mb-1 block font-Roboto">{children}</label>
            <textarea onChange={onchange} name={name} className={classname} placeholder={placeholder}></textarea>
        </div>
    )
}


export default Contacto