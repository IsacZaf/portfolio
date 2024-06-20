import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import './project.css';

const ProjectTemplate = ({ data }) => {
  const project = data.contentfulProject;
  return (
    <Layout>
      <div className="project-container">
        <h1 className="project-title">{project.title}</h1>
        <div className="project-screenshots">
          {project.screenshots.map((screenshot, index) => (
            <GatsbyImage key={index} image={getImage(screenshot.gatsbyImageData)} alt={`Screenshot ${index + 1}`} />
          ))}
        </div>
        <p className="project-description">{project.description}</p>
        <a href={project.link} className="project-link">View Project</a>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    contentfulProject(id: { eq: $id }) {
      title
      description
      screenshots {
        gatsbyImageData(layout: CONSTRAINED, width: 600)
      }
      link
    }
  }
`;

export default ProjectTemplate;
