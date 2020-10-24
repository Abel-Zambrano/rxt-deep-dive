import React, { useEffect } from 'react'; 

import classes from './Cockpit.css';

const cockpit = ( props ) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    const timer = setTimeout(() => {
      alert('Saved data to the cloud!'); // When mounted
    }, 1000);
    // When unmounted
    return () => {
      clearTimeout(timer)
      console.log('[Cockpit.js] Cleanup work in useEffect'); 
    }   
  }, []); // Empty [] only executes once

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] Cleanup work in 2nd useEffect'); 
    }   
  });

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
      btnClass = classes.Red;
  }

  if ( props.personsLength <= 2 ) {
    assignedClasses.push( classes.red ); // classes = ['red']
  }
  if ( props.personsLength <= 1 ) {
    assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
  }

  return (
      <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join( ' ' )}>This is really working!</p>
          <button
              className={btnClass}
              onClick={props.clicked}>Toggle Persons</button>
      </div>
  );
};

export default React.memo(cockpit); //Memo takes snapshot and will rerender if props changes