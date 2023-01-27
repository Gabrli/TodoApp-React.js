import React from "react";


class Todo extends React.Component{
    state = {
        elements: [
         // here is all task user
        ],

        InputValue: ''

       
    }


    MarkComplited(id){
        const index = this.state.elements.findIndex(x => x.id === id)
        const newElements = this.state.elements

        newElements[index].isComplited = true

        this.setState({elements: newElements})
    }

    InputHandler(event){
        const newValue = event.target.value

        this.setState({InputValue: newValue})
    }

    addItem(){
        const item ={
            id: Math.random(),
            title: this.state.InputValue
        }

        const newElements = [item, ...this.state.elements]

        this.setState({elements: newElements})

        
    }

    DelateItem(id){
        const newlist = this.state.elements.filter(l => l.id !== id)

        this.setState({elements: newlist})
    }

   

  render(){

    const elements = this.state.elements.map(e => {
        return <TodoItem element={e} Delatefunction={this.DelateItem.bind(this)} marClicked={this.MarkComplited.bind(this)} />
    })

    
 
    return(

        <div>
            <h1 className="title">Todo List App</h1>

            <input onChange={this.InputHandler.bind(this)} value={this.state.InputValue} placeholder="Your task!" className="input" type="text"/>

            <button onClick={this.addItem.bind(this)} className="btn-add">+</button>

            {elements}
            
        </div>

      
    )
  }
 

}

const TodoItem = (props) => {


    return(
        <div className={`card ${props.element.isComplited ? 'card-complited': ''} `} key={props.element.id}>

            {props.element.title}

            <button onClick={() => props.marClicked(props.element.id)} className="btn-complite" > ✅ </button>

            <button onClick={() => props.Delatefunction(props.element.id)} className="btn-delate"> ❌ </button>
        </div>
    )
     
}



export default Todo