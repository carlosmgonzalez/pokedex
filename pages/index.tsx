import { NextPage, GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";
import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import { PokemonCard } from "@/components/pokemons";
import { PokemonListResponde, SmallPokemon } from "@/interface";

type Props = {
  pokemons: SmallPokemon[];
};


const HomePage: NextPage<Props>= ({pokemons}) => {

  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container 
        gap={2}
        justify="flex-start"
      >
        {
          pokemons.map((pokemon) => ((
              <PokemonCard
                key={pokemon.id}
                { ...pokemon }
              />
            ))
          )
        }
      </Grid.Container>
    </Layout>
  );
};


// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data }  = await pokeApi.get<PokemonListResponde>("/pokemon?limit=151"); // your fetch function here
  
  const pokemons: SmallPokemon[] = data.results.map((pokemon, ind) => {
    return {
      ...pokemon,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ind + 1}.svg`,
      id: ind + 1
    };
  });

  return {
    props: { 
      pokemons: pokemons
    }
  };
};

export default HomePage