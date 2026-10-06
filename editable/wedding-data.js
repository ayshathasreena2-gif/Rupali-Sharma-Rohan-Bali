/**
 * wedding-data.js — Customer-facing editable data layer for rajwada-royale
 * Edit this file to update couple names, parents, dates, love story, events, venue, gallery, contacts, ogTags, and media.
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Rohan",
    bride: "Rupali",
    groomFull: "Rohan Bali",
    brideFull: "Rupali Sharma",
    monogram: "R ♡ R",
    hashtag: "#RohanWedsRupali",
  },

  ogTags: {
    title: "Rupali ♡ Rohan — Royal Wedding Invitation",
    description: "Join us in celebrating the auspicious union of Rupali Sharma & Rohan Bali. Shagun: 10th Dec 2026 (6:00 PM) | Shaadi: 11th Dec 2026 (7:00 PM) at Holiday Inn Lucknow.",
    image: "./editable/assets/og-image.png",
    siteName: "Rupali ♡ Rohan Wedding Invitation",
  },

  mainEvent: {
    title: "Rohan & Rupali — Wedding Ceremony",
    startsAt: "2026-12-11T19:00:00+05:30",
    durationMinutes: 240,
    dateLabel: "Friday, 11 December 2026",
    timeLabel: "7:00 PM onwards",
  },

  families: {
    groomSide: {
      parents: "Mr. Rakesh Bali & Mrs. Anita Bali",
      line: "request the pleasure of your esteemed presence at the wedding of their son",
    },
    brideSide: {
      parents: "Mr. Hemender Sharma & Dr. Prerna Sharma",
      line: "together with the family of their daughter",
    },
  },

  blessingsElders: {
    heading: "ॐ श्री गणेशाय नमः\n॥ शुभ विवाह ॥",
    elders: [
      { name: "Dr. G. D. Sharma", relation: "Babaji" },
      { name: "Prem Lata Tejpal", relation: "Nani" }
    ],
    paternalMaternal: "along with the blessings of our Paternal & Maternal Families",
  },

  invitationNote: "ॐ श्री गणेशाय नमः\n\n॥ शुभ विवाह ॥\n\nWith the blessings of our beloved elders — Dr. G. D. Sharma (Babaji) & Prem Lata Tejpal (Nani) — and the love of our families, along with the blessings of our Paternal & Maternal Families, joyfully invite you to celebrate the auspicious union of Rupali ♡ Rohan as they embark upon their beautiful journey of love, companionship and togetherness.",

  story: [
    {
      year: "2024",
      title: "First Meeting",
      text: "Two souls connecting through warmth, laughter, and shared family values.",
      image: "./editable/assets/story-1.jpg",
    },
    {
      year: "2025",
      title: "Shagun",
      text: "Celebrating the auspicious beginning with blessings of elders and loved ones.",
      image: "./editable/assets/story-2.jpg",
    },
    {
      year: "2026",
      title: "Together Forever",
      text: "Embarking upon a beautiful journey of love, companionship, and togetherness.",
      image: "./editable/assets/story-3.jpg",
    },
  ],

  events: [
    {
      key: "shagun",
      name: "Shagun",
      startsAt: "2026-12-10T18:00:00+05:30",
      durationMinutes: 180,
      venue: "Holiday Inn Lucknow",
      address: "Holiday Inn Lucknow, Uttar Pradesh",
      dressCode: "Festive Ethnic",
      dressCodeColor: "#C9A84C",
      note: "Time: 6:00 PM onwards",
    },
    {
      key: "shaadi",
      name: "Shaadi",
      startsAt: "2026-12-11T19:00:00+05:30",
      durationMinutes: 240,
      venue: "Holiday Inn Lucknow",
      address: "Holiday Inn Lucknow, Uttar Pradesh",
      dressCode: "Traditional Formals",
      dressCodeColor: "#C9A84C",
      note: "Time: 7:00 PM onwards",
    },
  ],

  venue: {
    name: "Holiday Inn Lucknow",
    address: "Holiday Inn Lucknow, Uttar Pradesh",
    lat: 26.8467,
    lng: 80.9462,
    directionsNote: "Valet and ample guest parking available at Holiday Inn Lucknow.",
  },

  gallery: [
    { src: "./editable/assets/gallery-1.jpg", alt: "Shagun ceremony moments" },
    { src: "./editable/assets/gallery-2.jpg", alt: "Sangeet and celebration" },
    { src: "./editable/assets/gallery-3.jpg", alt: "Royal wedding decor" },
    { src: "./editable/assets/gallery-4.jpg", alt: "Baraat and joy" },
  ],

  closing: {
    blessing: "With the love and blessings of their siblings: Rahul Bali, Deepankar D Sharma & Jain Serrao, and the warmth and blessings of their entire Bali • Sharma • Tejpal Family • Satsangi family.",
    signOff: "With love and blessings,",
  },

  contacts: [
    { name: "Rahul Bali (Groom's Brother)", phone: "" },
    { name: "Deepankar D Sharma (Bride's Brother)", phone: "" },
  ],

  media: {
    ogImage: "./editable/assets/og-image.png",
    doorPanel: "./editable/assets/door-panel.png",
    couple: "./editable/assets/couple.png",
    floralCorner: "./editable/assets/floral-corner.png",
    garland: "./editable/assets/garland.png",
    lantern: "./editable/assets/lantern.png",
    footerFloral: "./editable/assets/footer-floral.jpg",
    ambientAudio: "./editable/assets/ambient-shehnai.mp3",
  },
};
