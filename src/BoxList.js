import React, {useState} from "react";
import Box from "./Box";
import BoxForm from "./BoxForm";


function BoxList(){
    const [boxes, setBoxes] = useState([]);
    const addBox = (newBox) =>{
        setBoxes(boxes => [...boxes, newBox]);
    }
    const _delete = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    const boxList = boxes.map(box => (
        <Box
        id={box.id}
        width={box.width}
        height={box.height}
        remove={_delete}
        backgroundColor={box.backgroundColor}
        key={box.id}
        />
    ))
    
    return(
        <div>
            <BoxForm newBox={addBox}/>
           <div>{boxList}</div>
        </div>
    );
}





export default BoxList;