import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';

/* Nuevo concepto:
High Order Component (HOC) es un componente que tiene dentro otro componente */

function RutaPrivada({ component: Component, ...props }) {
    const authContext = useContext(AuthContext);
    const { autenticado, cargando, usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);

    return (
        <Route
            {...props}
            render={(props) =>
                !autenticado && !cargando ? (
                    <Redirect to='/' />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
}

export default RutaPrivada;
