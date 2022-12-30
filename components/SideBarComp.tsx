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
} from "evergreen-ui";
import { onePlayerExample, allPlayersExample } from "../public/examples";
import { CodeBlock, dracula } from "react-code-blocks";

const SideBarComp = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [tabs] = React.useState([
    {
      description: "Get All Players' Per Game Averages",
      string: "https://nba-pga.com/players",
      id: "1",
      example: allPlayersExample,
    },
    {
      description: "Get One Player's Per Game Averages",
      string: "https://nba-pga.com/players/<player-last-name>",
      id: "2",
      example: onePlayerExample,
    },
    {
      description: "Get Player Image",
      string: "https://nba-pga.com/imgs/<player-last-name>",
      id: "3",
      example:
        "https://cdn.nba.com/headshots/nba/latest/1040x760/203954.png?imwidth=1040&imheight=760",
    },
  ]);

  console.log(tabs);

  return (
    <Pane display="flex" height={240} padding={16}>
      <Tablist marginBottom={16} flexBasis={400} marginRight={24}>
        {tabs.map((tab, index) => (
          <>
            <Heading size={200} paddingBottom={5}>
              {tab.description}
            </Heading>
            <SidebarTab
              key={tab.id}
              id={tab.id}
              onSelect={() => setSelectedIndex(index)}
              isSelected={index === selectedIndex}
              aria-controls={`panel-${tab.description}`}
              justifyContent="space-between"
            >
              {tab.string}
              <Button
                size="small"
                onClick={() =>
                  toaster.success(`Copied to Clipboard: ${tab.string} `)
                }
              >
                Copy
              </Button>
            </SidebarTab>
          </>
        ))}
      </Tablist>

      <Pane padding={16} background="tint1" flex="1">
        {tabs.map((tab, index) => (
          <Pane
            key={tab.description + tab.id}
            id={`panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={tab.description}
            aria-hidden={index !== selectedIndex}
            display={index === selectedIndex ? "block" : "none"}
            borderRadius="10px"
          >
            <Pane flex="1">
              <Paragraph fontFamily="monospace">
                <CodeBlock
                  text={tab.example}
                  language={"javascript"}
                  showLineNumbers={true}
                  theme={dracula}
                />
              </Paragraph>
            </Pane>
          </Pane>
        ))}
      </Pane>
    </Pane>
  );
};

export default SideBarComp;
