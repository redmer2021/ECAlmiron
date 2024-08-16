import FichaServ_1 from "./FichaServ_1"
import FichaServ_2 from "./FichaServ_2"
import FichaServ_3 from "./FichaServ_3"

const PrincipalesServ = () => {
  return (
    <>
        <div className="px-6 md:px-16 lg:w-[90%] xl:w-[85%] mx-auto grid md:grid-cols-3 gap-6 md:gap-14 mt-8 md:my-[8rem]">

            <FichaServ_1 />
            <FichaServ_2 />
            <FichaServ_3 />

        </div>
    </>
  )
}

export default PrincipalesServ