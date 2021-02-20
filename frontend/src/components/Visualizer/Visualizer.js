import Diagram, { createSchema, useSchema} from 'beautiful-react-diagrams';
import { Div,Button, Modal, Icon, Text, Input, Row, Col, Label  } from "atomize";
import { cloneElement, useState } from "react";
import {InputLabel,MenuItem ,FormControl,Select ,FormGroup ,Checkbox,FormControlLabel } from '@material-ui/core';

//Datatype DropDown



//field modal
const ModalSize = ({ isOpen, onClose }) => {
  const [colName, setcolName] = useState('');
  const [dataType, setdataType] = useState('');
  const [properties, setProperties] = useState({
    primary: false,
    unique: false,
    not_null: false,
  });

  const { primary, unique, not_null } = properties;

  const handleColName = (event) => {
    setcolName(event.target.value);
  };
  const handleChange = (event) => {
    setdataType(event.target.value);
  };
  const handleCheckbox = (event) => {
    setProperties({ ...properties, [event.target.name]: event.target.checked });
  };
  
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        rounded="md"
        maxW="48rem"
      >
        <Icon
          name="Cross"
          pos="absolute"
          top="1rem"
          right="1rem"
          size="16px"
          onClick={onClose}
          cursor="pointer"
        />
        <Row
          p={{ l: "0.5rem", t: "0.25rem" }}
          m={{ b: "2rem" }}
          >
          <Col>
            <Label>Column Name:</Label>
            <Input placeholder="Name" value={colName} onChange={handleColName} h="3rem" />
          </Col>
          <Col>
            <Label>DataType:</Label>
            <FormControl style={{width:"100%",fontSize: "15px",}}>
              <Select
                value={dataType}
                onChange={handleChange}
                style={{
                  borderRadius: 4,
                  position: 'relative',
                  border: '1px solid #ced4da',
                  padding: '7px 12px 7px 12px',}}
                >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'number'}>Number</MenuItem>
                <MenuItem value={'varchar'}>Varchar</MenuItem>
                <MenuItem value={'date'}>Date</MenuItem>
              </Select>
            </FormControl>
          </Col>
        </Row>
        
        <Row
          p={{ l: "1rem", t: "0.25rem" }}
          m={{ b: "2rem" }}
        >
          <FormControl>
            
          <Label>Select Properties:</Label>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={primary} onChange={handleCheckbox} name="primary" />}
                label="Primary"
              />
              <FormControlLabel
                control={<Checkbox checked={unique} onChange={handleCheckbox} name="unique" />}
                label="Unique"
              />
              <FormControlLabel
                control={<Checkbox checked={not_null} onChange={handleCheckbox} name="not_null" />}
                label="Not Null"
              />
            </FormGroup>
          </FormControl>
        </Row>

        <Div d="flex" justify="flex-end">
          <Button
            onClick={onClose}
            bg="gray200"
            textColor="medium"
            m={{ r: "1rem" }}
          >
            Close
          </Button>
          <Button onClick={onClose} style={{background: '#9D4EDD'}}>
            OK
          </Button>
        </Div>
      </Modal>
    );
};
  

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


const Field = (props) => {
  const { inputs } = props;
  const [showModal,setState]=useState(false)

  return (
    <div style={{ background: '#C77DFF', borderRadius: '5px', textAlign:'center'}}>
      {inputs.map((port) => cloneElement(port, {
            style: { width: '30px', height: '20px', background: '#1B263B' }
      }))}

      <div style={{ padding:'5px'}}>          
        New Feild
        {/* <Input style={{ marginTop:'5px'}} placeholder="Basic Input" onChange = {(event) => console.log(event.target.value) } />
       */}
        <Button
            onClick={() =>
              setState(true)
            }
            style={{ marginTop:'5px' ,background: '#9D4EDD'}}
          >
          Set the Values
        </Button>
       <ModalSize
          isOpen={showModal}
          onClose={() => setState(false)}
        />
      </div>
    </div>
  );
};


const Visualizer = () => {
  
  // create diagrams schema
  const [schema, { onChange, addNode }] = useSchema(initialSchema)  

  const addNewNode = () => {
    const nextNode = {
      id: `node-${schema.nodes.length+1}`,
        content: `Node ${schema.nodes.length+1}`,
        coordinates: [
          schema.nodes[schema.nodes.length - 1].coordinates[0] + 225,
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