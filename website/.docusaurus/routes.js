import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/physical-ai-book/__docusaurus/debug',
    component: ComponentCreator('/physical-ai-book/__docusaurus/debug', '591'),
    exact: true
  },
  {
    path: '/physical-ai-book/__docusaurus/debug/config',
    component: ComponentCreator('/physical-ai-book/__docusaurus/debug/config', '92e'),
    exact: true
  },
  {
    path: '/physical-ai-book/__docusaurus/debug/content',
    component: ComponentCreator('/physical-ai-book/__docusaurus/debug/content', '65a'),
    exact: true
  },
  {
    path: '/physical-ai-book/__docusaurus/debug/globalData',
    component: ComponentCreator('/physical-ai-book/__docusaurus/debug/globalData', '3ac'),
    exact: true
  },
  {
    path: '/physical-ai-book/__docusaurus/debug/metadata',
    component: ComponentCreator('/physical-ai-book/__docusaurus/debug/metadata', '77d'),
    exact: true
  },
  {
    path: '/physical-ai-book/__docusaurus/debug/registry',
    component: ComponentCreator('/physical-ai-book/__docusaurus/debug/registry', 'f10'),
    exact: true
  },
  {
    path: '/physical-ai-book/__docusaurus/debug/routes',
    component: ComponentCreator('/physical-ai-book/__docusaurus/debug/routes', 'bc5'),
    exact: true
  },
  {
    path: '/physical-ai-book/blog',
    component: ComponentCreator('/physical-ai-book/blog', '724'),
    exact: true
  },
  {
    path: '/physical-ai-book/blog/archive',
    component: ComponentCreator('/physical-ai-book/blog/archive', '2a4'),
    exact: true
  },
  {
    path: '/physical-ai-book/blog/tags',
    component: ComponentCreator('/physical-ai-book/blog/tags', '58b'),
    exact: true
  },
  {
    path: '/physical-ai-book/blog/tags/docusaurus',
    component: ComponentCreator('/physical-ai-book/blog/tags/docusaurus', '9a4'),
    exact: true
  },
  {
    path: '/physical-ai-book/blog/tags/physical-ai',
    component: ComponentCreator('/physical-ai-book/blog/tags/physical-ai', '4ee'),
    exact: true
  },
  {
    path: '/physical-ai-book/blog/welcome',
    component: ComponentCreator('/physical-ai-book/blog/welcome', '4a1'),
    exact: true
  },
  {
    path: '/physical-ai-book/docs',
    component: ComponentCreator('/physical-ai-book/docs', 'bd2'),
    routes: [
      {
        path: '/physical-ai-book/docs',
        component: ComponentCreator('/physical-ai-book/docs', '9b5'),
        routes: [
          {
            path: '/physical-ai-book/docs',
            component: ComponentCreator('/physical-ai-book/docs', '70b'),
            routes: [
              {
                path: '/physical-ai-book/docs/chapter-1/lesson-1',
                component: ComponentCreator('/physical-ai-book/docs/chapter-1/lesson-1', '053'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/chapter-1/lesson-2',
                component: ComponentCreator('/physical-ai-book/docs/chapter-1/lesson-2', '633'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/chapter-1/lesson-3',
                component: ComponentCreator('/physical-ai-book/docs/chapter-1/lesson-3', '495'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/chapter-2/lesson-1',
                component: ComponentCreator('/physical-ai-book/docs/chapter-2/lesson-1', 'a12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/chapter-2/lesson-2',
                component: ComponentCreator('/physical-ai-book/docs/chapter-2/lesson-2', '116'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/chapter-2/lesson-3',
                component: ComponentCreator('/physical-ai-book/docs/chapter-2/lesson-3', 'e9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/chapter-3/lesson-1',
                component: ComponentCreator('/physical-ai-book/docs/chapter-3/lesson-1', 'dc7'),
                exact: true
              },
              {
                path: '/physical-ai-book/docs/chapter-3/lesson-2',
                component: ComponentCreator('/physical-ai-book/docs/chapter-3/lesson-2', 'ac7'),
                exact: true
              },
              {
                path: '/physical-ai-book/docs/chapter-3/lesson-3',
                component: ComponentCreator('/physical-ai-book/docs/chapter-3/lesson-3', '845'),
                exact: true
              },
              {
                path: '/physical-ai-book/docs/intro',
                component: ComponentCreator('/physical-ai-book/docs/intro', '6f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
