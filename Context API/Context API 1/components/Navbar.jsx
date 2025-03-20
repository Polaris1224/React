import React, { useContext } from "react";
import styles from "../styles/Total.module.css";
import { itemContext } from "../itemContext";
import { totalContext } from "../totalContext";

function Navbar() {
  const value = useContext(itemContext) ;
  const {total} = useContext(totalContext) ;

  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; { total }</h1>
      <h1>Items: { value.item }</h1>
    </div>
  );
}

export default Navbar;
