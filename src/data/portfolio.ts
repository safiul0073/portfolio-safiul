/** @format */

import comvest from "../../public/comvest.png";
import neuralDesk from "../../public/NeuralDesk.png";
import waCatelog from "../../public/waCatelog.png";
import waPro from "../../public/WaPro.png";
import ighotokImage from "../../public/ighotok.png";
import itsholyday from "../../public/itsholyday.png";
import lottery from "../../public/lottery.png";
import quiz from "../../public/quiz.png";
import investra from "../../public/investra.png";
import sagorstore from "../../public/sagorstore.png";
import { Education, Experience, Project, Skill, SocialLink } from "../types";

export const personalInfo = {
    name: "Md Safiullah",
    title: "Senior Full Stack & AI Automation Developer",
    email: "mdsafiul0073@gmail.com",
    location: "Uttara, Dhaka, Bangladesh",
    bio: "Full stack developer with 4+ years of experience building reliable web applications with Laravel, Next.js, React, Vue, MySQL, and Docker, and AI automation and chatbots on top of them. I focus on backend architecture, clean user experiences, and production-ready systems, and I move into an unfamiliar stack or codebase quickly.",
};

export const projects: Project[] = [
    {
        id: 18,
        slug: "wacatelog-whatsapp-catalog-manager-saas",
        title: "Wacatelog - WhatsApp Catalog Manager SaaS",
        description:
            "A self-hosted WhatsApp commerce platform and SaaS script built on Laravel, allowing merchants to operate stores directly within WhatsApp.",
        longDescription:
            "Built Wacatelog, a comprehensive WhatsApp commerce platform designed as a multi-tenant SaaS script. It empowers merchants to run their entire storefront natively within WhatsApp by syncing their product catalogs directly to the WhatsApp Business Catalog. The system facilitates end-to-end commerce workflows including browsing products, taking orders directly in chat conversations, generating and sending secure payment links, and automating post-purchase follow-up communications. The platform incorporates a complete SaaS administration layer, merchant dashboards, and reliable REST APIs for seamless order and inventory management.",
        highlights: [
            "Architected a robust, modular SaaS platform using the Laravel framework to serve multiple merchants.",
            "Integrated seamless synchronization between merchant product databases and the WhatsApp Business Catalog.",
            "Developed automated conversational commerce flows for capturing customer orders directly within WhatsApp chats.",
            "Implemented secure payment gateways to generate and send dynamic payment links directly to customers.",
            "Built automated follow-up communication sequences to enhance customer engagement and retention.",
            "Designed a comprehensive merchant dashboard for managing products, orders, customers, and overall business operations.",
        ],
        image: waCatelog.src,
        technologies: ["Laravel", "PHP", "WhatsApp Cloud API", "Tailwind CSS", "MySQL", "SaaS Architecture"],
        github: "#",
        live: "https://preview.codecanyon.net/item/wacatelog-whatsapp-catalog-manager-saas/full_screen_preview/64875668",
        codecanyon: "https://codecanyon.net/item/wacatelog-whatsapp-catalog-manager-saas/64875668?s_rank=1",
        featured: true,
    },
    {
        id: 17,
        slug: "wapro-whatsapp-automation-saas",
        title: "WaPro - WhatsApp Automation & Growth Engine",
        description:
            "A self-hosted WhatsApp marketing, automation, and CRM SaaS script on Laravel 13, with a shared team inbox on the WhatsApp Cloud API, broadcast campaigns, visual automation flows, and AI chatbots.",
        longDescription:
            "Built WaPro, a modular Laravel 13 platform that lets a business run its entire WhatsApp presence from one place. Teams work a shared inbox on the official WhatsApp Cloud API with chat assignment, attachments, and full thread history; marketers run segmented broadcast campaigns with scheduling and per-recipient delivery tracking; and operations teams automate replies through keyword, first-message, and off-hours triggers or a visual flow builder. AI chatbots answer from an uploaded knowledge base using document chunking and embeddings with optional Qdrant vector search, across nine LLM providers including self-hosted Ollama. Around that sits a full multi-tenant SaaS: workspaces with owner/administrator/manager/staff roles, subscription plans with feature restrictions, fourteen payment gateways, multi-currency billing, a frontend CMS, a Sanctum-secured REST API with Swagger documentation, and a super admin panel for analytics, billing, gateway and WhatsApp configuration, AI provider tracking, audit logs, and 2FA.",
        highlights: [
            "Built a shared team inbox on the official WhatsApp Cloud API with chat assignment, attachments, thread history, and Meta app integration.",
            "Developed broadcast campaigns with scheduling, contact segmentation, per-recipient delivery tracking, and reporting.",
            "Implemented automation as both a visual flow builder and rule-based auto-replies triggered by keyword, first message, or off-hours.",
            "Integrated nine LLM providers — OpenAI, Anthropic, Gemini, Groq, DeepSeek, Mistral, OpenRouter, xAI, and self-hosted Ollama — over a knowledge base with document chunking, embeddings, and optional Qdrant vector search.",
            "Delivered multi-tenant SaaS infrastructure: workspaces with four permission roles, subscription plans with feature limits, 14 payment gateways, and multi-currency billing.",
            "Built the surrounding platform — CRM with leads and Google Places lookup, Meta-synced template library, embeddable chat widget, Telegram and SMS channels, frontend CMS, Swagger-documented REST API, RTL-capable translation editor, and audit logs with 2FA.",
        ],
        image: waPro.src,
        technologies: ["Laravel", "PHP", "WhatsApp Cloud API", "Tailwind CSS", "Alpine.js", "MySQL", "Qdrant", "Stripe"],
        github: "#",
        live: "https://demo.pixelaxis.net/wapro/",
        featured: true,
    },
    {
        id: 16,
        slug: "neuraldesk-ai-chatbot-saas",
        title: "NeuralDesk - AI Chatbot Trainer & Embedding SaaS",
        description:
            "A self-hosted AI support chatbot platform and SaaS script built on Laravel 13, with multi-provider LLM support, vector knowledge training, and an embeddable chat widget.",
        longDescription:
            "Built NeuralDesk, a complete self-hosted AI customer support platform sold as a CodeCanyon SaaS script. Site owners create chatbots with a custom persona, greeting, and starter questions, then train them on documents, Q&A pairs, and free text with optional Qdrant vector embeddings. The trained bot ships to any website through a single script tag and answers from that knowledge base, with human handoff into a realtime agent inbox when a conversation needs a person. The product runs as a full SaaS: subscription plans with feature limits, team staff accounts with scoped permissions, six payment gateways, multi-currency billing and refunds, plus an editable frontend CMS, a Sanctum-secured REST API with Swagger documentation, and an admin panel covering analytics, roles and permissions, email templates, audit logs, 2FA, media, and translations.",
        highlights: [
            "Built chatbot training on documents, Q&A pairs, and free text, backed by Qdrant vector embeddings for retrieval-augmented answers.",
            "Integrated eight LLM providers behind one interface — OpenAI, Anthropic, Gemini, Groq, Mistral, DeepSeek, xAI, and Cohere.",
            "Shipped an embeddable chat widget deployed with a single script tag, with persistent sessions, typing indicators, timestamps, and notifications.",
            "Developed a realtime agent inbox with human handoff, sound alerts, and conversation threading over Pusher with an automatic polling fallback.",
            "Implemented the SaaS layer: subscription plans with feature restrictions, scoped team accounts, six payment gateways, multi-currency, and refund management.",
            "Delivered the surrounding platform — frontend CMS with blog and themes, Sanctum REST API with Swagger docs, roles and permissions, 2FA, audit logs, and translation management.",
        ],
        image: neuralDesk.src,
        technologies: ["Laravel", "PHP", "Tailwind CSS", "Alpine.js", "MySQL", "Qdrant", "OpenAI", "Stripe"],
        github: "#",
        live: "https://demo.pixelaxis.net/neuraldesk/",
        codecanyon: "https://codecanyon.net/item/neuraldesk-ai-chatbot-trainer-embedding-saas/64604309",
        featured: true,
    },
    {
        id: 15,
        slug: "jirato-transport-booking-platform",
        title: "Jirato - Transport Booking API Platform",
        description:
            "A transport booking backend for Flutter rider and driver apps, built with Laravel APIs, FastAPI services, payments, live chat, notifications, and admin operations.",
        longDescription:
            "Built backend services for Jirato, a transport and group outing booking platform serving Flutter rider and driver mobile applications. I worked across Laravel API development and FastAPI service integration, covering rider and driver authentication, picnic and outing workflows, bus management, bid handling, seat booking, payment flows, refunds, driver payouts, real-time chat, Firebase notifications, location tracking, admin dashboards, API documentation, and deployment support. The system supports complex booking lifecycle rules, payment state management, public and private outing flows, and operational tools for managing riders, drivers, buses, bids, and escrow-style financial records.",
        highlights: [
            "Built rider and driver API modules for registration, OTP verification, Google login, profile updates, FCM tokens, and authenticated mobile app sessions.",
            "Implemented picnic and outing workflows including creation, locations, activities, public/private visibility, invitations, comments, reactions, lifecycle timelines, and deep-link support.",
            "Developed bus and bidding flows for driver bus profiles, features, equipment, rider bus requests, bid history, bid accept/reject/cancel/reply actions, and downgrade handling.",
            "Built seat booking, QR-code ticket generation, invoices, Stripe payment flows, refundable payments, pending balance payments, refunds, escrow records, and driver payout processing.",
            "Added real-time features including Reverb chat, message read states, driver location tracking, outing announcements, Firebase push notifications, and auto notification templates.",
            "Prepared production support with Swagger/API documentation, Laravel Horizon queues, Docker/Kubernetes deployment files, S3 file storage, scheduled lifecycle commands, and feature tests.",
        ],
        image: "https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["Laravel", "FastAPI", "Flutter API", "MySQL", "Redis", "Stripe", "Firebase", "Reverb"],
        github: "https://github.com/4transportf4future/laravel-backend",
        live: "https://dev.jirato.com/",
        featured: true,
    },
    {
        id: 14,
        slug: "taskerhub-ai-task-marketplace",
        title: "TaskerHub - AI Task Marketplace",
        description:
            "A CodeCanyon-approved on-demand service marketplace with Laravel backend, Next.js web app, REST API, and Expo mobile app.",
        longDescription:
            "Built a complete AI-powered task marketplace platform for clients, taskers, freelancers, and local service providers. I worked across the Laravel admin/backend, Next.js web application, REST API, and Expo mobile app source code. The product supports task posting, bidding, assignment, task completion, real-time chat, wallet and payment flows, withdrawal requests, KYC verification, reviews, support tickets, reporting, multi-currency, multi-language, and AI-assisted proposal writing, comment writing, and tasker selection.",
        highlights: [
            "Delivered a complete CodeCanyon product package with admin panel, web app, backend API, and mobile app source code.",
            "Built role-based client and tasker workflows for task posting, bidding, assignment, completion, reviews, and ratings.",
            "Implemented AI assistance for proposal writing, comment writing, and tasker selection support.",
            "Developed marketplace finance features including wallets, deposits, withdrawals, platform commissions, and transaction reporting.",
            "Added operational modules for KYC verification, support tickets, reports, real-time chat, email notifications, and Firebase push notifications.",
            "Prepared the product for multi-currency, multi-language, payment gateway, Firebase, and mobile release configuration.",
        ],
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["Laravel", "Next.js", "Expo", "MySQL", "REST API", "Firebase", "AI"],
        github: "#",
        live: "https://taskerhub-eosin.vercel.app/",
        codecanyon: "https://codecanyon.net/item/taskerhub-ondemand-service-marketplace-mobile-app-with-admin-panel/63500652?s_rank=2",
        featured: true,
    },
    {
        id: 1,
        slug: "property-management-system",
        title: "COMVST - Real Estate & Property Services Marketplace",
        description: "An integrated real estate ecosystem for property rent, sale, auctions, investments, product commerce, and handyman services.",
        longDescription:
            "Led development of COMVST as a connected real estate and property services marketplace. The platform brings property rent, sale, auctions, investment opportunities, property-related product commerce, and handyman service booking into one ecosystem. I worked on role-based workflows for customers, property owners, agents, investors, vendors, service providers, and administrators, with listing management, enquiries, auction bidding, investment flows, product orders, service bookings, moderation, and production-ready dashboard experiences.",
        highlights: [
            "Structured the platform around the full property lifecycle: discover, rent, buy, invest, furnish, and maintain.",
            "Built multi-role workflows for customers, property owners, agents, investors, product vendors, handyman providers, and admins.",
            "Implemented property modules for rental listings, sale listings, auction bidding, investment opportunities, enquiries, and listing management.",
            "Developed connected marketplace flows for property-related products, vendor management, orders, handyman service booking, and provider profiles.",
            "Supported admin operations for users, listings, auctions, investments, products, services, reviews, reports, complaints, and platform settings.",
            "Helped prepare the platform for a diversified business model using listing fees, featured placements, auction fees, product commissions, service commissions, and subscriptions.",
        ],
        image: comvest.src,
        technologies: ["Laravel", "Next.js", "MySQL", "Tailwind CSS", "DocuSign"],
        github: "#",
        live: "https://comvst.com",
        featured: true,
    },
    {
        id: 2,
        slug: "micro-investment-property-platform",
        title: "Investra - Fractional Real Estate Investment Platform",
        description: "A CodeCanyon real estate investment platform with share-based projects, wallets, KYC, ROI workflows, web app, and React Native mobile app.",
        longDescription:
            "Built Investra as a fractional real estate investment and crowdfunding platform for property-backed investment businesses. The product combines Laravel admin management, a Next.js web experience, REST API support, and a React Native mobile app. I worked on investment project management, share-based purchase flows, fixed, renewable, and infinite investment models, wallet deposits and withdrawals, KYC verification, ROI configuration, transaction tracking, reports, support tickets, notifications, and mobile-first investor workflows.",
        highlights: [
            "Developed real estate project management for cities, project types, features, documents, galleries, share availability, funding progress, and publishing status.",
            "Built share-based investment flows with fixed, renewable, and infinite share models plus configurable ROI schedules.",
            "Implemented investor wallet features for deposits, withdrawals, transaction history, investment tracking, and payment gateway workflows.",
            "Added KYC verification, investor account management, reports, login logs, analytics exports, support tickets, and real-time ticket chat.",
            "Supported REST API documentation with Swagger and mobile app integration for React Native Android and iOS source code.",
            "Prepared mobile app configuration for Firebase push notifications, Google login, Stripe setup, branding, app icons, splash screens, and Expo EAS builds.",
        ],
        image: investra.src,
        technologies: ["Laravel", "Next.js", "React Native", "MySQL", "Firebase", "Stripe", "Swagger"],
        github: "#",
        live: "https://investra.softivus.com",
        codecanyon: "https://codecanyon.net/item/investra-real-estate-investment-mobile-react-native-app/63097889?s_rank=4",
        featured: true,
    },
    {
        id: 3,
        slug: "regal-furniture-ecommerce",
        title: "Regal Furniture - E-commerce Platform",
        description:
            "Backend developer on a production furniture e-commerce platform: Laravel REST API powering the catalog, cart, SSLCommerz checkout, and order fulfilment for the Nuxt.js storefront.",
        longDescription:
            "Worked as the backend developer on Regal Furniture, a live furniture retail platform serving customers across Bangladesh. I owned the Laravel side of the system: a REST API consumed by the Nuxt.js storefront and by the internal admin panel. Responsibilities covered the product and variant catalog, inventory and stock reservation, pricing and discount rules, cart and checkout, SSLCommerz payment integration with IPN verification, and the full order lifecycle from placement through warehouse dispatch and delivery. I also handled authentication and role-based access for staff, transactional email/SMS notifications, media handling for product imagery, database schema design and query optimisation on MySQL, and caching to keep category and product listing endpoints fast under catalog-wide load.",
        highlights: [
            "Designed and built the Laravel REST API backing both the Nuxt.js storefront and the internal admin panel.",
            "Modelled a variant-aware product catalog (size, material, finish) with category trees, attributes, and filterable listing endpoints.",
            "Implemented cart, stock reservation, and order placement inside database transactions to prevent overselling on concurrent checkouts.",
            "Integrated SSLCommerz payments with signed IPN callback verification, retry handling, and reconciliation of payment status against orders.",
            "Built the order lifecycle state machine — pending, confirmed, processing, dispatched, delivered, cancelled, refunded — with an auditable status history.",
            "Added role-based access control for admin, sales, and warehouse staff over order, inventory, and catalog operations.",
            "Automated transactional order confirmation and status-update notifications over email and SMS via queued jobs.",
            "Optimised MySQL schema, indexes, and eager loading to remove N+1 queries; cached category and listing responses for faster page loads.",
            "Handled product media uploads with server-side image resizing and CDN-friendly delivery to keep storefront payloads light.",
        ],
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: [
            "Laravel",
            "PHP",
            "REST API",
            "MySQL",
            "Redis",
            "Queues",
            "SSLCommerz",
            "Nuxt.js",
        ],
        github: "#",
        live: "https://regalfurniturebd.com/",
        featured: true,
    },
    {
        id: 4,
        slug: "quiz-platform",
        title: "QuiziX - AI Quiz & Trivia Platform",
        description: "A CodeCanyon quiz and trivia platform with AI-generated questions, gamified rewards, leaderboards, and admin controls.",
        longDescription:
            "Built a gamified quiz and trivia platform for education, contests, training, and content-driven quiz experiences. I worked on the Laravel and Next.js application flow, including quiz creation, AI-assisted question generation, timed sessions, scoring, coins and rewards, leaderboards, user dashboards, admin management, multilingual support, notifications, reporting, and responsive PWA-ready screens.",
        highlights: [
            "Developed quiz creation and play flows with timed sessions, instant scoring, and leaderboard-driven competition.",
            "Added AI-assisted question generation to help admins and creators prepare quiz content faster.",
            "Implemented gamification features including coins, rewards, points, and user ranking experiences.",
            "Built admin management areas for quizzes, users, permissions, dynamic content, reports, and analytics exports.",
            "Supported localization, RTL layouts, notifications, security features, payment integrations, and responsive PWA-ready delivery.",
        ],
        image: quiz.src,
        technologies: ["Laravel", "Next.js", "MySQL", "Tailwind CSS", "PWA", "AI"],
        github: "#",
        live: "https://quiz.softivus.com/",
        codecanyon: "https://codecanyon.net/item/quizix-ai-quiz-trivia-game-laravel-nextjs-gamified-platform/59785902?s_rank=6",
        featured: true,
    },
    {
        id: 5,
        slug: "yacht-management-system",
        title: "Boativus - Multivendor Boat & Yacht Booking",
        description: "A CodeCanyon multivendor boat and yacht booking platform with seller dashboards, availability control, bookings, and payments.",
        longDescription:
            "Developed a multivendor boat and yacht booking marketplace for marine rental businesses, yacht charter providers, travel agencies, and marketplace startups. I worked on the Laravel platform covering admin, seller, and customer workflows, including yacht and boat listing management, availability calendars, booking flows, payment handling, transaction tracking, reporting, CMS pages, notifications, support, and responsive frontend screens.",
        highlights: [
            "Built multivendor marketplace workflows with separate admin, seller, and customer experiences.",
            "Implemented boat and yacht listing management, availability controls, booking flows, and service selection.",
            "Developed seller tools for listing management, order tracking, earnings visibility, withdrawals, and customer inquiries.",
            "Built admin controls for bookings, transactions, earnings, users, sellers, payment gateways, currencies, CMS pages, SEO, and system settings.",
            "Supported multilingual and RTL experiences, notifications, support tickets, invoices, analytics, and responsive frontend/admin screens.",
        ],
        image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["Laravel", "MySQL", "Tailwind CSS", "Firebase", "Redis"],
        github: "#",
        live: "https://boativus.pxlaxis.com/",
        codecanyon: "https://codecanyon.net/item/boativus-multivendor-boatyacht-booking-platform/58224658?s_rank=7",
        featured: true,
    },
    {
        id: 6,
        slug: "erp-system-modernization",
        title: "ERP Platform Modernization",
        description: "A Laravel ERP modernization project that moved a Blade-based application toward API-driven modules, optimized performance, and micro-frontend dashboards.",
        longDescription:
            "Redesigned an ERP platform from a Laravel Blade-based application into a cleaner API-driven architecture. I refactored core modules using SOLID principles and maintainable coding practices so future feature development, updates, and team handoff would be easier. The work included backend logic optimization, database query improvements, API response tuning, and a micro-frontend architecture with five separate dashboard applications connected through centralized authentication and secure cross-panel access.",
        highlights: [
            "Refactored core Laravel ERP modules from Blade-heavy workflows into maintainable API-driven application layers.",
            "Applied SOLID principles and cleaner coding practices to simplify future feature development and reduce update complexity.",
            "Optimized backend logic, database queries, and API responses, improving application response time by approximately 60%.",
            "Made the codebase more organized, scalable, and developer-friendly for ongoing ERP maintenance.",
            "Developed a micro-frontend structure with five separate dashboard applications for ERP module separation.",
            "Implemented centralized authentication and secure cross-panel access across Inventory, Sales, Purchase, Accounts, CRM, and role management workflows.",
        ],
        image: "https://t3.ftcdn.net/jpg/04/57/96/56/240_F_457965647_3j4wXKgbQbRADc15roCsxUQG6ikA5FZ3.jpg",
        technologies: ["Laravel", "Vue.js", "MySQL", "Bootstrap", "Vuex"],
        github: "#",
        live: "#",
        featured: true,
    },
    {
        id: 7,
        slug: "travel-flight-booking-system",
        title: "Travel & Flight Booking System",
        description: "A travel booking application with flight search, hotel booking, itinerary management, and API integrations.",
        longDescription:
            "Delivered a travel booking application covering flight search, hotel reservations, and itinerary management. Integrated third-party flight and hotel APIs to provide real-time availability and pricing within a commercial product workflow.",
        image: itsholyday.src,
        technologies: ["Laravel", "Next.js", "MySQL", "Tailwind CSS"],
        github: "#",
        live: "https://www.itsholidaysltd.com/",
    },
    {
        id: 8,
        slug: "lead-management-system",
        title: "Lead Management System",
        description:
            "A real-time lead tracking platform with third-party lead-generation API integrations and WebSocket presence, so no two staff members work the same lead at once.",
        longDescription:
            "Engineered a lead management workflow for capturing inquiries, coordinating follow-ups, and reviewing sales activity. Leads flow in from third-party lead-generation APIs as well as internal forms, and an Amazon API Gateway WebSocket layer broadcasts live claim and presence events so every dashboard shows which staff member is currently working each lead. That real-time locking removed duplicate outreach and stopped multiple agents from contacting the same prospect at the same time. The platform also covers email notifications, operational reporting, and dashboards for sales activity.",
        highlights: [
            "Integrated third-party lead-generation APIs to ingest, normalise, and de-duplicate inbound leads from multiple providers.",
            "Built a real-time presence layer on Amazon API Gateway WebSocket services to show which staff member was actively working each lead.",
            "Implemented lead claim/lock semantics with automatic release on disconnect or idle timeout, preventing two agents from handling the same lead.",
            "Broadcast live lead status and assignment changes to all connected dashboards, eliminating duplicate outreach to the same prospect.",
            "Delivered follow-up scheduling, email notifications, and sales activity reporting on top of the lead pipeline.",
        ],
        image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: [
            "Next.js",
            "Node.js",
            "AWS API Gateway WebSocket",
            "WebSockets",
            "REST API Integration",
            "Prisma",
            "Tailwind CSS",
        ],
        github: "#",
        live: "#",
    },
    {
        id: 9,
        slug: "courier-management-system",
        title: "Courier Management System",
        description:
            "Backend developer on a multi-app courier platform: one Laravel REST API powering a Flutter delivery agent app, Next.js merchant and shop portals, and a super admin console.",
        longDescription:
            "Worked as the backend developer on a multi-role courier operations platform for scheduling, tracking, and managing deliveries. I owned the Laravel REST API that serves four separate clients: a Flutter delivery agent mobile app, a Next.js merchant portal, a shop portal, and a super admin console. On the API side I built parcel booking and assignment, the delivery status lifecycle, proof-of-delivery and cash-on-delivery collection endpoints for agents, COD payout and invoice reconciliation for merchants, branch-level order handover for shops, and admin operations for rider and hub assignment, delivery zones, and pricing rules. Role-scoped authentication and permissions, delivery status notifications, and the reporting endpoints behind each role's dashboard were also part of my scope.",
        highlights: [
            "Owned the Laravel REST API serving four clients — Flutter agent app, merchant portal, shop portal, and super admin console.",
            "Built the agent-facing endpoints consumed by the Flutter app: assigned run lists, parcel scanning, status updates, proof of delivery, and COD collection.",
            "Exposed merchant APIs for parcel booking, shipment tracking, delivery history, and COD payout reconciliation used by the Next.js portal.",
            "Modelled shop accounts for branch pickups and agent handover, scoped separately from merchant accounts.",
            "Implemented admin operations for rider and hub assignment, delivery zones, pricing rules, invoices, payouts, and platform reporting.",
            "Designed the parcel lifecycle — booked, picked, in hub, in transit, delivered, returned — with role-scoped permissions and an auditable status trail.",
            "Delivered status notification and dashboard reporting endpoints for every role, on PostgreSQL with a Docker-based deployment.",
        ],
        image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: [
            "Laravel",
            "REST API",
            "Next.js",
            "Flutter",
            "PostgreSQL",
            "Docker",
            "Tailwind CSS",
        ],
        github: "#",
        live: "#",
    },
    {
        id: 10,
        slug: "multi-level-marketing-system",
        title: "MLM Light Version - Binary Network & Bonus Platform",
        description: "A Laravel MLM application with Blade website, React admin dashboard, binary user tree, matching bonus, generation bonus, and scheduled commission logic.",
        longDescription:
            "Built a light-version multi-level marketing application with a Laravel backend, Blade-powered public website, and React admin dashboard. The system focuses on binary network management, member registration, user tree visualization, matching bonus calculation, generation bonus logic, and daily scheduled matching cleanup using Laravel's scheduler. It provides the core operational foundation for managing members, tracking network placement, and processing bonus-related business rules.",
        highlights: [
            "Built the Laravel application structure for MLM member registration, network placement, and admin-controlled operations.",
            "Implemented a binary user tree so admins can review left/right placement and understand each member's network structure.",
            "Developed matching bonus logic for binary network activity and carry-over cleanup handled through scheduled daily commands.",
            "Added generation bonus support to calculate rewards across referral levels based on configured business rules.",
            "Combined a Blade public website with a React-powered admin dashboard for managing the platform from one codebase.",
            "Used MySQL-backed data models and Laravel scheduler commands to keep member, tree, and bonus workflows consistent.",
        ],
        image: "https://images.pexels.com/photos/210606/pexels-photo-210606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["Laravel", "React", "Blade", "MySQL", "Tailwind CSS", "Scheduler"],
        github: "https://github.com/safiul0073/multilevel-marketing-application",
        live: "#",
    },
    {
        id: 11,
        slug: "matrimony-application",
        title: "Matrimony Application",
        description: "A matrimony platform with profile management, partner search, matching, and communication features.",
        longDescription:
            "Built the core workflows for a matrimony platform, including authentication, profile management, partner discovery, matching, and member communication across Laravel and Next.js applications.",
        image: ighotokImage.src,
        technologies: ["Laravel", "Next.js", "Firebase", "MySQL", "Tailwind CSS"],
        github: "#",
        live: "https://www.ighotok.com",
    },
    {
        id: 12,
        slug: "online-lottery-system",
        title: "Rifa - Online Lottery & Contest Platform",
        description: "A Laravel lottery platform with Vue/Inertia admin, ticket sales, prize management, automated draws, payment gateways, reports, and API-first frontend support.",
        longDescription:
            "Built Rifa as a complete online lottery and contest management system with a Laravel 11 backend, Vue 3/Inertia admin dashboard, Sanctum API, Swagger documentation, and API-first frontend support. The platform manages lotteries, prizes, tickets, winners, deposits, withdrawals, payment gateways, referrals, support tickets, notifications, blogs, FAQs, currencies, languages, reports, and system settings. I worked on the operational lottery workflow from contest publishing and ticket purchase through manual or scheduled winner draws, prize distribution, transaction tracking, and user-facing profile features.",
        highlights: [
            "Built lottery, prize, ticket, winner, and prize-giving modules with admin workflows for publishing contests and managing draw phases.",
            "Implemented ticket purchase support with custom number validation, similar-number suggestions, quick-pick ticket generation, paid ticket tracking, and favorite lotteries.",
            "Developed manual and scheduled automated draw workflows using Laravel commands, queued jobs, winner notification emails, and real-time notification events.",
            "Integrated wallet, deposits, withdrawals, invoices, transactions, multi-currency settings, and payment gateways including Stripe, PayPal, Skrill, Braintree, Flutterwave, Mollie, and Paystack.",
            "Added user profile APIs for tickets, deposits, withdrawals, transactions, referrals, support tickets, personal information, and password/profile updates.",
            "Built Vue 3/Inertia admin areas for dashboards, customers, lotteries, reports, support tickets, notifications, blogs, FAQs, languages, SEO, payment methods, schedules, and system configuration.",
        ],
        image: lottery.src,
        technologies: ["Laravel", "Vue 3", "Inertia.js", "MySQL", "Sanctum", "Reverb", "Tailwind CSS"],
        github: "https://github.com/safiul0073/rifa",
        live: "https://rifa-frontend-six.vercel.app/",
    },
    {
        id: 13,
        slug: "dealer-management-system",
        title: "Dealer Management System",
        description: "A production dealer management system for sales, staff, inventory, transactions, and profit tracking.",
        longDescription:
            "Built a dealer management system for a live client in Khulna. The application helps the business owner manage workers, managers, customers, products, sales, salary and duty records, daily transactions, and profit/loss reporting. This was my first production application, developed in 2021, and it continues to run reliably for the client.",
        image: sagorstore.src,
        technologies: ["Laravel", "JQuery", "Tailwind CSS"],
        github: "#",
        live: "https://sagorstore.com",
    }
];

export const experiences: Experience[] = [
    {
        id: 1,
        company: "Softivus",
        position: "Senior Full Stack Developer",
        duration: "July 2024 - Present",
        description: [
            "Lead a team of 12 developers building and maintaining client applications and commercial marketplace products",
            "Own CI/CD delivery through GitHub Actions, reducing deployment time by 40%",
            "Design reusable dashboards, components, and templates that improve delivery speed and consistency",
            "Build and operate notification systems spanning email, SMS, and Firebase push notifications",
            "Mentored junior developers through code reviews and pair programming sessions",
        ],
        technologies: ["Laravel", "Next.js", "MySQL", "Docker", "Tailwind CSS"],
    },
    {
        id: 2,
        company: "Arrowhead It Solution",
        position: "Full Stack Developer (Part-Time)",
        duration: "Sep 2023 - Apr 2025",
        description: [
            "Developed and maintained ERP modules using Laravel and Vue.js",
            "Guided junior developers in best practices and code optimization",
            "Collaborated with cross-functional teams to gather requirements and deliver solutions",
        ],
        technologies: ["Vue.js", "Laravel", "Next.js", "MySQL", "Tailwind CSS"],
    },
    {
        id: 3,
        company: "Ilegecy",
        position: "Junior Backend Developer",
        duration: "Nov 2021 - Aug 2023",
        description: [
            "Designed MySQL and PostgreSQL data structures for courier and lead management applications",
            "Integrated third-party services and maintained Laravel and Node.js APIs for frontend applications",
            "Improved query performance through indexing, Redis caching, and application-level monitoring",
            "Contributed to code reviews, engineering standards, and team knowledge sharing",
        ],
        technologies: ["Laravel", "Node.js", "MySQL", "Docker"],
    },
];

export const skills: Skill[] = [
    // Languages
    { name: "PHP", icon: "php", category: "language" },
    { name: "JavaScript", icon: "javascript", category: "language" },
    { name: "TypeScript", icon: "typescript", category: "language" },
    { name: "Python", icon: "python", category: "language" },
    { name: "SQL", icon: "sql", category: "language" },

    // Backend development
    { name: "Laravel", icon: "laravel", category: "backend" },
    { name: "REST API Development", icon: "api", category: "backend" },
    { name: "Laravel Sanctum", icon: "sanctum", category: "backend" },
    { name: "Eloquent ORM", icon: "eloquent", category: "backend" },
    { name: "Queues", icon: "queue", category: "backend" },
    { name: "Laravel Horizon", icon: "horizon", category: "backend" },
    { name: "Node.js", icon: "nodejs", category: "backend" },
    { name: "Express", icon: "express", category: "backend" },
    { name: "Fastify", icon: "fastify", category: "backend" },
    { name: "NestJS", icon: "nestjs", category: "backend" },
    { name: "FastAPI", icon: "fastapi", category: "backend" },
    { name: "Django", icon: "django", category: "backend" },

    // Frontend development
    { name: "Next.js", icon: "nextjs", category: "frontend" },
    { name: "React", icon: "react", category: "frontend" },
    { name: "Vue.js", icon: "vue", category: "frontend" },
    { name: "Inertia.js", icon: "inertia", category: "frontend" },
    { name: "Tailwind CSS", icon: "tailwind", category: "frontend" },
    { name: "Responsive UI Development", icon: "responsive", category: "frontend" },

    // Architecture and integration
    { name: "Clean Architecture", icon: "architecture", category: "architecture" },
    { name: "SOLID Principles", icon: "solid", category: "architecture" },
    { name: "Role-Based Access Control", icon: "rbac", category: "architecture" },
    { name: "Third-Party API Integration", icon: "integration", category: "architecture" },
    { name: "Payment Gateway Integration", icon: "payment", category: "architecture" },
    { name: "GraphQL", icon: "graphql", category: "architecture" },

    // Databases and caching
    { name: "MySQL", icon: "mysql", category: "database" },
    { name: "PostgreSQL", icon: "postgresql", category: "database" },
    { name: "MongoDB", icon: "mongodb", category: "database" },
    { name: "Redis", icon: "redis", category: "database" },
    { name: "Prisma", icon: "prisma", category: "database" },
    { name: "Drizzle ORM", icon: "drizzle", category: "database" },
    { name: "Query Optimization", icon: "query", category: "database" },

    // Real-time and messaging
    { name: "Laravel Reverb", icon: "reverb", category: "realtime" },
    { name: "WebSockets", icon: "websocket", category: "realtime" },
    { name: "RabbitMQ", icon: "rabbitmq", category: "realtime" },
    { name: "Firebase Cloud Messaging", icon: "firebase", category: "realtime" },

    // Mobile development
    { name: "React Native", icon: "react-native", category: "mobile" },
    { name: "Expo", icon: "expo", category: "mobile" },
    { name: "Flutter API Integration", icon: "flutter", category: "mobile" },

    // DevOps and tools
    { name: "Linux", icon: "linux", category: "devops" },
    { name: "Docker", icon: "docker", category: "devops" },
    { name: "Nginx", icon: "nginx", category: "devops" },
    { name: "Git", icon: "git", category: "devops" },
    { name: "GitHub Actions", icon: "github-actions", category: "devops" },
    { name: "AWS", icon: "aws", category: "devops" },
    { name: "CI/CD", icon: "cicd", category: "devops" },
    { name: "SonarQube", icon: "sonarqube", category: "devops" },
    { name: "Cloudflare", icon: "cloudflare", category: "devops" },
    { name: "DigitalOcean", icon: "digitalocean", category: "devops" },

    // AI and automation
    { name: "RAG", icon: "rag", category: "ai" },
    { name: "Qdrant", icon: "qdrant", category: "ai" },
    { name: "AI Chatbot Development", icon: "chatbot", category: "ai" },
    { name: "AI-Powered Automation Workflows", icon: "automation", category: "ai" },
    { name: "OpenAI API", icon: "openai", category: "ai" },
    { name: "Claude API", icon: "claude", category: "ai" },
    { name: "Gemini API", icon: "gemini", category: "ai" },
    { name: "LLM Integration", icon: "llm", category: "ai" },
    { name: "Vector Embeddings", icon: "embeddings", category: "ai" },
    { name: "Semantic Search", icon: "semantic-search", category: "ai" },
    { name: "Conversational AI (WhatsApp, Messenger, Web)", icon: "conversational-ai", category: "ai" },
];

export const education: Education[] = [
    {
        id: 1,
        institution: "Green University of Bangladesh",
        degree: "Bachelor of Science in Computer Science",
        duration: "2018 - 2022",
        description: "Focused on software engineering, databases, and web development. Graduated with honors.",
    },
];

export const socialLinks: SocialLink[] = [
    {
        name: "GitHub",
        url: "https://github.com/safiul0073",
        icon: "github",
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/safiul0073",
        icon: "linkedin",
    },
    {
        name: "Facebook",
        url: "https://facebook.com/safiullah0073",
        icon: "facebook",
    },
];
