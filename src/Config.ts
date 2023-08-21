import { MdOutlineAutoFixHigh } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";
import { LiaSmileBeam } from "react-icons/lia";
import { BsCodeSlash } from "react-icons/bs";

import { IAttribute } from './models/IAttribute';
import {IWorkExperience}  from './models/IWorkExperience';
export const WORKEXPERIENCE: IWorkExperience[] = [
    {
        position: 'Senior Software Engineer',
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
        dateEnd: 'Jan 2023'
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
    "SQL",
    "Java",
    "HTML",
    "CSS",
];

export const TOOLS: string[] = [
    ".NET Core",
    "SharePoint Framework",
    "React",
    "Azure Services",
    "NumPy",
    "Apache Spark",
    "Docker"
];

export const CERTIFICATIONS: string[] = [
    "Microsoft Certified: Azure Fundamentals",
    "Microsoft Certified: Azure AI Fundamentals",
];

export const ATTRIBUTES:IAttribute[] = [
    {
        title:"Solution Oriented",
        description:"I’m always looking to move forward. I believe that feedback is king and work with a fail fast mentality.",
        icon:"magic"
    },
    {
        title:"Self Starter",
        description:"I find my initiative is driven by curiosity and manifests in getting results quicker.",
        icon:"fire"
    },
    {
        title:"Foolishly Optimistic",
        description:"Attitude is contagious and my goal in work and life is to inspire those around me by kicking ass with a big ol smile on my face.",
        icon:"smile"
    },
    {
        title:"Learns By Doing",
        description:"I believe the best way to learn something is to try things and make mistakes.",
        icon:"code"
    }
]