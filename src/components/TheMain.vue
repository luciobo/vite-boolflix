
<template>
    <div class="container bg-black py-5">
        <div class="row g-4">
            <div class="col-3">

                <div class="card" 
                v-for="ciao in store.listaFilm">
                    <img src="" class="card-img-top" alt="">
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