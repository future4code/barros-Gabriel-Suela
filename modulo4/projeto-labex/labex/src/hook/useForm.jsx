import { useState } from "react";

export const useForm = (InitialState) => {
    
    const [form, setForm ] = useState(InitialState) 

    const handleInput = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
        
    }
    
    const clear = () => {
        setForm(InitialState)
    }

    return [form, handleInput, clear]
}