# 🎾 Tennis Match Organiser App

A mobile app that helps friends **organise tennis matches effortlessly** — choose your availability, join or create a match, and see who’s playing on a visual court.
The app integrates with **WhatsApp** to send real-time notifications for every match update.

---

## 📱 Overview

The Tennis Match Organiser simplifies how tennis players coordinate games.
Users can:

* Select the **days and times** they’re available to play.
* **Join** or **create** a match.
* See their **photo and name** appear on a virtual tennis court (up to 4 players).
* Join a **bench** if the court is full.
* Get automatic **WhatsApp updates** when new matches or cancellations occur.

---

## 🚀 Features

* 🗓 **Calendar-based availability selection** (with highlighted match dates)
* 🕒 **Time-slot creation** for each match
* 🧍‍♂️ **Visual tennis court** showing players in real-time
* 👟 **Bench system** for extra players (auto-promotion when a spot opens)
* 📲 **WhatsApp integration** for instant group notifications
* 🔔 **Push reminders** before matches (24h & 2h)
* 🔐 **Multiple login options:**

  * WhatsApp phone number (with OTP verification)
  * Google Sign-In
  * Apple ID
  * Email + Password
* 🧩 **Dynamic updates:** join, cancel, or rejoin matches seamlessly
* ⭐ **Optional post-match feedback**

---

## 🧭 User Flow

1. **Register / Sign In**
   Choose between WhatsApp, Google, Apple, or Email login.

2. **Set Availability**
   Pick the days and times you can play — highlighted on the calendar.

3. **Create or Join a Match**

   * If no match exists for your selected day/time → one is created.
   * If a match exists → join it (up to 4 players).

4. **Bench System**
   If full, join the bench to wait for a free spot.

5. **Notifications**
   WhatsApp group messages & push reminders keep everyone informed.

6. **Cancel Anytime**
   Free your spot; the first bench player takes over automatically.

7. **Play & Rate**
   Meet on court and optionally confirm attendance or rate the match.

---

## 🧩 Tech Stack

| Layer               | Technology                                                       |
| ------------------- | ---------------------------------------------------------------- |
| **Frontend**        | React Native (Expo or CLI)                                       |
| **Backend**         | Node.js / Express                                                |
| **Database**        | Firebase Firestore or Supabase                                   |
| **Authentication**  | Firebase Auth (Email, Google, Apple) + WhatsApp verification API |
| **Notifications**   | Firebase Cloud Messaging + WhatsApp Business API                 |
| **Hosting**         | Vercel / Firebase Hosting / AWS Amplify                          |
| **Version Control** | Git + GitHub                                                     |

---

## ⚙️ Installation (Development Setup)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/tennis-match-organizer.git
cd tennis-match-organizer
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```
FIREBASE_API_KEY=your_api_key
FIREBASE_PROJECT_ID=your_project_id
WHATSAPP_API_KEY=your_whatsapp_business_api_key
GOOGLE_CLIENT_ID=your_google_client_id
APPLE_SERVICE_ID=your_apple_service_id
```

### 4. Run the App

```bash
npx expo start
# or for direct build:
npm run android
npm run ios
```

---

## 🔌 API Integration (WhatsApp Notifications)

Every major user action triggers a WhatsApp group message via the **WhatsApp Cloud API** or Twilio’s WhatsApp API.

**Example Workflow:**

* Match created →
  `"🎾 New match created for Saturday at 17:00"`
* Player joins →
  `"✅ Andrei joined the court"`
* Player cancels →
  `"🚫 Maria canceled her spot — 1 spot open!"`

> Optional: Admin can configure the group phone number or invite link from the settings page.

---

## 🧱 Folder Structure (Recommended)

```
tennis-match-organizer/
├── src/
│   ├── components/
│   │   ├── CourtView.tsx
│   │   ├── BenchView.tsx
│   │   └── CalendarView.tsx
│   ├── screens/
│   │   ├── LoginScreen.tsx
│   │   ├── CalendarScreen.tsx
│   │   ├── MatchScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── services/
│   │   ├── whatsappService.ts
│   │   ├── firebaseService.ts
│   │   └── notificationService.ts
│   └── utils/
│       └── helpers.ts
├── assets/
├── .env
├── package.json
└── README.md
```

---

## 📸 Screens (Concept)

* **Login / Signup Screen** → Multiple login options
* **Calendar Screen** → Highlighted days with matches
* **Court View** → Player photos on a visual court
* **Bench Area** → Waitlist below court
* **Match Updates** → WhatsApp group & push notifications

---

## 🧪 Future Enhancements

* 🏆 Match statistics & history
* 🗺 Court location map integration
* 👥 Private group management (invite-only)
* 💬 In-app chat
* 📊 Player rankings or streaks

---

## 🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss what you’d like to modify.

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

Would you like me to generate a **short version of this README** (like a 1-page summary for the GitHub main view), or keep expanding this one with **more developer setup details** (Firebase setup, WhatsApp API keys, etc.)?
