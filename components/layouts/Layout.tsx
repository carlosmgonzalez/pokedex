import { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

type Props = {
  children?: ReactNode;
  title: string;
}

const origin = (typeof window === "undefined") ? "" : window.location.origin;

export const Layout: FC<Props> = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Carlos Gonzalez" />
        <meta name="description" content={`Infotmacion sobre el pokemon ${title}`}/>
        <meta name="keywords" content={`${title}, podemon, pokedex`}/>

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/_next/image?url=%2Fimg%2Fbanner.png&w=256&q=75`} />
      </Head>

      <Navbar/>

      <main
        style={{
          width: "90%",
          margin: "auto"
        }}
      >
        {children}
      </main>
    </>
  );
};
