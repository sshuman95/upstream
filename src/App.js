import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import Home from './Components/HomePage/Homepage.js';
import ItemList from './Components/ItemList/ItemList.js';
import Cart from './Components/Cart/Cart.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {status:'Home',
        cart:[],
        amount:[],
        name:[],
        size:[]};
    this.changeStatus = this.changeStatus.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.clear = this.clear.bind(this);
    this.removeItem = this.removeItem.bind(this);
  };

  changeStatus(event){
    let status = event.target.innerHTML;
    this.setState({
      status:status
    })
  }

  addItemToCart(event){
    let target = {
      name: event.target.parentElement.firstChild.innerHTML,
      src:event.target.parentElement.firstChild.nextSibling.src,
      item:event.target.parentElement.firstChild.nextSibling.nextSibling.nextSibling.innerHTML,
      price:event.target.parentElement.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML,
      size:event.target.parentElement.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML,};
    let price =(event.target.parentElement.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML.substr(1));
    let price1= parseInt(price);
    let name = event.target.parentElement.firstChild.innerHTML+'('+event.target.parentElement.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML+')';
    this.setState({
      cart:[...this.state.cart,target],
      amount:[...this.state.amount,price1],
      name:[...this.state.name,name],
    })
  }


  removeItem(event){
    let target = event.target.value;
    let cart = this.state.cart;
    cart.splice(target,1);
    let amount = this.state.amount
    amount.splice(target,1);
    this.setState({
      cart:cart,
      amount:amount
    })
    console.log(amount)
  }

  clear(event){
    this.setState({
      cart:[],
      amount:[],
      name:[],
      size:[]
    });
  }

  render(){
    return (<div>
      <div id="bannerContainer">
      <img  id='banner' src='https://static1.squarespace.com/static/55e3d20ae4b0720c69a9796d/t/55e49b2ee4b06d270a217f9d/1534700124819/?format=1500w' alt='banner'/>
      </div>
      <NavBar onClick = {this.changeStatus}/>
      {
        (this.state.status==='Home'?<Home/>:(this.state.status==='Cart')?<Cart cart={this.state.cart} remove={this.removeItem} amount={this.state.amount} name={this.state.name} clear={this.clear}/>:
      <ItemList status={this.state.status} addItem ={this.addItemToCart} cartLength={this.state.cart.length}/>
        )
      }
    </div>)
  }


}

export default App;
