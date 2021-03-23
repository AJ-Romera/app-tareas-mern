import React, { useReducer } from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';

const TareaState = (props) => {
    const initialState = {
        tareas: [
            { nombre: 'Hacer Tarea 1', estado: false, proyectoId: 1 },
            { nombre: 'Seguir esto y aquello', estado: true, proyectoId: 2 },
            { nombre: 'Hacer la compra', estado: false, proyectoId: 3 },
            { nombre: 'Otra tarea distinta', estado: true, proyectoId: 3 },
            { nombre: 'Hacer Tarea 1', estado: false, proyectoId: 3 },
            { nombre: 'Seguir esto y aquello', estado: true, proyectoId: 1 },
            { nombre: 'Hacer la compra', estado: false, proyectoId: 2 },
            { nombre: 'Otra tarea distinta', estado: true, proyectoId: 1 },
            { nombre: 'Hacer Tarea 1', estado: false, proyectoId: 3 },
            { nombre: 'Seguir esto y aquello', estado: true, proyectoId: 3 },
        ],
    };

    // Crear state y dispatch
    const [state, dispatch] = useReducer(tareaReducer, initialState)

    return (
        <tareaContext.Provider value={{ tareas: state.tareas}}>
            {props.children}
        </tareaContext.Provider>
    )
};

export default TareaState;
