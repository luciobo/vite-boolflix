
<template>
    <div class="container bg-black py-5">
        <div class="row g-4">
            <div class="col-3">
                <div class="card" 
                v-for="ciao in store.listaFilm">
                    <img src="" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{ciao.title}}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from "../store"
import axios from "axios";

export default {
    data() {
        return {
            store,
        };
    },
    methods: {},
    beforeMount() { },
    mounted() {
    },
}

</script>

<style>

</style>