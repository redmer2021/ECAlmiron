
const Boton = ({titulo, className}) => {
    return (
        <button className={`bg-[#19b567] hover:bg-[#329e68] px-8 py-2 transition-all duration-300 tracking-widest rounded-md text-white font-medium font-Roboto ${className}`} >
            {titulo}
        </button>
    )
}

export default Boton