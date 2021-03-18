import React, { useState } from 'react'

function NuevoProyecto() {

    // State para Proyecto
    const [proyecto, setProyecto] = useState({
        nombre: '',
    });

    // Extraer nombre del Proyecto
    const { nombre } = proyecto;

    // Lee el contenido del Input
    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario envia el proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validación del proyecto

        // Agregar el Stake

        // Reiniciar el form
    }

    return (
        <>
            <button type='button' className='btn btn-block btn-primario'>
                Nuevo Proyecto
            </button>
            <form className='formulario-nuevo-proyecto' onSubmit={onSubmitProyecto}>
                <input type="text" className='input-text' placeholder='Nombre del Proyecto' name='nombre' value={nombre} onChange={onChangeProyecto} />

                <input type="submit" className='btn btn-primario btn-block' value='Agregar Proyecto' />
            </form>
        </>
    )
}

export default NuevoProyecto
