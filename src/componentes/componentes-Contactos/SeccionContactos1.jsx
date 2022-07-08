import React, { Fragment, useState  } from 'react'
import Select from 'react-select'
import { useForm } from 'react-hook-form';
import { db } from '../../firebase';
import { addDoc, collection} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const SeccionContactos1 = () => {
    
    const navegate = useNavigate();
    const [options, setOptions] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState ('')
    const [comentario, setComentario] = useState('');
    const { register, formState: { errors }, watch, handleSubmit } = useForm({

    });


    const onSubmit = async(data) => {
        console.log(data);
        try {
            await addDoc(collection(db, 'mensajes'), {
                nombre: nombre,
                apellido: apellido,
                email: email,
                comentario: comentario,
                consulta: options,
            })
            setOptions("")
            setNombre("")
            setApellido("")
            setEmail("")
            setComentario("")
            console.log("Consulta enviada con éxito");
            navegate("/");
        } catch {
            console.log('Algo salio muy mal')
        }
    }

    const opciones = [
        {label: 'Financiero', value: 'Financiero'},
        {label: 'Soporte tecnico', value: 'Soporte tecnico'},
        {label: 'Preguntas y sugerencias', value: 'Preguntas y sugerencias'},
    ];

    const handleSelectChange = (value) => {
        console.log(value);
        setOptions(value);
    }
 
    const mensaje = "Deja aquí tu mensaje";
    return ( 
        <Fragment>
            <section className="mb-5">
            <div>
        <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group my-3">
                        <label>Nombre</label>
                        <input type="text"
                               className="form-control"
                         {...register('nombre', {
                            required: true,
                            maxLength: 10
                        })}
                        onChange={(e) => { setNombre(e.target.value)}} />
                        {errors.nombre?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo nombre es requerido</p>}
                        {errors.nombre?.type === 'maxLength' && <p className='text-danger text-small d-block mb-2'>El campo nombre debe tener menos de 10 caracteres</p>}
                    </div>

                    <div className="form-group my-3">
                        <label>Apellido</label>
                        <input type="text"
                               className="form-control"
                         {...register('apellido', {
                            required: true,
                            maxLength: 10
                        })} 
                        onChange={(e) => { setApellido(e.target.value)}} />
                        {errors.apellido?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo apellido es requerido</p>}
                        {errors.apellido?.type === 'maxLength' && <p className='text-danger text-small d-block mb-2'>El campo apellido debe tener menos de 10 caracteres</p>}
                    </div>

                    <div className="form-group my-3">
                        <label>Email</label>
                        <input type="text"
                        className='form-control'
                        {...register('email', {
                            required: true,
                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                        })} 
                        onChange={(e) => { setEmail(e.target.value)}} />
                        {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                        {errors.email?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo email es requerido</p>}
                    </div>

                    <div className="form-group my-3">
                        <label htmlFor="options">¿De que quieres hablar? *</label>
                            <Select
                                options = { opciones }
                                onChange = { handleSelectChange }
                                placeholder="Seleccione una opción"
                            />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="comentario">Tu mensaje *</label>
                        <textarea   id="comentario" 
                                    name="comentario" 
                                    className="form-control" 
                                    cols="30" 
                                    rows="5"
                                    {...register('comentario', {
                                        required: true,
                                    })}
                                    onChange={(e) => { setComentario(e.target.value)}}
                                    >
                        </textarea>
                        {errors.comentario?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo comentario es requerido</p>}
                        <small id="ayudamail" className="form-text text-muted">Ingrese los detalles de su solicitud. Un miembro de nuestro equipo de soporte le responderá lo antes posible. </small>                                 
                    </div>
                    <div className='text-center'>
                        <input type="submit" value="Enviar" className='btn btn-primary' />
                    </div>
                    
                </form>
            </div>
    </section>
        </Fragment>
     );
}
 
export default SeccionContactos1;