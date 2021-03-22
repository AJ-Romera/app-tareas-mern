import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

function NuevoProyecto() {
    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, mostrarFormulario, agregarProyecto } = proyectosContext;

    // State para Proyecto
    const [proyecto, setProyecto] = useState({
        nombre: '',
    });

    // Extraer nombre del Proyecto
    const { nombre } = proyecto;

    // Lee el contenido del Input
    const onChangeProyecto = (e) => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value,
        });
    };

    // Cuando el usuario envia el proyecto
    const onSubmitProyecto = (e) => {
        e.preventDefault();

        // Validación del proyecto
        if (nombre === '') {
            return;
        }

        // Agregar el State
        agregarProyecto(proyecto);

        // Reiniciar el form
        setProyecto({
            nombre: '',
        });
    };

    // Mostrar el formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    };

    return (
        <>
            <button
                type='button'
                className='btn btn-block btn-primario'
                onClick={onClickFormulario}
            >
                Nuevo Proyecto
            </button>
            {formulario ? (
                <form
                    className='formulario-nuevo-proyecto'
                    onSubmit={onSubmitProyecto}
                >
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre del Proyecto'
                        name='nombre'
                        value={nombre}
                        onChange={onChangeProyecto}
                    />

                    <input
                        type='submit'
                        className='btn btn-primario btn-block'
                        value='Agregar Proyecto'
                    />
                </form>
            ) : null}
        </>
    );
}

export default NuevoProyecto;
