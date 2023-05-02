import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({addContact}) => {
    const nameRef = useRef();
    const surnameRef = useRef();
    const emailRef = useRef();
    const addContactToParent=(e)=>{
        e.preventDefault();
        addContact(nameRef.current.value,surnameRef.current.value,emailRef.current.value)
    }
    return (
        <form onSubmit={addContactToParent}>
            <input type='text' id='inputName' ref={nameRef} placeholder='Contact Name' />
            <input type='text' id='inputSurname' ref={surnameRef} placeholder='Contact Surname' />
            <input type="email" id="inputEmail" ref={emailRef} placeholder='Contact Email'/>
            <button type='submit'>Enviar</button>
        </form>
    );
}

ContactForm.propTypes={
    addContact:PropTypes.func.isRequired
}

export default ContactForm;
