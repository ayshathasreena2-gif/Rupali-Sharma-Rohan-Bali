# Customer Editing Guide — rajwada-royale

This template is configured for the wedding invitation of **Rohan Bali & Rupali Sharma**. It features a Maratha haveli luxury wedding invitation with an interactive ring-to-open door gate intro, ambient shehnai music, couple story, ceremony schedule with dress code, venue location map, photo gallery, and family contact details.

---

## Active Wedding Invitation Details

### Couple
- **Groom**: Rohan Bali (Rohan)
- **Bride**: Rupali Sharma (Rupali)
- **Monogram**: R ♡ R
- **Hashtag**: #RohanWedsRupali

### Family & Parents
- **Groom's Parents**: Mr. Rakesh Bali & Mrs. Anita Bali
- **Bride's Parents**: Mr. Hemender Sharma & Dr. Prerna Sharma
- **Beloved Elders**: Dr. G. D. Sharma (Babaji) & Prem Lata Tejpal (Nani)
- **Blessings**: Paternal & Maternal Families
- **Siblings**: Rahul Bali, Deepankar D Sharma & Jain Serrao
- **Family**: Bali • Sharma • Tejpal Family • Satsangi family

### Events & Schedule
1. **Shagun**
   - **Date**: 10th December 2026
   - **Time**: 6:00 PM onwards
   - **Venue**: Holiday Inn Lucknow
2. **Shaadi (Wedding Ceremony)**
   - **Date**: 11th December 2026
   - **Time**: 7:00 PM onwards
   - **Venue**: Holiday Inn Lucknow

### Main Venue
- **Name**: Holiday Inn Lucknow
- **Address**: Holiday Inn Lucknow, Uttar Pradesh

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///c:/Users/HP/Downloads/rajwada-royale/editable/wedding-data.js)

### Couple & Families
Edit `couple` and `families` in `editable/wedding-data.js`:
- `groom` & `bride`: Names (`"Rohan"`, `"Rupali"`)
- `groomFull` & `brideFull`: Full Names (`"Rohan Bali"`, `"Rupali Sharma"`)
- `monogram`: Monogram string (`"R ♡ R"`)
- `hashtag`: Wedding hashtag (`"#RohanWedsRupali"`)
- `families.groomSide` & `families.brideSide`: Parents' names and formal invitation copy lines

### Main Ceremony & Countdown
Edit `mainEvent` in `editable/wedding-data.js`:
- `title`: Title for event and calendar export
- `startsAt`: ISO timestamp (`"2026-12-11T19:00:00+05:30"`). Directly drives the live countdown timer.
- `dateLabel`: Formatted date (`"Friday, 11 December 2026"`)
- `timeLabel`: Time string (`"7:00 PM onwards"`)

### Love Story Timeline
Edit `story` array in `editable/wedding-data.js`:
- Milestones (`year`, `title`, `text`, `image`)

### Events & Ceremonies
Edit `events` array in `editable/wedding-data.js`:
- Shagun & Shaadi event details (`name`, `startsAt`, `venue`, `address`, `dressCode`, `dressCodeColor`, `note`)

### Venue & Directions
Edit `venue` in `editable/wedding-data.js`:
- `name`: Venue name (`"Holiday Inn Lucknow"`)
- `address`: Street address (`"Holiday Inn Lucknow, Uttar Pradesh"`)
- `lat` & `lng`: Map coordinate markers (Lucknow)
- `directionsNote`: Parking & valet information

### Gallery & Photo Moments
Edit `gallery` array in `editable/wedding-data.js`:
- Array of photo objects (`src`, `alt`)

### Family Contacts
Edit `contacts` array in `editable/wedding-data.js`:
- Contact person names (Rahul Bali, Deepankar D Sharma) and phone numbers for guest assistance

### Media & Assets
Replace files directly in `editable/assets/` or update `media`:
- Door panel graphic: `editable/assets/door-panel.png`
- Couple illustration: `editable/assets/couple.png`
- Ambient music: `editable/assets/ambient-shehnai.mp3`
- Story & gallery images: `story-1.jpg`, `story-2.jpg`, `gallery-1.jpg`, etc.

---

## Rules for Future Agents

1. Make customer content edits in `editable/wedding-data.js` and swap assets in `editable/assets/`.
2. Do not modify bundled code in `assets/` unless requested.
3. Keep ISO date strings with proper timezone offsets (e.g. `+05:30`).
4. Validate changes with `node --check editable/wedding-data.js`.
