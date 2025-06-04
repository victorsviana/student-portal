import React from 'react';
import { FileText, Eye, Download } from 'lucide-react';

const documentos = [
  {
    id: 1,
    nome: 'Histórico Escolar',
    tipo: 'PDF',
    dataUpload: '2024-01-15',
    tamanho: '2.4 MB'
  },
  {
    id: 2,
    nome: 'Certificado de Conclusão - Módulo 1',
    tipo: 'PDF',
    dataUpload: '2024-02-10',
    tamanho: '1.8 MB'
  },
  {
    id: 3,
    nome: 'Declaração de Matrícula',
    tipo: 'PDF',
    dataUpload: '2024-01-05',
    tamanho: '1.2 MB'
  },
  {
    id: 4,
    nome: 'Certificado de Conclusão - Módulo 2',
    tipo: 'PDF',
    dataUpload: '2024-03-15',
    tamanho: '1.9 MB'
  }
];

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <h1 className="text-2xl font-bold text-yellow-400 mb-2">
          Documentos
        </h1>
        <p className="text-gray-300">
          Você está na página de documentos. Aqui você pode visualizar e baixar seus documentos acadêmicos.
        </p>
      </div>
      <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-800">
          <h2 className="text-lg font-semibold text-white flex items-center">
            <FileText className="h-5 w-5 text-yellow-400 mr-2" />
            Meus Documentos ({documentos.length})
          </h2>
        </div>
        <div className="divide-y divide-gray-800">
          {documentos.map((documento) => (
            <div key={documento.id} className="px-6 py-4 hover:bg-gray-800 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-white font-medium">{documento.nome}</h3>
                  <div className="flex items-center space-x-4 mt-1 text-sm text-gray-400">
                    <span>Tipo: {documento.tipo}</span>
                    <span>Tamanho: {documento.tamanho}</span>
                    <span>Upload: {new Date(documento.dataUpload).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-lg hover:bg-gray-700 transition-colors text-gray-400 hover:text-yellow-400">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-gray-700 transition-colors text-gray-400 hover:text-yellow-400">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
