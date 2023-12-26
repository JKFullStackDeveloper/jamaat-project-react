import { useEffect, useState } from "react";


 const Slider = ({data})=> {
   const [imageIndex,setImageIndex] = useState(0);
  
    const handlePrevious = ()=>{
      setImageIndex(!imageIndex ? data.length-1 : imageIndex-1)
    }

    const handleNext = ()=>{
      setImageIndex((imageIndex+1) % data.length)
    }

    useEffect(()=>{
      const timer = setTimeout(()=>{
         handleNext()
      },4000);
      return()=>{
         clearTimeout(timer)
      }
    },[imageIndex])
    
    return (
      <>
      <div className="flex justify-around">
      <button onClick={handlePrevious} className='ring-offset-1 ring-1 ring-gray-600 font-bold h-12 w-10 rounded-full bg-orange-200/25 relative top-40 text-cyan-950 hover:bg-slate-600 hover:text-cyan-200'><i class="fa-solid fa-angle-left"></i></button>
     <div>
      {
       data.map((item,index)=>(
         <img
         key={item} 
         className={
            "w-[1000px] h-[400px] rounded-lg ring-offset-1 ring-1 ring-pink-600/50 " + (imageIndex===index?"block":"hidden")} 
         src={item.src} alt="WallPaper" />
       ))  
      }
     </div>
     <button onClick={handleNext} className='ring-offset-1 ring-1 ring-gray-600 font-bold h-12 w-10 rounded-full bg-orange-200/25 relative top-40 text-cyan-950 hover:bg-slate-600 hover:text-cyan-200'><i class="fa-solid fa-angle-right"></i></button>
     </div>
     </>
   );
 };

 export default Slider;
 