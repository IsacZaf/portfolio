const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allContentfulProject {
        nodes {
          id
          title
        }
      }
    }
  `);

  result.data.allContentfulProject.nodes.forEach((project) => {
    createPage({
      path: `/project/${project.title}`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        id: project.id,
      },
    });
  });
};
