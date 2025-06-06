'use client';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import StudentAreaPage from "@/components/StudentAreaPage";
import DocumentsPage from "@/components/DocumentsPage";
import SupportPage from "@/components/SupportPage";
import React, { useState } from "react";

// TODO: Criar rota em api/ para buscar dados do user logado
const mockUser = {
  firstName: "João",
  lastName: "Silva",
  email: "joao.silva@email.com",
  course: "Engenharia Civil",
  progress: 55,
  registration: 234827,
  createdAt: "2024-01-15",
};

export default function PortalPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");

  const renderPage = () => {
    switch (currentPage) {
      case "/":
        return <HomePage user={mockUser} />;
      case "/area-do-aluno":
        return <StudentAreaPage user={mockUser} />;
      case "/documentos":
        return <DocumentsPage />;
      case "/suporte":
        return <SupportPage />;
      default:
        return <HomePage user={mockUser} />;
    }
  };

  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} user={mockUser} />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">{renderPage()}</div>
        </main>
      </div>
    </div>
  );
}
