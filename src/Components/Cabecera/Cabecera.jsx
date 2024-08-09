import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from "../../assets/Img/Logo.png"
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { MdCancel } from "react-icons/md";


const Cabecera = () => {

    const location = useLocation();
    const [showMenus, setShowMenus] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

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
            <div className="bg-white h-[53px] flex justify-between items-center w-screen">
                <div className="container mx-auto flex justify-between">
                    <div>
                        <div className="hidden md:flex items-center">
                            <div className="flex items-center">
                                <FaPhone color="#23DE81" className="mr-2" />
                                <span className="mr-8 Roboto">(011) 4746 - 5854</span>                        
                            </div>
                    
                            <div className="flex items-center">
                                <AiFillMail size={23} color="#23DE81" className="mr-2" />
                                <span className="mr-8 font-Roboto">info@estudiocontablealmiron.com</span>                        
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 w-full justify-center md:justify-end md:w-auto">
                        <FaFacebookF color="#23DE81" />
                        <FaInstagram size={21} color="#23DE81" />
                        <FaYoutube size={25} color="#23DE81" />
                    </div>
                </div>
            </div>
            
            <div className="bg-black px-4 h-[50px] md:h-[96px] flex items-center">
                <div className="hidden container mx-auto md:flex justify-between items-center">
                    <div>
                        <img className="h-[4rem] w-[4rem] rounded-full" src={logo} alt="" />
                    </div>
                    <ul className="flex space-x-6">
                        <Link to='/'><li className="transition-all duration-300 hover:border-b-2 border-mi_verde hover:text-mi_verde font-Roboto text-white text-[20px]">Inicio</li></Link> 
                        {showMenus && <HashLink smooth to='#seccNosotros'><li className="transition-all duration-300 hover:border-b-2 border-mi_verde hover:text-mi_verde font-Roboto text-white text-[20px]">Nosotros</li></HashLink>}
                        {showMenus && <Link to='/servicios'><li className="transition-all duration-300 hover:border-b-2 border-mi_verde hover:text-mi_verde font-Roboto text-white text-[20px]">Servicios</li></Link>}
                        {showMenus && <HashLink smooth to='#seccContactos'><li className="transition-all duration-300 hover:border-b-2 border-mi_verde hover:text-mi_verde font-Roboto text-white text-[20px]">Contacto</li></HashLink>}
                    </ul>
                </div>

                <div className="container mx-auto flex justify-between md:hidden items-center">

                    {menuOpen ? (
                        <MdCancel size={30} color="white" onClick={toggleMenu} />
                    ) : (
                        <TiThMenu size={30} color="white" onClick={toggleMenu} />
                    )}

                    <div>
                        <img className="h-[2rem] w-[2rem] rounded-full" src={logo} alt="" />
                    </div>
                    
                </div>

            </div>
            {menuOpen && (
                <div className="md:hidden mb-2">
                    <ul className="flex flex-col space-y-1 mt-2 px-2">
                        <Link to='/' onClick={closeMenu}><li className="rounded-md p-2 bg-gray-400 font-Roboto text-white text-[15px]">Inicio</li></Link>
                        {showMenus && <HashLink smooth to='#seccNosotros' onClick={closeMenu}><li className="rounded-md p-2 bg-gray-400 font-Roboto text-white text-[15px]">Nosotros</li></HashLink>}
                        {showMenus && <Link to='/servicios' onClick={closeMenu}><li className="rounded-md p-2 bg-gray-400 font-Roboto text-white text-[15px]">Servicios</li></Link>}
                        {showMenus && <HashLink smooth to='#seccContactos' onClick={closeMenu}><li className="rounded-md p-2 bg-gray-400 font-Roboto text-white text-[15px]">Contacto</li></HashLink>}
                    </ul>
                </div>
            )}            
        </>
    )
}

export default Cabecera