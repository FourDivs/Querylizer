import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const Information = () => {
    return (
        <div style = {{padding: "10px"}}>
            <p><FiberManualRecordIcon style = {{color: "#7ed957"}}/> Unique Constraint</p>
            <p><FiberManualRecordIcon style = {{color: "#5ce1e6"}}/> Not Null Constraint</p>
            <p><FiberManualRecordIcon style = {{color: "#ff5757"}}/> Primary Constraint</p>
            <p><FiberManualRecordIcon style = {{color: "#ffde59"}}/> Auto Increment Constraint</p>
            <p><FiberManualRecordIcon style = {{color: "#8c52ff"}}/> Foreign key Constraint</p>
        </div>
    )
}

export default Information