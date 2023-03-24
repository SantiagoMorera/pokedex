import axios from "axios";

await axios
    .get("http://localhost:8090/api/pokedex/")
    .then((res) => {
        console.log("✅ Axios products get success!");
    })
    .catch((err) => {
        console.log(err);
        throw "⚠️ Axios cant get pokemons";
    });

