import { createSSRApp } from "vue";
import App from "./App.vue";
// import 'uno.css'
import './style.css'

export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
