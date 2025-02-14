import { useState } from "react";

function AddNodeForm({ onAdd, onCancel, nodes }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const newNode = {
          id: nodes.length + 1 || 1,
          data: {
            label: title,
            description,
          },
          position: {
            x: 0,
            y: nodes.length > 0 ? nodes[nodes.length - 1].position.y + 1 : 0,
          },
        };

        const newNodesArr = [...nodes, newNode];
        onAdd(newNodesArr);
      }}
      className="form-node">
      <input
        type="text"
        placeholder="Type title of the node"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="description"
        placeholder="Type description of the node"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="btn btn-add" type="submit">
        Add Node
      </button>
      <button className="btn btn-cancel" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default AddNodeForm;
