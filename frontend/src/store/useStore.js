'use client'

import { create } from 'zustand'

const defaultRider = {
  weight: 70,
  niveau: [],
  pratique: [],
  typeDeVelo: [],
  ressenti: [],
  surface: [],
  conditions: [],
}

export const useStore = create((set) => ({
  panelOpen: false,
  panelStartQuiz: false,
  activePattern: 'slick',
  activeTireModel: 'road-pro',
  activeColor: '#1a1a1a',
  patterns: [],
  colors: [],
  rider: { ...defaultRider },

  togglePanel: () => set((s) => ({ panelOpen: !s.panelOpen })),
  openPanel: () => set({ panelOpen: true }),
  closePanel: () => set({ panelOpen: false }),
  openPanelWithQuiz: () => set({ panelOpen: true, panelStartQuiz: true }),
  consumePanelStartQuiz: () => set({ panelStartQuiz: false }),

  setPatterns: (patterns) => set({ patterns }),
  setColors: (colors) => set({ colors }),

  setActivePattern: (id) => set({ activePattern: id }),
  setActiveTireModel: (id) => set({ activeTireModel: id }),
  setActiveColor: (color) => set({ activeColor: color }),

  toggleRider: (section, value) =>
    set((s) => ({
      rider: {
        ...s.rider,
        [section]: s.rider[section].includes(value)
          ? s.rider[section].filter((v) => v !== value)
          : [...s.rider[section], value],
      },
    })),

  setRiderWeight: (w) =>
    set((s) => ({ rider: { ...s.rider, weight: w } })),

  resetRider: () => set({ rider: { ...defaultRider } }),
}))
