import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import './projects.css';
import { Helmet } from 'react-helmet';

const ProjectsPage = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const projects = data.allContentfulProject.nodes;
  const categories = data.allContentfulCategory.nodes;

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category.name === selectedCategory);

  return (
    <Layout>
      <Helmet>
        <title>Projects - My Portfolio</title>
        <meta name="description" content="A list of my projects." />
      </Helmet>
      <div className="filter-container">
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          <option value="All">All</option>
          {categories.map(category => (
            <option key={category.id} value={category.name}>{category.name}</option>
          ))}
        </select>
      </div>
      <div className="projects-container">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <div className="project-screenshots">
              {project.screenshots.map((screenshot, index) => (
                <GatsbyImage key={index} image={getImage(screenshot.gatsbyImageData)} alt={`Screenshot ${index + 1} of ${project.title}`} />
              ))}
            </div>
            <p className="project-description">{project.description}</p>
            <Link to={`/project/${project.id}`} className="project-link">View Project</Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulProject {
      nodes {
        id
        title
        description
        screenshots {
          gatsbyImageData(layout: CONSTRAINED, width: 600)
        }
        link
        category {
          name
        }
      }
    }
    allContentfulCategory {
      nodes {
        id
        name
      }
    }
  }
`;

export default ProjectsPage;
