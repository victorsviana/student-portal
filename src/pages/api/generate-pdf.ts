import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../lib/db'; 
import PDFDocument from 'pdfkit';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // const { userId } = req.query;
  const userId = 1;

  if (!userId) {
    return res.status(400).json({ error: 'userId é obrigatório' });
  }

  try {
    const userResult = await query(
      `SELECT id, first_name, last_name, email, course, created_at, progress, registration
       FROM users
       WHERE id = $1`,
      [userId]
    );

    if (userResult.rowCount === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const user = userResult.rows[0];

    // 2) (Opcional) Buscar documentos associados, se quiser listar no PDF
    // const docsResult = await query(
    //   `SELECT name, created_at, file_key FROM documents WHERE user_id=$1`,
    //   [userId]
    // );
    // const documents = docsResult.rows; // array de { name, created_at, file_key }

    // 3) Gerar PDF usando PDFKit
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=usuario-${user.registration}.pdf`
    );

    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    doc.pipe(res);

    // Cabeçalho simples
    doc
      .fontSize(20)
      .fillColor('#333')
      .text('Dados do Usuário', { align: 'center' })
      .moveDown(1.5);

    // Informações do usuário
    doc
      .fontSize(12)
      .fillColor('#000')
      .text(`Nome: ${user.first_name} ${user.last_name}`)
      .text(`Matrícula: ${user.registration}`)
      .text(`E-mail: ${user.email}`)
      .text(`Curso: ${user.course}`)
      .text(`Aluno desde: ${new Date(user.created_at).toLocaleDateString('pt-BR')}`)
      .text(`Progresso: ${user.progress}%`)
      .moveDown(1);

    // Se houver documentos associados, listar no PDF
    // if (documents.length > 0) {
    //   doc
    //     .fontSize(16)
    //     .fillColor('#333')
    //     .text('Documentos Disponíveis:', { underline: true })
    //     .moveDown(0.5);

    //   documents.forEach((d: { name: string; created_at: string; file_key: string }) => {
    //     doc
    //       .fontSize(12)
    //       .fillColor('#000')
    //       .text(`- ${d.name} (${new Date(d.created_at).toLocaleDateString('pt-BR')})`);
    //   });
    // }

    doc.end();
    // O .end() dispara o stream e finaliza a resposta
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    return res.status(500).json({ error: 'Erro interno ao gerar PDF' });
  }
}
