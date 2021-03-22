import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

function ListadoProyectos() {
    // Extraer proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
    }, []);

    // Revisar si proyectos tiene contenido
    if (proyectos.length === 0) {
        return <p>No hay proyectos, cree sus proyectos gratis ahora</p>;
    }

    return (
        <ul className='listado-proyectos'>
            {proyectos.map((proyecto) => (
                <Proyecto key={proyecto.id} proyecto={proyecto} />
            ))}
        </ul>
    );
}

export default ListadoProyectos;
