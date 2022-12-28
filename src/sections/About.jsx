import React from "react";

function About(){
    return(
        <div className="px-24 pt-20 pb-64 shadow-xl hover:shadow-jevon-dark-tx">
        <section id="aboutme" className="px-5 text-center">
            <h1 className="text-jevon-gold">About Me</h1>
            <div className="inner-block pt-20">
                <p className="py-4">Ever since I came to Canada, I've been challenging myself, always learning what this new life could give me, always with a positive attitude. This is the reason that I've been sharing my life experiences on LinkedIn, trying to motivate my networking with my challenges and debating with open-mind thoughts to keep learning as much as possible.</p>
                <p className="py-4">I've worked for several companies, such as Dell, IBM, and Continental Automotive, as you can see from <a className="text-jevon-gold rounded-lg hover:border-b-2 hover:border-jevon-gold" href="https://www.linkedin.com/in/diegojevonmaia/" target="noopener">my LinkedIn profile</a>. Still, I've learned so much from my clients, former peers, former managers and friends. I can say that I have no regrets and my background in business gave me another perspective and I'm counting as an advantage as part of my result in the tech field.</p>
                <p className="py-4">Since moving to Canada, I've been studying to become a software developer, graduating from SAIT, studying on my own and creating <a className="text-jevon-gold rounded-lg hover:border-b-2 hover:border-jevon-gold" href="#portfolio">projects</a> to enhance my skills and expand my portfolio.</p>
                <p className="py-4">The reason for this site is to show who I am and briefly share my experiences and employment. Feel free to <a className="text-jevon-gold rounded-lg hover:border-b-2 hover:border-jevon-gold" href="#contact">get in touch</a> with me. </p>

            </div>
        </section>
        </div>
    )
}
export default About