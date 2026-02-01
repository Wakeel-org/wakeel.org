import Layout from '../src/components/Layout';
import Link from 'next/link';
import { Button } from '../src/components/ui/button';

export default function Custom404() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <Link href="/">
          <Button size="lg">
            Return Home
          </Button>
        </Link>
      </div>
    </Layout>
  );
} 