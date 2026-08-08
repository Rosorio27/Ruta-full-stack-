const obtenerPokemon = async ()=>{

    try {
        const consulta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        console.log(consulta);
        const datos = await consulta.json(); 
        console.log(datos); 

        console.log(datos.name); 
        console.log(datos.height); 
        console.log(datos.abilities); 

        const arregloDatos =datos.abilities.map((item) => item.ability.name)
        console.log(arregloDatos); 
        
    } catch (error) {
        console.log("Error al obtener pokemon", error )
    }
};

obtenerPokemon(); 
