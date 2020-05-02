<template>
  <div>
    <div id="slogan" class="text-center">
      <h1>NameGator</h1>
      <h6 class="text-secundary">gerador de nome com vue.js, node e graphiql</h6>
    </div>

    <div id="main">
      <DomainList></DomainList>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import DomainList from "./components/DomainList";

export default {
	name: "app",
	components: {
		DomainList
	},
};
</script>

<style>
#slogan {
  margin-bottom: 30px;
  margin-top: 30px;
}
#main {
  background: #f1f1f1;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
