import React from 'react';
// import SubComponent from 'react-subcomponent';


class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedIndex: 0};

    }

    setCurrTab(index) {
        this.setState({selectedIndex: index});
    }

    render() {
        return (
            <div id="tabs">
                <ul id="tab-headers">
                    {
                        this.props.tabs.map(tab => <li>{tab.title}</li>)
                    }
                </ul>
                <p class="content">
                    {   
                        this.props.tabs[this.state.selectedIndex].content
                    }
                </p>
            </div>
        );
    }
}


export default Tabs;