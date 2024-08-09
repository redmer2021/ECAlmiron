import { PiSealCheckDuotone } from "react-icons/pi";

const ItemDest = ({titulo, descrip}) => {
    return (
        <>
            <div className="flex flex-col justify-center items-center p-10 text-center space-y-4">
                <PiSealCheckDuotone color="#23DE81" size={95} />
                <h3 className="font-Roboto text-2xl font-bold">{titulo}</h3>
                <p className="font-Roboto" >{descrip}</p>
            </div>
        </>
    )
}

export default ItemDest