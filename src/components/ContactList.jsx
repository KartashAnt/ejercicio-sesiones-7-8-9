import React, {useState} from 'react';
import { Contact } from '../models/contact.class';
import ContactComponent from './Contact';
import ContactForm from './ContactForm';

const ContactList = ({
    contactList=[
        new Contact("Anton","Kartashov","tohakartasov@gmail.com",true),
        new Contact("No Anton"," No Kartashov","notohakartasov@gmail.com")
    ]
}) => {
    const [contacts, setContacts] = useState(contactList);
    const toggleConnected=(index)=>{
        const contactListCopy=[...contacts];
        contactListCopy[index].connected=!contactListCopy[index].connected;
        setContacts(contactListCopy);
    }

    const addContact=(name,surname,email)=>{
        const contactListCopy=[...contacts];
        contactListCopy.push(new Contact(name,surname,email));
        setContacts(contactListCopy);
    }

    const removeContact=(index)=>{
        const contactListCopy=[...contacts];
        contactListCopy.splice(index,1);
        setContacts(contactListCopy);
    }
    return (
        <div>
            {contacts.map((contact,index) =>(
                <ContactComponent contact={contact} key={index} index={index} toggleConnected={toggleConnected} remove={removeContact}></ContactComponent>
            ))}
            <ContactForm addContact={addContact}></ContactForm>
        </div>
    );
}

export default ContactList;
