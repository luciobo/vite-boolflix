// import sulla pagina in questo caso vue e axios 
import { reactive } from "vue";
import axios from "axios";


// export store, in questo caso esporto l'array lisyta film e il research per coollegare il v model
export const store = reactive({
    listaFilm: [],
    research: "",
    img: {
        link: "https://image.tmdb.org/t/p/",
        size: "w342",
    },
});

// funzione per la ricerca dei film, con chieve e query per la ricerca 
export function cercaFilm() {

    axios.get("https://api.themoviedb.org/3/search/movie/", {
        params: {
            api_key: "e15ac2f04fd813caf1f165f01e797011",
            query: store.research,
        },

    })
        .then(resp => {
            console.log(resp.data.results)
            store.listaFilm = resp.data.results
        });

}
