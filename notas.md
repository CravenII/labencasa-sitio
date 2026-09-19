# Notas — sitio de afiliados "Home Lab ES"
Estado: completo y verificado el 17-sep-2026. Cambios pre-difusión aplicados el 19-sep-2026. NO publicado.

## Cambios del 19-sep-2026 (pre-difusión, sin gasto, sin cuentas)
- **Placeholders desactivados**: los 68 `[ENLACE_AFILIADO_N]` de los 12 artículos son ahora
  `<span class="enlace-pendiente">` neutros: no son clicables, no parecen afiliados y llevan
  un tooltip que dice que aún no hay enlaces comerciales. Estilo nuevo en `style.css`.
- **Transparencia honesta**: la caja de divulgación de los 12 artículos y `divulgacion.html`
  dicen ahora claramente que el sitio **aún no tiene enlaces comerciales activos**; la política
  describe lo que se hará cuando se activen (conforme a guías FTC).
- **Contacto → Messenger**: se eliminó `mailto:contacto@labencasa.com` de las 16 páginas
  (decisión del 17-sep superada por instrucción del 19-sep). El contacto público es ahora
  https://www.facebook.com/verafueradelchat. Cero teléfonos, cero correos personales.
- **Textos ajustados**: tarjeta "Transparencia total" en `index.html`, viñeta económica en
  `sobre-nosotros.html` y párrafo de cookies en `privacidad.html`, todo en coherencia con
  el estado "sin enlaces comerciales aún".
- **README.md** añadido al repo (sin datos personales, sin placeholders). Licencia pendiente
  de decisión del responsable.

## Qué es
Sitio estático (HTML+CSS puros, sin build step) en `files/sitio-afiliados/`:
- `index.html` — portada con 5 pilares y los 12 artículos
- `articulos/` — 12 artículos originales en español (1.127–1.485 palabras c/u): 4 comparativas, 4 guías de compra, 3 tutoriales + 1 de decisión
- `divulgacion.html` — disclosure FTC en español (enlazado desde cada artículo)
- `privacidad.html` — política de privacidad básica
- `sobre-nosotros.html` — página institucional sin datos personales
- `style.css` — diseño responsive, estética tech

## Verificaciones hechas (17-sep-2026)
- 12/12 artículos con caja de divulgación literal al inicio
- 0 frases prohibidas ("lo probamos", "en nuestras pruebas", cifras inventadas, etc.)
- Placeholders `[ENLACE_AFILIADO_N]` en los 12 (2–7 por artículo), sin URLs reales
- Precios solo como rangos orientativos con fecha (septiembre de 2026)
- Titles ≤60 y meta descriptions ≤160 en los 12
- 0 enlaces internos rotos; contacto ya definido: `contacto@labencasa.com` (mailto en pie de las 16 páginas); 0 datos personales

## Decisiones tomadas (17-sep-2026, noche)
- **Dominio elegido: labencasa.com** — verificado libre por RDAP; $11.08/año en Porkbun (~$10.46 en Cloudflare). NO comprado todavía: se compra cuando el sitio esté listo para publicar. Fecha límite suave: 1-nov-2026 (Verisign sube el mayorista .com a $10.97).
- **Correo público: contacto@labencasa.com** — se activará con el reenvío de email gratuito de Porkbun al comprar el dominio (los mensajes llegan al correo privado de Craven; al responder saldrán desde su dirección personal salvo que configure "enviar como"). No se expone ningún correo personal en el sitio.

## Qué falta para publicar (en orden)
1. **Dominio**: ✅ elegido `labencasa.com` (verificado libre; $11.08/año Porkbun). Comprarlo SOLO cuando el sitio esté listo para publicar (límite suave: 1-nov-2026 por subida de precio mayorista .com).
2. **Correo de contacto**: ✅ definido `contacto@labencasa.com`; activar reenvío gratuito de Porkbun al comprar el dominio.
3. **Enlaces reales de afiliado**: reemplazar los `[ENLACE_AFILIADO_N]` cuando existan las cuentas (ver punto 4).
4. **Solicitud de cuentas DESPUÉS del sitio** (orden crítico): Amazon Associates no reevalúa solicitudes rechazadas, así que Craven solicita Amazon + Awin + B/Impact en una tarde SOLO cuando el sitio esté publicado con los 12 artículos. Necesitará datos fiscales (W-9) y bancarios.
5. **Revisión trimestral**: precios, comisiones de programas y términos (Amazon cambia sin aviso).

## Restricciones respetadas
- Nada publicado ni desplegado; ninguna cuenta abierta; ningún contacto realizado.
- Sin afirmaciones de pruebas propias ni testimonios inventados (FTC).
- Contenido con análisis/transformación propia en cada pieza (regla Amazon 14-abr-2026).
- Sin datos personales de Craven en ningún archivo.
