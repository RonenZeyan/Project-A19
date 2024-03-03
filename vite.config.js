import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'usersTable.html'),
        nested: resolve(__dirname, 'userMissons.html'),
        nested: resolve(__dirname, 'UserAcNewMission.html'),
        nested: resolve(__dirname, 'UserAcExistingMission.html'),
        nested: resolve(__dirname, 'missionstable.html'),
      },
    },
  },
})