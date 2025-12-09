# Sección Desayuno Empresarial

Copiar y pegar esta sección después de la sección "Convenio con Fundaciones" (después de la línea 368)


      {/* Desayuno Empresarial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              {/* Logo */}
              <div className="mb-8">
                <img
                  src="/logoconvene.png"
                  alt="Logo Desayuno Conferencias"
                  className="w-48 h-auto object-contain"
                />
              </div>

              <h3 className="text-[28px] sm:text-[38px] font-black text-gray-900 mb-6 tracking-tight uppercase" style={{ fontFamily: '"Mona Sans", system-ui, -apple-system, sans-serif' }}>
                Desayuno <span className="text-[#C9A55C]">Conferencias</span>
              </h3>

              <div className="text-gray-700 leading-relaxed text-[17px] space-y-5 text-justify">
                <p>
                  En DREW S.A. participamos activamente en eventos que fortalecen las relaciones empresariales y el desarrollo del sector farmacéutico. Nuestro compromiso en el Desayuno Conferencias refleja nuestra dedicación por mantenernos a la vanguardia del sector.
                </p>
                <p>
                  Este tipo de eventos nos permite compartir experiencias, conocer las últimas tendencias del mercado y fortalecer alianzas estratégicas con líderes de la industria farmacéutica y de salud.
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <img
                src="/desayuno.png"
                alt="Participación en Desayuno Conferencias DREW S.A."
                className="w-full max-w-[450px] h-[550px] rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>


## Instrucciones:

1. Abre el archivo `client/pages/Index.tsx`
2. Busca la línea 368 que dice `</section>` (final de la sección "Convenio con Fundaciones")
3. Justo después de esa línea, pega el código anterior
4. Asegúrate de que la siguiente sección "Cultura Corporativa" cambie su fondo de `bg-white` a `bg-gray-50` para mantener la alternancia de colores

## Cambio adicional necesario:

En la línea 371, cambiar:
```jsx
<section className="py-24 bg-white">
```

Por:
```jsx
<section className="py-24 bg-gray-50">
```

Esto mantiene el patrón de alternancia entre fondo blanco y gris.

## Layout:

- **Columna izquierda**: Logo "convene.jpeg" + Badge + Título + Texto descriptivo
- **Columna derecha**: Imagen grande "desayuno.png"
- Similar al diseño de la sección "Sobre la Empresa"
