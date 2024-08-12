
const Boton = ({titulo, className}) => {
    return (
        <div className={`bg-[#19b567] hover:bg-[#329e68] hover:cursor-pointer px-8 py-2 text-center transition-all duration-300 tracking-widest rounded-md text-white font-medium font-Roboto ${className}`} >
            {titulo}
        </div>
    )
}

export default Boton