/* ============================================================
   HappyHacker Portfolio — EDITABLE CONTENT FILE
   ------------------------------------------------------------
   To update the website, edit ONLY this file.
   You do not need to touch index.html / styles.css / script.js.

   How to edit:
   - Change a price       -> update "price" inside services below
   - Add a project        -> copy one full project block in projects and edit it
   - WhatsApp number      -> contact.whatsapp (with country code, no + sign)
                             Example: "919876543210"
   - Email                -> contact.email
   - Instagram / YouTube  -> contact.instagram / contact.youtube (full profile links)
   - Video link           -> set a project's "videoUrl" to its YouTube/Instagram link
                             (leave empty and the card shows "Video coming soon")
   - Avatar image         -> replace assets/avatar.jpg with your new image (same file name)
   ============================================================ */

window.HH_CONTENT = {

  brand: {
    name: "HappyHacker",
    owner: "Vishvajeet Jalvansi",
    shortName: "Happy",
    role: "Video Editor",
    tagline: "Clarity first. Clean edits. Minimal motion.",
    heroTitle: "Simple videos. Clean motion. Clear message.",
    heroText: "I edit short videos for Instagram creators — clean cuts, readable captions, and minimal motion graphics that make a video clearer, not heavier.",
    aboutHeading: "I AM AVAILABLE FOR VIDEO EDITING PROJECTS",
    about: "Hi, I am Vishvajeet Jalvansi — the video editor behind HappyHacker. My strongest skill is minimalistic motion graphics. I work in DaVinci Resolve and follow one simple rule for every edit: clarity first, style second.",
    skills: ["Basic Cutting", "Captions", "B-Roll Editing", "Fusion & Motion Graphics", "Speed Ramping", "Minimal Visual Design"],
    tools: ["DaVinci Resolve", "Muse", "Google AI Tools", "ChatGPT"],
    stats: [
      { value: "36 hrs", label: "Standard delivery" },
      { value: "45 sec", label: "Max length (standard packages)" },
      { value: "1", label: "Revision included" },
      { value: "4", label: "Simple packages" }
    ]
  },

  contact: {
    whatsapp: "917084892068",   // Vishvajeet's WhatsApp: 7084892068 (with India code 91)
    email: "happyhackers444@gmail.com",
    instagram: "https://www.instagram.com/happyhackers444",  // Username: happyhackers444 (first choice — create the account with this username)
    youtube: ""     // <-- Add your full YouTube channel link here when the channel is created
  },

  rules: {
    deliveryTime: "36 hours",
    maxDuration: "45 seconds",
    revisionsIncluded: 1,
    extraRevisionNote: "Extra revisions carry an additional charge, confirmed before the order starts.",
    longVideoNote: "Videos longer than 45 seconds are priced individually.",
    bookingNote: "Booking is confirmed on WhatsApp. Before work starts, the package, price and deadline are confirmed in writing — no hidden charges."
  },

  /* Plans are TIERED by price: every higher plan includes everything in the
     plans below it, PLUS its own extra features. That is why a higher price
     is worth paying. Plan names and prices stay the same — only the features
     are distributed by price. */
  services: [
    {
      id: "text",
      name: "Text Editing",
      price: 299,
      level: "Starter",
      maxDuration: "Up to 45 seconds",
      bestFor: "The simple start — a clean, readable video with no extra effects",
      why: "Choose this if you only need your video cut clean and captioned.",
      includesHeader: "You get:",
      includes: ["Basic cutting and pause removal", "Plain captions (1 clean style)", "Simple text overlays (name / title)", "Basic background music", "Basic export — 9:16, HD", "Delivery in 36 hours", "1 revision"],
      excludes: ["Animated captions or text animation", "B-roll and sound effects", "Icons, UI elements and motion graphics"]
    },
    {
      id: "broll",
      name: "B-Roll Editing",
      price: 499,
      level: "Better Pacing",
      maxDuration: "Up to 45 seconds",
      bestFor: "Your video stops feeling slow — visuals and sound do the work",
      why: "Worth the upgrade if your single-angle video feels boring or slow.",
      includesHeader: "Everything in Text Editing, plus:",
      includes: ["B-roll placement on your main points", "Word-highlight captions (better than plain)", "Music plus basic sound effects (whoosh, click, pop)", "Punch-in zooms and pacing improvements", "Cuts synced to the beat"],
      excludes: ["Icons, UI elements and cards", "Motion graphics and planning"]
    },
    {
      id: "motion-edit",
      name: "Motion Graphics Editing",
      price: 699,
      level: "Most Popular",
      popular: true,
      maxDuration: "Up to 45 seconds",
      bestFor: "Your existing video, upgraded with clean UI and motion graphics",
      why: "Worth the upgrade if you want your video to look designed, not just edited.",
      includesHeader: "Everything in B-Roll Editing, plus:",
      includes: ["Animated text (titles and keyword animations)", "Icons and UI elements", "Notification bars and search bars", "Simple cards", "Minimal motion graphics on your video", "Sound effects synced to the animations"],
      excludes: ["A complete video created from scratch", "Script / visual planning and background design"]
    },
    {
      id: "motion-video",
      name: "Motion Graphics Video",
      price: 999,
      level: "Complete Creation",
      maxDuration: "Up to 45 seconds",
      bestFor: "A complete video created for you — you only provide the topic",
      why: "Worth the upgrade if you have no footage, or want the full planned treatment.",
      note: "Before the order starts, you confirm which one you need: (A) a complete motion-graphics video without client footage, or (B) motion graphics added to your existing video.",
      includesHeader: "Everything in Motion Graphics Editing, plus:",
      includes: ["Visual planning before editing starts", "Script / content structure help", "A complete video created without your footage (option A)", "Custom background design", "Fuller sound design", "End-to-end creation — you only give the topic or script points"],
      excludes: ["Duration longer than 45 seconds (priced individually)", "Extra revisions (additional charge)"]
    }
  ],

  projects: [
    {
      name: "Talking-Head Instagram Edit",
      label: "Concept Project",
      category: "Text Editing",
      platform: "Instagram Reel · 9:16",
      duration: "40 sec",
      goal: "Turn a plain talking-head clip into a clean, easy-to-watch reel.",
      style: "Minimal. White captions, red accent words, no heavy effects.",
      tools: "DaVinci Resolve",
      before: "A single static shot, no captions, long pauses.",
      final: "Tight cuts, readable captions, key words in red, light punch-in zooms for pacing.",
      techniques: "Jump cuts, caption animation, punch-in zoom, pause trimming.",
      thumbnail: "Face close-up with 3 bold words, red-black-white.",
      description: "Everyday creator work — a talking-head edit with clean captions and tight pacing.",
      videoUrl: ""
    },
    {
      name: "Minimal SaaS Motion Graphics Video",
      label: "Concept Project",
      category: "Motion Graphics Video",
      platform: "Instagram / YouTube · 16:9 + 9:16",
      duration: "45 sec",
      goal: "Explain one SaaS feature using only motion graphics, without any footage.",
      style: "Flat UI, light gray background, black text, red used only on the CTA.",
      tools: "DaVinci Resolve (Fusion)",
      before: "A written feature list with no visual story.",
      final: "A simple dashboard mock, feature cards animating in one by one, and a clear end CTA.",
      techniques: "Card slide-up with smooth easing, icon pop, text reveal, UI build-up.",
      thumbnail: "Clean dashboard graphic with the text '1 FEATURE, 45 SECONDS'.",
      description: "A sample of the ₹999 package — a complete video built from motion graphics, with no client footage.",
      videoUrl: ""
    },
    {
      name: "Notification-Bar Animation",
      label: "Concept Project",
      category: "Motion Graphics Editing",
      platform: "Instagram Reel · 9:16",
      duration: "20 sec",
      goal: "Bring a phone-style notification bar into a video at exactly the right moment.",
      style: "Clean real-phone UI look, soft shadow, red notification badge.",
      tools: "DaVinci Resolve (Fusion) — HH UI Motion templates",
      before: "Text appears on screen with no entry animation.",
      final: "The notification slides in from the top, settles with a subtle bounce, and auto-hides on time.",
      techniques: "Slide-in easing, auto-hide timing, subtle sound-effect sync.",
      thumbnail: "A large notification bar graphic with the text 'THIS POP-UP?'.",
      description: "A reusable notification animation for subscriber, follower and offer announcements.",
      videoUrl: ""
    },
    {
      name: "B-Roll Editing Sample",
      label: "Concept Project",
      category: "B-Roll Editing",
      platform: "Instagram Reel · 9:16",
      duration: "45 sec",
      goal: "Support a talking-head video with the right B-roll at the right points.",
      style: "Natural footage, cuts on the music beat, captions continue throughout.",
      tools: "DaVinci Resolve",
      before: "45 seconds of a single angle that starts to feel slow.",
      final: "Matching B-roll on every main point — faster pacing, still completely clear.",
      techniques: "Beat-synced cuts, B-roll placement, pacing improvements, basic sound effects.",
      thumbnail: "Split frame — half talking-head, half B-roll.",
      description: "A sample of the ₹499 package — it shows when B-roll should be used, and why.",
      videoUrl: ""
    },
    {
      name: "Minimal Red-Black UI Animation",
      label: "Concept Project",
      category: "Motion Graphics Editing",
      platform: "Instagram Reel · 9:16",
      duration: "30 sec",
      goal: "Show the signature HappyHacker red-black-white UI style.",
      style: "Black background, white cards, red accents — flat, with no gradients or neon.",
      tools: "DaVinci Resolve (Fusion) — HH UI Motion templates",
      before: "An overloaded layout with random colors and heavy effects.",
      final: "Only three colors, clean cards, and every element on screen for a reason.",
      techniques: "Card build-up, icon box pop, clean wipe transitions.",
      thumbnail: "A set of red-white UI cards on a black background.",
      description: "The brand's own visual identity — minimal red-black UI motion.",
      videoUrl: ""
    },
    {
      name: "AI-Avatar Introduction Video",
      label: "Concept Project",
      category: "Motion Graphics Video",
      platform: "Instagram Reel · 9:16",
      duration: "30 sec",
      goal: "Introduce the HappyHacker avatar as the face of the brand.",
      style: "The avatar in the center, a clean background, services appearing as cards one by one.",
      tools: "DaVinci Resolve (Fusion) + AI avatar",
      before: "The brand has no memorable face.",
      final: "An avatar intro with the name, the work and all 4 services — the full identity in 30 seconds.",
      techniques: "Avatar pop-in, staggered service cards, text reveal, outro logo lockup.",
      thumbnail: "The avatar large, with the text 'MEET HAPPYHACKER'.",
      description: "The first brand launch video — this avatar will appear on every platform from here.",
      videoUrl: ""
    }
  ],

  /* Reels showcase — "Reels I Have Edited".
     Add a new edited reel here: give it a title, type and duration, and put its
     YouTube/Instagram link in videoUrl. The card then becomes a watch link.
     Entries with no videoUrl yet are concept samples and are labelled as such. */
  reels: [
    { title: "Talking-Head Instagram Edit", type: "Talking-Head · Captions", duration: "40 sec", label: "Concept Reel", videoUrl: "" },
    { title: "B-Roll Editing Sample", type: "B-Roll · Beat Cuts", duration: "45 sec", label: "Concept Reel", videoUrl: "" },
    { title: "Text & Caption Editing Sample", type: "Captions · Text Animation", duration: "35 sec", label: "Concept Reel", videoUrl: "" },
    { title: "Notification-Bar Animation", type: "UI Animation", duration: "20 sec", label: "Concept Reel", videoUrl: "" },
    { title: "Search-Bar UI Animation", type: "UI Animation", duration: "25 sec", label: "Concept Reel", videoUrl: "" },
    { title: "Minimal Red-Black UI Animation", type: "UI · Motion Graphics", duration: "30 sec", label: "Concept Reel", videoUrl: "" },
    { title: "AI-Avatar Introduction Video", type: "Avatar · Brand Intro", duration: "30 sec", label: "Concept Reel", videoUrl: "" },
    { title: "9:16 Reel Template", type: "Template · Reusable", duration: "30–45 sec", label: "Concept Reel", videoUrl: "" }
  ],

  process: [
    { step: "Enquiry", detail: "Your first message, on WhatsApp or through the form below." },
    { step: "Requirement Questions", detail: "Purpose, platform, duration and package — a few clear questions." },
    { step: "Package & Price Confirmation", detail: "Package, price and deadline confirmed in writing, before work starts." },
    { step: "Footage & Assets", detail: "Send the video, logo and brand colors — everything needed, in one go." },
    { step: "Editing", detail: "Cutting, captions and B-roll / motion graphics, as per your package." },
    { step: "Preview", detail: "You receive a preview version to watch and check." },
    { step: "1 Revision", detail: "One revision is included in every package. Extra revisions carry an additional charge." },
    { step: "Final Delivery", detail: "After payment confirmation, you receive the final file." }
  ]
};
