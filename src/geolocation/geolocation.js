import React from 'react';

constructor (props){
    super(props);
    this.state = {lat: null}
}
const Geolocation = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        err => console.log(err)
    );
        return <div>Hi  i am here !</div>
};


// class Geolocation extends 
export default Geolocation; 