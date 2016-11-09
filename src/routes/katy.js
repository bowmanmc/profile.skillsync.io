module.exports = {
    account: {
        name: 'Katy Bowman',
        email: 'katybowman@gmail.com'
    },
    resume: {
        accountId: '123455',
        category: 'Front-End Developer',
        years: 1,
        location: 'Dayton, OH',
        skills: [
            'HTML', 'CSS', 'JavaScript',
            'Front End Development',
            'Responsive Development',
            'Writing'
        ],
        summary: `I'm a self-taught web developer who prides herself on being
            able to focus not only on the details, but also on how they
            interact within a project as a whole. I am a creative thinker,
            a problem-solver, and I love nothing more than a good
            challenge.`,
        projects: [{
            name: 'k80bowman.com',
            url: 'http://www.k80bowman.com',
            repo: 'https://github.com/k80bowman/k80bowman',
            description: 'My personal website detailing my coding skills.',
            skills: ['HTML', 'Sass', 'Responsive Development']
        }, {
            name: 'The Edge of Uncertainty',
            url: 'http://edgeofuncertainty.com',
            repo: 'https://github.com/k80bowman/Edge_Of_Uncertainty',
            description: 'My blog where I post reviews of adventure books. Built using Bootstrap, Jekyll, and Github.',
            skills: ['HTML', 'Sass', 'Responsive Development']
        }, {
            name: 'SkillSync',
            url: 'http://skillsync.io',
            repo: 'https://github.com/bowmanmc/www.skillsync.io',
            description: 'I collaborated on the design and building of the front end of this site using HTML, CSS, and Sass.',
            skills: ['HTML', 'Sass', 'Responsive Development']
        }],
        work: [{
            name: 'Lexis Nexis',
            url: 'http://www.lexisnexis.com/',
            projectName: 'Newsdesk',
            projectUrl: 'http://www.lexisnexis.com/en-us/products/newsdesk.page',
            duration: 'March 2016 to present',
            summary: 'I am a front-end developer working on the Newsdesk product using HTML, CSS, Sass, JavaScript, and Java',
            skills: ['JavaScript', 'Java', 'Sass']
        }, {
            name: 'Miami Valley Regional Planning Comission (MVRPC)',
            url: 'http://www.mvrpc.org',
            projectName: 'Going Places',
            projectUrl: 'http://www.mvrpc.org/regional-planning/going-places-initiative',
            duration: 'March 2006 - August 2012 (6 Years, 6 months)',
            summary: `
                Project management, Statistical analysis of Census and other socioeconomic data,
                Wrote and edited professional reports, Created promotional materials,
                Managed other staff, Planned, arranged, and operated public meetings,
                Maintained MVRPC's Resource Center`,
            skills: ['Statistical Analysis', 'Writing', 'Management']
        }],
        education: [{
            name: 'Free Code Camp',
            link: 'https://www.freecodecamp.org',
            duration: '2015 - 2016',
            credential: 'Full Stack Web Development, Computer Software Engineering'
        }, {
            name: 'University of Cincinnati',
            link: 'http://www.uc.edu',
            duration: '2001 - 2003',
            credential: `Master's Degree, City/Urban, Community and Regional Planning`
        }, {
            name: 'Miami University',
            link: 'https://www.miamioh.edu',
            duration: '1997 - 2001',
            credential: `Bachelor's Degree, Multi/Interdisciplinary Studies`
        }]
    }
};
