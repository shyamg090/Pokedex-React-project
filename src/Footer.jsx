import React from "react";

function Footer() {
    return (
        <footer className="foot">
            <div>
                <a class="alink"
                    href="https://www.linkedin.com/in/shyam-g-6712a522b">
                    <img src="../images/linkedin.png" alt="linkedin"></img>
                </a>


            </div>
            <div>                 
                <a class="alink" href="https://twitter.com/_Shyam_G">
                <img src="../images/twitter.png" alt="twit"></img>
            </a>
            </div>
            <div>                
                <a class="alink"
                href="https://github.com/shyamg090?tab=repositories">
                <img src="../images/github.png"
                    alt="github"></img></a></div>
            <div>                 
                <a class="alink" href="https://www.instagram.com/shyam_g__/">
                <img src="../images/instagram.png" alt="insta"></img>
            </a>
            </div>
        </footer>

    );
}

export default Footer;