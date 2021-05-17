<template>
  <p>
    <span class="event-title">{{ event.title }}</span
    ><br />
    <span class="event-date">{{ formattedDate }}</span
    ><br />
    <span class="event-location">{{ event.location }}</span
    ><br />
    <span class="event-content" v-html="event.content"></span>
    <a class="event-url" :href="event.externalUrl" target="_blank"
      >Learn more</a
    >
  </p>
</template>

<script>
import { dateFormatMixin } from '../mixins/dateFormatMixin.js'

export default {
  props: {
    event: Object
  },
  mixins: [dateFormatMixin],
  computed: {
    formattedDate() {
      return this.formatDate(this.event.date)
    }
  }
}
</script>

<style scoped>
.event-title {
  font-weight: bold;
}
</style>
