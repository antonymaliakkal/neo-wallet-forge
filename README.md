# NeoSpan - Digital Pass Manager

A complete Progressive Web App (PWA) for digital pass management and verification using Google technologies and AI.

## 🚀 Features

- **Material 3 Design**: Google Wallet-inspired UI with Material You design system
- **QR Code Scanning**: Upload or scan QR codes to create digital passes
- **AI Processing**: Gemini AI integration for intelligent data extraction
- **Google Wallet Integration**: Create and manage passes in Google Wallet
- **Progressive Web App**: Full PWA with offline support and installability
- **Firebase Backend**: Cloud Functions, Firestore, and Authentication
- **Responsive Design**: Mobile-first approach with smooth animations

## 🏗️ Tech Stack

### Frontend
- **React** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** with custom Material 3 design tokens
- **Framer Motion** for animations
- **Radix UI** components

### Backend & Services
- **Firebase Cloud Functions** (Node.js)
- **Firestore** for database
- **Firebase Auth** with Google Sign-In
- **Google Vertex AI** (Gemini API)
- **Google Wallet API**
- **Firebase Hosting**

### PWA Features
- Service Worker for offline caching
- Web App Manifest for installability
- Background sync capabilities
- Push notifications ready

## 🎨 Design System

The app uses a comprehensive Material 3-inspired design system:

- **Typography**: Google Sans and Roboto font families
- **Colors**: Dynamic color tokens with light/dark theme support
- **Spacing**: Material 3 spacing scale (4px to 64px)
- **Elevation**: 5-level elevation system with custom shadows
- **Animations**: Standard Material Motion easing curves
- **Components**: Custom variants matching Google Wallet aesthetics

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ and npm
- Firebase CLI
- Google Cloud Project with enabled APIs

### Local Development

1. **Clone the repository**:
```bash
git clone <repository-url>
cd neospan
```

2. **Install dependencies**:
```bash
npm install
```

3. **Configure Firebase**:
```bash
# Install Firebase CLI if you haven't already
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase (if not already done)
firebase init
```

4. **Set up environment variables**:
Create a `.env` file with your configuration:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_GOOGLE_WALLET_ISSUER_ID=your_issuer_id
```

5. **Start development server**:
```bash
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🚀 Deployment

### Firebase Hosting

1. **Build the project**:
```bash
npm run build
```

2. **Deploy to Firebase**:
```bash
firebase deploy --only hosting
```

### PWA Deployment

The app is automatically configured as a PWA:

- **Manifest**: `/public/manifest.json` with app metadata
- **Service Worker**: `/public/sw.js` for caching and offline support
- **Icons**: App icons in multiple sizes
- **Installability**: Automatic install prompts

## 📱 PWA Features

### Offline Support
- Core app functionality works offline
- Pass data cached locally
- Background sync for pending operations

### Installation
- Install prompt appears after 3 seconds (dismissible)
- Home screen shortcuts for quick actions
- Standalone app experience

### Performance
- Service Worker caching strategy
- Lazy loading of components
- Optimized bundle splitting

## 🔧 Firebase Setup

### Required Firebase Services

1. **Authentication**
   - Enable Google Sign-In provider
   - Configure authorized domains

2. **Firestore Database**
   - Create collections: `users`, `passes`, `templates`
   - Set up security rules

3. **Cloud Functions**
   - Deploy functions for pass processing
   - Configure Gemini AI integration

4. **Storage** (optional)
   - For pass images and attachments

### Security Rules

Example Firestore rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      
      match /passes/{passId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
  }
}
```

## 🤖 AI Integration

### Gemini API Setup

1. Enable Vertex AI API in Google Cloud Console
2. Create service account with Vertex AI permissions
3. Configure API key in environment variables

### Processing Flow

1. User scans QR code or uploads document
2. Data sent to Gemini API for processing
3. AI extracts structured information
4. Pass created with extracted data
5. Pass added to Google Wallet

## 💳 Google Wallet Integration

### Setup Requirements

1. **Google Pay & Wallet Console**
   - Create issuer account
   - Get issuer ID and API keys

2. **Pass Classes**
   - Define templates for different pass types
   - Configure branding and styling

3. **Service Account**
   - Create service account for API access
   - Download credentials JSON

### Pass Types Supported

- **Event Tickets**: Conferences, concerts, etc.
- **Boarding Passes**: Flights, trains, buses
- **Loyalty Cards**: Rewards programs
- **Generic Passes**: Custom use cases

## 📊 Analytics & Monitoring

- Firebase Analytics for user behavior
- Performance monitoring with Lighthouse
- Error tracking with Firebase Crashlytics
- Custom events for pass creation and usage

## 🔒 Security & Privacy

- Firebase Auth for user authentication
- Secure API key management
- Data encryption at rest and in transit
- GDPR compliance ready
- Privacy-first data handling

## 🧪 Testing

```bash
# Run all tests
npm test

# Run specific test suites
npm run test:unit
npm run test:e2e
npm run test:pwa
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Contact the development team

---

**Note**: This is a complete proof of concept demonstrating Google technology integration. For production use, ensure all API keys are properly secured and all Google services are correctly configured.
