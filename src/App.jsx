import {
  addEdge,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import "@xyflow/react/dist/style.css";
import { useCallback, useState } from "react";
import SideBar from "./SideBar";

const initialNodes = [
  { id: 1, position: { x: 50, y: 0 }, data: { label: "Test1" } },
  { id: 2, position: { x: 0, y: 10 }, data: { label: "Test2" } },
];
const initialEdges = [];

export default function App() {
  const [formVisible, setFormVisible] = useState(false);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  function handleAddNode(arr) {
    setNodes(arr);
    setFormVisible(false);
  }

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => {
        addEdge(params, eds);
      }),
    [setEdges]
  );
  return (
    <>
      <div className="wrapper" style={{ width: "100vw", height: "100vh" }}>
        <SideBar
          nodes={nodes}
          onAdd={handleAddNode}
          formVisible={formVisible}
          setFormVisible={setFormVisible}
        />
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        />
      </div>
    </>
  );
}
