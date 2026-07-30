# Activity Image Management System

This directory (`public/activity-images/`) is the central storage location for all official images and photo galleries across the **Swami Vivekanand College of Pharmacy (SVCP)** Activities module.

---

## 📁 Directory Architecture Overview

The structure is organized strictly by **Category → Activity Slug → Image Type**:

```text
public/activity-images/
├── [category-folder]/
│   ├── _category/
│   │   └── [category-slug]-cover.jpg
│   │
│   └── [activity-slug]/
│       ├── listing/
│       │   └── cover.jpg        ← Used on Category Cards & Activity Cards
│       │
│       └── detail/
│           ├── hero.jpg         ← Main banner image on Detail page
│           └── gallery/
│               ├── 01.jpg       ← Gallery image 1
│               ├── 02.jpg       ← Gallery image 2
│               └── 03.jpg       ← Gallery image 3
```

---

## 🎯 Image Placements & File Naming Conventions

### 1. Category Cover Images
- **Location:** `public/activity-images/[category-folder]/_category/`
- **File Name:** `[category-slug]-cover.jpg` (or `.png` / `.webp`)
- **Usage:** Main hero image displayed on category landing pages.

### 2. Activity Listing / Card Cover (`listing/`)
- **Location:** `public/activity-images/[category-folder]/[activity-slug]/listing/`
- **File Name:** `cover.jpg` (or `cover.png` / `cover.webp`)
- **Usage:** Displayed on activity grid cards on the main activities page and category pages.

### 3. Activity Detail Hero Image (`detail/`)
- **Location:** `public/activity-images/[category-folder]/[activity-slug]/detail/`
- **File Name:** `hero.jpg` (or `hero.png` / `hero.webp`)
- **Usage:** Main large featured banner at the top of an individual activity detail page.

### 4. Activity Gallery Photos (`detail/gallery/`)
- **Location:** `public/activity-images/[category-folder]/[activity-slug]/detail/gallery/`
- **File Names:** `01.jpg`, `02.jpg`, `03.jpg`, `04.jpg`, etc.
- **Usage:** Displayed in the interactive lightbox grid under the "Photo Gallery" section on the activity detail page.

---

## 🗺️ Complete Activity-to-Folder Mapping Reference

Simply copy-paste your official department photos into the matching folder path listed below:

### 🎭 1. Cultural Activities (`cultural-activities/`)
- **Category Cover:** `public/activity-images/cultural-activities/_category/cultural-activities-cover.jpg`
- **Activities:**
  - **Spontaina & Youth Festival:** `public/activity-images/cultural-activities/spontaina-youth-festival/`
  - **National Festival Celebrations:** `public/activity-images/cultural-activities/national-festival-celebrations/`
  - **Diwali Celebration:** `public/activity-images/cultural-activities/diwali-celebration/`
  - **Holi Celebration:** `public/activity-images/cultural-activities/holi-celebration/`
  - **Lohri Celebration:** `public/activity-images/cultural-activities/lohri-celebration/`
  - **Baisakhi Celebration:** `public/activity-images/cultural-activities/baisakhi-celebration/`
  - **International Women's Day Celebration:** `public/activity-images/cultural-activities/international-womens-day-celebration/`
  - **Garba Night:** `public/activity-images/cultural-activities/garba-night/`
  - **Talent Hunt:** `public/activity-images/cultural-activities/talent-hunt/`
  - **Open Mic:** `public/activity-images/cultural-activities/open-mic/`
  - **Fashion Show:** `public/activity-images/cultural-activities/fashion-show/`
  - **Freshers Party:** `public/activity-images/cultural-activities/freshers-party/`
  - **Farewell Party:** `public/activity-images/cultural-activities/farewell-party/`

---

### 📚 2. Curricular & Co-curricular Activities (`curricular/`)
- **Category Cover:** `public/activity-images/curricular/_category/curricular-cover.jpg`
- **Activities:**
  - **Problem-Solution Fit Session:** `public/activity-images/curricular/problem-solution-fit-session/`
  - **Design Thinking Workshop:** `public/activity-images/curricular/design-thinking-workshop/`
  - **Critical Thinking Workshop:** `public/activity-images/curricular/critical-thinking-workshop/`
  - **Innovation & Design Workshop:** `public/activity-images/curricular/innovation-design-workshop/`
  - **Effective Sales & Marketing Strategies:** `public/activity-images/curricular/effective-sales-marketing-strategies/`
  - **Sponsored Research Proposal Workshop:** `public/activity-images/curricular/sponsored-research-proposal-workshop/`
  - **Seed Grant Proposal Workshop:** `public/activity-images/curricular/seed-grant-proposal-workshop/`

---

### 🌿 3. National Service Scheme (`nss/`)
- **Category Cover:** `public/activity-images/nss/_category/nss-cover.jpg`
- **Activities:**
  - **Rational Use of Medicine Campaign:** `public/activity-images/nss/rational-use-of-medicine-campaign/`
  - **Blood Donation Camp:** `public/activity-images/nss/blood-donation-camp/`
  - **Tree Plantation Drive:** `public/activity-images/nss/tree-plantation-drive/`
  - **Swachh Bharat Campaign:** `public/activity-images/nss/swachh-bharat-campaign/`
  - **Community Health Camp:** `public/activity-images/nss/community-health-camp/`
  - **Rural Awareness Programme:** `public/activity-images/nss/rural-awareness-programme/`

---

### 🎖️ 4. National Cadet Corps (`ncc/`)
- **Category Cover:** `public/activity-images/ncc/_category/ncc-cover.jpg`
- **Activities:**
  - **Republic Day Parade:** `public/activity-images/ncc/republic-day-parade/`
  - **Independence Day Parade:** `public/activity-images/ncc/independence-day-parade/`
  - **Combined Annual Training Camp:** `public/activity-images/ncc/combined-annual-training-camp/`
  - **Adventure Camp:** `public/activity-images/ncc/adventure-camp/`
  - **Social Service Activities:** `public/activity-images/ncc/social-service-activities/`

---

### 🤝 5. Outreach Activities (`outreach/`)
- **Category Cover:** `public/activity-images/outreach/_category/outreach-cover.jpg`
- **Activities:**
  - **Innovation Outreach to Schools:** `public/activity-images/outreach/innovation-outreach-schools/`
  - **Entrepreneurship Awareness Program:** `public/activity-images/outreach/entrepreneurship-awareness-program/`
  - **Health Checkup Camps:** `public/activity-images/outreach/health-checkup-camps/`
  - **Career Guidance Programs:** `public/activity-images/outreach/career-guidance-programs/`

---

### 🏛️ 6. National / International Days (`national-days/`)
- **Category Cover:** `public/activity-images/national-days/_category/national-days-cover.jpg`
- **Activities:**
  - **National Pollution Control Day:** `public/activity-images/national-days/national-pollution-control-day/`
  - **World Health Day:** `public/activity-images/national-days/world-health-day/`
  - **International Women's Day:** `public/activity-images/national-days/international-womens-day/`
  - **International Yoga Day:** `public/activity-images/national-days/international-yoga-day/`
  - **National Pharmacy Education Day:** `public/activity-images/national-days/national-pharmacy-education-day/`
  - **Republic Day Celebration:** `public/activity-images/national-days/republic-day-celebration/`

---

### 🏭 7. Industrial Visits (`industrial-visits/`)
- **Category Cover:** `public/activity-images/industrial-visits/_category/industrial-visits-cover.jpg`
- **Activities:**
  - **Pharmaceutical Industry Visit:** `public/activity-images/industrial-visits/pharmaceutical-industry-visit/`
  - **AICTE IDEA Lab Visit:** `public/activity-images/industrial-visits/aicte-idea-lab-visit/`
  - **Research Laboratory Visit:** `public/activity-images/industrial-visits/research-laboratory-visit/`
  - **Incubation Centre Visit:** `public/activity-images/industrial-visits/incubation-centre-visit/`

---

### 💻 8. Seminars & Workshops (`seminars/`)
- **Category Cover:** `public/activity-images/seminars/_category/seminars-cover.jpg`
- **Activities:**
  - **Annual Research Conclave:** `public/activity-images/seminars/annual-research-conclave/`
  - **IPR Protection Workshop:** `public/activity-images/seminars/ipr-protection-workshop/`
  - **Faculty Development Programme:** `public/activity-images/seminars/faculty-development-programme/`
  - **International Conference:** `public/activity-images/seminars/international-conference/`
  - **Startup Legal & Ethical Steps:** `public/activity-images/seminars/startup-legal-ethical-steps/`

---

### 🎓 9. Alumni Activities (`alumni/`)
- **Category Cover:** `public/activity-images/alumni/_category/alumni-cover.jpg`
- **Sub-sections:**
  - **Alumni Association:** `public/activity-images/alumni/alumni-association/`
  - **Alumni Meets:** `public/activity-images/alumni/alumni-meets/`
  - **Convocation:** `public/activity-images/alumni/convocation/`

---

## ⚡ How to Connect Local Images in Data (`activitiesdata.ts`)

When official photos are pasted into these folders, reference them in `src/app/Activity/Data/activitiesdata.ts` using the local path string or local image helper function:

```typescript
{
  id: 'ca-001',
  slug: 'spontaina-youth-festival',
  title: 'Spontaina & Youth Festival',
  // ...
  image: '/activity-images/cultural-activities/spontaina-youth-festival/listing/cover.jpg',
  gallery: [
    '/activity-images/cultural-activities/spontaina-youth-festival/detail/gallery/01.jpg',
    '/activity-images/cultural-activities/spontaina-youth-festival/detail/gallery/02.jpg',
    '/activity-images/cultural-activities/spontaina-youth-festival/detail/gallery/03.jpg',
  ],
}
```
