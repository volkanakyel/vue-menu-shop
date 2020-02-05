<template>
<div class="p-3">
    <h1 style="text-align:center">Nos desserts</h1>
    <hr>
    <!-- <div v-if="getCart.length" class="alert alert-dismissible alert-success">
        <button type="button" class="close" data-dismiss="alert"></button>
        <h4 class="alert-heading">Ajouté au panier</h4>
    </div> -->
    <div class="d-flex flex-row flex-wrap p-1">

        <div v-for="dessert in getDesserts" :key="dessert.id" class="w-25 p-3 product-container d-flex flex-column">
            <div class="d-flex flex-row justify-content-center">
                <img style="height:150px;"  class=" menu-pic" :src="dessert.img"/>
            </div>
            <div>
                <h3 style="text-align: center;"> {{dessert.title}}</h3>      
                <hr>
            </div>
            <div>
                <p> {{dessert.description}}</p>
            </div>
            <div>
                <span> {{dessert.prix}} € </span>
                <button @click="addCard(dessert)" class="btn btn-success btn-sm center-block"> Commander</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapGetters([
            'getDesserts',
            'getCart'
        ])
    },
    methods: {
        ...mapActions({
            addCard: 'addCard',
        })
    }
}
</script>
<style scoped>
    .menu-pic {
        height: 200px;
        width: 200px;
    }
</style>