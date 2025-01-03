import { Separator } from "./ui/separator"

//*=============================
//* Reusable Heading Component 
//*=============================
type headingProps = {
    title: string,
    description: string,
}

const Heading =({title, description}: headingProps) =>{
  return (
   <>
      <div className="px-8">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>

        {/* //*Conditional rendering. Render description if the description is not empty */}
        {description && 
           (<p className="text-sm text-muted-foreground"> {description} </p>
        )}

      </div>
      
       <Separator/>
   </>
  )
}

//*this a resusable component so we will not use "default"
//*Instea enclosed it in {}
export {Heading}