import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section/Section";
import Tabs from "./Tabs/Tabs";

export default function Examples() {
  const [topic, setTopic] = useState();

  function handleSelect(selectedButton) {
    setTopic(selectedButton);
    console.log(selectedButton);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={topic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={topic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={topic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={topic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {!topic && <p>Please select a topic.</p>}
        {topic && (
          <div id="tab-content">
            <h3>{EXAMPLES[topic].title}</h3>
            <p>{EXAMPLES[topic].description}</p>
            <pre>
              <code>{EXAMPLES[topic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
