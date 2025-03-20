import styles from "../styles/ItemCard.module.css";
// import { itemContext } from "../itemContext";
// import React, { useContext } from "react";
import { useValue } from "../itemContext";

function ItemCard({ name, price }) {
  //We will be moving the logic for the state manuplation to context file only...
  //As we move so there is no need for setItem and setTotal in this file
  //const {item, setItem, total, setTotal} = useValue() ;
  
  //Lets the move logic to manuplate the state to the context API file only...
  // const handleAdd = () => {
  //   setTotal(total + price) ;
  //   setItem(item + 1) ;
  // };

  // const handleRemove = () => {
  //   if(total <= 0 && item <= 0) {
  //     return ;
  //   }
  //   setTotal((prevState) => prevState  - price) ;
  //   setItem((preState) => preState - 1) ;
  // };

  const { total, item, handleAdd, handleRemove } = useValue() ;

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd(price)}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(price)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
