import { useState } from "react";

export function NewTodoForm({onSubmit}) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    //O 'e' é o que vai ser submetido
    e.preventDefault(); //Faz com que a página não recarregue ao dar submit
    onSubmit(newItem);
    setNewItem("");
  }

  return (
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input
        value={newItem} //Faz o valor padrão ser o newItem, mas lembre que ele está como uma string vazia, por isso deve-se usar o onChange.
        onChange={(e) => setNewItem(e.target.value)} //Atualiza o newItem a cada modificação na página.
        type="text"
        id="item"
      />
    </div>
    <button className="btn">Add</button>
  </form>
  )
}
