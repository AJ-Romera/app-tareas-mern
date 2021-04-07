import React, { useReducer } from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';

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

import clienteAxios from '../../config/axios';

function TareaState(props) {
    const initialState = {
        tareasProyecto: [],
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
    const agregarTarea = async (tarea) => {
        const resultado = await clienteAxios.post('/api/tareas', tarea);
        console.log(resultado);
        try {
            dispatch({
                type: AGREGAR_TAREA,
                payload: tarea,
            });
        } catch (error) {
            console.log(error);
        }
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
}

export default TareaState;
