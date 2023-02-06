import { easeIn, easeInOut } from "framer-motion";
import { useState,useEffect } from "react"
const Displaytemplate = (props) => {
  const {displayObj} = props
  const [showImg,setShowImg] = useState(false);
  const {title,description,techStack,img,project,github} = displayObj;
  useEffect(() => {
    
    const display = document.querySelector('.display-component');
    
    display.style.opacity=0;
    display.animate([{opacity:0},{opacity:1}],{duration: 500,delay:500,"timing-function":easeInOut , "fill":"both"})
    
  },[props])
  return (
    <article className='display-component'  >
      <h1>{title}</h1>    
      <p>{description}</p>
      {project &&<ul className="project-List">
      {techStack.map((value, index) => {
        return <li key={index}>{value}</li>
      })}
      {github && <a className = 'gitRef' href={github? github:''}>Github</a>}
    </ul>
     }
     

    {/* {showImg && <img src={displayObj.img}  alt ={displayObj.title}/>} */}
    </article>
    
  )
}

export default Displaytemplate