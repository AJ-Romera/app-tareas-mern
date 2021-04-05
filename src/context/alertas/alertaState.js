import React, { useReducer } from 'react';
import alertaContext from './alertaContext';
import alertaReducer from './alertaReducer';

import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types/index';

function AlertaState(props) {
    const initialState = {
        alerta: null,
    };

    // Crear state y dispatch
    const [state, dispatch] = useReducer(alertaReducer, initialState);

    // Crear las funciones
    // * Mostrar la alerta
    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg,
                categoria,
            },
        });

        // Tras 5 segundos, limpia la alerta de error
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA,
            });
        }, 5000);
    };

    return (
        <alertaContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta,
            }}
        >
            {props.children}
        </alertaContext.Provider>
    );
}

export default AlertaState;
