import Layout from '../src/components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Your company description here...
        </p>
      </div>
    </Layout>
  );
} 