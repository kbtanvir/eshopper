import { createStore, withDevTools } from "@poly-state/core"
import { useStore } from "@poly-state/react"

// import { demoTM } from '../data/demo'

export type GlobalStore = {
  inStock: boolean
  totalProducts: number
}

export const initialStore: GlobalStore = {
  inStock: false,
  totalProducts: 0,
}

export const globalStore = createStore(initialStore)

export const useGlobalStore = () => useStore<GlobalStore>(globalStore)

if (process.env.NODE_ENV === "development") {
  withDevTools(globalStore, "GOBAL_STORE")
}