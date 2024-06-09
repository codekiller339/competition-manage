import { createPinia } from "pinia"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export { useCompInfoStore } from "./modules/useCompInfoStore"
export { user } from "./modules/user"

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia