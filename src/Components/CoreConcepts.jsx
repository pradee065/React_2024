import { CORE_CONCEPTS } from "../data.js";
import CoreComponents from "./CoreComponents.jsx";

export default function CoreConcepts(){
    return (
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((coreconceptitem) => <CoreComponents key={coreconceptitem.title} {...coreconceptitem}/>)}
          </ul>
        </section>
    )
}