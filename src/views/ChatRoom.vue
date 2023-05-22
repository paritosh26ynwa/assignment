<template>
    <div class="chat-room">
      <conversation-area></conversation-area>
    </div>
</template>

<script>
import ConversationArea from '@/components/ConversationArea.vue';

export default {
  name: 'ChatRoom',
  components: {
    ConversationArea,
  },
};
</script>

<style lang="scss" scoped>
.chat-room {
  width: 500px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  background-color: #FFFFFF;
  border-radius: 22px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}
</style>
