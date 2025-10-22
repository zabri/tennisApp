# 🎾 Tennis Match Organizer - UI/UX Design

## 📱 App Design Overview

### **Design System**
- **Primary Color**: Tennis Green (#2E7D32)
- **Secondary**: Gold (#FFD700) for highlights
- **Background**: Dark theme (#1a1a1a)
- **Text**: White (#FFFFFF)
- **Accent**: Orange (#FFB74D) for player slots

---

## 🎨 Screen Designs

### **1. Splash Screen**
```
┌─────────────────────────┐
│                         │
│      🎾 TENNIS          │
│                         │
│   Match Organizer       │
│                         │
│    [Loading...]         │
│                         │
└─────────────────────────┘
```

**Features:**
- App logo with tennis ball animation
- Loading spinner
- Brand colors (green/gold)
- Auto-navigate to login after 2 seconds

---

### **2. Login Screen**
```
┌─────────────────────────┐
│  🎾 Welcome Back!       │
│                         │
│  [📱] WhatsApp Login    │
│  [🔵] Google Sign-In    │
│  [🍎] Apple Sign-In     │
│  [📧] Email & Password  │
│                         │
│  New User? Sign Up      │
└─────────────────────────┘
```

**Features:**
- Clean, minimal design
- Large, touch-friendly buttons
- Social login options
- Sign-up link for new users

---

### **3. WhatsApp OTP Screen**
```
┌─────────────────────────┐
│  📱 Verify Phone        │
│                         │
│  Enter OTP sent to:     │
│  +30 694 123 4567      │
│                         │
│  [ 6 ] [ 9 ] [ 1 ] [ 2 ]│
│                         │
│  [Resend OTP]           │
│                         │
│  [Verify & Continue]    │
└─────────────────────────┘
```

**Features:**
- 4-digit OTP input
- Auto-focus on input
- Resend option
- Phone number display

---

### **4. Profile Setup Screen**
```
┌─────────────────────────┐
│  👤 Complete Profile    │
│                         │
│  [📷] Add Photo         │
│  Name: [Andrei Z.]      │
│  Phone: [+30 694...]    │
│                         │
│  Skill Level:           │
│  [●] Beginner           │
│  [○] Intermediate       │
│  [○] Advanced           │
│                         │
│  [Continue]             │
└─────────────────────────┘
```

**Features:**
- Photo upload with camera/gallery
- Form validation
- Skill level selection
- Pre-filled phone number

---

### **5. Dashboard Screen**
```
┌─────────────────────────┐
│  👤 Andrei Z.    [⚙️]   │
│  🏆 12 matches played   │
│                         │
│  [📅] Set Availability  │
│  [🔍] Find Matches      │
│  [➕] Create Match      │
│                         │
│  📅 Upcoming:           │
│  • Sat 18:00 - Court 1  │
│  • Mon 20:00 - Court 2  │
│                         │
│  📊 This Month: 8 wins  │
└─────────────────────────┘
```

**Features:**
- User profile card
- Quick action buttons
- Upcoming matches list
- Statistics display

---

### **6. Calendar Screen**
```
┌─────────────────────────┐
│  📅 October 2024   [<]  │
│                         │
│  S  M  T  W  T  F  S    │
│  6  7  8  9 10 11 12    │
│ 13 14 15 16 17 18 19    │
│ 20 21 22 23 24 25 26    │
│ 27 28 29 30 31          │
│                         │
│  🟢 Available           │
│  🔴 Match Scheduled     │
│  ⚪ Not Available       │
│                         │
│  [Set Availability]     │
└─────────────────────────┘
```

**Features:**
- Monthly calendar view
- Color-coded availability
- Match indicators
- Tap to set availability

---

### **7. Availability Setting**
```
┌─────────────────────────┐
│  📅 Oct 20, 2024       │
│                         │
│  Select Time Slots:     │
│                         │
│  [🌅] 08:00-10:00       │
│  [☀️] 10:00-12:00       │
│  [🌞] 14:00-16:00       │
│  [🌆] 16:00-18:00       │
│  [🌙] 18:00-20:00       │
│  [🌃] 20:00-22:00       │
│                         │
│  [Save Availability]    │
└─────────────────────────┘
```

**Features:**
- Time slot selection
- Visual time indicators
- Multiple slot selection
- Save and sync

---

### **8. Match List Screen**
```
┌─────────────────────────┐
│  🎾 Available Matches   │
│                         │
│  📅 Today               │
│  • 18:00-20:00          │
│    Court 1 • 2/4 players│
│    [Join Match]         │
│                         │
│  📅 Tomorrow            │
│  • 16:00-18:00          │
│    Court 2 • 3/4 players│
│    [Join Match]         │
│                         │
│  📅 Saturday            │
│  • 10:00-12:00          │
│    Court 1 • 1/4 players│
│    [Join Match]         │
└─────────────────────────┘
```

**Features:**
- Grouped by date
- Player count display
- Join button for each match
- Filter and search options

---

### **9. Match Detail Screen**
```
┌─────────────────────────┐
│  🎾 Match Details       │
│                         │
│  📅 Oct 20, 2024       │
│  🕐 18:00-20:00         │
│  🏟️ Court 1             │
│                         │
│  👥 Players (2/4):      │
│  [👤] Andrei            │
│  [👤] Maria             │
│  [➕] Empty Slot        │
│  [➕] Empty Slot        │
│                         │
│  🪑 Bench (1):          │
│  [👤] John              │
│                         │
│  [Join Match]           │
└─────────────────────────┘
```

**Features:**
- Match information
- Player list with photos
- Bench queue
- Join/Leave actions

---

### **10. Court View Screen**
```
┌─────────────────────────┐
│  🎾 Live Court View     │
│                         │
│      🏟️ TENNIS COURT    │
│                         │
│  [👤]    [👤]           │
│  Andrei  Maria          │
│                         │
│  [👤]    [👤]           │
│  John    Sarah          │
│                         │
│  🪑 Bench:              │
│  [👤] Nikos             │
│  [👤] Alex              │
│                         │
│  [Leave Court]          │
└─────────────────────────┘
```

**Features:**
- Visual tennis court
- 4 player positions
- Bench queue below
- Real-time updates

---

### **11. Profile Screen**
```
┌─────────────────────────┐
│  👤 Profile             │
│                         │
│  [📷] Andrei Z.         │
│  🏆 Intermediate        │
│  📱 +30 694 123 4567   │
│                         │
│  📊 Statistics:         │
│  • 12 matches played    │
│  • 8 wins, 4 losses     │
│  • 67% win rate         │
│                         │
│  ⚙️ Settings            │
│  📱 Notifications       │
│  🔔 WhatsApp Groups     │
│  🚪 Sign Out            │
└─────────────────────────┘
```

**Features:**
- User information
- Match statistics
- Settings options
- Sign out functionality

---

## 🎨 Design Components

### **Buttons**
- **Primary**: Green background, white text
- **Secondary**: White border, green text
- **Action**: Orange background for important actions

### **Cards**
- Rounded corners (12px)
- Shadow for depth
- Dark background with borders

### **Navigation**
- Bottom tab bar
- Icons for each section
- Active state highlighting

### **Typography**
- **Headers**: Bold, 24px
- **Body**: Regular, 16px
- **Captions**: Light, 14px

---

## 📱 Responsive Design

### **Mobile (Primary)**
- 375px width (iPhone)
- Touch-friendly buttons (44px min)
- Swipe gestures for navigation

### **Tablet (Secondary)**
- 768px width (iPad)
- Larger court visualization
- Side-by-side layouts

---

## 🎯 Key UX Principles

1. **Simplicity**: Clean, uncluttered interface
2. **Speed**: Quick actions, minimal taps
3. **Clarity**: Clear visual hierarchy
4. **Feedback**: Immediate response to actions
5. **Accessibility**: Large touch targets, clear contrast

---

## 🚀 Implementation Notes

- Use React Native components
- Implement dark theme throughout
- Add smooth animations and transitions
- Ensure touch targets are 44px minimum
- Test on multiple screen sizes

This design system provides a complete visual guide for building the Tennis Match Organizer app with a professional, user-friendly interface.
