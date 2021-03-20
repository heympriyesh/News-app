import React, { useState, createContext } from 'react';

export const ApiContext = createContext();


export const ApiProvider = (props) => {
    const[truevalue,settruevalue]=useState(false);
    //Priyesh
    const [API_KEY] = useState('85c20d88eea248a39031f0ae4dbf570e')

    //Working Now
    // const [API_KEY] = useState('dd7e8d08f144478fb7fa8606632eef77');
    return (
        <ApiContext.Provider value={{ API_KEY, truevalue, settruevalue}}>
            {props.children}
        </ApiContext.Provider>
    )
}