
import React from 'react'


export class Nav extends React.Component {
  componentDidMount(){

  }
  onClick(evt){
    debugger
  }
  render () {
    return (
    		<nav className="clearfix white bg-black">
    			<div className="sm-col">
    				<a href="/" className="btn py2">Home</a>
    				<a href="/" onClick={this.onClick} className="btn py2">Profile</a>
    				<a href="/" className="btn py2">Contact Us</a>
    			</div>
    			<div className="sm-col-right">
    				<a href="/" className="btn py2">Logout</a>
    			</div>
    		</nav>
    )
  }
}
