class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            isVisible: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                isVisible: !prevState.isVisible
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toogle</h1>
                <button onClick={this.handleToggleVisibility}>
                {!this.state.isVisible ? 'Show Details' : 'Hide Details'}
                </button>
            
                {this.state.isVisible && <p>Some details</p>} 
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// let isVisible = false;

// const toogleDetails = () => {
    
//     isVisible = !isVisible
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toogle</h1>
//             <button onClick={toogleDetails}>
//                 {!isVisible ? 'Show Details' : 'Hide Details'}
//             </button>

//             {isVisible && <p>Some details</p>}
//         </div>
//     );

//     ReactDOM.render(template, document.getElementById('app'));
// }

// render();