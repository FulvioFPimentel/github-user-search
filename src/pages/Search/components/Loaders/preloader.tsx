import React from 'react';
import ContentLoader from "react-content-loader"
import './styles.css'


const preloader = () => {

    return (
        
        <div className="container-loader">
            <div className="loader-base">
                <div className="loader-box-img">
                    <ContentLoader 
                        speed={2}
                        width={400}
                        height={460}
                        viewBox="0 0 400 460"
                        backgroundColor="#dedede"
                        foregroundColor="#f5f5f5"
                    >
                        <rect x="19" y="23" rx="2" ry="2" width="284" height="284" /> 
                        <rect x="23" y="319" rx="0" ry="0" width="155" height="48" />
                    </ContentLoader>
                </div>

                <div className="details-preloader">
                    <ContentLoader 
                        speed={2}
                        width={870}
                        height={260}
                        viewBox="0 0 870 260"
                        backgroundColor="#dedede"
                        foregroundColor="#f5f5f5"
                    >
                        <rect x="0" y="0" rx="2" ry="2" width="870" height="260" />
                    </ContentLoader>
                </div>
                
        </div>
    </div>
    );
}

export default preloader;