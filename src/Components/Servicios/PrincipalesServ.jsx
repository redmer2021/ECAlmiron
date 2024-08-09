import consultoria from "../../assets/Img/img_consultoria.png"
import coaching from "../../assets/Img/img_coaching.png"
import asesoria from "../../assets/Img/img_asesoria.png"
import Boton from "../Boton/Boton"


const PrincipalesServ = () => {
  return (
    <>
        <div className="bg-white md:mt-[5rem] grid md:grid-cols-3 md:gap-14 container mx-auto md:pt-20 pt-4 px-4 md:px-[4rem]">
            <div className="h-[35rem] flex flex-col hover:shadow-lg hover:shadow-gray-500 transition-all duration-300">
                <div className="h-[60%]">
                    <img className="h-full w-full object-cover" src={consultoria} alt="Banner" />
                </div>

                <div className="md:h-[40%] flex flex-col justify-between px-8 pb-4">
                    <h3 className="text-center mt-4 font-Playfair font-semibold text-[1.5rem] md:text-[2rem]">Consultoría</h3>
                    <p className="text-center mb-4 " >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, odio, doloremque sapiente illum deleniti laboriosam labore ipsam, modi voluptate aut consectetur.</p>
                    <Boton titulo={'VER MAS'}/>
                </div>
            </div>

            <div className="h-[35rem] flex flex-col hover:shadow-lg hover:shadow-gray-500 transition-all duration-300">
                <div className="h-[60%]">
                    <img className="h-full w-full object-cover" src={coaching} alt="Banner" />
                </div>

                <div className="h-[40%] flex flex-col justify-between px-8 pb-4">
                    <h3 className="text-center mt-4 font-Playfair font-semibold text-[1.5rem] md:text-[2rem]">Coaching</h3>
                    <p className="text-center" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. labore ipsam, modi voluptate aut consectetur.</p>
                    <Boton titulo={'VER MAS'}/>
                </div>
            </div>

            <div className="h-[35rem] flex flex-col hover:shadow-lg hover:shadow-gray-500 transition-all duration-300">
                <div className="h-[60%]">
                    <img className="h-full w-full object-cover" src={asesoria} alt="Banner" />
                </div>

                <div className="h-[40%] flex flex-col justify-between px-8 pb-4">
                    <h3 className="text-center mt-4 font-Playfair font-semibold text-[1.5rem] md:text-[2rem]">Asesoría</h3>
                    <p className="text-center" >Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <Boton titulo={'VER MAS'}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default PrincipalesServ