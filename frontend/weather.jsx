// import React from 'react';

// class Weather extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {pos: [0, 0], weather: ''}
//     }
    
//     success(position) {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         this.setState({pos: [latitude, longitude]});
//         this.setWeather(latitude, longitude)
//     }

//     setWeather(lat, lon) {
//         const key = 'a51b02f3ed3546de91d00d4f89a89e9c';
//         let url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&key=${key}`;
//         let request = new XMLHttpRequest();
//         let that = this;
//         request.open('GET', url, true);
//         request.onload = function () {
//             if (request.status >= 200 && request.status < 400) {
//                 // Success!
//                 let resp = request.responseText;
//                 alert(resp);
//                 that.setState({weather: resp});
//             } else {
//                 // We reached our target server, but it returned an error
//                 alert('error 2');
//             }
//         };

//         request.onerror = function () {
//             // There was a connection error of some sort
//             alert('error');
//         };

//         request.send();
//     }
    

//     render() {
//         return (
//             <div>
//                 <p>pos: {this.state.pos[0]}, {this.state.pos[1]}</p>
//                 <p>{this.state.weather}</p>
//             </div>
//         );
//     }

//     componentDidMount() {
//         navigator.geolocation.getCurrentPosition(this.success.bind(this));
//     }
// }


// export default Weather;