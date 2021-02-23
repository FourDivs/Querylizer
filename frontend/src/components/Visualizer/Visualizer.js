import Diagram, { createSchema, useSchema } from "beautiful-react-diagrams";
import { Div, Icon,Button, Input, Label,Text } from "atomize";
import { cloneElement, useState } from "react";
import { Row, Col ,Container} from "react-bootstrap";

import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-jsx";

import {
  FormControl,
  MenuItem,
  Select,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Dialog,
  DialogContent,
} from "@material-ui/core";

//Row Data of Each Node
const rowData = {};
rowData.data = [];

//extracting themes and language
require(`ace-builds/src-noconflict/theme-monokai`);
require(`ace-builds/src-noconflict/mode-sql`);
require(`ace-builds/src-noconflict/snippets/sql`);

//Modal Section
const ModalSize = ({ isOpen, onClose, nodeId }) => {
  const [colName, setcolName] = useState("");
  const [dataType, setdataType] = useState("");
  const [properties, setProperties] = useState({
    primary: false,
    unique: false,
    not_null: false,
  });
  const { primary, unique, not_null } = properties;

  const getRowIndex = (element) => element.id === nodeId;

  const a = rowData.data.findIndex(getRowIndex);
  
  const handleColName = (event) => {
    setcolName(event.target.value);
    rowData.data[a].name = event.target.value;
  };

  const handleChange = (event) => {
    setdataType(event.target.value);
  };

  const handleCheckbox = (event) => {
    setProperties({ ...properties, [event.target.name]: event.target.checked });
  };

  rowData.data[a].primary_key = primary;
  rowData.data[a].unique = unique;
  rowData.data[a].not_null = not_null;
  rowData.data[a].data_type = dataType;

  return (
    <Dialog open={isOpen} onClose={onClose} rounded="md">
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />
      <DialogContent style={{ width: "600px" }}>
        <Row p={{ l: "0.5rem", t: "0.25rem" }} m={{ b: "2rem" }}>
          <Col>
            <Label>Column Name:</Label>
            <Input
              placeholder="Name"
              value={colName}
              onChange={handleColName}
              h="3rem"
            />
          </Col>
          <Col>
            <Label>DataType:</Label>
            <FormControl style={{ width: "100%", fontSize: "15px" }}>
              <Select
                value={dataType}
                onChange={handleChange}
                style={{
                  borderRadius: 4,
                  position: "relative",
                  border: "1px solid #ced4da",
                  padding: "7px 12px 7px 12px",
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"number"}>Number</MenuItem>
                <MenuItem value={"varchar"}>Varchar</MenuItem>
                <MenuItem value={"date"}>Date</MenuItem>
              </Select>
            </FormControl>
          </Col>
        </Row>

        <Row p={{ l: "1rem", t: "0.25rem" }} m={{ b: "2rem" }}>
          <FormControl>
            <Label>Select Properties:</Label>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={primary}
                    onChange={handleCheckbox}
                    name="primary"
                  />
                }
                label="Primary"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={unique}
                    onChange={handleCheckbox}
                    name="unique"
                  />
                }
                label="Unique"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={not_null}
                    onChange={handleCheckbox}
                    name="not_null"
                  />
                }
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
          <Button onClick={onClose} style={{ background: "#9D4EDD" }}>
            OK
          </Button>
        </Div>
      </DialogContent>
    </Dialog>
  );
};

// the diagram model
const initialSchema = createSchema({
  nodes: [
    {
      id: "node-1",
      content: "Table",
      coordinates: [100, 30],
      outputs: [{ id: "port-1", alignment: "right" }],
    },
  ],
  links: [],
});

const Field = (props) => {
  const { inputs } = props;
  const [showModal, setState] = useState(false);

  const getRowIndex = (element) => element.id === props.id;
  const a = rowData.data.findIndex(getRowIndex);

  return (
    <div
      style={{
        background: "#C77DFF",
        borderRadius: "5px",
        textAlign: "center",
        position: "back",
      }}
    >
      <div>
        {inputs.map((port) =>
          cloneElement(port, {
            style: { width: "30px", height: "20px", background: "#1B263B" },
          })
        )}
      </div>

      <div style={{ padding: "5px" }}>
        {rowData.data[a].name}
        <Button
          onClick={() => setState(true)}
          style={{ marginTop: "5px", background: "#9D4EDD" }}
        >
          Set the Values
        </Button>
      </div>
      <ModalSize
        isOpen={showModal}
        onClose={() => setState(false)}
        nodeId={props.id}
      />
    </div>
  );
};

const Visualizer = () => {
  // create diagrams schema
  const [value, setValue] = useState("");  
  const [fontSize] = useState(16);
  const [schema, { onChange, addNode }] = useSchema(initialSchema);
  const [x_coordinate, setxCoordinate] = useState(1200);
  const [y_coordinate, setyCoordinate] = useState(5);

  console.log(rowData)
  const addNewNode = () => {
    const nextNode = {
      id: `node-${schema.nodes.length + 1}`,
      content: `Node ${schema.nodes.length + 1}`,
      coordinates: [
        x_coordinate,
        y_coordinate,
      ],
      render: Field,
      inputs: [{ id: `port-${Math.random()}` }],
    };

    const row = {};
    row.id = nextNode.id;
    row.name = nextNode.id;
    row.data_type = "";
    row.primary_key = false;
    row.unique = false;
    row.not_null = false;

    rowData.data.push(row);

    setxCoordinate(x_coordinate - 10);
    setyCoordinate(y_coordinate + 10);

    addNode(nextNode);
  };

  return (
    <Container fluid>
      <div style={{ height: "22.5rem" }}>
        
        <Text style={{textAlign:"center",padding:"3px"}}>Visualizer</Text>
        
        <Diagram schema={schema} onChange={onChange} />

        <Row>          
          
          <Col>
              <Text style={{textAlign:"center",padding:"2px",background:"black",color:"white"}}>Editor</Text>
              <AceEditor
                mode="sql"
                theme="monokai"
                value={value}
                height="200px"
                width={"auto"}
                fontSize={fontSize}
                showPrintMargin
                showGutter
              />
          </Col>

          <Col>
              <Text style={{textAlign:"center",padding:"2px",background:"black",color:"white"}}>Features</Text>
              <Row>
                  <Col style={{padding:"10px"}} >
                    <Button
                      suffix={
                        <Icon name="LongRight" size="16px" color="white" m={{ l: "1rem" }} />
                      }
                      shadow="3"
                      hoverShadow="4"
                      m={{ r: "1rem" }}

                    >
                      Add Table
                    </Button>
                  </Col>
                  <Col style={{padding:"10px"}}>
                    <Button
                      suffix={
                        <Icon name="LongRight" size="16px" color="white" m={{ l: "1rem" }} />
                      }
                      shadow="3"
                      hoverShadow="4"
                      m={{ r: "1rem" }}
                      onClick={addNewNode}
                    >
                      Add Field
                    </Button>
                  </Col>
              </Row>

              <Row>
                  <Col style={{padding:"10px"}}>
                    <Button
                      suffix={
                        <Icon name="LongRight" size="16px" color="white" m={{ l: "1rem" }} />
                      }
                      shadow="3"
                      hoverShadow="4"
                      m={{ r: "1rem" }}
                    >
                      Generate Code
                    </Button>
                  </Col>
                  <Col style={{padding:"10px"}}>
                    <Button
                      suffix={
                        <Icon name="LongRight" size="16px" color="white" m={{ l: "1rem" }} />
                      }
                      shadow="3"
                      hoverShadow="4"
                      m={{ r: "1rem" }}
                    >
                      Save Code
                    </Button>
                  </Col>
              </Row>
          </Col>
        
        </Row>
      </div>
    </Container>
  );
};

export default Visualizer;
