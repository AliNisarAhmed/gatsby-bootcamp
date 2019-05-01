import React from "react"
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Hello</h1>
    <h2>I am Ali, a front-end developer living in beautiful Edmonton</h2>
    <p>Need a developer? <Link to="/contact">Contact</Link> me</p>  
  </Layout>
);
