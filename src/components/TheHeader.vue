<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
        <a class="navbar-brand"> <i class="fas fa-utensils"></i> Vue Menu </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link class="nav-link" to="/menu">Nos Plats</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/dessert">Nos Desserts</router-link>
            </li>
            </ul>
                <router-link class="nav-link" to="/cart"><i class="fas fa-shopping-cart"></i> Mon Panier</router-link>
                
        </div>
    </nav>
</div>
</template>
<script>
export default {
    
}
</script>