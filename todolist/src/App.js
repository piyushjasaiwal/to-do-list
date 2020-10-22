import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ListItems from './ListItem.js'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items : [],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !== ""){
      const items = [...this.state.items, newItem];
      this.setState({
        items:items,
        currentItem : {
          text:'',
          key:''
        }
      }) 
    }
  }

  handleInput(e){
    this.setState({
      currentItem:{
        item:e.target.value,
        key : Date.now()
      }
    })
    // console.log(this.state.currentItem);
  }  


  render(){
    return(
      <div>
        <header>
        <form onSubmit = {this.addItem}>
          <input type = "text" placeholder = "Enter text" value = {this.state.currentItem.text}onChange = {this.handleInput}></input>
          <button type = "submit">
            ADD
          </button>
        </form>
      </header>
      <p>{this.state.items.text}</p>
        <ListItems items = {this.state.items}></ListItems>
      </div>
    );
  }
}

export default App;