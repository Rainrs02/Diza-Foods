'use client';

import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // Delete the admin_session cookie
    document.cookie = 'admin_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    router.push('/admin/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="inline-flex items-center px-4 py-2 bg-charcoal-100 text-charcoal-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors font-medium border border-charcoal-200 hover:border-red-200"
    >
      <LogOut className="w-4 h-4 mr-2" />
      Logout
    </button>
  );
}
