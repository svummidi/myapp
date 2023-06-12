import React,{Component} from 'react';
import {Header} from './Header';
import {Footer} from './Footer';
import {Users} from './Users';
import {AddUser} from './AddUser';

export class MainApp extends Component{
    state ={
        headerContent: "Welcome to My App",
        userData:[]
    }
    
    addUser = (value) => {
        this.setState(prevState => (
            {userData:prevState.userData.concat(value)}
        ));
    }

    deleteUser = (user)=>{
        const userData = this.state.userData.filter(value => value !== user);
        this.setState({userData});
    }

    deleteAllUsers = ()=>{
        this.setState({userData:[]});
    }
    render(){
        return (
            <React.Fragment>
            <Header headerContent={this.state.headerContent}/>
            <div>Welcome from Main App.
                <AddUser au={this.addUser} udata={this.state.userData}/>
                <Users udata={this.state.userData} dA={this.deleteAllUsers} du={this.deleteUser}/>
            </div>
            <Footer />
            </React.Fragment>
        );
    }
    
}