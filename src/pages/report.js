import React, { useState } from "react";
import '../App.css';
function Report(){
    const [visible,setvisible]= useState(1);
    const onclick2 = () => {
        setvisible (1)
    }
    const onclick3 = () => {
        setvisible (2)


    }
    

    return(
        <div className= "all">
        <div className= "buttonbkg">
        <button2 className = "report-button" onClick = {onclick2}>report1</button2>
        
        <button2 className = "report-button" onClick = {onclick3}>report2</button2>
        
        </div>
        { visible === 1 && <iframe width="100%" height="100%" src="https://app.powerbi.com/view?r=eyJrIjoiMTc0NDEwNzctOTI1OS00ZmZjLTg4ZTktM2YxYTBjNDhiYjBkIiwidCI6ImYxYWExNTQ4LWFjYTgtNDFjYS04MDlmLThlMDcwODM0YmViZCJ9&pageName=ReportSection2a208ffdd513709c5237" frameborder="0" allowFullScreen="true"></iframe>}
        
        { visible === 2 && <iframe width="100%" height="100%" src="https://app.powerbi.com/view?r=eyJrIjoiMTc0NDEwNzctOTI1OS00ZmZjLTg4ZTktM2YxYTBjNDhiYjBkIiwidCI6ImYxYWExNTQ4LWFjYTgtNDFjYS04MDlmLThlMDcwODM0YmViZCJ9&pageName=ReportSection64fb1015c3684ece40d6" frameborder="0" allowFullScreen="true"></iframe> }
        
    

</div>


    )

}
export default Report;
