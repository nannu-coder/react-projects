import { useState } from "react";
import Category from "./Components/Category";
import MenuItems from "./Components/MenuItems";
import items from "./Data";
const categoryItem = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  console.log(menuItems);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Category filterItems={filterItems} categoryItem={categoryItem} />
        <MenuItems items={menuItems} />
      </section>
    </main>
  );
}

export default App;
