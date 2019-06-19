import React from 'react';
import Item from '../Items/Items.js';
import data from '../Items/items.json';

class ItemList extends React.Component{
    render(){
        return data.items.map(item=>{
            if(this.props.status==='Gis' && item.type==="GI"){
         return   <Item item={item} onClick={this.props.addItem} cartLength={this.props.cartLength}/>
        } else if(this.props.status==='T-Shirts' && item.type==="T-Shirt"){
            return   <Item item={item} onClick={this.props.addItem} cartLength={this.props.cartLength}/>
         } else if(this.props.status==='Rash Guards' && item.type==="Rash Guard"){
            return   <Item item={item} onClick={this.props.addItem} cartLength={this.props.cartLength}/>
         } else if(this.props.status==='Shorts' && item.type==="Shorts"){
            return   <Item item={item} onClick={this.props.addItem} cartLength={this.props.cartLength}/>
         }
        })
    }
};

export default ItemList;