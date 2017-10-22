console.log('App is running');

const app = {
    title: 'Indecision app',
    subTitle: 'This is JSX from app.js',
    options: []
}

const onFormSubmit = (e) => {
    //Impede a pagina de dar refresh
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    renderView();
}

const onRemoveAllOptions = () => {
    app.options = [];
    renderView();
}

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option)
}

const appRoot = document.getElementById('app');

const renderView = () => {
    const template = (
        <div> 
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>} 
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p> 
            <button disabled={app.options.length <= 1} type="button" onClick={onMakeDecision}>What should i do?</button>
            <button type="button" onClick={onRemoveAllOptions}>Remove all options</button>
            <ol>
                {
                    app.options.map((item, key, arr) => <li key={item}>{item}</li>)
                }
            </ol> 
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button type="submit">Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderView();

