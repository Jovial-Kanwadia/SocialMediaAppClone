import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'snapgram',
  webDir: 'dist',
  plugins: {
    App: {
      appUrlOpen: {
        scheme: 'myapp'
      }
    }
  }
};

export default config;
