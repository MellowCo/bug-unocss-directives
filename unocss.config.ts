import { defineConfig, presetUno, transformerDirectives } from "unocss";

export default defineConfig(
  {
    presets: [
      presetUno(),
    ],
    theme:{
      // 解决小程序不支持 * 选择器
      preflightRoot: ["page,::before,::after"]
    },
    transformers:[
      transformerDirectives()
    ]
  }
)
