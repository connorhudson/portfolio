/**
 * Enum of all categories in the app
 */
enum Category {
    PERSONAL = 'personal',
    PROFESSIONAL = 'professional',
    SCHOOL = 'school'
}

export const CategoryInfo = {
    [Category.PERSONAL]: {
        title: 'Personal Projects',
        description: ''
    },
    [Category.PROFESSIONAL]: {
        title: 'Professional Work',
        description: ''
    },
    [Category.SCHOOL]: {
        title: 'School Projects',
        description: ''
    }
}

export default Category