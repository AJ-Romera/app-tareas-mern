import { React, useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO,
} from '../../types';

import clienteAxios from '../../config/axios';

const ProyectoState = (props) => {
    const initialState = {
        proyectos: [],
        formulario: false,
        errorFormulario: false,
        proyecto: null,
    };

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // Funciones para el CRUD
    // * Mostrar el formulario
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO,
        });
    };

    // * Obtener los proyectos
    const obtenerProyectos = async () => {
        try {
            const resultado = await clienteAxios.get('/api/proyectos');
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data.proyectos,
            });
        } catch (error) {
            console.log(error);
        }
    };

    // * Agregar nuevo proyecto
    const agregarProyecto = async (proyecto) => {
        try {
            const resultado = await clienteAxios.post(
                '/api/proyectos',
                proyecto
            );
            /* console.log(resultado); */
            // Insertar el proyecto en el state
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data,
            });
        } catch (error) {
            console.log(error);
        }
    };

    // * Validación de Formulario
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO,
        });
    };

    // * Selecciona un proyecto del sidebar
    const proyectoActual = (proyectoId) => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId,
        });
    };

    // * Eliminar un proyecto
    const eliminarProyecto = (proyectoId) => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId,
        });
    };

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorFormulario: state.errorFormulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto,
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    );
};

export default ProyectoState;
