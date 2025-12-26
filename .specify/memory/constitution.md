<!--
Sync Impact Report:
- Version change: N/A → 1.0.0 (initial version)
- List of modified principles: N/A (new constitution)
- Added sections: All sections are new including Core Principles, Key Standards and Technology Stack, Development Workflow and Constraints, and Governance
- Removed sections: N/A
- Templates requiring updates: ✅ No updates needed - templates already have placeholder structures
- Follow-up TODOs: None
-->
# AI/Spec-Driven Book with Embedded RAG Chatbot Constitution

## Core Principles

### Spec-first workflow using Spec-Kit Plus
All development follows a spec-first approach using Spec-Kit Plus for requirements, architecture, and task definition

### Technical accuracy from official sources
Content must be technically accurate and grounded in official documentation and proven practices

### Clear, developer-focused writing
All content should be written with clear, practical examples that developers can immediately use

### Reproducible setup and deployment
All code examples and deployment procedures must be fully reproducible with clear setup instructions

### Book written with Docusaurus and deployed on GitHub Pages
The book platform uses Docusaurus for documentation and is deployed on GitHub Pages for accessibility

### RAG chatbot grounded only in book content
The embedded RAG chatbot must only respond based on book content or user-selected text, never hallucinate

## Key Standards and Technology Stack

Book written with Docusaurus and deployed on GitHub Pages; RAG chatbot grounded only in book content or user-selected text; Stack: OpenAI Agents/ChatKit, FastAPI, Neon Postgres, Qdrant Cloud; Runnable, well-documented code

## Development Workflow and Constraints

GitHub-based source control; No hallucinated responses; End-to-end reproducibility

## Governance

All development must follow Spec-Kit Plus methodology; Changes must maintain technical accuracy; Code examples must be runnable and tested; No hallucinated responses in chatbot

**Version**: 1.0.0 | **Ratified**: 2025-12-26 | **Last Amended**: 2025-12-26