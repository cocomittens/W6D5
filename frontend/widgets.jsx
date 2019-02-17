import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

class Root extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
            <Clock />
            <Tabs tabs={[{title: 'one', content: 'I am one'}, 
            {title: 'two', content: 'second pane here'}, 
            {title: 'three', content: 'third pane here'}]} />
            {/* <Weather /> */}
            </div>
        )
    }
    
    
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded!");
    const root = document.getElementById('root');
    ReactDOM.render(<Root />, root);
    
})

