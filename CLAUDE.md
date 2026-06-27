# Centro Neurodesarrollo San Vicente — Sitio Web

## Descripción
Sitio web estático para Centro Neurodesarrollo San Vicente, centro de salud multidisciplinario ubicado en San Vicente de Tagua Tagua, Región del Libertador General Bernardo O'Higgins, Chile.

## Stack
- HTML5 + CSS3 + JavaScript (vanilla, sin frameworks)
- Bootstrap 5.3.3 (CDN)
- Bootstrap Icons 1.11.3 (CDN)
- Google Fonts: Inter (cuerpo) + Playfair Display (títulos)
- Sin bundler ni sistema de build — archivos servidos directamente

## Estructura de archivos
- `index.html` — Página de inicio
- `servicios.html` — Catálogo de especialidades
- `equipo.html` — Equipo profesional (17 profesionales, 9 especialidades)
- `talleres.html` — Talleres para adulto mayor
- `contacto.html` — Formulario y mapa
- `privacidad.html` — Política de privacidad
- `css/custom.css` — Estilos globales del proyecto (un solo archivo)
- `js/main.js` — JavaScript global
- `assets/img/Logo.jpg` — Logo principal (height:54px en navbar, 42px en footer)
- `assets/img/equipo/` — Fotos de los 17 profesionales (JPG, extraídas del PDF oficial)

## Norma Gráfica — Centro Neurodesarrollo San Vicente

### 1. Identidad visual
**Nombre:** Centro Neurodesarrollo San Vicente
**Uso:** salud, neurodesarrollo, atención infantil y adultos, terapias, comunicación institucional.

### 2. Paleta cromática (extraída del logo)

| Variable CSS | HEX | Uso |
|---|---|---|
| `--color-primary` | `#2B7070` | Teal — texto del logo y estetoscopio. Color dominante de marca |
| `--color-primary-dark` | `#0D4646` | Teal oscuro — encabezados, CTA, footer |
| `--color-primary-mid` | `#1F5E5E` | Teal medio — gradientes intermedios |
| `--color-primary-light` | `#E0F4F4` | Teal suave — fondos de íconos, badges |
| `--color-primary-xlight` | `#F0FAFA` | Teal muy suave — fondos de secciones |
| `--color-accent` | `#E07B72` | Coral — corazón del logo. Botones de acción (agendar, WhatsApp) |
| `--color-accent-dark` | `#C4625A` | Coral oscuro — hover de botones accent |
| `--color-accent-light` | `#FDECEA` | Coral muy suave — fondos de alerta o acento |
| `--color-neutral` | `#8A8A8A` | Gris — cerebro del logo. Texto secundario, bordes |
| `--color-bg` | `#F7FFFE` | Fondo general (blanco con leve tono teal) |
| `--color-text` | `#2D3748` | Texto de cuerpo |
| `--color-text-light` | `#718096` | Texto secundario / subtítulos |
| `--color-heading` | `#1A2332` | Títulos y nombres |

### 3. Tipografía
- **Títulos / nombres:** Playfair Display 600–700 — variable `--font-heading`
- **Cuerpo / UI:** Inter 400–700 — variable `--font-body`

### 4. Reglas de aplicación
- Color dominante: **teal** (`#2B7070`) — botones primarios, títulos, elementos institucionales.
- Color de acción urgente: **coral** (`#E07B72`) — solo en botones de agendamiento y WhatsApp FAB.
- Sección divider: gradiente `teal → coral` (ambos colores del logo).
- No usar negros puros como color principal de texto.
- No usar degradados fuertes ni colores saturados ajenos a la paleta.
- Cada especialidad tiene su propio color pastel para íconos y badges (ver `.service-icon.*` en custom.css).

### 5. Variables CSS (tal como están en css/custom.css)
```css
:root {
  --color-primary:        #2B7070;
  --color-primary-dark:   #0D4646;
  --color-primary-mid:    #1F5E5E;
  --color-primary-hover:  #1F6060;
  --color-primary-light:  #E0F4F4;
  --color-primary-xlight: #F0FAFA;
  --color-accent:         #E07B72;
  --color-accent-dark:    #C4625A;
  --color-accent-light:   #FDECEA;
  --color-neutral:        #8A8A8A;
  --color-bg:             #F7FFFE;
  --color-text:           #2D3748;
  --color-text-light:     #718096;
  --color-heading:        #1A2332;
  --font-heading:         'Playfair Display', Georgia, serif;
  --font-body:            'Inter', system-ui, sans-serif;
  --radius-card:          1rem;
  --shadow-card:          0 1px 3px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.06);
  --shadow-hover:         0 8px 32px rgba(43,112,112,0.22);
}
```

## Convenciones
- Idioma del contenido: español (Chile)
- CSS global en `css/custom.css` — un solo archivo para todo el sitio
- Clases siguen convención semántica sin prefijo propietario: `.team-card`, `.service-card`, `.page-hero`, etc.
- No usar jQuery ni librerías adicionales salvo Bootstrap y Google Fonts
- Mantener compatibilidad con los CDN ya declarados en cada HTML

## Equipo profesional (17 profesionales — equipo.html)

| Especialidad | Profesional |
|---|---|
| Fonoaudiología | Constanza Luque, Javiera Marchi |
| Psicopedagogía | Montserrat Sepúlveda, Maria Fernanda Pinto |
| Curriculista | Maria Jesús Campos |
| Psiquiatría Infanto-Juvenil | Loreto Campos |
| Psiquiatría Adultos | Francesca Vera |
| Neurología | Patricia Pardo |
| Psicología Infanto-Juvenil | Javiera Quezada |
| Psicología Infanto-Juvenil y Adultos | Estrella Espíndola, Daniela Espinoza Calderón, Fernanda Vera |
| Kinesiología | Carla Salinas Lopez |
| Nutrición | Carla Palma Becerra |
| Terapia Ocupacional | Maria Paz Jorquera, María de los Ángeles Cornejo, Gonzalo Donoso Aros |

Fotos en `assets/img/equipo/<nombre-apellido>.jpg` (extraídas del PDF oficial).

## SEO — Estándares por página
Cada página debe tener:
- `<title>` descriptivo y único
- `<meta name="description">` y `<meta name="keywords">`
- Open Graph: `og:title`, `og:description`, `og:url`, `og:image`
- Twitter Card: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- `<link rel="canonical">` apuntando a la URL canónica
- Geolocalización: `geo.region`, `geo.placename`, `geo.position`, `ICBM`
- Schema.org JSON-LD según tipo de página
- Páginas legales llevan `<meta name="robots" content="noindex, follow">`

## Notas Técnicas
- **Codificación UTF-8 obligatoria** en todos los archivos. Si ves símbolos `?` en lugar de acentos, abre en VS Code > barra inferior > "Reopen with Encoding" > UTF-8.
- El smooth scroll de anclas internas ya está implementado en `js/main.js` con offset por navbar.
- El nav link activo se detecta automáticamente por `data-page` en cada `<a class="nav-link">`.
