<template>
  <v-app>
    <v-app-bar app color="yellow darken-2" dark>
      <div class="d-flex align-center">
        <v-toolbar-title>Code with SJ</v-toolbar-title>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>