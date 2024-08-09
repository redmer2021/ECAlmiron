import nosotros from "../../assets/Img/bg_section_dark.png"

const Nosotros = () => {
    return (
        <>
             <div id="seccNosotros" className="relative bg-slate-400 md:h-[20rem] mt-[5rem]">
                <img className="w-full h-full object-cover" src={nosotros} alt="Banner" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 px-[2rem] md:px-[25rem]">
                    <p className="font-Roboto font-light text-[12px] md:text-[22px] text-white text-center mb-4 px-4">
                        Nuestra misión es brindar <strong className="font-extrabold">servicios de excelencia,</strong> para maximizar su tiempo y sus recursos, contamos con la colaboración de muchos profesionales en virtud de cumplir con sus necesidades.
                    </p>
                    <p id="seccContactos" className="font-Roboto font-light text-[12px] md:text-[22px] text-white text-center">
                        Proveemos <strong className="font-extrabold">asesoría impositiva, auditoria, legales, de consultoría, capacitación,</strong> dando apoyo a su compañía para una óptima marcha de su negocio.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Nosotros