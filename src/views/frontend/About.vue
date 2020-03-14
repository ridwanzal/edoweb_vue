<template>
  <div>
    <Header/>
    <Navbar/>
    <Footer/>
  </div>
</template>

<script>
    import Header from '../../components/Header.vue'
    import Navbar from '../../components/Navbar.vue'
    import Footer from '../../components/Footer.vue'

    export default {
    name: 'About',
        components: {
            Header,
            Navbar,
            Footer
        },
    }
</script>