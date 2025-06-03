import React from 'react';

interface HomePageProps {
  user: { firstName: string };
}

export default function HomePage({ user }: HomePageProps) {
  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <h1 className="text-2xl font-bold text-yellow-400 mb-2">
          Bem-vindo ao Portal do Aluno
        </h1>
        <p className="text-gray-300 mb-4">
          Olá, {user.firstName}! Esta é a página inicial do seu portal.
        </p>
        <p className="text-gray-400 text-sm">
          Você está na página inicial. Use o menu lateral para navegar entre as seções.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-yellow-400 transition-colors">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">Área do Aluno</h3>
          <p className="text-gray-300 text-sm">
            Acesse informações sobre seu curso e progresso.
          </p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-yellow-400 transition-colors">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">Documentos</h3>
          <p className="text-gray-300 text-sm">
            Visualize e baixe seus documentos acadêmicos.
          </p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-yellow-400 transition-colors">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">Suporte</h3>
          <p className="text-gray-300 text-sm">
            Entre em contato conosco para ajuda.
          </p>
        </div>
      </div>
    </div>
  );
}
