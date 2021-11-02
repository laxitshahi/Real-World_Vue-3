<template>
  <div class="events">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'

export default {
  name: 'Home',
  components: {
    EventCard
  },
  created(){
    EventService.getEvents()
    .then(response => {
      this.events = response.data
    })
    .catch(error => {
      console.log(error)
    })
  },
  data() {
    return {
      events:null 
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
