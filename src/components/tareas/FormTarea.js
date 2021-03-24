import React, { useContext, useEffect, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

function FormTarea() {
    // Extraer si un proyecto está activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Obtener la función para añadir una nueva tarea
    const tareasContext = useContext(tareaContext);
    const {
        errorTarea,
        tareaSeleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
    } = tareasContext;

    // Effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if (tareaSeleccionada !== null) {
            setTarea(tareaSeleccionada);
        } else {
            setTarea({
                nombre: '',
            });
        }
    }, [tareaSeleccionada]);

    // State del formulario
    const [tarea, setTarea] = useState({
        nombre: '',
    });

    // Extraer el nombre del proyecto
    const { nombre } = tarea;

    // Si no hay proyecto seleccionado
    if (!proyecto) {
        return null;
    }

    // Array destructuring para traer el proyecto actual
    const [proyectoActual] = proyecto;

    // Leer los valores del formulario
    const handleChange = (e) => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmitTarea = (e) => {
        e.preventDefault();

        // Validar
        if (nombre.trim() === '') {
            validarTarea();
            return;
        }

        // Agregar nueva tarea al state de tareas
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agregarTarea(tarea);

        // Obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        // Reiniciar el form
        setTarea({
            nombre: '',
        });
    };

    return (
        <div className='formulario'>
            <form onSubmit={onSubmitTarea}>
                <div className='contenedor-input'>
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre de la Tarea'
                        name='nombre'
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className='contenedor-input'>
                    <input
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value={
                            tareaSeleccionada
                                ? 'Editar Tarea'
                                : 'Agregar una Tarea'
                        }
                    />
                </div>
            </form>

            {errorTarea ? (
                <p className='mensaje error'>
                    Por favor, escriba el nombre de la tarea que quiere añadir
                </p>
            ) : null}
        </div>
    );
}

export default FormTarea;
