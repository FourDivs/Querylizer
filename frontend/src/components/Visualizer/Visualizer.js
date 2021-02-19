import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
import { Button, Icon, Input } from "atomize";

// the diagram model
const initialSchema = createSchema({
  nodes: [
    { id: 'node-1', content: 'Table', coordinates: [250, 60], outputs: [ { id: 'port-1', alignment: 'right' } ],},
    { id: 'node-2', content: 'row', coordinates: [100, 200], }
  ],
  links: [
    { input: 'node-1',  output: 'node-2' }
  ]
});

const Field = () => {
  return (
    <div style={{ background: '#717EC3', borderRadius: '10px' }}>
      New Feild
      <Input style = {{padding: '10px'}} placeholder="Basic Input" onChange = {(event) => console.log(event.target.value) } />
    </div>
  );
};


const Visualizer = () => {
  
  // create diagrams schema
  const [schema, { onChange, addNode }] = useSchema(initialSchema);
  

  const addNewNode = () => {
    const nextNode = {
      id: `node-${schema.nodes.length+1}`,
        content: `Node ${schema.nodes.length+1}`,
        coordinates: [
          schema.nodes[schema.nodes.length - 1].coordinates[0] + 100,
          schema.nodes[schema.nodes.length - 1].coordinates[1],
        ],
        render: Field,
        inputs: [{ id: `port-${Math.random()}`}],
    };

    addNode(nextNode);
  }


  return (
    <div style={{ height: '22.5rem' }}>
    
    <Button suffix={ 
      <Icon
        name="LongRight"
        size="16px"
        color="white"
        m={{ l: "1rem" }}
      />
      } shadow="3" hoverShadow="4" m={{ r: "1rem" }}
      onClick={addNewNode}
    >
      Add Field
    </Button>
      <button color="primary" icon="plus" onClick={addNewNode}>Add new node</button>
      <Diagram schema={schema} onChange={onChange} />
    </div>
  );
};

export default Visualizer;