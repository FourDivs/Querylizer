import React, { Fragment } from 'react'
import AceEditor from "react-ace";
import { Text } from "atomize";

import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-jsx";

//extracting themes and language
require(`ace-builds/src-noconflict/theme-monokai`);
require(`ace-builds/src-noconflict/mode-sql`);
require(`ace-builds/src-noconflict/snippets/sql`);


const CodeEditor = (props) => {
    return (
        <Fragment>
            {/* <Text style={{textAlign:"center",padding:"2px",background:"black",color:"white"}}>Editor</Text> */}
              <AceEditor
                mode="sql"
                theme="monokai"
                value={props.value}
                height="200px"
                width={"auto"}
                fontSize={16}
                showPrintMargin
                showGutter
              />
        </Fragment>
    )
}

export default CodeEditor
