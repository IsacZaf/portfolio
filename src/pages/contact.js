import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import './contact.css';

const ContactPage = ({ data }) => {
  const { email, image } = data.contentfulContact;
  const img = getImage(image.gatsbyImageData);

  return (
    <Layout>
      <Helmet>
        <title>Contact Me - My Portfolio</title>
        <meta name="description" content="Get in touch with me via email." />
      </Helmet>
      <div className="contact-container">
        <h1>Contact Me</h1>
        <GatsbyImage image={img} alt="Contact image" className="contact-image" />
        <div className="contact-info">
          <p>Email: {email}</p>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    contentfulContact {
      email
      image {
        gatsbyImageData(layout: CONSTRAINED, width: 600)
      }
    }
  }
`;

export default ContactPage;
