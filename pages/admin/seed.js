import { useEffect, useState } from 'react';
import { seedData } from '../../src/lib/firebase/seedData';

export default function SeedPage() {
  const [status, setStatus] = useState('');

  const handleSeed = async () => {
    try {
      setStatus('Seeding data...');
      await seedData();
      setStatus('Data seeded successfully!');
    } catch (error) {
      console.error('Error seeding data:', error);
      setStatus('Error seeding data. Check console for details.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Database Seed Tool</h1>
        <button
          onClick={handleSeed}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Seed Database
        </button>
        {status && (
          <p className="mt-4 text-gray-600">{status}</p>
        )}
      </div>
    </div>
  );
}

// Only allow this in development
export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
} 