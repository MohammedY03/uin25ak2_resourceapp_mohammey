
import  {resources}  from "../../ressurser.js"
export default function Resources({category}) {
  
  
  
    const filteredResources = resources.filter((resource) => resource.category === category )

    console.log(category)
        
    return (
        <div className="tittel"> { 
        filteredResources.map((resource, index)=> <a href={resource.url} key={index} >{resource.title}</a>) 
        }
         </div>

        
    )


    
}
