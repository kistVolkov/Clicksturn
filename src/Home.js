import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css";
/*import H5 from './assests/H5.jpg';
import h2 from './assests/h2.jpg';
import a4 from './assests/a4.jpg';*/
import m2 from './assests/m2.png';
import c2 from './assests/C2.jpg';



import Navbar from "./components/Navbar/Navbar";


const Home = () => {
  return (
    <>

<Navbar />
<div class="div-class"></div>



<div class="container col-xxl-8 px-4 py-5">
<div class="row flex-lg-row-reverse align-items-center g-5 py-5 text-light">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={c2} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="700" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3 fs-1">Welcome to <span>Clicksturn</span></h1>
        <p >A dynamic newcomer in the digital marketing sphere, poised to revolutionize industry<br></br> standards with innovative strategies and an unwavering dedication to client satisfaction.</p>

        
      </div>
    </div>
    </div>




<div class="div-class"></div>
<body>

<div class="container marketing">
<div class="row justify-content-center">
  <div class="col-lg-4 text-center">
    <div class="d-flex align-items-center justify-content-center mb-1">
      <p class="circle">Digital marketing</p>
    </div>
    <p class="text-light">Clicksturn specializes in Digital Marketing by leveraging strategic content creation and audience engagement to enhance brand visibility. </p>
    <p><Link class="btn btn-secondary" to="/Marketing">View details »</Link></p>
  </div>
  <div class="col-lg-4 text-center">
    <div class="d-flex align-items-center justify-content-center mb-1">
      <p class="circle">Recruiting</p>
    </div>
    <p class="text-light">Our team comprises seasoned recruitment specialists who understand the nuances of your industry.</p>
    <p><Link class="btn btn-secondary" to="/Recruit">View details »</Link></p>
  </div>
  <div class="col-lg-4 text-center">
    <div class="d-flex align-items-center justify-content-center mb-1">
      <p class="circle">Career services</p>
    </div>
    <p class="text-light">we help you build your career. Our Career Service brings your professional dreams to life, faster and more effectively than ever.</p>
    <p><Link class="btn btn-secondary" to="/Career">View details »</Link></p>
  </div>
</div>
</div>

<div class="bg-secondary p-5 mt-5">
        <div class=" p-5 m-5">
          <div class="italic"><h1>"Empowering Your Growth: Elevate Your Brand, Build Your Team, Transform Careers"</h1></div></div>
      </div>


<div class="container col-xxl-8 px-4 py-5">
<div class="row flex-lg-row-reverse align-items-center g-5 py-5 text-light">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={m2} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h2 class="display-5 fw-bold lh-1 mb-3 text-light fs-3">Clickstrun specializes in Digital Marketing, Recruiting, and Career Services</h2>
        <p class="lead">At Clickstrun, we are dedicated to empowering businesses and individuals through our comprehensive services in Digital Marketing, Recruiting, and Career Services. Our expert team leverages innovative digital strategies to enhance your brand's online presence and drive engagement. We connect businesses with top talent through tailored recruiting solutions, ensuring the right fit for your company’s culture and goals. Additionally, our career services provide individuals with the resources and guidance they need to achieve their professional aspirations. Partner with Clickstrun to unlock your potential and achieve success in today’s competitive landscape.</p>
        
      </div>
    </div>
    </div>






<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-light text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use href="#bootstrap"></use></svg>
      </a>
      <span class="mb-3 mb-md-0 text-light">© 2024 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-body-light" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></a></li>
      <li class="ms-3"><a class="text-body-light" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg></a></li>
      <li class="ms-3"><a class="text-body-light" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg></a></li>
    </ul>
  </footer>
</div>




</body>
    
    </>
  )
}

export default Home
