import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is about page</h2>
            <User name={"Divya"} location={'Faridabad'} contact={'divya@gogimail.com'}/>
            <UserClass name={'Jamun'} location={'Jammu'} contact={'jamun@phalmail.com'}/>
        </div>
    )
}

export default About;