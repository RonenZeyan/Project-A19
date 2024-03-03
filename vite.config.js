import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: [ 
        resolve(__dirname, 'usersTable.html'),
        resolve(__dirname, 'userMissons.html'),
        resolve(__dirname, 'UserAcNewMission.html'),
        resolve(__dirname, 'UserAcExistingMission.html'),
        resolve(__dirname, 'missionstable.html')
        ]
      },
    },
  },
})