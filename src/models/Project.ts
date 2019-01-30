import Category from "./Category";

/**
 * Data format for all projects displayed on portfolio
 */
interface Project {
    category: Category
    title: string, // Name of the project
    logo?: URL, // URL for an image to show in place of a title (i.e. the FORECAST logo)
    date: string, // TODO: is there a typescript way to specify datetime string?
    description: string, // TODO: consider making this support rich text/markdown
    images: Array<{url: URL, alt: string}>, // images to display in the project section
    processLink?: URL // link to a blog post on process.glitch.pizza, if available
}

export default Project