import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import Unocss from "@unocss/postcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // Unocss(),
  ],
  css:{
    postcss:{
      plugins:[
        Unocss()
      ]
    }
  }
});
