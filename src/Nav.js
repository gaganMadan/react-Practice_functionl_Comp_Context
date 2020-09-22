import React, {useContext} from "react";
import {ItemsContext} from './ItemsContext'


const Nav = () => {
    const [items] = useContext(ItemsContext);
    
    return (
        <>
           Number of Person : {items.length}
        </>

    )
}
export default Nav