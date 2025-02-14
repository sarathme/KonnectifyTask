import { useState } from "react";
import AddNodeButton from "./AddNodeButton";
import FlowCard from "./FlowCard";
import AddNodeForm from "./AddNodeForm";

function SideBar({ onAdd, nodes, formVisible, setFormVisible }) {
  return (
    <div className="sidebar">
      {!formVisible && (
        <>
          {nodes.map((node) => (
            <FlowCard node={node} key={node.id} />
          ))}

          <AddNodeButton onClick={() => setFormVisible(true)} />
        </>
      )}

      {formVisible && (
        <AddNodeForm
          onCancel={() => setFormVisible(false)}
          onAdd={onAdd}
          nodes={nodes}
        />
      )}
    </div>
  );
}

export default SideBar;
