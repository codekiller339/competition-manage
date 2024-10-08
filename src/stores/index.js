import { createPinia } from "pinia"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export { useCompInfoStore } from "./modules/useCompInfoStore"
export { useUserStore } from "./modules/useUserStore"

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia