# API Contracts: Physical AI Book

## Search Endpoint

### GET /api/search
- **Purpose**: Search across book content
- **Request**: Query parameter `q` with search term
- **Response**: JSON with search results containing title, content snippet, and URL
- **Authentication**: None required (public content)

### Response Format
```json
{
  "results": [
    {
      "title": "Lesson title",
      "content": "Content snippet...",
      "url": "/docs/chapter-1/lesson-1",
      "type": "lesson"
    }
  ]
}
```

## Content Navigation Endpoint

### GET /api/navigation
- **Purpose**: Get table of contents structure
- **Response**: JSON with hierarchical structure of chapters and lessons
- **Authentication**: None required (public content)

### Response Format
```json
{
  "chapters": [
    {
      "id": "chapter-1",
      "title": "Chapter Title",
      "lessons": [
        {
          "id": "lesson-1",
          "title": "Lesson Title",
          "url": "/docs/chapter-1/lesson-1"
        }
      ]
    }
  ]
}
```