<template>
  <div>
    <Navbar/>
    <div class="container" style="margin-top:50px;">
      <div class="row">
             <div class="col-lg-12 col-md-12 col-xs-12 w-100">
                <ul class="breadcrumbs">
                  <li><a href="/"><span data-feather="home"></span>&nbsp;&nbsp;Home</a></li>
                  <li>About Me</li>
                </ul>   
            </div>
      </div>
    </div>
     <div class="thirdsection_two">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-xs-12">
                        <img class="animated fadeIn" alt="" height="" width="180px" id="myimage" src="../../assets/me.svg"><br>
                    </div>
                    <div class="col-lg-9 col-md-6 col-xs-12 animated fadeIn slow">
                        <p id="text_sapa" class="medium_text">Hello there, my name is</p>
                        <h2 class="text_bold" id="author_names">M. Ridwan Zalbina (Edo)</h2>
                        <p>Software Engineer, Graphic Designer and Linux Enthusiast</p>
                        <br/>
                        <p class="medium_text">Hello, my name is M. Ridwan Zalbina, I'm currently working as Front End Developer in Fairtech Pte, Ltd.
                        
                        
                        </p>
                        <br/>
                        <h4 class="text_bold">About Me</h4>
                        <p class="medium_text">
                            Shortly after graduating from <b>Universitas Sriwijaya</b> in 2016 as a 
                            Computer Engineering student, I worked in different position as Front-End Developer, UI/UX Engineer, Backend Developer & Mobile App Developer, 
                            where I got to work on a variety of interesting projects and improving my design and coding skills.
                            Here's a few things I'm experienced with :
                        </p>
                        <br/>
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-xs-12">
                                <ul class="list_expertise">
                                    <li>Javascript</li>
                                    <li>PHP</li>
                                    <li>VueJS</li>
                                    <li>ReSTful API</li>
                                    <li>Startup Coaching</li>
                                </ul>
                            </div>
                            <div class="col-lg-4 col-md-4 col-xs-12">
                                <ul class="list_expertise">
                                    <li>Java</li>
                                    <li>Linux Administration</li>
                                    <li>User Interface Design</li>
                                    <li>NodeJS (Express)</li>
                                    <li>Team Management</li>
                                </ul>
                            </div>
                            <div class="col-lg-5 col-md-5 col-xs-12">
                                <ul class="list_expertise">
                                    <li>UI/UX Design</li>
                                    <li>Cloud Management</li>
                                    <li>Android Development</li>
                                    <li>DB Design & Management</li>
                                    <li>Leadership</li>
                                </ul>
                            </div>
                        </div>  
                        <br/>
                         <a href="https://edo.scafol.id/assets/docs/curriculum_vitae_2019.pdf" download><button class="button1_outline_small_black block_display mycv download btn_mobile" type="button"><span class="fa fa-caret-right"></span>&nbsp;&nbsp;Download my CV</button></a>&nbsp;&nbsp;&nbsp;
                         <a target="_blank" href="https://id.linkedin.com/in/mridwanzalbina"><button class="button1_outline_small_black block_display block_display linkedin btn_mobile" type="button"><span class="fa fa-linkedin"></span>&nbsp;&nbsp;View my Linkedin</button></a>&nbsp;&nbsp;&nbsp;
                         <a target="_blank" href="https://github.com/ridwanzal"><button class="button1_outline_small_black block_display block_display linkedin btn_mobile" type="button"><span class="fa fa-github"></span>&nbsp;&nbsp;View my Github</button></a>&nbsp;&nbsp;&nbsp;
                         <a target="_blank" href="https://behance.net/ridwanzal"><button class="button1_outline_small_black block_display block_display linkedin btn_mobile" type="button"><span class="fa fa-behance"></span>&nbsp;&nbsp;View my Behance</button></a>&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
  </div>
</template>

<script>
    import Navbar from '../../components/Navbar.vue'
    import Footer from '../../components/Footer.vue'

    export default {
    name: 'About',
        components: {
            Navbar,
            Footer
        },
    }
</script>