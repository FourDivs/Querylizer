import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';


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


const Visualizer = () => {
  // create diagrams schema
  const [schema, { onChange, addNode, connect }] = useSchema(initialSchema);
  //const [New_Node, setValue] = useState('node-2');

  const addNewNode = () => {
    const nextNode = {
      id: `node-${schema.nodes.length+1}`,
        content: `Node ${schema.nodes.length+1}`,
        coordinates: [
          schema.nodes[schema.nodes.length - 1].coordinates[0] + 100,
          schema.nodes[schema.nodes.length - 1].coordinates[1],
        ],
        inputs: [{ id: `port-${Math.random()}`}],
    };
    // connect('node-1', nextNode.id);
    addNode(nextNode);
  }

  
  // useEffect(() => {
    
  //   schema.links.forEach((value) => {
  //     if(value.outputs !== "node-1")
  //     {
  //       console.log(value, "happend")
  //       const index = schema.links.indexOf(value);
  //       if (index > -1) {
  //         schema.links.splice(index, 1);
  //       }
  //     }
  //   })
  // }, [schema])


  return (
    <div style={{ height: '22.5rem' }}>
      <button color="primary" icon="plus" onClick={addNewNode}>Add new node</button>
      <Diagram schema={schema} onChange={onChange} />
    </div>
  );
};

export default Visualizer;