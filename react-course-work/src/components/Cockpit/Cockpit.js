import React from 'react';
import classes from './Cockpit.css' 

const cockpit = (props) => {
	let btnClass = '';
	if(props.showPersons){
		btnClass = classes.red;
	}
	const clas = [];
        if(props.persons.length <= 2)
          {clas.push(classes.red);}

        if(props.persons.length <= 1)
          {clas.push(classes.bold);}

	return(
		<div className={classes.Cockpit}>
			<h1>Hi I am React App</h1>
	        <p className={clas.join(' ')}>This is really working</p> 
	        <button 
	        className={btnClass}
	        onClick={props.clicked}>Toggle Names</button> 
		</div>
	);
}

export default cockpit;