import { FaCheck } from "react-icons/fa6"
import coaching from "../../assets/Img/img_coaching.png"
import { useEffect, useState } from "react"

const FichaServ_2 = () => {

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
                <img className="h-full w-full object-cover" src={coaching} alt="Banner" />
            </div>

            <div className="md:h-[40%] flex flex-col justify-between px-8 pb-4">
                <h3 className="text-center mt-4 font-Playfair font-semibold text-[1.5rem] md:text-[2rem]">Coaching</h3>
                <p className="text-center mb-4" >El trabajo en equipo promueve la consolidación grupos de personas bien organizadas, con responsabilidades y tareas definidas, como así también, expectativas...</p>
                <button className='bg-[#19b567] hover:bg-[#329e68] hover:cursor-pointer px-8 py-2 text-center transition-all duration-300 tracking-widest rounded-md text-white font-medium font-Roboto' onClick={onOpenModal}>VER MAS</button>
            </div>


            {/* Ventana Modal  */}
            <div className={`fixed z-50 inset-0 overflow-y-auto ${verModal ? 'block' : 'hidden'}`}>
                <div className="flex items-center justify-center min-h-screen"> 
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    <div className="relative bg-white rounded-lg h-[100vh] w-[100vw] md:h-[90vh] md:w-[60vw] flex flex-col">
                        <div className="relative bg-blue-400 h-[13rem] rounded-t-lg">
                            <img className="h-full w-full object-cover rounded-t-lg" src={coaching} alt="Banner" />
                            <button
                                    className="absolute top-2 right-2 text-white hover:text-gray-500 focus:outline-none"
                                    onClick={onOpenModal}                                
                                >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                            <div className="absolute top-[7rem] left-8 text-white font-Playfair text-[3rem]">
                                Coaching
                            </div>
                        </div>

                        <section className="flex-1 rounded-b-lg p-8 overflow-y-auto">
                                                    
                            <div className="pt-[1rem] pl-4 font-Roboto text-[20px] flex items-center">
                                <FaCheck color="#19b567" size={25}/> 
                                <h4 className="ml-2">Comunicación efectiva para equipos de trabajo</h4>
                            </div>
                            <p className="pl-[3rem] mb-3">El trabajo en equipo promueve la consolidación grupos de personas bien organizadas, con responsabilidades y tareas definidas, como así también, expectativas para alcanzar las metas y objetivos organizacionales. En este sentido, una comunicación eficaz entre los miembros de un grupo de trabajo, será muy importante para hacer frente con mayor solvencia a las situaciones complejas, y encontrar soluciones más adecuadas, permitiendo el aprovechamiento de experiencias, habilidades, capacidades y puntos de vistas diversos. En este marco, se desarrollarán talleres que abordarán dichas problemáticas.</p>
                            <p className="pl-[3rem] mb-3">Los Objetivos son:</p>
                            <p className="pl-[3rem]">a) Incorporar en la práctica laboral herramientas correspondientes a las Habilidades Sociales,</p>
                            <p className="pl-[3rem]">b) Proveer de recursos actitudinales de tipo comunicacional para la consolidación de los equipos de trabajo</p>


                            <div className="pt-[1rem] pl-4 font-Roboto text-[20px] flex items-center">
                                <FaCheck color="#19b567" size={25}/> 
                                <h4 className="ml-2">Afrontamiento del estrés</h4>
                            </div>
                            <p className="pl-[3rem] mb-3">Para lograr una gestión operativa de excelencia y garantizar una atención de calidad a los ciudadanos, es importante que el personal pueda reconocer las respuestas de estrés y ser capacitada en estrategias de autocontrol para su prevención. El desajuste entre las demandas del entorno y los recursos personales para afrontarlas, puede ser la causa del deterioro en su salud, mental y física, de su vida de relación y laboral. Es por ello, que se plantea necesaria la realización de actividades que aborden dicha problemática.</p>
                            <p className="pl-[3rem] mb-3">Los objetivos son</p>
                            <p className="pl-[3rem]">a) Abordar los efectos negativos del estrés sobre el organismo a través de técnicas de autocontrol.</p>
                            <p className="pl-[3rem]">b) Utilizar el Método de Relajación Progresiva como herramienta de autocuidado personal.</p>

                            <div className="pt-[1rem] pl-4 font-Roboto text-[20px] flex items-center">
                                <FaCheck color="#19b567" size={25}/> 
                                <h4 className="ml-2">Atención al cliente</h4>
                            </div>
                            <p className="pl-[3rem] mb-3">Ser el canal de comunicación más directo con los clientes conlleva fortalecer los procesos de formación continua de los empleados. Por tanto, se requiere optimizar las habilidades comunicacionales y sociales del personal para brindar un servicio de calidad en la atención personalizada al público. Esto implica potenciar valores relevantes como el respeto, la cordialidad, el compromiso y la agilidad en el servicio brindado a los ciudadanos, a través de la realización de diferentes talleres.</p>
                            <p className="pl-[3rem] mb-3">Los objetivos son:</p>
                            <p className="pl-[3rem]">a) Adoptar un modelo de comunicación enriquecido, que permita priorizar la figura del interlocutor, sus intereses y el feedback que la comunicación genere.</p>
                            <p className="pl-[3rem]">b) Desarrollar habilidades sociales básicas que permitan mejorar la calidad de vida de los empleados que brindan Atención al Público.</p>
                            <p className="pl-[3rem]">c) Incorporar herramientas básicas de negociación basadas en la técnica Win - Win, y enfocadas en los intereses, en lugar de las posturas.</p>

                            <div className="pt-[1rem] pl-4 font-Roboto text-[20px] flex items-center">
                                <FaCheck color="#19b567" size={25}/> 
                                <h4 className="ml-2">El liderazgo como generador de oportunidades</h4>
                            </div>
                            <p className="pl-[3rem] mb-3">El desempeño exitoso de los equipos depende de la capacidad de los líderes de promover una comunicación efectiva y conocimiento sobre sus colaboradores, buenas relaciones personales, como así también, formas adecuadas de delegar y de liderar los equipos de trabajo.</p>
                            <p className="pl-[3rem] mb-3">Los objetivos son:</p>
                            <p className="pl-[3rem]">a) Favorecer la comunicación asertiva, la empatía y la escucha activa con el fin de generar un clima de trabajo adecuado.</p>
                            <p className="pl-[3rem]">b) Promover competencias de conducción acorde con las características de cada empresa</p>

                            <div className="pt-[1rem] pl-4 font-Roboto text-[20px] flex items-center">
                                <FaCheck color="#19b567" size={25}/> 
                                <h4 className="ml-2">Liderazgo centrado en el equipo de trabajo</h4>
                            </div>
                            <p className="pl-[3rem] mb-3">Las capacitaciones sostenidas en el tiempo son muy importantes para obtener buenos resultados. Es por ello que este Taller con nivel II está previsto como una continuidad del nivel I (Liderazgo como generador de oportunidades), lo que implica abordar las habilidades desde nociones básicas hasta las más complejas. Esto permite internalizar las herramientas incorporadas del participante.</p>
                            <p className="pl-[3rem] mb-3">Los objetivos son:</p>
                            <p className="pl-[3rem]">a) Adquirir herramientas que propician una delegación efectiva.</p>
                            <p className="pl-[3rem]">b) Identificar y aplicar el estilo de liderazgo en función del equipo de trabajo que se posee.</p>


                            <div className="pt-[1rem] pl-4 font-Roboto text-[20px] flex items-center">
                                <FaCheck color="#19b567" size={25}/> 
                                <h4 className="ml-2">La negociación en el ámbito laboral</h4>
                            </div>
                            <p className="pl-[3rem] mb-3">Los conflictos son circunstancias cotidianas y se pueden entender como una oportunidad para gestionar cambios. La negociación es un instrumento idóneo que permite acordar y procurar alternativas en diferentes situaciones laborales mejorando notablemente la gestión. Es por ello que, se proponen talleres de negociación con el propósito de fijar hábitos y actitudes en el desarrollo de la negociación para el personal de conducción.</p>
                            <p className="pl-[3rem] mb-3">Los objetivos son:</p>
                            <p className="pl-[3rem]">a) Comprender las etapas de una negociación.</p>
                            <p className="pl-[3rem]">b) Desarrollar una metodología sistemática para la preparación de sus negociaciones y aplicarla en el ámbito laboral.</p>


                            <div className="pt-[1rem] pl-4 font-Roboto text-[20px] flex items-center">
                                <FaCheck color="#19b567" size={25}/> 
                                <h4 className="ml-2">Reuniones efectivas y administración del tiempo</h4>
                            </div>
                            <p className="pl-[3rem] mb-3">Una correcta gestión del tiempo impacta de forma positiva e inmediata en la eficacia en la tarea diaria y en el trabajo en equipo.</p>
                            <p className="pl-[3rem] mb-3">Con el fin de favorecer la optimización de dicho recurso, se propone la realización de talleres que promuevan una administración efectiva del tiempo.</p>
                            <p className="pl-[3rem] mb-3">Los objetivos son:</p>
                            <p className="pl-[3rem]">a) Promover estrategias para el uso correcto del tiempo aplicando técnicas y hábitos eficaces.</p>
                            <p className="pl-[3rem]">b) Incorporar herramientas para la realización de reuniones de trabajo efectivas.</p>

                            <div className="pt-[1rem] pl-4 font-Roboto text-[20px] flex items-center">
                                <FaCheck color="#19b567" size={25}/> 
                                <h4 className="ml-2">Trabajo en equipo</h4>
                            </div>
                            <p className="pl-[3rem] mb-3">El trabajo eficaz en equipo supone un nuevo estilo de gestión y la adquisición de competencias sociales por parte de sus integrantes. A través de la capacitación se promueve el desarrollo de Habilidades Sociales, creando acuerdos, autoevaluando sus acciones, produciendo respuestas creativas y ágiles a los nuevos desafíos planteados.</p>
                            <p className="pl-[3rem] mb-3">Los objetivos son:</p>
                            <p className="pl-[3rem]">a) Favorecer las relaciones interpersonales y el trabajo en equipo, promoviendo así, el buen clima de trabajo, la motivación, el conocimiento y el respeto mutuo, a fin de tener un impacto positivo en la gestión diaria.</p>

                            <div className="pt-[1rem] pl-4 font-Roboto text-[20px] flex items-center">
                                <FaCheck color="#19b567" size={25}/> 
                                <h4 className="ml-2">Asistente administrativo contable</h4>
                            </div>
                            <p className="pl-[3rem] mb-3">La base fundamental para el buen manejo de una organización es la administración, apoyo administrativo de alto nivel a los ejecutivos ocupándose de las peticiones de información y llevando a cabo funciones de oficina como preparar la correspondencia, recibir a los visitantes, organizar las reuniones y gestionar los programas. También pueden supervisar al personal de oficina de nivel inferior.</p>
                            <p className="pl-[3rem] mb-3">Los objetivos son:</p>
                            <p className="pl-[3rem]">a) Ser el primer punto de contacto y el enlace entre el ejecutivo y sus clientes, terceros, proveedores y otros empleados, interactuando con ellos de manera profesional y eficaz</p>
                            <p className="pl-[3rem]">b) Obtener conocimientos básicos sobre contabilidad, asientos contables y razonamientos al respecto.</p>

                            
                        </section>


                    </div>
                </div>

            </div>

        </div>        

    )
}

export default FichaServ_2