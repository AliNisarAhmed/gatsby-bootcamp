import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Page Title</h1>
    <p>Bio: Bio will appear here</p>
    <p><Link to="/contact">Contact</Link> me here</p>
  </Layout>
)