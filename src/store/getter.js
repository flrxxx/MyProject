export const doneTodos = state => state.todos.filter(todo => todo.done);

export const doneTodosCount = (state,getters) => getters.doneTodos.length;

export const doneTodoById = state => text => state.todos.find(todo => todo.text === text)