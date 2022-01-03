import React, { Component } from 'react'

import './App.css'
import {Button,InputGroup,FormControl} from 'react-bootstrap';
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import {AiFillDelete} from "react-icons/ai";
import {AiFillEdit} from "react-icons/ai";
import {GrUpdate} from "react-icons/gr";
import {FaRegStickyNote} from "react-icons/fa";

 class App extends Component {

  constructor(){
    super()
  
    this.state={
        todo:[
            {             
            }
            ,{
            }
               
        ],
        value:'',
        first_data:''
    }
  }
  AddTodo(){
    var obj={
      name:this.state.value,
      status:1,
    }
    this.setState({
      value:'',
      todo:[obj,...this.state.todo]
    })
  }
  
  DeletAll(){
    var len = this.state.todo.length;
    this.state.todo.splice(0,len)

    this.setState({
      todo:this.state.todo
    })
  }

  EditTodo(i){
    for(var j=0;j<this.state.todo.length;j++){
        this.state.todo[j].status = 1
    }
    this.setState({
        todo:this.state.todo
    })

    this.state.todo[i].status = 0
      this.setState({
        todo:this.state.todo,
        first_data:this.state.todo[i].name
      })
  }
  Delet(i){
    this.state.todo.splice(i,1);
    this.setState({
      todo:this.state.todo
    })
  }
dataChange(e,i){
  this.state.todo[i].name= e.target.value;
  this.setState({
    todo:this.state.todo
  })
} 

UpdateData(i){
  this.state.todo[i].status = 1
  this.setState({
    todo:this.state.todo
  })
}
cencel(i){
  this.state.todo[i].name = this.state.first_data;
  this.state.todo[i].status = 1
  this.setState({
    todo:this.state.todo
  })
}

  render() {
    return (
      <div class="App">
        <h1 class="Heading"> <FaRegStickyNote  size={40}/> Todo App</h1>

         <InputGroup className="mb-3 input_field ">

<FormControl
  className="input"
  placeholder="Enter Todo"
  aria-label="Recipient's username"
  aria-describedby="basic-addon2"
  onChange={(e)=>this.setState({value:e.target.value})}
  value={this.state.value}
/>
 </InputGroup>
 
 <Button variant="primary" onClick={()=>this.AddTodo()}  className='btn'>< AiOutlineAppstoreAdd size={35} /> </Button>
 <Button variant="primary" onClick={()=>this.DeletAll()} className='btn'> < AiFillDelete size={35}/> </Button>

      {this.state.todo.map((v,i)=>{
        return (
          <div >
          <h1> 
            {v.status == 0?
            <>
             <InputGroup className="mb-3 input_field ">
            <FormControl
            className="input"
            placeholder="Enter Todo"
            value={v.name}
            onChange={(e)=>{this.dataChange(e,i)}}
           />
            </InputGroup>
               <Button variant="primary" onClick={()=>this.UpdateData(i)}  className='btn'> Update <GrUpdate  color='#6610f3' size={20} /></Button>
               <Button variant="primary" onClick={()=>this.cencel(i)} className='btn'> Cencel </Button>                      
            </>
            :
            <div class="todo col-lg-12 col-sm-4 ">

             {v.name}
              <div> 
               <Button variant="primary" onClick={()=>this.EditTodo(i)}  className='btn'>< AiFillEdit size={35} /></Button>
               <Button variant="primary" onClick={()=>this.Delet(i)} className='btn'> < AiFillDelete size={35}/></Button>
               </div>
            </div>
            }
          </h1>
        </div>
        )
     })
    }



      </div>
    )
  }
}

export default App
