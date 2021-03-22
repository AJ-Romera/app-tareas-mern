import React, { useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

function ListadoTareas() {
    // Extraer proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // Si no hay proyecto seleccionado
    if (!proyecto) {
        return <h2>Selecciona un proyecto</h2>
    }

    // Array destructuring para traer el proyecto actual
    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        { nombre: 'Hacer Tarea 1', estado: false },
        { nombre: 'Seguir esto y aquello', estado: true },
        { nombre: 'Hacer la compra', estado: false },
        { nombre: 'Otra tarea distinta', estado: true },
    ];

    // Elimina un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return (
        <>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className='listado-tareas'>
                {tareasProyecto.length === 0 ? (
                    <li className='tarea'>
                        <p>No hay tareas</p>
                    </li>
                ) : (
                    tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
                )}
            </ul>

            <button type='button' className='btn btn-eliminar' onClick={onClickEliminar}>
                Elimar Proyecto &times;
            </button>
        </>
    );
}

export default ListadoTareas;
