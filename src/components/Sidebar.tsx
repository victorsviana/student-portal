import React from 'react';
import { Home, User, FileText, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const menuItems = [
  { name: 'Página Inicial', href: '/', icon: Home },
  { name: 'Área do Aluno', href: '/area-do-aluno', icon: User },
  { name: 'Documentos', href: '/documentos', icon: FileText }
];

export default function Sidebar({ isOpen, onClose, currentPage, setCurrentPage }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      <div className={`
        fixed left-0 top-0 h-full w-64 bg-gray-950 border-r border-gray-800 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:z-auto
      `}>
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold text-yellow-400">Portal do Aluno</h1>
          <button
            onClick={onClose}
            className="md:hidden p-1 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.href;
              return (
                <li key={item.href}>
                  <button
                    onClick={() => {
                      setCurrentPage(item.href);
                      if (typeof window !== 'undefined' && window.innerWidth < 768) {
                        onClose();
                      }
                    }}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-800 group ${isActive ? 'bg-yellow-600 text-black font-medium' : 'text-white hover:text-yellow-400'}`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    <span>{item.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
