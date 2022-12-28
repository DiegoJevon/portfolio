import React from "react";
import LinkedIn from "../tags/LinkedIn"
import GitHub from "../tags/GitHub";

function Contact(){
    return(
        <div className="px-24 py-20 shadow-xl hover:shadow-jevon-dark-tx">
        <section id="contact" className="px-5 text-center">
        <h1 className="text-jevon-gold">Contact</h1>
        <div className="pt-20">
            <div className="flex">
                <span className=""><LinkedIn /></span> 
                <span className=""><h4>/diegojevonmaia</h4></span>
            </div>
            <div className="flex">
                <span className=""><GitHub /></span> 
                <span className=""><h4>/diegojevon</h4></span>
            </div>
            <div className="flex">
                <span className=""><GitHub /></span> 
                <span className=""><h4>diegoj.maia@hotmail.com</h4></span>
            </div>
        </div>
        </section>
        </div>
    )
}
export default Contact 