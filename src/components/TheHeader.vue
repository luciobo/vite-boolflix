
<template>
    <div class=" p-0">
        <div class="bg-black d-flex align-items-center justify-content-between">
            <img src="/logonetflix.png" alt="">
            <form @submit.prevent="cercaIlFilm()">
                <div class="input-group p-2 d-flex">
                    <input v-model="store.research" type="text" class="form-control" placeholder="" aria-label="Example text with button addon"
                    aria-describedby="button-addon1">
                    <!-- ascolto il click sul pulsante -->
                    <button @click="cercaIlFilm()" class="btn btn-primary" type="button" id="button-addon1">Cerca</button>
                </div>
            </form>
        </div>
    </div>

</template>


<script>
// importo lo store, mi servira per collegare il button per la ricerca e per il search in store.js
import { store, cercaFilm, cercaSerie } from "../store"

export default {
    data() {
        return {
            store,
        };
    },
    methods: {
        cercaIlFilm(){
            cercaFilm();
            cercaSerie();
        }
    },
}


</script>

<style>
img {
    width: 200px;
}
</style>