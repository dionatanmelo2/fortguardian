import { useState } from 'react';
import {
  Shield,
  Camera,
  Lock,
  Brain,
  ChevronRight,
  CheckCircle2,
  Eye,
  Bell,
  Smartphone,
  Users,
  TrendingUp,
  BarChart3,
  Phone,
  Mail,
  Instagram,
  Globe,
  Menu,
  X,
  Target,
  Zap,
  Award,
  Factory,
  HardHat,
  AlertTriangle,
  MessageCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { IconButton, Drawer, Dialog, DialogTitle, DialogContent, TextField, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, Button } from '@mui/material';

import image_Captura_de_tela_2026_05_17_171352_png from '@/imports/Captura_de_tela_2026-05-17_171352.png.jpg'
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [knowsCameras, setKnowsCameras] = useState<'yes' | 'no'>('no');
  const [formData, setFormData] = useState({
    propertyType: '',
    cameraCount: '',
    objective: '',
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `*Solicitação de Orçamento - FORTGUARDIAN*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n\n` +
      `*Tipo de Propriedade:* ${formData.propertyType}\n` +
      `*Câmeras:* ${knowsCameras === 'yes' ? formData.cameraCount + ' câmeras' : 'Não sabe'}\n` +
      `*Objetivo:* ${formData.objective}\n\n` +
      `*Mensagem:* ${formData.message || 'Não informada'}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/5551989219043?text=${encodedMessage}`, '_blank');

    setFormOpen(false);
    setFormData({
      propertyType: '',
      cameraCount: '',
      objective: '',
      name: '',
      phone: '',
      email: '',
      message: ''
    });
    setKnowsCameras('no');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-blue-500" />
              <span className="font-bold text-xl">FORTGUARDIAN</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('sobre')} className="hover:text-blue-400 transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('solucoes')} className="hover:text-blue-400 transition-colors">Soluções</button>
              <button onClick={() => scrollToSection('ia')} className="hover:text-blue-400 transition-colors">IA</button>
              <button onClick={() => scrollToSection('beneficios')} className="hover:text-blue-400 transition-colors">Benefícios</button>
              <button onClick={() => scrollToSection('contato')} className="hover:text-blue-400 transition-colors">Contato</button>
            </div>

            {/* Mobile Menu Button */}
            <IconButton
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              sx={{ color: 'white' }}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </IconButton>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: { backgroundColor: '#1f2937', color: 'white', width: '250px' }
        }}
      >
        <div className="p-6 flex flex-col gap-4">
          <button onClick={() => scrollToSection('sobre')} className="text-left hover:text-blue-400 transition-colors py-2">Sobre</button>
          <button onClick={() => scrollToSection('solucoes')} className="text-left hover:text-blue-400 transition-colors py-2">Soluções</button>
          <button onClick={() => scrollToSection('ia')} className="text-left hover:text-blue-400 transition-colors py-2">IA</button>
          <button onClick={() => scrollToSection('beneficios')} className="text-left hover:text-blue-400 transition-colors py-2">Benefícios</button>
          <button onClick={() => scrollToSection('contato')} className="text-left hover:text-blue-400 transition-colors py-2">Contato</button>
        </div>
      </Drawer>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMHN1cnZlaWxsYW5jZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc5MDQ3MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Security cameras"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-cyan-400" style={{ textShadow: '0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(6, 182, 212, 0.3), 0 0 60px rgba(6, 182, 212, 0.2)' }}>
              FORTGUARDIAN
            </h1>
            <div className="h-1 w-32 bg-blue-500 mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-8 text-cyan-400">
              PROTEÇÃO 24H
            </h2>
            <p className="text-xl sm:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
              Tecnologia, Segurança e Inteligência para Proteger o que Importa
            </p>
            <button
              onClick={() => setFormOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-all hover:scale-105"
            >
              Solicite um Orçamento
              <ChevronRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="sobre" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Quem Somos</h2>
            <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
              Soluções modernas, inteligentes e confiáveis em segurança eletrônica,
              videomonitoramento e controle de acesso.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gray-900 p-6 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Camera className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Instalação de CFTV</h3>
                <p className="text-gray-400">Sistemas profissionais de videomonitoramento</p>
              </motion.div>

              <motion.div
                className="bg-gray-900 p-6 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Bell className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Alarmes</h3>
                <p className="text-gray-400">Proteção inteligente e integrada</p>
              </motion.div>

              <motion.div
                className="bg-gray-900 p-6 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Lock className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Controle de Acesso</h3>
                <p className="text-gray-400">Gestão completa de fluxo e segurança</p>
              </motion.div>

              <motion.div
                className="bg-gray-900 p-6 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Users className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Portaria Virtual</h3>
                <p className="text-gray-400">Atendimento remoto especializado</p>
              </motion.div>

              <motion.div
                className="bg-gray-900 p-6 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Brain className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Monitoramento IA</h3>
                <p className="text-gray-400">Inteligência artificial aplicada</p>
              </motion.div>

              <motion.div
                className="bg-gray-900 p-6 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Award className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Projetos Escaláveis</h3>
                <p className="text-gray-400">Soluções estruturadas para qualquer porte</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diretrizes Institucionais */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Target className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Missão</h3>
              <p className="text-gray-300">
                Proporcionar segurança, inteligência operacional e tranquilidade
                através de soluções eficientes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Eye className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Visão</h3>
              <p className="text-gray-300">
                Ser referência regional em segurança eletrônica e soluções
                inteligentes de monitoramento.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Zap className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Valores</h3>
              <p className="text-gray-300">
                Transparência, confiabilidade, inovação, atendimento humanizado
                e compromisso com resultados.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-cyan-400">Nossa Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experiência comprovada em projetos de todos os portes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-900 border border-cyan-400/30 p-8 rounded-lg text-center hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Residencial</h3>
              <p className="text-gray-300">
                Proteção inteligente para sua casa e família com sistemas personalizados
                e monitoramento 24 horas
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900 border border-cyan-400/30 p-8 rounded-lg text-center hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Comercial</h3>
              <p className="text-gray-300">
                Soluções completas para lojas, escritórios e estabelecimentos comerciais
                com controle de acesso e prevenção de perdas
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-900 border border-cyan-400/30 p-8 rounded-lg text-center hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Factory className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Industrial</h3>
              <p className="text-gray-300">
                Monitoramento inteligente com IA para indústrias, incluindo controle de
                qualidade, verificação de EPIs e segurança patrimonial
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Soluções em Videomonitoramento */}
      <section id="solucoes" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Soluções em Videomonitoramento e Alarmes</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1589935447067-5531094415d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBoaWdoJTIwdGVjaCUyMHNlY3VyaXR5JTIwY2FtZXJhJTIwNGt8ZW58MXx8fHwxNzc5MDQ3ODE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="CFTV"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-cyan-400">CFTV Profissional</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Monitoramento 24h com imagens de alta resolução</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Gravação em nuvem segura</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Acesso remoto via smartphone ou computador</span>
                </li>
              </ul>

              <h3 className="text-3xl font-bold mb-6 mt-12">Sistemas de Alarme</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Sensores inteligentes com integração remota</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Acionamento automático para comércio e indústrias</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Notificações instantâneas</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portaria Virtual e Controle de Acesso */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Portaria Virtual e Controle de Acesso</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-lg border border-gray-700"
            >
              <Users className="w-16 h-16 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Portaria Virtual</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Redução de custos operacionais</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Monitoramento contínuo sem interrupções</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Atendimento remoto especializado e profissional</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-lg border border-gray-700"
            >
              <Lock className="w-16 h-16 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Controle de Acesso</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Biometria e reconhecimento facial</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Tags RFID para veículos e pedestres</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Gerenciamento via aplicativo mobile</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tecnologia e IA */}
      <section id="ia" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Brain className="w-20 h-20 text-blue-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6 text-cyan-400">Tecnologia e Inteligência Artificial</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Transformação de câmeras em ferramentas analíticas capazes de gerar
              dados estratégicos e automação através de redes neurais focadas em
              segurança preditiva e eficiência operacional.
            </p>
          </motion.div>

          {/* Como Funciona o Ecossistema de IA */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-800 p-6 rounded-lg border border-blue-500/30"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-2 text-cyan-400">Integração</h3>
              <p className="text-gray-400">
                Implantação de hardware de alta performance com IA nativa
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800 p-6 rounded-lg border border-blue-500/30"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-2 text-cyan-400">Processamento</h3>
              <p className="text-gray-400">
                Análise contínua dos feeds de vídeo em tempo real
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800 p-6 rounded-lg border border-blue-500/30"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-2 text-cyan-400">Dados</h3>
              <p className="text-gray-400">
                Transformação de imagens em relatórios e métricas
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800 p-6 rounded-lg border border-blue-500/30"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-2 text-cyan-400">Ação</h3>
              <p className="text-gray-400">
                Disparo instantâneo de alertas automáticos
              </p>
            </motion.div>
          </div>

          {/* Possibilidades da IA - Segurança */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-cyan-400">IA — Segurança Operacional</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <Shield className="w-12 h-12 text-blue-500 mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-cyan-400">Monitoramento de Perímetro</h4>
                <p className="text-gray-400">Identificação de movimentações suspeitas e invasões</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <BarChart3 className="w-12 h-12 text-blue-500 mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-cyan-400">Controle de Fluxo</h4>
                <p className="text-gray-400">Contagem de pessoas, mapas de calor e alertas de aglomeração</p>
              </div>
            </div>
          </div>

          {/* Possibilidades da IA - Industrial */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMEFJJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzkwNDcyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Industrial AI"
              className="w-full h-96 object-cover rounded-lg mb-8"
            />

            <h3 className="text-3xl font-bold mb-8 text-center text-cyan-400">IA — Módulo Industrial & Qualidade</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <Factory className="w-12 h-12 text-blue-500 mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-cyan-400">Técnico da Qualidade Automatizado</h4>
                <p className="text-gray-400">Inspeção contínua de esteiras para detectar produtos fora do padrão</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <HardHat className="w-12 h-12 text-blue-500 mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-cyan-400">Auditoria de EPIs</h4>
                <p className="text-gray-400">Verificação em tempo real do uso de capacetes, coletes e óculos</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <AlertTriangle className="w-12 h-12 text-blue-500 mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-cyan-400">Comportamento e Restrição</h4>
                <p className="text-gray-400">Detecção de uso de celular em áreas de risco e controle de turnos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Benefícios para Empresas e Indústrias</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Mais Segurança</h3>
              <p className="text-gray-400">Resposta imediata a incidentes de risco</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Redução de Perdas</h3>
              <p className="text-gray-400">Prevenção de desperdício e controle patrimonial</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Decisões Estratégicas</h3>
              <p className="text-gray-400">Dados visuais consolidados em relatórios</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Otimização</h3>
              <p className="text-gray-400">Melhor aproveitamento das equipes operacionais</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Diferenciais Competitivos</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Atendimento ágil e personalizado</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Suporte técnico especializado de proximidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Soluções escaláveis para qualquer porte</span>
                </li>
              </ul>

              {/* Destaque - Suporte Rápido */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400 p-6 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">Chega de Espera!</h3>
                    <p className="text-white font-semibold">
                      Temos 1 hora para resolver seu ticket de suporte, pois sabemos que
                      a sua operação não pode parar.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-lg border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6">Parceiros Master</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Award className="w-8 h-8 text-blue-500" />
                  <span className="text-xl">Intelbras</span>
                </div>
                <div className="flex items-center gap-4">
                  <Award className="w-8 h-8 text-blue-500" />
                  <span className="text-xl">Hikvision</span>
                </div>
              </div>
              <p className="text-gray-400 mt-4">Gigantes mundiais do setor de segurança eletrônica</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cases - Clientes */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-cyan-400">Nossos Cases</h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Empresas que confiam na FORTGUARDIAN</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg flex items-center justify-center h-32 hover:bg-white/20 transition-all"
            >
              <span className="text-2xl font-bold text-white text-center">LEROY MERLIN</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg flex items-center justify-center h-32 hover:bg-white/20 transition-all"
            >
              <span className="text-2xl font-bold text-white text-center">TUMELERO</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg flex items-center justify-center h-32 hover:bg-white/20 transition-all"
            >
              <span className="text-2xl font-bold text-white text-center">DANA ALBAROS</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg flex items-center justify-center h-32 hover:bg-white/20 transition-all"
            >
              <span className="text-2xl font-bold text-white text-center">MERCADO NACIONAL</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12 text-cyan-400">Entre em Contato</h2>

          {/* Budget Button */}
          <motion.button
            onClick={() => setFormOpen(true)}
            className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold px-12 py-5 rounded-lg text-xl mb-12 inline-flex items-center gap-3 transition-all shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-6 h-6" />
            Solicitar Orçamento Personalizado
          </motion.button>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <motion.a
              href="https://wa.me/5551989219043"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 p-6 rounded-lg flex items-center justify-center gap-3 transition-all hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-6 h-6" />
              <span>(51) 98921-9043</span>
            </motion.a>

            <motion.a
              href="mailto:projetos@fortguardian.com.br"
              className="bg-blue-600 hover:bg-blue-700 p-6 rounded-lg flex items-center justify-center gap-3 transition-all hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-6 h-6" />
              <span>projetos@fortguardian.com.br</span>
            </motion.a>

            <motion.a
              href="https://instagram.com/seg.fortguardian"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 p-6 rounded-lg flex items-center justify-center gap-3 transition-all hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <Instagram className="w-6 h-6" />
              <span>@seg.fortguardian</span>
            </motion.a>

            <motion.a
              href="https://fortguardian.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 p-6 rounded-lg flex items-center justify-center gap-3 transition-all hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <Globe className="w-6 h-6" />
              <span>fortguardian.com.br</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Budget Form Dialog */}
      <Dialog
        open={formOpen}
        onClose={() => setFormOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: '#1f2937',
            color: 'white',
            borderRadius: '12px'
          }
        }}
      >
        <DialogTitle sx={{ color: '#22d3ee', fontWeight: 'bold', fontSize: '1.5rem' }}>
          Solicitar Orçamento
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} className="space-y-6 pt-4">
            {/* Nome */}
            <TextField
              fullWidth
              label="Nome"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              sx={{
                '& .MuiInputLabel-root': { color: '#9ca3af' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#22d3ee' },
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': { borderColor: '#4b5563' },
                  '&:hover fieldset': { borderColor: '#22d3ee' },
                  '&.Mui-focused fieldset': { borderColor: '#22d3ee' }
                }
              }}
            />

            {/* Telefone */}
            <TextField
              fullWidth
              label="Telefone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              sx={{
                '& .MuiInputLabel-root': { color: '#9ca3af' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#22d3ee' },
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': { borderColor: '#4b5563' },
                  '&:hover fieldset': { borderColor: '#22d3ee' },
                  '&.Mui-focused fieldset': { borderColor: '#22d3ee' }
                }
              }}
            />

            {/* Email */}
            <TextField
              fullWidth
              label="Email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              sx={{
                '& .MuiInputLabel-root': { color: '#9ca3af' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#22d3ee' },
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': { borderColor: '#4b5563' },
                  '&:hover fieldset': { borderColor: '#22d3ee' },
                  '&.Mui-focused fieldset': { borderColor: '#22d3ee' }
                }
              }}
            />

            {/* Tipo de Propriedade */}
            <FormControl component="fieldset" required>
              <FormLabel sx={{ color: '#22d3ee', '&.Mui-focused': { color: '#22d3ee' } }}>
                Tipo de Propriedade
              </FormLabel>
              <RadioGroup
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              >
                <FormControlLabel
                  value="Casa"
                  control={<Radio sx={{ color: '#9ca3af', '&.Mui-checked': { color: '#22d3ee' } }} />}
                  label="Casa"
                  sx={{ color: 'white' }}
                />
                <FormControlLabel
                  value="Indústria"
                  control={<Radio sx={{ color: '#9ca3af', '&.Mui-checked': { color: '#22d3ee' } }} />}
                  label="Indústria"
                  sx={{ color: 'white' }}
                />
                <FormControlLabel
                  value="Comércio"
                  control={<Radio sx={{ color: '#9ca3af', '&.Mui-checked': { color: '#22d3ee' } }} />}
                  label="Comércio"
                  sx={{ color: 'white' }}
                />
              </RadioGroup>
            </FormControl>

            {/* Sabe quantidade de câmeras */}
            <FormControl component="fieldset" required>
              <FormLabel sx={{ color: '#22d3ee', '&.Mui-focused': { color: '#22d3ee' } }}>
                Tem ideia de quantas câmeras precisa?
              </FormLabel>
              <RadioGroup
                value={knowsCameras}
                onChange={(e) => setKnowsCameras(e.target.value as 'yes' | 'no')}
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio sx={{ color: '#9ca3af', '&.Mui-checked': { color: '#22d3ee' } }} />}
                  label="Sim"
                  sx={{ color: 'white' }}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio sx={{ color: '#9ca3af', '&.Mui-checked': { color: '#22d3ee' } }} />}
                  label="Não"
                  sx={{ color: 'white' }}
                />
              </RadioGroup>
            </FormControl>

            {/* Número de câmeras (condicional) */}
            {knowsCameras === 'yes' && (
              <TextField
                fullWidth
                label="Número de Câmeras"
                type="number"
                required
                value={formData.cameraCount}
                onChange={(e) => setFormData({ ...formData, cameraCount: e.target.value })}
                sx={{
                  '& .MuiInputLabel-root': { color: '#9ca3af' },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#22d3ee' },
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: '#4b5563' },
                    '&:hover fieldset': { borderColor: '#22d3ee' },
                    '&.Mui-focused fieldset': { borderColor: '#22d3ee' }
                  }
                }}
              />
            )}

            {/* Objetivo */}
            <FormControl component="fieldset" required>
              <FormLabel sx={{ color: '#22d3ee', '&.Mui-focused': { color: '#22d3ee' } }}>
                Qual seu objetivo com a instalação?
              </FormLabel>
              <RadioGroup
                value={formData.objective}
                onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
              >
                <FormControlLabel
                  value="Furto"
                  control={<Radio sx={{ color: '#9ca3af', '&.Mui-checked': { color: '#22d3ee' } }} />}
                  label="Furto"
                  sx={{ color: 'white' }}
                />
                <FormControlLabel
                  value="Roubo"
                  control={<Radio sx={{ color: '#9ca3af', '&.Mui-checked': { color: '#22d3ee' } }} />}
                  label="Roubo"
                  sx={{ color: 'white' }}
                />
                <FormControlLabel
                  value="Padronização de Fabricação"
                  control={<Radio sx={{ color: '#9ca3af', '&.Mui-checked': { color: '#22d3ee' } }} />}
                  label="Padronização de Fabricação"
                  sx={{ color: 'white' }}
                />
                <FormControlLabel
                  value="Verificação de EPIs"
                  control={<Radio sx={{ color: '#9ca3af', '&.Mui-checked': { color: '#22d3ee' } }} />}
                  label="Verificação de EPIs"
                  sx={{ color: 'white' }}
                />
              </RadioGroup>
            </FormControl>

            {/* Mensagem adicional */}
            <TextField
              fullWidth
              label="Mensagem Adicional (opcional)"
              multiline
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              sx={{
                '& .MuiInputLabel-root': { color: '#9ca3af' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#22d3ee' },
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': { borderColor: '#4b5563' },
                  '&:hover fieldset': { borderColor: '#22d3ee' },
                  '&.Mui-focused fieldset': { borderColor: '#22d3ee' }
                }
              }}
            />

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                onClick={() => setFormOpen(false)}
                variant="outlined"
                fullWidth
                sx={{
                  borderColor: '#4b5563',
                  color: 'white',
                  '&:hover': {
                    borderColor: '#22d3ee',
                    backgroundColor: 'rgba(34, 211, 238, 0.1)'
                  }
                }}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#22d3ee',
                  color: '#111827',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#06b6d4'
                  }
                }}
              >
                Enviar via WhatsApp
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/5551989219043"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </motion.a>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-blue-500" />
            <span className="font-bold text-white">FORTGUARDIAN</span>
          </div>
          <p>© 2026 FORTGUARDIAN - Proteção 24H. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">Tecnologia, Segurança e Inteligência para Proteger o que Importa.</p>
        </div>
      </footer>
    </div>
  );
}