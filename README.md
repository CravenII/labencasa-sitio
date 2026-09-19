# Home Lab ES — sitio de afiliados (en preparación)

Sitio estático en español con guías de compra, comparativas y tutoriales para montar
un home lab (Raspberry Pi, redes domésticas, NAS, Jellyfin, Pi-hole, Nextcloud…).

**Estado (19-sep-2026): NO publicado.** El sitio está completo y verificado, pendiente de:
1. Revisión visual del responsable.
2. Compra del dominio `labencasa.com` (elegido; ~$11/año; solo con OK explícito al precio exacto).
3. Solicitud de cuentas de afiliados (Amazon Associates, Awin, B&H/Impact) **después** de publicar,
   en una sola tarde (Amazon no reevalúa solicitudes rechazadas: primero el sitio, luego la cuenta).

## Estructura

- `index.html` — portada: 5 pilares temáticos + índice de los 12 artículos.
- `articulos/` — 12 artículos originales en español (comparativas, guías de compra, tutoriales).
- `divulgacion.html` — política de divulgación de afiliados (conforme a guías FTC).
- `privacidad.html` — política de privacidad.
- `sobre-nosotros.html` — página institucional (sin datos personales).
- `style.css` — estilos (responsive, sin frameworks).
- `notas.md` — notas internas del proyecto (no se publica como página).

Sin build step: HTML + CSS puros. Para previsualizar, abre `index.html` en el navegador
o sirve la carpeta con `python3 -m http.server`.

## Transparencia (importante)

**A día de hoy el sitio NO tiene enlaces comerciales activos.** Los botones "Ver precio"
de los artículos son marcadores neutros (`span.enlace-pendiente`, sin destino) y cada
artículo lo dice en su caja de transparencia. Cuando se activen los programas de
afiliados, los marcadores se reemplazarán por enlaces reales con su divulgación
correspondiente, como exige la ley.

## Contacto

El contacto público del sitio es por Messenger: https://www.facebook.com/verafueradelchat
No se publica ningún teléfono ni correo personal en el sitio.

## Licencia

Pendiente de decisión del responsable. Contenido © 2026 Home Lab ES — todos los derechos
reservados hasta que se elija una licencia explícita.
