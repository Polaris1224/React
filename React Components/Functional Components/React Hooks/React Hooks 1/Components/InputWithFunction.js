import {useState} from 'react';
import {useEffect} from 'react';

export default function Input(){
    //Hooks are always mentioned at top in the function component.

    //Here name is variable that holds the value that we mention in useState() argument, and 
    //setName is the function that we use to change the value of name (works like a event handler).
    //Similar for lastName.
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");



    //The things that we perform using lifecycle methods in class based components, we can do the same using useEffect() hook.
    //useEffect() hook is used to perform side effects in function components.
    //useEffect() hook is called after every render and re-render means useEffect() hook is called after the component is mounted and updated.
    //Here, we are setting the title of the document to the value of name and lastName.
    //useEffect(setup, dependencies) syntax, here dependencies is an array of conditions(states, props on which useEffect depends) that useEffect() depends on.
    useEffect(() => {
        document.title = name + " " + lastName;
    })//Here useEffect is working like componentDidMount() and componentDidUpdate() lifecycle methods.

    //useEffect(() => {document.title = name + " " + lastName}, []);
    //Here useEffect is working like componentDidMount() lifecycle method.

    //useEffect(() => {document.title = name + " " + lastName}, [name]);
    //Here useEffect is working like componentDidUpdate() lifecycle method, when name is updated.



    //Creating counter using useEffect() hook.
    useEffect(() => {
        let timer = setInterval(() => {
            console.log("Window Width:" + window.innerWidth);
        }
        , 2000);
        
        return(clearInterval(timer));
    });
    //This is how we can create a counter using useEffect() hook.
    // In class based components we make use componentDidMount() and componentWillUnmount() lifecycle methods to create a counter.



    return(
        <>
        <div className="section">
            <Row label="Name">
                    <input className="input" value={name} onChange={(e) => setName(e.target.value)}/>
            </Row >
            <Row label="Last Name">
                    <input className="input" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </Row >
        </div>

        <h2>Hello, {name + " " + lastName}</h2>
        
        </>
    )
}


function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
