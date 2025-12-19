import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500",
    bio: "Visionary leader with 15+ years in legal tech, dedicated to making legal information accessible to everyone from individuals to organizations",
    linkedin: "https://linkedin.com",
    order: 1
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=500",
    bio: "Tech innovator with expertise in building scalable platforms for legal research and education",
    linkedin: "https://linkedin.com",
    order: 2
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Legal Research",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500",
    bio: "International law expert specializing in legal research methodologies and content curation for diverse audiences",
    linkedin: "https://linkedin.com",
    order: 3
  },
  {
    name: "David Anderson",
    role: "Chief Product Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500",
    bio: "Product strategist creating user-friendly solutions for students, professionals, and legal institutions",
    linkedin: "https://linkedin.com",
    order: 4
  },
  {
    name: "Priya Patel",
    role: "Head of Customer Success",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=500",
    bio: "Committed to empowering every mind - from citizens to judges - with accessible legal resources",
    linkedin: "https://linkedin.com",
    order: 5
  }
];

const timelineEvents = [
  {
    year: 2024,
    title: "Comprehensive Pricing Launch",
    description: "Introduced flexible pricing tiers for Free, Students (PKR 199/1999), Professionals (PKR 4999/49k), and Organizations (PKR 9999+) with dedicated support",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    order: 1
  },
  {
    year: 2023,
    title: "Platform Expansion & Audience Focus",
    description: "Enhanced platform to serve individuals, students, lawyers, judges, law firms, and policymakers with tailored solutions",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    order: 2
  },
  {
    year: 2023,
    title: "Strategic Partnerships",
    description: "Formed partnerships with leading law schools and legal institutions to enhance legal education and research",
    icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
    order: 3
  },
  {
    year: 2022,
    title: "Platform Enhancement",
    description: "Major upgrade focused on user experience, accessibility, and comprehensive legal research tools for all skill levels",
    icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
    order: 4
  },
  {
    year: 2021,
    title: "Company Foundation",
    description: "Wakeel.org was founded with a vision to democratize legal knowledge and empower every legal mind in Pakistan",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    order: 5
  }
];

const faqsData = [
  {
    question: "What is Wakeel.org?",
    answer: "Wakeel.org is Pakistan's comprehensive legal research platform, providing access to case law, statutes, legal guides, and research tools for everyone - from individuals and students to lawyers, judges, and organizations.",
    order: 1,
    isActive: true
  },
  {
    question: "Who can use Wakeel.org?",
    answer: "Our platform serves diverse audiences: Individuals & Citizens seeking legal information, Law Students learning Pakistani law, Lawyers & Advocates conducting research, Judges reviewing precedents, Law Firms managing cases, and Policymakers analyzing legal frameworks.",
    order: 2,
    isActive: true
  },
  {
    question: "What are your pricing plans?",
    answer: "We offer four pricing tiers: Free (PKR 0) for basic access, Students (PKR 199/month or PKR 1,999/year saving 16%), Professionals (PKR 4,999/month or PKR 49,999/year saving 17%), and Organizations (custom pricing from PKR 9,999+) with dedicated support.",
    order: 3,
    isActive: true
  },
  {
    question: "How do I get started?",
    answer: "Simply choose your plan and visit wakeel.web.app to sign up. Free users can start immediately, Students and Professionals can select monthly or yearly billing, and Organizations can contact our sales team at info@wakeel.org for a customized solution.",
    order: 4,
    isActive: true
  },
  {
    question: "What support do you provide?",
    answer: "Support varies by tier: Free and Students receive email support, Professionals get priority email and chat support, and Organizations enjoy 24/7 dedicated support through all channels with guaranteed response times.",
    order: 5,
    isActive: true
  },
  {
    question: "How secure is my data?",
    answer: "We implement bank-level security with end-to-end encryption, regular security audits, and full compliance with international data protection standards to ensure your research and information remain completely secure and confidential.",
    order: 6,
    isActive: true
  },
  {
    question: "Where are you located?",
    answer: "We are based in Lahore, Pakistan, serving legal professionals and individuals across the country. You can reach us at info@wakeel.org or connect with us on Facebook, Instagram, and LinkedIn.",
    order: 7,
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