export const PokeCard = (character) => `
<div class="poke-card">
    <img src=${character.image} alt=${character.name} />
    <div class="header">
        <h2>${character.id}</h2>
        <h2>${character.name}</h2>
        </div>
        <div class="type">
        <h3>${character.height}</h3>
        <h3>${character.weight}</h3>
        <h3>${character.type}</h3>
        </div>
    
</div>
`;