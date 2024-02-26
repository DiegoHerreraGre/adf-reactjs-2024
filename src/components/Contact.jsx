import React from 'react';
export const Contact = () => {
    return (
        <section>
            <form>
                <div id="form-h2">
                    <h2>Contacto</h2>
                </div>
                <label htmlFor="name">Nombre completo:</label>
                <input type="text" id="name" name="name" required/>
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required/>
                <label htmlFor="topic">Tema:</label>
                <input type="text" id="topic" name="topic" required/>
                <label htmlFor="message">Mensaje:</label>
                <textarea id="message" name="message" required/>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}