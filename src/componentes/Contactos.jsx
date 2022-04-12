import React, { Fragment, useState } from 'react'

function  validate(input){
    let errors = [];
    if (!input.nombre.trim()){
        errors.nombre = 'el campo nombre no puede estar vacio'
    } else if (input.nombre.length < 3){
        errors.nombre = 'debe tener un minimo de 3 caracteres'
    }else if (input.nombre.length > 15){
        errors.comentario = 'Ups! tu nombre es muy largo. Debe tener maximo 15 caracteres.'
    };

    if (!input.apellido.trim()){
        errors.apellido = 'el campo apellido no puede estar vacio'
    }else if (input.apellido.length < 3){
        errors.apellido = 'el apellido debe tener un minimo de 3 caracteres'
    }else if (input.apellido.length > 20){
        errors.apellido = 'Ups! tu apellido es muy largo. Debe tener maximo 20 caracteres.'
    };

    if (!input.email.trim()){
        errors.email = 'el campo email no puede estar vacio'
    };


    if (input.comentario.length < 20){
        errors.comentario = 'el campo comentario debe tener un minimo de 20 caracteres'
    }else if (input.comentario.length > 400){
        errors.comentario = 'ups! tu mensaje es muy largo. debe tener maximo 400 caracteres.'
    }
    return errors;
}

const Contactos = () => {


    const [options, setOptions] = useState('option0');

    
    const [input, setInput] = useState(
        {
            nombre: '',
            apellido: '',
            email: '',
            comentario: '',
        }
    )


    const [error, setError] = useState({})

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }
   

    const handleSubmit = (e) => {
        e.preventDefault();
        
   //     const info = {nombre, apellido, email, options, comentario}
   //     console.log(info)
   //     fetch('/contactos', {
   //         method: 'POST',
   //         headers: { "Content-Type": "application/json"},
   //         body: JSON.stringify(info)
   //     }).then(() => {
   //        console.log('se envio correctamente')
   //     })

    }
    

    return ( 
        <Fragment>
            <aside className="container-fluid  py-3 contacto">
    
                    <div className="container mb-5">
                      <h2 className='text-center display-5 my-4'>Contactos</h2>   
                    <div className="row justify-content-center">

                        <div className="col-md-8 borde pb-3 ">
                            <p className="lead mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dicta maiores officiis laudantium, libero tempore exercitationem, ratione, non modi sapiente cupiditate et! Quo, ab deserunt voluptatum sit delectus corporis. Amet?</p>	
                            

                            <form onSubmit={handleSubmit}>

                                        <div className="form-group my-3">
                                            <label for="nombre">Nombre *</label>
                                            <input type="text" className="form-control" name="nombre" id="nombre"
                                            value={input.nombre}
                                            onChange={(e) => handleChange(e)} />

                                            {error.nombre && (
                                                <p className="text-danger"> {error.nombre}</p>
                                            )}
                                            
                                        </div>
                                        <div className="form-group my-3">
                                            <label for="apellido">Apellido *</label>
                                            <input type="text" className="form-control" name="apellido" id="apellido"
                                            value={input.apellido}
                                            onChange={(e) => handleChange(e)} />
                                        
                                        {error.apellido && (
                                                <p className="text-danger"> {error.apellido}</p>
                                            )}
                                        </div>
                                                    
                                        <div className="form-group my-3">
                                            <label for="mail">Email *</label>
                                            <input type="email" className="form-control" name="email" id="mail" aria-describedby="ayudamail" value={input.email}
                                            onChange={(e) => handleChange(e)} pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"/>    
                                                                            
                                            <small id="ayudamail" className="form-text text-muted">Tu dirección de email está segura con nosotros.</small>
                                            
                                            {error.email && (
                                                <p className="text-danger"> {error.email}</p>
                                            )}
                                            
                                        </div>


                                        <div className="form-group my-3">
                                        <label for="options">¿De que quieres hablar? *</label>

                                        <select className="form-select" value={options}
                                            onChange={(e) => setOptions(e.target.value)}>
                                        <option value="option0">-</option>
                                        <option value="option1">Financiero</option>
                                        <option value="option2">Soporte tecnico</option>
                                        <option value="option3">Preguntas y sugerencias</option>
                                        </select>
                                        </div>

                                        <div className="form-group my-3">
                                            <label for="comentario">Tu mensaje *</label>
                                            <textarea id="comentario" name="comentario" value={input.comentario}
                                            onChange={(e) => handleChange(e)} className="form-control" cols="30" rows="5"></textarea>
                                            <small id="ayudamail" className="form-text text-muted">Ingrese los detalles de su solicitud. Un miembro de nuestro equipo de soporte le responderá lo antes posible. </small>
                                            {error.comentario && (
                                                <p className="text-danger"> {error.comentario}</p>
                                            )}           
                                            
                                        </div>


                                        <button type="submit" className="btn btn-primary btn-lg float-end">
                                            Enviar
                                        </button>

                            </form>
                            </div>
                        </div>
                </div>
                            
            </aside>
        </Fragment>
     );
}
 
export default Contactos;