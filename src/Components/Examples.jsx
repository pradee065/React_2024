import TabsSection from "./TabsSection.jsx";
import Section from "./Sections.jsx";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton){
    console.log(selectedTopic);
    setSelectedTopic(selectedButton);
  }
  var textContent;

  if(selectedTopic){
    textContent = <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
      {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>
  }
  else {
    textContent = <p>Please select a button</p>;
  }

    return (
        <Section title="Examples" id="examples">
          <Tabs buttonContainer="menu" button={<div>
          <TabsSection isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>components</TabsSection>
          <TabsSection isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>jsx</TabsSection>
          <TabsSection isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>props</TabsSection>
          <TabsSection isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>state</TabsSection>
          </div>}>
            {textContent}
          </Tabs>
          
          </Section>
    )
}
