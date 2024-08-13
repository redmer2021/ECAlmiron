import ItemDest from "./ItemDest"

const ListDest = () => {
    return (
        <>
        
            <div className="bg-white grid md:grid-cols-3 container mx-auto py-20">
                <div>
                    <ItemDest titulo={'Confianza'} descrip={'La confianza es esencial en las relaciones, se construye con honestidad y consistencia, y fortalece la comunicación y la colaboración. Sin ella, la conexión se debilita y la cooperación se vuelve difícil.'} />
                </div>
                <div>
                    <ItemDest titulo={'Organización'} descrip={'Una organización efectiva se basa en una estructura clara, comunicación eficiente y objetivos comunes. La coordinación y la colaboración entre los miembros son esenciales para alcanzar el éxito y la productividad.'} />
                </div>
                <div>
                    <ItemDest titulo={'Eficiencia'} descrip={'La eficiencia implica lograr resultados óptimos con el menor esfuerzo y recursos posibles. Es esencial en cualquier ámbito, mejorando la productividad, reduciendo costos y facilitando el cumplimiento de objetivos de manera efectiva.'} />
                </div>
            </div>
        
        </>
    )
}

export default ListDest