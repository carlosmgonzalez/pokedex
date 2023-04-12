import { SmallPokemon } from "@/interface";
import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { PokemonCard } from ".";
import { PokemonCardFav } from "./PokemonCardFav";

type Props = {
  favoritePokemons: number[];
}

export const PokeFavorites: FC<Props> = ({favoritePokemons}) => {

  // const searchPokemon = (pokemon: SmallPokemon[], id: Number) => {
  //   return(
  //     pokemon.find(poke => poke.id === id)
  //   )
  // };
  
  return (
    <Grid.Container
      direction="row"
      gap={2}
      justify="flex-start"
    >
      {
        favoritePokemons.map(id => {
          return (
            <PokemonCardFav id={id} key={id}/>
          )
        })
      }
    </Grid.Container>
  )

}
