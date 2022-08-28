import React from 'react';
import './Teacher-gallery.css';

function TeacherGallery() {
    return (
        <div className="teacher-gallery-container">
            <div className="teacher-header">
                        <p>Meet Our Teachers</p>
                        <h2>We Have Lot’s Of Experience Teacher To Teach The Students</h2>
                    </div>
            <div className="teacher-gallery">
                <div className="teachers">
                    <div className='teach teach1'>
                        <img src={require('./assets/sc-employee-1.jpg')} alt="teacher" />
                        <h4>Patrick K. Clarkson</h4>
                        <p>Computer Teacher</p>
                    </div>
                    <div className='teach teach2'>
                        <img src={require('./assets/sc-employee-2.jpg')} alt="teacher" />
                        <h4>Patrick K. Clarkson</h4>
                        <p>Computer Teacher</p>
                    </div>
                    <div className='teach teach3'>
                        <img src={require('./assets/sc-employee-3.jpg')} alt="teacher" />
                        <h4>Patrick K. Clarkson</h4>
                        <p>Computer Teacher</p>
                    </div>
                    <div className='teach teach4'>
                        <img src={require('./assets/sc-employee-4.jpg')} alt="teacher" />
                        <h4>Patrick K. Clarkson</h4>
                        <p>Computer Teacher</p>
                    </div>
                </div>
                <div className="gallery-bottom">
                    <img src={require("./assets/gallery-1.jpg")} ></img>
                    <img src={require("./assets/gallery-2.jpg")} ></img>
                    <img src={require("./assets/gallery-3.jpg")} ></img>
                    <img src={require("./assets/gallery-4.jpg")} ></img>
                </div>
            </div>
    </div>
    )
}

export default TeacherGallery;