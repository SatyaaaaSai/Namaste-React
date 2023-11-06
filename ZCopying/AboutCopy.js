import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor is called");
  }

  componentDidMount(){
    console.log("parent did mount is called")
  }
  render() {
    console.log("parent render function is called")
    return (
      <div>
        <h1>This is a About us Page.</h1>
        <UserClass
          name={"First Child"}
          location={"Bhimavarm"}
          twtrid={"chinss07"}
        />
      </div>
    );
  }
}
export default About;
