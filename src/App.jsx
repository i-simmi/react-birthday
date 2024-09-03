import { useState } from "react";
import  data  from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday todays</h3>
        <List people={people} />
        <button type="button" onClick={() => setPeople([])} className="btn btn-block" >
          Clear All
        </button>
      </section>
    </main>
  )
}

export default App;
