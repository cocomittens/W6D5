import React from 'react';
// import SubComponent from 'react-subcomponent';


class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedIndex: 0};

    }

    render() {
        return (
            <div id="tabs">
                <ul id="tab-headers">
                    <li><span>{this.props.tabs[0].title}</span></li>
                    <li><span>{this.props.tabs[1].title}</span></li>
                    <li><span>{this.props.tabs[2].title}</span></li>
                </ul>
                <p class="content">{this.props.tabs[0].content}</p>
            </div>
        );
    }
}


// class Header extends SubComponent {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>
//                     {this.props.title}
//                     {this.props.title}
//                     {this.props.title}
//                 </h1>
//             </div>
//         );
//     }
// }

export default Tabs;