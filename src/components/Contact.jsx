import React, {useState} from 'react';
import { db } from '../config/database';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
export const Contact = () => {
    const [newUser, setNewUser] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newTopic, setNewTopic] = useState("");
    const [newMessage, setNewMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newUser === "" || newEmail === "" || newTopic === "" || newMessage === "") {
            alert("Todos los campos son obligatorios");
        } else {
            addDoc(collection(db, "loguser"), {
                name: newUser,
                email: newEmail,
                topic: newTopic,
                message: newMessage
            }).then(() => {
                setNewUser("");
                setNewEmail("");
                setNewTopic("");
                setNewMessage("");
                alert("Formulario enviado con éxito.");
            }).catch((error) => {
                console.error("Error al enviar el formulario: ", error);
                alert("Hubo un error al enviar el formulario.");
            });
        }
    };
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div id="form-h2">
                    <h2>Contacto</h2>
                </div>
                <input type="text" placeholder="Nombre completo" value={newUser} onChange={e => setNewUser(e.target.value)}/>
                <input type="email" placeholder="Email" value={newEmail} onChange={e => setNewEmail(e.target.value)}/>
                <input type="text" placeholder="Tema" value={newTopic} onChange={e => setNewTopic(e.target.value)}/>
                <textarea placeholder="Mensaje" value={newMessage} onChange={e => setNewMessage(e.target.value)}/>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}