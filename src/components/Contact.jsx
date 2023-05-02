import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';


const ContactComponent = ({contact,index,toggleConnected,remove}) => {
    return (
        <div>
            <h1>Name: { contact.name }</h1>
            <h2>Surname: { contact.surname }</h2>
            <h3>Email: { contact.email }</h3>
            <span>{ contact.connected? "Contacto En Línea":"Contacto No Disponible" }</span>
            <button onClick={()=>toggleConnected(index)}> Cambiar estado </button>
            <button onClick={()=>remove(index)}> Borrar Contacto </button>
        </div>
    );
};


ContactComponent.propTypes = {
    contact:PropTypes.instanceOf(Contact).isRequired,
    index:PropTypes.number,
    toggleConnected:PropTypes.func.isRequired,
    remove:PropTypes.func.isRequired
};


export default ContactComponent;
