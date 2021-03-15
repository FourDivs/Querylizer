import Diagram, { createSchema, useSchema } from "beautiful-react-diagrams";
import { Div, Icon, Button, Input, Label, Text } from "atomize";
import { cloneElement, Fragment, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import CodeEditor from "../CodeEditor/CodeEditor";
import CloseIcon from "@material-ui/icons/Close";
import {
  FormControl,
  MenuItem,
  Select,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Dialog,
  DialogContent,
  IconButton,
  withStyles,
  Slider,
} from "@material-ui/core";
import Panel from "../Panel/Panel"
import Navbar from "../Navbar/Navbar";
import classes from "./Visualizer.module.css";
//Row Data of Each Node

const rowData = {};
rowData.data = [];

const tableData = {};
tableData.data =[];


const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

//Modal Section
const ModalSize = ({ isOpen, onClose, nodeId }) => {
  const [colName, setcolName] = useState("");
  const [disable, setSliderDisable] = useState(true);
  const [dataType, setdataType] = useState("");
  const [maxLength, setMaxLength] = useState(0);
  const [properties, setProperties] = useState({
    primary: false,
    unique: false,
    not_null: false,
  });
  const { primary, unique, not_null } = properties;

  const getRowIndex = (element) => element.id === nodeId;

  const rowIndex = rowData.data.findIndex(getRowIndex);

  const handleColName = (event) => {
    setcolName(event.target.value);
    rowData.data[rowIndex].column_name = event.target.value;
  };

  const handleMaxLength = (event, newValue) => {
    setMaxLength(newValue);
    rowData.data[rowIndex].max_length = newValue;
  };

  const handleChange = (event) => {
    setdataType(event.target.value);
    if (event.target.value === "varchar") {
      setSliderDisable(false);
    } else {
      setSliderDisable(true);
      rowData.data[rowIndex].max_length = 0;
    }
  };

  const handleCheckbox = (event) => {
    setProperties({ ...properties, [event.target.name]: event.target.checked });
  };

  rowData.data[rowIndex].primary_key = primary;
  rowData.data[rowIndex].unique = unique;
  rowData.data[rowIndex].not_null = not_null;
  rowData.data[rowIndex].data_type = dataType;

  return (
    <Dialog open={isOpen} onClose={onClose} rounded="md">
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
                <MenuItem value={"int"}>Integer</MenuItem>
                <MenuItem value={"varchar"}>Varchar</MenuItem>
                <MenuItem value={"date"}>Date</MenuItem>
              </Select>
            </FormControl>
          </Col>
        </Row>
        <Row>
          <Label>Max Length:</Label>
          <Container>
            <PrettoSlider
              disabled={disable}
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              value={typeof maxLength === "number" ? maxLength : 0}
              onChange={handleMaxLength}
            />
          </Container>
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

const TableModal = ({ isOpen, onClose,nodeId }) => {
  const [Table_Name, setTableName] = useState("");

  const getTableIndex = (element) => element.id === nodeId;
  const tableIndex = tableData.data.findIndex(getTableIndex);

  const handleTableName = (event) => {
    setTableName(event.target.value);
    tableData.data[tableIndex].table_name = event.target.value;
  };

  return (
    <Dialog open={isOpen} onClose={onClose} rounded="md">
      <DialogContent style={{ width: "600px" }}>
        <Row p={{ l: "0.5rem", t: "0.25rem" }} m={{ b: "2rem" }}>
          <Col>
            <Label>Table Name:</Label>
            <Input
              placeholder="Enter Table Name"
              value={Table_Name}
              onChange={handleTableName}
              h="3rem"
            />
          </Col>
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

const TableNode = (props) => {
  const { outputs, id, data  } = props;
  const [showModal, setState] = useState(false);

  const getTableIndex = (element) => element.id === props.id;
  const tableIndex = tableData.data.findIndex(getTableIndex);

  return (
    // <div
    //   style={{
    //     background: "#C77DFF",
    //     borderRadius: "5px",
    //     textAlign: "center",
    //     position: "back",
    //   }}
    // >
    //    <div>
    //     <Row>
    //       <Col>
    //       {outputs.map((port) =>
    //         cloneElement(port, {
    //           style: { width: "25px", height: "25px", background: "#1B263B" },
    //         })
    //       )}
    //       </Col>
    //       <Col>
    //         <IconButton
    //           aria-label="delete"
    //           style={{
    //             textAlign: "right",
    //             paddingRight: "0px",
    //             paddingTop: "4px",
    //           }}
    //           onClick={() => data.onClick(id)}
    //         >
    //           <CloseIcon fontSize="small" />
    //         </IconButton>
    //       </Col>
    //     </Row>
    //   </div>

    <div className = {classes.table_field_node}> 
      <div style={{ padding: "5px" }}>
        <div className = {classes.field_name}>  
        <span onDoubleClick={() => setState(true)} style= {{color: "black"}}>
            {tableData.data[tableIndex].table_name}
         </span>
        </div>
      </div>
        {outputs.map((port) =>
            cloneElement(port, {
              className: classes.table_panel,
            })
          )}
      <TableModal isOpen={showModal} onClose={() => setState(false)} nodeId={props.id} />
    </div>
  );
};

const FieldBullet = (props) => {
  let colorProp = "";
  if(props.selected) colorProp = props.classProperty;
  return (<div className = {classes.circle + " " + colorProp}></div>)
}

const Field = (props) => {
  const { inputs, id, data } = props;
  const [showModal, setState] = useState(false);

  const getRowIndex = (element) => element.id === props.id;
  const rowIndex = rowData.data.findIndex(getRowIndex);

  return (
    <div className = {classes.field_node}>
      {inputs.map((port) =>
              cloneElement(port, {
                style: {position: 'absolute', borderRadius: "10px 10px 0 0", width: "20px", height: "10px", top: "-10px",  left: "60px"},
              })
            )}  
      <div style={{ padding: "5px" }}>
        <div className = {classes.field_name}>  
        <span onDoubleClick={() => setState(true)} >
          {rowData.data[rowIndex].column_name}
          </span>         
        </div>
      </div>
      <div className = {classes.field_panel}>
      
        <FieldBullet selected = {rowData.data[rowIndex].unique} classProperty = {classes.unique_circle} />
        <FieldBullet selected = {rowData.data[rowIndex].not_null} classProperty = {classes.notnull_circle} />
        <FieldBullet selected = {rowData.data[rowIndex].primary_key} classProperty = {classes.primary_circle} />
        <FieldBullet selected = {true} classProperty = {classes.autoincrement_circle} />
        <FieldBullet selected = {true} classProperty = {classes.foriegnkey_circle} />
      </div>
      
      <ModalSize
        isOpen={showModal}
        onClose={() => setState(false)}
        nodeId={props.id}
        style={{background:"#000000"}}
      />
    </div>
  );
};


const initialSchema = createSchema({
  nodes: [],
  links: [],
});

const Visualizer = () => {
  // create diagrams schema
  const [value, setValue] = useState(
    "CLICK ON GENERATE CODE BUTTON TO GET CODE"
  );
  const [schema, { onChange, addNode, removeNode }] = useSchema(initialSchema);
  
  //for column
  const [x_coordinate, setxCoordinate] = useState(1200);
  const [y_coordinate, setyCoordinate] = useState(5);
  const [colCount, setColCount] = useState(1);

  //for table
  const [t_x_coordinate, setTablexCoordinate] = useState(100);
  const [t_y_coordinate, setTableyCoordinate] = useState(3);  
  const [tableCount, setTableCount] = useState(1);

  const deleteRowNodeFromSchema = (id) => {
    const nodeToRemove = schema.nodes.find((node) => node.id === id);
    
    const getRowIndex = (element) => element.id === id;
    const rowIndex = rowData.data.findIndex(getRowIndex);

    rowData.data.splice(rowIndex,1);
    removeNode(nodeToRemove);
  };

  const deleteTableNodeFromSchema = (id) => {
    const nodeToRemove = schema.nodes.find((node) => node.id === id);
    
    const getTableIndex = (element) => element.id === id;
    const tableIndex = tableData.data.findIndex(getTableIndex);

    tableData.data.splice(tableIndex,1);
    removeNode(nodeToRemove);
  };

  const addNewNode = () => {
    const nextNode = {
      id: `Column-${colCount}`,
      content: `Column-${colCount}`,
      coordinates: [x_coordinate, y_coordinate],
      render: Field,
      data: { onClick: deleteRowNodeFromSchema },
      inputs: [{ id: `port-column-${colCount}` }],
    };

    const row = {};
    row.id = nextNode.id;
    row.column_name = nextNode.id;
    row.data_type = "";
    row.max_length = 0;
    row.primary_key = false;
    row.unique = false;
    row.not_null = false;

    rowData.data.push(row);

    setxCoordinate(x_coordinate - 10);
    setyCoordinate(y_coordinate + 10);
    setColCount(colCount + 1);

    addNode(nextNode);
  };

  const addTableNode = () => {
    const nextNode = {
      id: `Table-${tableCount}`,
      content: `Table-${tableCount}`,
      coordinates: [t_x_coordinate, t_y_coordinate],
      render: TableNode,
      data: { onClick: deleteTableNodeFromSchema },
      outputs: [{ id: `table-${tableCount}` }],
    };

    const table = {};
    table.id = nextNode.id;
    table.table_name = nextNode.id;

    tableData.data.push(table);

    setTablexCoordinate(t_x_coordinate - 10);
    setTableyCoordinate(t_y_coordinate + 10);
    setTableCount(tableCount + 1);

    addNode(nextNode);
  };

  const handleSubmit = async () => {
    console.log("Handle submit called");
    
    let options = {
      method: "POST",
      url: process.env.REACT_APP_BANCKEND_API + "createTable/",
      headers: {
        "content-type": "application/json",
      },
      data: {
        schema: schema,
        rowData: rowData,
        tableData: tableData
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log("compile: ", response.data);
        setValue(response.data["node-1"]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <Fragment>
      <Navbar />
      <div style={{ height: "22.5rem", width: "99%", textAlign: 'center' }}>

        <Diagram schema={schema} onChange={onChange} style={{background:"#121212",height:"120%"}}/>

        <Row>
          <Col>
            <CodeEditor value={value} />
          </Col>

          <Col>
            <Text
              style={{
                textAlign: "center",
                padding: "2px",
                background: "black",
                color: "white",
              }}
            >
              Features
            </Text>
            <Row className="justify-content-md-center">
              <Panel actionName="Add Table" actionFunction={addTableNode} />
              <Panel actionName="Add Field" actionFunction={addNewNode} />
            </Row>
            <Row className="justify-content-md-center">
              <Panel actionName="Generate Code" actionFunction={handleSubmit} />
              <Panel actionName="Save Code" actionFunction={addNewNode} />
            </Row>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Visualizer;
