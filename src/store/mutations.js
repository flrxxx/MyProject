//更改状态

export const increment = state => {
    state.count++;
    state.history.push('increment');
}
export const decrement = state => {
    state.count--;
    state.history.push('decrement');
}
export const changname = (state,n) =>{
    state.user.username = n;
}