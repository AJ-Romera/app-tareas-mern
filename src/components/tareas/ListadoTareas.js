import React from 'react';
import Tarea from './Tarea';

function ListadoTareas() {
    const tareasProyecto = [
        { nombre: 'Ad', estado: false },
        { nombre: 'Am', estado: true },
        { nombre: 'An', estado: false },
        { nombre: 'Tina', estado: true },
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
        </>
    );
}

export default ListadoTareas;
