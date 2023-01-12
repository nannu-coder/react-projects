import { useEffect, useState } from "react";
import Alert from "./Components/Alert";
import List from "./Components/List";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function App() {
  const [list, setList] = useState(getLocalStorage());
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ status: false, type: "", msg: "" });
  const [editId, setEditId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      showAlert(true, "please enter a name", "danger");
    } else if (isEditing && name) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "Edit Success", "success");
    } else {
      showAlert(true, "Item Insert Successfully", "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ status: show, msg, type });
  };

  const clearList = (e) => {
    showAlert(true, "Item Deleted Successfully", "danger");
    setList([]);
  };

  const deleteItem = (id) => {
    console.log(id);
    showAlert(true, "Item Deleted Successfully", "danger");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    // showAlert(true, "edit Success", "success");
    const specificItem = list.find((item) => item.id === id);
    setEditId(id);
    setIsEditing(true);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.status && (
          <Alert {...alert} removeAlert={showAlert} list={list} />
        )}

        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List items={list} deleteItem={deleteItem} editItem={editItem} />
        {list.length > 0 && (
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
