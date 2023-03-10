import React from "react";
import ReactApp from "../tags/React";
import Tailwind from "../tags/Tailwind";
import JavaScript from "../tags/JavaScript";
import Next from "../tags/Next";
import Python from "../tags/Python";
import Node from "../tags/Node";
import Express from "../tags/Express";
import MongoDB from "../tags/MongoDB";
import Scrapy from "../tags/Scrapy";
import CSS from "../tags/CSS";
import HTML from "../tags/HTML";
import Java from "../tags/Java";
import Bootstrap from "../tags/Bootstrap";
import MySQL from "../tags/MySQL";
import APIs from "../tags/APIs";
import Project1 from "./Project1"
import Project2 from "./Project2"


function Portfolio(){

    return(
        <div className="px-6 pt-12 pb-32 px-24 min-md:pt-20 min-md:pb-64 shadow-md hover:shadow-jevon-dark-tx">
            <section id="portfolio" className="px-5 text-center">
                <h1 className="text-jevon-gold">Portfolio</h1>
                <div className="pb-4 pt-20">
                    <p>You can take a look into the projects that I've being working on and the technologies used for each one. </p>
                    <p>This website was built using:</p>
                </div>
                <div className="inline-flex max-md:inline-block gap-2 justify-between items-center ">
                    <ReactApp />
                    <Tailwind />
                    <JavaScript />            
                    <Next />
                    <CSS />
                </div>
                <div className="xl:flex items-stretch gap-8 py-10 max-lg:block">
                    <div className="flex justify-center shadow-md max-lg:my-4 xl:w-1/2 p-5 rounded-3xl border-x-2 border-jevon-dark-tx hover:border-jevon-gold hover:shadow-jevon-gold my-4">
                        <div>
                        <h3  className="rounded-lg font-bold text-jevon-gold">Home nVentory</h3>
                            <div className="pt-5">
                                <Project1 />
                            </div>
                            <div className="my-4 box-content text-justify inline-block">
                                <p className="py-4 text-lg max-sm:text-md lg:h-40">Inventory Web App. It's able to handle multiple inventory systems, for multiple companies, using the same Web App. Each company has different access, in different systems, not allowing the company's admin access other companies' inventory or user accounts ouside the admin's company. The Web App admin can  access all companies' inventory and all user accounts. </p>
                            
                            
                                <p className="mt-4 text-center">Technologies used by me in this project:</p>
                                <div className="inline-flex max-md:inline-block gap-2 justify-between items-center pb-10 w-full">
                                    <Java />
                                    <Bootstrap />   
                                    <HTML />            
                                    <CSS />
                                    <MySQL />
                                    <APIs />
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="flex justify-center shadow-md max-lg:my-4 xl:w-1/2 p-5 rounded-3xl border-x-2 border-jevon-dark-tx hover:border-jevon-gold hover:shadow-jevon-gold my-4">
                        <div>
                        <h3  className="rounded-lg font-bold text-jevon-gold">Nodex</h3>
                            <div className="pt-5">
                                <Project2 />
                            </div>
                            <div className="my-4 box-content text-justify inline-block ">
                                <p className="py-4 text-lg max-sm:text-md lg:h-40">All-in-one platform for digital nomads. My role was being part of the back-end team, responsable for web scraping, consumable APIs, database development and deployment.</p>
                            
                            
                                <p className="mt-4 text-center">Technologies used by me in this project:</p>
                                <div className="inline-flex max-md:inline-block gap-2 justify-between items-center pb-10 w-full">
                                    <Python />
                                    <Scrapy />
                                    <Node />            
                                    <Express />
                                    <MongoDB />
                                    <APIs />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                                    
                 </div>
                  

            </section>

        </div>

    )
}
export default Portfolio
