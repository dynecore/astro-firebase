import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyAMCtrNtfF5Lo7fp8Rbk4567KnHfkx6QNo',
  authDomain: 'astro-lampa.firebaseapp.com',
  projectId: 'astro-lampa',
  storageBucket: 'astro-lampa.appspot.com',
  messagingSenderId: '830992071455',
  appId: '1:830992071455:web:cd28b5ec502e0f14004e2a'
}

export const app = initializeApp(firebaseConfig)
