import React, { useReducer } from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import { v4 as uuidv4 } from 'uuid';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA,
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
        tareaSeleccionada: null,
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
        tarea.id = uuidv4();
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

    // * Extrae una tarea para editar
    const guardarTareaActual = (tarea) => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea,
        });
    };

    // * Edita una tarea
    const actualizarTarea = (tarea) => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea,
        });
    };

    // * Elimina/Limpia la tarea seleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA,
        });
    };

    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                modificarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea,
            }}
        >
            {props.children}
        </tareaContext.Provider>
    );
};

export default TareaState;
