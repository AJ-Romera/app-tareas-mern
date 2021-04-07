import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/autenticacion/authContext';

function Barra() {
    // Extraer la info de autenticación
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
    }, []);

    return (
        <header className='app-header'>
            {usuario ? (
                <p className='nombre-usuario'>
                    Hola <span>{usuario.nombre}</span>
                </p>
            ) : null}
            <nav className='nav-principal'>
                <a href='#!'>Cerrar Sesión</a>
            </nav>
        </header>
    );
}

export default Barra;
