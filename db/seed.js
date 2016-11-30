module.exports = {
  block: [
    {id: 1, type: 'markdown', content: '# Hello, world. \n New paragraph', index: 0, sectionId: 1},
    {id: 2, type: 'latex', content: '\(\frac a b\)', index: 1, sectionId: 2}
  ],
  book: [
    {id: 1, title: 'Machine Learning', userId: 1}
  ],
  user: [
    {id: 1, username: 'maggie_neterval'}
  ],
  section: [
    {id: 1, index: 0, title: 'Section 1', bookId: 1},
    {id: 2, index: 0, title: 'Section 1.1', sectionId: 1, bookId: 1},
    {id: 3, index: 1, title: 'Section 1.2', sectionId: 1, bookId: 1}
  ]
};
