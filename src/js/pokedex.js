const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonCards = document.querySelectorAll('.pokemon-card')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () =>{
        // Removendo as classes "open" e "ativo"
        const cartaoPokemonAberto = document.querySelector('.open')
        const pokemonAtivoNaListagem = document.querySelector('.ativo')

        cartaoPokemonAberto.classList.remove('open')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // Adicionando as classes "open" e "ativo"
        const IdPokemonSelecionado = pokemon.attributes.id.value
    
        const IdDoCartaoPokemonParaAbrir = IdPokemonSelecionado + '-card'
        const cartaoPokemonParaAbrir = document.getElementById(IdDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('open')

        const pokemonSelecionadoNaListagem = document.getElementById(IdPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
        c
    })
})