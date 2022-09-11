<template>
  <div style="overflow: hidden;">
    <!-- Navbar starts -->
    <b-navbar toggleable="lg" type="dark" variant="faded" fixed="top">
      <b-navbar-brand href="#"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          
          <b-nav-item class="btn-green-nav" href="#about">0.About</b-nav-item>
          <b-nav-item class="btn-green-nav" href="#experience">1.Experience</b-nav-item>
          <b-nav-item class="btn-green-nav" href="#patents">2.Patents & Certifications</b-nav-item>
          <b-nav-item class="btn-green-nav" href="#projects">3.Projects</b-nav-item>
          <b-nav-item class="btn-green-nav" href="#contact">4.Contact</b-nav-item>
          <b-nav-item class="btn-green-nav" href="https://s3.ap-south-1.amazonaws.com/vishalkhare.com/docs/resume.pdf" target="_blank" @click="navResume()">5.Resume&nbsp;&nbsp;<b-icon-box-arrow-up-right scale="0.8"></b-icon-box-arrow-up-right></b-nav-item>
          <!-- <b-nav-item class="btn-green-nav" href="#">5.Résumé&nbsp;&nbsp;<b-icon-box-arrow-up-right scale="0.8"></b-icon-box-arrow-up-right></b-nav-item> -->
          <b-nav-item class="btn-green-nav" href="http://iamvishalkhare.medium.com/" target="_blank" @click="navMedium()">6.Blog&nbsp;&nbsp;<b-icon-box-arrow-up-right scale="0.8"></b-icon-box-arrow-up-right></b-nav-item>
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
              I'm a Software Development Engineer - III at TATA 1mg. Specializing in building (and occasionally designing) exceptional web applications, cloud infrastructure and everything in between
            </div>
            <div>
              <b-row class="btn-group">
                <b-col>
                  <a href="#contact"><button class="btn-green">Say Hello</button></a>
                </b-col>
              </b-row>
              <br>
              <br>
              <b-row>
                <b-col>
                  <a href="http://iamvishalkhare.medium.com/" target="_blank" @click="navMedium()"><img src="../assets/medium.svg" alt="instagram" class="svg-class" v-b-tooltip.hover title="Medium.com" /></a>
                </b-col>
                <b-col>
                  <a href="https://github.com/iamvishalkhare" target="_blank"><img src="../assets/github.svg" alt="github" class="svg-class" v-b-tooltip.hover title="Github.com"/></a>
                </b-col>
                <b-col>
                  <a href="https://www.linkedin.com/in/iamvishalkhare/" target="_blank"><img src="../assets/linkedin.svg" alt="linkedin" class="svg-class" v-b-tooltip.hover title="Linkedin.com"/></a>
                </b-col>
                <b-col>
                  <a href="https://twitter.com/iam_vishalkhare" target="_blank"><img src="../assets/twitter.svg" alt="twitter" class="svg-class" v-b-tooltip.hover title="twitter.com"/></a>
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
      <div id="about"></div><br><br>
      <hr>
      <b-row>
        <b-col sm="3">
          <div class="div-headings">
            0. About Me
          </div>
        </b-col>
        <b-col>
          <div class="color-offwhite size-20px text-padding">
            Hello! I'm Vishal, a software development engineer - III at <a target="_blank" href="https://www.1mg.com/">TATA 1mg.&nbsp;&nbsp;<b-icon-box-arrow-up-right scale="0.8"></b-icon-box-arrow-up-right></a>
            <br>
            <br>
            I enjoy building things that live on the web. whether that be websites, applications, or anything in between. My goal is to always build products that provide high performant experiences. I am also a cloud enthusiast. GCP and AWS feels like home to me.
            <br>
            <br>
            Shortly after graduating from <a target="_blank" href="http://www.nitjsr.ac.in/">National Institute of Technology, Jamshedpur&nbsp;&nbsp;<b-icon-box-arrow-up-right scale="0.8"></b-icon-box-arrow-up-right></a>, I joined the engineering team at <a target="_blank" href="https://www.americanexpress.com/in/">American Express.</a>
            Currently at <a target="_blank" href="https://www.1mg.com/">TATA 1mg&nbsp;&nbsp;<b-icon-box-arrow-up-right scale="0.8"></b-icon-box-arrow-up-right></a> I am leading Ad monetization team.
            <br>
            <br>
            Here are few technologies I've been working with recently
            <b-row>
              <b-col>
                <ul class="tech-list">
                  <li>Python, Flask, Sanic</li>
                  <li>TypeScript, JavaScript</li>
                  <li>Java, Spring</li>
                  <li>Golang</li>
                  <li>Angular, Vue</li>
                </ul>
              </b-col>
              <b-col>
                <ul class="tech-list">
                  <li>AWS, GCP</li>
                  <li>Oracle,Mysql</li>
                  <li>Elasticsearch, Solr, Redis</li>
                  <li>Hadoop, Hive, Apache Ranger</li>
                  <li>Kafka, AWS SQS</li>
                </ul>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
      <div id="experience"></div><br><br>
      <hr>
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
                <div class="company-name">TATA 1mg</div>
                <div>Software Development Engineer - III</div>
                <div></div>
                <div class="color-offwhite line-height-more  size-16px">
                  I lead <span class="color-green">Ad monetization team</span> at TATA 1mg. Our objective is to drive maximum revenue from sponsored brand ads.
                  I have a team of dynamic developers and designers who work primarily on Python and use AWS as infrastructure.

            </div>
                <div class="year">
                  <span>Present</span>
                  <span>07/2022</span>
                </div>
              </li>
              <li>
              <li>
                <span></span>
                <div class="company-name">TATA 1mg</div>
                <div>Software Development Engineer - II</div>
                <div></div>
                <div class="color-offwhite line-height-more  size-16px">
                  I worked on Ads Monetization team at TATA 1mg.
                  Ads Monetization team is responsible for driving revenue from sponsored/banner ads. I developed several key features such as user tagging sync and pixel events streaming pipeline.
            </div>
                <div class="year">
                  <span>06/2022</span>
                  <span>07/2021</span>
                </div>
              </li>
              <li>
                <span></span>
                <div class="company-name">Bank of New York Mellon</div>
                <div>Senior Application Developer</div>
                <div></div>
                <div class="color-offwhite line-height-more  size-16px">
                  At BNY Mellon I work in the HR technology team. I develop technologies to support HR functions. As an internal contribution, I led a team of 4 to develop a <span class="color-green">Devops Dashboard</span> for the bank.<br>Just recently I have concluded an extensive POC to determine whether <span class="color-green">Apache ranger</span> can satisfy federated authentication and authorization needs for HR technology's data warehouse.
            </div>
                <div class="year">
                  <span>06/2021</span>
                  <span>04/2019</span>
                </div>
              </li>
              <li>
                <span></span>
                <div class="company-name">American Express</div>
                <div>Engineer - III</div>
                <div></div>
                 <div class="color-offwhite line-height-more  size-16px">
              During my time as full time engineer at AmEx, I worked on various projects starting from ideating, designing and developing <span class="color-green">Luke Splashboard</span> which was an admin dashboard for Luke Chatbot. <span class="color-green">Luke Splashboard</span> allowed SMEs to train the chatbot at 50% higher pace.<br>Another highlight was <span class="color-green">AmEx Search</span> which is an in house search engine for AmEx intranet.<br>Apart from this my daily tasks involved maintaining datastore infrastructure which was <span class="color-green">Apache Solr cluster of 5 nodes with a Zookeeper</span> required for Luke chatbot and AmEx Search to run.
            </div>
                <div class="year">
                  <span>04/2019</span>
                  <span>05/2018</span>
                </div>
              </li>
              <li>
                <span></span>
                <div class="company-name">American Express</div>
                <div>Developer Intern</div>
                <div></div>
                 <div class="color-offwhite line-height-more  size-16px">
              I was an intern working on a chatbot called <span class="color-green">Luke - A digital workplace chatbot</span> that employees used to self service their issues. Aim was to reduce the number of support tickets opened which directly correlates to reduction in dollars spent. Luke Chatbot was able to reduce the number of tickets by 25-30%.<br> I also developed <span class="color-green">Alexa skills</span> and <span class="color-green">Dialogflow chatbots</span> that enabled machine learning capabilities as part of POCs.
            </div>
                <div class="year">
                  <span>05/2018</span>
                  <span>07/2017</span>
                </div>
              </li>
              <li>
                <span></span>
                <div class="company-name">Libsys Ltd.</div>
                <div>Business Trainee</div>
                <div></div>
                 <div class="color-offwhite line-height-more  size-16px">
              At Libsys I was part of their operations team, responsible for on premises deployment and training of <a href="https://www.lsacademia.com/" target="_blank"> LSAcademia - An ERP solution for academic institutions.&nbsp;&nbsp;<b-icon-box-arrow-up-right scale="0.8"></b-icon-box-arrow-up-right></a> I worked for many prestigious clients like MNNIT Allahabad, RGNUL Patiala and ABES Ghaziabad.
            </div>
                <div class="year">
                  <span>06/2015</span>
                  <span>07/2014</span>
                </div>
              </li>
            </ul>
          </section>
        </b-col>
      </b-row>
      <div id="patents"></div><br><br>
      <hr>
      <b-row>
        <b-col sm="4">
          <div class="div-headings">
            2. Patents & Certifications
          </div>
        </b-col>
        <b-col>
          <div class="color-offwhite size-20px text-padding">
          <div>
            <!-- <b-icon-caret-right-fill></b-icon-caret-right-fill> -->
            Won pretigious American Express Platinum Genius Medal 2018 for my co-invention - <a href="http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=/netahtml/PTO/srchnum.html&r=1&f=G&l=50&s1=20200143262.PGNR.&OS=DN/20200143262&RS=DN/20200143262" target="_blank">US Patent No. 16/178,404 - INFORMATION SUPPORT SYSTEM USING ARTIFICIAL INTELLIGENCE&nbsp;&nbsp;<b-icon-box-arrow-up-right scale="0.8"></b-icon-box-arrow-up-right></a>
          </div>
          <div>
            <a target="_blank" href="https://www.credential.net/d7957e12-4ba0-4ff9-9f90-fc105765f6f5"><img src="../assets/ace.png" class="cert-icon"><b-icon-box-arrow-up-right scale="0.8"></b-icon-box-arrow-up-right></a>
            <img src="../assets/oracle.png" class="cert-icon">
          </div>
          <div><a href="https://s3.ap-south-1.amazonaws.com/vishalkhare.com/docs/digital_marketing.pdf" target="_blank">Google Digital Unlocked - Fundamentals of Digital Marketing&nbsp;&nbsp;<b-icon-box-arrow-up-right scale="0.8"></b-icon-box-arrow-up-right></a></div>
          </div>
           
        </b-col>
      </b-row>
      <div id="projects"></div><br><br>
      <hr>
      <b-row>
        <b-col sm="4">
          <div class="div-headings">
            3. Projects
          </div>
        </b-col>
        <b-col>
          <div class="color-offwhite size-20px text-padding">
          <div class="project-name">
            <a href="https://github.com/iamvishalkhare/GoCorona-Assistant" target="_blank">1. GoCorona WhatsApp Assistant&nbsp;&nbsp;<b-icon-box-arrow-up-right scale="0.8"></b-icon-box-arrow-up-right></a>
          </div>
          <div class="project-detail">
            GoCorona is a Whatsapp chatbot assistant which is capable of answering general queries regrading Corona Virus and Covid-19 Outbreak. It is built on Google's Dialogflow platform using Twilio.
            <a href="https://github.com/iamvishalkhare/GoCorona-Assistant" target="_blank">See github link&nbsp;&nbsp;<b-icon-box-arrow-up-right scale="0.8"></b-icon-box-arrow-up-right></a> for screenshots and directions on how to use it.
          </div>
          </div>


          <div class="color-offwhite size-20px text-padding">
          <div class="project-name">
            <a href="https://www.npmjs.com/package/@iam_vishalkhare/chatter-box" target="_blank">2. Chatterbox - NPM package&nbsp;&nbsp;<b-icon-box-arrow-up-right scale="0.8"></b-icon-box-arrow-up-right></a>
          </div>
          <div class="project-detail">
            ChatterBox is an NPM package aimed to be used as a chat
            or comment component needed for angular application development.
            <a href="https://www.npmjs.com/package/@iam_vishalkhare/chatter-box" target="_blank">See chattebox NPM URL&nbsp;&nbsp;<b-icon-box-arrow-up-right scale="0.8"></b-icon-box-arrow-up-right></a> for screenshots and directions on how to use it.
          </div>
          </div>


          <div class="color-offwhite size-20px text-padding">
          <div class="project-name">
            <a href="https://iamvishalkhare.medium.com/cloud-scheduler-trigger-cloud-functions-using-cloud-pub-sub-and-twilio-4851f7839758" target="_blank">3. Automated love calls to girlfriend&nbsp;&nbsp;<b-icon-box-arrow-up-right scale="0.8"></b-icon-box-arrow-up-right></a>
          </div>
          <div class="project-detail">
            Using GCP's cloud function, cloud scheduler, cloud pub/sub and Twilio's programmable voice API, I developed a system that calls my girlfriend everyday at 15:00 hrs to let her know that i love her.
            <a href="https://iamvishalkhare.medium.com/cloud-scheduler-trigger-cloud-functions-using-cloud-pub-sub-and-twilio-4851f7839758" target="_blank">See this&nbsp;&nbsp;<b-icon-box-arrow-up-right scale="0.8"></b-icon-box-arrow-up-right></a> to know more.
          </div>
          </div>
           
        </b-col>
      </b-row>

      <div id="contact"></div><br><br>
      <hr>
      <b-row>
        <b-col sm="4">
          <div class="div-headings">
            4. Contact Vishal
          </div>
        </b-col>
        <b-col>
          <div class="color-offwhite size-20px text-padding">
            My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you! You can also reach me directly at <a href="mailto:vishalkhare39@gmail.com" target="_blank">vishalkhare39@gmail.com&nbsp;&nbsp;<b-icon-box-arrow-up-right scale="0.8"></b-icon-box-arrow-up-right></a>
          <input type="text" v-model="sender_name" class="text-fields" placeholder="Name">
          <input type="email" v-model="sender_email" class="text-fields" placeholder="E-mail">
          <textarea type="text" v-model="sender_message" class="text-fields" placeholder="Message"></textarea>
          <div class="message" v-if="this.api_msg.length > 0">{{api_msg}} <span @click="closeMsg()" style="cursor: pointer; float: right;">&#10005;</span></div>
          <div v-if="msg_loader" style="margin-left: 1em;">Sending...</div>
          <button v-if="!msg_loader" @click="contact" class="btn-green send-btn">Send</button>
          </div>
           
        </b-col>
      </b-row>
      
    
    </b-container>
    <br>
    <br>
    <br>
    <br>
    <a @click="scrollTop" v-show="visible" class="bottom-right">
        <slot><div class="btn-green"><b-icon-arrow-up></b-icon-arrow-up>&nbsp;&nbsp;Scroll to top</div></slot>
    </a>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'HelloWorld',
  data () {
    return {
      isLoaded: false,
      msg_loader : false,
      api_msg : '',
      sender_name: '',
      sender_message: '',
      sender_email: '',
      visible: false
    }
  },
  methods: {
    onImgLoad () {
      this.isLoaded = true
    },
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    },
    scrollListener: function () {
      this.visible = window.scrollY > 150
    },
    closeMsg: function() {
      this.api_msg = '';
    },
    contact: function() {
        this.msg_loader = true;
        if (this.sender_name.length === 0 || this.sender_message.length === 0 || this.sender_email.length === 0) {
          this.msg_loader = false;
          this.api_msg = 'All fields are mandatory.';
          return;
        }
        axios.post('https://3imnnh6u18.execute-api.ap-south-1.amazonaws.com/default/vishalkhare-say-hello',
        {
            message: {
              sender_name: this.sender_name,
              from: this.sender_email,
              body: this.sender_message
            }
        }).then((response) => {
          console.log(response);
          if (response.data.statusCode == 200) {
            this.api_msg = response.data.body;
            this.msg_loader = false;
            this.sender_name = '';
            this.sender_email = '';
            this.sender_message = '';
          } else {
            this.api_msg = response.data.body;
            this.msg_loader = false;
          }
        }, (error) => {
          this.api_msg = 'Something Went wrong...';
          this.msg_loader = false;
          console.log(error);
        });
      },
      navResume: function() {
          this.$gtag.event('click', {
          'event_category': 'Resume',
          'event_label': 'Resume-click',
          'value': 1
        })
      },
      navMedium: function() {
        this.$gtag.event('click', {
          'event_category': 'Medium',
          'event_label': 'medium-click',
          'value': 1
        })
      }
  },
  mounted: function () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
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
  background-color: #0A192F;
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
.cert-icon {
  height: 200px;
  width: 200px;
  margin: auto;
  padding: 1em;
}
.project-name {
  color: #fff;
  padding: 0.5em;
}
.project-detail {
  margin-left: 1em;
}
.text-fields {
  margin: 1em;
  width: 90%;
  padding: 0.5em;
  border: 1px solid #fff;
  color: #fff;
}
input, textarea {
  background-color : #0A192F; 
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #63708B;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #63708B;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color:#63708B;
}
.send-btn {
  margin: 1em;
}
.message {
  padding: 1em;
  background-color: teal;
  color: #fff;
  border-radius: 5px;
  margin-bottom: 1em;
  width: 90%;
  margin-left: 1em;
}
.bottom-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
}
.scroll-top {
  filter: blur(8px);
  -webkit-filter: blur(8px);
}
</style>
