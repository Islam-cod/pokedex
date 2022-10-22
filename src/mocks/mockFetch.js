const mockedPokemonDetails = {
    name: "tauros",
    types: [
        {
            slot: 1,
            type: {
                name: "normal",
                url: "https://pokeapi.co/api/v2/type/1/"
            }
        }
    ],
    sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
    }
};

export default async function mockFetch(url) {
    return {
        ok: true,
        status: 200,
        json: async () => mockedPokemonDetails,
    };
}