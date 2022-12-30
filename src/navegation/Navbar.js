import React, { useState } from "react";
import {Bars4Icon, XMarkIcon} from "@heroicons/react/24/solid"

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    function handleMobileClick(){
        setIsMobile(!isMobile);
    }
    return (
        <React.Fragment>
            <div className="relative flex items-center justify-between px-10 w-screen sticky shadow-2xl h-[150px] max-sm:h-[100px] text-jevon-gold hover:shadow-jevon-dark-tx">
                <a className="lg:text-4xl uppercase font-semibold max-sm:text-2xl" href="/">Diego Jevon</a>
                <div className="hidden md:inline-block uppercase font-semibold">
                    <a className="p-4 text-xl rounded-2xl hover:shadow-md hover:shadow-jevon-gold" href="#aboutme">About Me</a>
                    <a className="p-4 text-xl rounded-2xl hover:shadow-md hover:shadow-jevon-gold" href="#portfolio">Portfolio</a>
                    <a className="p-4 text-xl rounded-2xl hover:shadow-md hover:shadow-jevon-gold" href="#contact">Contact</a>
                    <a className="p-4 text-xl rounded-2xl hover:shadow-md hover:shadow-jevon-gold" href="https://diegojevon.medium.com" target="noopener">Blog</a>
                </div>
                <div className="inline-block md:hidden">
                    {isMobile ? <XMarkIcon className="h-10 w-10 text-jevon-gold"onClick={handleMobileClick} /> : <Bars4Icon className="h-10 w-10 text-jevon-gold" onClick={handleMobileClick} />}
                </div>
            </div>

            {isMobile
            ?<div className="inline-block md:hidden text-jevon-gold uppercase font-semibold flex flex-col w-screen shadow-lg hover:shadow-jevon-dark-tx">
                    <a className="m-1 text-center p-2 text-xl rounded-2xl hover:shadow-md hover:shadow-jevon-gold" href="#aboutme">About Me</a>
                    <a className="m-1 text-center p-2 text-xl rounded-2xl hover:shadow-md hover:shadow-jevon-gold" href="#portfolio">Portfolio</a>
                    <a className="m-1 text-center p-2 text-xl rounded-2xl hover:shadow-md hover:shadow-jevon-gold" href="#contact">Contact</a>
                    <a className="m-1 text-center p-2 text-xl rounded-2xl hover:shadow-md hover:shadow-jevon-gold" href="https://diegojevon.medium.com" target="noopener">Blog</a>
                </div>
            : ""
            }
        </React.Fragment>
    )
}

export default Navbar;