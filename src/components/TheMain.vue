
<template>
    <div class="container bg-black py-5">
        <h1 class="pb-5 text-white">FILM</h1>
        <div class="row g-4 d-flex">
            <div class="col-2" v-for="ciao in store.listaFilm">
                <div class="card h-100">
                    <img :src="store.img.link + store.img.size + ciao.poster_path" class="card-img-top" alt="">
                    <div class="card-body">
                        <h4 class="card-title">{{ciao.title}}</h4>
                        <h6>{{ciao.original_title}}</h6>
                        <p>{{ciao.original_language}}</p>
                        <p>{{ciao.vote_average}}</p>
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