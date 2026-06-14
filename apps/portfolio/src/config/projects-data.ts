export const githubProjects = [
  {
    id: "drawnguess",
    name: "DrawnGuess",
    description: "Interactive drawing and guessing game with real-time multiplayer features. Players can draw and guess what others are drawing in an engaging social gaming experience.",
    technologies: ["TypeScript", "React", "Socket.io", "Canvas API", "Node.js"],
    githubUrl: "https://github.com/Nvinod007/drawnguess",
    liveUrl: "", // Add if deployed
    category: "Game Development",
    featured: true,
    image: "/assets/projects/drawnguess.png",
    status: "completed",
    features: [
      "Real-time drawing collaboration",
      "Multiplayer guessing game",
      "Interactive canvas drawing",
      "Live chat integration",
      "Score tracking system"
    ]
  },
  {
    id: "nexgpt",
    name: "NexGPT",
    description: "Netflix-inspired frontend application with authentication, Google Firebase integration, and ChatGPT API integration for intelligent content recommendations.",
    technologies: ["TypeScript", "React", "Firebase Auth", "OpenAI API", "Tailwind CSS"],
    githubUrl: "https://github.com/Nvinod007/NexGPT",
    liveUrl: "", // Add if deployed
    category: "Web Application",
    featured: true,
    image: "/assets/projects/nexgpt.png",
    status: "completed",
    features: [
      "Netflix-style UI/UX",
      "Firebase Authentication",
      "AI-powered recommendations",
      "Content browsing interface",
      "Responsive design"
    ]
  },
  {
    id: "food-ordering",
    name: "Food Ordering Web App",
    description: "Modern food ordering platform built with React and TypeScript, featuring intuitive UI for browsing restaurants, managing cart, and placing orders.",
    technologies: ["TypeScript", "React", "Redux", "CSS Modules", "REST APIs"],
    githubUrl: "https://github.com/Nvinod007/Food-ordering-web-app-react",
    liveUrl: "",
    category: "E-commerce",
    featured: false,
    image: "/assets/projects/food-ordering.png",
    status: "completed",
    features: [
      "Restaurant browsing",
      "Cart management",
      "Order placement system",
      "Responsive design",
      "State management with Redux"
    ]
  },
  {
    id: "pim-match",
    name: "PIM Match",
    description: "Python-based matching algorithm system for Product Information Management, optimizing product data synchronization and matching processes.",
    technologies: ["Python", "Data Processing", "Algorithm Design", "JSON"],
    githubUrl: "https://github.com/Nvinod007/pim-match",
    liveUrl: "",
    category: "Data Processing",
    featured: false,
    image: "/assets/projects/pim-match.png",
    status: "completed",
    features: [
      "Product data matching",
      "Algorithm optimization",
      "Data synchronization",
      "Processing automation",
      "Performance optimization"
    ]
  },
  {
    id: "calculator-node",
    name: "Simple Calculator",
    description: "Server-side calculator application built with Node.js and Express.js, demonstrating backend development fundamentals and API design.",
    technologies: ["JavaScript", "Node.js", "Express.js", "REST API"],
    githubUrl: "https://github.com/Nvinod007/simpleCalculatorNode",
    liveUrl: "",
    category: "Backend Development",
    featured: false,
    image: "/assets/projects/calculator.png",
    status: "completed",
    features: [
      "Mathematical operations API",
      "Express.js backend",
      "RESTful endpoints",
      "Error handling",
      "Server-side computation"
    ]
  },
  {
    id: "wifi-data-sharing",
    name: "WiFi Data Sharing",
    description: "Cross-platform application for WiFi connection management and data sharing, enabling seamless file and text transmission between devices.",
    technologies: ["JavaScript", "Network Programming", "File Transfer", "WiFi APIs"],
    githubUrl: "https://github.com/Nvinod007/Wifi-Connection-and-Data-Sharing",
    liveUrl: "",
    category: "Networking",
    featured: false,
    image: "/assets/projects/wifi-sharing.png",
    status: "completed",
    features: [
      "WiFi connection management",
      "File transfer capabilities",
      "Text sharing functionality",
      "Cross-device compatibility",
      "Network optimization"
    ]
  },
  {
    id: "music-player",
    name: "Music Player",
    description: "Java-based music player application with modern UI and comprehensive audio management features, built for desktop environments.",
    technologies: ["Java", "Swing/JavaFX", "Audio APIs", "File Management"],
    githubUrl: "https://github.com/Nvinod007/musicPlayer",
    liveUrl: "",
    category: "Desktop Application",
    featured: false,
    image: "/assets/projects/music-player.png",
    status: "completed",
    features: [
      "Audio playback controls",
      "Playlist management",
      "File format support",
      "Modern desktop UI",
      "Audio visualization"
    ]
  },
  {
    id: "location-finder",
    name: "Location by Pincode",
    description: "JavaScript application for fetching location details using pincode, demonstrating API integration and geolocation services.",
    technologies: ["JavaScript", "REST APIs", "Geolocation", "DOM Manipulation"],
    githubUrl: "https://github.com/Nvinod007/Fecthing-Location-By-pincode",
    liveUrl: "",
    category: "Utility",
    featured: false,
    image: "/assets/projects/location-finder.png",
    status: "completed",
    features: [
      "Pincode-based location search",
      "API integration",
      "Geographic data retrieval",
      "User-friendly interface",
      "Error handling"
    ]
  }
];

export const projectCategories = [
  "All",
  "Web Application", 
  "Game Development",
  "E-commerce",
  "Data Processing",
  "Backend Development",
  "Networking",
  "Desktop Application",
  "Utility"
];

// Combine with existing portfolio projects
export const allProjects = [
  // Existing portfolio project
  {
    id: "live-sync",
    name: "Live Sync", 
    description: "Real-time communication platform featuring live video calls, instant messaging, and collaborative tools.",
    technologies: ["Next.js", "WebRTC", "WebSocket", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/Nvinod007/code-nest",
    liveUrl: "https://live-sync.vercel.app",
    category: "Web Application",
    featured: true,
    image: "/assets/projects/live-sync.png",
    status: "deployed",
    features: [
      "Real-time chat messaging",
      "Video conferencing", 
      "Live collaboration tools",
      "Screen sharing capabilities",
      "Secure communications"
    ]
  },
  ...githubProjects
];