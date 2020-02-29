export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5a3330ffe9d3d9a4d1ecea',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-adqd6csh',
                  apiId: 'fe992bbd-ad5b-4e03-9ed3-4af99a90a776'
                },
                {
                  buildHookId: '5e5a333041bf96a730c8008f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-csjzcgko',
                  apiId: 'f050b5bd-9a52-4568-b53d-024eb53b454c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Varun200390/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-csjzcgko.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
