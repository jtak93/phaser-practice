export default {
  gameWidth: 600,
  gameHeight: 650,
  localStorageName: 'phaserGame',
  api: {
    baseURL: process.env.API_URL || 'http://localhost:4000'
  }
}
