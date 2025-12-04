import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Zap,
  Eye,
  Award,
  Handshake,
  TrendingUp,
  Truck,
  Lock,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const DrewHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const laboratories = [
    {
      name: "Laboratorio Farmacéutico A",
      image: "https://images.unsplash.com/photo-1631217240633-e0b5ff5f4f75?w=400&h=200&fit=crop",
    },
    {
      name: "Laboratorio Farmacéutico B",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=200&fit=crop",
    },
    {
      name: "Laboratorio Farmacéutico C",
      image: "https://images.unsplash.com/photo-1576091160569-112055dee28d?w=400&h=200&fit=crop",
    },
    {
      name: "Laboratorio Farmacéutico D",
      image: "https://images.unsplash.com/photo-1631217240633-e0b5ff5f4f75?w=400&h=200&fit=crop",
    },
    {
      name: "Laboratorio Farmacéutico E",
      image: "https://images.unsplash.com/photo-1576091160699-112bf126457e?w=400&h=200&fit=crop",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % laboratories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + laboratories.length) % laboratories.length);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const scrollLeft = currentSlide * 320;
      carouselRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [currentSlide]);

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <header className="bg-white text-foreground sticky top-0 z-40 shadow-sm border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-primary">DREW S.A.</h1>
              <p className="text-xs text-muted-foreground">Distribuidora Farmacéutica</p>
            </div>
            <nav className="hidden md:flex gap-10 text-sm font-medium">
              <a href="#nosotros" className="text-muted-foreground hover:text-primary transition">
                Nosotros
              </a>
              <a href="#mision" className="text-muted-foreground hover:text-primary transition">
                Misión
              </a>
              <a href="#servicios" className="text-muted-foreground hover:text-primary transition">
                Servicios
              </a>
              <a href="#laboratorios" className="text-muted-foreground hover:text-primary transition">
                Laboratorios
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-br from-primary/5 to-white">
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <img
            src="https://images.pexels.com/photos/5953713/pexels-photo-5953713.jpeg"
            alt="Almacén farmacéutico moderno"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Distribución Farmacéutica con Excelencia
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              La solución integral más ágil, solvente y tecnológicamente avanzada. Reconocida por excelencia en procesos, manejo especializado de productos y relaciones comerciales duraderas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded font-semibold hover:bg-primary/90 transition shadow-lg">
                Contáctenos
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded font-semibold hover:bg-primary/5 transition">
                Conocer Más
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre la Empresa Section */}
      <section id="nosotros" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Sobre la Empresa</h3>

              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  En DREW S.A. somos una distribuidora farmacéutica comprometida con un servicio ágil, seguro y confiable. Garantizamos el abastecimiento eficiente de medicamentos y productos de salud en todo el país.
                </p>
                <p>
                  Contamos con infraestructura certificada para cadena de frío, manejo especializado y trazabilidad en cada proceso. Trabajamos con proveedores autorizados y clientes institucionales que confían en nuestra solvencia operativa.
                </p>
                <p>
                  Nuestra capacidad logística nos permite responder siempre, incluso en escenarios de alta demanda, garantizando entregas puntuales y productos en óptimas condiciones.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.pexels.com/photos-dynamic/pixel/6129207/pexels-photo-6129207.jpeg"
                alt="Profesionales de DREW"
                className="rounded-xl shadow-2xl w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión Section */}
      <section id="mision" className="py-20 md:py-32 bg-gradient-to-br from-primary/3 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center order-last md:order-first">
              <img
                src="https://images.pexels.com/photos/4169384/pexels-photo-4169384.jpeg"
                alt="Productos farmacéuticos"
                className="rounded-xl shadow-2xl w-full max-w-lg"
              />
            </div>
            <div className="order-first md:order-last">
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Nuestra Misión</h3>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Brindar soluciones integrales de distribución farmacéutica con altos estándares de calidad, rapidez y seguridad. Nos especializamos en mantener la cadena de frío, garantizar entregas a tiempo y ofrecer atención confiable.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-primary/10">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Cadena de frío certificada desde bodega hasta destino final</span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-primary/10">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Entregas a tiempo con máxima precisión y seguridad</span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-primary/10">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Operación sólida respaldada por solvencia financiera</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Nuestros Valores</h3>
            <p className="text-muted-foreground mt-4 text-lg">Los pilares que guían nuestro compromiso con la excelencia</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-lg transition">
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-3">Responsabilidad</h4>
              <p className="text-muted-foreground leading-relaxed">Compromiso total con nuestros clientes y proveedores en cada operación</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-lg transition">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-3">Rapidez</h4>
              <p className="text-muted-foreground leading-relaxed">Entregas ágiles y eficientes a nivel nacional sin comprometer la calidad</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-lg transition">
              <Eye className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-3">Transparencia</h4>
              <p className="text-muted-foreground leading-relaxed">Procesos claros y trazables en cada operación y transacción</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-lg transition">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-3">Calidad</h4>
              <p className="text-muted-foreground leading-relaxed">Estándares máximos en todo nuestro servicio y productos</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-lg transition">
              <Handshake className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-3">Confianza</h4>
              <p className="text-muted-foreground leading-relaxed">Relaciones sólidas y duraderas con todos nuestros aliados</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-lg transition">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-3">Solidez</h4>
              <p className="text-muted-foreground leading-relaxed">Estabilidad operativa y financiera garantizada en todo momento</p>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué Hacemos? Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/3 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">¿Qué Hacemos?</h3>

          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            En DREW S.A. nos especializamos en la distribución eficiente y segura de productos farmacéuticos, con infraestructura diseñada para mantener cadena de frío, rutas optimizadas y una operación ágil respaldada por solvencia financiera.
          </p>

          <div className="bg-white p-8 md:p-12 rounded-xl border-2 border-primary/20 max-w-2xl mx-auto inline-block">
            <p className="text-2xl md:text-3xl font-semibold text-foreground flex flex-col md:flex-row items-center justify-center gap-3">
              <span>Conectamos</span>
              <ChevronRight className="w-6 h-6 text-primary hidden md:block" />
              <span>Servimos</span>
              <ChevronRight className="w-6 h-6 text-primary hidden md:block" />
              <span>Entregamos</span>
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciadores Section */}
      <section id="servicios" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Nuestros Diferenciadores</h3>
            <p className="text-muted-foreground mt-4 text-lg">Lo que nos distingue en el mercado farmacéutico</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 bg-white border border-primary/10 rounded-xl hover:border-primary/30 hover:shadow-lg transition">
              <Truck className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground leading-relaxed">Agilidad operativa en cada etapa del proceso de distribución</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white border border-primary/10 rounded-xl hover:border-primary/30 hover:shadow-lg transition">
              <Lock className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground leading-relaxed">Cadena de frío certificada desde bodega hasta destino final</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white border border-primary/10 rounded-xl hover:border-primary/30 hover:shadow-lg transition">
              <TrendingUp className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground leading-relaxed">Solvencia que garantiza continuidad e inventarios estables</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white border border-primary/10 rounded-xl hover:border-primary/30 hover:shadow-lg transition">
              <Eye className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground leading-relaxed">Trazabilidad completa y protocolos de seguridad avanzados</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white border border-primary/10 rounded-xl hover:border-primary/30 hover:shadow-lg transition">
              <MapPin className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground leading-relaxed">Cobertura nacional con tiempos de entrega óptimos garantizados</p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white border border-primary/10 rounded-xl hover:border-primary/30 hover:shadow-lg transition">
              <Handshake className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground leading-relaxed">Relaciones sólidas con proveedores y clientes institucionales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratorios Asociados Section */}
      <section id="laboratorios" className="py-20 md:py-32 bg-gradient-to-br from-primary/3 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Laboratorios Asociados</h3>
            <p className="text-muted-foreground mt-4 text-lg">Trabajamos con los principales laboratorios farmacéuticos del país</p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-end mb-8">
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="bg-primary text-primary-foreground p-3 rounded-lg hover:bg-primary/90 transition shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-primary text-primary-foreground p-3 rounded-lg hover:bg-primary/90 transition shadow-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div ref={carouselRef} className="flex gap-8 overflow-x-hidden scroll-smooth">
              {laboratories.map((lab, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 border border-primary/5"
                >
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img src={lab.image} alt={lab.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-foreground text-center text-sm leading-relaxed">{lab.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">¿Necesitas una Distribuidora Confiable?</h3>
          <p className="text-lg md:text-xl mb-10 opacity-95 leading-relaxed">
            DREW S.A. es tu aliado estratégico para garantizar el suministro eficiente y seguro de medicamentos en toda la cadena de distribución nacional, con los más altos estándares de calidad y compromiso.
          </p>
          <button className="bg-primary-foreground text-primary px-10 py-4 rounded-lg font-semibold hover:bg-primary-foreground/90 transition shadow-lg">
            Contáctenos Ahora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-semibold text-white mb-4 text-lg">DREW S.A.</h4>
              <p className="text-sm leading-relaxed">Distribuidora Farmacéutica</p>
              <p className="text-sm opacity-70 mt-2">Servicio ágil, seguro y confiable</p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-4">Empresa</h5>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#nosotros" className="hover:text-white transition">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#mision" className="hover:text-white transition">
                    Misión
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-white transition">
                    Servicios
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-4">Contacto</h5>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>+1 (XXX) XXX-XXXX</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>info@drew.com</span>
                </li>
                <li className="text-xs opacity-70">Disponibilidad: 24/7</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-4">Síguenos</h5>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-xs opacity-70">
            <p>&copy; 2024 DREW S.A. Todos los derechos reservados. | Distribuidora Farmacéutica</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DrewHomepage;
