import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Pane, Card, Heading, Text, Stack } from "evergreen-ui";
import SideBarComp from "../components/SideBarComp";
import { CodeBlock, dracula } from "react-code-blocks";
import { onePlayerExample, allPlayersExample } from '../public/examples';

const inter = Inter({ subsets: ["latin"] });

const queries = `[
  {
    description: "Get All Players' Per Game Averages",
    string: "https://nba-pga.com/players",
  },
  {
    description: "Get One Player's Per Game Averages",
    string: "https://nba-pga.com/players/<player-last-name>",
  },
  {
    description: "Get Player Image",
    string: "https://nba-pga.com/imgs/<player-last-name>",
  },
]`;

export default function Home() {
  return (
    <>
      <Pane
        display="flex"
        flexDirection="column"
        justifyContent="center"
        padding={15}
        width="100vw"
        alignItems="center"
      >
        <Heading size={900}>NBA Per Game Averages</Heading>
        <Heading size={600}>Free API for 2022-23 NBA Per Game Averages</Heading>
      </Pane>
      <Pane display="flex" padding={10}>
        <Heading flexBasis={554}>Query Strings</Heading>
        <Heading flex="1">Results</Heading>
      </Pane>
      <SideBarComp />
    </>
  );
}
