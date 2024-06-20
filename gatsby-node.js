const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allContentfulProject {
        nodes {
          id
        }
      }
    }
  `);

  result.data.allContentfulProject.nodes.forEach((project) => {
    createPage({
      path: `/project/${project.id}`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        id: project.id,
      },
    });
  });
};
