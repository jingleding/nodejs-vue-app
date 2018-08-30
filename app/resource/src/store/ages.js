export default {
    state: {
        ages: 1
    },
    getters: {
        getBigAges: (state) => {
            return state.ages > 10 ? state.ages : '你太小了'
        }
    },
    mutations: {
        getAges: (state) => {
            state.ages = state.ages + 1
        }
    },
    actions: {
        getAges: (context) => {
            context.commit('getAges', 1)
        }
    }
}
