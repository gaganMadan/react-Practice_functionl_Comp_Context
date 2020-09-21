import React, {useContext} from "react";
import {ItemsContext} from './ItemsContext'


const Nav = () => {
    const value = useContext(ItemsContext);
    
    return (
        <>
           Number of Person : {value}
        </>

    )
}
export default Nav