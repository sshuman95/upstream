import React from 'react';
import './items.css'

class Item extends React.Component{
    constructor(props){
        super(props);
        this.state = {size:'Please Select A Size'};
        this.changeSize = this.changeSize.bind(this);
    }

    changeSize(event){
        this.setState({
            size:event.target.value
        })
    }
render(){
    return(
        <div className='item'>
                    <div className='name'>{this.props.item.name}</div>
                    <img src={this.props.item.src} alt={this.props.item.name}/>
                    <div className='desc'>{this.props.item.desc}</div>
                    <div className ='type'>{this.props.item.type}</div>
                    <div className='price'>${this.props.item.price}</div>
                    <select id='form' onChange={this.changeSize}>
                        {(this.state.size ==='Please Select A Size')?(<option>Please Select A Size</option>):''}
                   { (this.props.item.sizes.small !== 'Sold Out')?<option>{this.props.item.sizes.small}</option>:''}
                   { (this.props.item.sizes.medium !== 'Sold Out')?<option>{this.props.item.sizes.medium}</option>:''}
                   { (this.props.item.sizes.large !== 'Sold Out')?<option>{this.props.item.sizes.large}</option>:''}
                   { (this.props.item.sizes.XL !== 'Sold Out')?<option>{this.props.item.sizes.XL}</option>:''}
                    </select>
                    <h3 id='hidden'>{this.state.size}</h3>
                    {(this.state.size !=='Please Select A Size')?<button onClick={this.props.onClick} id='cartButton'>Add To Cart ({this.props.cartLength})</button>:""}
                    </div>
    )
}
};


export default Item;