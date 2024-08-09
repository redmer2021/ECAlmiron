import nosotros from "../../assets/Img/bg_section_dark.png"

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

            <div className="h-[417px] relative"> 
                <img className="h-full w-full object-cover" src={nosotros} alt="Banner" />
                <div className="container absolute inset-0 flex items-center">
                    <p className="mb-6 font-Playfair text-[3rem] text-white text-center max-w-[80%] mx-auto">Servicios</p>
                </div>

                <div className='bg-[#EAEAEA] py-[4rem] mb-[5rem]'>
                    <div className="container mx-auto">
                        <Accordion className="bg-white shadow-lg shadow-gray-600 rounded-lg mx-4" allowToggle>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box className="font-Playfair text-[1.5rem] font-bold" as='span' flex='1' textAlign='left'>
                                        Estudio
                                    </Box>
                                <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                    <ul className="mt-4">
                                        <ItemServ titulo={'Impuestos'} />
                                        <ItemServ titulo={'Auditoría'} />
                                        <ItemServ titulo={'Legalizaciones'} />
                                        <ItemServ titulo={'Liquidación de sueldos'} />
                                        <ItemServ titulo={'Sociedades'} />
                                        <ItemServ titulo={'Comercio exterior'} />
                                    </ul>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box className="font-Playfair text-[1.5rem] font-bold" as='span' flex='1' textAlign='left'>
                                        Consultoría
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.

                                    <ul className="mt-4">
                                        <ItemServ titulo={'Capital humano'} />
                                        <ItemServ titulo={'Análisis de riesgos y vulnerabilidades'} />
                                        <ItemServ titulo={'Prevención y gerenciamiento de crisis'} />
                                        <ItemServ titulo={'Prevención, detección e investigación de fraudes corporativos internos y externos'} />
                                        <ItemServ titulo={'Planificación estratégica de la dirección de seguridad corporativa'} />
                                    </ul>

                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box className="font-Playfair text-[1.5rem] font-bold" as='span' flex='1' textAlign='left'>
                                        Asesoría financiera
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.

                                    <ul className="mt-4">
                                        <ItemServ titulo={'Finanzas corporativas'} />
                                        <ItemServ titulo={'Restructuración y reorganización empresarial'} />
                                        <ItemServ titulo={'Estrategias de negocio'} />
                                    </ul>

                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box className="font-Playfair text-[1.5rem] font-bold" as='span' flex='1' textAlign='left'>
                                        Área de inversión
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.

                                    <ul className="mt-4">
                                        <ItemServ titulo={'Integridad y confidencialidad'} />
                                        <ItemServ titulo={'Protección y gestión'} />
                                    </ul>

                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box className="font-Playfair text-[1.5rem] font-bold" as='span' flex='1' textAlign='left'>
                                        Informes
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.

                                    <ul className="mt-4">
                                        <ItemServ titulo={'Comerciales'} />
                                        <ItemServ titulo={'Ambientales'} />
                                        <ItemServ titulo={'Otros'} />
                                    </ul>

                                </AccordionPanel>
                            </AccordionItem>
                            
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box className="font-Playfair text-[1.5rem] font-bold" as='span' flex='1' textAlign='left'>
                                        Resguardo patrimonial
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.

                                    <ul className="mt-4">
                                        <ItemServ titulo={'Seguros patrimoniales y art.'} />
                                    </ul>

                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box className="font-Playfair text-[1.5rem] font-bold" as='span' flex='1' textAlign='left'>
                                        Coaching
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.

                                    <ul className="mt-4">
                                        <ItemServ titulo={'Coaching para empresas'} />
                                        <ItemServ titulo={'Capacitaciones'} />
                                    </ul>

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