import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';
import './about.css';

const AboutPage = ({ data }) => {
  const { presentation, educations, experiences, image } = data.contentfulAbout;
  const img = getImage(image.gatsbyImageData);

  return (
    <Layout>
      <Helmet>
        <title>About Me - My Portfolio</title>
        <meta name="description" content="Learn more about my background, education, and work experiences." />
      </Helmet>
      <div className="about-container">
        <h1>About Me</h1>
        <GatsbyImage image={img} alt="About image" className="about-image" />
        <div className="about-text">
          <h2>Presentation</h2>
          <p>{presentation}</p>
          <h2>Educations</h2>
          <p>{educations}</p>
          <h2>Experiences</h2>
          <p>{experiences}</p>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    contentfulAbout {
      presentation
      educations
      experiences
      image {
        gatsbyImageData(layout: CONSTRAINED, width: 600)
      }
    }
  }
`;

export default AboutPage;
