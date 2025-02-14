function AddNodeButton({ onClick }) {
  return (
    <button className="btn btn-add" onClick={onClick}>
      {" "}
      Add New Node
    </button>
  );
}

export default AddNodeButton;
