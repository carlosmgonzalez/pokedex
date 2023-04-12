import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts"
import { NoFavorites } from "@/components/ui";
import { PokeFavorites } from "@/components/pokemons";
import { PokemonListResponde, SmallPokemon } from "@/interface";
import { localFavorites } from "@/utils";
import { GetStaticProps } from "next";
import { FC, useEffect, useState } from "react";

type Props = {
  pokemons: SmallPokemon[];
}

const FavoritePage: FC<Props> = ({pokemons}) => {

  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons());
  }, []);
  
  return (
    <Layout
      title="Pokemons Favoritos"
    >
      {
        favoritePokemons.length === 0 
          ? <NoFavorites/> 
          : <PokeFavorites favoritePokemons={favoritePokemons} />
      }
    </Layout>
  )
};


export default FavoritePage;

// export const getStaticProps: GetStaticProps = async (ctx) => {

//   const { data }  = await pokeApi.get<PokemonListResponde>("/pokemon?limit=151"); // your fetch function here
  
//   const pokemons: SmallPokemon[] = data.results.map((pokemon, ind) => {
//     return {
//       ...pokemon,
//       img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ind + 1}.svg`,
//       id: ind + 1
//     };
//   });

//   return {
//     props: { 
//       pokemons: pokemons
//     }
//   };
// };

