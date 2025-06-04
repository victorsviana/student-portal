import { X, Calendar, Clock, MapPin, CreditCard, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import React, { useState } from 'react';

interface HomePageProps {
  user: { firstName: string };
}

export default function HomePage({ user }: HomePageProps) {
  const [isAlertVisible, setIsAlertVisible] = useState(true);

  const handleAlertClose = () => {
    setIsAlertVisible(false);
  };

  const getFutureDate = (daysFromNow: number) => {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    return date.toLocaleDateString('pt-BR');
  };

  const nextClasses = [
    {
      discipline: "Gestão Empresarial",
      classes: 4,
      date: getFutureDate(5),
      time: "19:45",
      modality: "Presencial",
      color: "bg-blue-900 border-blue-600"
    },
    {
      discipline: "Inovação e Empreendedorismo",
      classes: 4,
      date: getFutureDate(6),
      time: "19:30",
      modality: "Online",
      color: "bg-green-900 border-green-600"
    },
    {
      discipline: "(Reposição)",
      classes: 4,
      date: getFutureDate(7),
      time: "19:45",
      modality: "Online",
      color: "bg-orange-900 border-orange-600"
    },
    {
      discipline: "Análise de Dados",
      classes: 3,
      date: getFutureDate(10),
      time: "20:00",
      modality: "Presencial",
      color: "bg-purple-900 border-purple-600"
    },
    {
      discipline: "Marketing Digital",
      classes: 2,
      date: getFutureDate(12),
      time: "19:15",
      modality: "Híbrido",
      color: "bg-indigo-900 border-indigo-600"
    }
  ];

  const payments = [
    { mes: "Janeiro/2025", status: "pago", paymentDate: "05/01/2025", value: "R$ 850,00", statusColor: "text-green-400" },
    { mes: "Fevereiro/2025", status: "pago", paymentDate: "03/02/2025", value: "R$ 850,00", statusColor: "text-green-400" },
    { mes: "Março/2025", status: "pago", paymentDate: "05/03/2025", value: "R$ 850,00", statusColor: "text-green-400" },
    { mes: "Abril/2025", status: "pago", paymentDate: "02/04/2025", value: "R$ 850,00", statusColor: "text-green-400" },
    { mes: "Maio/2025", status: "atrasado", paymentDate: "15/05/2025", value: "R$ 850,00", statusColor: "text-red-400" },
    { mes: "Junho/2025", status: "a vencer", paymentDate: "05/06/2025", value: "R$ 850,00", statusColor: "text-yellow-400" },
    { mes: "Julho/2025", status: "a vencer", paymentDate: "05/07/2025", value: "R$ 850,00", statusColor: "text-yellow-400" },
    { mes: "Agosto/2025", status: "a vencer", paymentDate: "05/08/2025", value: "R$ 850,00", statusColor: "text-yellow-400" }
  ];

  const importantDays = [
    { day: 8, event: "Prova Final", type: "prova" },
    { day: 15, event: "Entrega TCC", type: "entrega" },
    { day: 22, event: "Seminário", type: "evento" },
    { day: 28, event: "Reposição", type: "reposicao" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pago': return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'atrasado': return <XCircle className="h-4 w-4 text-red-400" />;
      case 'a vencer': return <AlertCircle className="h-4 w-4 text-yellow-400" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-yellow-400 mb-2">
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

      {/* Próximas Aulas */}
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <h2 className="text-xl font-semibold text-yellow-400 mb-6 flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Próximas Aulas
        </h2>

        <div className="space-y-4">
          {nextClasses.map((aula, index) => (
            <div key={index} className={`${aula.color} rounded-lg p-4 border-l-4 transition-all hover:shadow-lg hover:scale-[1.01]`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-white">
                  {aula.discipline} • {aula.classes} Aulas
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${aula.modality === 'Presencial' ? 'bg-blue-600 text-blue-100' :
                  aula.modality === 'Online' ? 'bg-green-600 text-green-100' :
                    'bg-purple-600 text-purple-100'
                  }`}>
                  {aula.modality}
                </span>
              </div>

              <div className="flex items-center gap-4 text-gray-300 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{aula.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{aula.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{aula.modality}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabela de pagamentos */}
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <h2 className="text-xl font-semibold text-yellow-400 mb-6 flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Situação Financeira
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-gray-300 font-semibold">Mês</th>
                <th className="text-left py-3 px-4 text-gray-300 font-semibold">Status</th>
                <th className="text-left py-3 px-4 text-gray-300 font-semibold">Data do Pagamento</th>
                <th className="text-right py-3 px-4 text-gray-300 font-semibold">Valor</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index} className="border-b border-gray-800 hover:bg-gray-800 transition-colors">
                  <td className="py-3 px-4 text-gray-200">{payment.mes}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(payment.status)}
                      <span className={`capitalize font-medium ${payment.statusColor}`}>
                        {payment.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{payment.paymentDate}</td>
                  <td className="py-3 px-4 text-right text-gray-200 font-medium">{payment.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Calendário Simples */}
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <h2 className="text-xl font-semibold text-yellow-400 mb-6">
          Eventos Importantes - Julho 2025
        </h2>

        <div className="grid grid-cols-7 gap-2 mb-4">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
            <div key={day} className="text-center text-gray-400 font-semibold py-2">
              {day}
            </div>
          ))}

          {/* Dias do mês (exemplo para julho) */}
          {Array.from({ length: 30 }, (_, i) => i + 1).map(day => {
            const event = importantDays.find(e => e.day === day);
            return (
              <div
                key={day}
                className={`aspect-square flex items-center justify-center rounded-lg text-sm transition-all ${event
                  ? 'bg-yellow-600 text-white font-bold hover:bg-yellow-500 cursor-pointer'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                title={event ? event.event : ''}
              >
                {day}
              </div>
            );
          })}
        </div>

        {/* Legenda dos eventos */}
        <div className="border-t border-gray-700 pt-4">
          <h3 className="text-sm font-semibold text-gray-300 mb-2">Eventos do Mês:</h3>
          <div className="space-y-1">
            {importantDays.map((event, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
                <span className="text-gray-300">
                  <strong>Dia {event.day}:</strong> {event.event}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}