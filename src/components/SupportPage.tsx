import React, { useState } from 'react';
import { HelpCircle, Mail, Phone, MessageCircle, FileText } from 'lucide-react';

export default function SupportPage() {
  const [ticket, setTicket] = useState({
    subject: '',
    description: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTicket(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicket({ subject: '', description: '', email: '' });
    alert('Seu ticket foi enviado com sucesso!');
  };

  return (
    <div className="space-y-8">
      {/* Cabeçalho */}
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <div className="flex items-center mb-2">
          <HelpCircle className="h-6 w-6 text-yellow-400 mr-2" />
          <h1 className="text-2xl font-bold text-yellow-400">Central de Suporte</h1>
        </div>
        <p className="text-sm text-gray-300">
          Aqui você encontra informações e pode abrir um ticket para resolver seus problemas.
        </p>
      </div>

      {/* Contato Rápido */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 flex flex-col items-center text-center">
          <Mail className="h-8 w-8 text-yellow-400 mb-2" />
          <h2 className="text-lg font-semibold text-white">E-mail</h2>
          <p className="text-gray-300 text-sm">suporte@faculdadeunisp.edu.br</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 flex flex-col items-center text-center">
          <Phone className="h-8 w-8 text-yellow-400 mb-2" />
          <h2 className="text-lg font-semibold text-white">Telefone</h2>
          <p className="text-gray-300 text-sm">(11) 4000-1234</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 flex flex-col items-center text-center">
          <MessageCircle className="h-8 w-8 text-yellow-400 mb-2" />
          <h2 className="text-lg font-semibold text-white">Chat Online</h2>
          <p className="text-gray-300 text-sm">Disponível 24h</p>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <div className="flex items-center mb-4">
          <FileText className="h-6 w-6 text-yellow-400 mr-2" />
          <h2 className="text-xl font-semibold text-white">Perguntas Frequentes</h2>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-white font-medium">Como faço para recuperar minha senha?</h3>
            <p className="text-gray-300 text-sm">
              Vá em “Esqueci a senha” na tela de login e siga as instruções enviadas para o seu e-mail.
            </p>
          </div>
          <div>
            <h3 className="text-white font-medium">Como acessar minhas notas?</h3>
            <p className="text-gray-300 text-sm">
              No menu principal, clique em “Meu Curso” e depois em “Minhas Notas” para visualizar seu histórico.
            </p>
          </div>
          <div>
            <h3 className="text-white font-medium">Como solicito certificado de conclusão?</h3>
            <p className="text-gray-300 text-sm">
              Acesse a aba “Certificados” no seu painel e solicite o certificado desejado.
            </p>
          </div>
        </div>
      </div>

      {/* Formulário de Abertura de Ticket */}
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <div className="flex items-center mb-4">
          <FileText className="h-6 w-6 text-yellow-400 mr-2" />
          <h2 className="text-xl font-semibold text-white">Abrir um Ticket</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1" htmlFor="subject">
              Assunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={ticket.subject}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 text-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Descreva brevemente seu problema"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1" htmlFor="description">
              Descrição
            </label>
            <textarea
              id="description"
              name="description"
              value={ticket.description}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 text-gray-100 rounded-md p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Explique detalhadamente o que está acontecendo"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1" htmlFor="email">
              Seu E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={ticket.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 text-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="seu.email@exemplo.com"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-500"
          >
            Enviar Ticket
          </button>
        </form>
      </div>
    </div>
  );
}
