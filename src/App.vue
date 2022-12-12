<script>
import TheHeader from "./components/TheHeader.vue"
import TheMain from "./components/TheMain.vue"



export default {
    components: { TheHeader, TheMain },

    data() {
        return {

        };
    },
    methods: {},

    beforeMount() { },
}
</script>


<template>
    <div class="">
        <div>
            <TheHeader></TheHeader>
        </div>

        <div>
            <TheMain></TheMain>
        </div>
    </div>
    
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>