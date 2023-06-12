import React,{Component} from 'react';
import {User} from './User';

export class Users extends Component{
    render(){
        const {udata} = this.props;
        return (
            <div>
            <div className="mt-4 mb-4">{udata.map((userData,index)=>(
                <React.Fragment key={`userKey${index}`}>
                <User ud={userData} divKey={`user${index}`} dor={this.props.du}/>
                
                </React.Fragment>
            ))}
            {this.props.udata.length > 0 && (
                <div className="mt=2">
                <button onClick={this.props.dA} className="btn btn-danger">Delete All</button>
                </div>
            )}
            </div>
            </div>
        );
    }
   
}

