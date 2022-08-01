import React, { Component } from 'react';
import './App.css';

class Stopwatch extends Component {
    state = { 
        counter: 0,
        isStart:false,
        btnStart: "Start",
        intervalId: ''
    };

   

    Start = () => {
        if(!this.state.isStart){
            this.intervalId = setInterval(()=>{
                this.setState({
                    counter:this.state.counter + 100,
                    
                })
            },100) 
            this.setState({
                isStart: true,
                btnStart : "Stop"
            })
           
          
        }else { 
            clearInterval(this.intervalId);
         
            this.setState ({
                isStart: false,
                btnStart : "Start",
                
            })
            
        }
       
     }
     Reset = () => {
        clearInterval(this.intervalId);
        this.setState ({
            counter: 0,
            btnStart : "Start",
            isStart:false
        })
        
     }

    render() {
        return (
            <div className='Stopwatch'>
                <h3>Stopwatch:{this.state.counter} </h3>
                <button onClick={this.Start}>{this.state.btnStart}</button>
                <button onClick={this.Reset}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;