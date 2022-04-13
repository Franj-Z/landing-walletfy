import React, { Fragment } from 'react'

const CardEquipo = (props) => {
    console.log(props.equipo);
    return ( 
        <Fragment>
             {
                props.equipo.map(miembro => (

                <div key={miembro.id} className="col">
                <div className="card">
                    <div className="card-body">
                            <img src={miembro.imagen} alt={miembro.nombre} />
                                <h5 className="card-title pt-3">{miembro.nombre}</h5>
                                <p className="card-text">{miembro.cargo}</p>
                                    <ul className="btn-group ul-s">
                                            <li><a href={miembro.email} className="bi bi-envelope-fill a-s"></a></li>
                                            <li><a href={miembro.like} target="_blank" className="bi bi-linkedin a-s"></a></li>
                                            <li><a href={miembro.insta} target="_blank" className="bi bi-instagram a-s"></a></li>
                                     </ul>
                        </div>
                    </div>
                </div>
                                
                ))
            }
        </Fragment>
     );
}
 
export default CardEquipo;