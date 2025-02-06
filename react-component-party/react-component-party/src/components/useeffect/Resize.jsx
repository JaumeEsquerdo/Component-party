import { useState, useEffect } from 'react';

const Resize = () => {

    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight })


    useEffect(() => {
        console.log(size)
        if(size.width !==window.innerWidth || size.height !== window.innerHeight){
        setSize({width: window.innerWidth, height: window.innerHeight})}


    },[size])


    return (
        <div style={{backgroundColor:"lightgrey", padding:"20px", borderRadius:""}}>
            <p>Width: {size.width}</p>
            <p>Height: {size.height}</p>
            </div>
    );
}

export default Resize;