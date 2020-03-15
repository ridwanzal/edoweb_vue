<template>
    <section style="width:100%; background : #00171F !important; padding-top:15px;padding-bottom:15px;">
        <div class="container" stye="background:#00171F !important;">
            <nav class="navbar navbar-expand-lg navbar navbar-dark navbar_custom" stye="background:#00171F !important;">
                <a class="navbar-brand" href=""><img width="80" style="position:relative;left:-19px; top:-2px;margin-right:30px;" src="../assets/logoone.svg" class="image_sec2"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto navmain">
                        <li class="nav-item">
                            <a class="nav-link" href="/" title="Home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="http://localhost:8080/about" title="About">About Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" title="Services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" title="Portoflio">Portoflio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" title="Blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" title="Contact">Contact</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav navmain2">
                        <li class="nav-item">
                            <a class="nav-link daftarbutton" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Whatsapp me  
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
};
</script>