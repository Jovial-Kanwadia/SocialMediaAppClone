## About This Project

A streamlined social media application built with React, Appwrite, TypeScript, and Tailwind CSS—now packaged as native Android and iOS mobile apps using Capacitor and Ionic.

---

## Mobile Conversion Overview

This guide explains how to transform the existing React web app into Android and iOS applications using Capacitor and Ionic.

### Prerequisites

- Node.js (v14+)
- npm or Yarn
- Android Studio (for Android builds)
- Xcode (for iOS builds, macOS only)
- Ionic CLI (`npm install -g @ionic/cli`)
- Capacitor CLI (`npm install @capacitor/cli @capacitor/core`)

---

## 1. Install Capacitor in the React Project

```bash
# From the project root
yarn add @capacitor/core @capacitor/cli
# or
npm install @capacitor/core @capacitor/cli

# Initialize Capacitor
npx cap init social-mobile "com.yourcompany.socialmobile"
```

This creates a `capacitor.config.ts` (or `.json`) file.

---

## 2. Integrate Ionic (Optional UI Enhancements)

```bash
# Add Ionic React components
yarn add @ionic/react @ionic/react-router
# or
npm install @ionic/react @ionic/react-router
```

Wrap your top-level component in `<IonApp>` and use Ionic UI components (e.g., `IonHeader`, `IonContent`) as needed to match native styling.

---

## 3. Configure Web Build Output

Edit `capacitor.config.ts` to point Capacitor at your web build:

```ts
webDir: 'build',
bundledWebRuntime: false,
```

Then build the React app:

```bash
npm run build
```

---

## 4. Add Android and iOS Platforms

```bash
# Android
yarn cap add android
# iOS (macOS only)
yarn cap add ios
```

Capacitor creates `android/` and `ios/` directories with native projects.

---

## 5. Sync Assets and Plugins

After any web build or plugin installation, run:

```bash
yarn cap copy
```

To update native projects with the latest web build.

---

## 6. Open and Run in Native IDEs

### Android

```bash
npx cap open android
```

- Builds and deploys via Android Studio to an emulator or device.
- Generate signed APK in **Build > Generate Signed Bundle/APK**.

### iOS

```bash
npx cap open ios
```

- Opens Xcode workspace; configure signing and run on simulator or real device.
- Archive for App Store in **Product > Archive**.

---

## 7. Testing and Debugging

- Live reload: use `ionic cap run android -l --external` or `ionic cap run ios -l --external`.
- Inspect native logs with `adb logcat` (Android) or Xcode console (iOS).

---

## 8. Deployment

- Android: Publish **.aab** or **.apk** on Google Play Console.
- iOS: Submit **.ipa** via App Store Connect.
