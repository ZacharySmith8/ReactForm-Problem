import React from "react";


function Box({
    id,
    remove,
    width = 3,
    height = 3,
    backgroundColor = "yellow"
}){
    const Delete = () => remove(id);

    return (
        <div>
            <div
            style={{
                height: `${height}rem`,
                width: `${width}rem`,
                backgroundColor
            }}
            >
            </div>
            <button onClick={Delete}>x</button>
        </div>
    )
}



export default Box;