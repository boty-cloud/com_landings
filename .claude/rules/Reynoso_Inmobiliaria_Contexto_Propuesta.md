# Resumen de Discovery Comercial: Reynoso Inmobiliaria
**Fecha de la reunión:** 19 de Agosto de 2026
**Asistentes:** 
- Por Auren: Manuel Paladidi, Nicolás Donnelly
- Por Reynoso Inmobiliaria: Denise (Responsable de Marketing)

---

## 1. CONTEXTO DEL CLIENTE
**Reynoso Inmobiliaria** es una empresa con 25 años de trayectoria originaria de Salta. Tienen dos unidades de negocio principales:
1. **Inmobiliaria Tradicional:** Compra, venta y alquiler de propiedades.
2. **Desarrollos Urbanísticos (Loteos):** Fuerte crecimiento en la región del NOA (orientado a clase media/media-baja, pero incorporando proyectos premium en Cafayate y Cachi).
* **Expansión Internacional:** Operaciones en Paraguay (construcción de departamentos premium en pozo en alianza con Mediterránea PI), apuntando fuertemente a inversores argentinos.

## 2. STACK TECNOLÓGICO ACTUAL
- **CRM:** Odoo (versión reciente, pero no la última). Maneja el pipeline con estados (Ganado, Perdido).
- **Chatbot Actual:** Desarrollado por un proveedor externo en Salta usando N8n y Gemini Pro. 
- **Email Marketing:** Mailjet (integrado con Odoo).
- **Gestión de Lotes:** ExploreMe (herramienta propia para ver disponibilidad en tiempo real).
- **Administración y Cobros:** LEBANE (sistema especializado en loteos y operaciones inmobiliarias).
- **Página Web:** WordPress. Dividida problemáticamente en dos dominios/propiedades (Institucional y Propiedades), lo que dificulta la analítica.

## 3. SITUACIÓN ACTUAL Y PUNTOS DE DOLOR (PAIN POINTS)
- **Falta de automatización en Asignación de Leads:** El chatbot ingresa leads de pauta (Meta/Google Ads) a Odoo, pero la asignación a los 5 comerciales se hace de forma manual usando un Excel ("El FORCAS") gestionado por un asistente. Pérdida de trazabilidad.
- **Cuello de Botella en Cotizaciones:** Para emitir un presupuesto oficial (PDF estandarizado por tamaño/lote), el comercial debe solicitarlo a Contaduría, lo que puede demorar hasta una semana (ej. proyecto premium Malcauce).
- **Canales Desconectados:** Los leads provenientes de WhatsApp orgánico, formularios de la web y mails no pasan por el chatbot ni entran a Odoo automáticamente. Quedan perdidos en planillas Excel.
- **Falta de Seguimiento / Nutrición (Nurturing):** Los leads descartados o "fríos" quedan en el limbo. No hay campañas de reactivación automatizadas (ej. ofrecer lotes más baratos a quienes no calificaron para los premium).
- **Falta de Comunicación Post-Venta y Retención:** 
    - Loteos: Los clientes no reciben actualizaciones automáticas sobre el estado de sus lotes (ej. avances de obra, corte de pasto).
    - Propiedades: Los propietarios no reciben reportes de rendimiento de sus inmuebles (visitas en web, ZonaProp, MercadoLibre, etc.).
- **Doble carga de trabajo:** Los comerciales cargan datos en Odoo, pero esto no se refleja automáticamente en la web, obligando a usar planillas estandarizadas para portales como ZonaProp.

## 4. REQUERIMIENTOS Y OPORTUNIDADES DE AUTOMATIZACIÓN (Para incluir en la propuesta)
1. **Agente de IA Integral (Omnicanalidad):** Reemplazar/evolucionar el chatbot actual por un agente IA que centralice WhatsApp corporativo de pauta, WhatsApp orgánico, web forms y mails directamente hacia Odoo.
2. **Asignación Inteligente de Leads:** Automatizar el enrutamiento de leads dentro de Odoo a los comerciales sin depender de asistentes ni Excels.
3. **Automatización de Presupuestos (Cotizador Automático):** Generar PDFs de cotizaciones en tiempo real basados en reglas de negocio (proyecto, tamaño, cantidad, descuentos de contado) directamente desde Odoo, saltando la burocracia de contaduría.
4. **Flujos de Reactivación (Nurturing):** Activar campañas proactivas para revivir leads "Perdidos" cuando ingresan nuevos proyectos que se ajusten a su presupuesto.
5. **Reportes Automáticos para Clientes:** 
    - Compradores de lotes: Envío automatizado de avances del desarrollo.
    - Propietarios de inmuebles: Envío de analíticas mensuales de vistas/interés de sus propiedades.
6. **Sincronización Web-CRM:** Que la carga de propiedades en Odoo actualice automáticamente la página web y facilite la exportación a portales (ZonaProp).
7. **Escalabilidad a Paraguay:** Crear un entorno/funnel preparado para procesar inversores en los proyectos de pozo de Paraguay.

## 5. ESTRATEGIA RECOMENDADA POR AUREN (Enfoque de la Propuesta)
- **Evitar un "Frankenstein" de sistemas:** Proponer una solución integral nativa o fuertemente alineada para no depender de múltiples proveedores (N8n, WordPress desconectado, Excel).
- **Implementación por Fases (Roadmap):** 
    - *Fase 1:* Centralización omnicanal (ingreso de leads), asignación automática en Odoo y generador de presupuestos.
    - *Fase 2:* Reactivación de leads fríos, automatización post-venta/reportes.
    - *Fase 3:* Integración web/portales y ecosistema Paraguay.
- **Tono Comercial:** La empresa (y su presidente) está decidida a invertir en automatización ("tienen el capital y las ganas"), por lo que la propuesta debe ser ambiciosa, orientada a resultados (velocidad de cierre, recuperación de base de datos) y estructurada profesionalmente.

---
**Instrucciones para Claude (Prompting):** 
*Utiliza este documento como contexto base para redactar una propuesta comercial de servicios de automatización e inteligencia artificial. Estructura la propuesta con un Resumen Ejecutivo, Alcance del Proyecto dividido en Fases, Beneficios Esperados, y Metodología de Trabajo. Adapta el tono para que sea persuasivo, tecnológico y orientado a resolver los "Pain Points" mencionados.*
