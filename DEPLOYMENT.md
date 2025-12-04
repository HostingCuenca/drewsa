# Deployment en Vercel

Este proyecto está configurado para desplegarse en Vercel como una aplicación estática (SPA).

## Pasos para desplegar en Vercel

### 1. Preparación del repositorio

Asegúrate de que todos los cambios estén commiteados en Git:

```bash
git add .
git commit -m "Preparar para deployment en Vercel"
git push
```

### 2. Deployment en Vercel

#### Opción A: Desde la CLI de Vercel

```bash
# Instalar Vercel CLI (si no la tienes)
npm i -g vercel

# Login en Vercel
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

#### Opción B: Desde el Dashboard de Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "Add New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente la configuración

### 3. Configuración del proyecto en Vercel

La configuración ya está lista en `vercel.json`:

- **Framework Preset**: Other
- **Build Command**: `npm run build` (ya configurado)
- **Output Directory**: `dist/spa` (ya configurado)
- **Install Command**: `npm install`

### 4. Variables de entorno (Opcional)

Si tienes variables de entorno, agrégalas en:
- Dashboard de Vercel → Tu Proyecto → Settings → Environment Variables

Ejemplo:
```
PING_MESSAGE=pong
```

## Estructura del proyecto

```
drewsa/
├── dist/spa/          # Build de producción (generado)
├── client/            # Código fuente React
├── public/            # Assets estáticos
├── server/            # Backend (no usado en Vercel)
├── vercel.json        # Configuración de Vercel
└── package.json       # Scripts de build
```

## Notas importantes

1. **Solo se despliega el frontend**: La configuración actual solo despliega la SPA (Single Page Application)
2. **Las rutas funcionan correctamente**: El archivo `vercel.json` maneja el routing de React Router
3. **Assets públicos**: Todos los archivos en `/public` estarán disponibles en la raíz del sitio

## Troubleshooting

### Error 404 en rutas
Si ves errores 404 al navegar, verifica que `vercel.json` tenga las reglas de rewrite correctas.

### Assets no se cargan
Asegúrate de que las rutas en tu código usen paths absolutos desde la raíz:
- ✅ `/logo.png`
- ❌ `./logo.png`

### Build falla
Verifica que el comando `npm run build` funcione localmente:
```bash
npm run build
```

## URLs después del deployment

Vercel te proporcionará:
- URL de preview: `https://drewsa-xxxxx.vercel.app`
- URL de producción: `https://drewsa.vercel.app` (o tu dominio personalizado)

## Actualizaciones

Cada push a la rama principal (`main` o `master`) triggereará un nuevo deployment automático.

---

¿Necesitas ayuda? Consulta la [documentación de Vercel](https://vercel.com/docs)
