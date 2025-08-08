'use client';
import { useAuth } from '@/context/AuthContext'; // adjust if not using @
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isAuthenticated && pathname !== '/login') {
      router.push('/login');
    }
  }, [isAuthenticated, pathname]);

  if (!isAuthenticated && pathname !== '/login') {
    return null; // ⏳ optional loading spinner
  }

  return children;
}
