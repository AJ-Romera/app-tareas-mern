import React from 'react'
import Proyecto from './Proyecto'

function ListadoProyectos() {

    const proyectos = [
        {nombre: 'Huracán'},
        {nombre: 'Adamantina'},
        {nombre: 'Yunivers'},
    ]

    return (
        <ul className='listado-proyectos'>
            {proyectos.map(proyecto => (
                <Proyecto proyecto={proyecto} />
            ))}
        </ul>
    )
}

export default ListadoProyectos
