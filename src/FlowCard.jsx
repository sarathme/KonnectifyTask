function FlowCard({ handleAddNode, node }) {
  return (
    <button className="btn btn-node" onClick={handleAddNode}>
      <h1>{node.data.label}</h1>
    </button>
  );
}

export default FlowCard;
