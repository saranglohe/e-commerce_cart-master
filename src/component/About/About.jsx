import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
    <div className="container py-5 my-5">
        <div className="row">
            <div className="col-md-6">
                <h1 className='text-primary fw-bold mb-4'>About us</h1>
                <p  className="lead mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, amet. Deserunt ipsam nemo pariatur in numquam consequuntur. Ipsam nobis fuga quos a consectetur nulla reprehenderit cupiditate! Nemo optio sint, eaque maiores dolore rem excepturi, provident dolores modi corporis iste vel error expedita quibusdam pariatur explicabo reprehenderit sed earum molestiae cupiditate ratione quaerat accusantium voluptas ab? Incidunt perspiciatis excepturi sed ea, iure dolore nulla. Maxime reiciendis suscipit consequuntur sunt magnam id totam, repellendus sit minima nostrum quos asperiores voluptas quod perferendis vel magni temporibus illo beatae quam? Maiores consequatur, quidem accusamus iure cupiditate id perferendis, laborum dolore quasi corporis atque officiis?
                </p>
                <NavLink  to ='/contact' className='btn btn-outline-primary px-3'>Contact us</NavLink>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
                <img src="/assets/about.webp" alt="About us" height={"400px"} width="400px" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default About