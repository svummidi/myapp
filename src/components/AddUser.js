import React, { Component } from "react";

export class AddUser extends Component {
  inputRef = React.createRef();
  addUser = (evt)=>{
    evt && evt.preventDefault();
    const {au} = this.props;
    const user = this.inputRef.current.value.trim();
    this.inputRef.current.value = "";
    if(user === ""){
      alert("Please enter user name to be added.");
    }else if(!this.props.udata.includes(user)){
        au(user);
    }else {
        alert("User alredy added");
    }
    
  }

  render() {
    return <div>
        <form>
        <input type='text' ref={this.inputRef}/>
        <div className="mt-2">
        <button onClick={this.addUser} className="btn btn-primary">Add User</button>
        </div>
        </form>
    </div>;
  }
}
