import React from "react";
import LinkedIn from "../tags/LinkedIn"
import GitHub from "../tags/GitHub";
import Email from "../tags/Email";

function Contact(){
    return(
        <div className="px-6 pt-12 pb-32 px-24 min-md:pt-20 min-md:pb-64 shadow-md hover:shadow-jevon-dark-tx">
        <section id="contact" className="px-5 text-center">
        <h1 className="text-jevon-gold">Contact</h1>
        <div className="pt-20">        
       
            <div className="flex grid-cols-2 gap-3 content-center  py-5">
                <span className=""><a href="https://www.linkedin.com/in/diegojevonmaia/" target="noopener"><LinkedIn /></a></span> 
                <span className=""><a href="https://www.linkedin.com/in/diegojevonmaia/" target="noopener"><p>/diegojevonmaia</p></a></span>
            </div>
        
            
            <div className="flex grid-cols-2 gap-3 content-center  py-5">
                
                    <span className=""><a href="https://github.com/DiegoJevon" target="noopener"><GitHub /></a></span> 
                    <span className=""><a href="https://github.com/DiegoJevon" target="noopener"><p>/diegojevon</p></a></span>
                
            </div>
            
            <div className="flex grid-cols-2 gap-6 content-center py-5">
                <span className="pl-3"><a href="mailto: diegojevon.dev@gmail.com"><Email /></a></span> 
                <span className=""><a href="mailto: diegojevon.dev@gmail.com"><p>diegojevon.dev@gmail.com</p></a></span>
            </div>
            
        </div>
        </section>
        </div>
    )
}
export default Contact 