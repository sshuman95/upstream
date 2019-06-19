import React from 'react';
import './Cart.css';
import Checkout from '../Form/CheckoutForm.js';
// item.price.substr(1) will take $30 and give me 30
// amount={this.state.price.reduce((a, b) => a + b, 0)

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {price:this.props.amount.reduce((a, b) => a + b, 0),
        name:this.props.name,
        size:this.props.size};
        this.onClick=this.onClick.bind(this);
    };

    onClick(event){
        event.target.parentElement.remove();
      
    }



    render(){
       let price = this.props.amount.reduce((a, b) => a + b, 0)
        let cart = this.props.cart.map((item,j)=>{
        return (
        <div id='subCart'>
        <img src={item.src} id='cartImg' alt={item.name}/>
             <h2>{item.name}</h2>
             <h2>{item.size}</h2>
             <h3 id='price'>{item.price}</h3>
             <button  onClick={this.props.remove} value={j++}>X</button>
                    </div>)
        })
    return (<div id='cartDisplay'>
        <h2>Shopping Cart</h2>
        {cart}
        {(cart.length>0)?<div>
            <h2>Total: ${price}.00</h2>
               <Checkout
            name='Upstream BJJ'
            description={this.state.name.join(', ')}
            amount={price}
          />
          <button onClick={this.props.clear} id='clear'>Clear Cart</button></div>:'Your cart is empty!'}
          
    </div>)
}
};


export default Cart;