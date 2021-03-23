import React, { useReducer } from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';

const TareaState = (props) => {
    const initialState = {
        tareas: {},
    };

    // Crear state y dispatch
    const [state, dispatch] = useReducer(tareaReducer, initialState)

    return (
        <tareaContext.Provider>
            {props.children}
        </tareaContext.Provider>
    )
};

export default TareaState;
