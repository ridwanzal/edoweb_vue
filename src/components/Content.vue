<template>
    <div>
        <div class="secondsection">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-7 col-xs-12">
                        <vue-typed-js :strings="['Hi there, Welcome to Edo.', 'Technology Enthusiast.']"
                             :loop="true" :typeSpeed="100" :cursorChar="'_'">
                            <h1  style="font-size:40px; height:55px;" class="typing"></h1>
                        </vue-typed-js>
                        <p id="captiontext" style="color:#999999 !important;" class="animated fadeIn">Hello people, my name is M. Ridwan Zalbina, I am a Software Engineer and Graphic Designer based in Palembang, previously in Jakarta, specializing in developing (and occasionally designing) stunning and quality website and applications.</p>
                        <div class="separator"></div>
                        <button class="button1_outline_small" type="button" id="learnmores"><span data-feather="arrow-right" class="feather-24"></span>Learn more</button>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;<a href="https://edo.scafol.id/frontpage/contact"><button  style="color:#4d4d4d;margin-left:8px;" class="button1_small" type="button" id="bcontacts"><span data-feather="briefcase" class="feather-24"></span> &nbsp;&nbsp;Contact me</button></a>
                    </div>
                    <div class="col-lg-5 col-md-5 col-xs-12">
                        <img class="animated fadeInUp fast" src="../assets/edowork.png" style="width:100%;">
                    </div>
                </div>
            </div>
        </div>
        <div class="fourthsection">
            <div class="container"> 
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-xs-12" style="padding-top:60px;padding-bottom:90px;">
                        <center>
                            <div style="font-weight:700;font-size:25px;">What I do in general</div>
                            <div style="line-height:35px;width:80%;margin-top:60px;">I provide a lot of service including, Web Development, Graphic Design services, UI/ UX Design and Android Mobile App Development. Create stunning, clean and acceptable product. I'm very happy if you want to collaborate to make an awesome product. </div>    
                        </center>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-xs-12">
                            <div class="card" style="width: 16rem;">
                                <div class="card-body">
                                    <br/>
                                    <center><img src="https://edo.scafol.id/assets/img//programming2.png"></center>
                                    <br/>
                                    <h5 class="card-title" style="padding-top:15px;padding-bottom:15px;">Web Development.</h5>
                                    <p class="card-text">Many years in Software Development. Have an experiences on lead product engineering, team management, and startup environment. Work with me and create stunning product</p>
                                </div>
                            </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-xs-12">
                            <div class="card" style="width: 16rem;">
                                <div class="card-body">
                                    <br/>
                                    <center><img src="https://edo.scafol.id/assets/img//programming2.png"></center>
                                    <br/>
                                    <h5 class="card-title" style="padding-top:15px;padding-bottom:15px;">Mobile Application</h5>
                                    <p class="card-text">Many years in Software Development. Have an experiences on lead product engineering, team management, and startup environment. Work with me and create stunning product.</p>
                                </div>
                            </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-xs-12">
                        <div class="card" style="width: 16rem;">
                                <div class="card-body">
                                    <br/>
                                    <center><img src="https://edo.scafol.id/assets/img/design2.png"></center>
                                    <br/>
                                    <h5 class="card-title" style="padding-top:15px;padding-bottom:15px;">Graphic Design</h5>
                                    <p class="card-text">Experienced in Graphic Design, UX Research and Visual Design, follow current design trend, and maintaining clean, acceptable design product, precise and customer oriented.</p>
                                </div>
                            </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-xs-12">
                            <div class="card" style="width: 16rem;">
                                <div class="card-body">
                                    <br/>
                                    <center><img src="https://edo.scafol.id/assets/img//programming2.png"></center>
                                    <br/>
                                    <h5 class="card-title" style="padding-top:15px;padding-bottom:15px;">UI/UX Design</h5>
                                    <p class="card-text">Experienced in Graphic Design, UX Research and Visual Design, follow current design trend, and maintaining clean, acceptable design product, precise and customer oriented.</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'content',
    mounted() {
    },
}
</script>
<style>
    .secondsection{
        padding-top : 120px;
        padding-bottom : 120px;
        background : #000000;
    }

    .text_header{
        color : #ffffff;
    }
</style>