<template>
  <div>
    <Navbar/>
    <div class="container" style="margin-top:50px;">
      <div class="row">
             <div class="col-lg-6 col-md-6 col-xs-12 w-50">
                <ul class="breadcrumbs">
                  <li><a href="/"><span data-feather="home"></span>&nbsp;&nbsp;Home</a></li>
                  <li>Services</li>
                </ul>
            </div>
      </div>
    </div>
      <div class="" style="margin-bottom:100px;">
                <div class="container"> 
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-xs-12" style="padding-top:60px;padding-bottom:90px;">
                            <center>
                                <div style="font-weight:600;font-size:25px;">What I do in general</div>
                                <div style="line-height:35px;width:80%;margin-top:40px;">I provide a lot of service including, Web Development, Graphic Design services, UI/ UX Design and Android Mobile App Development. Create stunning, clean and acceptable product. I'm very happy if you want to collaborate to make an awesome product. </div>    
                            </center>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-xs-12">
                                <div class="card animated fadeInUp card_services" style="width: 16.8rem;height:530px;">
                                    <div class="card-body">
                                        <br/>
                                        <center><img style="width:65%;" src="../../assets/icon_service/2.svg"></center>
                                        <br/>
                                        <h5 class="card-title" style="padding-top:15px;padding-bottom:15px;">Web Development.</h5>
                                        <p class="card-text">Many years in Software Development. Have an experiences on lead product engineering, team management, and startup environment. Work with me and create stunning product</p>
                                    </div>
                                </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-xs-12">
                                <div class="card animated fadeInUp card_services" style="width: 16.8rem;height:530px;">
                                    <div class="card-body">
                                        <br/>
                                        <center><img  style="width:65%;" src="../../assets/icon_service/1.svg"></center>
                                        <br/>
                                        <h5 class="card-title" style="padding-top:15px;padding-bottom:15px;">Mobile Application</h5>
                                        <p class="card-text">Many years in Software Development. Have an experiences on lead product engineering, team management, and startup environment. Work with me and create stunning product.</p>
                                    </div>
                                </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-xs-12">
                            <div class="card animated fadeInUp card_services" style="width: 16.8rem;height:530px;">
                                    <div class="card-body">
                                        <br/>
                                        <center><img  style="width:65%;" src="../../assets/icon_service/4.svg"></center>
                                        <br/>
                                        <h5 class="card-title" style="padding-top:15px;padding-bottom:15px;">Graphic Design</h5>
                                        <p class="card-text">Experienced in Graphic Design, UX Research and Visual Design, follow current design trend, and maintaining clean, acceptable design product, precise and customer oriented.</p>
                                    </div>
                                </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-xs-12">
                                <div class="card animated fadeInUp card_services" style="width: 16.8rem;height:530px;">
                                    <div class="card-body">
                                        <br/>
                                        <center><img  style="width:65%;" src="../../assets/icon_service/3.svg"></center>
                                        <br/>
                                        <h5 class="card-title" style="padding-top:15px;padding-bottom:15px;">UI/UX Design</h5>
                                        <p class="card-text">Experienced in Graphic Design, UX Research and Visual Design, follow current design trend, and maintaining clean, acceptable design product, precise and customer oriented.</p>
                                    </div>
                                </div>
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
    name: 'Services',
        components: {
            Navbar,
            Footer
        },
    }
</script>