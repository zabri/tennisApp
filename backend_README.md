Perfect 👌 — here’s a complete **backend-focused README** for your **Node.js / Express API** that powers the *Tennis Match Organizer* app.
It includes routes, payloads, WhatsApp webhook details, and developer setup instructions so your frontend team can easily connect to it.

---

# 🧩 Tennis Match Organizer — Backend API

This backend powers the **Tennis Match Organizer App**, managing matches, users, and WhatsApp notifications.
It provides a lightweight REST API built with **Node.js + Express**, and integrates with **Firebase Firestore** and **WhatsApp Cloud API**.

---

## ⚙️ Overview

**Responsibilities:**

* Manage user and match data
* Trigger WhatsApp notifications for match updates
* Handle authentication (Firebase tokens)
* Sync match events between users and the mobile app

---

## 🧱 Architecture

```
Frontend (React Native)
        ↓
   REST API (Express)
        ↓
Firebase Firestore  ←→  WhatsApp Cloud API
```

---

## 🧠 Core Features

| Feature                    | Description                                   |
| -------------------------- | --------------------------------------------- |
| **User Management**        | Create and sync users with Firebase           |
| **Match Management**       | Create, join, cancel, or delete matches       |
| **Bench System**           | Manage overflow players with auto-promotion   |
| **WhatsApp Notifications** | Automated group messages for match events     |
| **Reminders**              | Scheduled notifications (via cron job or FCM) |

---

## 🧩 Tech Stack

| Layer                    | Technology               |
| ------------------------ | ------------------------ |
| **Runtime**              | Node.js 18+              |
| **Framework**            | Express.js               |
| **Database**             | Firebase Firestore       |
| **Messaging**            | WhatsApp Cloud API       |
| **Auth**                 | Firebase Admin SDK       |
| **Notifications**        | Firebase Cloud Messaging |
| **Scheduler (optional)** | node-cron                |

---

## 🚀 Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/tennis-match-organizer-backend.git
cd tennis-match-organizer-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory:

```bash
# Firebase Admin SDK
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nABC...\n-----END PRIVATE KEY-----\n"

# WhatsApp Cloud API
WHATSAPP_API_URL=https://graph.facebook.com/v17.0/your_phone_number_id/messages
WHATSAPP_ACCESS_TOKEN=your_meta_access_token
WHATSAPP_GROUP_ID=your_group_id_or_phone_number

# General
PORT=3000
```

> ⚠️ Make sure to wrap your private key in quotes and replace newlines with `\n`.

---

## 🧱 Folder Structure

```
backend/
├── server.js
├── routes/
│   ├── users.js
│   ├── matches.js
│   └── whatsapp.js
├── controllers/
│   ├── userController.js
│   ├── matchController.js
│   └── whatsappController.js
├── services/
│   ├── firebaseService.js
│   └── whatsappService.js
├── utils/
│   └── messageTemplates.js
├── package.json
└── .env
```

---

## 🔌 API Endpoints

### **1️⃣ Users**

#### ➤ Register / Sync User

**POST** `/api/users/register`

```json
{
  "uid": "firebase_user_id",
  "name": "Andrei",
  "photoURL": "https://example.com/photo.jpg",
  "whatsappNumber": "+306941234567"
}
```

**Response:**

```json
{ "message": "User registered successfully", "userId": "uid" }
```

#### ➤ Get User

**GET** `/api/users/:uid`

---

### **2️⃣ Matches**

#### ➤ Create Match

**POST** `/api/matches`

```json
{
  "date": "2025-10-20",
  "time": "18:00-20:00",
  "creatorId": "uid",
  "courtId": "court_1"
}
```

**Response:**

```json
{
  "message": "Match created successfully",
  "matchId": "abc123"
}
```

✅ Automatically sends a WhatsApp message:

> 🎾 New match created for 20 Oct, 18:00–20:00.

---

#### ➤ Join Match

**POST** `/api/matches/join`

```json
{
  "matchId": "abc123",
  "userId": "uid"
}
```

**Response:**

```json
{ "message": "User joined the court", "status": "on_court" }
```

✅ WhatsApp Notification:

> ✅ Andrei joined the court.

---

#### ➤ Join Bench

**POST** `/api/matches/bench`

```json
{
  "matchId": "abc123",
  "userId": "uid"
}
```

**Response:**

```json
{ "message": "User added to bench", "status": "bench" }
```

✅ WhatsApp Notification:

> 🪑 Maria joined the bench (waiting list).

---

#### ➤ Cancel Match Participation

**POST** `/api/matches/cancel`

```json
{
  "matchId": "abc123",
  "userId": "uid"
}
```

**Response:**

```json
{ "message": "User removed from match", "status": "canceled" }
```

✅ WhatsApp Notification:

> 🚫 Nikos canceled his spot — 1 open slot available!

If there’s a user on the bench → automatically promotes them to the court and sends:

> 👟 John moved from bench to court!

---

#### ➤ Get All Matches

**GET** `/api/matches`

Returns all matches, players, and bench info.

---

### **3️⃣ WhatsApp Webhooks**

#### ➤ Inbound Webhook

**POST** `/api/whatsapp/webhook`

Used by Meta to deliver message status updates (optional).

Example payload:

```json
{
  "entry": [
    {
      "changes": [
        {
          "value": {
            "statuses": [
              { "status": "delivered", "id": "wamid.HBgM..." }
            ]
          }
        }
      ]
    }
  ]
}
```

#### ➤ Outbound (Automatic Notifications)

Triggered by match events (join, cancel, etc.) through:

```js
POST https://graph.facebook.com/v17.0/{phone_number_id}/messages
```

**Body Example:**

```json
{
  "messaging_product": "whatsapp",
  "to": "group_or_phone_id",
  "type": "text",
  "text": { "body": "🎾 New match created for Saturday at 17:00!" }
}
```

---

## 🧠 Service Layer Example

### whatsappService.js

```js
import axios from "axios";

export async function sendWhatsAppMessage(message) {
  try {
    await axios.post(process.env.WHATSAPP_API_URL, {
      messaging_product: "whatsapp",
      to: process.env.WHATSAPP_GROUP_ID,
      type: "text",
      text: { body: message },
    }, {
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("Failed to send WhatsApp message:", err.message);
  }
}
```

---

## 🔔 Scheduled Notifications (Optional)

Use **node-cron** to send reminders:

```js
import cron from "node-cron";
import { sendWhatsAppMessage } from "./services/whatsappService.js";
import { getUpcomingMatches } from "./services/firebaseService.js";

cron.schedule("0 */2 * * *", async () => {
  const matches = await getUpcomingMatches(24); // 24 hours ahead
  matches.forEach(m => sendWhatsAppMessage(`Reminder: 🎾 Match at ${m.time} tomorrow!`));
});
```

---

## 🧪 Testing

Run backend tests using **Jest**:

```bash
npm run test
```

You can mock Firebase and WhatsApp responses using:

* `firebase-mock`
* `nock` (HTTP mocks for axios)

---

## 🌐 Deployment

1. **Vercel / Render / Cloud Run**

   * Deploy directly from GitHub.
   * Add `.env` variables to the platform.
2. **Firebase Functions (optional)**

   * Wrap Express app and deploy as a Firebase function.

```js
import * as functions from "firebase-functions";
import app from "./server.js";

export const api = functions.https.onRequest(app);
```

---

## 🧩 Example Firestore Structure

```
matches/
  matchId1/
    date: "2025-10-21"
    time: "18:00-20:00"
    courtId: "court_1"
    players: ["uid1", "uid2"]
    bench: ["uid3"]
    status: "active"

users/
  uid1/
    name: "Andrei"
    whatsappNumber: "+306941234567"
```

---

## 🧱 Future Improvements

* ✅ Match history & analytics
* 🕐 Custom time slots & recurring matches
* 🧍 Bench prioritization system
* 💬 Two-way WhatsApp replies (e.g., “Join” via message)

---

## 👥 Contributors

| Name               | Role                   |
| ------------------ | ---------------------- |
| Andrei Z.          | Product Lead / Founder |
| [Backend Dev Name] | Backend Engineer       |
| [Mobile Dev Name]  | Frontend Developer     |

---

## 📜 License

Licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

Would you like me to also generate an **OpenAPI (Swagger) spec** for these endpoints?
That would make it easier to share your backend documentation with mobile developers or deploy it to Swagger UI for interactive testing.
