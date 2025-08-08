'use client';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

// Restore all original theme styles
import '/public/css/animate.min.css';
import '/public/css/animation.css';
import '/public/css/bootstrap-select.min.css';
import '/public/css/bootstrap.css';
import '/public/css/swiper-bundle.min.css';
import '/public/css/style.css';
import '/public/font/fonts.css';
import '/public/icon/style.css';

export default function LogoutButton() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();              // Clear context and localStorage
    router.push('/login'); // Redirect to login
  };

  return (
    <div onClick={handleLogout} className="user-item cursor-pointer">
      <div className="icon">
        <i className="icon-log-out" />
      </div>
      <div className="body-title-2">Log out</div>
    </div>
  );
}
