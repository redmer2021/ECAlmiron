import { FaCheck } from "react-icons/fa";

const ItemServ = ({titulo, descrip}) => {
    return (
        <>
            <div className="pt-[1rem] pl-4 font-Roboto text-[20px] flex items-center">
                <FaCheck color="#19b567" size={12}/> 
                <h4 className="ml-2">{titulo}</h4>
            </div>
            {descrip.map((line, index) => (
                <p className="pl-9 pr-[2rem] mb-2" key={index}>{line}</p>
            ))}
        </>
    )
}

export default ItemServ