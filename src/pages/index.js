import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './home.css';

const HomePage = ({ data }) => {
  const { title, description, image } = data.contentfulHomepage;
  const img = getImage(image.gatsbyImageData);

  return (
    <Layout>
      <div className="home-container">
        <h1>{title}</h1>
        <GatsbyImage image={img} alt="Home image" className="home-image" />
        <p className="home-description">{description}</p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    contentfulHomepage {
      title
      description
      image {
        gatsbyImageData(layout: CONSTRAINED, width: 600)
      }
    }
  }
`;

export default HomePage;
