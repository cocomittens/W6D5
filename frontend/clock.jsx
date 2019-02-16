import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date()};
    }

    render() {
        return (
            <div id="clock">
                <h2 id="time"> 
                    {this.state.time.getHours()} :
                    {this.state.time.getMinutes()} :
                    {this.state.time.getSeconds()}
                </h2>
            </div>
           
        );
    }

    setTickInterval() {
        const _tick = () => this.setState({time: new Date()}); 
        return setInterval(_tick, 1000)
    }

    componentDidMount() {
        this.id = this.setTickInterval();
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }

}

export default Clock;