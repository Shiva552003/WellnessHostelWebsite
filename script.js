const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'Welcome to Vue 3',
            message: 'This is a basic Vue 3 website using CDN.'
        }
    },
    methods: {
        changeMessage() {
            this.message = 'The message has been changed!'
        }
    }
}).mount('#app')