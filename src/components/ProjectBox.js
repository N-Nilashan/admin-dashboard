import React from 'react';

const ProjectBox = ({ title }) => {

    return (
        <div className="project-box">
            <div className="project-cont">
                <p style={{ fontWeight: 'bold' }}>{title}</p>
                <p style={{ color: 'grey' }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum est soluta officia deserunt eaque.
                </p>
            </div>
            <div className="cont-icons">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-eye"></i>
                <i className="fa-regular fa-share-from-square"></i>
            </div>
        </div>
    );
}
export default ProjectBox