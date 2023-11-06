import React  from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userInfo:{
              name:"dummy name",
              location:"Bhimavarm"
            }
        }
        // console.log(props);
        console.log(" child constructor is called!!!!")
    }
    async componentDidMount(){
      const data=await fetch("https://api.github.com/users/SatyaaaaSai");
      const json= await data.json();



      this.setState({
        userInfo:json,
      })
      console.log(json);
      console.log("child did mount is called");
    }
    
  
  render() {
    console.log("child render function is called!!!!!!!!!")
    const{name,location,avatar_url,bio}=this.state.userInfo;
    return (
      <div className="user-card">
        <img className="logo"src={avatar_url} alt="photo"/>
        <h2>{name}</h2>
        <h4>{bio}</h4>
        <h3>{location}</h3>
      </div>
    );
  }
}

export default UserClass;