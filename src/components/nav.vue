<template>
  <div class="navigationBar">
    <h2>SpreadJS</h2>
    <nav>
      <ul>
        <li><router-link exact to="/SpreadJS">基础表格</router-link></li>
        <li>
          <router-link exact to="/GC-Spread-Sheets">
            工作簿属性
          </router-link>
        </li>
        <li><router-link exact to="/WorkSheet">表格属性</router-link></li>
      </ul>
    </nav>
    <h2>ElementTable</h2>
    <nav>
      <ul>
        <li><router-link exact to="/Table">展示表格</router-link></li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "sample-header"
};
</script>
<style>
.navigationBar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 20px;
  padding: 0 10px;
  width: 200px;
  border-right: 2px solid #e3e3e3;
}
.navigationBar li {
  margin-bottom: 10px;
}
.navigationBar li a {
  margin-top: 0;
  margin-bottom: 10px;
  cursor: pointer;
  text-decoration: none;
  color: rgb(96, 125, 139);
}
.navigationBar li:hover {
  background-color: #cfd8dc;
}
.navigationBar li:hover a {
  color: rgb(3, 155, 229);
}
.navigationBar li a.router-link-exact-active,
.navigationBar li a.router-link-active {
  color: rgb(3, 155, 229);
}
</style>
