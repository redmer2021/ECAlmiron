import { FaPhone } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Pie = () => {
    return (
        <>
            <div className="h-[420px] grid md:grid-cols-2 gap-4 p-4">

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.0590685123925!2d-58.47959962350253!3d-34.627947558779496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc992526c1d61%3A0xc5f6e1b37dbe24b!2sAv.%20Avellaneda%203350%2C%20C1407EJN%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723134391286!5m2!1ses!2sar"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11072.754509783248!2d-58.65457891539238!3d-34.40262664802926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca169f622f157%3A0x16a58b91f0411287!2sAv.%20del%20Golf%20610%2C%20B1670%20Rinc%C3%B3n%20de%20Milberg%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723135160856!5m2!1ses!2sar" 
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            
            </div>
            <div className="h-[218px] bg-black flex flex-col justify-center items-center">
                <div className="flex justify-center space-x-4 md:space-x-8 mb-4">
                    <FaFacebookF size={30} color="#23DE81" />
                    <FaYoutube size={30} color="#23DE81" />
                    <FaInstagram size={30} color="#23DE81" />
                    <AiFillMail size={30} color="#23DE81" />
                    <FaPhone size={30} color="#23DE81" />
                </div>
                <div>
                    <p className="font-Roboto text-white text-center px-4">Copyright © 2020 Estudio Contable Almiron | Todos los Derechos Reservados</p>
                </div>
            </div>
        </>
    )
}

export default Pie