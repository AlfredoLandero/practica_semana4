const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./sad-pikachu.gif")
        } else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.other.home.front_default;
            pokeImage(pokeImg)

            let pokename = data.name;
            document.getElementById("nombre").innerHTML = pokename;

            let poketipo = data.types.map((typ) => typ.type.name);
            document.getElementById("tipo").innerHTML = poketipo;

            let moves = data.moves.map((typ) => typ.move.name);
            document.getElementById("movimientos").innerHTML = "";

            moves.forEach(function(el) {
                document.getElementById("movimientos").innerHTML += "<li>" + el + "</li>";
            });

        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokename = () => {
    const pokenombre = document.getElementById("nombre");
    pokenombre.src = url;
}

const poketipo = () => {
    const poket = document.getElementById("tipo");
    poket.src = url;
}

const pokemovimientos = () => {
    const pokem = document.getElementById("movimientos");
    pokem.src = url;
}