import React, { Component, Fragment } from 'react';


class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef(); // Adds focus to last person element pt1
  }

  componentDidMount() {  
    this.inputElementRef.current.focus(); // Adds focus to last person element pt2

  } 

  render () {
    console.log('[Person.js] rendering...');  

  return (
    <Fragment> 
      <p onClick={this.props.click}>
        I'm {this.props.name} and I am {this.props.age} years old!
      </p>
      <p>{this.props.children}</p>
      <input 
        type="text"
        ref={this.inputElementRef} // Adds focus to last person element pt3
        onChange={this.props.changed} 
        value={this.props.name} 
      />
    </Fragment>
  );
};
}

export default Person;
