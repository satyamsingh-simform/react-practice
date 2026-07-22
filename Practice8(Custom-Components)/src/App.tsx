import { useState } from "react";
import { CustomButton } from "./components/CustomButton";
import { CustomSelect } from "./components/CustomSelect";
import { MultiSelect } from "./components/MultiSelect";
import Stopwatch from "./components/StopWatch";
import { CustomInput } from "./components/CustomInput";

export const App = () => {
  const [name,setName]=useState('');

  //custom select
  const [selected,setSelected]=useState('');
  function handleChange(val:string){
    setSelected(val)
  }
  const options = [
  { id: 1, label: "React", value: "react" },
  { id: 2, label: "Angular", value: "angular" },
  { id: 3, label: "Vue", value: "vue" },
  { id: 4, label: "Svelte", value: "svelte" },
  { id: 5, label: "Next.js", value: "nextjs" },
  { id: 6, label: "Node.js", value: "nodejs" },
  { id: 7, label: "Express.js", value: "express" },
  { id: 8, label: "NestJS", value: "nestjs" },
  { id: 9, label: "TypeScript", value: "typescript" },
  { id: 10, label: "JavaScript", value: "javascript" },
  { id: 11, label: "Redux Toolkit", value: "redux-toolkit" },
  { id: 12, label: "Tailwind CSS", value: "tailwindcss" },
  { id: 13, label: "MongoDB", value: "mongodb" },
  { id: 14, label: "PostgreSQL", value: "postgresql" },
  { id: 15, label: "Docker", value: "docker" },
];


  //custom button
  const onClick = () => {
    console.log("clicked");
  }

  return (
    <div className="App">

      {/* <CustomButton variant="" onClick={onClick} disabled={false} size="sm">
        click
      </CustomButton> */}

      {/* <CustomSelect
        disabled={true}
        // multiple
        options={options}
        value={selected}
        onChange={handleChange}
      /> */}

        {/* <MultiSelect
          options={options}
          multiple
        /> */}

        {/* <Stopwatch/> */}

        <CustomInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Controlled Input"
        />

        <CustomInput
          defaultValue="Satyam"
          placeholder="Uncontrolled Input"
          onChange={(e)=>console.log(e.target.value)}
        />

    </div>
  )
}

