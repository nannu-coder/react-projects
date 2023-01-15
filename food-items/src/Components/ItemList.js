import React from "react";
import useAppContext from "../Hooks/useAppContext";
import Item from "./Item";
import Loading from "./Loading";

const ItemList = () => {
  const { loading, listItem } = useAppContext();

  if (loading) {
    return <Loading />;
  }

  if (listItem.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {listItem.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default ItemList;
