import { SmallPokemon } from "@/interface"
import { Card, Grid, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router";
import { FC } from "react"

export const PokemonCard: FC<SmallPokemon> = ({id, name, img}) => {

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
            src={img}
            alt={name}
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
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

