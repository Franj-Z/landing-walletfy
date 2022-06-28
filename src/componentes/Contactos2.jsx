import React from 'react'
import { useForm } from "react-hook-form";

const Contacto2 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
   

  return (
    <>
      
      <aside className="container-fluid  py-3 contacto">
    
    <div className="container mb-5">
      <h2 className='text-center display-5 my-4'>Contactos</h2>   
    <div className="row justify-content-center">

        <div className="col-md-8 borde pb-3 ">
            <p className="lead mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dicta maiores officiis laudantium, libero tempore exercitationem, ratione, non modi sapiente cupiditate et! Quo, ab deserunt voluptatum sit delectus corporis. Amet?</p>	
            

            <form onSubmit={handleSubmit(data => {
                console.log(data)
            })}>

                        <div className="form-group my-3">
                            <label htmlFor="nombre">Nombre *</label>
                            <input {...register('nombre', { 
                                required: 'Debe completar el campo', 
                                minLength: { value: 4, message: 'El minimo de caracteres es 4' }, 
                                maxLength: { value: 20, message: 'El maximo de caracteres es 20' } })}
                                type="text" className="form-control" name="nombre" id="nombre"
                            />
                            <p className="text-danger">{errors.nombre?.message}</p>
                           
                            
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="apellido">Apellido *</label>
                            <input {...register('apellido', { 
                                required: 'Debe completar el campo', 
                                minLength: { value: 4, message: 'El minimo de caracteres es 4' },
                                maxLength: { value: 20, message: 'El maximo de caracteres es 20' } })} 
                                type="text" className="form-control" name="apellido" id="apellido"
                            />
                            <p className="text-danger">{errors.apellido?.message}</p>
                        
                       
                        </div>
                                    
                        <div className="form-group my-3">
                            <label htmlFor="mail">Email *</label>
                            <input {...register('email', 
                                { required: 'Debe completar el campo'},
                               )} 
                                type="email" className="form-control" name="email" id="mail" aria-describedby="ayudamail"  />    
                                                            
                            <small id="ayudamail" className="form-text text-muted">Tu dirección de email está segura con nosotros.</small>
                            
                            <p className="text-danger">{errors.email?.message}</p>
                            
                        </div>


                        <div className="form-group my-3">
                        <label htmlFor="options">¿De que quieres hablar? *</label>

                        <select defaultValue={'DEFAULT'} {...register('option', { 
                                required: 'Debe seleccionar alguna opcion'})} className="form-select" name="option">
                        <option value="DEFAULT">-</option>
                        <option value="option1">Financiero</option>
                        <option value="option2">Soporte tecnico</option>
                        <option value="option3">Preguntas y sugerencias</option>
                        </select>

                        <p className="text-danger">{errors.option?.message}</p>

                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="comentario">Tu mensaje *</label>
                            <textarea {...register('comentario', { 
                                required: 'Debe completar el campo', 
                                minLength: { value: 4, message: 'El minimo de caracteres es 4' },
                                maxLength: { value: 20, message: 'El maximo de caracteres es 20' } })} 
                                id="comentario" name="comentario"  className="form-control" cols="30" rows="5"></textarea>
                            <small id="ayudamail" className="form-text text-muted">Ingrese los detalles de su solicitud. Un miembro de nuestro equipo de soporte le responderá lo antes posible. </small>
                        <p className="text-danger">{errors.comentario?.message}</p>
                                     
                            
                        </div>


                        <button type="submit" className="btn btn-primary btn-lg float-end">
                            Enviar
                        </button>

            </form>
            </div>
        </div>
</div>
            
</aside>
    </>
  )
}

export default Contacto2