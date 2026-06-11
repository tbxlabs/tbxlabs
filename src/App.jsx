import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { IconMenu, IconX, IconChevronRight, IconArrowRight, IconCheckCircle, IconFilter, IconUtensils, IconStethoscope, IconScissors, IconShoppingBag, IconSmartphone, IconBox, IconCode, IconZap, IconLayout, IconMail, IconPhone, IconInstagram, IconLinkedin, IconGithub, IconFacebook } from './components/Icons';

        // --- COMPONENTE PRINCIPAL APP ---
        const App = () => {
            const [isScrolled, setIsScrolled] = useState(false);
            const [isMenuOpen, setIsMenuOpen] = useState(false);
            const [portfolioFilter, setPortfolioFilter] = useState('todos'); // 'todos', 'trabajos', 'modelos'
            const [isLoading, setIsLoading] = useState(true);

            useEffect(() => {
                // Simular carga inicial
                const timer = setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
                return () => clearTimeout(timer);
            }, []);

            useEffect(() => {
                const handleScroll = () => {
                setIsScrolled(window.scrollY > 50);
                };
                window.addEventListener('scroll', handleScroll);
                return () => window.removeEventListener('scroll', handleScroll);
            }, []);

            useEffect(() => {
                emailjs.init("PjPhgNbky2_QyqtQ5");
            }, []);

            const handleSubmit = (event) => {
                event.preventDefault();
                console.log('Form submitted');
                
                const form = event.target;
                const btn = document.getElementById('button');
                const formData = new FormData(form);
                
                console.log('Form data being sent:', Object.fromEntries(formData));
                btn.textContent = 'Enviando...';
                btn.disabled = true;
                
                emailjs.sendForm('service_4g65tse', 'template_i40mu9j', form)
                    .then(() => {
                        console.log('Email sent successfully');
                        btn.textContent = 'Enviar Mensaje';
                        btn.disabled = false;
                        alert('¡Enviado con éxito!');
                        form.reset();
                    }, (err) => {
                        console.log('Email send error:', err);
                        btn.textContent = 'Enviar Mensaje';
                        btn.disabled = false;
                        // Fallback a mailto si EmailJS falla
                        const nombre = formData.get('from_name');
                        const empresa = formData.get('empresa');
                        const email = formData.get('email');
                        const mensaje = formData.get('message');
                        
                        const subject = `Nuevo proyecto de ${nombre}${empresa ? ` - ${empresa}` : ''}`;
                        const body = `Hola!

Nombre: ${nombre}
${empresa ? `Empresa/Negocio: ${empresa}` : ''}
Email: ${email}

Mensaje:
${mensaje}

---
Enviado desde tbxtechnologies.github.io`;
                        
                        window.location.href = `mailto:tbxtechnologies2@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    });
            };

            const scrollToSection = (id) => {
                setIsMenuOpen(false);
                const element = document.getElementById(id);
                if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                }
            };

            const services = [
                {
                icon: <IconUtensils className="w-8 h-8 text-orange-400" />,
                title: "Restaurantes y Cafeterías",
                desc: "Menús digitales interactivos y galerías apetitosas.",
                color: "border-orange-500/20 hover:border-orange-500"
                },
                {
                icon: <IconStethoscope className="w-8 h-8 text-blue-400" />,
                title: "Salud y Bienestar",
                desc: "Sitios para dentistas y consultorios. Agendamiento de citas y confianza.",
                color: "border-blue-500/20 hover:border-blue-500"
                },
                {
                icon: <IconScissors className="w-8 h-8 text-purple-400" />,
                title: "Barberías y Estética",
                desc: "Diseños con estilo urbano, catálogos de cortes y conexión directa a WhatsApp.",
                color: "border-purple-500/20 hover:border-purple-500"
                },
                {
                icon: <IconSmartphone className="w-8 h-8 text-indigo-400" />,
                title: "Apps Android",
                desc: "Desarrollo de aplicaciones móviles nativas para potenciar tu alcance.",
                color: "border-indigo-500/20 hover:border-indigo-500"
                },
                {
                icon: <IconBox className="w-8 h-8 text-rose-400" />,
                title: "Animación 3D",
                desc: "Animaciones y modelado profesional con 3ds Max para presentaciones y productos.",
                color: "border-rose-500/20 hover:border-rose-500"
                },
                {
                icon: <IconShoppingBag className="w-8 h-8 text-green-400" />,
                title: "¿Interesado en otra cosa?",
                desc: "Todo se adapta a ti, contáctanos y cuéntanos tu idea.",
                color: "border-green-500/20 hover:border-green-500"
                }
            ];

            const projects = [
                {
                id: 1,
                title: "Jime Galería de Arte",
                image: "images/galeria.png",
                tag: "Galería",
                url: "https://tbxlabs.github.io/jime-galeria/",
                category: "trabajo"
                },
                {
                id: 2,
                title: "TBX SwimManager",
                image: "images/tbxswimmanager.png",
                tag: "Competencias de Natación (DESARROLLO)",
                url: "mantenimiento.html",
                category: "trabajo"
                },
                {
                id: 3,
                title: "Noelia Pastelería",
                image: "images/noelia.png",
                tag: "Repostería",
                url: "https://tbxlabs.github.io/noelia-pasteleria/",
                category: "trabajo"
                },
                {
                id: 4,
                title: "Alesan Spa",
                image: "images/alesan.png",
                tag: "Beauty & Spa",
                url: "https://tbxlabs.github.io/alesan-spa/",
                category: "trabajo"
                },
                {
                id: 5,
                title: "Culturizate MX",
                image: "images/culturizate.png",
                tag: "Difusión de Eventos",
                url: "https://culturizatemx.infinityfreeapp.com/landing.php",
                category: "trabajo"
                },
                {
                id: 6,
                title: "La Parrilla Urbana",
                image: "images/restaurante.png",
                tag: "Restaurante (Modelo)",
                url: "models/premiumModel4.html",
                category: "modelo"
                },
                {
                id: 7,
                title: "Dental Care Plus",
                image: "images/clinica-dental.png",
                tag: "Clínica Dental (Modelo)",
                url: "models/consultorioDental.html",
                category: "modelo"
                },
                {
                id: 8,
                title: "Fade Masters Barber",
                image: "images/barberia.png",
                tag: "Barbería (Modelo)",
                url: "models/barber/index.html",
                category: "modelo"
                },
                {
                id: 9,
                title: "Web Corporativa",
                image: "images/corporativa.png",
                tag: "Corporation (Modelo)",
                url: "models/corporativa.html",
                category: "modelo"
                },
                {
                id: 10,
                title: "Mecánico",
                image: "images/mecanico.png",
                tag: "Taller (Modelo)",
                url: "models/mecanico.html",
                category: "modelo"
                },
                {
                id: 11,
                title: "La Cocinita",
                image: "images/cocinita.png",
                tag: "Restaruante (Modelo)",
                url: "models/menuNeon/index.html",
                category: "modelo"
                },
                {
                id: 12,
                title: "Glamour Studio",
                image: "images/belleza.png",
                tag: "Salón de Belleza (Modelo)",
                url: "models/salonBelleza.html",
                category: "modelo"
                }
            ];

            // Filtrar proyectos según la categoría seleccionada
            const filteredProjects = portfolioFilter === 'todos' 
                ? projects 
                : projects.filter(project => project.category === portfolioFilter);

            // Loader Screen
            if (isLoading) {
                return (
                    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50">
                        <div className="text-center">
                            <img src="images/logo.png" alt="TBXLABS" className="w-24 h-24 mx-auto mb-6 animate-pulse" />
                            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
                                TBXLABS
                            </div>
                            <div className="flex gap-2 justify-center">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                            </div>
                        </div>
                    </div>
                );
            }

            return (
                <div className="min-h-screen">
                
                {/* Navbar */}
                <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-lg py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}>
                    <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                    <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
                        <img src="images/logo.png" alt="TBXLABS Logo" className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 object-contain flex-shrink-0" />
                        <div className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                            TBXLABS
                        </div>
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
                        {['Servicios', 'Beneficios', 'Portafolio', 'Contacto'].map((item) => (
                        <button 
                            key={item} 
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className="text-slate-300 hover:text-cyan-400 transition-colors text-xs lg:text-sm uppercase tracking-wider font-medium"
                        >
                            {item}
                        </button>
                        ))}
                        <a 
                        href="herramientas.html"
                        className="text-slate-300 hover:text-cyan-400 transition-colors text-xs lg:text-sm uppercase tracking-wider font-medium"
                        >
                        Herramientas
                        </a>
                        <a 
                        href="acceso.html"
                        className="text-slate-400 hover:text-slate-300 transition-colors text-xs lg:text-sm uppercase tracking-wider font-medium opacity-75"
                        >
                        Acceso
                        </a>
                        <button 
                        onClick={() => scrollToSection('contacto')}
                        className="px-4 lg:px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 text-xs lg:text-sm"
                        >
                        Cotizar Ahora
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                        {isMenuOpen ? <IconX /> : <IconMenu />}
                        </button>
                    </div>
                    </div>

                    {/* Mobile Menu Content */}
                    {isMenuOpen && (
                    <div className="md:hidden bg-slate-900 absolute w-full border-b border-slate-800">
                        <div className="px-4 py-4 space-y-3 flex flex-col">
                        {['Servicios', 'Beneficios', 'Portafolio', 'Contacto'].map((item) => (
                            <button 
                                key={item} 
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-left text-slate-300 hover:text-cyan-400 py-2 border-b border-slate-800 text-sm"
                            >
                                {item}
                            </button>
                        ))}
                        <a 
                            href="herramientas.html"
                            className="text-left text-slate-300 hover:text-cyan-400 py-2 border-b border-slate-800 text-sm"
                        >
                            Herramientas
                        </a>
                        <a 
                            href="acceso.html"
                            className="text-left text-slate-400 hover:text-slate-300 py-2 border-b border-slate-800 opacity-75 text-sm"
                        >
                            Acceso
                        </a>
                        </div>
                    </div>
                    )}
                </nav>

                {/* Hero Section */}
                <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <div className="absolute top-[-10%] right-[-5%] w-64 h-64 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 md:w-96 md:h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 mb-4 md:mb-6 border border-cyan-500/30 rounded-full bg-cyan-500/10 backdrop-blur-sm">
                        <span className="text-cyan-400 font-medium text-xs md:text-sm tracking-wide">DESARROLLO WEB PROFESIONAL</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-6 lg:mb-8 leading-tight px-2 md:px-4">
                        Impulsamos Negocios Locales con <br className="hidden md:block"/>
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Presencia Digital
                        </span>
                        </h1>
                        <p className="text-sm md:text-lg lg:text-xl text-slate-400 mb-6 md:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed px-2 md:px-4">
                        Desarrollamos sitios web para ayudar a restaurantes, consultorios, tiendas y negocios en general a vender más en internet. 
                        Diseño moderno, rápido y optimizado para móviles.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
                            <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs md:text-sm text-cyan-400 font-medium flex items-center gap-2"><IconLayout className="w-4 h-4" /> Desarrollo Web</span>
                            <span className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-xs md:text-sm text-indigo-400 font-medium flex items-center gap-2"><IconSmartphone className="w-4 h-4" /> Apps Android</span>
                            <span className="px-3 py-1.5 bg-rose-500/10 border border-rose-500/30 rounded-full text-xs md:text-sm text-rose-400 font-medium flex items-center gap-2"><IconBox className="w-4 h-4" /> Animación 3D</span>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-2 md:px-4">
                        <button 
                            onClick={() => scrollToSection('portafolio')}
                            className="px-5 md:px-6 lg:px-8 py-3 md:py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                        >
                            Ver Proyectos <IconArrowRight className="w-4 h-4" />
                        </button>
                        <button 
                            onClick={() => scrollToSection('contacto')}
                            className="px-5 md:px-6 lg:px-8 py-3 md:py-4 bg-transparent border border-slate-700 text-white rounded-full font-bold hover:border-cyan-500 hover:text-cyan-400 transition-all text-sm md:text-base"
                        >
                            Hablemos por WhatsApp
                        </button>
                        </div>
                    </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-16 md:py-20 bg-slate-900/50">
                    <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                        <div className="w-full lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl transform rotate-3 blur opacity-30"></div>
                        <div className="relative bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-700 shadow-2xl">
                            <img src="images/logo.png" alt="TBXLABS" className="w-10 h-10 md:w-12 md:h-12 object-contain mb-3 md:mb-4 opacity-80" />
                            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Más que código, resultados.</h3>
                            <p className="text-slate-400 mb-4 md:mb-6 text-sm md:text-base">
                            Desarrolamos web especializado en el mercado local. Entiendemos que no necesitas tecnicismos, necesitas clientes llamando, mesas reservadas y citas agendadas.
                            </p>
                            <ul className="space-y-2 md:space-y-3">
                            {['Diseño 100% Personalizado', 'Soporte Directo', 'Tecnología Moderna'].map((item) => (
                                <li key={item} className="flex items-center gap-2 md:gap-3 text-slate-300 text-sm md:text-base">
                                <IconCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-cyan-500 flex-shrink-0" /> {item}
                                </li>
                            ))}
                            </ul>
                        </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">¿Por qué invertir en una web profesional?</h2>
                        <p className="text-slate-400 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                            Hoy en día, la primera impresión de tu negocio ocurre en el celular de tu cliente. Una página lenta o fea es una venta perdida.
                        </p>
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            <div className="p-3 md:p-4 bg-slate-800/50 rounded-lg border-l-4 border-cyan-500">
                            <h4 className="font-bold text-lg md:text-xl mb-1">+45%</h4>
                            <p className="text-xs md:text-sm text-slate-400">Visibilidad</p>
                            </div>
                            <div className="p-3 md:p-4 bg-slate-800/50 rounded-lg border-l-4 border-purple-500">
                            <h4 className="font-bold text-lg md:text-xl mb-1">24/7</h4>
                            <p className="text-xs md:text-sm text-slate-400">Negocio abierto</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                {/* Tech Stack & Certifications */}
                <section className="py-12 md:py-16 bg-slate-950">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">Tecnologías que Dominamos</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
                                Utilizamos las herramientas más modernas y confiables del mercado
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-3 md:gap-4 max-w-6xl mx-auto">
                            {/* React */}
                            <div className="group bg-slate-800/50 p-3 md:p-4 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all hover:scale-105">
                                <div className="text-center">
                                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <span className="text-blue-400 font-bold text-base md:text-lg">R</span>
                                    </div>
                                    <p className="text-xs text-slate-300 group-hover:text-cyan-400 transition-colors">React</p>
                                </div>
                            </div>
                            
                            {/* JavaScript */}
                            <div className="group bg-slate-800/50 p-3 md:p-4 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all hover:scale-105">
                                <div className="text-center">
                                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                                        <span className="text-yellow-400 font-bold text-base md:text-lg">JS</span>
                                    </div>
                                    <p className="text-xs text-slate-300 group-hover:text-cyan-400 transition-colors">JavaScript</p>
                                </div>
                            </div>
                            
                            {/* PHP */}
                            <div className="group bg-slate-800/50 p-3 md:p-4 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all hover:scale-105">
                                <div className="text-center">
                                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                        <span className="text-purple-400 font-bold text-base md:text-lg">PHP</span>
                                    </div>
                                    <p className="text-xs text-slate-300 group-hover:text-cyan-400 transition-colors">PHP</p>
                                </div>
                            </div>
                            
                            {/* MySQL */}
                            <div className="group bg-slate-800/50 p-3 md:p-4 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all hover:scale-105">
                                <div className="text-center">
                                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                        <span className="text-orange-400 font-bold text-base md:text-lg">SQL</span>
                                    </div>
                                    <p className="text-xs text-slate-300 group-hover:text-cyan-400 transition-colors">MySQL</p>
                                </div>
                            </div>
                            
                            {/* Tailwind */}
                            <div className="group bg-slate-800/50 p-3 md:p-4 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all hover:scale-105">
                                <div className="text-center">
                                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                                        <span className="text-cyan-400 font-bold text-base md:text-lg">TW</span>
                                    </div>
                                    <p className="text-xs text-slate-300 group-hover:text-cyan-400 transition-colors">Tailwind</p>
                                </div>
                            </div>
                            
                            {/* Node.js */}
                            <div className="group bg-slate-800/50 p-3 md:p-4 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all hover:scale-105">
                                <div className="text-center">
                                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 bg-green-500/20 rounded-lg flex items-center justify-center">
                                        <span className="text-green-400 font-bold text-base md:text-lg">N</span>
                                    </div>
                                    <p className="text-xs text-slate-300 group-hover:text-cyan-400 transition-colors">Node.js</p>
                                </div>
                            </div>
                            
                            {/* HTML5 */}
                            <div className="group bg-slate-800/50 p-3 md:p-4 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all hover:scale-105">
                                <div className="text-center">
                                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 bg-red-500/20 rounded-lg flex items-center justify-center">
                                        <span className="text-red-400 font-bold text-base md:text-lg">H5</span>
                                    </div>
                                    <p className="text-xs text-slate-300 group-hover:text-cyan-400 transition-colors">HTML5</p>
                                </div>
                            </div>
                            
                            {/* CSS3 */}
                            <div className="group bg-slate-800/50 p-3 md:p-4 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all hover:scale-105">
                                <div className="text-center">
                                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 bg-blue-600/20 rounded-lg flex items-center justify-center">
                                        <span className="text-blue-400 font-bold text-base md:text-lg">C3</span>
                                    </div>
                                    <p className="text-xs text-slate-300 group-hover:text-cyan-400 transition-colors">CSS3</p>
                                </div>
                            </div>
                            
                            {/* GitHub */}
                            <div className="group bg-slate-800/50 p-3 md:p-4 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all hover:scale-105">
                                <div className="text-center">
                                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 bg-gray-500/20 rounded-lg flex items-center justify-center">
                                        <span className="text-gray-400 font-bold text-base md:text-lg">GH</span>
                                    </div>
                                    <p className="text-xs text-slate-300 group-hover:text-cyan-400 transition-colors">GitHub</p>
                                </div>
                            </div>
                            
                            {/* Android */}
                            <div className="group bg-slate-800/50 p-3 md:p-4 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all hover:scale-105">
                                <div className="text-center">
                                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 bg-green-500/20 rounded-lg flex items-center justify-center">
                                        <span className="text-green-400 font-bold text-base md:text-lg">AN</span>
                                    </div>
                                    <p className="text-xs text-slate-300 group-hover:text-cyan-400 transition-colors">Android</p>
                                </div>
                            </div>
                            
                            {/* 3ds Max */}
                            <div className="group bg-slate-800/50 p-3 md:p-4 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all hover:scale-105">
                                <div className="text-center">
                                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 bg-teal-500/20 rounded-lg flex items-center justify-center">
                                        <span className="text-teal-400 font-bold text-base md:text-lg">3D</span>
                                    </div>
                                    <p className="text-xs text-slate-300 group-hover:text-cyan-400 transition-colors">3ds Max</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Timeline */}
                <section className="py-16 md:py-20 bg-slate-900/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Proceso Simple y Transparente</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
                                De la idea a tu sitio web funcionando en pocos pasos
                            </p>
                        </div>
                        
                        <div className="max-w-4xl mx-auto">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                                {/* Paso 1 */}
                                <div className="text-center">
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                        <span className="text-white font-bold text-lg md:text-xl">1</span>
                                    </div>
                                    <h3 className="font-bold text-base md:text-lg mb-2">Reunión</h3>
                                    <p className="text-slate-400 text-xs md:text-sm">Platicamos tu visión y objetivos</p>
                                </div>
                                
                                {/* Paso 2 */}
                                <div className="text-center">
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                        <span className="text-white font-bold text-lg md:text-xl">2</span>
                                    </div>
                                    <h3 className="font-bold text-base md:text-lg mb-2">Diseño</h3>
                                    <p className="text-slate-400 text-xs md:text-sm">Creamos el diseño personalizado</p>
                                </div>
                                
                                {/* Paso 3 */}
                                <div className="text-center">
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                        <span className="text-white font-bold text-lg md:text-xl">3</span>
                                    </div>
                                    <h3 className="font-bold text-base md:text-lg mb-2">Desarrollo</h3>
                                    <p className="text-slate-400 text-xs md:text-sm">Programamos tu sitio web</p>
                                </div>
                                
                                {/* Paso 4 */}
                                <div className="text-center">
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                        <span className="text-white font-bold text-lg md:text-xl">4</span>
                                    </div>
                                    <h3 className="font-bold text-base md:text-lg mb-2">Entrega</h3>
                                    <p className="text-slate-400 text-xs md:text-sm">Tu sitio web listo y funcionando</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="servicios" className="py-16 md:py-20 relative">
                    <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Soluciones por Sector</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
                        No usamos plantillas genéricas. Diseño pensando en las necesidades específicas de tu rubro.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {services.map((service, index) => (
                        <div 
                            key={index} 
                            className={`group p-4 md:p-6 bg-slate-900 border ${service.color} rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden`}
                        >
                            {/* Logo sutil en la esquina */}
                            <div className="absolute top-2 right-2 w-6 h-6 md:w-8 md:h-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <img src="images/logo.png" alt="TBXLABS" className="w-full h-full object-contain" />
                            </div>
                            <div className="mb-3 md:mb-4 p-2 md:p-3 bg-slate-800 rounded-lg inline-block group-hover:bg-slate-700 transition-colors">
                            {service.icon}
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{service.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                            {service.desc}
                            </p>
                        </div>
                        ))}
                    </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section id="beneficios" className="py-16 md:py-20 bg-slate-900">
                    <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="text-center p-4 md:p-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-cyan-500/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                            <IconZap className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Velocidad Extrema</h3>
                        <p className="text-slate-400 text-sm md:text-base">
                            Páginas que cargan al instante. Google prefiere los sitios rápidos, y tus clientes también.
                        </p>
                        </div>
                        <div className="text-center p-4 md:p-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                            <IconSmartphone className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">100% Celular</h3>
                        <p className="text-slate-400 text-sm md:text-base">
                            Se ven perfectas en cualquier dispositivo. Botones fáciles de tocar y textos legibles.
                        </p>
                        </div>
                        <div className="text-center p-4 md:p-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                            <IconLayout className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Diseño Moderno</h3>
                        <p className="text-slate-400 text-sm md:text-base">
                            Estética visual impactante que transmite profesionalismo desde el primer segundo.
                        </p>
                        </div>
                    </div>
                    </div>
                </section>

                {/* Portfolio Section */}
                <section id="portafolio" className="py-16 md:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12">
                        <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Trabajos Recientes (Portafolio)</h2>
                        <p className="text-sm md:text-base text-slate-400 mb-2">El portafolio contiene algunos ejemplos de sitios web efectivos (MODELOS) y proyectos cerrados con nuestros clientes (TRABAJOS).</p>
                        <p className="text-sm md:text-base text-slate-400">Puedes incluso basarte en nuestros modelos y mencionarnos cómo quieres que lo adaptemos a lo que necesitas, o simplemente contarnos tu idea (sobre alguna plantilla, algo desde cero, ideas que tengas) para desarrollar tu sitio web.</p>
                        </div>
                    </div>

                    {/* Botones de Filtro */}
                    <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-12 justify-center">
                        <button 
                            onClick={() => setPortfolioFilter('todos')}
                            className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-xs md:text-sm uppercase tracking-wider transition-all ${
                                portfolioFilter === 'todos' 
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25' 
                                : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                            }`}
                        >
                            Todos
                        </button>
                        <button 
                            onClick={() => setPortfolioFilter('trabajo')}
                            className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-xs md:text-sm uppercase tracking-wider transition-all ${
                                portfolioFilter === 'trabajo' 
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25' 
                                : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                            }`}
                        >
                            Trabajos
                        </button>
                        <button 
                            onClick={() => setPortfolioFilter('modelo')}
                            className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-xs md:text-sm uppercase tracking-wider transition-all ${
                                portfolioFilter === 'modelo' 
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25' 
                                : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                            }`}
                        >
                            Modelos
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {filteredProjects.map((project) => (
                        <a
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-xl cursor-pointer block"
                        >
                            <div className="aspect-video w-full overflow-hidden relative">
                            {/* Marca de agua del logo */}
                            <div className="absolute top-4 right-4 w-12 h-12 opacity-30 group-hover:opacity-50 transition-opacity z-10">
                                <img src="images/logo.png" alt="TBXLABS" className="w-full h-full object-contain" />
                            </div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                            <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-2">
                                {project.tag}
                            </span>

                            <h3 className="text-2xl font-bold text-white">
                                {project.title}
                            </h3>

                            <div className="mt-4 flex items-center gap-2 text-white/80">
                                <span>Ver Proyecto</span>
                                <IconChevronRight className="w-4 h-4" />
                            </div>
                            </div>
                        </a>
                        ))}
                    </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contacto" className="pt-24 pb-24 md:pt-20 md:pb-20 relative bg-gradient-to-br from-slate-900 to-slate-950 overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="bg-slate-800/50 rounded-3xl p-6 md:p-16 border border-slate-700 shadow-2xl relative">
                            {/* Logo flotante decorativo */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-5 pointer-events-none">
                                <img src="images/logo.png" alt="TBXLABS" className="w-full h-full object-contain" />
                            </div>
                            {/* Círculo decorativo - ajustado para no causar scroll horizontal */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                            <div className="grid lg:grid-cols-2 gap-10 relative z-10">
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Empecemos tu proyecto</h2>
                                    <p className="text-slate-400 text-lg mb-8">
                                        ¿Listo para digitalizar tu negocio? Escríbenos para cotizar, o simplemente para contarnos tu idea, también podemos ayudarte/guiarte si ya tienes una o si quieres iniciar desde cero.
                                    </p>
                                    
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-cyan-400">
                                                <IconMail />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-sm text-slate-400">Email</p>
                                                <p className="text-white font-medium break-all text-sm md:text-base">tbxtechnologies2@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-green-400">
                                                <IconPhone />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-sm text-slate-400">WhatsApp</p>
                                                <p className="text-white font-medium text-sm md:text-base">+52 55 3799 0742 (Arturo Alcántara)</p>
                                                <p className="text-white font-medium text-sm md:text-base">+52 56 4870 6746 (Yael López)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 mt-8">
                                        <a href="https://www.instagram.com/tbxlabs" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-all">
                                            <IconInstagram className="w-5 h-5" />
                                        </a>
                                        <a href="https://www.facebook.com/profile.php?id=61587815242580" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                            <IconFacebook className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                {/* Form - Se añadió padding interno y mejor control de inputs */}
                                <form id="form" onSubmit={handleSubmit} className="space-y-4 bg-slate-900/50 p-5 md:p-8 rounded-2xl border border-slate-700/50 w-full">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm text-slate-400">Nombre</label>
                                            <input name="from_name" type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Tu nombre" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-slate-400">Negocio</label>
                                            <input name="empresa" type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Restaurante..." />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-slate-400">Email</label>
                                        <input name="email" type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="correo@ejemplo.com" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-slate-400">Mensaje</label>
                                        <textarea name="message" rows="4" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="¿Cómo te puedo ayudar?" required></textarea>
                                    </div>
                                    <button id="button" type="submit" className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1">
                                        Enviar Mensaje
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center mb-4 md:mb-6">
                            <img src="images/logo.png" alt="TBXLABS Logo" className="h-10 md:h-12 w-10 md:w-12 object-contain mb-2 md:mb-3 opacity-80" />
                            <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                                TBXLABS
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-slate-500 text-xs md:text-sm">
                                © {new Date().getFullYear()} TBXLABS | Todos los derechos reservados.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
                                <a href="acerca-de.html" className="text-slate-500 hover:text-cyan-400 transition-colors">
                                    Acerca de
                                </a>
                                <a href="mantenimiento.html" className="text-slate-500 hover:text-cyan-400 transition-colors">
                                    Términos
                                </a>
                                <a href="mantenimiento.html" className="text-slate-500 hover:text-cyan-400 transition-colors">
                                    Privacidad
                                </a> 
                            </div>
                        </div>
                    </div>
                </footer>

                </div>
            );
        };
export default App;

