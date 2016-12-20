// Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// This code renders a simple HTML Div.
// Note that ReactDOM.render cannot render a block of HTML elements witout them all fitting within a single div or container.
ReactDOM.render(
<div>        
        <div className="main-loader"></div>
        <section id="wrap">
          {/* Complete Wrap of Left and Right Side */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 padding-zero">
                {/* Menu */}
                {/* **** */}
                <div className="nav-sec">
                  <div className="texture-overlay" />
                  <div className="nav-wrapper">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right navicon nav-toggle">
                      <a id="trigger-overlay" className="nav_slide_button" href="#"><span /></a>
                    </div>
                  </div>
                </div>
                {/* Menu End */}
                {/* Left Hand Side Section */}
                {/* ********************** */}
                <div className="overlay-left" style={{display: 'none'}} />
                <div className="col-lg-6 col-sm-6 left-home">
                  <div className="align-middle">
                    <div className="wrap-info">
                      <div className="col-lg-12">
                        <div className="avater fadeindown" />
                        <div className="logo fadeindown text-center">
                          {/* Logo Goes here */}
                          <h1>Bradley Gamboa</h1>
                          <h5>Full Stack Developer</h5>
                        </div>
                        {/* Text rotation */}
                        <section className="cd-intro">
                          <h4 className="cd-headline clip is-full-width">
                            <span>I design</span> <br />
                            <span className="cd-words-wrapper">
                              <b className="is-visible">cool websites</b>
                              <b>javascript apps</b>
                              <b>awesome games</b>    
                            </span>
                          </h4>
                        </section>
                        {/* Text rotation */}
                        <div className="socials-icons">
                          {/* Social Icons */}
                          <div className="socials-icons-list padding-zero">
                            <a href="http://www.linkedin.com/in/bradleygamboa" target="_blank" className="icon1" data-toggle="tooltip" data-placement="top" title="Linkedin"><i className="fa fa-linkedin" /></a>
                            <a href="http://www.github.com/bradleygamboa" target="_blank" className="icon2" data-toggle="tooltip" data-placement="top" title="Github"><i className="fa fa-github" /></a>
                            <a href="http://www.dribbble.com/bradleygamboa" target="_blank" className="icon3" data-toggle="tooltip" data-placement="top" title><i className="fa fa-dribbble" /></a>
                            <a href="https://www.codepen.io/bradleygamboa/" target="_blank" className="icon4" data-toggle="tooltip" data-placement="top" title><i className="fa fa-codepen" /></a>
                          </div>
                        </div>
                        {/* Social Icons */}
                        <div className="clear" />
                        <div className="copyright">
                          <span>2016 Ⓒ Bradley Gamboa</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Left Hand Side Section End */}
                {/* Right side Section */}
                {/* *********************** */}
                <div className="col-lg-6 col-sm-6 right-home">
                  {/* ********** */}
                  <div className="content-area right-bg-color">
                    <div className="wrap-info">
                      <div className="col-lg-12">
                        {/* Portfolio */}
                        <div className="col-lg-offset-1 col-lg-10 col-xs-12 home-sec test">
                          <div className="portfolio text-center">
                            <div className="about-heading heading portfolio-padding prf-animation">
                              <h2>My Projects</h2>
                            </div>
                            <div id="cbp-fwslider" className="cbp-fwslider">
                              <ul>
                                <li>
                                  <h3 className="name">Vinyl Beauty Studio</h3>
                                  <img src="img/vinylbeauty.jpg" style={{width: '70%'}} alt="First Website" />
                                  <p className="desc">This is a website I worked on in
                                    <br />collaboration with nationally recognized
                                    <br />hairstylist Cynthia Valdez.
                                  </p>
                                  <a className="btn project" target="_blank" href="http://www.vinylbeautystudio.com">Check it out</a>
                                </li>
                                <li>
                                  <h3 className="name">Elena Kanpp's Portofilo</h3>
                                  <img src="img/elenaknapp.jpg" style={{width: '70%'}} alt="Second Website" />
                                  <p className="desc">I met Elena while living in Austin, TX.
                                    <br />I have always been amazed with
                                    <br />her work. We collaborated to create
                                    <br />her a portfolio to show of her work to the world.</p>
                                  <a className="btn project" target="_blank" href="http://www.elenaknapp.us">Check it out</a>
                                </li>
                                <li>
                                  <h3 className="name">Craftniss.com</h3>
                                  <img src="img/craftniss.png" style={{width: '70%'}} alt="Project 2" />
                                  <p className="desc">A very good friend of mine wanted
                                    <br />to create a website where she could show off
                                    <br />her baby shoe making skills. With her talent
                                    <br />we joined up to create this work of art.</p>
                                  <a className="btn project" target="_blank" href="http://www.craftniss.com">Check it out</a>
                                </li>
                                <li>
                                  <h3 className="name">Rebel Rebel Creative</h3>
                                  <img src="img/rebelrebel.jpg" style={{width: '70%'}} alt="Project 2" />
                                  <p className="desc">Rebel Rebel Creative provides; Marketing, Design,
                                    <br />and Strategies to help your business grow.</p>
                                  <a className="btn project" target="_blank" href="http://www.rebelrebelcreative.com/">Check it out</a>
                                </li>
                                <li>
                                  <h3 className="name">Let's Make A Meal</h3>
                                  <img src="img/letsmakeameal.jpg" style={{width: '70%'}} alt="Project 2" />
                                  <p className="desc">Let's Make a meal is a class project that utilizes
                                    <br />a API to allow you to search for recipes by ingredients.</p>
                                  <a className="btn project" target="_blank" href="https://lets-make-a-meal-deal.herokuapp.com/">Check it out</a>
                                </li>
                                <li>
                                  <h3 className="name">Doctor Who Hangman</h3>
                                  <img src="img/doctorwhodiamond.jpg" style={{width: '70%'}} alt="Project 2" />
                                  <p className="desc">In this project I created Hangman
                                    <br />game like you remember as a child. I added
                                    <br />a Doctor Who twist to it as the nerd inside
                                    <br />me comes out in my projects.</p>
                                  <a className="btn project" target="_blank" href="https://doctor-who-hangman.herokuapp.com/">Check it out</a>
                                </li>
                                <li>
                                  <h3 className="name">Final Fantasy Crystal Game</h3>
                                  <img src="img/finalfantasy.jpg" style={{width: '70%'}} alt="Project 3" />
                                  <p className="desc">Are you ready to save the world
                                    <br />from the clutches of Sephiroth. Join Cloud,
                                    <br />Barret, Tifa, and company to destroy evil once
                                    <br />and for all. Lets go!</p>
                                  <a className="btn project" target="_blank" href="https://final-fantasy-crystals-game.herokuapp.com/">Check it out</a>
                                </li>
                                <li>
                                  <h3 className="name">Rock n Roll Triva</h3>
                                  <img src="img/rocknroll.jpg" style={{width: '70%'}} alt="Project 4" />
                                  <p className="desc">Test your Rock n Roll knowledge.
                                    <br />How hard do you rock!?</p>
                                  <a className="btn project" target="_blank" href="https://rock-n-roll-triva-game.herokuapp.com/">Check it out</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* Portfolio End */}
                        {/* About me */}
                        <div className="col-lg-offset-1 col-lg-10 col-xs-12 about about-sec">
                          <div className="about-heading heading heading-padding prf-animation">
                            <h2>About me</h2>
                          </div>
                          <div className="profile-content prf-animation-sec">
                            {/* About Content */}
                            <p>
                              Hello I am Bradley, and I am earning my certification with The Coding Boot Camp at UT Austin. I have an eye for detail and a passion for what I do. Doing my best is my #1 priority!
                              {/*You can find my resume <a target="_blank" href="#">here</a>.*/}
                            </p>
                          </div>
                          <div className="clear" />
                          <div className="about-content">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="about-item animated fadeInup">
                                  {/*<img src="img/header_bg.jpg" alt="Profile pic" />*/}
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="about-heading heading heading-padding prf-animation">
                                <h2>I am good at</h2>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <h5>HTML5</h5>
                                <div className="progress">
                                  <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '95%'}}>
                                    <span>95%</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <h5>CSS3</h5>
                                <div className="progress">
                                  <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '95%'}}>
                                    <span>95%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <h5>Bootstrap</h5>
                                <div className="progress">
                                  <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                                    <span>90%</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <h5>Javascript/Jquery</h5>
                                <div className="progress">
                                  <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                                    <span>80%</span>
                                  </div>
                                </div>
                              </div>
                              {/* Second set of skills */}
                              <div className="col-md-6">
                                <h5>Mongob</h5>
                                <div className="progress">
                                  <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>
                                    <span>75%</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <h5>Express</h5>
                                <div className="progress">
                                  <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>
                                    <span>75%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <h5>React</h5>
                                <div className="progress">
                                  <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>
                                    <span>75%</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <h5>Node.js</h5>
                                <div className="progress">
                                  <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                                    <span>80%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* About End */}
                        {/* Say Hello */}
                        <div className="col-lg-offset-1 col-lg-10 col-xs-12 contact contact-sec">
                          <div className="contact-heading heading heading-padding prf-animation">
                            <h2>SAY HELLO</h2>
                          </div>
                          <div className="address">
                            <h3>Let's Keep In Touch</h3>
                            <p>Feel free to reach out to me if you have questions concerns or comments. All feedback is appreciated and used to better myself.
                            </p>
                            <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="address-wrap animated fadeIndown">
                                  <div className="col-md-3 icon-block"><i className="fa fa-phone add-icon" /></div>
                                  <div style={{float: 'left'}}>
                                    <span className="margin-top">Mobile phone: 512-577-0631</span>
                                    <span className="margin-top">Alt phone: 512-767-9637</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="address-wrap animated fadeIndown1">
                                  <div className="col-md-3 icon-block"><i className="fa fa-envelope add-icon" /></div>
                                  <div style={{float: 'left'}}>
                                    <span className="margin-top add-mail">bradleygamboa@gmail.com</span>
                                    <span className="margin-top add-mail">bradleygamboa@icloud.com</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Say Hello End */}
                        {/* Services */}
                        <div className="col-lg-offset-1 col-lg-10 col-xs-12 contact test-sec">
                          <div className="contact-heading heading heading-padding prf-animation">
                            <h2>The Skills I Provide</h2>
                          </div>
                          <div className="clear" />
                          <div className="address">
                            <div className="about-content">
                              <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                  <div className="service-box animated fadeInup">
                                    <i className="fa fa-keyboard-o" />
                                    <h2>Full Stack</h2>
                                    <p>Currently earning my certification to become the best full stack developer you will ever meet.</p>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                  <div className="service-box animated fadeInup">
                                    <i className="fa fa-laptop" />
                                    <h2>Design</h2>
                                    <p>Experienced in Adobe Photoshop and Illustrator. Fluent in HTML, CSS, and Bootstrap.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="about-content">
                              <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                  <div className="service-box animated fadeInup">
                                    <i className="fa fa-desktop" />
                                    <h2>Projects</h2>
                                    <p>Am great at working in teams and collaborating together to get assignments completed and develop each others knowledge.</p>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                  <div className="service-box animated fadeInup">
                                    <i className="fa fa-gamepad" />
                                    <h2>Games</h2>
                                    <p>Creating simply yet stylish games that express the inner nerd inside me. With themes like Doctor Who, Final Fantasy, and Memes.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Services End */}
                      </div>
                    </div>
                  </div>
                  {/* Right side End */}
                </div>
                {/* Right Hand Side Section End */}
              </div>
            </div>
          </div>
        </section>
        {/* Navigation */}
        {/* ********** */}
        <div className="overlay overlay-me">
          {/* Navigation Buttons */}
          <div className="navbar-btn-info">Click on below buttons to know more!</div>
          <nav className="navbar-btn">
            <ul>
              <li className="menu-btn" data-menu={1}><a className="menu"><i className="fa fa-user" />ABOUT ME</a></li>
              <li className="menu-btn" data-menu={3}><a className="menu"><i className="fa fa-cog" />SKILLS</a></li>
              <li className="menu-btn" data-menu={2}><a className="menu"><i className="fa fa-envelope" />CONTACT</a></li>
            </ul>
          </nav>
        </div>
        {/* Navigation End */}
        {/* jQuery */}
      </div>,
	document.getElementById('website')
)