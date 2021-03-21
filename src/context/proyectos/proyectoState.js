import { React, useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO } from '../../types';

const ProyectoState = (props) => {
    const initialState = {
        proyectos: [
            { id: 1, nombre: 'Huracán' },
            { id: 2, nombre: 'Adamantina' },
            { id: 3, nombre: 'Yunivers' },
        ],
        formulario: false,
    };

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // Funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO,
        });
    };

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    );
};

export default ProyectoState;
