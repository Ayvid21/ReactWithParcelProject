import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                company: "Default"
            }
        };
        // console.log(this.props.name + " child constructor")
    }

    async componentDidMount() {
        // console.log(this.props.name + " child component did mount")

        // api call
        const data = await fetch("https://api.github.com/users/octocat");
        const json = await data.json();

        this.setState({
            userInfo: json
        });

        console.log("json called", json);
    }

    render() {
        const { name, location, company, avatar_url } = this.state.userInfo;

        // console.log(this.props.name + " child render")
        return (
            <div className="user-container">
                <div><img src={avatar_url} /></div>
                <h2>Name: {name}</h2>
                <h3>Address: {location}</h3>
                <h3>Contact: {company}</h3>
            </div>
        );
    }
}

export default UserClass;