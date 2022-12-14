
import { reactive } from "vue";
import axios from "axios";



export const store = reactive({
    listaFilm: [],
    research: "",
    img: {
        link: "https://image.tmdb.org/t/p/",
        size: "w342",
    },
});


export function cercaFilm() {
    const rootUrl = "https://api.themoviedb.org/3"

    axios.get(rootUrl + "/search/movie/", {
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
