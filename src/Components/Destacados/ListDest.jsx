import ItemDest from "./ItemDest"

const ListDest = () => {
    return (
        <>
        
            <div className="bg-white grid md:grid-cols-3 container mx-auto py-20">
                <div>
                    <ItemDest titulo={'Confianza'} descrip={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit sequi necessitatibus repudiandae reprehenderit'} />
                </div>
                <div>
                    <ItemDest titulo={'Organización'} descrip={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit sequi necessitatibus repudiandae reprehenderit'} />
                </div>
                <div>
                    <ItemDest titulo={'Eficiencia'} descrip={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit sequi necessitatibus repudiandae reprehenderit'} />
                </div>
            </div>
        
        </>
    )
}

export default ListDest