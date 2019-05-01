import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql, Link } from "gatsby";

export default () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <h1>This is the blog page</h1>
            <hr />
            <ol>
                {data.allMarkdownRemark.edges.map(edge => (
                    <li>
                        <Link to={`/blog/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </Link>
                        <hr />
                    </li>
                ))}
            </ol>
        </Layout>
    );
};
