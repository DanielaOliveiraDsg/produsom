# Project Blueprint: Produsom Web Interface

## 1. Project Goal

A high-performance landing page (language: portuguese) for a Brazilian event lighting and sound company.
**Objective:** Transition the brand from social-media-only to a professional web presence.

## 2. Environment:

- **Local Path:** ~/projects/produsom
- **OS:** macOS (always use zsh/terminal syntax)

## 3. Technical Stack

- **Framework:** React (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## 4. Information Architecture (Sitemap)

**TL;DR**

- **Home:** Hero (CTA), Services Gallery, Footer.
- **Services:** Lighting, Sound (Description + Gallery).
- **Past Events:** Interactive grid with "live" hover states.
- **About Us:** History and Awards.
- **Contact:** Validation form + Social links.

**Detailed Sitemap**
**Home page:**

1. header
   1.1 menu bar - sticky/ fixed
   Logo/home, Services, Past Events, About us, Contact
2. hero
   2.1 static image / video or animation with nice photos
   2.2 "call to action" - something like "want your event to a next level experience?" and a button "Contact us" linking to contact page
3. main - "Our Services" with gallery
   3.1 - 3 images with link or carousel
4. footer - sticky/fixed
   4.1 - street address
   4.2 - logo or symbol (with link to go to home)
   4.3 - social media logos and links (instagram, whatsapp)

**Services Page:**

1. header
   1.1 menu bar - sticky/ fixed
   Logo/home, Services, Past Events, About us, Contact
2. main
   2.1 section 1 - Lingthing ("Iluminação")
   carousel or gallery of photos and text explaining the services
   2.2 section 2 - Sound ("Sonorização")
   equipment photo or video (with sound) and text explaining the services
   2.3 section 3 - Images ("Imagens")
   equipment photo explaining the services
   2.4 section 4 - Equipments ("Estruturas")
   equipment photo explaining the services
3. call to action - "contact us" button
4. footer - sticky/fixed
   4.1 - street address
   4.2 - logo or symbol (with link to go to home)
   4.3 - social media logos and links (instagram, whatsapp)

**Past events Page:**

1. header
   1.1 menu bar - sticky/ fixed
   Logo/home, Services, Past Events, About us, Contact
2. main
   gallery of photos / some live when mouse is on top (short video on hover)
3. call to action - "contact us" button (reuse hero button)
4. footer - sticky/fixed
   4.1 - street address
   4.2 - logo or symbol (with link to go to home)
   4.3 - social media logos and links (instagram, whatsapp)

**About us Page:**

1. header
   1.1 menu bar - sticky/ fixed
   Logo/home, Services, Past Events, About us, Contact
2. main
   2.1 section 1 - Meet the crew
   photo / Text telling the history
   2.2 section 2 - Awards
   award image/photo/logo / Text explaining the award
3. footer - sticky/fixed
   3.1 - street address
   3.2 - logo or symbol (with link to go to home)
   3.3 - social media logos and links (instagram, whatsapp)

**Contact us Page:**

1. header
   1.1 menu bar - sticky/ fixed
   Logo/home, Services, Past Events, About us, Contact
2. main
   form to contact - similar to a registration or login form shape

- logo, "your e-mail", message, send button
  buttons to whatsapp and instagram (use the same as footer)

3. footer
   3.1 street address
   3.2 logo/home
   (no social because they are already under the form)

## 5. Folder Structure

src/
├── assets/ (Images, Logo, Videos)
├── components/
│ ├── layout/ (Header.tsx, Footer.tsx)
│ ├── ui/ (Button.tsx, Card.tsx)
├── data/ (services.ts, events.ts)
├── hooks/ (Theme hooks)
├── layouts/ (MainLayout.tsx)
├── pages/ (Home.tsx, etc.)
└── App.tsx

## 6. Data Structures

Even without prices, we define a "Service" object so the AI knows how to code the cards:

- **Service Object:** `id`, `icon`, `name_pt`, `description_pt`, `image_url`.

## 7. UI/UX Rules

- **Theme:** Dark mode by default (dark-prussian).
- **Responsiveness:** Mobile-first (priority on smartphone viewing).
