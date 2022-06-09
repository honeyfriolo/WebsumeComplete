@import url('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js')
@import url('@./assets/js/main.js')
<template>
    
<!-- header section starts  -->

<header>

    <div class="user">
        <img src="@/assets/images/profile.png" alt="">
        <h3 class="name">Honey Grace Friolo</h3>
    </div>

    <nav class="navbar" id="navbar">
        <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#gallery">GALLERY</a></li>
            <li><a href="#contact">CONTACT</a></li>
        </ul>
    </nav>

</header>

<!-- header section ends -->

<div id="menu" class="fas fa-bars"></div>

<!-- home section starts  -->

<section class="home" id="home">

    <h3>I am </h3>
    <h3>your future </h3>
    <h1><span>Web Developer</span></h1>
    <p>Preparing myself to enhance, hone and develop in coding.<br> Love coding!
    </p>
   
    <img src="@/assets/images/cover.png" alt="">
</section>

<!-- home section ends -->

<!-- about section starts  -->

<section class="about" id="about">

<h1 class="heading"> <span>About</span> Me </h1>

<div class="row">

    <div class="info">
       <h3>I am Honey Grace  Friolo, 21 years of age. I reside at Dalapang Ozamiz City, the city where the cutest person on earth lived. And that is me. I am currently studying at La Salle University which is located at La Salle St., Barangay Aguada, Ozamiz City. A third year college student taking up a course of Bachelor of Science in Information Technology. 
    <br> <br>
 I am a type of person which you don’t like, and likewise. I spend quality time to the people I loved. You might see me as an intimidating person at first sight, but when you get to know me. Your first impression will difinitely changed. 
    </h3> 
    
    </div>

</div>

</section>

<!-- about section ends -->

<!-- skills section starts  -->

<section class="skills" id="skills">

<h1 class="heading"> My <span>Skills</span> </h1>

<p>HTML</p>
<div class="container">
  <div class="skill html">75%</div>
</div>

<p>CSS</p>
<div class="container">
  <div class="skill css">50%</div>
</div>

<p>JavaScript</p>
<div class="container">
  <div class="skill js">25%</div>
</div>

<p>PHP</p>
<div class="container">
  <div class="skill php">5%</div>
</div>

</section>

<!-- skills section ends -->

<!-- gallery section starts  -->

<section class="gallery" id="gallery">

<h1 class="heading"> My <span>Gallery</span> </h1>

<div class="slideshow-container">

    <div class="mySlides fade">
      <div class="numbertext">1 / 3</div>
      <img src="images/dancing.jpg" style="width:100%">
      
    </div>
    
    <div class="mySlides fade">
      <div class="numbertext">2 / 3</div>
      <img src="images/pic1.jpg" style="width:100%">
      
    </div>
    
    <div class="mySlides fade">
      <div class="numbertext">3 / 3</div>
      <img src="images/pic2.jpg" style="width:100%">
      
    </div>
    
    <div class="mySlides fade">
      <div class="numbertext">4 / 4</div>
      <img src="images/pic4.jpg" style="width:100%">
      
    </div>

    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
    
    </div>
    <br>
    
    <div style="text-align:center">
      <span class="dot" onclick="currentSlide(1)"></span> 
      <span class="dot" onclick="currentSlide(2)"></span> 
      <span class="dot" onclick="currentSlide(3)"></span> 
      <span class="dot" onclick="currentSlide(4)"></span>
    </div>
    

</section>

<!-- gallery section ends -->

<!-- contact section starts  -->

<section class="contact" id="contact">

<h1 class="heading"> My <span>Contacts</span></h1>

<div class="row">

    <div class="content">

        <h3 class="title">GET IN TOUCH</h3>

        <div class="info">
            <h3> <i class="fab fa-facebook-f"></i>  Grace Friolo </h3>
            <h3> <i class="fab fa-instagram"></i> @honeyfriolo_31 </h3>
            <h3> <i class="fa fa-envelope" aria-hidden="true"></i> honey.friolo@lsu.edu.ph </h3>
        </div>

    </div>

    <form action="">

        <input type="text" placeholder="Name" class="box">
        <input type="email" placeholder="Email" class="box">
        <textarea name="" id="" cols="30" rows="10" class="box message" placeholder="Write a comment"></textarea>
        <button type="submit" class="btn"> send <i class="fas fa-paper-plane"></i> </button>

    </form>

</div>

</section>

<!-- contact section ends -->


<!-- scroll top button  -->

<a href="#home" class="top">
    <img src="images/scroll-top-img.png" alt="">
</a>

</template>

<script>
import "./assets/css/styles.css" 

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
