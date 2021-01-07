<template>
  <div id="app">
    <sample-header></sample-header>
    <div class="content">
      <div class="nav">
        <sample-nav></sample-nav>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
    <sample-footer></sample-footer>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Nav from "./components/nav.vue";
import Footer from "./components/footer.vue";
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css";

export default {
  name: "app",
  components: {
    "sample-header": Header,
    "sample-nav": Nav,
    "sample-footer": Footer
  },
  data() {
    return {};
  }
};
</script>

<style>
#app {
  font-size: 14px;
  margin-top: 60px;
  margin: 0 10%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-box-shadow: 0 0 20px #e3e3e3;
  box-shadow: 0 0 20px #e3e3e3;
}
.content {
  position: absolute;
  top: 80px;
  bottom: 60px;
  left: 0;
  right: 0;
  display: flex;
}
.nav {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 20px;
  padding: 0 10px;
  width: 200px;
  border-right: 2px solid #e3e3e3;
}
</style>
