import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { openModal } = this.props;
        return (
            <div>
                <div className="splash-image-box">
                    <img className="splash-image" src="https://feetup-seeds.s3-us-west-1.amazonaws.com/splash_image.jpg" alt=""/>
                    <div className="splash-image-box-container">
                        <div className="splash-image-box-contents">
                            <span className="splash-image-box-header">
                                The real world is scary
                            </span>
                            <span className="splash-image-box-details">
                                Join a group to stay in and meet people from the comfort of your home.
                            </span>
                            <button className="splash-image-box-button" onClick={() => openModal('signup')}>
                                Join FeetUp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;