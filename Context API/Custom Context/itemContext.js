import { createContext } from "react";
import { useState, useContext } from "react";

const itemContext = createContext() ;

//Now we will see that How can we provide and consume the context through this file only 
//Means all the things like setting, providing and consuming the context will be done from here only.
//We will also the logic for manulpating the state to this file only...
//This will improve the readability, maintainance and easy to debug...


//It is a component that act as a provider and make use of default provider.
//So we can just create the state/variable here only and pass it anywhere...
function CustomItemContext(props) {
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);

    // Logic to manuplate the state...
    const handleAdd = (price) => {
        setTotal(total + price) ;
        setItem(item + 1) ;
    };

    const handleRemove = (price) => {
        if(total <= 0 && item <= 0) {
        return ;
        }
        setTotal((prevState) => prevState  - price) ;
        setItem((preState) => preState - 1) ;
    };

    return(
        <>  
            {/*Making use of default provider.*/}
            {/*Here props contains the children of CustomItemContext created in App.js i.e. Navbar and Items*/}
            <itemContext.Provider value={{ total, item, handleAdd, handleRemove }}>
                {props.children}
            </itemContext.Provider>
        </>
    )
}

//Now to consume the these values we need to write code again n again like commented code in NavBar and Item
//Lets create a custom hook to avoid this repetation.
function useValue() {
    const value = useContext(itemContext) ;
    return value ;
}

export { itemContext, useValue } ;
export default CustomItemContext ;