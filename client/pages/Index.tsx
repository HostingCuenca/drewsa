import { Target, Users, Lightbulb, Shield, Award, TrendingUp, Heart, UserCheck, Package, Truck, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const DrewHomepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const logos = [
    "/img_2.png",
    "/img_3.png",
    "/img_4.png",
    "/img_5.png",
    "/img_6.png",
    "/img_7.png",
    "/img_8.png",
    "/img_9.png",
    "/Siemens-Logo.png"
  ];

  const heroImages = [
    "/heroimage.png",
    "https://sedescochabamba.gob.bo/img/farmacias.jpeg",
    "https://www.chopo.com.mx/media/wysiwyg/Blog_Chopo/laboratorio_cl_nico_blog_versi_n_desktop.jpg",
    "https://www.farmactiva.es/wp-content/uploads/2021/01/marketing-y-comunicacion-para-tu-farmacia.jpg",
    "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1920"
  ];

  const logosPerView = 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [logos.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % logos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + logos.length) % logos.length);
  };

  const getVisibleLogos = () => {
    const visible = [];
    for (let i = 0; i < logosPerView; i++) {
      visible.push(logos[(currentIndex + i) % logos.length]);
    }
    return visible;
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/logo.png" alt="DREW S.A. Logo" className="h-14 w-auto object-contain" />
            </div>
            <nav className="hidden md:flex gap-8 text-[15px]">
              <a href="#inicio" className="text-gray-700 hover:text-[#C9A55C] transition font-medium">Inicio</a>
              <a href="#laboratorios" className="text-gray-700 hover:text-[#C9A55C] transition font-medium">Laboratorios</a>
              <a href="#nosotros" className="text-gray-700 hover:text-[#C9A55C] transition font-medium">Nosotros</a>
              <a href="#mision-vision" className="text-gray-700 hover:text-[#C9A55C] transition font-medium">Misión y Visión</a>
              <a href="#valores" className="text-gray-700 hover:text-[#C9A55C] transition font-medium">Valores</a>
              <a href="#servicios" className="text-gray-700 hover:text-[#C9A55C] transition font-medium">Servicios</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-[600px] overflow-hidden">
        {/* Background Images Carousel */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1500 ease-in-out"
            style={{
              opacity: currentHeroImage === index ? 1 : 0,
              zIndex: currentHeroImage === index ? 1 : 0
            }}
          >
            <img
              src={image}
              alt="Distribución farmacéutica"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" style={{ zIndex: 2 }}></div>
        <div className="relative h-full max-w-7xl mx-auto px-8 flex items-center" style={{ zIndex: 3 }}>
          <div className="max-w-3xl">
            <h2 className="text-[72px] leading-[1.1] font-black text-white mb-6 tracking-tight uppercase" style={{ fontFamily: '"Mona Sans", system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}>
              Distribuidora<br />Farmacéutica Integral
            </h2>
            <p className="text-[22px] text-white mb-10 font-light tracking-wide leading-relaxed">Distribución que cuida vidas, comprometidos con tu bienestar.</p>
            <button className="bg-[#B8956A] hover:bg-[#A0835C] text-white px-10 py-4 rounded font-bold transition shadow-lg text-[16px] tracking-wider uppercase" style={{ fontFamily: '"Mona Sans", system-ui, -apple-system, sans-serif' }}>
              Conoce Más
            </button>
          </div>
        </div>

        {/* Hero Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3" style={{ zIndex: 4 }}>
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroImage(index)}
              className={`transition-all duration-300 rounded-full ${
                currentHeroImage === index
                  ? 'bg-white w-10 h-2'
                  : 'bg-white/50 hover:bg-white/70 w-2 h-2'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Laboratorios Section - Carrusel */}
      <section id="laboratorios" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-[36px] font-black text-gray-900 mb-4 text-center tracking-tight uppercase" style={{ fontFamily: '"Mona Sans", system-ui, -apple-system, sans-serif' }}>
            Laboratorios con los que trabajamos
          </h3>
          <p className="text-[18px] text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Colaboramos con los principales laboratorios farmacéuticos para garantizar productos de calidad
          </p>
          <div className="relative max-w-6xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden px-2">
              <div
                className="flex gap-8 transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (200 + 32)}px)`
                }}
              >
                {[...logos, ...logos, ...logos].map((logo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center flex-shrink-0 w-[200px] p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src={logo}
                      alt="Laboratorio"
                      className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition z-10"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition z-10"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {logos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition ${
                    currentIndex === index ? 'bg-[#C9A55C] w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir a logo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sobre la Empresa Section */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-[1fr_400px] gap-16 items-center">
            <div>
              <h3 className="text-[38px] font-black text-gray-900 mb-6 tracking-tight uppercase" style={{ fontFamily: '"Mona Sans", system-ui, -apple-system, sans-serif' }}>
                Sobre la Empresa
              </h3>
              <div className="text-gray-700 leading-relaxed text-[17px] space-y-5">
                <p>En DREW S.A. somos una distribuidora farmacéutica comprometida con un servicio ágil, seguro y confiable. Garantizamos el abastecimiento eficiente de medicamentos y productos de salud en todo el país, incluyendo cadena de frío certificada, manejo especializado y trazabilidad en cada proceso.</p>
                <p>Trabajamos con proveedores autorizados y clientes institucionales que confían en nuestra solvencia operativa, estabilidad y capacidad logística para responder siempre, incluso en escenarios de alta demanda.</p>
              </div>
            </div>
            <div className="flex justify-end">
              <img src="/img_1.png" alt="Camión de distribución farmacéutica DREW S.A." className="w-full max-w-[380px] h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Infraestructura Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Almacén farmacéutico"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-[38px] font-black text-gray-900 mb-6 tracking-tight uppercase" style={{ fontFamily: '"Mona Sans", system-ui, -apple-system, sans-serif' }}>
                Infraestructura de vanguardia
              </h3>
              <div className="text-gray-700 leading-relaxed text-[17px] space-y-5">
                <p>Contamos con instalaciones certificadas y equipadas con tecnología de última generación para garantizar el almacenamiento óptimo de productos farmacéuticos.</p>
                <p>Nuestras bodegas cuentan con sistemas de monitoreo 24/7, control de temperatura y humedad, además de protocolos de seguridad que cumplen con las normativas internacionales más exigentes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cadena de Frío Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-[38px] font-black text-gray-900 mb-6 tracking-tight uppercase" style={{ fontFamily: '"Mona Sans", system-ui, -apple-system, sans-serif' }}>
                Cadena de frío certificada
              </h3>
              <div className="text-gray-700 leading-relaxed text-[17px] space-y-5">
                <p>Especializados en el manejo de productos termo-sensibles con sistemas de refrigeración certificados que garantizan la integridad de cada medicamento desde su recepción hasta la entrega final.</p>
                <p>Nuestra flota de vehículos refrigerados cuenta con tecnología GPS y sistemas de monitoreo en tiempo real que permiten trazabilidad completa de la temperatura durante todo el trayecto.</p>
              </div>
            </div>
            <div>
              <img
                src="/cadenadefrio.png"
                alt="Cadena de frío certificada"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logística y Distribución Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Logística de distribución"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-[38px] font-black text-gray-900 mb-6 tracking-tight uppercase" style={{ fontFamily: '"Mona Sans", system-ui, -apple-system, sans-serif' }}>
                Cobertura nacional
              </h3>
              <div className="text-gray-700 leading-relaxed text-[17px] space-y-5">
                <p>Red de distribución estratégicamente ubicada que nos permite llegar a cualquier punto del territorio nacional con tiempos de entrega optimizados.</p>
                <p>Sistema de gestión logística avanzado que coordina rutas, inventarios y entregas en tiempo real, asegurando la disponibilidad constante de productos críticos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnología Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-[38px] font-black text-gray-900 mb-6 tracking-tight uppercase" style={{ fontFamily: '"Mona Sans", system-ui, -apple-system, sans-serif' }}>
                Tecnología y trazabilidad
              </h3>
              <div className="text-gray-700 leading-relaxed text-[17px] space-y-5">
                <p>Plataforma tecnológica integrada que permite el seguimiento en tiempo real de cada producto, desde su ingreso a nuestras instalaciones hasta su destino final.</p>
                <p>Sistema automatizado de gestión de inventarios con códigos de barras, alertas de vencimiento y reportes detallados que garantizan la transparencia total en cada operación.</p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tecnología farmacéutica"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión Section */}
      <section id="mision-vision" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-10 h-10 text-[#C9A55C]" />
                <h3 className="text-[36px] font-black text-gray-900 tracking-tight uppercase" style={{ fontFamily: '"Mona Sans", system-ui, -apple-system, sans-serif' }}>
                  Nuestra Misión
                </h3>
              </div>
              <p className="text-[17px] text-gray-700 leading-relaxed">
                Brindar soluciones integrales de distribución farmacéutica con altos estándares de calidad, rapidez y seguridad. Nos especializamos en mantener la cadena de frío, garantizar entregas a tiempo y ofrecer una atención confiable, respaldada por una operación sólida y solvente.
              </p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-10 h-10 text-[#C9A55C]" />
                <h3 className="text-[36px] font-black text-gray-900 tracking-tight uppercase" style={{ fontFamily: '"Mona Sans", system-ui, -apple-system, sans-serif' }}>
                  Nuestra Visión
                </h3>
              </div>
              <p className="text-[17px] text-gray-700 leading-relaxed">
                Convertirnos en la distribuidora farmacéutica más ágil, solvente y tecnológicamente avanzada del país, reconocida por su excelencia en procesos, manejo especializado de productos termo-sensibles y relaciones comerciales duraderas con proveedores y clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section id="valores" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-[38px] font-black text-gray-900 mb-4 text-center tracking-tight uppercase" style={{ fontFamily: '"Mona Sans", system-ui, -apple-system, sans-serif' }}>
            Nuestros Valores
          </h3>
          <p className="text-[18px] text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Los principios que guían nuestro compromiso con la excelencia y la confianza
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A55C]/10 rounded-full mb-4">
                <Shield className="w-8 h-8 text-[#C9A55C]" />
              </div>
              <h4 className="text-[20px] font-bold text-gray-900 mb-3">Responsabilidad</h4>
              <p className="text-[16px] text-gray-600">Cumplimos con nuestros compromisos y estándares de calidad</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A55C]/10 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-[#C9A55C]" />
              </div>
              <h4 className="text-[20px] font-bold text-gray-900 mb-3">Rapidez</h4>
              <p className="text-[16px] text-gray-600">Agilidad operativa en cada proceso de distribución</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A55C]/10 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-[#C9A55C]" />
              </div>
              <h4 className="text-[20px] font-bold text-gray-900 mb-3">Transparencia</h4>
              <p className="text-[16px] text-gray-600">Claridad y honestidad en todas nuestras operaciones</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A55C]/10 rounded-full mb-4">
                <Award className="w-8 h-8 text-[#C9A55C]" />
              </div>
              <h4 className="text-[20px] font-bold text-gray-900 mb-3">Compromiso con la calidad</h4>
              <p className="text-[16px] text-gray-600">Excelencia en cada producto y servicio entregado</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A55C]/10 rounded-full mb-4">
                <UserCheck className="w-8 h-8 text-[#C9A55C]" />
              </div>
              <h4 className="text-[20px] font-bold text-gray-900 mb-3">Confianza</h4>
              <p className="text-[16px] text-gray-600">Relaciones sólidas basadas en la credibilidad</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A55C]/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-[#C9A55C]" />
              </div>
              <h4 className="text-[20px] font-bold text-gray-900 mb-3">Solidez operativa</h4>
              <p className="text-[16px] text-gray-600">Estabilidad financiera y operacional garantizada</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A55C]/10 rounded-full mb-4">
                <Heart className="w-8 h-8 text-[#C9A55C]" />
              </div>
              <h4 className="text-[20px] font-bold text-gray-900 mb-3">Profesionalismo</h4>
              <p className="text-[16px] text-gray-600">Especialización en cadena de frío y manejo técnico</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A55C]/10 rounded-full mb-4">
                <Lightbulb className="w-8 h-8 text-[#C9A55C]" />
              </div>
              <h4 className="text-[20px] font-bold text-gray-900 mb-3">Innovación</h4>
              <p className="text-[16px] text-gray-600">Mejora continua en procesos y tecnología aplicada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-[38px] font-black text-gray-900 mb-4 text-center tracking-tight uppercase" style={{ fontFamily: '"Mona Sans", system-ui, -apple-system, sans-serif' }}>
            ¿Qué hacemos?
          </h3>
          <p className="text-[18px] text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            En DREW S.A. nos especializamos en la distribución eficiente y segura de productos farmacéuticos, con infraestructura diseñada para mantener cadena de frío, rutas optimizadas y una operación ágil respaldada por solvencia financiera.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Package className="w-12 h-12 text-[#C9A55C] mx-auto mb-4" />
              <h4 className="text-[22px] font-bold text-gray-900 mb-3">Conectamos</h4>
              <p className="text-[16px] text-gray-600">Enlazamos proveedores autorizados con clientes institucionales</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Users className="w-12 h-12 text-[#C9A55C] mx-auto mb-4" />
              <h4 className="text-[22px] font-bold text-gray-900 mb-3">Servimos</h4>
              <p className="text-[16px] text-gray-600">Atención personalizada con altos estándares de calidad</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Truck className="w-12 h-12 text-[#C9A55C] mx-auto mb-4" />
              <h4 className="text-[22px] font-bold text-gray-900 mb-3">Entregamos</h4>
              <p className="text-[16px] text-gray-600">Distribución segura y puntual en todo el país</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciadores Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-[38px] font-black text-gray-900 mb-4 text-center tracking-tight uppercase" style={{ fontFamily: '"Mona Sans", system-ui, -apple-system, sans-serif' }}>
            Diferenciadores
          </h3>
          <p className="text-[18px] text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Lo que nos hace únicos en el mercado farmacéutico nacional
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-[#C9A55C] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-[18px] font-bold text-gray-900 mb-2">Agilidad operativa</h4>
                <p className="text-[16px] text-gray-600">Procesos optimizados en cada etapa</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-[#C9A55C] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-[18px] font-bold text-gray-900 mb-2">Cadena de frío certificada</h4>
                <p className="text-[16px] text-gray-600">Desde bodega hasta el destino final</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-[#C9A55C] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-[18px] font-bold text-gray-900 mb-2">Solvencia garantizada</h4>
                <p className="text-[16px] text-gray-600">Continuidad y disponibilidad de inventarios</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-[#C9A55C] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-[18px] font-bold text-gray-900 mb-2">Trazabilidad completa</h4>
                <p className="text-[16px] text-gray-600">Protocolos de seguridad rigurosos</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-[#C9A55C] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-[18px] font-bold text-gray-900 mb-2">Cobertura nacional</h4>
                <p className="text-[16px] text-gray-600">Tiempos de entrega óptimos</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-[#C9A55C] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-[18px] font-bold text-gray-900 mb-2">Relaciones sólidas</h4>
                <p className="text-[16px] text-gray-600">Vínculos duraderos con proveedores y clientes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h3 className="text-[38px] font-black text-gray-900 mb-4 tracking-tight uppercase" style={{ fontFamily: '"Mona Sans", system-ui, -apple-system, sans-serif' }}>
              Contáctanos
            </h3>
            <p className="text-[18px] text-gray-600 max-w-2xl mx-auto">
              Estamos aquí para atender tus consultas y brindarte soluciones farmacéuticas de calidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Información de contacto */}
            <div>
              <div className="bg-gradient-to-br from-[#C9A55C] to-[#8B6F3E] rounded-lg p-10 text-white h-full">
                <h4 className="text-[28px] font-bold mb-6">Información de Contacto</h4>
                <p className="text-[16px] mb-8 text-white/90">
                  Nuestro equipo está disponible para ayudarte con cualquier consulta sobre nuestros servicios de distribución farmacéutica.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[17px]">Dirección</p>
                      <p className="text-[15px] text-white/80">Av. Principal 123, Ciudad, País</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[17px]">Teléfono</p>
                      <p className="text-[15px] text-white/80">+123 456 7890</p>
                      <p className="text-[15px] text-white/80">+123 456 7891</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[17px]">Email</p>
                      <p className="text-[15px] text-white/80">info@drewsa.com</p>
                      <p className="text-[15px] text-white/80">ventas@drewsa.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[17px]">Horario de atención</p>
                      <p className="text-[15px] text-white/80">Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                      <p className="text-[15px] text-white/80">Sábados: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-[15px] font-semibold text-gray-700 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A55C] focus:border-transparent outline-none transition text-[15px]"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-[15px] font-semibold text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A55C] focus:border-transparent outline-none transition text-[15px]"
                      placeholder="Nombre de empresa"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-[15px] font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A55C] focus:border-transparent outline-none transition text-[15px]"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-[15px] font-semibold text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A55C] focus:border-transparent outline-none transition text-[15px]"
                      placeholder="+123 456 7890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-[15px] font-semibold text-gray-700 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A55C] focus:border-transparent outline-none transition text-[15px]"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-[15px] font-semibold text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A55C] focus:border-transparent outline-none transition resize-none text-[15px]"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#C9A55C] to-[#8B6F3E] hover:from-[#B8956A] hover:to-[#7A5F35] text-white px-8 py-4 rounded-lg font-bold transition shadow-lg text-[16px] tracking-wider uppercase"
                  style={{ fontFamily: '"Mona Sans", system-ui, -apple-system, sans-serif' }}
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#C9A55C] to-[#8B6F3E]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h3 className="text-[42px] font-black text-white mb-6 tracking-tight uppercase" style={{ fontFamily: '"Mona Sans", system-ui, -apple-system, sans-serif' }}>
            Distribución que cuida vidas, comprometidos con tu bienestar
          </h3>
          <p className="text-[19px] text-white/90 mb-8">
            Confía en nuestra experiencia y solvencia para mantener tu cadena de suministro farmacéutica
          </p>
          <a href="#contacto" className="inline-block bg-white hover:bg-gray-100 text-[#8B6F3E] px-10 py-4 rounded font-bold transition shadow-lg text-[16px] tracking-wider uppercase" style={{ fontFamily: '"Mona Sans", system-ui, -apple-system, sans-serif' }}>
            Contáctanos
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <img src="/logo-nobg.png" alt="DREW S.A." className="h-16 w-auto mb-6 brightness-0 invert" />
              <p className="text-[16px] text-gray-400 leading-relaxed mb-6 max-w-md">
                Distribución que cuida vidas, comprometidos con tu bienestar. Líder en soluciones farmacéuticas con cadena de frío certificada.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#C9A55C] rounded-full flex items-center justify-center transition" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#C9A55C] rounded-full flex items-center justify-center transition" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#C9A55C] rounded-full flex items-center justify-center transition" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-[18px] font-bold text-white mb-5">Enlaces Rápidos</h4>
              <ul className="space-y-3 text-[15px]">
                <li><a href="#inicio" className="hover:text-[#C9A55C] transition flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Inicio</a></li>
                <li><a href="#nosotros" className="hover:text-[#C9A55C] transition flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Nosotros</a></li>
                <li><a href="#mision-vision" className="hover:text-[#C9A55C] transition flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Misión y Visión</a></li>
                <li><a href="#valores" className="hover:text-[#C9A55C] transition flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Valores</a></li>
                <li><a href="#servicios" className="hover:text-[#C9A55C] transition flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Servicios</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[18px] font-bold text-white mb-5">Contacto</h4>
              <ul className="space-y-4 text-[15px]">
                <li className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-[#C9A55C] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-400">Dirección:</p>
                    <p className="text-white">Ciudad, País</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#C9A55C] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  <div>
                    <p className="text-gray-400">Email:</p>
                    <p className="text-white">info@drewsa.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#C9A55C] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <div>
                    <p className="text-gray-400">Teléfono:</p>
                    <p className="text-white">+123 456 7890</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[14px] text-gray-400">&copy; 2025 DREW S.A. Todos los derechos reservados.</p>
            <p className="text-[13px] text-gray-400">Desarrollado por <span className="text-[#C9A55C] font-medium hover:text-[#B8956A] transition cursor-pointer">Torisoftt</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DrewHomepage;
