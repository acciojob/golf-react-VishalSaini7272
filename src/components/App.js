import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    };

    buttonClickHandler() {
		this.setState({renderBall : true})
   }

	//handle arrow right key press
	handleDownKet(event){
		if(event.keyCode === 39){
			//move 5px right
			this.setState((prevState) => {
				const newPos = prevState.posi + 5;
				return {
					posi : newPos,
					 ballPosition: { left: newPos + "px" }
				}
			}
	   }
	}




	
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button className="start" onClick={this.buttonClickHandler} >Start</button>
		}
    }

    // bind ArrowRight keydown event
    componentDidMount() {
      document.addEventListener("keyDown",this.handleKeyDown)
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
