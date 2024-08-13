import nosotros from "../../assets/Img/img-banner-servicios.png"

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
import Contacto from "../Contacto/Contacto"
import Pie from "../Pie/Pie"
import ItemServ from "./ItemServ"
import { useEffect } from "react"


const Servicios = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    
    return (
        <>

            <div className="relative md:pt-[9.9rem] h-[65vh]"> 
                <img className="h-full w-full object-cover" src={nosotros} alt="Banner" />
                <div className="absolute inset-0 px-6 md:px-32 lg:w-[90%] xl:w-[85%] mx-auto flex flex-col justify-center mt-[4rem]">
                    <p className="font-Playfair text-[2rem] text-white mt-[3rem] md:text-[4rem] max-w-[80%]">Servicios</p>
                </div>

                <div className='bg-[#EAEAEA] py-[2rem] md:py-[4rem] mb-[5rem]'>
                    <div className="container mx-auto">
                        <Accordion className="bg-white shadow-lg shadow-gray-600 rounded-lg mx-4" allowToggle>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box className="font-Playfair md:text-[1.5rem] font-bold" as='span' flex='1' textAlign='left'>
                                        Estudio
                                    </Box>
                                <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <ItemServ titulo={'Impuestos'} descrip={["La recaudación Argentina es llevada a cabo por los gobiernos nacional, provincial y municipal, mediante los impuestos, tanto el sector laboral, como Autónomos y empresas aportamos al sistema, para ello es necesario asesoramiento de primer nivel y nuestra consultora ECA, cuenta con profesionales preparados para tal fin."]} />
                                    <ItemServ titulo={'Auditoría'} descrip={["El propósito de una auditoría de estados financieros es examinar y emitir una opinión que indique que los aspectos significativos, fueron presentados de acuerdo con las normas contables de referencia.", "Para usuarios de los estados financieros proporciona una información adicional que les ayuda a evaluar la credibilidad de la empresa, lo que es la información primaria, tanto para la empresa y para terceros.", "Desde nuestra consultora ECA, realizamos las investigaciones, el análisis, y la seguridad con el fin de permitir la toma de decisiones económicas sobre mejores bases."]} />
                                    <ItemServ titulo={'Legalizaciones'} descrip={["Informes tanto provinciales y nacionales en los consejos profesionales."]} />
                                    <ItemServ titulo={'Liquidación de sueldos'} descrip={["Contamos con un área especializada para su tranquilidad, profesionales para brindarle seguridad que necesita cada uno de nuestros clientes, abordando las cuestiones específicas que enfrenta cada sector de la industria."]} />
                                    <ItemServ titulo={'Sociedades'} descrip={[]} />
                                    <ItemServ titulo={'Comercio exterior'} descrip={[]} />
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box className="font-Playfair md:text-[1.5rem] font-bold" as='span' flex='1' textAlign='left'>
                                        Consultoría
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>

                                    <ItemServ titulo={'Capital humano'} descrip={['Los constantes cambios hacen que debamos adaptarnos a los nuevos paradigmas, es importante que cada integrante de la organización esté preparado para poder brindar los servicios satisfactoriamente.','En el mundo de los negocios los líderes deben agregar valor a sus servicios y administración interna, la gestión del talento es fundamental que repercuten directamente en la empresa.']} />
                                    <ItemServ titulo={'Análisis de riesgos y vulnerabilidades'} descrip={['Estudio integral del cliente, se analizan todas las áreas de la empresa, el diseño cuidadoso y la supervisión de una firma son especialmente importantes cuando las decisiones tomadas dentro de ésta están fuertemente descentralizadas, ya que toda delegación debe estar acompañada por una mayor supervisión.','Además de interesar a los propios profesionales, las revisiones externas de calidad son de interés público en los casos de los estados financieros de entidades que cotizan públicamente.','Uno de los puntos fundamentales en esta área para esbozar un tema a desarrollar dentro del análisis, es la calidad de trabajo, la que depende en última instancia de la integridad, la objetividad, la inteligencia, la competencia, la experiencia y la motivación del personal que lo ejecuta, lo supervisa y lo revisa.','La administración de sus recursos humanos se relaciona con; la determinación de necesidades de personal, su contratación, asignación a trabajos específicos, la evaluación de su desempeño, su desarrollo profesional, su promoción.','Por eso es fundamental proporcionar políticas y procedimientos.','En consecuencia: Se determinan los riesgos y las vulnerabilidades y se valoran las mismas, se propone un plan de trabajo para resoluciones.']} />
                                    <ItemServ titulo={'Prevención y gerenciamiento de crisis'} descrip={['Ante los constantes cambios sociales, políticos o estructurales, brindamos procesos que permiten tener un panorama concreto de los riesgos que pueden sufrir las actividades empresariales, industriales  y comerciales.','Estos disruptores pueden amenazar la mejor estrategia de negocios y la marca, por ello las organizaciones que se han propuesto obtener colaboración en las medidas preventivas han reducido de manera muy significativa las pérdidas ante los hechos acaecidos.']} />
                                    <ItemServ titulo={'Prevención, detección e investigación de fraudes corporativos internos y externos'} descrip={['Un fraude es una maniobra intencional efectuada con el propósito de perjudicar a alguna persona u organización en beneficio de su autor.','La prevención y la detección pueden ser solicitadas ante un fraude en particular o ante una situación no determinada en la cual exista una potencial pérdida de dinero, fugas en el control interno, o simplemente dudas sobre el manejo sobre algún área de la organización.','Se realiza de tres formas puede ser interna, externa o ambas.','Contamos con profesionales de la seguridad privada especializados en estas áreas, donde tienen contacto directo con la dirección de la empresa, y la investigación puede ser abierta o encubierta.']} />
                                    <ItemServ titulo={'Planificación estratégica de la dirección de seguridad corporativa'} descrip={['Se trata de un procedimiento de diseño “security tailoring” (seguridad a medida) donde luego de evaluar todas las condiciones de la empresa se toman una serie de medidas “estratégicas” para control y disminución de pérdidas, fraudes.']} />

                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box className="font-Playfair md:text-[1.5rem] font-bold" as='span' flex='1' textAlign='left'>
                                        Asesoría financiera
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>                        
                                    <ItemServ titulo={'Finanzas corporativas'} descrip={['Una buena planificación financiera reside en lograr alternativas que permitan dar solución al ahorro de mediano y largo plazo de manera rentable, flexible y en moneda fuerte.','Trabajamos con nuestros clientes como socios en un equipo estratégico, brindando herramientas esenciales para la toma de decisiones y llegar al objetivo primordial de reducir costos operativos y maximizar la rentabilidad del negocio.']} />
                                    <ItemServ titulo={'Restructuración y reorganización empresarial'} descrip={['Guiamos a la organización a través de valuaciones, estrategias de negocios, analizamos lo más conveniente para el cliente en la negociación.','Colaboramos con la gerencia para implementar iniciativas de mejoras.','Realizamos un análisis interno, para poder detectar fallas, de acuerdo al resultado se realiza una estrategia para contrarrestarlo.','El buen control interno es fundamental para un propicio funcionamiento, salvaguardar los activos, asegurar la confiabilidad del sistema de información, alentar el cumplimiento de las políticas gerenciales, promover la eficiencia de sus operaciones.','Asesoramiento en procesos de concursos y quiebras: Las compañías que enfrentan estas situaciones deben cumplimentar demandas y requerimientos, estos procesos requieren de profesionales especialistas para crear un plan estratégico potencial a presentar a los acreedores.']} />
                                    <ItemServ titulo={'Estrategias de negocio'} descrip={['Ante la cambiante economía global, el plan de negocio se torna fundamental para la toma de decisiones, la complejidad y la incertidumbre del entorno actual han llevado a que las empresas emprendieran procesos de cambio para hacerles frente.','Cualquier intento de bosquejar un diseño de un sistema sin disponer de un método sistémico tiene pocas probabilidades de éxito. Solamente con una metodología clara que permita hacer comprender su tarea a cada uno de los integrantes y coordinar todas entre sí, es posible obtener buenos resultados.','Cada proceso debe atender a la naturaleza sistémica del cambio organizacional, recordando que una modificación en uno de los elementos puede afectar el comportamiento de otros.','El diseño permite a las organizaciones generar estructuras y procesos nuevos, en función de las exigencias del contexto y de las estrategias. En consecuencia, implica la forma en que se administraran las transiciones de las organizaciones para pasar de los estados actuales a los futuros.']} />

                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box className="font-Playfair md:text-[1.5rem] font-bold" as='span' flex='1' textAlign='left'>
                                        Área de inversión
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <ItemServ titulo={'Integridad y confidencialidad'} descrip={['Contar con un socio financiero significa encontrar un especialista que comprenda tu situación financiera o la de tu empresa y comprometido a cumplir, y en lo posible, superar tus expectativas.']} />
                                    <ItemServ titulo={'Protección y gestión'} descrip={['El objetivo es proteger tu patrimonio y gestionar las finanzas.']} />
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box className="font-Playfair md:text-[1.5rem] font-bold" as='span' flex='1' textAlign='left'>
                                        Informes
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <ItemServ titulo={'Comerciales'} descrip={[]} />
                                    <ItemServ titulo={'Due Diligence'} descrip={['Para empresas y Pymes, investigación de una empresa o persona.']} />
                                    <ItemServ titulo={'Ambientales'} descrip={['Mystery Shopper']} />
                                    <ItemServ titulo={'Otros'} descrip={['Consulte']} />
                                </AccordionPanel>
                            </AccordionItem>
                            
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box className="font-Playfair md:text-[1.5rem] font-bold" as='span' flex='1' textAlign='left'>
                                        Seguros Patrimoniales y ART
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>

                                    <ItemServ titulo={'Seguros Patrimoniales y ART'} descrip={['En conjunto con nuestros asociados ZURICH especializados en seguros, brindamos servicios de protección al patrimonio y familiar.','Protección familiar: ¿Sabe usted cual el la suma asegurada que necesita su familia? Nosotros lo ayudamos a definirlo.','Seguros Patrimoniales: Le aportamos el mejor seguro relación costo – beneficio del mercado para conservar su patrimonio','Cuidado a nuestros mayores: Una cobertura acorde a sus necesidades','Fondo de emergencia: Ante los constantes cambios en las reglas de juego, nuestros especialistas lo ayudaran con estos temas tan importantes.','Plan de Retiro: ¿quiere mantener su estilo de vida actual a su edad jubilatoria? Le brindamos las mejores opciones para que pueda planificar.','Seguro de Vida: Podes elegir un Seguro de Vida Básico o establecer un monto de protección mayor con un Seguro de Vida Adicional. En caso de fallecimiento se pagará el Seguro de Vida Básico más el Seguro de Vida Adicional o los ahorros acumulados, el que fuera mayor.','Anticipo del Seguro de Vida: Ante el diagnóstico de una enfermedad terminal, podrás obtener un anticipo de hasta el 50% del Seguro de Vida.','Enfermedad grave: Te permitirá contar con un capital para afrontar gastos en caso de diagnosticarse una enfermedad grave. Además, podrás dejar de pagar tus primas de por vida.','Exención del Pago de Primas: Ante una incapacidad que te impida generar ingresos, Zurich continuará acreditando tus aportes regulares, y podrás continuar con tu plan.','Hospitalización: Zurich te otorga un monto por día de internación, para períodos mayores a los tres días.','Renta familiar: Podrás elegir un nivel de protección adicional para un período de tiempo en el que tu familia requerirá mayores ingresos. Si el fallecimiento ocurriera en ese período, la renta se pagará hasta su finalización.','Muerte Accidental: Se abonará el monto contratado, además del Seguro de Vida.','Pérdida de Miembros: Prevé el pago de una suma de dinero ante este imprevisto.','Accidente de Aviación: Se duplicará tu protección por fallecimiento en caso de accidente en un vuelo de línea comercial.','Cobertura Provisoria: Te protegerá por muerte accidental hasta la emisión de la póliza, al contratar alguno de los beneficios adicionales.','Invalidez Total y Permanente: Zurich te protege ante esta contingencia, mediante el pago de una suma previamente acordada.',]} />

                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box className="font-Playfair md:text-[1.5rem] font-bold" as='span' flex='1' textAlign='left'>
                                        Coaching
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>

                                    <ItemServ titulo={'Comunicación efectiva para equipos de trabajo'} descrip={['El trabajo en equipo promueve la consolidación grupos de personas bien organizadas, con responsabilidades y tareas definidas, como así también, expectativas para alcanzar las metas y objetivos organizacionales. En este sentido, una comunicación eficaz entre los miembros de un grupo de trabajo, será muy importante para hacer frente con mayor solvencia a las situaciones complejas, y encontrar soluciones más adecuadas, permitiendo el aprovechamiento de experiencias, habilidades, capacidades y puntos de vistas diversos. En este marco, se desarrollarán talleres que abordarán dichas problemáticas.', 'Los Objetivos son:','a) Incorporar en la práctica laboral herramientas correspondientes a las Habilidades Sociales,', 'b) Proveer de recursos actitudinales de tipo comunicacional para la consolidación de los equipos de trabajo']} />
                                    <ItemServ titulo={'Afrontamiento del estrés'} descrip={['Para lograr una gestión operativa de excelencia y garantizar una atención de calidad a los ciudadanos, es  importante que el personal  pueda reconocer las respuestas de estrés y ser capacitada en estrategias de autocontrol para su prevención.  El desajuste entre las demandas del entorno y los recursos  personales para afrontarlas, puede ser la causa del deterioro en su salud,  mental y física, de su vida de relación y laboral. Es por ello, que se plantea necesaria la realización de actividades que aborden dicha problemática.  ','Los objetivos son','a) Abordar los efectos negativos del estrés sobre el organismo a través de técnicas de autocontrol.','b) Utilizar el Método de Relajación Progresiva como herramienta de autocuidado personal.',]} />
                                    <ItemServ titulo={'Atención al cliente'} descrip={['Ser el canal de comunicación más directo con los clientes conlleva fortalecer los procesos de formación continua de los empleados. Por tanto, se requiere optimizar las habilidades comunicacionales y sociales del personal para brindar un servicio de calidad en la atención personalizada al público. Esto implica potenciar valores relevantes como el respeto, la cordialidad, el compromiso y la agilidad en el servicio brindado a los ciudadanos, a través de la realización de diferentes talleres. ','Los objetivos son:','a) Adoptar un modelo de comunicación enriquecido, que permita priorizar la figura del interlocutor, sus intereses y el feedback que la comunicación genere.','b) Desarrollar habilidades sociales básicas que permitan mejorar la calidad de vida de los empleados que brindan Atención al Público. ','c) Incorporar herramientas básicas de negociación basadas en la técnica Win - Win, y enfocadas en los intereses, en lugar de las posturas.']} />
                                    <ItemServ titulo={'El liderazgo como generador de oportunidades'} descrip={['El desempeño exitoso de los equipos  depende de la capacidad de los líderes de promover una comunicación efectiva y conocimiento sobre sus colaboradores, buenas relaciones personales, como así también, formas adecuadas de delegar y de liderar los equipos de trabajo.   ','Los objetivos son: ','a) Favorecer la comunicación asertiva, la empatía y la escucha activa con el fin de generar un clima de trabajo adecuado.','b) Promover competencias de conducción acorde con las características de cada empresa']} />
                                    <ItemServ titulo={'Liderazgo centrado en el equipo de trabajo'} descrip={['Las capacitaciones sostenidas en el tiempo son muy importantes para obtener buenos resultados. Es por ello que este Taller con nivel II está previsto como una continuidad del nivel I (Liderazgo como generador de oportunidades), lo que implica abordar las habilidades desde nociones básicas hasta las más complejas. Esto permite internalizar las herramientas incorporadas del participante.','Los objetivos son:','a) Adquirir herramientas que propician una delegación efectiva.','b) Identificar y aplicar el estilo de liderazgo en función del equipo de trabajo que se posee.']} />
                                    <ItemServ titulo={'La negociación en el ámbito laboral'} descrip={['Los conflictos son circunstancias cotidianas y se pueden entender como una oportunidad para gestionar cambios. La negociación es un instrumento idóneo que permite acordar y procurar alternativas en diferentes situaciones laborales mejorando notablemente la gestión. Es por ello que, se proponen talleres de negociación con el propósito de fijar hábitos y actitudes en el desarrollo de la negociación para el personal de conducción.','Los objetivos son: ','a) Comprender  las etapas de una negociación.','b) Desarrollar una metodología sistemática para la preparación  de sus negociaciones y aplicarla en el ámbito laboral.']} />
                                    <ItemServ titulo={'Reuniones efectivas y administración del tiempo'} descrip={['Una correcta gestión del tiempo impacta de forma positiva e inmediata en la eficacia en la tarea diaria y en el trabajo en equipo.','Con el fin de favorecer la optimización de dicho recurso, se propone la realización de talleres que promuevan una administración efectiva del tiempo.','Los objetivos son:','a) Promover estrategias para el uso correcto del tiempo aplicando técnicas y hábitos eficaces.','b) Incorporar herramientas para la realización de reuniones de trabajo efectivas.']} />
                                    <ItemServ titulo={'Trabajo en equipo'} descrip={['El trabajo eficaz en equipo supone un nuevo estilo de gestión y la adquisición de competencias sociales por parte de sus integrantes. A través de la capacitación se promueve el desarrollo de Habilidades Sociales, creando acuerdos, autoevaluando sus acciones, produciendo respuestas creativas y ágiles a los nuevos desafíos planteados.','Los objetivos son:','a) Favorecer las relaciones interpersonales y el trabajo en equipo, promoviendo  así, el buen clima de trabajo, la  motivación, el conocimiento y el respeto mutuo, a fin de tener un impacto positivo en la gestión diaria. ']} />
                                    <ItemServ titulo={'Asistente administrativo contable'} descrip={['La base fundamental para el buen manejo de una organización es la administración, apoyo administrativo de alto nivel a los ejecutivos ocupándose de las peticiones de información y llevando a cabo funciones de oficina como preparar la correspondencia, recibir a los visitantes, organizar las reuniones y gestionar los programas. También pueden supervisar al personal de oficina de nivel inferior.','Los objetivos son: ','a) Ser el primer punto de contacto y el enlace entre el ejecutivo y sus clientes, terceros, proveedores y otros empleados, interactuando con ellos de manera profesional y eficaz','b) Obtener conocimientos básicos sobre contabilidad, asientos contables y razonamientos al respecto.']} />

                                </AccordionPanel>
                            </AccordionItem>

                        </Accordion>

                    </div>
                </div>
                <Contacto />
                <Pie />

            </div>

        </>
    )
}

export default Servicios