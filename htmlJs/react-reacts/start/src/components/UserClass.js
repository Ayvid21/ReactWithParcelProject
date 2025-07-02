import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        //creating state variable
        this.state = {
            count: 0,
        }
        console.log(this.props.name + " child constructor")
    }

    IncreaseCount() {
        this.setState({
            count: this.state.count + 1
        })
    } 

    DecreaseCount() {
        this.setState({
            count: this.state.count - 1
        })
    }

    ResetCount() {
        this.setState({
            count: 0
        })
    }

    componentDidMount() {
        console.log(this.props.name + " child component did mount")

        // api call

    }

    render() {
        const { name, location, contact } = this.props;
        const { count } = this.state;
        console.log(this.props.name + " child render")
        return (
            <div className="user-container">
                <button onClick={() => this.IncreaseCount()} > + </button>
                <h1>Count: {count}</h1>
                <button onClick={() => this.DecreaseCount()} > - </button>
                <button onClick={() => this.ResetCount()} >Reset</button>
                <h2>Name: {name}</h2>
                <h3>Address: {location}</h3>
                <h3>Contact: {contact}</h3>
            </div>
        );
    }
}

export default UserClass;