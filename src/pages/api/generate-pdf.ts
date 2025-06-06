import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../lib/db';
import PDFDocument from 'pdfkit';
import path from 'path';
import fs from 'fs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  if (!userId) return res.status(400).json({ error: 'userId é obrigatório' });

  try {
    // 1) Fetch user from DB (como antes) ...
    const userResult = await query(
      `SELECT first_name, last_name, registration, created_at, course
       FROM users WHERE id = $1`,
      [userId]
    );
    if (userResult.rowCount === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    const user = userResult.rows[0];
    const fullName = `${user.first_name} ${user.last_name}`;

    // 2) Prepare headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=declaracao-matricula-${user.registration}.pdf`
    );

    // 3) Create PDF
    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    doc.pipe(res);

    // --- Logo PNG no canto superior esquerdo ---
    const logoPath = path.join(process.cwd(), 'public', 'unisp_logo.png');
    if (fs.existsSync(logoPath)) {
      doc.image(logoPath, 50, 50, { width: 100 });
    } else {
      console.warn('Logo não encontrado em', logoPath);
    }
    doc.moveDown(6);

    // --- Título ---
    doc
      .font('Helvetica-Bold')
      .fontSize(16)
      .text('DECLARAÇÃO DE MATRÍCULA', { align: 'center' });

    doc.moveDown(2);

    // --- Parágrafo principal ---
    doc
      .font('Helvetica')
      .fontSize(12)
      .text(
        `Declaramos para os devidos fins que o(a) aluno(a) ${fullName}, matrícula nº ${user.registration}, encontra-se regularmente matriculado(a) no curso de ${user.course} nesta Instituição de Ensino.`,
        { align: 'justify', lineGap: 4 }
      );

    doc.moveDown(2);

    // --- Data ---
    const hoje = new Date().toLocaleDateString('pt-BR');
    doc.font('Helvetica-Bold').text(`Curitiba, ${hoje}`, { align: 'left' });

    doc.moveDown(4);

    // --- Placeholder para assinatura ---
    const sigX = 50;
    const sigY = doc.y;
    doc
      .rect(sigX, sigY, 200, 50)
      .strokeColor('#aaaaaa')
      .dash(2, { space: 2 })
      .stroke();
    doc.fillColor('#aaaaaa').text('Assinatura', sigX, sigY + 55, { width: 200, align: 'center' });

    doc.moveDown(4);

    // --- Rodapé ---
    doc
      .font('Helvetica')
      .fontSize(10)
      .fillColor('#555555')
      .text('Av. Sete de Setembro, 1026 – Batel – Curitiba, PR – 08433-23', { align: 'center' })
      .moveDown(0.5)
      .text('www.faculdadeunisp.com.br', {
        align: 'center',
        link: 'https://www.faculdadeunisp.com.br',
      });

    doc.end();
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    res.status(500).json({ error: 'Erro interno ao gerar PDF' });
  }
}
