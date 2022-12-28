import React from "react";

function Navbar() {
    return (
        <React.Fragment>
            <div className="relative flex items-center justify-between px-10 w-screen sticky shadow-2xl h-[150px] text-jevon-gold hover:shadow-jevon-dark-tx">
                <a className="text-3xl" href="/">Diego Jevon</a>
                <div className="inline block uppercase font-semibold">
                    <a className="p-4 text-xl rounded-2xl hover:shadow-md hover:shadow-jevon-gold" href="#aboutme">About Me</a>
                    <a className="p-4 text-xl rounded-2xl hover:shadow-md hover:shadow-jevon-gold" href="#portfolio">Portfolio</a>
                    <a className="p-4 text-xl rounded-2xl hover:shadow-md hover:shadow-jevon-gold" href="#contact">Contact</a>
                    <a className="p-4 text-xl rounded-2xl hover:shadow-md hover:shadow-jevon-gold" href="https://diegojevon.medium.com" target="noopener">Blog</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar;