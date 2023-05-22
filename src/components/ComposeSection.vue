<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="compose-section">
    <textarea v-model="newMessage" @keydown.enter="onSend" />
    <button @click="onSend" :disabled="newMessage === ''">Send</button>
  </div>
</template>

<script>
export default {
  name: 'ComposeSection',
  props: {
    value: {
      type: String,
    },
  },
  data() {
    return {
      newMessage: '',
    };
  },
  methods: {
    onInput(event) {
      this.newMessage = event.target.value;
    },
    onSend() {
      if (this.newMessage) {
        this.$emit('submit', this.newMessage);
        this.newMessage = '';
      }
    },
  },
  beforeMount() {
    this.newMessage = this.value;
  },
};
</script>

<style lang="scss" scoped>
.compose-section {
  width: 100%;
  display: flex;
  align-items: center;
  textarea {
    height: 50px;
    width: 80%;
    border: 1px solid #A0A5BD;
    background-color: #FFFFFF;
    color: #A0A5BD;
    border-radius: 6px;
    justify-content: space-between;
  }
  button {
    height: 50px;
    width: 20%;
    margin: 0;
    background-color: #4D6AFF;
    color: #FFFFFF;
    border: 1px solid #4D6AFF;
    cursor: pointer;
  }
}
</style>
