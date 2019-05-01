const path = require("path");

// onCreateNode generates a slug based on the markdown fiels in our .md post files

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "MarkdownRemark") {
        // console.log(node) to see that all .md files have type 'MarkdownRemark'
        const slug = path.basename(node.fileAbsolutePath, ".md"); // from '/path/to/the/filename.md' to 'filename'
        createNodeField({
            // because of this function call,
            // in each "node", that is, each .md file in the gatsby playground, a new prop "fiels" has been added
            // which contain the "slug" value being passed here
            node,
            name: "slug",
            value: slug,
        });
    }
};

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // 1. Get path to template
    // 2. Get markdown data
    // 3. Create new pages

    const blogTemplate = path.resolve("./src/templates/blog.js");

    const response = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    response.data.allMarkdownRemark.edges.forEach(edge => {
        console.log(edge);
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug,
            },
        });
    });
};
