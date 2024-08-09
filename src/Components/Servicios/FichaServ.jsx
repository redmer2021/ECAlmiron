import Boton from "../Boton/Boton"

const FichaServ = ({varImg, titulo, descrip}) => {
    return (
        <div className=" flex flex-col hover:shadow-lg hover:shadow-mi_gris transition-all duration-300">
            <div className="h-[60%]">
                <img className="h-full w-full object-cover" src={varImg} alt="Banner" />
            </div>

            <div className="md:h-[40%] flex flex-col justify-between px-8 pb-4">
                <h3 className="text-center mt-4 font-Playfair font-semibold text-[1.5rem] md:text-[2rem]">{titulo}</h3>
                <p className="text-center mb-4" >{descrip}</p>
                <Boton titulo={'VER MAS'}/>
            </div>
        </div>
    )
}

export default FichaServ