import React from "react";
import Photo from "./Photo";


function Header(){


    return(
        <React.Fragment>
        <div className="max-sm:py-24 max-sm:px-10 max-lg:px-20 max-sm:mt-8 text-center shadow-md hover:shadow-jevon-dark-tx">
            <Photo />
            <div className="py-5 items-center text-2xl">
                <h2 className="py-5">Web Developer <span className="text-jevon-gold"> | </span>Full Stack Developer<span className="text-jevon-gold"> | </span>Database Developer</h2>
            </div>
            <div className="py-5 items-center text-xl">
                <h3>After 15 years working in the business, I decided for moving with my family to Calgary, AB in Canada, pivoting to the tech field as a developer</h3>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Header;