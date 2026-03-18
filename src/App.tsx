import { motion, useScroll, useSpring } from 'motion/react';
import { ChevronRight, Code, Smartphone, PenTool, Users, ArrowRight, Mail, Phone, CheckCircle2, Terminal, Layers, Zap } from 'lucide-react';

/* ── Logo ── */
const Logo = () => (
  <div className="flex items-center gap-0">
    <div className="w-24 h-24 flex-shrink-0 -mr-3">
      <img src="/logo_icon.png" alt="Complexti" className="w-full h-full object-contain" />
    </div>
    <div className="flex flex-col">
      <span className="text-2xl font-black tracking-tighter leading-none text-white">COMPLEXTI</span>
      <span className="text-[0.55rem] font-semibold tracking-widest uppercase text-slate-400 mt-0.5">Consultoria & Desenvolvimento</span>
    </div>
  </div>
);

/* ── Barra de progresso de scroll ── */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 z-[100]"
    />
  );
};

/* ── Partículas flutuantes ── */
const Particles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-400/30"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [-20, 20, -20], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};


/* ── Navbar ── */
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <Logo />
      <div className="hidden md:flex items-center gap-8">
        {['sobre', 'servicos', 'metodologia', 'contato'].map(s => (
          <a key={s} href={`#${s}`}
            className="text-sm font-medium text-slate-300 hover:text-green-400 transition-colors capitalize relative group">
            {s === 'servicos' ? 'Serviços' : s.charAt(0).toUpperCase() + s.slice(1)}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-green-400 transition-all group-hover:w-full" />
          </a>
        ))}
      </div>
      <motion.a
        href="#contato"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-slate-900 bg-green-400 rounded-full hover:bg-green-300 transition-colors shadow-lg shadow-green-500/20"
      >
        Fale Conosco
      </motion.a>
    </div>
  </nav>
);

/* ── Hero ── */
const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
    <Particles />
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-b from-blue-500/20 to-purple-500/20 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-t from-green-500/20 to-emerald-500/20 blur-3xl"
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
       
        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Transformamos <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
            Ideias em Software
          </span>
        </h1>
        <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
          A COMPLEXTI é especializada em soluções mobile e web. Oferecemos design, desenvolvimento, teste e manutenção com as melhores práticas do mercado.
        </p>
        <div className="flex flex-wrap gap-4">
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-green-400 rounded-full hover:bg-green-300 transition-all shadow-lg shadow-green-500/25"
          >
            Iniciar Projeto <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
          <motion.a
            href="#servicos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-slate-800 rounded-full hover:bg-slate-700 transition-all border border-slate-700"
          >
            Nossos Serviços
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative hidden lg:block"
      >
        <div className="relative w-full aspect-square max-w-lg mx-auto">
          <motion.div
            animate={{ rotate: [6, 8, 6] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl border border-white/10 backdrop-blur-sm"
          />
          <div className="absolute inset-0 bg-slate-800 rounded-3xl transform -rotate-3 border border-slate-700 shadow-2xl overflow-hidden flex flex-col">
            <div className="h-12 border-b border-slate-700 flex items-center px-4 gap-2 bg-slate-800/50">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="p-6 font-mono text-sm text-slate-300 flex-1 flex flex-col justify-center">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}>
                <p><span className="text-purple-400">import</span> {'{'} <span className="text-blue-400">Innovation</span> {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'@complexti/core'</span>;</p>
                <br />
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">buildFuture</span> = <span className="text-purple-400">async</span> () {'=>'} {'{'}</p>
                <p className="pl-4"><span className="text-purple-400">await</span> Innovation.<span className="text-blue-400">develop</span>({'{'}</p>
                <p className="pl-8">platform: <span className="text-green-400">['Web', 'iOS', 'Android']</span>,</p>
                <p className="pl-8">quality: <span className="text-orange-400">100</span>,</p>
                <p className="pl-8">agile: <span className="text-orange-400">true</span></p>
                <p className="pl-4">{'}'});</p>
                <p>{'}'};</p>
              </motion.div>
            </div>
          </div>

          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}
            className="absolute -right-8 top-20 bg-slate-800 p-4 rounded-2xl border border-slate-700 shadow-xl shadow-blue-500/10 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Flutter</p>
              <p className="text-xs text-slate-400">Mobile Apps</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}
            className="absolute -left-8 bottom-20 bg-slate-800 p-4 rounded-2xl border border-slate-700 shadow-xl shadow-green-500/10 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Web Dev</p>
              <p className="text-xs text-slate-400">React & Node</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ── About ── */
const About = () => (
  <section id="sobre" className="py-24 bg-slate-950">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-green-400 font-bold tracking-wider uppercase text-sm mb-2">Sobre a Empresa</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            COMPLEXTI CONSULTORIA E DESENVOLVIMENTO EM TECNOLOGIA DA INFORMAÇÃO LTDA
          </h3>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>A COMPLEXTI é uma empresa de desenvolvimento de software especializada em soluções mobile e web.</p>
            <p>Nós oferecemos serviços de design, desenvolvimento, teste e manutenção de aplicativos para diversas plataformas, como Android, iOS e Web.</p>
            <p>Nossa equipe é formada por profissionais qualificados e experientes, que utilizam as melhores práticas e ferramentas do mercado.</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            animate={{ rotate: [3, 5, 3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-3xl"
          />
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            alt="Equipe trabalhando"
            className="relative rounded-3xl shadow-2xl border border-slate-800 object-cover aspect-square"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

/* ── Services ── */
const Services = () => (
  <section id="servicos" className="py-24 bg-slate-900">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-green-400 font-bold tracking-wider uppercase text-sm mb-2">Nossos Serviços</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Soluções Completas em TI</h3>
        <p className="text-lg text-slate-400">Desenvolvemos soluções sob medida para impulsionar o seu negócio na era digital.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Smartphone, title: 'Mobile', desc: 'Desenvolvimento de aplicativos nativos e híbridos (Flutter) para iOS e Android.', color: 'from-blue-500/20 to-blue-600/5', glow: 'group-hover:shadow-blue-500/20', border: 'group-hover:border-blue-500/50', iconColor: 'text-blue-400', iconBg: 'bg-blue-500/10' },
          { icon: Code, title: 'Web', desc: 'Sistemas web complexos, portais e landing pages de alta performance.', color: 'from-green-500/20 to-green-600/5', glow: 'group-hover:shadow-green-500/20', border: 'group-hover:border-green-500/50', iconColor: 'text-green-400', iconBg: 'bg-green-500/10' },
          { icon: PenTool, title: 'UI/UX Design', desc: 'Interfaces modernas e intuitivas focadas na experiência do usuário.', color: 'from-purple-500/20 to-purple-600/5', glow: 'group-hover:shadow-purple-500/20', border: 'group-hover:border-purple-500/50', iconColor: 'text-purple-400', iconBg: 'bg-purple-500/10' },
          { icon: Users, title: 'Consultoria', desc: 'Estratégia de TI, arquitetura de software e transformação digital.', color: 'from-cyan-500/20 to-cyan-600/5', glow: 'group-hover:shadow-cyan-500/20', border: 'group-hover:border-cyan-500/50', iconColor: 'text-cyan-400', iconBg: 'bg-cyan-500/10' },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className={`relative bg-slate-800/50 p-8 rounded-3xl border border-slate-700 ${item.border} transition-all duration-300 group shadow-xl ${item.glow} overflow-hidden`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            <div className={`relative w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center ${item.iconColor} mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
              <item.icon className="w-7 h-7" />
            </div>
            <h4 className="relative text-xl font-bold text-white mb-3">{item.title}</h4>
            <p className="relative text-slate-400 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ── Methodology ── */
const Methodology = () => (
  <section id="metodologia" className="py-24 bg-slate-900 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-green-400 font-bold tracking-wider uppercase text-sm mb-2">Metodologias Ágeis</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Metodologia Scrum</h3>
        <p className="text-lg text-slate-400">
          Utilizamos a metodologia Scrum para gerenciar os nossos projetos de software, entregando produtos de qualidade em menor tempo.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Layers, title: 'Product Backlog', desc: 'Levantamento e priorização de todos os requisitos e funcionalidades do projeto.' },
          { icon: Zap, title: 'Sprints', desc: 'Ciclos de 2 a 4 semanas focados em entregar incrementos funcionais do produto.' },
          { icon: CheckCircle2, title: 'Entrega Contínua', desc: 'Produto ou funcionalidade concluída e validada ao final de cada iteração.' },
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-green-500/40 relative overflow-hidden transition-all duration-300 group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-bl-full group-hover:bg-green-500/10 transition-colors" />
            <div className="w-14 h-14 rounded-2xl bg-green-400/10 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
              <step.icon className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
            <p className="text-slate-400 leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-16 bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="flex-1">
          <h4 className="text-2xl font-bold text-white mb-4">Papéis do Scrum</h4>
          <p className="text-slate-400 mb-6">
            Nós seguimos os princípios e as práticas do Scrum, que envolvem três papéis principais: o Product Owner, o Scrum Master e a equipe de desenvolvimento.
          </p>
          <ul className="space-y-3">
            {['Product Owner', 'Scrum Master', 'Equipe de Desenvolvimento'].map((role, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-center gap-3 text-slate-300"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                {role}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3 aspect-square max-w-[250px] relative">
          <div className="absolute inset-0 border-8 border-slate-700 rounded-full" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 border-8 border-green-400 rounded-full border-t-transparent border-r-transparent"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="block text-3xl font-bold text-white">2-4</span>
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Semanas</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ── Contact ── */
const Contact = () => (
  <section id="contato" className="py-24 bg-slate-950">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-green-400 font-bold tracking-wider uppercase text-sm mb-2">Contato</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Vamos construir algo incrível juntos.</h3>

          <div className="space-y-8">
            {[
              { icon: Terminal, title: 'Empresa', content: 'COMPLEXTI CONSULTORIA E DESENVOLVIMENTO EM TECNOLOGIA DA INFORMAÇÃO LTDA', sub: 'CNPJ: 52.349.662/0001-75' },
              { icon: Phone, title: 'Telefone', content: '(61) 9 9324 - 6547', sub: null },
              { icon: Mail, title: 'E-mail', content: 'desenvolvimento@complexti.com.br', sub: null, href: 'mailto:desenvolvimento@complexti.com.br' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-green-400 shrink-0 border border-slate-800 group-hover:border-green-500/50 group-hover:bg-green-500/10 transition-all">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  {item.href
                    ? <a href={item.href} className="text-slate-400 hover:text-green-400 transition-colors">{item.content}</a>
                    : <p className="text-slate-400">{item.content}</p>}
                  {item.sub && <p className="text-slate-500 text-sm mt-1">{item.sub}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-slate-700 transition-colors"
        >
          <h4 className="text-2xl font-bold text-white mb-6">Envie uma mensagem</h4>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {[
              { label: 'Nome', type: 'text', placeholder: 'Seu nome completo' },
              { label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-sm font-medium text-slate-400 mb-1">{f.label}</label>
                <input type={f.type} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all" placeholder={f.placeholder} />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Mensagem</label>
              <textarea rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all resize-none" placeholder="Como podemos ajudar?" />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-green-400 text-slate-900 font-bold rounded-xl px-4 py-4 hover:bg-green-300 transition-colors mt-4 shadow-lg shadow-green-500/20"
            >
              Enviar Mensagem
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ── Footer ── */
const Footer = () => (
  <footer className="bg-slate-900 py-8 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <Logo />
      <p className="text-slate-500 text-sm text-center md:text-left">
        © {new Date().getFullYear()} COMPLEXTI. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

/* ── App ── */
export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-green-500/30">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Methodology />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
