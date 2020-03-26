import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        plats:[
            {
                title: 'Lasagne',
                description: 'Classique de la cuisine italienne !',
                prix: 12,
                img: 'https://assets.afcdn.com/recipe/20171115/75049_w1024h768c1cx2507cy1671cxt0cyt0cxb5015cyb3343.jpg',
                ordered: false,
                //id: 1
            },
            {
                title: 'Salade composé',
                description: 'Salade composé pour les grandes faims !',
                prix: 10,
                img: 'https://mediacenter.bonduelle.com/cdn/201902/FRC0214_SALADE_COMPOSEE_COLOREE_HAUTE_DEFINITION_011751.jpg',
                ordered: false,
                //id: 2
            },
            {
                title: 'Cheese Burger',
                description: 'Cheese burger avec son fromage généreux',
                prix: 8,
                img: 'https://assets.afcdn.com/recipe/20131023/13018_w1024h768c1cx2541cy1728.jpg',
                ordered: false,
                //id: 3
            },
            {
                title: 'Aubergine',
                description: 'Délicieuse aubergine farcie',
                prix: 12,
                img: 'https://assets.afcdn.com/recipe/20180208/77437_w800h600c1cx1866cy2800cxt0cyt0cxb3733cyb5600.jpg',
                ordered: false,
                //id: 4
            },
        ],
        desserts: [
            {
                title: 'Panna cotta',
                description: 'Panna cotta dessert onctueux',
                prix: 6,
                img: 'https://assets.afcdn.com/recipe/20191029/101469_w1024h768c1cx2464cy1595cxt0cyt0cxb4928cyb3190.jpg',
                ordered: false,
                //id: 5
            },
            {
                title: 'Tarte aux chocolat',
                description: 'Tarte aux chocolat noir',
                prix: 6,
                img: 'https://www.latableadessert.fr/sites/default/files/styles/mega_fiche/public/images/recipe/field_recipe_single_carousel_img/recette-tarte-chocolat_7502_2.jpg?itok=JTFDWiLi',
                ordered: false,
                //id: 6
            },
        ],
        cart: [],
    },
    getters: {
        getCart: state => state.cart,
        getDesserts: state => state.desserts,
        getPlats: state => state.plats,
    },
    mutations: {
        ADD_CARD(state, plat){
            state.cart.push(plat);
        },
        DELETE_CARD(state, id) {
            console.log(id)
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