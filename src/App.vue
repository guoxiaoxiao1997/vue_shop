<template>
    <div id="app">
       <router-view></router-view>
       <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>
<script>
  import  {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: {
    FooterGuide
  },
  mounted() {
    this.getAddress()
    this.getUserInfo()
  },
  methods:{
    ...mapActions(['getAddress','getUserInfo'])
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .app
        width:100%;
        height:100%;
</style>
