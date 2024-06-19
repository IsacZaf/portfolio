import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
);

export default NotFoundPage;
