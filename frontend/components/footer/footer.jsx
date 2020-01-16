import React from 'react';


const Footer = () => {

    return (
        <div className="footer-div">
            <h4 className="made-by-statement">FeetUp was made ever-so-lovingly by JP Tucci</h4>
            <div className="footer-logos">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/jtucci1210"><i className="fab fa-github"></i></a>
                <div className="im-a-spacer"></div>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/james-tucci-56b06b99/"><i className="fab fa-linkedin"></i></a>
            </div>
        </div>
    )
}

export default Footer;