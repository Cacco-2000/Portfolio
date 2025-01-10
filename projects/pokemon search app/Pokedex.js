const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonInfo = document.getElementById("pokemon-info");


const fetchPokemon = async () =>
{
    const query = searchInput.value.toLowerCase();

    if(!query)
    {
        alert("Inserisci un nome o l'ID di un Pokemon valido!");
        return;
    }

    pokemonInfo.innerHTML = `<div class="loading-spinner"></div>`

    try
    {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        if(!response.ok)
        {
            throw new Error("Pokemon non trovato!");
        }

        const data = await response.json();
        displayPokemon(data);
    }
    catch(error)
    {
        if(error.message === "Pokemon non trovato!")
        {
            const randomPokemons = await getRandomPokemon();
            pokemonInfo.innerHTML = 
            `
                <p style="color: red;">Pokemon non trovato! Prova con:</p>
                <div class="pokemon-suggestions">
                    ${randomPokemons.map(pokemon => `
                        <div class="pokemon-card">
                            <a href="#" onclick="searchPokemon('${pokemon.name}')">
                                <img src="${pokemon.image}" alt="${pokemon.name}">
                                <p>${pokemon.name}</p>
                            </a>
                        </div>
                    `).join("")}
                </div>
            `;
        }
        else 
        {
            pokemonInfo.innerHTML = `<p style="color: red;">Si è verificato un errore. Riprova più tardi o controlla la tua connessione di rete</p>`;
        }
    }
}


const getRandomPokemon = async (count = 3) => 
{
    const maxPokemon = 1025;
    const randomPokemons = [];

    for (let i = 0; i < count; i++) 
    {
        const randomId = Math.floor(Math.random() * maxPokemon) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const data = await response.json();
        randomPokemons.push
        ({
            name: data.name,
            image: data.sprites.front_default
        });
    }

    return randomPokemons;
};



const displayPokemon = (pokemon) => 
{
    pokemonInfo.innerHTML = `
        <h2>${pokemon.name.toUpperCase()}</h2>
        <div class="pokemon-sprites">
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name} front" />
        </div>

        <div class="pokemon-base-stats">
            <p>ID: ${pokemon.id}</p>
            <p>Altezza: ${pokemon.height} dm</p>
            <p>Peso: ${pokemon.weight} kg</p>
        </div>

        <div class="pokemon-stats">
            <p><strong>HP:</strong> ${pokemon.stats[0].base_stat}</p>
            <p><strong>Attacco:</strong> ${pokemon.stats[1].base_stat}</p>
            <p><strong>Difesa:</strong> ${pokemon.stats[2].base_stat}</p>
            <p><strong>Attacco Speciale:</strong> ${pokemon.stats[3].base_stat}</p>
            <p><strong>Difesa Speciale:</strong> ${pokemon.stats[4].base_stat}</p>
            <p><strong>Velocità:</strong> ${pokemon.stats[5].base_stat}</p>
        </div>
    `;
}

const searchPokemon = (name) => 
{
    searchInput.value = name;
    fetchPokemon();
};

searchButton.addEventListener("click", fetchPokemon);