# Resend Email Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reemplazar nodemailer/Gmail SMTP por el SDK de Resend para enviar emails del formulario de contacto a `contact@tusktrade.com`.

**Architecture:** Un único endpoint Next.js (`/api/email`) recibe el POST del formulario, valida los campos, y usa el SDK de Resend para enviar el mail desde `onboarding@resend.dev` a `contact@tusktrade.com`. El resto de la app (formulario, sendEmail.ts) no cambia.

**Tech Stack:** Next.js 15 App Router, Resend SDK (`resend`), TypeScript

---

### Task 1: Crear branch de trabajo

**Files:**
- Sin cambios de código

- [ ] **Step 1: Crear y checkoutear la branch**

```bash
git checkout -b feature/resend-email
```

Expected: `Switched to a new branch 'feature/resend-email'`

---

### Task 2: Reemplazar dependencias

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Desinstalar nodemailer**

```bash
npm uninstall nodemailer @types/nodemailer
```

Expected: `removed 2 packages` (o similar). Verificar que `package.json` ya no tiene `nodemailer` ni `@types/nodemailer`.

- [ ] **Step 2: Instalar el SDK de Resend**

```bash
npm install resend
```

Expected: `added 1 package` (o similar). Verificar que `package.json` tiene `"resend"` en `dependencies`.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: reemplazar nodemailer por resend"
```

---

### Task 3: Actualizar la API route

**Files:**
- Modify: `src/app/api/email/route.ts`

- [ ] **Step 1: Reemplazar el contenido del archivo**

Reemplazar el archivo completo con:

```ts
import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  if (!name || typeof name !== "string" || name.trim() === "") {
    return NextResponse.json({ error: "Invalid name" }, { status: 400 });
  }
  if (!email || typeof email !== "string" || !emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (!message || typeof message !== "string" || message.trim() === "") {
    return NextResponse.json({ error: "Invalid message" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "contact@tusktrade.com",
    subject: `Message from ${name} (${email})`,
    text: message,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Email sent" });
}
```

- [ ] **Step 2: Verificar que el build compila sin errores**

```bash
npm run build
```

Expected: build exitoso sin errores de TypeScript ni de compilación.

- [ ] **Step 3: Commit**

```bash
git add src/app/api/email/route.ts
git commit -m "feat: migrar envío de email de nodemailer a Resend"
```

---

### Task 4: Configurar variable de entorno local

**Files:**
- Modify: `.env.local` (crear si no existe; este archivo no se commitea)

- [ ] **Step 1: Obtener la API key de Resend**

Ir a [resend.com](https://resend.com) → crear cuenta → ir a API Keys → crear una nueva key.

- [ ] **Step 2: Agregar la variable al archivo .env.local**

En `.env.local` (en la raíz del proyecto), agregar:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Reemplazar `re_xxxx...` con la key real obtenida en el paso anterior.

- [ ] **Step 3: Verificar que .env.local está en .gitignore**

```bash
grep ".env.local" .gitignore
```

Expected: debe aparecer `.env.local` en la salida. Si no aparece, agregarlo:

```bash
echo ".env.local" >> .gitignore
git add .gitignore
git commit -m "chore: agregar .env.local a .gitignore"
```

---

### Task 5: Prueba manual del formulario

**Files:**
- Sin cambios de código

- [ ] **Step 1: Levantar el servidor de desarrollo**

```bash
npm run dev
```

- [ ] **Step 2: Probar el formulario**

Abrir `http://localhost:3000`, ir a la sección "Contact", completar el formulario con datos reales y enviarlo.

Expected: mensaje de éxito en el formulario y email recibido en `contact@tusktrade.com` (puede tardar unos segundos).

- [ ] **Step 3: Verificar en el dashboard de Resend**

Ir al dashboard de Resend → Logs → confirmar que el email aparece como enviado exitosamente.

---

### Task 6: Configurar la variable en producción

**Files:**
- Sin cambios de código (configuración en la plataforma de deploy)

- [ ] **Step 1: Agregar `RESEND_API_KEY` en la plataforma de deploy**

En Vercel (u otra plataforma): ir a Settings → Environment Variables → agregar `RESEND_API_KEY` con la misma key de Resend.

Remover las variables viejas `email` y `password` si estaban configuradas.

---
