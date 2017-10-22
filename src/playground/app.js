class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }

    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'));
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            console.log(e);
        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter((item, key) => option !== item)
        }));
        console.log("oooo", option);
    }
    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        alert(option)
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item!';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!';
        } 

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }
    render() {
        const title = 'Indecision App';
        const subTitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subTitle={subTitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision default title'
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick} 
                disabled={!props.hasOptions}
            >
                What should i do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((item, key) => (
                    <Option 
                        key={item} 
                        optionTex={item} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionTex}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionTex)
                }}
            >
                remove
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ( {error} ));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button type="submit">Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp options={['Option 1', 'Option 2']}/>, document.getElementById('app'));