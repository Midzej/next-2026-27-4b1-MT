<<<<<<< HEAD
import Link from 'next/link';
import Dashboard from '@/components/Dashboard';

=======
>>>>>>> ac39913b17c1dc401d9d2e56f5bc9f470aa443d0
export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Witaj na naszej stronie głównej!</h1>
      <p>To jest pierwsza strona stworzona w Next.js z App Routerem.</p>
      <Link href="/about">Przejdź do strony O nas</Link>
<<<<<<< HEAD
      <Dashboard />
=======
>>>>>>> ac39913b17c1dc401d9d2e56f5bc9f470aa443d0
    </main>
  );
}