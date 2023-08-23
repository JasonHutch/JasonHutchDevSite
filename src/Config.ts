import { IAttribute } from './models/IAttribute';
import { IProject } from './models/IProject';
import {IWorkExperience}  from './models/IWorkExperience';
export const WORKEXPERIENCE: IWorkExperience[] = [
    {
        position: 'Senior Software Developer',
        company: 'RightPoint',
        description: [
            "Owning the technical design and development of production SharePoint framework solutions.",
            "Serve as liason between the software development team and project leadership / clients.",
            "Effectively communicate development velocity and ramifications on timeline and budget."
        ],
        dateStart: 'Jan 2023',
        dateEnd: 'Present'
    },
    {
        position: 'Software Developer II',
        company: 'RightPoint',
        description: [
            "Consulted with clients to determine strategy for migration of legacy SharePoint sites into modern SharePoint Online.",
            "Provided technical leadership and guidance to QA and development teams.",
            "Conducted client demonstrations showcasing development work completed each sprint."
        ],
        dateStart: 'Jan 2022',
        dateEnd: 'Jan 2023'
    },
    {
        position: 'Software Developer I',
        company: 'RightPoint',
        description: [
            "Expanding practive capabilties by implementing SharePoint solution with Akumina content authoring layer.",
            "Organzed and delivered internal presentations on new technologies and development techniques.",
        ],
        dateStart: 'Jan 2021',
        dateEnd: 'Jan 2022'
    },
    {
        position: 'Associate Developer',
        company: 'RightPoint',
        description: [
            "Collaborated with team members to develop custom SharePoint Framework and Sitecore compoents in fast paced agile environment.",
            "Learned and applied knowledge of Sitecore personalization and marketing automation to client projects and internal proof of concepts.",
            "Self taught .NET MVC to work on Sitecore client projects."
        ],
        dateStart: 'Jan 2020',
        dateEnd: 'Jan 2021'
    }
];

export const LANGUAGES: string[] = [
    "C#",
    "Typescript",
    "Python",
    "PowerShell",
    "SQL",
    "Java",
    "HTML",
    "CSS/SCSS",
];

export const TOOLS: string[] = [
    ".NET",
    "SPFx",
    "React",
    "Azure",
    "Sitecore",
    "SharePoint",
    "Power Apps",
    "Power Automate",
    "Jira",
    "Azure DevOps",
    "Git",
    "Figma"
];

export const CERTIFICATIONS: string[] = [
    "Microsoft Certified: Azure Fundamentals",
    "Microsoft Certified: Azure AI Fundamentals",
];

export const ATTRIBUTES:IAttribute[] = [
    {
        title:"Solution Oriented",
        description:"I’m always looking to move forward. I believe feedback is king and work with a fail fast mentality.",
        icon:"magic"
    },
    {
        title:"Self Starter",
        description:"My initiative is driven by curiosity and manifests in getting results quicker.",
        icon:"fire"
    },
    {
        title:"Leads By Example",
        description:"Attitude is contagious and my goal in work and life is to inspire those around me by giving it my all with a big ol smile on my face.",
        icon:"smile"
    },
    {
        title:"Learns By Doing",
        description:"I firmly believe the best way to learn something is to tinker, make mistakes, and ask questions.",
        icon:"code"
    }
]

export const PROJECTS:IProject[] = [
    {
        name:"Abbott Migration and Modernization",
        description:"Migrate lists and libraries from SharePoint 2013 to SharePoint Online enviorment.",
        year:"2023",
        responsibilities:[
            "Conduct sprint demos, showcasing the work of the development team.",
            "Own project scaffolding and development of SPFx webparts and extensions.",
            "Upgrade existing SharePoint sites by re-writting legacy code to leverage SharePoint Framework, React, and Typescript.",
            "Analyzing source and destination sites to inform structure and content migration from SharePoint 2013 to SharePoint Online Sites. "
        ],
        technologies:["React","Typescript","PowerShell","ShareGate","SharePoint Online"]    
    },
    {
        name:"Power Platform Compliance Workflow",
        description:"Leveraged technologies such as Microsoft Power Apps, Power automate, and SharePoint online lists to design and implement compliance workflow system.",
        year:"2022",
        responsibilities:[
            "Conducted sprint demos, showcasing the work of the development team.",
            "Created a deploment strategy for Power Platform artifacts throughout dev,qa,uat,and production enviorments.",
            "Oversaw deployments, ensuring that the develpment teams latest updates and fixes were sucsessfully deployed to each enviorment.",
            "Served as the main point of contact for the development and QA team.",
            "Analyzed the current state of Power Apps / Automate solution and devised a strategy for upgrading the solution with SharePoint best practices in mind.",
            "Provided timely updates on development velocity and assisted architect and project manager with communicating timeline updates to the client."
        ],
        technologies:["Power Apps","Power Automate","SharePoint Online","PowerShell"]
    },
    {
        name:"KPMG SharePoint Migration and Modernization",
        description:"Migrated lists and libraries from SharePoint 2013 to SharePoint Online enviorment.",
        year:"2022",
        responsibilities:[
            "Performed analysis of SharePoint 2013 sites and determined mitigation strategies for mapping old functionality to new SharePoint Online functionality.",
            "Collaborated with visual and UX designers to consult client on how to fiesably implement SharePoint modernization.",
            "Facilitated real time working sessions with client to demonstrate SharePoint Online capabilities and gather feedback on design and functionality.",
        ],
        technologies:["SharePoint Online","Figma"]
    },
    {
        name:"Comcast Intranet Build",
        description:"Built a fleet of custom SPFX webparts to be used in new Comcast Intranet.",
        year:"2021",
        responsibilities:[
            "Integrated sharepoint data with custom SPFx web parts through REST API calls and React state management.",
            "Realized component designs using JSX and SCSS, ensuring that the component was responsive and accessible.",
            "Presented new components to client and gathered feedback on functionality and design.",
        ],
        technologies:["React","Typescript","SCSS","SharePoint Online","SPFx"]
    },
    {
        name:"Children's Health Hospital Website build",
        description:"Built new website for Children's Health Hospital using Sitecore 9.3 and .NET MVC.",
        year:"2021",
        responsibilities:[
            "Developed custom Sitecore components using .NET MVC and Sitecore Helix architecture.",
            "Built custom front ends for Sitecore component renderings using Scriban templating language.",
            "Conducted content authoring training sessions with client, teaching them how to configure the new Sitecore components and relevant data.",
        ],
        technologies:["C#","Sitecore",".NET MVC","Scriban"]
    }
]