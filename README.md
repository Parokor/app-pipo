# PsyConnect Pro

## Project Overview

PsyConnect Pro is a multiplatform teletherapy application designed for EU psychologists. The app leverages AI matching to connect therapists with patients and ensures strict compliance with GDPR, ISO 27001, and HIPAA standards. The application supports real-time teletherapy sessions using WebRTC and Daily.co, providing a secure and efficient platform for mental health services.

## Features

- **AI Matching**: Intelligent matching system to connect therapists with patients based on various parameters.
- **Real-Time Teletherapy**: Secure video sessions using WebRTC and Daily.co.
- **Multiplatform Support**: Available on Android, iOS, and Web.
- **Compliance**: Adheres to GDPR, ISO 27001, and HIPAA standards.
- **Performance**: Optimized for 60fps performance.
- **Customizable**: Easy to customize with logos, icons, and other branding elements.

## Technical Stack

- **Frontend**: React Native (Expo)
- **Backend**: Supabase
- **Real-Time Communication**: WebRTC, Daily.co
- **AI**: TensorFlow Lite
- **Language**: TypeScript
- **Build Tool**: Vite
- **Database**: Supabase (PostgreSQL)
- **Compliance**: GDPR, ISO 27001, HIPAA

## Compliance Requirements

- **GDPR**: Data protection and privacy regulations for EU citizens.
- **ISO 27001**: Information security management standards.
- **HIPAA**: Healthcare data protection standards.
- **EU Data Residency**: Data storage and transfer compliance within the EU.

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn
- Expo CLI
- Supabase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/psyconnect-pro.git
   cd psyconnect-pro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Supabase:
   - Create a new project on Supabase.
   - Obtain the API URL and API key.
   - Create a `.env` file in the root directory and add the following:
     ```env
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Development Guidelines

### Building for Different Platforms

#### Android

1. Ensure you have an Android emulator running or a physical device connected.
2. Build the Android app:
   ```bash
   expo build:android
   ```
3. Run the Android app:
   ```bash
   expo start --android
   ```

#### iOS

1. Ensure you have an iOS simulator running or a physical device connected.
2. Build the iOS app:
   ```bash
   expo build:ios
   ```
3. Run the iOS app:
   ```bash
   expo start --ios
   ```

#### Web

1. Start the web server:
   ```bash
   npm run dev
   ```
2. Open the application in your browser at `http://localhost:3000`.

### Running Tests

- Run unit tests:
  ```bash
  npm test
  ```

- Run end-to-end tests:
  ```bash
  npm run e2e
  ```

## Customization

### Adding Custom Images, Logos, Icons, and Favicons

#### Images and Logos

1. Place your custom images and logos in the `assets/images` directory.
2. Update the `App.tsx` file to reference the new images:
   ```tsx
   import logo from './assets/images/logo.png';

   const App = () => {
     return (
       <Image source={logo} style={{ width: 100, height: 100 }} />
     );
   };
   ```

#### Icons

1. Place your custom icons in the `assets/icons` directory.
2. Update the `App.tsx` file to reference the new icons:
   ```tsx
   import icon from './assets/icons/icon.png';

   const App = () => {
     return (
       <Image source={icon} style={{ width: 50, height: 50 }} />
     );
   };
   ```

#### Favicons

1. Place your favicon in the `public` directory.
2. Update the `index.html` file to reference the new favicon:
   ```html
   <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
   ```

## Performance Optimization

- Ensure that the application runs at 60fps by optimizing animations and rendering.
- Use performance profiling tools to identify and address bottlenecks.
- Follow best practices for React Native performance optimization.

## Compliance and Security

- Ensure that all data is encrypted both in transit and at rest.
- Implement strict access controls and authentication mechanisms.
- Regularly conduct security audits and penetration testing.

## Contributing

We welcome contributions from the community. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with a descriptive message.
4. Push your changes to your fork.
5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or support, please contact us at [support@psyconnectpro.com](mailto:support@psyconnectpro.com).
