import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const CONTACT_EMAIL = 'desenvolvimento@complexti.com.br';
const LAST_UPDATE = '18 de novembro de 2026';

const sections = [
  {
    title: '1. Quem somos',
    body: [
      'Esta Política de Privacidade descreve como a COMPLEXTI CONSULTORIA E DESENVOLVIMENTO EM TECNOLOGIA DA INFORMAÇÃO LTDA (“COMPLEXTI”, “nós” ou “nossa”), inscrita no CNPJ nº 52.349.662/0001-75, coleta, utiliza, armazena e protege dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD) e demais normas aplicáveis.',
      'Esta política se aplica ao site institucional da COMPLEXTI e aos canais de contato disponibilizados nele, incluindo formulário de contato e WhatsApp.',
    ],
  },
  {
    title: '2. Dados que coletamos',
    body: [
      'Coletamos apenas os dados necessários para atender às finalidades descritas nesta política:',
    ],
    list: [
      'Dados de identificação e contato fornecidos por você: nome, e-mail e mensagem enviados pelo formulário de contato;',
      'Dados de contato enviados por WhatsApp, quando você inicia ou mantém conversa conosco;',
      'Dados técnicos de navegação de natureza limitada, como endereço IP, tipo de navegador, páginas acessadas e data/hora de acesso, quando gerados automaticamente pelo servidor ou pela infraestrutura de hospedagem;',
      'Dados eventualmente necessários para cumprimento de obrigações legais, regulatórias ou contratuais.',
    ],
  },
  {
    title: '3. Finalidades do tratamento',
    body: [
      'Utilizamos os dados pessoais para:',
    ],
    list: [
      'Responder solicitações, orçamentos e mensagens enviadas pelos canais de contato;',
      'Manter comunicação comercial e técnica relacionada aos serviços da COMPLEXTI, quando houver interesse legítimo ou consentimento;',
      'Melhorar a segurança, a estabilidade e o desempenho do site;',
      'Cumprir obrigações legais, regulatórias e ordens de autoridades competentes;',
      'Exercer direitos em processos administrativos, judiciais ou arbitrais.',
    ],
  },
  {
    title: '4. Bases legais',
    body: [
      'O tratamento de dados pessoais pela COMPLEXTI pode se apoiar, conforme o caso, nas seguintes bases legais da LGPD:',
    ],
    list: [
      'Execução de procedimento preliminar relacionado a contrato ou de contrato do qual o titular seja parte;',
      'Cumprimento de obrigação legal ou regulatória;',
      'Legítimo interesse da COMPLEXTI, observado o equilíbrio com os direitos e liberdades fundamentais do titular;',
      'Consentimento do titular, quando exigido.',
    ],
  },
  {
    title: '5. Compartilhamento de dados',
    body: [
      'Não vendemos dados pessoais. Podemos compartilhar dados apenas quando necessário para:',
    ],
    list: [
      'Prestadores de serviços que atuam em nosso nome, como hospedagem, e-mail e infraestrutura técnica, sob obrigação de confidencialidade e segurança;',
      'Autoridades públicas, quando houver determinação legal ou requisição válida;',
      'Parceiros envolvidos na execução de projetos contratados, limitada aos dados indispensáveis e com as salvaguardas adequadas.',
    ],
  },
  {
    title: '6. Cookies e tecnologias semelhantes',
    body: [
      'O site institucional da COMPLEXTI pode utilizar cookies essenciais ao funcionamento da página e, eventualmente, cookies ou metadados técnicos relacionados a verificação de propriedade do site perante mecanismos de busca.',
      'Você pode configurar o navegador para bloquear ou apagar cookies. A desativação de cookies essenciais pode prejudicar algumas funcionalidades da navegação.',
    ],
  },
  {
    title: '7. Armazenamento e retenção',
    body: [
      'Os dados são armazenados em ambiente controlado, com acesso restrito às pessoas e sistemas necessários para as finalidades desta política.',
      'Mantemos os dados pelo tempo necessário para atender à solicitação do titular, cumprir obrigações legais e preservar direitos. Após esse período, os dados são eliminados ou anonimizados, salvo hipótese legal de conservação.',
    ],
  },
  {
    title: '8. Segurança da informação',
    body: [
      'Adotamos medidas técnicas e administrativas razoáveis para proteger os dados pessoais contra acessos não autorizados, destruição, perda, alteração ou divulgação indevida. Nenhuma transmissão pela internet é absolutamente segura; mesmo assim, trabalhamos continuamente para reduzir riscos e reforçar controles.',
    ],
  },
  {
    title: '9. Direitos do titular',
    body: [
      'Nos termos da LGPD, você pode solicitar:',
    ],
    list: [
      'Confirmação da existência de tratamento;',
      'Acesso aos dados;',
      'Correção de dados incompletos, inexatos ou desatualizados;',
      'Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei;',
      'Portabilidade dos dados, observadas as regulamentações da Autoridade Nacional de Proteção de Dados (ANPD);',
      'Informação sobre compartilhamentos;',
      'Revogação do consentimento, quando o tratamento estiver baseado nele;',
      'Oposição a tratamentos realizados com fundamento em uma das hipóteses de dispensa de consentimento, em caso de descumprimento da LGPD.',
    ],
    after: `Para exercer seus direitos, envie um e-mail para ${CONTACT_EMAIL} com o assunto “LGPD — Direitos do titular”. Podemos solicitar informações adicionais para confirmar sua identidade antes de atender a solicitação.`,
  },
  {
    title: '10. Dados de crianças e adolescentes',
    body: [
      'Nossos serviços e canais institucionais não são direcionados a crianças. Não coletamos intencionalmente dados pessoais de menores de 12 anos. Caso identifiquemos essa coleta indevida, adotaremos medidas para excluir os dados com a maior brevidade possível.',
    ],
  },
  {
    title: '11. Alterações desta política',
    body: [
      'Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças legais, técnicas ou operacionais. A versão vigente estará sempre disponível nesta página, com a data da última atualização.',
    ],
  },
  {
    title: '12. Contato do controlador',
    body: [
      'Controlador dos dados:',
      'COMPLEXTI CONSULTORIA E DESENVOLVIMENTO EM TECNOLOGIA DA INFORMAÇÃO LTDA',
      'CNPJ: 52.349.662/0001-75',
      `E-mail: ${CONTACT_EMAIL}`,
      'WhatsApp: (61) 99368-8923',
    ],
  },
];

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Política de Privacidade | COMPLEXTI';
    return () => {
      document.title = 'COMPLEXTI — Consultoria & Desenvolvimento';
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-green-400 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao site
          </a>
          <span className="text-sm font-semibold tracking-tight text-white">COMPLEXTI</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <p className="text-green-400 font-bold tracking-wider uppercase text-sm mb-3">Legal</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Política de Privacidade</h1>
        <p className="text-slate-400 text-sm mb-10">Última atualização: {LAST_UPDATE}</p>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-white mb-3">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-slate-400 leading-relaxed mb-3">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="space-y-2 mb-3">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-2 text-slate-400 leading-relaxed">
                      <span className="text-green-400 mt-1.5 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {'after' in section && section.after && (
                <p className="text-slate-400 leading-relaxed">{section.after}</p>
              )}
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} COMPLEXTI. Todos os direitos reservados.</p>
          <a href="/" className="hover:text-green-400 transition-colors">complexti.com.br</a>
        </div>
      </footer>
    </div>
  );
}
