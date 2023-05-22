<template>
  <div class="message-wrapper" :class="{'is-right-aligned' : user.id === message.from.id}">
    <div class="thumbnail">
      <img :src="message.from.thumbnail" alt="thumbnail">
    </div>
    <div class="message" :class="{'is-right-aligned' : user.id === message.from.id}">
      <p v-text="message.message"></p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MessageComponent',
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(['user']),
  },
};
</script>

<style lang="scss" scoped>
.message-wrapper {
  max-width: 60%;
  display: flex;
  align-items: center;
  flex-direction: row;
  float: left;
  .message {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.2px;
    border-radius: 8px;
    padding: 8px;
    margin: 15px 0;
    background-color: #F0F2FF;
    color: #4F546E;
    &.is-right-aligned {
      background-color: #4D6AFF;
      color: #FFFFFF;
    }
  }
  .thumbnail {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin: 0 12px;
    img {
      max-width: 48px;
      border-radius: 50%;
    }
  }
  &.is-right-aligned {
    flex-direction: row-reverse;
    float: right;
  }
}
</style>
