<template>
  <div>
    <Header/>
    <Navbar/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
    import Header from '../../components/Header.vue'
    import Navbar from '../../components/Navbar.vue'
    import Content from '../../components/Content.vue'
    import Footer from '../../components/Footer.vue'

    export default {
    name: 'Home',
        components: {
            Header,
            Navbar,
            Content,
            Footer
        },
    }
</script>