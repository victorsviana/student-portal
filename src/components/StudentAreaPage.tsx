import React, { useState } from 'react';
import {
  User,
  BookOpen,
  Clock,
  Award,
  Calendar,
  MessageCircle,
  Trophy,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { motion } from 'framer-motion';
import type { ReactElement } from 'react';
import TutorProfileImage from "../../public/tutor-profile.png"
import Image from 'next/image';

interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  course: string;
  createdAt: string;
  progress: number;
  registration: number;
}

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

interface Activity {
  title: string;
  date: string;
}

interface EventItem {
  title: string;
  date: string;
}

interface Badge {
  name: string;
  icon: ReactElement;
  unlocked: boolean;
}

interface StudentAreaPageProps {
  user: UserType;
}

const sampleTimeline: TimelineItem[] = [
  {
    date: '2025-01-15',
    title: 'Módulo 1 Concluído',
    description: 'Você completou o módulo de Introdução à Programação.',
  },
  {
    date: '2025-02-10',
    title: 'Certificado: Fundamentos de JS',
    description: 'Certificado obtido no curso de Fundamentos de JavaScript.',
  },
  {
    date: '2025-03-20',
    title: 'Módulo 3 Concluído',
    description: 'Você completou Algoritmos e Estruturas de Dados.',
  },
];

const sampleStudyProgress = [
  { week: 'Semana 1', hours: 8 },
  { week: 'Semana 2', hours: 12 },
  { week: 'Semana 3', hours: 10 },
  { week: 'Semana 4', hours: 15 },
];

const sampleActivities: Activity[] = [
  { title: 'Assistiu Aula: React Básico', date: '2025-06-01' },
  { title: 'Entregou Tarefa: TypeScript - Exercícios', date: '2025-05-29' },
  { title: 'Fez Prova: Algoritmos', date: '2025-05-25' },
];

const sampleEvents: EventItem[] = [
  { title: 'Prova Final: Matemática', date: '2025-06-15' },
  { title: 'Entrega Projeto: Web App', date: '2025-06-20' },
  { title: 'Aula ao Vivo: Node.js Avançado', date: '2025-06-10' },
];

const sampleBadges: Badge[] = [
  { name: 'Primeiro Login', icon: <CheckCircle2 />, unlocked: true },
  { name: '5 Módulos Concluídos', icon: <Trophy />, unlocked: false },
  { name: '10h de Estudo', icon: <Clock />, unlocked: true },
];

export default function StudentAreaPage({ user }: StudentAreaPageProps) {
  const getDate = (date: string) => new Date(date).toLocaleDateString('pt-BR');
  const goalProgress = 40
  const [goals, setGoals] = useState<string>('Estudar 10h esta semana');
  const [feedbackText, setFeedbackText] = useState<string>('');

  return (
    <div className="space-y-8">
      {/* Header e Introdução */}
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <h1 className="text-2xl font-bold text-yellow-400 mb-2">Área do Aluno</h1>
        <p className="text-sm text-gray-300">
          Bem-vindo(a), {user.firstName}! Acompanhe aqui seu progresso, eventos e mais.
        </p>
      </div>

      {/* Blocos de Dados e Curso */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Meus Dados */}
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <div className="flex items-center mb-4">
            <User className="h-6 w-6 text-yellow-400 mr-2" />
            <h2 className="text-xl font-semibold text-white">Meus Dados</h2>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-400">Nome</label>
              <p className="text-white">{user.firstName} {user.lastName}</p>
            </div>
            <div>
              <label className="text-sm text-gray-400">Matrícula</label>
              <p className="text-white">{user.registration}</p>
            </div>
            <div>
              <label className="text-sm text-gray-400">Email</label>
              <p className="text-white">{user.email}</p>
            </div>
            <div>
              <label className="text-sm text-gray-400">Aluno desde</label>
              <p className="text-white">{getDate(user.createdAt)}</p>
            </div>
          </div>
        </div>

        {/* Meu Curso */}
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <div className="flex items-center mb-4">
            <BookOpen className="h-6 w-6 text-yellow-400 mr-2" />
            <h2 className="text-xl font-semibold text-white">Meu Curso</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400">Curso Atual</label>
              <p className="text-white">{user.course}</p>
            </div>
            <div>
              <label className="text-sm text-gray-400">Progresso Geral</label>
              <div className="mt-1">
                <div className="bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: `${user.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400 mt-1">{user.progress}% concluído</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resumo do Dia */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gray-900 rounded-lg p-6 border border-gray-800"
      >
        <div className="flex items-center mb-4">
          <Clock className="h-6 w-6 text-yellow-400 mr-2" />
          <h2 className="text-xl font-semibold text-white">Resumo do Dia</h2>
        </div>
        <p className="text-sm text-gray-300 mb-2">
          Hoje você tem:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>2 aulas para assistir</li>
          <li>1 tarefa pendente</li>
        </ul>
      </motion.div>

      {/* Linha do Tempo de Progresso */}
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <div className="flex items-center mb-4">
          <CheckCircle2 className="h-6 w-6 text-yellow-400 mr-2" />
          <h2 className="text-xl font-semibold text-white">Linha do Tempo</h2>
        </div>
        <div className="border-l-2 border-yellow-400 ml-4">
          {sampleTimeline.map((item, idx) => (
            <div key={idx} className="mb-6 pl-4">
              <span className="text-sm text-gray-400">{getDate(item.date)}</span>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gráfico de Progresso Semanal */}
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <div className="flex items-center mb-4">
          <Clock className="h-6 w-6 text-yellow-400 mr-2" />
          <h2 className="text-xl font-semibold text-white">Progresso Semanal de Estudo</h2>
        </div>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sampleStudyProgress}>
              <CartesianGrid stroke="#2d2d2d" />
              <XAxis dataKey="week" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1f1f1f', border: 'none' }}
                itemStyle={{ color: '#fff' }}
                labelStyle={{ color: '#888' }}
              />
              <Line
                type="monotone"
                dataKey="hours"
                stroke="#FACC15"
                strokeWidth={2}
                dot={{ r: 4, fill: '#FACC15' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Metas de Estudo */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gray-900 rounded-lg p-6 border border-gray-800"
      >
        <div className="flex items-center mb-4">
          <Award className="h-6 w-6 text-yellow-400 mr-2" />
          <h2 className="text-xl font-semibold text-white">Minhas Metas</h2>
        </div>
        <div className="space-y-3">
          <p className="text-gray-300">Meta</p>
          <input
            type="text"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            className="w-full bg-gray-700 text-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <label className="text-sm text-gray-400">Progresso da meta</label>
          <div className="bg-gray-700 rounded-full h-2">
            <div
              className="bg-yellow-400 h-2 rounded-full"
              style={{ width: `${goalProgress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-400">{goalProgress}% concluído</p>
        </div>
      </motion.div>

      {/* Últimas Atividades */}
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <div className="flex items-center mb-4">
          <Clock className="h-6 w-6 text-yellow-400 mr-2" />
          <h2 className="text-xl font-semibold text-white">Últimas Atividades</h2>
        </div>
        <ul className="space-y-2">
          {sampleActivities.map((act, idx) => (
            <li key={idx} className="flex justify-between items-center bg-gray-800 rounded-md p-3">
              <div>
                <p className="text-white">{act.title}</p>
                <span className="text-sm text-gray-400">{getDate(act.date)}</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-500" />
            </li>
          ))}
        </ul>
      </div>

      {/* Informações do Tutor */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gray-900 rounded-lg p-6 border border-gray-800"
      >
        <div className="flex items-center mb-4">
          <User className="h-6 w-6 text-yellow-400 mr-2" />
          <h2 className="text-xl font-semibold text-white">Meu Tutor</h2>
        </div>
        <div className="flex items-center space-x-4">
          <Image
            src={TutorProfileImage}
            alt="Foto do Tutor"
            className="h-16 w-16 rounded-full border-2 border-yellow-400"
          />
          <div>
            <p className="text-white font-semibold">Prof. João Silva</p>
            <p className="text-gray-400 text-sm">joao.silva@faculdade.edu.br</p>
            <button className="mt-2 inline-flex items-center bg-yellow-400 text-gray-900 px-3 py-1 rounded-md text-sm font-medium hover:bg-yellow-500">
              Agendar Plantão
            </button>
          </div>
        </div>
      </motion.div>

      {/* Próximos Eventos */}
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <div className="flex items-center mb-4">
          <Calendar className="h-6 w-6 text-yellow-400 mr-2" />
          <h2 className="text-xl font-semibold text-white">Próximos Eventos</h2>
        </div>
        <ul className="space-y-3">
          {sampleEvents.map((evt, idx) => (
            <li key={idx} className="flex justify-between items-center bg-gray-800 rounded-md p-3">
              <div>
                <p className="text-white">{evt.title}</p>
                <span className="text-sm text-gray-400">{getDate(evt.date)}</span>
              </div>
              <button className="text-yellow-400 hover:underline text-sm">Ver Detalhes</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Comunidade / Fórum */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gray-900 rounded-lg p-6 border border-gray-800"
      >
        <div className="flex items-center mb-4">
          <MessageCircle className="h-6 w-6 text-yellow-400 mr-2" />
          <h2 className="text-xl font-semibold text-white">Comunidade</h2>
        </div>
        <p className="text-gray-300 mb-2">
          Participe das discussões e tire dúvidas com colegas e tutores.
        </p>
        <button className="inline-flex items-center bg-yellow-400 text-gray-900 px-3 py-1 rounded-md text-sm font-medium hover:bg-yellow-500">
          Ir para o Fórum
        </button>
      </motion.div>

      {/* Gamificação / Insígnias */}
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <div className="flex items-center mb-4">
          <Trophy className="h-6 w-6 text-yellow-400 mr-2" />
          <h2 className="text-xl font-semibold text-white">Minhas Insígnias</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sampleBadges.map((badge, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center p-4 rounded-lg border ${badge.unlocked ? 'border-yellow-400' : 'border-gray-700'
                }`}
            >
              <div
                className={`h-12 w-12 ${badge.unlocked ? 'text-yellow-400' : 'text-gray-600'
                  }`}
              >
                {badge.icon}
              </div>
              <p
                className={`mt-2 text-sm font-medium ${badge.unlocked ? 'text-white' : 'text-gray-500'
                  }`}
              >
                {badge.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Avaliações / Feedback */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gray-900 rounded-lg p-6 border border-gray-800"
      >
        <div className="flex items-center mb-4">
          <BookOpen className="h-6 w-6 text-yellow-400 mr-2" />
          <h2 className="text-xl font-semibold text-white">Feedback do Curso</h2>
        </div>
        <textarea
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
          placeholder="Escreva sua opinião ou sugestão sobre o curso..."
          className="w-full bg-gray-700 text-gray-100 rounded-md p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button className="mt-3 inline-flex items-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-500">
          Enviar Feedback
        </button>
      </motion.div>
    </div>
  );
}
