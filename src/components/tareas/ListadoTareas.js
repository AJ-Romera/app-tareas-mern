import React from 'react';
import Tarea from './Tarea';

function ListadoTareas() {
    const tareasProyecto = [
        { nombre: 'Hacer Tarea 1', estado: false },
        { nombre: 'Seguir esto y aquello', estado: true },
        { nombre: 'Hacer la compra', estado: false },
        { nombre: 'Otra tarea distinta', estado: true },
    ];

    return (
        <>
            <h2>Proyecto: Adamantina</h2>

            <ul className='listado-tareas'>
                {tareasProyecto.length === 0
                    ? (<li className='tarea'><p>No hay tareas</p></li>)
                    : tareasProyecto.map(tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    ))
                }
            </ul>

            <button type='button' className='btn btn-eliminar'>
                Elimar Proyecto &times;
            </button>
        </>
    );
}

export default ListadoTareas;
