<template>
<!-- 11 Bloque para el menu (se puede en un componente)------------------>
<!-- variable global $i18n = poder realizar la modificacion del entorno que 
estamos usando defecto($i18n.locale)-->
<div>
  <!-- 12) ULTIMO: vinculando el entorno local con  v-model="$i18n.locale"-->
  <select v-model="$i18n.locale">
    <!-- listado de forma dinamica ($i18n  incluye todas las informaciones sobre la configuracion)-->
    <!-- $i18n.availableLocales = por cada uno de los idiomas disponibles en nuestro sistema -->
    <!-- la clave seria el contenido local - locale-en , local-es .. etc-->
    <option v-for="locale in $i18n.availableLocales" :key="`locale-$(locale)`" :value="locale">{{ locale }}</option>
  </select>
</div>

<!-- ---------------------------------------- -->

  <!-- 9) implementamos- i18n nos da una variable global  $t("clave")-->
  <!-- Segundo parametro sera el valor de las variables que se espera  -->
  <h1>{{ $t("message.hello", {name:userName, surname:surName})}}</h1>
  <p>{{ $t("message.content") }}</p>  
  <hr>
  <!-- Aplicando el plurales con variables-->
  <p> {{ $t("message.products", {count:3}) }}</p>
  <hr>
  <!-- Aplicando el plurales sin variables (mandarlo como objeto)-->
  <p> {{ $t("message.comments",{count:5}) }}</p>
  
<hr>
<PruebaTraductor />
</template>

<script lang="ts" setup>
import PruebaTraductor from "./components/PruebaTraductor.vue";
//10 para la variable
import { ref } from "vue";
const userName = ref("Yorlin");
const surName = ref("Pachajoa");

</script>

<style scoped>

</style>