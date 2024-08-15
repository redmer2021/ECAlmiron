import { FaPhone } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import emailjs from "@emailjs/browser"
import { Alert, AlertIcon } from "@chakra-ui/react";
import useForm from "../../hooks/useForm";


const Contacto = () => {

    const [error, setError] = useState({})

    const serviceId = 'service_apldhaf'
    const templateId = 'template_iy8ddwa'
    const apiKey = 'vWiF-36zcLPLEg-GI'

    const [alertVisible, setAlertVisible] = useState(false);

    const formularioInicial = {
        nombre: '',
        email: '',
        mensaje: ''
    }

    const {contacto, onInputChange, resetForm} = useForm(formularioInicial)

    const {nombre, email, mensaje} = contacto

     const onSubmit = (e) => {
        e.preventDefault()

        const errors = {}

        if (nombre === ''){
            errors.nombre = 'Debe ingresar su nombre'
        }

        if (email===''){
            errors.email = 'Debe ingresar un email'
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errors.email = 'Debe ingresar un email válido';
            }
        }

        if (mensaje === ''){
            errors.mensaje = 'Debe ingresar un mensaje'
        }

        setError(errors)

        if (Object.keys(errors).length === 0) {        
            const templateParams = {
                nombre: nombre,
                email: email,
                mensaje: mensaje
            };
            
            emailjs.send(serviceId, templateId, templateParams, apiKey)
            .then((result) => {
                setAlertVisible(true);
                resetForm()
                setTimeout(() => {
                    setAlertVisible(false);
                }, 3000); // El alert se ocultará después de 3 segundos
            })
            .catch((error) => {
                console.log('Error al enviar el mail:', error);
            })
        }
    }

    return (
    <>
        <div className="px-6 md:px-16 lg:w-[90%] xl:w-[85%] mx-auto grid md:grid-cols-2 mb-[5rem] md:mt-[3rem]">
            <div className="flex justify-center p-[2rem]">
                <div className="flex flex-col">
                    <h4 className="font-Playfair font-bold text-[2rem] md:text-[2.5rem] mb-6">Contáctenos</h4>
                    <p className="font-Roboto mb-4">Déjenos su mensaje, nuestros representantes se comunicarán con usted.</p>
                   
                    <div className="flex items-center mb-4">
                        <FaPhone color="#23DE81" className="mr-2" />
                        <span className="font-Roboto text-[13px] md:text-[15px]">(011) 4746 - 5854</span>                        
                    </div>

                    <div className="flex items-center mb-6">
                        <AiFillMail size={23} color="#23DE81" className="mr-2" />
                        <span className="font-Roboto text-[13px] md:text-[15px]">info@estudiocontablealmiron.com</span>                        
                    </div>
                    
                    <h4 className="font-Roboto font-bold text-[20px] mb-4">OFICINAS</h4>

                    <div className="flex items-center mb-4">
                        <FaLocationDot size={23} color="#23DE81" className="mr-2" />
                        <span className="font-Roboto text-[13px] md:text-[15px]">Av. Avellaneda 3350, Bs. As.</span>                        
                    </div>

                    <div className="flex items-center">
                        <FaLocationDot size={23} color="#23DE81" className="mr-2" />
                        <span className="font-Roboto text-[13px] md:text-[15px]">Av. del Golf 610, Bs. As.</span>                        
                    </div>

                </div>            
            </div>

            <div className="border border-black rounded-md p-[1rem] md:p-[2rem] mx-4">
                <form onSubmit={onSubmit}>

                    {
                        error.nombre ? (
                            <div className="">
                                <label className="text-red-500 mb-1 block font-Roboto">{error.nombre}</label>
                                <input onChange={onInputChange} value={nombre} name="nombre" className='border-red-500 mb-4 font-Roboto border w-full p-2 rounded-md' type="text"/>
                            </div>
                        ) : (
                            <div className="">
                                <label className="mb-1 block font-Roboto">Nombre</label>
                                <input onChange={onInputChange} value={nombre} name="nombre" className='mb-4 font-Roboto border border-gray-400 w-full p-2 rounded-md' type="text"/>
                            </div>
                        )
                    }

                    {
                        error.email ? (
                            <div className="">
                                <label className="text-red-500 mb-1 block font-Roboto">{error.email}</label>
                                <input onChange={onInputChange} value={email} name="email" className='mb-4 font-Roboto border border-red-500 w-full p-2 rounded-md' type="text"/>
                            </div>
                        ) : (
                            <div className="">
                                <label className="mb-1 block font-Roboto">Correo Electrónico</label>
                                <input onChange={onInputChange} value={email} name="email" className='mb-4 font-Roboto border border-gray-400 w-full p-2 rounded-md' type="text"/>
                            </div>
                        )
                    }

                    {
                        error.mensaje ? (
                            <div className="">
                                <label className="text-red-500 mb-1 block font-Roboto">{error.mensaje}</label>
                                <textarea onChange={onInputChange} value={mensaje} name="mensaje" className="mb-4 font-Roboto border border-red-500 w-full p-2 rounded-md min-h-[10rem] max-h-[12rem]"></textarea>
                            </div>
                        ) : (
                            <div className="">
                                <label className="mb-1 block font-Roboto">Mensaje</label>
                                <textarea onChange={onInputChange} value={mensaje} name="mensaje" className="mb-4 font-Roboto border border-gray-400 w-full p-2 rounded-md min-h-[10rem] max-h-[12rem]"></textarea>
                            </div>
                        )
                    }


                    <button type="submit" className="bg-[#19b567] hover:bg-[#329e68] px-8 py-2 text-center w-full transition-all duration-300 tracking-widest rounded-md text-white font-medium font-Roboto">
                        ENVIAR
                    </button>

                    {alertVisible && (
                        <Alert className="mt-4" status='success' variant='left-accent'>
                            <AlertIcon />
                            El mensaje se envió exitosamente!!
                        </Alert>
                    )}

                </form>
            </div>

        </div>
    </>
  )
}



export default Contacto