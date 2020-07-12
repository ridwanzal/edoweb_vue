<template>
    <div>
        <div class="secondsection">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-7 col-xs-12">
                        <vue-typed-js :strings="['Welcome to RIDWANZAL.COM.', 'Technology Enthusiast.', 'Solution for web development.', 'Building mobile apps.', 'Deliver impressive design.']"
                             :loop="true" :typeSpeed="120" :cursorChar="'_'">
                            <h1  style="font-size:38px; letter-spacing: 0px; font-weight:600; height:60px;font-family: 'Lato', sans-serif;" class="typing"></h1>
                        </vue-typed-js>
                        <p id="captiontext" style="margin-top:10px;" class="animated fadeIn">Hello people, my name is M. Ridwan Zalbina, experienced on different position as Front-End Developer, UI/UX Engineer, Backend Developer & Mobile App Developer, where I got to work on a variety of interesting projects and improving my design and coding skills. Let's collaborate with me.</p>
                        <div class="separator"></div>
                        <button class="button1_outline_small" type="button" id="learnmores"><span data-feather="arrow-right" class="feather-24"></span>Learn more</button>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;<a href="https://edo.scafol.id/frontpage/contact">
                        <button  style="margin-left:8px;" class="button1_small" type="button" id="bcontacts"><span data-feather="briefcase" class="feather-24"></span> &nbsp;&nbsp;Contact me</button></a>
                    </div>
                    <div class="col-lg-5 col-md-5 col-xs-12">
                        <img class="animated fadeInUp imageme" src="../assets/edowork.svg">
                    </div>
                </div>
            </div>
        </div>
        <div class="fourthsection">
                <div class="container"> 
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-6 col-xs-12" style="padding-top:60px;padding-bottom:90px;">
                            <center>
                                <div style="font-weight:600;font-size:25px;">What I do in general</div>
                                <div style="line-height:35px;width:80%;margin-top:40px;">I provide a lot of service including, Web Development, Graphic Design services, UI/ UX Design and Android Mobile App Development. Create stunning, clean and acceptable product. I'm very happy if you want to collaborate to make an awesome product. </div>    
                            </center>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                <div class="card animated fadeInUp card_services" style="height:420px;">
                                    <div class="card-body">
                                        <center><img class="img_services" src="../assets/icon_service/2.svg"></center>
                                        <h5 class="card-title mytils">Web Development.</h5>
                                        <p class="card-text">Many years in Software Development. Have an experiences on lead product engineering, team management, and startup environment. Work with me and create stunning product</p>
                                    </div>
                                </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                <div class="card animated fadeInUp card_services" style="height:420px;">
                                    <div class="card-body">
                                        <center><img  class="img_services"  src="../assets/icon_service/1.svg"></center>
                                        <h5 class="card-title mytils" >Mobile Application</h5>
                                        <p class="card-text">Many years in Software Development. Have an experiences on lead product engineering, team management, and startup environment. Work with me and create stunning product.</p>
                                    </div>
                                </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div class="card animated fadeInUp card_services" style="height:420px;">
                                    <div class="card-body">
                                        <center><img  class="img_services"  src="../assets/icon_service/4.svg"></center>
                                        <h5 class="card-title mytils">Graphic Design</h5>
                                        <p class="card-text">Experienced in Graphic Design, UX Research and Visual Design, follow current design trend, and maintaining clean, acceptable design product, precise and customer oriented.</p>
                                    </div>
                                </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                <div class="card animated fadeInUp card_services" style="height:420px;">
                                    <div class="card-body">
                                        <center><img   class="img_services"  src="../assets/icon_service/3.svg"></center>
                                        <h5 class="card-title mytils" >UI/UX Design</h5>
                                        <p class="card-text">Experienced in Graphic Design, UX Research and Visual Design, follow current design trend, and maintaining clean, acceptable design product, precise and customer oriented.</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
        </div>
        <!-- <div class="fifthsection">
            <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-xs-12" style="padding-top:60px;padding-bottom:90px;">
                            <center>
                                <div style="font-weight:600;font-size:25px;">Read my microblog on instagram</div>
                                <div style="line-height:35px;width:80%;margin-top:40px;">I write micro blogging on instagram platform, hope this will help me to gain more traction. Although, I'll write articles too. Hopefully this would help us to learn new things. Thankyou.</div>    
                            </center>
                        </div>
                    </div>
                    <div class="row images" v-if="images.length >= 9">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" v-for="image in images" v-bind:key="image" v-viewer>
                            <img class="image_instagram animated fadeInUp image_instagram_action" style="border-radius:4px;width:100%;margin-bottom:30px;" v-bind:src="image.images.standard_resolution.url" :key="image.images.standard_resolution.id">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-xs-12 ">
                            <a href="https://instagram.com/ridwanzal" target="_blank"><button style="float-right;" class="button1_outline_smaller_black" type="button" id="learnmores"><span data-feather="arrow-right" class="feather-24"></span>Show more</button></a>
                        </div>
                    </div>
                </div>
        </div> -->
         <div class="fourthsectionthree" style="display:none;">
                <div class="container"> 
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-xs-12" style="padding-top:60px;padding-bottom:50px;">
                            <center>
                                <div style="font-weight:600;font-size:25px;">What Client said about me.</div>
                            </center>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-10 col-md-10 col-xs-12 offset-md-1 offset-lg-1">
                                <carousel :autoplay="true" :autoplayTimeout="2000" :loop="true" :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false">
                                    <slide>
                                        <center>
                                            <p class="text_testi">
                                                "Saya sudah beberapa kali dibuatkan desain logo dan hasilnya Alhamdulillah memuaskan, desainnya dinamis dan sesuai... Barakallahu Fiikum."
                                            </p> 
                                            <p style="color:#777777;margin-top:5px;">M. Iqbal - Owner Cindo</p>
                                        </center>
                                    </slide>
                                    <slide>
                                         <center>
                                            <p class="text_testi">
                                                "Recomended designer. Desain yang dibuatnya selalu memuaskan."
                                            </p>
                                            <p style="color:#a9a9a9;">Faris Humam - Owner Cindo, Annajaah</p>
                                        </center>
                                    </slide>
                                    <slide>
                                        <center>
                                            <p class="text_testi">
                                                "Saya sudah 2 (dua) kali membuat logo dengan edo, dan semua karya nya bagus dan sangat memuaskan."
                                            </p>
                                            <p style="color:#a9a9a9;">Kahbi Hardiansyah - Sinaroja Kontraktor & Supplier</p>
                                        </center>
                                    </slide>
                                    <slide>
                                        <center>
                                            <p class="text_testi">
                                               "Saya Owner Nukimoto Photograpy sangat puas atas layanan jasa pembuatan logo yang sangat baik, terutama dengan pelayanan yang ramah dan juga disain yang bagus dan support dalam berbagai bentuk 
                                               format file sehingga bisa langsung di gunakan . Semoga kedepannya dapat mempertahankan dan meningkatkan kwalitas layanannya ."
                                            </p>
                                            <p style="color:#a9a9a9;">Nuki MK - Owner Nukimoto Photograpy</p>
                                        </center>
                                    </slide>
                                    <slide>
                                        <center>
                                            <p class="text_testi">
                                               "Kami pernah dibuatkan logo dan hasilnya keren oke punya."
                                            </p>
                                            <p style="color:#a9a9a9;">Dian Purnama - Guru Kesenian</p>
                                        </center>
                                    </slide>
                                     <slide>
                                        <center>
                                            <p class="text_testi">
                                               Ada banyak assets yang saya percayakan kepada Ridwan a.k.a Edo. Besutan hasil karyanya sesuai dengan keinginan. Semua assets design untuk konfrensi internasional : EECSI 2015 sd 2017, ICECOS 2017-2019,ARS 2016-2017. Repository nasional RISTEKDIKTI : SINTA, GARUDA dan ANJANI. Nilai tambah lainnya dari sudut pandang akademisi adalah semua tools yang  digunakan menggunalan platform open source.
                                               Salam.
                                            </p>
                                            <p style="color:#a9a9a9;">Deris Stiawan. Ph.D - Associate Professor Universitas Sriwijaya </p>
                                        </center>
                                    </slide>
                                </carousel>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Vue from 'vue';
import Viewer from 'v-viewer';
import VueCarousel from 'vue-carousel'
import { Carousel, Slide } from 'vue-carousel';
Vue.use(Viewer);
Vue.use(VueCarousel);
export default {
    name: 'content',
    data() {
        return {
            images : []
        };
    },
    components : {
        Carousel,
        Slide
    },
    mounted() { 
         axios
            .get('https://api.instagram.com/v1/users/self/media/recent?access_token=461833723.7bcd3b9.a8ad995bbf1740aaa4ce3db9b9af7c7b')
            .then((response) => { 
                    this.images = response.data.data.slice(0,9); 
                    console.log(this.images);
        });

        
    },
}
</script>
<style>
   
</style>