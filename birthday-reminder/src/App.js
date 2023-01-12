import { useState } from "react";
import data from "./Components/Data";
import List from "./Components/List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="App">
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>clear all</button>
        </section>
      </main>
    </div>
  );
}

export default App;
