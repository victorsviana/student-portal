import React from 'react';
import { User, BookOpen, Clock, Award } from 'lucide-react';

interface AreaDoAlunoPageProps {
  user: { firstName: string; lastName: string; email: string };
}

export default function AreaDoAlunoPage({ user }: AreaDoAlunoPageProps) {
  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <h1 className="text-2xl font-bold text-yellow-400 mb-2">
          Área do Aluno
        </h1>
        <p className="text-gray-300">
          Você está na área do aluno. Aqui você pode ver informações sobre seu perfil e curso.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <div className="flex items-center mb-4">
            <User className="h-6 w-6 text-yellow-400 mr-2" />
            <h2 className="text-xl font-semibold text-white">Meu Perfil</h2>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-400">Nome</label>
              <p className="text-white">{user.firstName} {user.lastName}</p>
            </div>
            <div>
              <label className="text-sm text-gray-400">Email</label>
              <p className="text-white">{user.email}</p>
            </div>
            <div>
              <label className="text-sm text-gray-400">Data de Cadastro</label>
              <p className="text-white">15/01/2024</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <div className="flex items-center mb-4">
            <BookOpen className="h-6 w-6 text-yellow-400 mr-2" />
            <h2 className="text-xl font-semibold text-white">Meu Curso</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400">Curso Atual</label>
              <p className="text-white">Desenvolvimento Web Full Stack</p>
            </div>
            <div>
              <label className="text-sm text-gray-400">Progresso</label>
              <div className="mt-1">
                <div className="bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <p className="text-sm text-gray-400 mt-1">65% concluído</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 text-center">
          <Clock className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
          <h3 className="text-lg font-semibold text-white">Horas de Estudo</h3>
          <p className="text-2xl font-bold text-yellow-400">47h</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 text-center">
          <BookOpen className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
          <h3 className="text-lg font-semibold text-white">Módulos</h3>
          <p className="text-2xl font-bold text-yellow-400">6/10</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 text-center">
          <Award className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
          <h3 className="text-lg font-semibold text-white">Certificados</h3>
          <p className="text-2xl font-bold text-yellow-400">2</p>
        </div>
      </div>
    </div>
  );
}
