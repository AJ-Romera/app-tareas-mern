import React, { useReducer } from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
} from '../../types/index';

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
        tareasProyecto: null,
        errorTarea: false,
    };

    // Crear state y dispatch
    const [state, dispatch] = useReducer(tareaReducer, initialState);

    // Crear las funciones

    // * Obtener tareas de un proyecto
    const obtenerTareas = (proyectoId) => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId,
        });
    };

    // * Agregar una tarea al proyecto seleccionado
    const agregarTarea = (tarea) => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea,
        });
    };

    // * Valida y muestra un error si lo hubiera
    const validarTarea = (tarea) => {
        dispatch({
            type: VALIDAR_TAREA,
        });
    };

    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                obtenerTareas,
                agregarTarea,
                validarTarea,
            }}
        >
            {props.children}
        </tareaContext.Provider>
    );
};

export default TareaState;
