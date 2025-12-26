---
id: 1
title: Update Project Constitution
stage: constitution
date: 2025-12-26
surface: agent
model: Claude Sonnet 4.5
feature: none
branch: master
user: user
command: /sp.constitution
labels: [constitution, spec-kit-plus, ai-book]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
 - history/prompts/constitution/001-update-project-constitution.constitution.prompt.md
tests:
 - none
---

## Prompt

```text
/sp.constitution

Project: AI/Spec-Driven Book with Embedded RAG Chatbot

Core principles:
- Spec-first workflow using Spec-Kit Plus
- Technical accuracy from official sources
- Clear, developer-focused writing
- Reproducible setup and deployment

Key standards:
- Book written with Docusaurus and deployed on GitHub Pages
- RAG chatbot grounded only in book content or user-selected text
- Stack: OpenAI Agents/ChatKit, FastAPI, Neon Postgres, Qdrant Cloud
- Runnable, well-documented code

Constraints:
- GitHub-based source control
- No hallucinated responses
- End-to-end reproducibility

Success criteria:
- Live book on GitHub Pages
- Fully functional embedded RAG chatbot
- All specs implemented via Spec-Kit Plus
```

## Response snapshot

I have successfully updated the project constitution based on your input. Here's the summary:

**New Version**: 1.0.0 (initial version)
**Bump Rationale**: This is the initial version of the constitution for the AI/Spec-Driven Book with Embedded RAG Chatbot project, establishing core principles and governance structure.

**Files Updated**:
- `.specify/memory/constitution.md` - Complete rewrite with project-specific principles

**Constitution Content**:
- Core Principles: Spec-first workflow, technical accuracy, developer-focused writing, reproducible setup, Docusaurus platform, and RAG chatbot grounding
- Key Standards: Technology stack and deployment approach
- Development Workflow: Constraints and guidelines
- Governance: Rules for maintaining consistency and quality

**Suggested Commit Message**: `docs: add project constitution for AI/Spec-Driven Book with RAG Chatbot`

The constitution is now in place and will guide all future development for this project, ensuring consistency with the specified principles and standards.

## Outcome
- ✅ Impact: Created initial project constitution with all specified principles
- 🧪 Tests: No tests required for constitution update
- 📁 Files: Updated constitution.md and created PHR record
- 🔁 Next prompts: Ready to proceed with feature specification using Spec-Kit Plus
- 🧠 Reflection: Constitution now provides clear guidance for all future development

## Evaluation notes (flywheel)
- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin feature specification with /sp.specify