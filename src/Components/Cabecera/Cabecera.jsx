import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from "../../assets/Img/Logo.png"
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link as ScrollLink } from 'react-scroll';
import { IoLogoWhatsapp } from "react-icons/io";

const Cabecera = () => {

    const location = useLocation();
    const [showMenus, setShowMenus] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const nroCelular = '37764955'
    const msgWS = 'Hola, necesito hacer una consulta...'
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${nroCelular}&text=${msgWS}`;


    useEffect(() => {
        if (location.pathname === '/servicios') {
            setShowMenus(false);
        } else {
            setShowMenus(true);
        }
    }, [location.pathname]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <nav className="fixed w-full z-50">
                <div className="bg-white py-4">
                    <div className="px-6 md:px-16 lg:w-[90%] xl:w-[85%] mx-auto flex justify-between items-center">
                        <div>
                            <div className="hidden md:flex items-center">
                                <div className="flex items-center">
                                    <FaPhone color="#23DE81" className="mr-1" />
                                    <span className="mr-1 Roboto">(011)4746-5854</span> 
                                    <IoLogoWhatsapp size={23} color="#23DE81" className="mr-1" /> <span className="mr-1">(011)3776-4955</span>
                                </div>
                        
                                <div className="flex items-center">
                                    <AiFillMail size={23} color="#23DE81" className="ml-8 mr-1" />
                                    <span className="mr-8 font-Roboto">info@estudiocontablealmiron.com</span>                        
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 w-full justify-center md:justify-end md:w-auto">
                                        
                            <a href="https://www.facebook.com/estudiocontablealmiron/" target="blank" className="hover:scale-125">
                                <FaFacebookF size={25} color="#23DE81" />
                            </a>
                            <a href="https://www.instagram.com/estudiocontablealmiron/?hl=es-la" target="blank" className="hover:scale-125">
                                <FaInstagram size={27} color="#23DE81" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCHkub6nkfFrlzQjHv_5fJRQ?view_as=subscriber" target="blank" className="hover:scale-125">
                                <FaYoutube size={30} color="#23DE81" />
                            </a>


                        </div>
                    </div>
                </div>

                <div className="bg-black py-4">
                    {/* Menú en pantallas grandes */}
                    <div className="hidden px-6 md:px-16 lg:w-[90%] xl:w-[85%] mx-auto md:flex justify-between items-center">
                        <div>
                            <img className="h-[4rem] w-[4rem] rounded-full" src={logo} alt="" />
                        </div>
                        <ul className="flex space-x-6">
                            <Link to='/'><li className="transition-all duration-300  border-mi_verde hover:text-mi_verde hover:border-b font-Roboto text-white text-[20px]">Inicio</li></Link> 
                            {showMenus && <ScrollLink to="seccNosotros" smooth={true} offset={-150} duration={500} className="cursor-pointer transition-all duration-300 hover:border-b border-mi_verde hover:text-mi_verde font-Roboto text-white text-[20px]">Nosotros</ScrollLink>}
                            {showMenus && <Link to='/servicios'><li className="transition-all duration-300  border-mi_verde hover:text-mi_verde hover:border-b font-Roboto text-white text-[20px]">Servicios</li></Link>}
                            {showMenus && <ScrollLink to="seccContactos" smooth={true} offset={-180} duration={500} className="cursor-pointer transition-all duration-300 hover:border-b border-mi_verde hover:text-mi_verde font-Roboto text-white text-[20px]">Contacto</ScrollLink>}
                        </ul>
                    </div>

                    {/* Menú en pantallas pequeñas */}
                    <div className="px-6 mx-auto flex justify-between md:hidden items-center">

                        {menuOpen ? (
                            <IoMdClose size={20} color="white" onClick={toggleMenu} />
                        ) : (
                            <CiMenuBurger size={20} color="white" onClick={toggleMenu} />
                        )}

                        <div>
                            <img className="h-[2.5rem] w-[2.5rem] rounded-full" src={logo} alt="" />
                        </div>
                        
                    </div>
                    {menuOpen && (
                        <div className="md:hidden mb-2 pb-4">
                            <ul className="flex flex-col space-y-1 mt-2 px-7">
                                <Link to='/' onClick={closeMenu}><li className="pb-2 border-b-[1px] font-Roboto text-white text-[15px]">Inicio</li></Link>
                                {showMenus && <ScrollLink to="seccNosotros" smooth={true} offset={-130} duration={500} ><li onClick={closeMenu} className="cursor-pointer pb-2 pt-2 border-b-[1px] font-Roboto text-white text-[15px]">Nosotros</li></ScrollLink>}
                                {showMenus && <Link to='/servicios' onClick={closeMenu}><li className="pb-2 pt-2 border-b-[1px] font-Roboto text-white text-[15px]">Servicios</li></Link>}
                                {showMenus && <ScrollLink to="seccContactos" smooth={true} offset={-115} duration={500}><li onClick={closeMenu} className="cursor-pointer pb-2 pt-2 border-b-[1px] font-Roboto text-white text-[15px]">Contacto</li></ScrollLink>}
                            </ul>
                        </div>
                    )}

                </div>
            </nav>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="z-50 fixed bottom-4 right-4 rounded-full p-2 shadow-lg hover:bg-gray-100">
                <IoLogoWhatsapp size={30} color="#23DE81" />
            </a>

        </>
    )
}

export default Cabecera