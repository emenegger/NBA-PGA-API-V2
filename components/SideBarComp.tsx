import React from "react";
import {
  Pane,
  Tablist,
  SidebarTab,
  Paragraph,
  toaster,
  Button,
  Heading,
  Code,
  Tab
} from "evergreen-ui";
import { onePlayerExample, allPlayersExample } from "../public/examples";
import { CodeBlock, googlecode,} from "react-code-blocks";

const SideBarComp = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [tabs] = React.useState([
    {
      description: "Get All Players' Per Game Averages",
      string: "https://nba-pga-api.vercel.app/api/players",
      id: "1",
      example: allPlayersExample,
    },
    {
      description: "Get One Player's Per Game Averages",
      string: "https://nba-pga-api.vercel.app/api/players/<player_lastname>",
      id: "2",
      example: onePlayerExample,
    },
    {
      description: "Get Player Image",
      string: "https://nba-pga-api.vercel.app/api/players/img/<player_id>",
      id: "3",
      example:
        "https://cdn.nba.com/headshots/nba/latest/1040x760/203954.png?imwidth=1040&imheight=760",
    },
  ]);

  return (
    <Pane display="flex" height={240} padding={16} background="tint1">
      <Tablist marginBottom={16} flexBasis={500} marginRight={24}>
        {tabs.map((tab, index) => (
          <>
            <Heading size={300} padding={10}>
              {tab.description}
            </Heading>
            <Tab
              width='100%'
              key={tab.id}
              id={tab.id}
              onSelect={() => setSelectedIndex(index)}
              isSelected={index === selectedIndex}
              aria-controls={`panel-${tab.description}`}
              justifyContent="space-between"
              padding={10}
            >
              {tab.string}
              <Button
                size="small"
                onClick={() => {
                  navigator.clipboard.writeText(tab.string)
                  toaster.success(`Copied to Clipboard: ${tab.string} `)}
                }
              >
                Copy
              </Button>
            </Tab>
          </>
        ))}
      </Tablist>

      <Pane padding={16} background="tint1" flex="1" height='100vh'>
        {tabs.map((tab, index) => (
          <Pane
            key={tab.description + tab.id}
            id={`panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={tab.description}
            aria-hidden={index !== selectedIndex}
            display={index === selectedIndex ? "block" : "none"}
            borderRadius="10px"
            background="#FAFBFF"
          >
              <Paragraph
                fontFamily="mono"
                // fontSize='small'
                size={300}
              >
                <CodeBlock
                  text={tab.example}
                  language={"javascript"}
                  showLineNumbers={true}
                  theme={googlecode}
                />
              </Paragraph>
            </Pane>
        ))}
      </Pane>
    </Pane>
  );
};

export default SideBarComp;
