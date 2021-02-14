import React, { Fragment, useState } from "react";
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';


// the diagram model

const Con_Node='node-1';
let New_Node= 'node-2';

const initialSchema = createSchema({
  nodes: [
    { id: 'node-1', content: 'Table', coordinates: [250, 60], },
    { id: 'node-2', content: 'row', coordinates: [100, 200], }
  ],
  links: [
    { input: Con_Node,  output: New_Node }
  ]
});


const Visualizer = () => {
  // create diagrams schema
  const [schema, { onChange, addNode, removeNode }] = useSchema(initialSchema);
  //const [New_Node, setValue] = useState('node-2');

  const addNewNode = () => {
    const nextNode = {
      id: `node-${schema.nodes.length+1}`,
        content: `Node ${schema.nodes.length+1}`,
        coordinates: [
          schema.nodes[schema.nodes.length - 1].coordinates[0] + 100,
          schema.nodes[schema.nodes.length - 1].coordinates[1],
        ],
    };
    New_Node=String(nextNode.id);
    schema.links.push({ input: Con_Node,  output: New_Node });
    addNode(nextNode);
  }



  return (
    <div style={{ height: '22.5rem' }}>
      <button color="primary" icon="plus" onClick={addNewNode}>Add new node</button>
      <Diagram schema={schema} onChange={onChange} />
    </div>
  );
};

export default Visualizer;