# PeopleOS — HR Management Platform

## Project Overview
Premium dark-themed HR SaaS app inspired by Bayzat.
Built with Next.js 16, TypeScript, Tailwind CSS.

## Tech Stack
- Framework: Next.js 16 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Icons: lucide-react
- Charts: recharts
- Font: Inter

## Design System
- Background: #0a0f1e
- Cards: #141b2d
- Accent Violet: #7c3aed
- Accent Cyan: #06b6d4
- Amber: #f59e0b
- Green: #10b981
- Text Primary: #f8fafc
- Text Secondary: #94a3b8
- Glassmorphism: backdrop-blur-md, bg-white/5, border border-white/10

## Component Conventions
- All components in /components folder
- Use 'use client' only when needed
- Prefer server components by default
- Each page section = its own component file
- No inline styles — Tailwind classes only

## Pages to Build
1. Dashboard — stats, charts, tables (app/page.tsx)
2. Employees — card grid with filters (app/employees/page.tsx)

## What NOT to do
- No external CSS files
- No styled-components
- No hardcoded colors outside design system
- Don't install unnecessary packages
- Don't create API routes for this demo