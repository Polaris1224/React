import { createContext } from "react";
import { useState, useContext } from "react";

const itemContext = createContext() ;

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

    const handleReset = () => {
        setTotal(0) ;
        setItem(0) ;
    }

    return(
        <>  
            <itemContext.Provider value={{ total, item, handleAdd, handleRemove, handleReset }}>
                {props.children}
            </itemContext.Provider>
        </>
    )
}

function useValue() {
    const value = useContext(itemContext) ;
    return value ;
}

export { itemContext, useValue } ;
export default CustomItemContext ;