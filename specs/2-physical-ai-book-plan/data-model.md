# Data Model: Physical AI Book

## Content Structure

### Chapter
- **id**: Unique identifier for the chapter
- **title**: Display title of the chapter
- **description**: Brief description of the chapter content
- **lessons**: Array of lesson references
- **position**: Order in the book sequence

### Lesson
- **id**: Unique identifier for the lesson
- **title**: Display title of the lesson
- **content**: Markdown content of the lesson
- **chapterId**: Reference to parent chapter
- **position**: Order within the chapter
- **prerequisites**: Array of prerequisite lesson IDs
- **learningObjectives**: Array of learning objectives

### Book
- **id**: Unique identifier for the book
- **title**: Title of the physical AI book
- **chapters**: Array of chapter references
- **metadata**: Additional book metadata (author, version, etc.)

## Navigation Structure

### TableOfContents
- **chapters**: Array of chapter objects with titles and lesson counts
- **searchIndex**: Indexed content for search functionality
- **breadcrumbs**: Navigation path for each lesson

## Relationships

- Book contains multiple Chapters (1 to many)
- Chapter contains multiple Lessons (1 to many)
- Lesson may have prerequisite Lessons (many to many, optional)

## Validation Rules

- Each Chapter must have 1-4 Lessons (as specified in requirements)
- Each Lesson must have a unique title within its Chapter
- Each Chapter must have a unique title within the Book
- Content must follow specified formatting guidelines