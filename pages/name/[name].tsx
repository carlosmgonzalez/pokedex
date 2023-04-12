import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { pokeApi } from "@/api"
import { FullPokemonInfo, PokemonListResponde } from "@/interface"
import { Container, Text, Image } from '@nextui-org/react'
import confetti from 'canvas-confetti'
import { useEffect } from 'react'
import { Layout } from '@/components/layouts'
import { getPokemonInfo } from '@/utils'

type Props = {
  pokemon: FullPokemonInfo
}

const PokemonNamePage: NextPage<Props> = ({pokemon}) => {

  const onEfectoChulo = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, [])
  

  return (
    <Layout title={pokemon.name}>
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 100px)",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center"
        }}
        onClick={onEfectoChulo}
      >
        <Text h1 transform="capitalize">{pokemon.name}</Text>
        <Image
          src={pokemon.sprites.other?.dream_world.front_default || "/no-image.png"}
          alt="no hay favoritos"
          width={"100"}
          height={"100"}
          css={{opacity: 0.5}}
        />
      </Container>
    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponde>("/pokemon?limit=151");

  const {results} = data;

  return {
    paths: results.map(({name}) => {
      return {
        params: {name}
      };
    }),
    fallback: false
  }
};


export const getStaticProps: GetStaticProps = async ({params}) => {

  const {name} = params as {name: string};

  return {
    props: {
      pokemon: await getPokemonInfo(name)
    } 
  }
}

export default PokemonNamePage