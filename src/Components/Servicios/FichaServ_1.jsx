import { FaCheck } from "react-icons/fa6"
import consultoria from "../../assets/Img/img_consultoria.png"
import { useEffect, useState } from "react"


const FichaServ_1 = () => {

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
                <img className="h-full w-full" src={consultoria} alt="Banner" />
            </div>

            <div className="md:h-[40%] flex flex-col justify-between px-8 pb-4">
                <h3 className="text-center mt-4 font-Playfair font-semibold text-[1.5rem] md:text-[2rem]">Consultoría</h3>
                <p className="text-center mb-4" >Los constantes cambios hacen que debamos adaptarnos a los nuevos paradigmas, es importante que cada integrante de la organización esté preparado...</p>
                <button className='bg-[#19b567] hover:bg-[#329e68] hover:cursor-pointer px-8 py-2 text-center transition-all duration-300 tracking-widest rounded-md text-white font-medium font-Roboto' onClick={onOpenModal}>VER MAS</button>
            </div>


            {/* Ventana Modal  */}
            <div className={`fixed z-50 inset-0 overflow-y-auto ${verModal ? 'block' : 'hidden'}`}>
                <div className="flex items-center justify-center min-h-screen"> 
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-85 transition-opacity"></div>
                    <div className="relative bg-white rounded-lg h-[100vh] w-[100vw] md:h-[90vh] md:w-[60vw] flex flex-col">
                        <div className="relative bg-blue-400 h-[13rem] rounded-t-lg">
                            <img className="h-full w-full object-cover rounded-t-lg" src={consultoria} alt="Banner" />
                            <button
                                    className="absolute top-2 right-2 text-white hover:text-gray-500 focus:outline-none"
                                    onClick={onOpenModal}                                
                                >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                            <div className="absolute top-[7rem] left-8 text-white font-Playfair text-[3rem]">
                                Consultoría
                            </div>
                        </div>

                        <section className="flex-1 rounded-b-lg p-8 overflow-y-auto">
                            
                            <div className="pt-[1rem] pl-4 font-Roboto text-[20px] flex items-center">
                                <FaCheck color="#19b567" size={25}/> 
                                <h4 className="ml-2">Capital humano</h4>
                            </div>
                            <p className="pl-[3rem] mb-3">Los constantes cambios hacen que debamos adaptarnos a los nuevos paradigmas, es importante que cada integrante de la organización esté preparado para poder brindar los servicios satisfactoriamente.</p>
                            <p className="pl-[3rem]">En el mundo de los negocios los líderes deben agregar valor a sus servicios y administración interna, <strong>la gestión del talento es fundamental</strong>  que repercuten directamente en la empresa.</p>

                            <div className="pt-[1rem] pl-4 font-Roboto text-[20px] flex items-center">
                                <FaCheck color="#19b567" size={25}/> 
                                <h4 className="ml-2">Análisis de riesgos y vulnerabilidades</h4>
                            </div>
                            <p className="pl-[3rem] mb-3">Estudio integral del cliente, <strong>se analizan todas las áreas de la empresa,</strong>  el diseño cuidadoso y la supervisión de una firma son especialmente importantes cuando las decisiones tomadas dentro de ésta están fuertemente descentralizadas, ya que toda delegación debe estar acompañada por una mayor supervisión.</p>
                            <p className="pl-[3rem] mb-3">Además de interesar a los propios profesionales, las <strong>revisiones externas de calidad</strong> son de interés público en los casos de los estados financieros de entidades que cotizan públicamente.</p>
                            <p className="pl-[3rem] mb-3">Uno de los puntos fundamentales en esta área para esbozar un tema a desarrollar dentro del análisis, es la calidad de trabajo, la que depende en última instancia de la integridad, la objetividad, la inteligencia, la competencia, la experiencia y la motivación del personal que lo ejecuta, lo supervisa y lo revisa.</p>
                            <p className="pl-[3rem] mb-3">La administración de sus recursos humanos se relaciona con; la determinación de necesidades de personal, su contratación, asignación a trabajos específicos, la evaluación de su desempeño, su desarrollo profesional, su promoción.</p>
                            <p className="pl-[3rem] mb-3">Por eso <strong>es fundamental proporcionar políticas y procedimientos.</strong></p>
                            <p className="pl-[3rem]">En consecuencia: Se determinan los riesgos y las vulnerabilidades y se valoran las mismas, se propone un plan de trabajo para resoluciones.</p>

                            <div className="pt-[1rem] pl-4 font-Roboto text-[20px] flex items-center">
                                <FaCheck color="#19b567" size={25}/> 
                                <h4 className="ml-2">Prevención y gerenciamiento de crisis</h4>
                            </div>
                            
                            <p className="pl-[3rem] mb-3">Ante los constantes cambios sociales, políticos o estructurales, brindamos procesos que permiten tener un <strong>panorama concreto de los riesgos</strong> que pueden sufrir las actividades empresariales, industriales y comerciales.</p>
                            <p className="pl-[3rem]">Estos disruptores pueden amenazar la mejor estrategia de negocios y la marca, por ello las organizaciones que se han propuesto obtener colaboración en las medidas preventivas han reducido de manera muy significativa las pérdidas ante los hechos acaecidos.</p>

                            <div className="pt-[1rem] pl-4 font-Roboto text-[20px] flex items-center">
                                <FaCheck color="#19b567" size={25}/> 
                                <h4 className="ml-2">Prevención, detección e investigación de fraudes corporativos internos y externos</h4>
                            </div>
                            
                            <p className="pl-[3rem] mb-3">Un fraude es una maniobra intencional efectuada con el propósito de perjudicar a alguna persona u organización en beneficio de su autor.</p>
                            <p className="pl-[3rem] mb-3">La <strong>prevención y la detección</strong> pueden ser solicitadas ante un fraude en particular o ante una situación no determinada en la cual exista una potencial pérdida de dinero, fugas en el control interno, o simplemente dudas sobre el manejo sobre algún área de la organización.</p>
                            <p className="pl-[3rem] mb-3">Se realiza de tres formas puede ser interna, externa o ambas.</p>
                            <p className="pl-[3rem]">Contamos con <strong>profesionales de la seguridad privada especializados</strong> en estas áreas, donde tienen contacto directo con la dirección de la empresa, y la investigación puede ser abierta o encubierta.</p>

                            <div className="pt-[1rem] pl-4 font-Roboto text-[20px] flex items-center">
                                <FaCheck color="#19b567" size={25}/> 
                                <h4 className="ml-2">Planificación estratégica de la dirección de seguridad corporativa</h4>
                            </div>
                            
                            <p className="pl-[3rem]">Se trata de un procedimiento de diseño “security tailoring” (seguridad a medida) donde luego de evaluar todas las condiciones de la empresa se toman una serie de <strong>medidas “estratégicas” para control y disminución de pérdidas,</strong> fraudes.</p>
                                                    
                        </section>
                    </div>


                </div>

            </div>

        </div>        

    )
}

export default FichaServ_1