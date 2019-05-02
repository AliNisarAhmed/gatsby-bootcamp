module.exports = {
    siteMetadata: {
        title: "Gatsby Bootcamp 2019",
        author: "Ali Nisar Ahmed",
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: "src",
                path: `${__dirname}/src/`,
            },
        },
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugin: [
                    "gatsby-remark-relative-images",
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false,
                        },
                    },
                ],
            },
        },
    ],
};
