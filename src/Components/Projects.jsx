import '../CSS/Projects.scss'
import car from '../Assets/car-rental.png'
import bike from '../Assets/bike-shop.png'
import gym from '../Assets/gymate-home.webp'
import ecom from '../Assets/ecom.webp'
import {FaGithub} from 'react-icons/fa'
import {BsBoxArrowUpRight} from 'react-icons/bs'
import TextGlow from './TextGlow'


function Projects() {
  return (
    <section id='projects' className='projects'>
        <div className="container">
        <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
                <div className="project_card type__1">
                    <div className="project-img">
                        <a href="https://rentalcars8.netlify.app/">
                            <img src={car} alt="website" className='img-hover-1' />
                        </a>
                    </div>
                    <div className="project-text">
                        <h3>RENTAL CAR 🚗</h3>
                        <p>
                        A rental car website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.
                        </p>
                        <div className="stack">
                            <p>React</p>
                            <p>SCSS</p>
                        </div>
                        <div className="links">
                            <a href="https://github.com/DmytroShevchenko888/RentalCars">
                                <div>Code</div>
                                <FaGithub className='icon'/>
                            </a>
                            <a href="https://rentalcars8.netlify.app/">
                                <div>Live Demo</div>
                                <BsBoxArrowUpRight className='icon'/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project_card type__1 reversed">
                    <div className="project-img">
                            <a href="https://bike-shop-dnipro.netlify.app/">
                                <img src={bike} alt="website" className='img-hover-2' />
                            </a>
                        </div>
                        <div className="project-text">
                            <h3>BIKE SHOP 🚲</h3>
                            <p>
                                Bike Shop is a e-commerce project that allows users to search and buy different bicycles.  Joint project with 
                                &nbsp;<a href='https://github.com/alexey-sevastynov'>Alexey Sevastynov</a>.
                            </p>
                            <div className="stack">
                                <p>React</p>
                                <p>SCSS</p>
                            </div>
                            <div className="links">
                                <a href="https://github.com/DmytroShevchenko888/Bike-Shop">
                                    <div>Code</div>
                                    <FaGithub className='icon'/>
                                </a>
                                <a href="https://bike-shop-dnipro.netlify.app/">
                                    <div>Live Demo</div>
                                    <BsBoxArrowUpRight className='icon'/>
                                </a>
                            </div>
                        </div>
                </div>
                <div className="project_card type__1">
                    <div className="project-img">
                                <a href="">
                                    {/* <img src={gym} alt="website" className='img-hover-3' /> */}
                                    <TextGlow/>
                                </a>
                            </div>
                            <div className="project-text">
                                <h3>GYMATE 🏋️</h3>
                                <p>
                                A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals.
                                </p>
                                <div className="stack">
                                    <p>React</p>
                                    <p>SCSS</p>
                                </div>
                                <div className="links">
                                    <a href="https://github.com/DmytroShevchenko888">
                                        <div>Code</div>
                                        <FaGithub className='icon'/>
                                    </a>
                                    <a href="">
                                        <div>Live Demo</div>
                                        <BsBoxArrowUpRight className='icon'/>
                                    </a>
                                </div>
                            </div>
                </div>
                <div className="project_card type__1 reversed">
                    <div className="project-img">
                                    <a href="">
                                        {/* <img src={ecom} alt="website" className='img-hover-4' /> */}
                                        <TextGlow/>
                                    </a>
                                </div>
                                <div className="project-text">
                                    <h3>RAOUF ECOMMERCE 🛒</h3>
                                    <p>
                                    With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need.
                                    </p>
                                    <div className="stack">
                                        <p>React</p>
                                        <p>SCSS</p>
                                    </div>
                                    <div className="links">
                                        <a href="https://github.com/DmytroShevchenko888">
                                            <div>Code</div>
                                            <FaGithub className='icon'/>
                                        </a>
                                        <a href="">
                                            <div>Live Demo</div>
                                            <BsBoxArrowUpRight className='icon'/>
                                        </a>
                                    </div>
                                </div>
                </div>
            </div>
        </div>
        </div>
        
    </section>
  )
}

export default Projects