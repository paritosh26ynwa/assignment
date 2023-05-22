<template>
  <div class="conversation-area">
    <template v-for="message in messages">
      <message :key="message.id" :message="message"></message>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Message from './Message.vue';

export default {
  name: 'ConversationArea',
  components: {
    Message,
  },
  computed: {
    ...mapState(['user', 'messages']),
  },
};
</script>

<style lang="scss" scoped>
.conversation-area {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
}
</style>
