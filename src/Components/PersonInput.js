import React from "react";
import axios from "axios";

export default class PersonsInput extends React.Component{
    state={
        name:'',
        id:0,
    };

    handleChange=event=>{
        this.setState({name:event.target.value});
        this.setState({id:event.target.value});
    };

   handleSubmit=event=>{
       event.preventDefault();

       const user={
       name:this.state.name,
    };
   axios.post('https://jsonplaceholder.typicode.com/users', {user}).then (res=>{
       console.log(res);
       // console.log(res.data);
   });
   axios.delete('https://jsonplaceholder.typicode.com/users/${this.state.id}').then (res =>{ this.setState({status:'Delete successful'}); 
      console.log(res);
      
   });
};
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label> Person Name :  </label>
                    <input type="text" name="name" onChange={this.handleChange}/>
               
                <button type="submit">Add</button>
                <label> Person ID : </label>
                    <input type="number" name="id" onChange={this.handleChange}/>
                
                <button type="submit">Delete</button>
            </form>
        );
    }
}