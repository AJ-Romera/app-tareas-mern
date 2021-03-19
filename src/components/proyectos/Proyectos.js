import React from 'react';
import Barra from '../layout/Barra';
import Sidebar from '../layout/Sidebar';
import FormTarea from '../tareas/FormTarea';

function Proyectos() {
    return (
        <div className='contenedor-app'>
            <Sidebar />

            <div className='seccion-principal'>
                <Barra />

                <main>
                    <FormTarea />

                    <div className='contenedor-tareas'></div>
                </main>
            </div>
        </div>
    );
}

export default Proyectos;
