import React, {Component} from "react";

// function CCoffee () {        --- functional components (new)

class CCoffee extends Component {           // class components (old)
    constructor(props){
        super(props)                        // React.Component has the function to hand le props
        this.state = {
            count: 0,
            another: 'plop',
        }
    }
    handleClick(){
        // because we need to SET a state, we use this.setState
        // then pass the destructure object that has the state we want to change
        this.setState({count: this.state.count + 1})
    }
    render(){                              // mandatory for class components
        const {count} = this.state;
        const {firstName} = this.props;
        return (
            <>
                <h1>Coffee List (CC)</h1>
                <p>Hello {firstName}</p>
                <p>You clicked the button {count} times.</p>
                <button onClick={() => this.handleClick()}>Click Me</button>
            </>
        )
    }
}

export default CCoffee