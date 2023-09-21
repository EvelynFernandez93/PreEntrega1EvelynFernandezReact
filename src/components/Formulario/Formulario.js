import React from 'react'
import  { useForm } from "react-hook-form" 


export default function Formulario() {

    const {register,handleSubmit} = useForm();

    const enviar = (data) => {
        console.log(data);
    }

  return (
    <div>
         
        
        <form onSubmit={handleSubmit(enviar)} >
            <fieldset  >
            <legend>Disabled fieldset example</legend>
            <div className="mb-3" >
                 <label htmlFor="disabledTextInput" className="form-label" >Nombre</label>
                 <input type="text" id="disabledTextInput" className="form-control" placeholder="Nombre "{...register("nombre")}></input>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
            </fieldset>
        </form>
    
    
    </div>
  )
}
