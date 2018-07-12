const todos = (state = 'Home', action) => {
    switch (action.type) {
        case 'ADD_TODO':
            console.log('ADD_TODO');
            console.log(action.name);
            return state;
        default:
            return state
    }
}

export default todos;