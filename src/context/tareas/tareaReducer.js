import { TAREAS_PROYECTO } from '../../types/index';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
    switch (action.type) {
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasProyecto: state.tareas.filter(
                    (tarea) => tarea.proyectoId === action.payload
                ),
            };
        default:
            return state;
    }
};
