import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Panamá Payroll Management</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap-grid.min.css" integrity="sha512-QTQigm89ZvHzwoJ/NgJPghQPegLIwnXuOXWEdAjjOvpE9uaBGeI05+auj0RjYVr86gtMaBJRKi8hWZVsrVe/Ug==" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/fontawesome.min.css" integrity="sha512-kJ30H6g4NGhWopgdseRb8wTsyllFUYIx3hiUwmGAkgA9B/JbzUBDQVr2VVlWGde6sdBVOG7oU8AL35ORDuMm8g==" crossOrigin="anonymous" />

        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/popper.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/owl.carousel.min.js"></script>
        <script type="text/javascript" src="js/jquery.counterup.min.js"></script>
        <script type="text/javascript" src="js/waypoints.min.js"></script>
        <script type="text/javascript" src="js/jquery.colorbox.js"></script>
        <script type="text/javascript" src="js/smoothscroll.js"></script>
        <script type="text/javascript" src="//maps.googleapis.com/maps/api/js?key=AIzaSyCsa2Mi2HqyEcEnM1urFSIGEpvualYjwwM"></script>
        <script type="text/javascript" src="js/gmap3.js"></script>
        {/* <script src="http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.2/raphael-min.js"></script> */}
        <script type="text/javascript" src="js/morris.js"></script>
        <script type="text/javascript" src="js/custom.js"></script>

      </Head>

      <body>

        <div className="body-inner">

          <div className="site-top">
              <div className="topbar-transparent" id="top-bar">
                <div className="container">
                    <div className="row">
                      <div className="col-lg-9 col-md-9 col-sm-12">
                          <ul className="top-info">
                            <li><span className="info-icon"><i className="icon icon-phone3"></i></span>
                                <div className="info-wrapper">
                                  <p className="info-title">(+9) 847-291-4353</p>
                                </div>
                            </li>
                            <li><span className="info-icon"><i className="icon icon-envelope"></i></span>
                                <div className="info-wrapper">
                                  <p className="info-title">mail@example.com</p>
                                </div>
                            </li>
                            <li className="last"><span className="info-icon"><i className="icon icon-map-marker2"></i></span>
                                <div className="info-wrapper">
                                  <p className="info-title">1010 Avenue, NY, USA</p>
                                </div>
                            </li>
                          </ul>
                          {/* <!-- Ul end--> */}
                      </div>
                      {/* <!--Top info end--> */}
                      <div className="col-lg-3 col-md-3 col-sm-12 text-lg-right text-md-center">
                          <ul className="top-social">
                            <li>
                                <a title="Facebook" href="#">
                            <span className="social-icon"><i className="fa fa-facebook"></i></span>
                          </a>
                                <a title="Twitter" href="#">
                            <span className="social-icon"><i className="fa fa-twitter"></i></span>
                          </a>
                                <a title="Google+" href="#">
                            <span className="social-icon"><i className="fa fa-google-plus"></i></span>
                          </a>
                                <a title="Linkdin" href="#">
                            <span className="social-icon"><i className="fa fa-linkedin"></i></span>
                          </a>
                                <a title="Skype" href="#">
                            <span className="social-icon"><i className="fa fa-instagram"></i></span>
                          </a>
                            </li>
                            {/* <!-- List End --> */}
                          </ul>
                          {/* <!-- Top Social End --> */}
                      </div>
                      {/* <!--Col end--> */}
                    </div>
                    {/* <!--Content row end--> */}
                </div>
                {/* <!--Container end--> */}
              </div>
              {/* <!--Top bar end--> */}

              <header className="header-trans-leftbox" id="header">
                <div className="container">
                    <div className="header-wrapper clearfix">
                      <div className="site-nav-inner">
                          <nav className="navbar navbar-expand-lg">
                            <div className="navbar-brand navbar-header">
                                <div className="logo">
                                  <a href="index.html">
                                      <img src="images/logo.png" alt="" />
                                  </a>
                                </div>
                                {/* <!-- logo end--> */}
                            </div>
                            {/* <!-- Navbar brand end--> */}
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"><i className="icon icon-menu"></i></span></button>
                            {/* <!-- End of Navbar toggler--> */}
                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                  <li className="nav-item dropdown active">
                                      <a className="nav-link" href="#" data-toggle="dropdown">Home<i className="fa fa-angle-down"></i></a>
                                      <ul className="dropdown-menu" role="menu">
                                        <li className="active"><a href="index.html">Home One</a></li>
                                        <li><a href="index-2.html">Home Two</a></li>
                                        <li><a href="index-3.html">Home Three</a></li>
                                        <li><a href="index-4.html">Home Four</a></li>
                                        <li><a href="index-5.html">Home Five</a></li>
                                        <li><a href="index-6.html">Home Six</a></li>
                                        <li><a href="index-7.html">Home Seven</a></li>
                                        <li><a href="index-8.html">Home Eight</a></li>
                                        <li><a href="index-9.html">Home Nine</a></li>
                                      </ul>
                                  </li>
                                  {/* <!-- Home li end--> */}
                                  <li className="nav-item dropdown"><a className="nav-link" href="#" data-toggle="dropdown">Pages<i className="fa fa-angle-down"></i></a>
                                      <ul className="dropdown-menu" role="menu">
                                        <li><a href="about-1.html">About Us 1</a></li>
                                        <li><a href="about-2.html">About Us 2</a></li>
                                        <li><a href="team.html">Our Team</a></li>
                                        <li><a href="case.html">Case All</a></li>
                                        <li><a href="case-single.html">Case Single</a></li>
                                        <li><a href="testimonial.html">Testimonial</a></li>
                                        <li><a href="career.html">Career</a></li>
                                        <li><a href="pricing-table.html">Pricing Table</a></li>
                                        <li><a href="faq.html">Faq</a></li>
                                      </ul>
                                  </li>
                                  {/* <!-- Page li end--> */}
                                  <li className="nav-item dropdown"><a className="nav-link" href="#" data-toggle="dropdown">Our Services<i className="fa fa-angle-down"></i></a>
                                      <ul className="dropdown-menu" role="menu">
                                        <li><a href="service.html">Service All</a></li>
                                        <li><a href="service-single.html">Service Single</a></li>
                                      </ul>
                                  </li>
                                  {/* <!-- Service li end--> */}
                                  <li className="nav-item dropdown"><a className="nav-link" href="#" data-toggle="dropdown">Features<i className="fa fa-angle-down"></i></a>
                                      <ul className="dropdown-menu" role="menu">
                                        <li><a href="addons-1.html">Addons 1</a></li>
                                        <li><a href="addons-2.html">Addons 2</a></li>
                                        <li><a href="addons-3.html">Addons 3</a></li>
                                        <li><a href="404.html">404</a></li>
                                        <li className="dropdown-submenu"><a className="nav-link" href="#" data-toggle="dropdown">Parent Menu</a>
                                            <ul className="dropdown-menu">
                                              <li><a href="#">Child Menu 1</a></li>
                                              <li><a href="#">Child Menu 2</a></li>
                                              <li><a href="#">Child Menu 3</a></li>
                                            </ul>
                                        </li>
                                      </ul>
                                  </li>
                                  {/* <!-- Features li end--> */}
                                  <li className="nav-item dropdown">
                                      <a className="nav-link" href="#" data-toggle="dropdown">
                                  News
                                  <i className="fa fa-angle-down"></i>
                                </a>
                                      <ul className="dropdown-menu" role="menu">
                                        <li><a href="news-left-sidebar.html">News Left Sidebar</a></li>
                                        <li><a href="news-right-sidebar.html">News Right Sidebar</a></li>
                                        <li><a href="news-single.html">News Single</a></li>
                                      </ul>
                                  </li>
                                  {/* <!-- News li end--> */}
                                  <li className="nav-item dropdown">
                                      <a className="nav-link" href="#" data-toggle="dropdown">
                                  Contact
                                  <i className="fa fa-angle-down"></i>
                                </a>
                                      <ul className="dropdown-menu" role="menu">
                                        <li><a href="contact-1.html">Contact 1</a></li>
                                        <li><a href="contact-2.html">Contact 2</a></li>
                                      </ul>
                                  </li>
                                  {/* <!-- Contact li End --> */}
                                </ul>
                                {/* <!--Nav ul end--> */}
                            </div>
                          </nav>
                          {/* <!--Collapse end--> */}
                          <div className="nav-search"><span id="search"><i className="icon icon-search"></i></span></div>
                          {/* <!-- Search end--> */}
                          <div className="search-block" style={{display: "none"}}>
                            <input 
                              className="form-control" 
                              type="text" 
                              placeholder="Search"
                            />
                              <span className="search-close">×</span>
                          </div>
                          {/* <!-- Site search end--> */}
                      </div>
                      {/* <!--Site nav inner end--> */}
                    </div>
                    {/* <!-- Header wrapper end--> */}
                </div>
                {/* <!--Container end--> */}
              </header>
              {/* <!--Header end--> */}
          </div>

          <div className="carousel slide" id="main-slide" data-ride="carousel">
              {/* <!-- Indicators--> */}
              <ol className="carousel-indicators visible-lg visible-md">
                <li className="active" data-target="#main-slide" data-slide-to="0"></li>
                <li data-target="#main-slide" data-slide-to="1"></li>
                <li data-target="#main-slide" data-slide-to="2"></li>
              </ol>
              {/* <!-- Indicators end--> */}
              {/* <!-- Carousel inner--> */}
              <div className="carousel-inner">
                <div className="carousel-item active" style={{backgroundImage: 'url(images/slider/bg1.jpg)'}}>
                    <div className="container">
                      <div className="slider-content text-left">
                          <div className="col-md-12">
                            <h2 className="slide-title title-light">Your future is created by</h2>
                            <h3 className="slide-sub-title">What you do today</h3>
                            <p className="slider-description lead">Nobody’s more committed to connecting you with the exceptional top talents with the right for your business than us.</p>
                            <p><a className="slider btn btn-primary" href="#">Our Services</a><a className="slider btn btn-border" href="#">Contact Us</a></p>
                          </div>
                          {/* <!-- Col end--> */}
                      </div>
                      {/* <!-- Slider content end--> */}
                    </div>
                    {/* <!-- Container end--> */}
                </div>
                {/* <!-- Carousel item 1 end--> */}
                <div className="carousel-item" style={{backgroundImage: 'url(images/slider/bg2.jpg)'}}>
                    <div className="container">
                      <div className="slider-content text-center">
                          <div className="col-md-12">
                            <h3 className="slide-sub-title">We provide solutions to grow your business</h3>
                            <p><a className="slider btn btn-primary" href="#">Our Services</a><a className="slider btn btn-border" href="#">Contact Us</a></p>
                          </div>
                          {/* <!-- Col end--> */}
                      </div>
                      {/* <!-- Slider content end--> */}
                    </div>
                    {/* <!-- Container end--> */}
                </div>
                {/* <!-- Carousel item 1 end--> */}
                <div className="carousel-item" style={{backgroundImage: 'url(images/slider/bg3.jpg)'}}>
                    <div className="container">
                      <div className="slider-content text-right">
                          <div className="col-md-12">
                            <h2 className="slide-title title-light">Your future is created by</h2>
                            <h3 className="slide-sub-title">We care about your Business</h3>
                            <p className="slider-description lead">Nobody’s more committed to connecting you with the exceptional top talents with the right fit
                                for your business than us.</p>
                            <p><a className="slider btn btn-primary" href="#">Our Services</a><a className="slider btn btn-border" href="#">Contact Us</a></p>
                          </div>
                          {/* <!-- Col end--> */}
                      </div>
                      {/* <!-- Slider content end--> */}
                    </div>
                    {/* <!-- Container end--> */}
                </div>
                {/* <!-- Carousel item 1 end--> */}
              </div>
              {/* <!-- Carousel inner end--> */}
              {/* <!-- Controllers--> */}
              <a className="left carousel-control carousel-control-prev" href="#main-slide" data-slide="prev"><span><i className="fa fa-angle-left"></i></span></a>
              <a className="right carousel-control carousel-control-next" href="#main-slide" data-slide="next"><span><i className="fa fa-angle-right"></i></span></a>
          </div>
          {/* <!-- Carousel end--> */}

          <section className="ts-features no-padding">
              <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 feature-box1" style={{backgroundImage: 'url(images/features/feature1.jpg)'}}>
                      <div className="ts-feature text-center">
                          <div className="ts-feature-info"><i className="icon icon-consut2"></i>
                            <h3 className="ts-feature-title">Best Consulting</h3>
                            <p>Mutual funds pool money from many investors to purchase broad range of investments, such as stocks.
                                You have ideas, goals, and dreams.</p>
                          </div>
                      </div>
                      {/* <!-- feature 1 end--> */}
                    </div>
                    {/* <!-- Col end--> */}
                    <div className="col-lg-4 feature-box2" style={{backgroundImage: 'url(images/features/feature2.jpg)'}}>
                      <div className="ts-feature text-center">
                          <div className="ts-feature-info"><i className="icon icon-chart2"></i>
                            <h3 className="ts-feature-title">Marketing growth</h3>
                            <p>Mutual funds pool money from many investors to purchase broad range of investments, such as stocks.
                                You have ideas, goals, and dreams.</p>
                          </div>
                      </div>
                      {/* <!-- feature 2 end--> */}
                    </div>
                    {/* <!-- Col end--> */}
                    <div className="col-lg-4 feature-box3" style={{backgroundImage: 'url(images/features/feature3.jpg)'}}>
                      <div className="ts-feature text-center">
                          <div className="ts-feature-info"><i className="icon icon-clock3"></i>
                            <h3 className="ts-feature-title">On time services</h3>
                            <p>Mutual funds pool money from many investors to purchase broad range of investments, such as stocks.
                                You have ideas, goals, and dreams.</p>
                          </div>
                      </div>
                      {/* <!-- feature 3 end--> */}
                    </div>
                    {/* <!-- Col end--> */}
                </div>
                {/* <!-- Row end--> */}
              </div>
              {/* <!-- Container end--> */}
          </section>

          <section className="ts-services bg-pattern-2" id="ts-services">
              <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                      <h2 className="section-title"><span>Our Services</span>What We Do</h2>
                    </div>
                </div>
                {/* <!-- Title row end--> */}
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                      <div className="ts-service-box">
                          <div className="ts-service-image-wrapper">
                            <img className="img-fluid" src="images/services/service1.jpg" alt="" />
                          </div>
                          <div className="ts-service-content">
                            <span className="ts-service-icon">
                                <i className="icon icon-pie-chart2"></i>
                            </span>
                            <h3 className="service-title">Financial Planning</h3>
                            <p>Mutual funds pool money from many investors to purchase broad range of investments, forward thinking
                                tea such as stocks.</p>
                            <p><a className="link-more" href="#">Read More <i className="icon icon-right-arrow2"></i></a></p>
                          </div>
                      </div>
                      {/* <!-- Service1 end--> */}
                    </div>
                    {/* <!-- Col 1 end--> */}
                    <div className="col-lg-4 col-md-12">
                      <div className="ts-service-box">
                          <div className="ts-service-image-wrapper">
                            <img className="img-fluid" src="images/services/service2.jpg" alt="" />
                          </div>
                          <div className="ts-service-content">
                            <span className="ts-service-icon">
                                <i className="icon icon-tax"></i>
                            </span>
                            <h3 className="service-title">Tax Planning</h3>
                            <p>Mutual funds pool money from many investors to purchase broad range of investments, forward thinking
                                tea such as stocks.</p>
                            <p><a className="link-more" href="#">Read More <i className="icon icon-right-arrow2"></i></a></p>
                          </div>
                      </div>
                      {/* <!-- Service2 end--> */}
                    </div>
                    {/* <!-- Col 2 end--> */}
                    <div className="col-lg-4 col-md-12">
                      <div className="ts-service-box">
                          <div className="ts-service-image-wrapper">
                            <img className="img-fluid" src="images/services/service3.jpg" alt="" />
                          </div>
                          <div className="ts-service-content">
                            <span className="ts-service-icon">
                                <i className="icon icon-savings"></i>
                            </span>
                            <h3 className="service-title">Saving Strategy</h3>
                            <p>Mutual funds pool money from many investors to purchase broad range of investments, forward thinking
                                tea such as stocks.</p>
                            <p><a className="link-more" href="#">Read More <i className="icon icon-right-arrow2"></i></a></p>
                          </div>
                      </div>
                      {/* <!-- Service3 end--> */}
                    </div>
                    {/* <!-- Col 3 end--> */}
                </div>
                {/* <!-- Content 1 row end--> */}
                <div className="gap-60"></div>
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                      <div className="ts-service-box">
                          <div className="ts-service-image-wrapper">
                            <img className="img-fluid" src="images/services/service4.jpg" alt="" />
                          </div>
                          <div className="ts-service-content">
                            <span className="ts-service-icon">
                                <i className="icon icon-mutual-fund"></i>
                            </span>
                            <h3 className="service-title">Mutual Funds</h3>
                            <p>Mutual funds pool money from many investors to purchase broad range of investments, forward thinking
                                tea such as stocks.</p>
                            <p><a className="link-more" href="#">Read More <i className="icon icon-right-arrow2"></i></a></p>
                          </div>
                      </div>
                      {/* <!-- Service4 end--> */}
                    </div>
                    {/* <!-- Col 4 end--> */}
                    <div className="col-lg-4 col-md-12">
                      <div className="ts-service-box">
                          <div className="ts-service-image-wrapper">
                            <img className="img-fluid" src="images/services/service5.jpg" alt="" />
                          </div>
                          <div className="ts-service-content">
                            <span className="ts-service-icon">
                                <i className="icon icon-loan"></i>
                            </span>
                            <h3 className="service-title">Business Loan</h3>
                            <p>Mutual funds pool money from many investors to purchase broad range of investments, forward thinking
                                tea such as stocks.</p>
                            <p><a className="link-more" href="#">Read More <i className="icon icon-right-arrow2"></i></a></p>
                          </div>
                      </div>
                      {/* <!-- Service5 end--> */}
                    </div>
                    {/* <!-- Col 5 end--> */}
                    <div className="col-lg-4 col-md-12">
                      <div className="ts-service-box">
                          <div className="ts-service-image-wrapper">
                            <img className="img-fluid" src="images/services/service6.jpg" alt="" />
                          </div>
                          <div className="ts-service-content">
                            <span className="ts-service-icon">
                                <i className="icon icon-consult"></i>
                            </span>
                            <h3 className="service-title">Insurance Consulting</h3>
                            <p>Mutual funds pool money from many investors to purchase broad range of investments, forward thinking
                                tea such as stocks.</p>
                            <p><a className="link-more" href="#">Read More <i className="icon icon-right-arrow2"></i></a></p>
                          </div>
                      </div>
                      {/* <!-- Service6 end--> */}
                    </div>
                    {/* <!-- Col 6 end--> */}
                </div>
                {/* <!-- Content Row 2 end--> */}
              </div>
              {/* <!-- Container end--> */}
          </section>

          <section className="ts-facts-area solid-bg no-padding" id="ts-facts-area">
              <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="intro-video">
                          <img className="img-fluid" src="images/intro-video.jpg" alt="" />
                          <a className="popup" href="https://www.youtube.com/embed/XhveHKJWnOQ?autoplay=1&amp;loop=1">
                            <div className="video-icon"><i className="icon icon-play"></i></div>
                          </a>
                      </div>
                      {/* <!-- Intro video end--> */}
                    </div>
                    {/* <!-- Col end--> */}
                    <div className="col-lg-6 col-md-12 ts-padding text-lg-left text-center">
                      <h2 className="column-title">25 Years of Experience</h2>
                      <p className="intro-desc">We are rethoric question ran over her cheek When she reached the first hills of the Italic Mountains.</p>
                      <div className="gap-20"></div>
                      <div className="row facts-wrapper text-center">
                          <div className="col-md-6">
                            <div className="ts-facts"><span className="facts-icon"><i className="icon icon-chart2"></i></span>
                                <div className="ts-facts-content">
                                  <h4 className="ts-facts-num"><span className="counterUp">85</span></h4>
                                  <p className="facts-desc">Business Growth %</p>
                                </div>
                            </div>
                            {/* <!-- Facts end--> */}
                          </div>
                          {/* <!-- Col 1 end--> */}
                          <div className="col-md-6">
                            <div className="ts-facts"><span className="facts-icon"><i className="icon icon-invest"></i></span>
                                <div className="ts-facts-content">
                                  <h4 className="ts-facts-num"><span className="counterUp">467</span></h4>
                                  <p className="facts-desc">Successful Investment</p>
                                </div>
                            </div>
                            {/* <!-- Facts end--> */}
                          </div>
                          {/* <!-- Col 1 end--> */}
                      </div>
                      {/* <!--Row End --> */}
                      <div className="gap-30"></div>
                      <div className="row facts-wrapper text-center">
                          <div className="col-md-6">
                            <div className="ts-facts facts-col"><span className="facts-icon"><i className="icon icon-money-1"></i></span>
                                <div className="ts-facts-content">
                                  <h4 className="ts-facts-num"><span className="counterUp">2435</span></h4>
                                  <p className="facts-desc">Cases Completed</p>
                                </div>
                            </div>
                            {/* <!-- Facts end--> */}
                          </div>
                          {/* <!-- Col 1 end--> */}
                          <div className="col-md-6">
                            <div className="ts-facts"><span className="facts-icon"><i className="icon icon-deal"></i></span>
                                <div className="ts-facts-content">
                                  <h4 className="ts-facts-num"><span className="counterUp">139</span></h4>
                                  <p className="facts-desc">Running Projects</p>
                                </div>
                            </div>
                            {/* <!-- Facts end--> */}
                          </div>
                          {/* <!-- Col 1 end--> */}
                      </div>
                      {/* <!-- Row End --> */}
                    </div>
                    {/* <!-- Content Row 2 end--> */}
                </div>
                {/* <!-- Col end--> */}
              </div>
              {/* <!-- Container end--> */}
          </section>
          {/* <!-- Fun fact end--> */}

          <section className="ts-featured-cases">
              <div className="container">
                <div className="section-title-vertical">
                    <h2 className="section-title">Featured Cases</h2>
                </div>
                {/* <!-- Title row end--> */}
                <div className="row">
                    <div className="owl-carousel owl-theme featured-cases-slide" id="featured-cases-slide">
                      <div className="item">
                          <div className="featured-projects-content">
                            <div className="featured-projects-text float-left">
                                <h2 className="column-title"><span>Marketing Growth</span> Modern Woodman Ltd.</h2>
                                <p className="intro-desc">A business strategy is the means by which it sets out to achieve its desired ends. You have ideas,
                                  goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like
                                  you and make your dream come true.</p>
                                <p><a className="btn btn-primary" href="#"> Read More</a></p>
                            </div>
                            <div className="features-slider-img float-right">
                                <img className="img-fluid" src="images/slider-small/featured-slider1.jpg" alt="" />
                            </div>
                          </div>
                      </div>
                      {/* <!-- Item 1 end--> */}
                      <div className="item">
                          <div className="featured-projects-content">
                            <div className="featured-projects-text pull-left">
                                <h2 className="column-title"><span>Tax Planning</span>Alpha Century Software Inc.</h2>
                                <p className="intro-desc">A business strategy is the means by which it sets out to achieve its desired ends. You have ideas,
                                  goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like
                                  you and make your dream come true.</p>
                                <p><a className="btn btn-primary" href="#"> Read More</a></p>
                            </div>
                            <div className="features-slider-img pull-right">
                                <img src="images/slider-small/featured-slider2.jpg" alt="" />
                            </div>
                          </div>
                      </div>
                      {/* <!-- Item 2 end--> */}
                      <div className="item">
                          <div className="featured-projects-content">
                            <div className="featured-projects-text float-left">
                                <h2 className="column-title"><span>Business Loan</span>Spider Microsystem</h2>
                                <p className="intro-desc">A business strategy is the means by which it sets out to achieve its desired ends. You have ideas,
                                  goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like
                                  you and make your dream come true.</p>
                                <p><a className="btn btn-primary" href="#"> Read More</a></p>
                            </div>
                            <div className="features-slider-img float-right" >
                                <img className="img-fluid" src="images/slider-small/featured-slider3.jpg" alt="" />
                            </div>
                          </div>
                      </div>
                      {/* <!-- Item 3 end--> */}
                    </div>
                    {/* <!-- Featured Projects slider end--> */}
                </div>
                {/* <!-- Content row end--> */}
              </div>
              {/* <!-- Container end--> */}
          </section>
          {/* <!-- Featured projects end--> */}

          <section className="bg-overlay ts-chart">
              <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                      <h2 className="column-title title-white"><span>Integrity</span> Thinking of Building</h2>
                      <p className="intro-desc">We are rethoric question ran over her cheek When she reached the first hills of the Italic Mountains, she
                          had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village
                          and the subline of her own road, the Line Lane.</p>
                      <p><a className="link-more color" href="#">Explore All Cases <i className="fa fa-long-arrow-right"></i></a></p>
                    </div>
                    {/* <!-- col end--> */}
                    <div className="col-lg-7 col-md-12">
                      <div id="graph"></div>
                    </div>
                    {/* <!-- Col end--> */}
                </div>
                {/* <!-- Content row end--> */}
              </div>
              {/* <!-- Container end--> */}
          </section>
          {/* <!-- Section chart end--> */}

          <section className="ts-team">
              <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                      <h2 className="section-title"><span>Our People</span>Best Team</h2>
                    </div>
                </div>
                {/* <!-- Title row end--> */}
                <div className="row">
                    <div className="col-lg-3 col-md-12">
                      <div className="ts-team-wrapper">
                          <div className="team-img-wrapper">
                            <img className="img-fluid" alt="" src="images/team/team1.jpg" />
                          </div>
                          <div className="ts-team-content">
                            <h3 className="team-name">Denise Brewer</h3>
                            <p className="team-designation">Senior Project Manager</p>
                          </div>
                          {/* <!-- Team content end--> */}
                          <div className="team-social-icons"><a target="_blank" href="#"><i className="fa fa-facebook"></i></a><a target="_blank" href="#"><i className="fa fa-twitter"></i></a>
                            <a target="_blank" href="#"><i className="fa fa-google-plus"></i></a><a target="_blank" href="#"><i className="fa fa-linkedin"></i></a></div>
                          {/* <!-- social-icons--> */}
                      </div>
                      {/* <!-- Team wrapper 1 end--> */}
                    </div>
                    {/* <!-- Col end--> */}
                    <div className="col-lg-3 col-md-12">
                      <div className="ts-team-wrapper">
                          <div className="team-img-wrapper">
                            <img className="img-fluid" alt="" src="images/team/team2.jpg" />
                          </div>
                          <div className="ts-team-content">
                            <h3 className="team-name">Patrick Ryan</h3>
                            <p className="team-designation">Senior Project Manager</p>
                          </div>
                          {/* <!-- Team content end--> */}
                          <div className="team-social-icons"><a target="_blank" href="#"><i className="fa fa-facebook"></i></a><a target="_blank" href="#"><i className="fa fa-twitter"></i></a>
                            <a target="_blank" href="#"><i className="fa fa-google-plus"></i></a><a target="_blank" href="#"><i className="fa fa-linkedin"></i></a></div>
                          {/* <!-- social-icons--> */}
                      </div>
                      {/* <!-- Team wrapper 1 end--> */}
                    </div>
                    {/* <!-- Col end--> */}
                    <div className="col-lg-3 col-md-12">
                      <div className="ts-team-wrapper">
                          <div className="team-img-wrapper">
                            <img className="img-fluid" alt="" src="images/team/team3.jpg" />
                          </div>
                          <div className="ts-team-content">
                            <h3 className="team-name">Craig Robinson</h3>
                            <p className="team-designation">Senior Project Manager</p>
                          </div>
                          {/* <!-- Team content end--> */}
                          <div className="team-social-icons"><a target="_blank" href="#"><i className="fa fa-facebook"></i></a><a target="_blank" href="#"><i className="fa fa-twitter"></i></a>
                            <a target="_blank" href="#"><i className="fa fa-google-plus"></i></a><a target="_blank" href="#"><i className="fa fa-linkedin"></i></a></div>
                          {/* <!-- social-icons--> */}
                      </div>
                      {/* <!-- Team wrapper 1 end--> */}
                    </div>
                    {/* <!-- Col end--> */}
                    <div className="col-lg-3 col-md-12">
                      <div className="ts-team-wrapper">
                          <div className="team-img-wrapper">
                            <img className="img-fluid" alt="" src="images/team/team4.jpg" />
                          </div>
                          <div className="ts-team-content">
                            <h3 className="team-name">Andrew Robinson</h3>
                            <p className="team-designation">Senior Project Manager</p>
                          </div>
                          {/* <!-- Team content end--> */}
                          <div className="team-social-icons"><a target="_blank" href="#"><i className="fa fa-facebook"></i></a><a target="_blank" href="#"><i className="fa fa-twitter"></i></a>
                            <a target="_blank" href="#"><i className="fa fa-google-plus"></i></a><a target="_blank" href="#"><i className="fa fa-linkedin"></i></a></div>
                          {/* <!-- social-icons--> */}
                      </div>
                      {/* <!-- Team wrapper 1 end--> */}
                    </div>
                    {/* <!-- Col end--> */}
                </div>
                {/* <!-- Content row end--> */}
              </div>
              {/* <!-- Container end--> */}
          </section>
          {/* <!-- Section Team end--> */}

          <section className="quote-area bg-overlay overlay-color" id="quote-area">
              <div className="container">
                <div className="row">
                    <div className="col-lg-6 qutoe-form-inner-left">
                      <div className="quote_form">
                          <h2 className="column-title title-white"><span>We are always ready</span> Request a call back</h2>
                          <form className="contact-form" id="contact-form" action="call-back.php" method="POST">
                            <div className="error-container"></div>
                            <div className="row">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                      <input className="form-control form-name" id="name" name="name" placeholder="Full Name" required="" />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                      <input className="form-control form-email" type="email" id="email" name="email" placeholder="Email Address" required="" />
                                  </div>
                                </div>
                            </div>
                            {/* <!-- Row 1 end--> */}
                            <div className="row">
                                <div className="col-lg-12">
                                  <div className="form-group">
                                      <input className="form-control form-subject" id="subject" name="subject" type="text" placeholder="Subject" required="" />
                                  </div>
                                </div>
                            </div>
                            {/* <!-- Row end--> */}
                            <div className="row">
                                <div className="col-lg-12">
                                  <div className="form-group">
                                      <textarea className="form-control form-message" placeholder="Message" rows="6" name="message" required=""></textarea>
                                  </div>
                                </div>
                            </div>
                            {/* <!-- Row end--> */}
                            <div className="form-group text-right mb-0">
                                <input className="button btn btn-primary" type="submit" value="Send Message" />
                            </div>
                          </form>
                      </div>
                      {/* <!-- Quote form end--> */}
                    </div>
                    {/* <!-- Col end--> */}
                    <div className="col-lg-6 align-self-center">
                      <div className="owl-carousel owl-theme testimonial-slide owl-dark" id="testimonial-slide">
                          <div className="item">
                            <div className="quote-item quote-square"><span className="quote-text">The Bizipress loan has been  the most attractive loan products on the market, helping numerous businesses gain access to financing they would not be able to obtain conventionally and at extremely favorable rates and terms.</span>
                                <div className="quote-item-footer">
                                  <img className="testimonial-thumb" src="images/clients/testimonial1.png" alt="testimonial" />
                                  <div className="quote-item-info">
                                      <p className="quote-author">Gabriel Denis</p><span className="quote-subtext">Chairman, OKT</span>
                                  </div>
                                </div>
                            </div>
                            {/* <!-- Quote item end--> */}
                          </div>
                          {/* <!-- Item 1 end--> */}
                          <div className="item">
                            <div className="quote-item quote-square"><span className="quote-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci done idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitoa tion ullamco laboris nisi aliquip consequat.</span>
                                <div className="quote-item-footer">
                                  <img className="testimonial-thumb" src="images/clients/testimonial2.png" alt="testimonial" />
                                  <div className="quote-item-info">
                                      <h3 className="quote-author">Weldon Cash</h3><span className="quote-subtext">CFO, First Choice</span>
                                  </div>
                                </div>
                            </div>
                            {/* <!-- Quote item end--> */}
                          </div>
                          {/* <!-- Item 2 end--> */}
                          <div className="item">
                            <div className="quote-item quote-square"><span className="quote-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci done idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitoa tion ullamco laboris nisi ut commodo consequat.</span>
                                <div className="quote-item-footer">
                                  <img className="testimonial-thumb" src="images/clients/testimonial3.png" alt="testimonial" />
                                  <div className="quote-item-info">
                                      <h3 className="quote-author">Minter Puchan</h3><span className="quote-subtext">Director, AKT</span>
                                  </div>
                                </div>
                            </div>
                            {/* <!-- Quote item end--> */}
                          </div>
                          {/* <!-- Item 3 end--> */}
                      </div>
                      {/* <!-- Testimonial carousel end--> */}
                    </div>
                    {/* <!-- Col end--> */}
                </div>
                {/* <!-- Content row end--> */}
              </div>
              {/* <!-- Container end--> */}
          </section>
          {/* <!-- Quote area end--> */}

          <section className="news" id="news">
              <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                      <h2 className="section-title"><span>Don't Miss</span>Our Latest News</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                      <div className="latest-post post-large">
                          <div className="latest-post-media">
                            <a className="latest-post-img" href="#">
                                <img className="img-fluid" src="images/news/news1.jpg" alt="img" />
                            </a><a className="post-cat" href="#">News</a>
                            <div className="post-body"><span className="post-item-date">20 Nov, 2017</span>
                                <h4 className="post-title"><a href="#">Apple reveals its new Melbourne flagship store</a></h4><a className="btn btn-primary"
                                  href="#">Read More</a>
                            </div>
                            {/* <!-- Post body end--> */}
                          </div>
                          {/* <!-- Post media end--> */}
                      </div>
                      {/* <!-- Latest post end--> */}
                    </div>
                    {/* <!-- Col big news end--> */}
                    <div className="col-lg-6">
                      <div className="row">
                          <div className="col-lg-6">
                            <div className="latest-post">
                                <div className="post-body"><a className="post-cat" href="#">News</a>
                                  <h4 className="post-title"><a href="#">Bitcoin is the gag gift you should buy this holiday season</a></h4><span className="post-item-date">20 Nov, 2017</span>
                                  <div className="post-text">
                                      <p>Earlier this year, the firm announced it had reached its goal of hiring.</p>
                                      <div className="text-right"><a href="#">Read More <i className="fa fa-long-arrow-right"> </i></a></div>
                                  </div>
                                </div>
                            </div>
                            {/* <!-- Latest post end--> */}
                          </div>
                          {/* <!-- Col end--> */}
                          <div className="col-lg-6">
                            <div className="latest-post">
                                <div className="post-body"><a className="post-cat" href="#">News</a>
                                  <h4 className="post-title"><a href="#">Uber is selling off its auto-leasing business</a></h4><span className="post-item-date">20 Nov, 2017</span>
                                  <div className="post-text">
                                      <p>Earlier this year, the firm announced it had reached its goal of hiring.</p>
                                      <div className="text-right"><a href="#">Read More <i className="fa fa-long-arrow-right"> </i></a></div>
                                  </div>
                                </div>
                            </div>
                            {/* <!-- Latest post end--> */}
                          </div>
                          {/* <!-- Col end--> */}
                      </div>
                      {/* <!-- row end--> */}
                    </div>
                    {/* <!-- Col small news end--> */}
                </div>
                {/* <!-- Content row end--> */}
              </div>
              {/* <!-- Container end--> */}
          </section>
          {/* <!-- News end--> */}

          <section className="clients-area" id="clients-area">
              <div className="container">
                <div className="row">
                    <div className="col-sm-12 owl-carousel owl-theme text-center partners" id="partners-carousel">
                      <figure className="item partner-logo">
                          <a href="#">
                            <img className="img-fluid" src="images/clients/client1.png" alt="" />
                          </a>
                      </figure>
                      <figure className="item partner-logo">
                          <a href="#">
                            <img className="img-fluid" src="images/clients/client2.png" alt="" />
                          </a>
                      </figure>
                      <figure className="item partner-logo">
                          <a href="#">
                            <img className="img-fluid" src="images/clients/client3.png" alt="" />
                          </a>
                      </figure>
                      <figure className="item partner-logo">
                          <a href="#">
                            <img className="img-fluid" src="images/clients/client4.png" alt="" />
                          </a>
                      </figure>
                      <figure className="item partner-logo">
                          <a href="#">
                            <img className="img-fluid" src="images/clients/client5.png" alt="" />
                          </a>
                      </figure>
                      <figure className="item partner-logo last">
                          <a href="#">
                            <img className="img-fluid" src="images/clients/client6.png" alt="" />
                          </a>
                      </figure>
                      <figure className="item partner-logo last">
                          <a href="#">
                            <img className="img-fluid" src="images/clients/client7.png" alt="" />
                          </a>
                      </figure>
                    </div>
                    {/* <!-- Owl carousel end--> */}
                </div>
                {/* <!-- Content row end--> */}
              </div>
              {/* <!-- Container end--> */}
          </section>
          {/* <!-- Partners end--> */}

          <div className="map" id="map"></div>

          {/* <!-- Footer start--> */}
          <footer className="footer" id="footer">
              <div className="footer-top">
                <div className="container">
                    <div className="footer-top-bg row">
                      <div className="col-lg-4 footer-box"><i className="icon icon-map-marker2"></i>
                          <div className="footer-box-content">
                            <h3>Head Office</h3>
                            <p>1010 Avenue, NY 90001, USA</p>
                          </div>
                      </div>
                      {/* <!-- Box 1 end--> */}
                      <div className="col-lg-4 footer-box"><i className="icon icon-phone3"></i>
                          <div className="footer-box-content">
                            <h3>Call Us</h3>
                            <p>(+87) 847-291-4353</p>
                          </div>
                      </div>
                      {/* <!-- Box 2 end--> */}
                      <div className="col-lg-4 footer-box"><i className="icon icon-envelope"></i>
                          <div className="footer-box-content">
                            <h3>Mail Us</h3>
                            <p>mail@example.com</p>
                          </div>
                      </div>
                      {/* <!-- Box 3 end--> */}
                    </div>
                    {/* <!-- Content row end--> */}
                </div>
                {/* <!-- Container end--> */}
              </div>
              {/* <!-- Footer top end--> */}
              <div className="footer-main bg-overlay">
                <div className="container">
                    <div className="row">
                      <div className="col-lg-4 col-md-12 footer-widget footer-about">
                          <div className="footer-logo">
                            <a href="index.html">
                                <img src="images/footer-logo.png" alt="" />
                            </a>
                          </div>
                          <p>We are a awward winning multinational company. We believe in quality and standard worldwide.</p>
                          <div className="footer-social">
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                          </div>
                          {/* <!-- Footer social end--> */}
                      </div>
                      {/* <!-- About us end--> */}
                      <div className="col-lg-4 col-md-12 footer-widget">
                          <h3 className="widget-title">Useful Links</h3>
                          <ul className="list-dash">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Our Blog</a></li>
                            <li><a href="#">Why Need Agent?</a></li>
                            <li><a href="#">Investments</a></li>
                            <li><a href="#">Consultation</a></li>
                            <li><a href="#">Contact Us</a></li>
                          </ul>
                      </div>
                      <div className="col-lg-4 col-md-12W footer-widget">
                          <h3 className="widget-title">Subscribe</h3>
                          <div className="newsletter-introtext">Don’t miss to subscribe to our new feeds, kindly fill the form below.</div>
                          <form className="newsletter-form" id="newsletter-form" action="#" method="post">
                            <div className="form-group">
                                <input className="form-control form-control-lg" id="newsletter-form-email" type="email" name="email" placeholder="Email Address"
                                autocomplete="off" />
                                <button className="btn btn-primary"><i className="fa fa-paper-plane"></i></button>
                            </div>
                          </form>
                      </div>
                    </div>
                    {/* <!-- Content row end--> */}
                </div>
                {/* <!-- Container end--> */}
              </div>
              {/* <!-- Footer Main--> */}
              <div className="copyright">
                <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                          <div className="copyright-info"><span>Copyright © 2018 BiziPress. All Rights Reserved.</span></div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                          <div className="footer-menu">
                            <ul className="nav unstyled">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Investors</a></li>
                                <li><a href="#">Legals</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                          </div>
                      </div>
                    </div>
                    {/* <!-- Row end--> */}
                </div>
                {/* <!-- Container end--> */}
              </div>
              {/* <!-- Copyright end--> */}
          </footer>
          {/* <!-- Footer end--> */}

          <div className="back-to-top affix" id="back-to-top" data-spy="affix" data-offset-top="10">
              <button className="btn btn-primary" title="Back to Top"><i className="fa fa-angle-double-up"></i>
                {/* <!-- icon end--> */}
              </button>
              {/* <!-- button end--> */}
          </div>
          {/* <!-- End Back to Top--> */}

        </div>

      </body>

    </>
  )
}
