import React from 'react'
import { Col } from "react-bootstrap";
import { Icon, Button } from "atomize";

const Panel = (props) => {
    return (
        
        <Col style={{ paddingTop: "10px" }}>
            <Button
                suffix={
                    <Icon name="LongRight" size="16px" color="white" m={{ l: "1rem" }} />
                }
                shadow="3"
                hoverShadow="4"
                m={{ r: "1rem" }}
                onClick={props.actionFunction}
            >
                {props.actionName}
            </Button>
        </Col>
    )
}

export default Panel
