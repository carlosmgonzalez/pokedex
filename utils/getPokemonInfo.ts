import { pokeApi } from "@/api";
import { FullPokemonInfo } from "@/interface";


export const getPokemonInfo = async (nameOrId: string) => {

  const { data } = await pokeApi.get<FullPokemonInfo>(`/pokemon/${nameOrId}`);
  
  return {
    name: data.name,
    sprites: data.sprites,
    id: data.id
  }
}
