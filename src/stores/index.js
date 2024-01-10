import { createPinia } from "pinia"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { useCompInfoStore } from "./modules/useCompInfoStore"

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export { useCompInfoStore }
export default pinia