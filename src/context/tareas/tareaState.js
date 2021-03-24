import React, { useReducer } from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
} from '../../types/index';

const TareaState = (props) => {
    const initialState = {
        tareas: [
            { id: 1, nombre: 'Hacer Tarea 1', estado: false, proyectoId: 1 },
            {
                id: 2,
                nombre: 'Seguir esto y aquello',
                estado: true,
                proyectoId: 2,
            },
            { id: 3, nombre: 'Hacer la compra', estado: false, proyectoId: 3 },
            {
                id: 4,
                nombre: 'Otra tarea distinta',
                estado: true,
                proyectoId: 3,
            },
            { id: 5, nombre: 'Hacer Tarea 1', estado: false, proyectoId: 3 },
            {
                id: 6,
                nombre: 'Seguir esto y aquello',
                estado: true,
                proyectoId: 1,
            },
            { id: 7, nombre: 'Hacer la compra', estado: false, proyectoId: 2 },
            {
                id: 8,
                nombre: 'Otra tarea distinta',
                estado: true,
                proyectoId: 1,
            },
            { id: 9, nombre: 'Hacer Tarea 1', estado: false, proyectoId: 3 },
            {
                id: 10,
                nombre: 'Seguir esto y aquello',
                estado: true,
                proyectoId: 3,
            },
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

    // * Eliminar las tareas por su id
    const eliminarTarea = (id) => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id,
        });
    };

    // * Modificar estado de una tarea
    const modificarEstadoTarea = (tarea) => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea,
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
                eliminarTarea,
                modificarEstadoTarea,
            }}
        >
            {props.children}
        </tareaContext.Provider>
    );
};

export default TareaState;
