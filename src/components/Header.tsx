import React from 'react';

interface HeaderProps {
  onMenuClick: () => void;
  user: { firstName: string; lastName: string; email: string };
}

export default function Header({ onMenuClick, user }: HeaderProps) {
  return (
    <header className="bg-gray-950 border-b border-gray-800 px-4 py-3 flex items-center justify-between md:justify-end">
      <button
        onClick={onMenuClick}
        className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
      >
        <svg className="h-5 w-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
      <div className="flex items-center space-x-4">
        <div className="hidden md:block text-right">
          <p className="text-sm font-medium text-white">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-xs text-gray-400">{user.email}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
          {user.firstName[0]}
        </div>
      </div>
    </header>
  );
}
