import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date()};
    }

    render() {
        return (
                
                <div id="time"> 
                    <div class="clock">
                        <h1>Time: </h1>
                    <span> 
                        {this.state.time.getHours()}:
                        {this.state.time.getMinutes()}:
                        {this.state.time.getSeconds()}
                        </span>
                    </div>
                    <div class="clock">
                    <h1>Date: </h1>
                    <span>
                        {this.state.time.getHours()}:
                        {this.state.time.getMinutes()}:
                        {this.state.time.getSeconds()}
                        </span>
                    </div>
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