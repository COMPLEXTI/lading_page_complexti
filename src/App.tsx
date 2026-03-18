import { motion } from 'motion/react';
import { ChevronRight, Code, Smartphone, PenTool, Users, ArrowRight, Mail, Phone, CheckCircle2, Terminal, Layers, Zap } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-0">
    <div className="w-24 h-24 flex-shrink-0 -mr-3">
      <video
        src="/video_complexti_2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-contain"
      />
    </div>
    <div className="flex flex-col">
      <span className="text-2xl font-black tracking-tighter leading-none text-white">COMPLEXTI</span>
      <span className="text-[0.55rem] font-semibold tracking-widest uppercase text-slate-400 mt-0.5">Consultoria & Desenvolvimento</span>
    </div>
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <Logo />
      <div className="hidden md:flex items-center gap-8">
        <a href="#sobre" className="text-sm font-medium text-slate-300 hover:text-green-400 transition-colors">Sobre</a>
        <a href="#servicos" className="text-sm font-medium text-slate-300 hover:text-green-400 transition-colors">Serviços</a>
        <a href="#metodologia" className="text-sm font-medium text-slate-300 hover:text-green-400 transition-colors">Metodologia</a>
        <a href="#contato" className="text-sm font-medium text-slate-300 hover:text-green-400 transition-colors">Contato</a>
      </div>
      <a 
        href="#contato"
        className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-slate-900 bg-green-400 rounded-full hover:bg-green-300 transition-colors"
      >
        Fale Conosco
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
    {/* Background Effects */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-b from-blue-500/10 to-purple-500/10 blur-3xl" />
      <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-t from-green-500/10 to-emerald-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       
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
          <a 
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-green-400 rounded-full hover:bg-green-300 transition-all hover:scale-105"
          >
            Iniciar Projeto
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a 
            href="#servicos"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-slate-800 rounded-full hover:bg-slate-700 transition-all border border-slate-700"
          >
            Nossos Serviços
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative hidden lg:block"
      >
        <div className="relative w-full aspect-square max-w-lg mx-auto">
          {/* Abstract Tech Illustration */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-6 border border-white/10 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-slate-800 rounded-3xl transform -rotate-3 border border-slate-700 shadow-2xl overflow-hidden flex flex-col">
            {/* Fake Editor Header */}
            <div className="h-12 border-b border-slate-700 flex items-center px-4 gap-2 bg-slate-800/50">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            {/* Fake Code */}
            <div className="p-6 font-mono text-sm text-slate-300 flex-1 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
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
          
          {/* Floating Badges */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -right-8 top-20 bg-slate-800 p-4 rounded-2xl border border-slate-700 shadow-xl flex items-center gap-3"
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
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -left-8 bottom-20 bg-slate-800 p-4 rounded-2xl border border-slate-700 shadow-xl flex items-center gap-3"
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

const About = () => (
  <section id="sobre" className="py-24 bg-slate-950">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-green-400 font-bold tracking-wider uppercase text-sm mb-2">Sobre a Empresa</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            COMPLEXTI CONSULTORIA E DESENVOLVIMENTO EM TECNOLOGIA DA INFORMAÇÃO LTDA
          </h3>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              A COMPLEXTI é uma empresa de desenvolvimento de software especializada em soluções mobile e web.
            </p>
            <p>
              Nós oferecemos serviços de design, desenvolvimento, teste e manutenção de aplicativos para diversas plataformas, como Android, iOS e Web.
            </p>
            <p>
              Nossa equipe é formada por profissionais qualificados e experientes, que utilizam as melhores práticas e ferramentas do mercado. Nossos projetos são personalizados de acordo com as necessidades e objetivos de cada cliente, garantindo qualidade, funcionalidade e segurança.
            </p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-3xl transform rotate-3" />
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

const Services = () => (
  <section id="servicos" className="py-24 bg-slate-900">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-green-400 font-bold tracking-wider uppercase text-sm mb-2">Nossos Serviços</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Soluções Completas em TI</h3>
        <p className="text-lg text-slate-400">
          Desenvolvemos soluções sob medida para impulsionar o seu negócio na era digital.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Smartphone, title: "Mobile", desc: "Desenvolvimento de aplicativos nativos e híbridos (Flutter) para iOS e Android." },
          { icon: Code, title: "Web", desc: "Sistemas web complexos, portais e landing pages de alta performance." },
          { icon: PenTool, title: "UI/UX Design", desc: "Interfaces modernas e intuitivas focadas na experiência do usuário." },
          { icon: Users, title: "Consultoria", desc: "Estratégia de TI, arquitetura de software e transformação digital." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-green-500/50 transition-colors group"
          >
            <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <item.icon className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
            <p className="text-slate-400 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Methodology = () => (
  <section id="metodologia" className="py-24 bg-slate-900 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
    
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-green-400 font-bold tracking-wider uppercase text-sm mb-2">Metodologias Ágeis</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Metodologia Scrum</h3>
        <p className="text-lg text-slate-400">
          Utilizamos a metodologia Scrum para gerenciar os nossos projetos de software. Essa metodologia nos permite entregar produtos de qualidade em menor tempo, com flexibilidade, colaboração e melhoria contínua.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Layers,
            title: "Product Backlog",
            desc: "Levantamento e priorização de todos os requisitos e funcionalidades do projeto."
          },
          {
            icon: Zap,
            title: "Sprints",
            desc: "Ciclos de 2 a 4 semanas focados em entregar incrementos funcionais do produto."
          },
          {
            icon: CheckCircle2,
            title: "Entrega Contínua",
            desc: "Produto ou funcionalidade concluída e validada ao final de cada iteração."
          }
        ].map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-bl-full -z-10" />
            <div className="w-14 h-14 rounded-2xl bg-green-400/10 flex items-center justify-center text-green-400 mb-6">
              <step.icon className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
            <p className="text-slate-400 leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h4 className="text-2xl font-bold text-white mb-4">Papéis do Scrum</h4>
          <p className="text-slate-400 mb-6">
            Nós seguimos os princípios e as práticas do Scrum, que envolvem três papéis principais: o Product Owner, o Scrum Master e a equipe de desenvolvimento.
          </p>
          <ul className="space-y-3">
            {['Product Owner', 'Scrum Master', 'Equipe de Desenvolvimento'].map((role, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                {role}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3 aspect-square max-w-[250px] relative">
          {/* Abstract Scrum Circle */}
          <div className="absolute inset-0 border-8 border-slate-700 rounded-full" />
          <div className="absolute inset-0 border-8 border-green-400 rounded-full border-t-transparent border-r-transparent transform -rotate-45" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="block text-3xl font-bold text-white">2-4</span>
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Semanas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contato" className="py-24 bg-slate-950">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-green-400 font-bold tracking-wider uppercase text-sm mb-2">Contato</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Vamos construir algo incrível juntos.</h3>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-green-400 shrink-0 border border-slate-800">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Empresa</h4>
                <p className="text-slate-400">COMPLEXTI CONSULTORIA E DESENVOLVIMENTO EM TECNOLOGIA DA INFORMAÇÃO LTDA</p>
                <p className="text-slate-500 text-sm mt-1">CNPJ: 52.349.662/0001-75</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-green-400 shrink-0 border border-slate-800">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Telefone</h4>
                <p className="text-slate-400">(61) 9 9324 - 6547</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-green-400 shrink-0 border border-slate-800">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">E-mail</h4>
                <a href="mailto:desenvolvimento@msconsultoriati.com" className="text-slate-400 hover:text-green-400 transition-colors">
                  desenvolvimento@complexti.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
          <h4 className="text-2xl font-bold text-white mb-6">Envie uma mensagem</h4>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Nome</label>
              <input 
                type="text" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">E-mail</label>
              <input 
                type="email" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Mensagem</label>
              <textarea 
                rows={4}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all resize-none"
                placeholder="Como podemos ajudar?"
              />
            </div>
            <button className="w-full bg-green-400 text-slate-900 font-bold rounded-xl px-4 py-4 hover:bg-green-300 transition-colors mt-4">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 py-8 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <Logo />
      <p className="text-slate-500 text-sm text-center md:text-left">
        © {new Date().getFullYear()} COMPLEXTI. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-green-500/30">
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
