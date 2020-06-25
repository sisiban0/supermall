import Toast from './toast'
export default {
  install(vue){
    const toast = new (vue.extend(Toast));

    toast.$mount(document.createElement('div'));

    document.body.appendChild(toast.$el);

    vue.prototype.$toast = toast;
  }
}