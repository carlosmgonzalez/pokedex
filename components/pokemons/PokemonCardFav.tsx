import { Card, Grid, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"

type Props = {
  id: number
}

export const PokemonCardFav: FC<Props> = ({id}) => {

  const router = useRouter();
  
  const onClick = () => {
    router.push(`/pokemons/${id}`)
  };

  return (
    <Grid xs={4} sm={3} md={2} key={id}>
      <Card 
        isPressable isHoverable
        onClick={onClick}
      >
        <Card.Body>
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={`pokemon con el id: ${id}`}
            width="100%"
            height={140}
          />
        </Card.Body>
        <Card.Footer
          css={{
            justifyItems: "flex-start"
          }}
        >
          <Row
            wrap="wrap"
            justify="space-between"
            align="center"
          >
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
