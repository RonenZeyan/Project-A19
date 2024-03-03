import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'usersTable.html'),
        userMissions: resolve(__dirname, 'userMissons.html'),
        neMissions: resolve(__dirname, 'UserAcNewMission.html'),
        existingMission: resolve(__dirname, 'UserAcExistingMission.html'),
        missionTable: resolve(__dirname, 'missionstable.html')
        
      },
    },
  },
})
