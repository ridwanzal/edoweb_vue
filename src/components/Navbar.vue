<template>
    <section id="nav_section" style="width:100%; background : #ffff !important; padding-top:15px;padding-bottom:15px;">
        <div class="container" stye="background:#fff !important;">
            <nav class="navbar navbar-expand-lg navbar navbar-light navbar_custom" stye="background:#ffff !important;">
                <a class="navbar-brand" href=""><img width="100" style="position:relative;left:-19px; top:-2px;margin-right:30px;" src="../assets/logoone.svg" class="image_sec2"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto navmain">
                        <li class="nav-item">
                            <a class="nav-link" href="/" title="Home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about" title="About">About Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/services" title="Services">Services</a>
                        </li>
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="#" title="Portoflio">Portfolio</a>
                        </li> --> 
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="#" title="Blog">Blog</a>
                        </li> -->
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="#" title="Blog">Contact</a>
                        </li> -->
                      
                    </ul>
                    <ul class="navbar-nav navmain2">
                        <li class="nav-item">
                            <a class="nav-link daftarbutton" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Get in touch
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>       
        </div>
    </section>
</template>

<script>
export default {
  name: 'navbar',
  mounted() { 
        // window.onscroll = function() {myFunction()};
        // // Get the header
        // var header = document.getElementById("nav_section");

        // // Get the offset position of the navbar
        // var sticky = header.offsetTop + 1000;

        // // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
        // function myFunction() {
        //     if (window.pageYOffset > sticky) {
        //     } else if(window.pageYOffset == 10) {
        //     }
        // }
    },
};
</script>