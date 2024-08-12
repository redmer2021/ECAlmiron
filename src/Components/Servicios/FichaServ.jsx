import { useState } from "react"

const FichaServ = ({varImg, titulo, descrip}) => {

    const [verModal, setVerModal] = useState(false)

    const onOpenModal = () => {
        setVerModal(!verModal)
    }


    return (
        <div className=" flex flex-col hover:shadow-lg hover:shadow-mi_gris transition-all duration-300">
            <div className="h-[60%]">
                <img className="h-full w-full object-cover" src={varImg} alt="Banner" />
            </div>

            <div className="md:h-[40%] flex flex-col justify-between px-8 pb-4">
                <h3 className="text-center mt-4 font-Playfair font-semibold text-[1.5rem] md:text-[2rem]">{titulo}</h3>
                <p className="text-center mb-4" >{descrip}</p>
                <button className='bg-[#19b567] hover:bg-[#329e68] hover:cursor-pointer px-8 py-2 text-center transition-all duration-300 tracking-widest rounded-md text-white font-medium font-Roboto' onClick={onOpenModal}>VER MAS</button>
            </div>


            {/* Ventana Modal */}
            <div className={`fixed z-10 inset-0 overflow-y-auto ${verModal ? 'block' : 'hidden'}`}>
                <div className="flex items-center justify-center min-h-screen"> 
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    <div className="relative bg-white mt-[8rem] md:mt-[6rem] h-[65vh] w-[100vw] md:h-[50vh] md:w-[50vw] mx-3 md:mx-auto rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4"> 
                            <h3 className="text-lg font-semibold">PÁGINA EN CONSTRUCCIÓN</h3>
                            <button
                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                onClick={onOpenModal}
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="text-sm">
                          <p>{descrip}</p>
                        </div>

                        <div className="mt-6 flex justify-end space-x-4">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none"
                                onClick={onOpenModal}
                            >
                                Confirmar 
                            </button>
                            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 focus:outline-none"
                                onClick={onOpenModal}
                            >
                                Cancelar
                            </button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default FichaServ