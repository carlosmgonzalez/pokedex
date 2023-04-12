import { useEffect } from "react";

const toggleFavorite = (id: number) => {
  
  let favorites: Number[] = JSON.parse(localStorage.getItem("favorites") || "[]");

  // (favoritePokemonsId.filter(pokemonId  => pokemonId === id)).length == 1 esta forma de saber si un elemento estaba o no la hice yo
  if (favorites.includes(id)){
    favorites = favorites.filter(pokeId => pokeId != id);
  } else {
    favorites.push(id);
  };

  localStorage.setItem("favorites", JSON.stringify(favorites));
}; 

const existFavorites = (id: number): boolean => {

  if (typeof window === "undefined") return false;

  const favorites: Number[] = JSON.parse(localStorage.getItem("favorites") || "[]");

  return favorites.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};



export default {
  toggleFavorite,
  existFavorites,
  pokemons
}