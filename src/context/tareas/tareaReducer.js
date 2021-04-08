import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA,
} from '../../types/index';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
    switch (action.type) {
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasProyecto: action.payload,
            };
        case AGREGAR_TAREA:
            return {
                ...state,
                tareasProyecto: [action.payload, ...state.tareasProyecto],
                errorTarea: false,
            };
        case VALIDAR_TAREA:
            return {
                ...state,
                errorTarea: true,
            };
        case ELIMINAR_TAREA:
            return {
                ...state,
                tareasProyecto: state.tareasProyecto.filter(
                    (tarea) => tarea._id !== action.payload
                ),
            };
        case ESTADO_TAREA:
        case ACTUALIZAR_TAREA:
            return {
                ...state,
                tareasProyecto: state.tareasProyecto.map((tarea) =>
                    tarea.id === action.payload.id ? action.payload : tarea
                ),
            };
        case TAREA_ACTUAL:
            return {
                ...state,
                tareaSeleccionada: action.payload,
            };
        case LIMPIAR_TAREA:
            return {
                ...state,
                tareaSeleccionada: null,
            };
        default:
            return state;
    }
};
