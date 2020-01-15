import React from 'react';
// import splashPic from '../../../app/assets/images/splash_image.jpg'
// const splash = require('../../../app/assets/images/splash_image.jpg');

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {

        return (
            <div>
                <div className="splash-image-box">
                    <img src="" alt=""/>
                    <div className="splash-image-box-contents">
                        <span className="splash-image-box-header">
                            Outside is scary, stay in
                        </span>
                        <span className="splash-image-box-details">

                        </span>
                        <button className="splash-image-box-button">

                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;