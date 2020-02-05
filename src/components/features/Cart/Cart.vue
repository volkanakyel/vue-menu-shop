<template>
<div class="jumbotron">
  <h2 class="display-3" style="text-align: center;">Mon panier</h2>
  <div v-if="!printCart">
    <p class="lead" style="text-align: center;">Votre panier est vide :(</p>
  </div>
  <div v-else>
        <p class="lead" style="text-align: center;">La liste de vos article</p>
    <hr class="my-4">
    <table class="table table-hover">
      <thead>
          <tr>
          <th scope="col">Plat</th>
          <th scope="col">Description</th>
          <th scope="col">Prix</th>
          </tr>
      </thead>
      <thead v-for="item in getCart" :key="item.id">
          <tr>
          <th scope="col">{{item.title}}</th>
          <th scope="col">{{item.description}}</th>
          <th scope="col">{{item.prix}}€</th>
          </tr>
      </thead>
    </table>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getCart'
    ]),

    printCart(){
      if(this.getCart.length > 0){
        return true
      } else {
        return false;
      }
    }
  }
}
</script>


