import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500",
    bio: "Former Supreme Court clerk with 15+ years of legal tech experience",
    linkedin: "https://linkedin.com",
    order: 1
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=500",
    bio: "AI researcher and tech innovator with a background in legal informatics",
    linkedin: "https://linkedin.com",
    order: 2
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Legal Research",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500",
    bio: "International law expert with expertise in AI-driven legal research",
    linkedin: "https://linkedin.com",
    order: 3
  },
  {
    name: "David Anderson",
    role: "Chief Product Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500",
    bio: "Product strategist with a decade of experience in legal software development",
    linkedin: "https://linkedin.com",
    order: 4
  },
  {
    name: "Priya Patel",
    role: "Head of Customer Success",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=500",
    bio: "Customer experience expert specializing in legal tech implementation",
    linkedin: "https://linkedin.com",
    order: 5
  }
];

const timelineEvents = [
  {
    year: 2023,
    title: "Global Expansion & AI Integration",
    description: "Launched advanced AI-powered legal research tools and expanded operations to 50+ countries worldwide",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    order: 1
  },
  {
    year: 2023,
    title: "Strategic Partnerships",
    description: "Formed partnerships with leading law schools and legal institutions to enhance legal education",
    icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
    order: 2
  },
  {
    year: 2022,
    title: "Platform Enhancement",
    description: "Major platform upgrade with introduction of real-time collaboration features and document automation",
    icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
    order: 3
  },
  {
    year: 2022,
    title: "Research Innovation",
    description: "Launched revolutionary case law analysis tool using machine learning algorithms",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    order: 4
  },
  {
    year: 2021,
    title: "Company Foundation",
    description: "Wakeel.org was founded with a vision to revolutionize legal technology and access to justice",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    order: 5
  }
];

const faqsData = [
  {
    question: "What services does Wakeel.org provide?",
    answer: "We offer comprehensive legal tech solutions including AI-powered legal research, case management, document automation, and policy development tools designed specifically for legal professionals.",
    order: 1,
    isActive: true
  },
  {
    question: "How secure is your platform?",
    answer: "We implement bank-level security measures with end-to-end encryption, regular security audits, and comply with international data protection standards to ensure your data remains secure and confidential.",
    order: 2,
    isActive: true
  },
  {
    question: "What support options are available?",
    answer: "We provide 24/7 technical support through multiple channels including email, phone, and live chat. Premium members receive priority support with guaranteed response times.",
    order: 3,
    isActive: true
  },
  {
    question: "Can I try before subscribing?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can explore our platform and see how it can benefit your practice.",
    order: 4,
    isActive: true
  },
  {
    question: "What training resources do you provide?",
    answer: "We offer comprehensive training resources including video tutorials, documentation, webinars, and personalized training sessions for teams. Our knowledge base is regularly updated with new content.",
    order: 5,
    isActive: true
  }
];

export const clearCollections = async () => {
  // Clear existing data
  const clearCollection = async (collectionName) => {
    const q = query(collection(db, collectionName));
    const snapshot = await getDocs(q);
    const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
  };

  await clearCollection('team_members');
  await clearCollection('company_timeline');
};

export const seedData = async () => {
  try {
    // Clear existing data first
    await clearCollections();

    // Add team members
    for (const member of teamMembers) {
      await addDoc(collection(db, 'team_members'), member);
    }

    // Add timeline events
    for (const event of timelineEvents) {
      await addDoc(collection(db, 'company_timeline'), event);
    }

    // Seed FAQs
    for (const faq of faqsData) {
      await addDoc(collection(db, 'website_faqs'), faq);
    }

    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}; 