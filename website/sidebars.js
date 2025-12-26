// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Chapter 1',
      items: [
        'chapter-1/lesson-1',
        'chapter-1/lesson-2',
        'chapter-1/lesson-3',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 2',
      items: [
        'chapter-2/lesson-1',
        'chapter-2/lesson-2',
        'chapter-2/lesson-3',
      ],
    },
  ],
};

export default sidebars;