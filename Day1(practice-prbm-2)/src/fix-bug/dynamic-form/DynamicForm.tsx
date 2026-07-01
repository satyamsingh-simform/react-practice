import { useState } from "react";

/*
Mutation = Changing the contents of the same object (same reference).
Immutability = Leaving the original object untouched and creating a new object (new reference).
React loves immutability because it can detect changes very quickly using reference comparison instead of checking every property.
*/

/*//Bug Code
export default function DynamicForm() {
  const [fields, setFields] = useState([{ id: 1, value: "" }]);

    const addField = () => {
        fields.push({
        id: Date.now(),
        value: "",
        });

        setFields(fields);
    };

  const updateField = (index, value) => {
    fields[index].value = value;
    setFields([...fields]);
  };

  return (
    <>
      <button onClick={addField}>Add Field</button>

      {fields.map((field, index) => (
        <input
          key={index}
          value={field.value}
          onChange={(e) => updateField(index, e.target.value)}
        />
      ))}
    </>
  );
}
*/

//Bug Fixed Code
export default function DynamicForm() {
  const [fields, setFields] = useState([{ id: 1, value: "" }]);

  //fixed code
    const addField = () => {
        // const newField={
        //     id:Date.now(),
        //     value:'hello',
        // }
        // setFields([...fields,newField]);
        setFields((prev)=>[...prev,{id:Date.now(),value:'hello'}])
    };

  const updateField = (index:number, value:string) => {
    // fields[index].value = value;
    // setFields([...fields]);
    const updatedField=fields.map((field,i)=>(
                i===index
                ?
                {
                    ...field,
                    value:value
                }
                :field
       )   )
    setFields(updatedField);
  };

  return (
    <>
      <button onClick={addField}>Add Field</button>

      {fields.map((field, index) => (
        <input className="border"
          key={field.id}
          value={field.value}
          onChange={(e) => updateField(index, e.target.value)}
        />
      ))}
    </>
  );
}