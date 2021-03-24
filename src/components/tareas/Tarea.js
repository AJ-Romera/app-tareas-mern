import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

function Tarea({ tarea }) {
    // Extraer si un proyecto está activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Obtener la función del context de tarea
    const tareasContext = useContext(tareaContext);
    const {
        obtenerTareas,
        eliminarTarea,
        modificarEstadoTarea,
        guardarTareaActual,
    } = tareasContext;

    // Extraer el proyecto
    const [proyectoActual] = proyecto;

    // Función que se ejecuta al pulsar el botón de eliminar tarea
    const tareaEliminar = (id) => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    };

    // Función que cambia el estado de las tareas
    const cambiarEstadoTarea = (tarea) => {
        if (tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }
        modificarEstadoTarea(tarea);
    };

    // Agrega una tarea actual cuando el usuario quiera editarla
    const seleccionarTarea = (tarea) => {
        guardarTareaActual(tarea);
    };

    return (
        <li className='tarea sombra'>
            <p>{tarea.nombre}</p>

            <div className='estado'>
                {tarea.estado ? (
                    <button
                        type='button'
                        className='completo'
                        onClick={() => cambiarEstadoTarea(tarea)}
                    >
                        Completo
                    </button>
                ) : (
                    <button
                        type='button'
                        className='incompleto'
                        onClick={() => cambiarEstadoTarea(tarea)}
                    >
                        Incompleto
                    </button>
                )}
            </div>

            <div className='acciones'>
                <button
                    type='button'
                    className='btn btn-primario'
                    onClick={() => seleccionarTarea(tarea)}
                >
                    Editar
                </button>
                <button
                    type='button'
                    className='btn btn-secundario'
                    onClick={() => tareaEliminar(tarea.id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
    );
}

export default Tarea;
