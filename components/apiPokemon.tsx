import React, { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet,Image } from 'react-native';

type PokemonItem ={
    name: string,
    url: string
}
type PokemonDetalhes ={
    id: number,
    name: string,
    image: string,
    types: string[],
    weight: number
}

export default function Pokedex(){
    const [pokemon, setPokemon] = useState<PokemonDetalhes[]>([])
    useEffect(()=> {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
        .then((res)=> res.json())
        .then(async (data)=>{
            const detalhes = await Promise.all(
                data.results.map(async (poke: PokemonItem) => {
                    const res = await fetch(poke.url)
            })
        )
    })
    })
}