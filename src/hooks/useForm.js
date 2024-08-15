import { useState } from "react"

const useForm = (formularioInicial = {} ) => {

    const [ contacto, setContacto ] = useState(formularioInicial)


    const onInputChange = ({target}) => {
       const {name, value} = target
       setContacto({
           ...contacto,
           [name]:value
       })
    }

    const resetForm = () => {
        setContacto(formularioInicial);
    };


    return {
        contacto, 
        onInputChange, 
        resetForm
    }
}

export default useForm