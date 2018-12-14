//派生状态 而非更改状态  更改状态使用 mutations

export const doneTodos = state => state.todos.filter(todo => todo.done);

export const doneTodosCount = (state,getters) => getters.doneTodos.length;

export const doneTodosText = (state,getters) => {
    let newArray = [];
    for(let i=0,t = 0; i<state.todos.length; i++){
        t = i +1;
        let newobj = {
            ...state.todos[i],
            text:'第'+ t +'条数据的text是'+ state.todos[i].text
        };
        newArray.push(newobj);
    }
    return newArray;
}

export const doneTodoById = state => text => {
    return state.todos.find(todo => todo.text === text)
}