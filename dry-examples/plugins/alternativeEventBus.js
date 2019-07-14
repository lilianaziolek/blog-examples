import Vue from 'vue'

const alternativeEventBus = new Vue();
//this is just for autocompletion in WebStorm
Vue.prototype.$alternativeEventBus = alternativeEventBus;

export default ({app}, inject) => {
  console.log("(AlternativeEventBus Plugin) SSR: " + process.server + " inject component with id: " + alternativeEventBus._uid);
  inject('alternativeEventBus', alternativeEventBus);
}
