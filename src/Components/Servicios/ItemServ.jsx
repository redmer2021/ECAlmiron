import { FaCheck } from "react-icons/fa";

const ItemServ = ({titulo}) => {
    return (
        <div className="flex items-center">
            <FaCheck color="#19b567" size={12}/> 
            <li className="ml-2">{titulo}</li>
        </div>
    )
}

export default ItemServ