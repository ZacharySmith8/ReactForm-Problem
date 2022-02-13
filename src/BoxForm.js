import React, {useState} from "react";
import uuid from "uuid/v4";


function BoxForm({newBox}){
    const [formData,setFormData] = useState({
        height: 0,
        width: 0,
        backgroundColor: "Set Your Color"
    });

    const handleChange = (e) => {
        const {name,value} = e.target;
        
        setFormData(formData => ({
            ...formData,
            [name] : value
        }))
}
    const gatherInput = evt => {
    evt.preventDefault();
    newBox({ ...formData, id: uuid() });
    setFormData({ height: "", width: "", backgroundColor: "" });
  };    
return (
    <div>
      <form  onSubmit={gatherInput}>
        <div>
          <label htmlFor="height">Height</label>
          <input
            onChange={handleChange}
            type="text"
            name="height"
            value={formData.height}
            id="height"
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            onChange={handleChange}
            type="text"
            name="width"
            id="width"
            value={formData.width}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            onChange={handleChange}
            type="text"
            name="backgroundColor"
            value={formData.backgroundColor}
            id="backgroundColor"
          />
        </div>
        <button id="newBoxButton">Add a new box!</button>
      </form>
    </div>
  );
}



export default BoxForm;