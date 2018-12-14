export const increment = context => {
    setTimeout(()=> context.commit('increment') , 3300)
};