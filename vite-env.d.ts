///<reference types="vite/client" />

declare module '*.vue' {
  import { defineComponent } from 'vue'

  const comp: ReturnType<typeof defineComponent>

  export default comp
}

