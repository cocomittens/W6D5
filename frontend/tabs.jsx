import React from 'react';
// import { threadId } from 'worker_threads';

class Tabs extends React.Component {
    constructor(props, arr) {
        super(props);
        this.arr = arr;
        this.state = {selectedIndex: 0};
    }

    render() {
        return (
            <div id="tabs">
                Hiii
            </div>

        );
    }

   
}

export default Tabs;