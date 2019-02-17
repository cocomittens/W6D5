import React from 'react';
import uniqueId from 'react-html-id';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        uniqueId.enableUniqueIds(this);
        this.state = {selectedIndex: 0};
    }

    clickTab(event) {
        let index = event.target.id.slice(-1)-1;
        this.setState({selectedIndex: index});
    }

    render() {
        return (
            <div id="tabs">
                <ul id="tab-headers">
                    {
                        this.props.tabs.map((tab) => {
                            return <li 
                                id={this.nextUniqueId()}
                                onClick={event => this.clickTab(event)}
                            >
                                {tab.title}
                            </li>
                        })
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