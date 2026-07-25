require('dotenv').config();

const express = require('express');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5001;

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const CONTACT_TO = process.env.CONTACT_TO || SMTP_USER;

app.use(express.json({ limit: '32kb' }));

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

app.post('/api/contact', async (req, res) => {
  try {
    const nome = String(req.body?.nome || '').trim();
    const email = String(req.body?.email || '').trim();
    const mensagem = String(req.body?.mensagem || '').trim();

    if (!nome || nome.length < 2 || nome.length > 120) {
      return res.status(400).json({ ok: false, error: 'Informe um nome válido.' });
    }
    if (!email || !isValidEmail(email) || email.length > 160) {
      return res.status(400).json({ ok: false, error: 'Informe um e-mail válido.' });
    }
    if (!mensagem || mensagem.length < 5 || mensagem.length > 4000) {
      return res.status(400).json({ ok: false, error: 'Informe uma mensagem válida.' });
    }

    if (!SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
      console.error('SMTP não configurado. Defina SMTP_USER, SMTP_PASS e CONTACT_TO no .env');
      return res.status(500).json({ ok: false, error: 'Serviço de e-mail não configurado.' });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS.replace(/\s+/g, ''),
      },
    });

    await transporter.sendMail({
      from: `"Site Complexti" <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Contato pelo site — ${nome}`,
      text: [
        'Nova mensagem pelo formulário do site.',
        '',
        `Nome: ${nome}`,
        `E-mail: ${email}`,
        '',
        mensagem,
      ].join('\n'),
      html: `
        <h2>Nova mensagem pelo site</h2>
        <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${escapeHtml(mensagem).replace(/\n/g, '<br>')}</p>
      `,
    });

    return res.json({ ok: true });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return res.status(500).json({ ok: false, error: 'Não foi possível enviar a mensagem. Tente novamente.' });
  }
});

const distPath = path.join(__dirname, 'dist');
const hasDist = fs.existsSync(path.join(distPath, 'index.html'));

if (hasDist) {
  app.use(express.static(distPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) return next();
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API de contato em http://0.0.0.0:${PORT}/api/contact`);
  if (hasDist) {
    console.log(`Site estático em http://0.0.0.0:${PORT}`);
  }
});

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
