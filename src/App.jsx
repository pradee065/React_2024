import { useState } from "react";
import Header from "./Components/Header.jsx";
import CoreComponents from "./Components/CoreComponents.jsx";
import TabsSection from "./Components/TabsSection.jsx";
import {CORE_CONCEPTS} from './data.js';
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton){
    console.log(selectedTopic);
    setSelectedTopic(selectedButton);
  }
console.log('App content goes here');
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((coreconceptitem) => <CoreComponents key={coreconceptitem.title} {...coreconceptitem}/>)}
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <section id="examples">
            <h2>Examples</h2>
          <menu>
            <TabsSection isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>components</TabsSection>
            <TabsSection isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>jsx</TabsSection>
            <TabsSection isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>props</TabsSection>
            <TabsSection isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>state</TabsSection>
          </menu>
            {!selectedTopic ? <p>Please select a button</p> : <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>}
          
        </section>
      </main>
    </div>
  );
}

export default App;
