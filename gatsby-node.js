const path = require('path');

// onCreateNode generates a slug based on the markdown fiels in our .md post files

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {    // console.log(node) to see that all .md files have type 'MarkdownRemark'
    const slug = path.basename(node.fileAbsolutePath, '.md');  // from '/path/to/the/filename.md' to 'filename'
    createNodeField({   
      // because of this function call, 
      // in each "node", that is, each .md file in the gatsby playground, a new prop "fiels" has been added
      // which contain the "slug" value being passed here
      node,
      name: 'slug',
      value: slug
    })
  }

  // console.log(JSON.stringify(actions, undefined, 4));
}