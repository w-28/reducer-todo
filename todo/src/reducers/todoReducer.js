
export let initialState = [
    
    {
        id: 1,
        todo: 'Setting up reducer',
        completed: true

    },
    {
        id: 2,
        todo: 'Go over reducer again',
        completed: false
    }
]

export let todoReducer = (state, action) => {
    switch (action.type){
        case   'TOGGLE_COMPLETE':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo, completed: !todo.completed
                    };
                }else {
                    return todo;
                }
            })
        case 'ADD_TODO':
            return [
                ...state, 
                action.payload
            ]
        case 'CLEAR_TODOS':
            return state.filter(todo => !todo.completed)
        
        default:
            return state
    }
    // switch (action.type) {
    //     case "TOGGLE_COMPLETE":
    //         return state.map(todo =>     {
    //             if ( todo.id === action.payload ){
    //                 return {
    //                     ...todo,
    //                     completed: !todo.completed
    //                 };
    //             }else {
    //                 return  todo;
    //             }
    //  }
    // }
}