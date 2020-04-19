import Vue from 'vue';
import Vuex from 'vuex';
import stateData from './stateData';

Vue.use(Vuex);

export default new Vuex.Store({
    state: stateData,
    getters: {
        getCart: state => state.cart,
        getDesserts: state => state.desserts,
        getPlats: state => state.plats,
        getCommand: state => state.commandValid
    },
    mutations: {
        ADD_CARD(state, plat){
            state.commandValid = true;
            state.cart.push(plat);
            setTimeout(() => {
                state.commandValid = false;
            }, 1500);
        },
        DELETE_CARD(state, id) {
            state.cart.splice(id, 1);
        }
    },
    actions: {
        addCard(store, plat){
            store.commit('ADD_CARD', plat);
        },
        deleteCard(store, id){
            store.commit('DELETE_CARD', id)
        }
    }
})