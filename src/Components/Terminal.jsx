import React,{useState} from 'react';
import  './Terminal.css';
const Terminal = () => {
     const [commandHistory,setCommandHistory] = useState([]) ;// we are gonna stored data in this array
      const [currentCommand,setCurrentCommand] = useState('');
        // The handleInputChange function updates the currentCommand state as the user types.
         const handleInputChange=(e)=>{
             setCurrentCommand(e.target.value)
         };
        //   The handleEnter function is triggered when the user presses Enter.
        //  It adds the current command to the command history and clears the input for the next command.
             const handleEnter = (e)=>{
                 if(e.key==="Enter" && currentCommand.trim()!==""){
                    setCommandHistory([...commandHistory,currentCommand]);
                    // it clear the input form
                    setCurrentCommand("") 
                 }
             };
    return (
    //     <div class="terminal-container">
    //     <div class="terminal-header">
    //         <span class="red"></span>
    //         <span class="yellow"></span>
    //         <span class="green"></span>
    //     </div>
    //     <div class="terminal-body" id="terminalBody">
    //         <p>Welcome to the Terminal UI!</p>
    //         <p>Type a command to get started.</p>
    //     </div>
    //     <div class="terminal-input" contenteditable="true" id="terminalInput"></div>
    // </div>
        <div>
             <div className="terminal"> 
                {/* three dots on header */}
             <div class="terminal-header">
            <span class="red" style={{backgroundColor:'red'}}></span>
            <span class="yellow"  style={{backgroundColor:'yellow'}}></span>
            <span class="green"  style={{backgroundColor:'green'}}></span>
        </div>
        {/* done */}
              <div className="body">
                <h3 style={{textAlign:"center"}}>Welcome from my Terminal</h3>
                 {commandHistory.map((command,index)=>(
                    <p key={index}>{command}</p>
                 ))}
              </div>
             
              <div className="input-container">
          <span>&gt;</span>
          <input
            type="text"
            value={currentCommand}
            onChange={handleInputChange}
            onKeyDown={handleEnter}
          />
        </div>
              </div>
        </div>
    );
}

export default Terminal;
