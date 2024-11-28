import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import logoAnda from "../../img/logo_anda.png";

export const Login = () =>{
    
    const navigate = useNavigate();
    const [personal_document, setPersonalDocument] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");


    return(
        <div className="container text-center">
            <Link to="/">
                <img className="img-fluid w-50 mx-auto" src={logoAnda} />
            </Link>
            {/*   {message && <p style={{ color: message.includes("success") ? "green" : "red" }}>{message}</p>} */}
            <main className="form-signin w-100 m-auto">
                <form onSubmit="{handleSubmit}">
                    <h1 className="h3 my-5 fw-normal celeste">Ingrese su CI y su Contraseña:</h1>
                    <div className="form-floating mb-3">
                        <input
                            id="personal_document"
                            placeholder="Cédula de identidad"
                            className="form-control"
                            type="number"
                            value={personal_document}
                            onChange={(event) => setPersonalDocument(event.target.value)} 
                            required
                        />
                        <label htmlFor="personal_document" className="form-label">Documento de identidad</label>
                    </div>                                     
                    <div className="form-floating mb-3">
                        <input
                            id="password"
                            placeholder="Password"
                            className="form-control"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                        <label htmlFor="password" className="form-label">Contraseña</label>
                    </div>

                    <button className="btn btn-primary w-100 py-2" type="submit">Ingrese aquí</button>
                    <div className="mt-3 celeste">
                        <Link to="/signup">¿No tiene cuenta? Registrese aquí</Link>
                    </div>
                </form>
            </main>
        </div>
    )
}