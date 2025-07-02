import User from "./User";
import UserClass from "./UserClass";
import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("Parent constructor");
    }

    componentDidMount() {
        console.log("Parent component did mount")
    }

    render() {
        console.log("Parent render")
        return (
            <div>
                <h1>About</h1>
                <h2>This is about page</h2>
                <User name={"Divya"} location={'Faridabad'} contact={'divya@gogimail.com'} />
                <UserClass name={'Jamun'} location={'Jammu'} contact={'jamun@phalmail.com'} />
                <UserClass name={'Jamun2'} location={'Jammu2'} contact={'jamun2@phalmail.com'} />
                <UserClass name={'Jamun3'} location={'Jammu3'} contact={'jamun3@phalmail.com'} />
            </div>
        )
    }
}

export default About;