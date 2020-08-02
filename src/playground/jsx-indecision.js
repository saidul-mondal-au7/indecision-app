console.log("My app is running!.")

//JSX - JavaScripts XML

// var template = React.createElement(
//     "h1",
//     {id:"someid"},
//     "Something new"
// )

const app = {
    title: 'Indencision App',
    subtitle: "Put your life to ALLAH's hand!",
    options: []
}

function getTitle(title) {
    return <h1>{title}</h1>
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render()
    }
};

const onRemoveAll = () => {
    app.options = [];
    render()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option);
}

const appRoot = document.getElementById('app')

const render = () => {
    const template = (
        <div>
            {getTitle(app.title)}
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length >0 ? 'Here are your option' : 'No option'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
               {
                   app.options.map((option) => <li key={option}>{option}</li> )
                }
            </ol>
            <form onSubmit={onFormSubmit}>
               <input type="text" name="option"/>
               <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
};

render()
