import consultoria from "../../assets/Img/img_consultoria.png"
import coaching from "../../assets/Img/img_coaching.png"
import asesoria from "../../assets/Img/img_asesoria.png"
import FichaServ from "./FichaServ"

const PrincipalesServ = () => {
  return (
    <>
        <div className="px-6 md:px-16 lg:w-[90%] xl:w-[85%] mx-auto grid md:grid-cols-3 gap-6 md:gap-14 mt-8 md:my-[8rem]">

            <FichaServ varImg={consultoria} titulo='Consultoría' descrip='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, odio' />
            <FichaServ varImg={coaching} titulo='Coaching' descrip='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, odio' />
            <FichaServ varImg={asesoria} titulo='Asesoría' descrip='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, odio' />

        </div>
    </>
  )
}

export default PrincipalesServ