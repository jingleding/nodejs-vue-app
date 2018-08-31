export default {
    state: {
        isVisible: false
    },
    getters: {
        isVisible: (state) => {
            return state.isVisible
        }
    },
    mutations: {
        getIsVisible: (state) => {
            state.isVisible = !state.isVisible
        }
    },
    actions: {
        getIsVisible: (context) => {
            context.commit('getIsVisible')
        }
    }
}
