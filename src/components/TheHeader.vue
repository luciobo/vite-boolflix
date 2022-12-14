
<template>
    <div class="container p-0">
        <div class="bg-black d-flex align-items-center justify-content-between">
            <img src="/logonetflix.png" alt="">
            <div class="input-group p-2 w-25">
                <input v-model="store.research" type="text" class="form-control" placeholder="" aria-label="Example text with button addon"
                aria-describedby="button-addon1">
                <button @click="cercaIlFilm()" class="btn btn-primary" type="button" id="button-addon1">Cerca</button>
            </div>
        </div>
    </div>

</template>


<script>
import { store, cercaFilm } from "../store"

export default {
    data() {
        return {
            store,
        };
    },
    methods: {
        cercaIlFilm(){
            cercaFilm();
        }
    },
}


</script>

<style>
img {
    width: 200px;
}
</style>