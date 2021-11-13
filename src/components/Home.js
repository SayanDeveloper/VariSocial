import React from 'react'
import Navbar from './Navbar'
import iphone from '../assets/iphone6.png'
import dogImg from '../assets/dog-img.jpg'
import bizinsider from '../assets/bizinsider.png'
import mashable from '../assets/mashable.png'
import techCrunz from '../assets/TechCrunch.png'
import tnw from '../assets/tnw.png'

function Home() {
    return (
        <div>
            <section id="title">
                <div className="container-fluid">
                    <Navbar />
                    <div className="row">
                        <div className="col-lg-6" >
                        <h1 className="tex-wite heading-text">Meet new and interesting dogs nearby.</h1>
                        <button type="button" className="btn btn-dark btn-lg Download-btn"><i className="fab fa-apple"></i> Download</button>
                        <button type="button" className="btn btn-outline-light btn-lg Download-btn"><i className="fab fa-google-play"></i> Download</button>
                        </div>
                        <div className="col-lg-6" >
                        <img className="title-image" src={iphone} alt="iphone-mockup" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="features">
                <div className="row">
                    <div className=" col-lg-4 features-box">
                    <i className="feature-icon fas fa-check-circle fa-4x"></i>
                    <h3>Easy to use.</h3>
                    <p>So easy to use, even your dog could do it.</p>
                    </div>
                    <div className="col-lg-4 features-box">
                    <i className="feature-icon fas fa-bullseye fa-4x"></i>
                    <h3>Elite Clientele</h3>
                    <p>We have all the dogs, the greatest dogs.</p>
                    </div>
                    <div className="col-lg-4 features-box">
                    <i className="feature-icon fas fa-heart fa-4x"></i>
                    <h3>Guaranteed to work.</h3>
                    <p>Find the love of your dog's life or your money back.</p>
                
                    </div>
                
                </div>
                
                
                </section>
                
                
                <section id="testimonials">
                
                    <div id="testimonial-carousel" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <h2 className="testimonial-text">I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
                        <img className="testimonial-image" src={dogImg} alt="dog-profile" />
                        <em>Pebbles, New York</em>
                        </div>
                
                        <div className="carousel-item" >
                        <h2 className="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
                        <img className="testimonial-image" src={dogImg} alt="lady-profile" />
                        <em>Beverly, Illinois</em>
                        </div>       
                    </div>
                    
                    <button className="carousel-control-prev" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                    
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        
                    </button>
                    </div>
                
                </section>
                
                
                
                <section id="press">
                    <img className="press-image" src={techCrunz} alt="tc-logo" /> 
                    <img className="press-image" src={tnw} alt="tnw-logo" />
                    <img className="press-image" src={bizinsider} alt="biz-insider-logo" />
                    <img className="press-image" src={mashable} alt="mashable-logo" />
                
                </section>
                
                
                <section id="pricing">
                
                
                    <h2 className="pricing-text">A Plan for Every Dog's Needs</h2>
                    <p>Simple and affordable price plans for your and your dog.</p>
                <div className="row">
                <div className=" pricing-col col-lg-4 col-md-6">
                    <div className="card">
                    <div className="card-header">
                        <h3>Chihuahua</h3>          
                    </div>
                    <div className="card-body">
                        <h2 className="pricing-text">Free</h2>
                        <p>5 Matches Per Day</p>
                        <p>10 Messages Per Day</p>
                        <p>Unlimited App Usage</p>
                        <button type="button" className="btn btn-lg btn-block btn-outline-dark">Sign Up</button>
                    </div>
                    
                </div>
                </div>
                
                <div className="pricing-col col-lg-4 col-md-6">
                    <div className="card ">
                    <div className="card-header">
                        <h3>Labrador</h3>
                        
                    </div>
                    <div className="card-body">
                        <h2 className="pricing-text">$49 / mo</h2>
                        <p>Unlimited Matches</p>
                        <p>Unlimited Messages</p>
                        <p>Unlimited App Usage</p>
                        <button type="button" className="btn btn-lg btn-block btn-dark">Sign Up</button>
                    
                    </div>    
                </div>
                </div>
                
                <div className="pricing-col col-lg-4">
                <div className="card">
                    <div className="card-header">
                    <h3>Mastiff</h3>
                        
                    </div>
                    <div className="card-body">
                    <h2 className="pricing-text">$99 / mo</h2>
                    <p>Pirority Listing</p>
                    <p>Unlimited Matches</p>
                    <p>Unlimited Messages</p>
                    <p>Unlimited App Usage</p>
                    <button type="button" className="btn btn-lg btn-block btn-dark">Sign Up</button>
                
                    </div>
                    
                </div>
                </div> 
                
                
                </div>
                </section>
                
                
                
                <section id="cta">
                    <div className="">
                    
                
                    <h3 className="cta-heading">Find the True Love of Your Dog's Life Today.</h3>
                    <button className="Download-btn btn btn-lg btn-dark" type="button"><i className="fab fa-apple"></i> Download</button>
                    <button className="Download-btn btn btn-lg btn-outline-light" type="button"><i className="fab fa-google-play"></i> Download</button>
                </div>
                </section>
        </div>
    )
}

export default Home
