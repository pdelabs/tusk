# Migración de email: nodemailer → Resend

## Contexto

El formulario de contacto actual usa nodemailer con Gmail SMTP. El mail de la empresa (`contact@tusktrade.com`) está alojado en cPanel y no tiene Gmail SMTP. Se migra a Resend para simplificar la integración.

## Decisiones

- **Sender:** `onboarding@resend.dev` (dominio de Resend, sin verificación de dominio propia requerida)
- **Recipient:** `contact@tusktrade.com` (hardcodeado en la API route)
- **Branch de trabajo:** `feature/resend-email`

## Cambios de dependencias

Remover:
- `nodemailer`
- `@types/nodemailer`

Agregar:
- `resend`

## Variables de entorno

Remover:
- `process.env.email`
- `process.env.password`

Agregar:
- `RESEND_API_KEY` — API key obtenida desde el dashboard de Resend

## Archivos modificados

### `src/app/api/email/route.ts`

Reemplazar toda la lógica de nodemailer por el SDK de Resend:

```ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// En el handler POST:
await resend.emails.send({
  from: "onboarding@resend.dev",
  to: "contact@tusktrade.com",
  subject: `Message from ${name} (${email})`,
  text: message,
});
```

Las validaciones de entrada (`name`, `email`, `message`) y la estructura de la respuesta HTTP se mantienen igual.

## Archivos sin cambios

- `src/app/sendEmail.ts` — solo hace fetch al endpoint, no interactúa con el proveedor de email
- `src/app/Contact.tsx` — el formulario no cambia

## Checklist de implementación

- [ ] Crear y checkoutear branch `feature/resend-email`
- [ ] Desinstalar `nodemailer` y `@types/nodemailer`
- [ ] Instalar `resend`
- [ ] Actualizar `src/app/api/email/route.ts`
- [ ] Actualizar `.env.local` con `RESEND_API_KEY`
- [ ] Verificar que el build compila sin errores
