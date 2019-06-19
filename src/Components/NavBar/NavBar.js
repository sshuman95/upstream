import React from 'react';
import './Nav.css';

class NavBar extends React.Component{
    render(){
        let list = ['Home','Gis','Rash Guards','Shorts','T-Shirts','Cart'];
        let sortList = list.map(i=>{
            return <li id='listItem' onClick ={this.props.onClick}>{i}</li>
        })
        return (
            <ul id='Nav'>
                {sortList}
            </ul>
        )
    }
};

export default NavBar