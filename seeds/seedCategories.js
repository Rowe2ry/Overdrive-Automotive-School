const { Category } = require('../models');

const categoryData = [
    {
        name: 'Pre-Course Intro'
    },
    {
        name: 'Week 1: Tool Basics| Names and Functions'
    },
    {
        name: 'Week 2: Safety and Best Practices'
    },
    {
        name: 'Week 3: Common Home Auto Maintenance'
    },
    {
        name: 'Week 4: Automotive Mechanical Systems'
    },
    {
        name: 'Week 5: Brake System in detail'
    },
    {
        name: 'Week 6: How can you use this knowledge ot help people?'
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;