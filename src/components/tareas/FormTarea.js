import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

function FormTarea() {
    // Extraer si un proyecto está activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Si no hay proyecto seleccionado
    if (!proyecto) {
        return null;
    }

    // Array destructuring para traer el proyecto actual
    const [proyectoActual] = proyecto;

    const onSubmitTarea = (e) => {
        e.preventDefault();

        // Validar

        // Pasar la validación

        // Agregar nueva tarea al state de tareas

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
