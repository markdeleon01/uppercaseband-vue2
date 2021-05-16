<template>
  <div class="home">
    <h1>U P P E R C A S E</h1>
    <hr width="50%" align="center" />
    <h2>Welcome to the Official Website!</h2>
    <p class="band-logo">
      <img src="UPPERCASE logo.png" />
    </p>
    <p class="page-content">
      UPPERCASE is a Filipino-Canadian indie pop rock band from Toronto, Canada
      pursuing Original Pilipino Music (OPM)
    </p>
    <p>
      Check out the band's music on
      <a
        href="https://open.spotify.com/artist/6h4pjpssOa3fBNiQmSkgOB"
        target="blank"
        >Spotify</a
      >!
    </p>
    <p>
      Follow the band on
      <a href="https://www.instagram.com/ang.bandang.uppercase/" target="blank"
        >Instagram</a
      >!
    </p>
    <p>
      Like and Share on
      <a href="https://www.facebook.com/ang.bandang.uppercase/" target="blank"
        >Facebook</a
      >!
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: 'Home',
  components: {
    //HelloWorld,
  }
}
</script>

<style>
.band-logo img {
  width: 450px;
  height: 300px;
}
.page-content {
  padding-top: 25px;
  padding-left: 120px;
  padding-right: 120px;
  padding-bottom: 25px;
}
</style>
