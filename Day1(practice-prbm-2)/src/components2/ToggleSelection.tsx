import { FruitCard } from "./FruitCard";

type ToggleSelectionProps={
    fruits:string[],
}

export const ToggleSelection = ({fruits}:ToggleSelectionProps) => {

  return (
    <div>
        {
            fruits.map((fruit,index)=>(
                <div>
                    <FruitCard key={`${fruit}-${index}`} fruit={fruit}/>
                </div>
            ))
        }

    </div>
  )
}
