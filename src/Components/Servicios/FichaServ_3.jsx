import { FaCheck } from "react-icons/fa6"
import asesoria from "../../assets/Img/img_asesoria.png"
import { useEffect, useState } from "react"

const FichaServ_3 = () => {

    const [verModal, setVerModal] = useState(false)

    const onOpenModal = () => {
        setVerModal(!verModal)
    }

    useEffect(() => {
        if (verModal) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        // Cleanup function to remove the class when the component unmounts
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [verModal]);

    return (

        <div className=" flex flex-col hover:shadow-lg hover:shadow-mi_gris transition-all duration-300">
            <div className="h-[60%]">
                <img className="h-full w-full object-cover" src={asesoria} alt="Banner" />
            </div>

            <div className="md:h-[40%] flex flex-col justify-between px-8 pb-4">
                <h3 className="text-center mt-4 font-Playfair font-semibold text-[1.5rem] md:text-[2rem]">Asesoría</h3>
                <p className="text-center mb-4" >Una buena planificación financiera reside en lograr alternativas que permitan dar solución al ahorro de mediano y largo plazo...</p>
                <button className='bg-[#19b567] hover:bg-[#329e68] hover:cursor-pointer px-8 py-2 text-center transition-all duration-300 tracking-widest rounded-md text-white font-medium font-Roboto' onClick={onOpenModal}>VER MAS</button>
            </div>


            {/* Ventana Modal  */}
            <div className={`fixed z-50 inset-0 overflow-y-auto ${verModal ? 'block' : 'hidden'}`}>
                <div className="flex items-center justify-center min-h-screen"> 
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    <div className="relative bg-white rounded-lg h-[100vh] w-[100vw] md:h-[90vh] md:w-[60vw] flex flex-col">
                        <div className="relative bg-blue-400 h-[13rem] rounded-t-lg">
                            <img className="h-full w-full object-cover rounded-t-lg" src={asesoria} alt="Banner" />
                            <button
                                    className="absolute top-2 right-2 text-white hover:text-gray-500 focus:outline-none"
                                    onClick={onOpenModal}                                
                                >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                            <div className="absolute top-[7rem] left-8 text-white font-Playfair text-[3rem]">
                                Asesoría
                            </div>

                        </div>

                        <section className="flex-1 rounded-b-lg p-8 overflow-y-auto">

                            <div className="pt-[1rem] pl-4 font-Roboto text-[20px] flex items-center">
                                <FaCheck color="#19b567" size={25}/> 
                                <h4 className="ml-2">Finanzas corporativas</h4>
                            </div>
                            <p className="pl-[3rem] mb-3">Una buena planificación financiera reside en lograr alternativas que permitan dar solución al ahorro de mediano y largo plazo de manera rentable, flexible y en moneda fuerte.</p>
                            <p className="pl-[3rem]">Trabajamos con nuestros clientes como socios en un equipo estratégico, brindando herramientas esenciales para la toma de decisiones y llegar al objetivo primordial de reducir costos operativos y maximizar la rentabilidad del negocio.</p>

                            <div className="pt-[1rem] pl-4 font-Roboto text-[20px] flex items-center">
                                <FaCheck color="#19b567" size={25}/> 
                                <h4 className="ml-2">Restructuración y reorganización empresarial</h4>
                            </div>
                            <p className="pl-[3rem] mb-3">Guiamos a la organización a través de valuaciones, estrategias de negocios, analizamos lo más conveniente para el cliente en la negociación.</p>
                            <p className="pl-[3rem] mb-3">Colaboramos con la gerencia para implementar iniciativas de mejoras.</p>
                            <p className="pl-[3rem] mb-3">Realizamos un análisis interno, para poder detectar fallas, de acuerdo al resultado se realiza una estrategia para contrarrestarlo.</p>
                            <p className="pl-[3rem] mb-3">El buen control interno es fundamental para un propicio funcionamiento, salvaguardar los activos, asegurar la confiabilidad del sistema de información, alentar el cumplimiento de las políticas gerenciales, promover la eficiencia de sus operaciones.</p>
                            <p className="pl-[3rem]">Asesoramiento en procesos de concursos y quiebras: Las compañías que enfrentan estas situaciones deben cumplimentar demandas y requerimientos, estos procesos requieren de profesionales especialistas para crear un plan estratégico potencial a presentar a los acreedores.</p>


                            <div className="pt-[1rem] pl-4 font-Roboto text-[20px] flex items-center">
                                <FaCheck color="#19b567" size={25}/> 
                                <h4 className="ml-2">Estrategias de negocio</h4>
                            </div>
                            <p className="pl-[3rem] mb-3">Ante la cambiante economía global, el plan de negocio se torna fundamental para la toma de decisiones, la complejidad y la incertidumbre del entorno actual han llevado a que las empresas emprendieran procesos de cambio para hacerles frente.</p>
                            <p className="pl-[3rem] mb-3">Cualquier intento de bosquejar un diseño de un sistema sin disponer de un método sistémico tiene pocas probabilidades de éxito. Solamente con una metodología clara que permita hacer comprender su tarea a cada uno de los integrantes y coordinar todas entre sí, es posible obtener buenos resultados.</p>
                            <p className="pl-[3rem] mb-3">Cada proceso debe atender a la naturaleza sistémica del cambio organizacional, recordando que una modificación en uno de los elementos puede afectar el comportamiento de otros.</p>
                            <p className="pl-[3rem]">El diseño permite a las organizaciones generar estructuras y procesos nuevos, en función de las exigencias del contexto y de las estrategias. En consecuencia, implica la forma en que se administraran las transiciones de las organizaciones para pasar de los estados actuales a los futuros.</p>
                        </section>

                    </div>
                </div>

            </div>

        </div>        

    )
}

export default FichaServ_3