<template>
  <div style="overflow: hidden;">
    <!-- Navbar starts -->
    <b-navbar toggleable="lg" type="dark" variant="faded" fixed="top">
      <b-navbar-brand href="#"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <hr>
          <b-nav-item class="btn-green-nav" href="#">0.About</b-nav-item><hr>
          <b-nav-item class="btn-green-nav" href="#experience">1.Experience</b-nav-item><hr>
          <b-nav-item class="btn-green-nav" href="#">2.Projects</b-nav-item><hr>
          <b-nav-item class="btn-green-nav" href="#">3.Resume</b-nav-item><hr>
          <b-nav-item class="btn-green-nav" href="#">4.Contact</b-nav-item><hr>
        </b-navbar-nav>
      </b-collapse>
      
    </b-navbar>
    <!-- Navbar ends -->
    <b-container>
      <b-row class="firstrow">
        <b-col sm="4" class="color-offwhite">
          <content-placeholders v-show="!isLoaded">
            <content-placeholders-img />
          </content-placeholders>
          <div class="image-div" v-show="isLoaded">
            <img src="../assets/vishal.jpg" @load="onImgLoad" class="vishal-image"/>
          </div>
        </b-col>
        <b-col sm="8">
          <div class="main-text">
            <div class="color-green size-16px">
              Hi, my name is
            </div>
            <div class="color-white font-weight-600 size-40px">
              Vishal Khare.
            </div>
            <div class="color-offwhite line-height-less font-weight-600 size-30px">
              I build things for the web and much more.
            </div>
            
            <div class="color-offwhite line-height-more  size-16px">
              I'm a senior software engineer at The Bank of New York Mellon. Specializing in building (and occasionally designing) exceptional web applications, cloud infrastructure and everything in between.
            </div>
            <div>
              <b-row class="btn-group">
                <b-col>
                  <button class="btn-green">Say Hello</button>
                </b-col>
              </b-row>
              <br>
              <br>
              <b-row>
                <b-col>
                  <img src="../assets/medium.svg" alt="instagram" class="svg-class" v-b-tooltip.hover title="Medium.com"/>
                </b-col>
                <b-col>
                  <img src="../assets/github.svg" alt="github" class="svg-class" v-b-tooltip.hover title="Github.com"/>
                </b-col>
                <b-col>
                  <img src="../assets/linkedin.svg" alt="linkedin" class="svg-class" v-b-tooltip.hover title="Linkedin.com"/>
                </b-col>
                <b-col>
                  <img src="../assets/instagram.svg" alt="instagram" class="svg-class" v-b-tooltip.hover title="Instagram.com"/>
                </b-col>
                <b-col>
                  <img src="../assets/twitter.svg" alt="twitter" class="svg-class" v-b-tooltip.hover title="twitter.com"/>
                </b-col>
                <b-col>
                </b-col>
                <b-col>
                </b-col>
                <b-col>
                </b-col>
                <b-col>
                </b-col>
                <b-col>
                </b-col>
                <b-col>
                </b-col>
                
                
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
      <hr id="about">
      <b-row>
        <b-col sm="3">
          <div class="div-headings">
            0. About Me
          </div>
        </b-col>
        <b-col>
          <div class="color-offwhite size-20px text-padding">
            Hello! I'm Vishal, a senior software engineer at <a target="_blank" href="https://www.bnymellon.com/">The Bank of New York Mellon.</a>
            <br>
            <br>
            I enjoy building things that live on the web. whether that be websites, applications, or anything in between. My goal is to always build products that provide high performant experiences. I am also a cloud enthusiast. GCP and AWS feels like home to me.
            <br>
            <br>
            Shortly after graduating from <a target="_blank" href="http://www.nitjsr.ac.in/">National Institute of Technology, Jamshedpur</a>, I joined the engineering team at <a target="_blank" href="https://www.americanexpress.com/in/">American Express.</a>
            Currently at <a target="_blank" href="https://www.bnymellon.com/">The Bank of New York Mellon</a> I work on wide array of interesting and meaningful projects on a daily basis.
            <br>
            <br>
            Here are few technologies I've been working with recently
            <b-row>
              <b-col>
                <ul class="tech-list">
                  <li>Java, Spring</li>
                  <li>JavaScript, Vue</li>
                  <li>Python, Flask</li>
                  <li>Golang</li>
                  <li>TypeScript, Angular</li>
                </ul>
              </b-col>
              <b-col>
                <ul class="tech-list">
                  <li>AWS, GCP</li>
                  <li>Oracle,Mysql</li>
                  <li>Elasticsearch, Solr, Redis</li>
                  <li>Hadoop, Hive, Apache Ranger</li>
                </ul>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
      <hr id="experience">
      <b-row>
        <b-col sm="4">
          <div class="div-headings">
            1. Where I've worked
          </div>
        </b-col>
        <b-col>
           <section class="timeline">
            <ul>
              <li>
                <span></span>
                <div class="company-name">Bank of New York Mellon</div>
                <div>Senior Application Developer</div>
                <div>American Express</div>
                <div class="year">
                  <span>03/2018</span>
                  <span>04/2018</span>
                </div>
              </li>
              <li>
                <span></span>
                <div class="company-name">American Express</div>
                <div>American Express</div>
                <div>American Express</div>
                 <div class="color-offwhite line-height-more  size-16px">
              I'm a senior software engineer at The Bank of New York Mellon. Specializing in building (and occasionally designing) exceptional web applications, cloud infrastructure and everything in between.
            </div>
                <div class="year">
                  <span>03/2018</span>
                  <span>04/2018</span>
                </div>
              </li>
            </ul>
          </section>
        </b-col>
      </b-row>
      
    
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      isLoaded: false
    }
  },
  methods: {
    onImgLoad () {
      this.isLoaded = true
    }
  }
}
</script>

<style scoped>
.timeline {
  padding: 5px 45px;
}
.timeline ul {
  position: relative;
}
.timeline ul::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
.timeline li {
  position: relative;
  margin: 60px 35px;
  margin-bottom: 5em; 
  width: 100%;
  list-style: none;
  line-height: 25px;
}
.timeline li > span {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  left: -25px;
  height: 110%;
  /* background-color: #fff;
  border: 1px solid #fff; */
  border-style:solid;
  border-color:#fff;
  border-width:2px;
  border-radius: none;
}
.timeline li > span::before, .timeline li > span::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  border: 1px solid#5EF4DA;
  border-style:solid;
  border-color:#fff;
  border-width:2px;
  border-radius: 50%;
  left: -7px;
  background: #5EF4DA;
}
.timeline li > span::before {
  top: -15px;
}
.timeline li > span::after {
  top: 100%;
}
.timeline li div:nth-child(2) {
  font-size: 1.2em;
}
.timeline li div:nth-child(3), .timeline li div:nth-child(4) {
  font-size: 1em;
  font-style: italic;
  color: #5EF4DA;
}
.timeline li .year span {
  position: absolute;
  font-size: 1em;
  top: 10px;
  left: -95px;
  width: 40px;
  text-align: right;
  color: #fff;
  margin-top: 1em;
}
.timeline li .year span:first-child {
  top: -40px;
}
.timeline li .year span:last-child {
  top: 100%;
}
 
a {
  color: #5EF4DA;
  text-decoration: none;
}
a:hover {
  color: #5EF4DA;
  text-decoration: underline;
}
.color-green {
color: #5EF4DA;
font-family: 'JetBrains Mono', monospace;

}
.color-white {
color : #CCD6F6;
font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;

}
.color-offwhite {
  color: #63708B;
  text-align: justify;
  text-justify: inter-word;
}
.line-height-less {
  line-height: 0.9;
}
.line-height-more {
  margin-top: 1em;
}
.font-weight-600 {
  font-weight: 600;
}
.size-16px {
 font-size: 16px;
}
.size-20px {
 font-size: 20px;
}
.size-30px {
 font-size:30px;
}
.size-40px {
 font-size:40px;
}
.description {
  max-width: 30em;
}
.vishal-image {
  max-width: 100%;
}
.container {
  padding: 0px !important;
}
.firstrow {
  margin-top: 3em;
  padding: 2em;
}
.image-div {
  border: 1px solid #5EF4DA;
  margin-bottom: 1em;
}
.navbar {
  background-color: #0A192F !important;
}
.svg-class {
  -webkit-filter: invert(100%); /* safari 6.0 - 9.0 */
          filter: invert(100%);
          width: 30px;
          height: 30px;
}
hr {
  border: 0;
  clear:both;
  display:block;
  width: 96%;               
  background-color:#5EF4DA;
  height: 1px;
}
.image-loader {
  max-width: 100%;
  background-color: #CCD6F6;
}
.btn-group {
  margin-top: 1em;
  width: 100%;
}
.btn-green {
  border: 1px solid #5EF4DA;
  color: #5EF4DA;
  border-radius: 5px;
  background-color: transparent;
  width: fit-content;
  padding-top: 0.7em;
  padding-bottom: 0.7em;
  padding-right: 1.2em;
  padding-left: 1.2em;
}
.btn-green:hover {
  opacity: 0.8;
}
.btn-green-nav {
  font-family: 'JetBrains Mono', monospace;
  padding-left: 1em;
  padding-right: 1em;
}
.btn-green-nav::first-letter {
  color: #5EF4DA;
}
.div-headings {
  color: #fff;
  padding-left: 1.5em;
  font-family: 'JetBrains Mono', monospace;
  font-size: 20px;
  font-weight: 600;

}
.text-padding {
  padding-top: 1em;
  padding-left: 1.5em;
  padding-right: 1em;
}
ul {
  list-style: none;
}
.tech-list li::before {
  content: "\2022";
  color: #5EF4DA;
  font-weight: bold;
  display: inline-block; 
  width: 1em;
  margin-left: -1em;
}
.company-name {
  color: #fff;
}
</style>
