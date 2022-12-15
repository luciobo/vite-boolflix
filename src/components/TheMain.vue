
<template>
    <div class="bg-black py-5 px-3">

        <!-- film -->
        <h1 class="pb-3 text-white">FILM</h1>
        <div class="g-4 d-flex overflow-scroll">
            <div class="col-3 px-1" v-for="ciao in store.listaFilm">
                <div class="card h-100">
                    <img :src="store.img.link + store.img.size + ciao.poster_path" class="card-img-top" alt="">
                    <div class="card-body">
                        <h4 class="card-title">Titolo: {{ciao.title}}</h4>
                        <h6>Titolo Originale: {{ciao.original_title}}</h6>
                        <div>Lingua: {{ciao.original_language}}</div>
                        <div>Voto Medio: {{ciao.vote_average}}</div>
                        <div>Data Uscita: {{ciao.release_date}}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- serie tv -->
        <h1 class="pt-5 pb-3 text-white">SERIE TV</h1>
        <div class="g-4 d-flex overflow-scroll">
            <div class="col-3 px-1" v-for="ciaoSerie in store.listaSerie">
                <div class="card h-100">
                    <img :src="store.img.link + store.img.size + ciaoSerie.poster_path" class="card-img-top" alt="">
                    <div class="card-body">
                        <h4 class="card-title">Titolo: {{ciaoSerie.name}}</h4>
                        <h6>Titolo Originale: {{ciaoSerie.original_name}}</h6>
                        <div>Lingua: {{ciaoSerie.original_language}}</div>
                        <div>Voto Medio: {{ciaoSerie.vote_average}}</div>
                        <div>Data Uscita: {{ciaoSerie.first_air_date}}</div>
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
    beforeMount() {},
    mounted() {},
}

</script>

<style>

</style>