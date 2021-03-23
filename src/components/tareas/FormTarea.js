import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

function FormTarea() {
    // Extraer si un proyecto está activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Obtener la función para añadir una nueva tarea
    const tareasContext = useContext(tareaContext);
    const { agregarTarea } = tareasContext;

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

        // Pasar la validación

        // Agregar nueva tarea al state de tareas
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agregarTarea(tarea);

        // Reiniciar el form
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
                        value='Agregar una Tarea'
                    />
                </div>
            </form>
        </div>
    );
}

export default FormTarea;
