import Vue from 'vue'

const eventBusClient = new Vue();
//this is just for autocompletion in WebStorm
Vue.prototype.$eventBus = eventBusClient;

export default ({app}, inject) => {
  console.log("(EventBus Plugin) SSR: " + process.server + " inject component with id: " + eventBusClient._uid);
  inject('eventBus', eventBusClient);
}
