import { X } from 'lucide-react';
import React, { useState } from 'react';

interface HomePageProps {
  user: { firstName: string };
}

export default function HomePage({ user }: HomePageProps) {
  const [isAlertVisible, setIsAlertVisible] = useState(true);

  const handleAlertClose = () => {
    setIsAlertVisible(false);
  };

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-xl font-bold text-yellow-400 mb-2">
          Bem-vindo ao Portal do Aluno
        </h1>
        <p className="text-sm text-gray-300 mb-4">
          Olá, {user.firstName}! Esta é a página inicial do seu portal.
        </p>
      </div>
      {/* Alert */}
      <div className={`mb-4 ${isAlertVisible ? 'block' : 'hidden'}`}>
        <div className="relative bg-yellow-500 text-gray-900 p-4 rounded-lg">
          <button
            onClick={handleAlertClose}
            className="absolute top-2 right-2 p-0 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Fechar alerta"
          >
            <X className="h-5 w-5 text-black-900" />
          </button>
          <p className="text-sm pr-2">
            <strong>Atenção:</strong> Faltam apenas <strong>3 dias</strong> para a entrega do Projeto Integrador! Não deixe para a última hora.
          </p>
        </div>
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
