import { auth, googleProvider } from '../config/database';
import { createUserWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

function AuthUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function signUp(e) {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log("Usuario registrado con éxito.");
        }).catch((error) => {
            console.error("Error al registrar el usuario: ", error);
        });
    }

    async function logOut(e) {
        e.preventDefault();
        await signOut(auth).then(() => {
            console.log("Usuario deslogueado con éxito.");
        }).catch((error) => {
            console.error("Error al desloguear el usuario: ", error);
        });
    }
    async function signInWithGoogle () {
        await signInWithPopup(auth, googleProvider).then((result) => {
            console.log("Usuario logueado con éxito.");
        }).catch((error) => {
            console.error("Error al loguear el usuario: ", error);
        });
    }
    return (
        <section>
            <form onSubmit={signUp}>
                <div id="form-h2-login">
                    <h2>Registro</h2>
                </div>
                <input required type="text" placeholder="Nombre completo"/>
                <input required type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <input required type="password" placeholder="Contraseña" onChange={(e)=>setPassword(e.target.value)}/>
                <input required type="password" placeholder="Repetir contraseña" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                <button type="submit">Registrarse</button>
            </form>
            <form onSubmit={signInWithGoogle}>
                <button type="submit">Registrarse con Google</button>
            </form>
            <button onClick={logOut}>Desloguearse</button>
        </section>
    )
}

export default AuthUser;