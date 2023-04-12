import { Text, useTheme } from "@nextui-org/react"
import { CSSProperties } from "@nextui-org/react/types/theme";
import Image from "next/image";
import Link from "next/link"
import { useRouter } from "next/router";

export const Navbar = () => {

  // Esto es otra forma de hacer direccionar al inicio al hacer click en el logo
  // const router = useRouter(); 
  // const onClickHome = () => {
  //   router.push("/")
  // }

  const {asPath} = useRouter();

  const Active: CSSProperties = {
    color: "LightSkyBlue"
  }

  const {theme} = useTheme();

  return (
    <div
      // onClick={onClickHome}
      style={{
        display: "flex",
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray200.value,
        margin: "auto",
        height: "50px",
        marginTop: "20px",
        marginBottom: "20px",
        borderRadius: "5px",
      }}
    >
      
      <Link 
        href={"/"} 
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          cursor: "pointer"
        }}
      >
        <Text 
          color="white" 
          h1
          style={{
            marginBottom: "0"
          }}
        > P </Text>

        <Text 
          color="white" 
          h2
          style={{
            marginBottom: "0",
            marginRight: "10px"
          }}
        > okémon </Text>

        <Image 
          src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"} 
          alt="Icono de la aplicación"
          width={50}
          height={50}
        />
      </Link>

      <Link
        href={"/favorites"}
        style={{
          cursor: "pointer"
        }}
      >
        <Text 
          color="white"
          css={{
            marginBottom: "0"
          }}
          style={(asPath === "/favorites" ? Active : undefined)}
        > Favoritos </Text>
      </Link>


      {/* <nav>
        <Link
          href={}
        ></Link>
      </nav> */}
    </div>
  )
}
