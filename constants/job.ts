export const JOBCATEGORIES = [
    { id: "1", name: "Software Development" },
    { id: "2", name: "Data Science & Analytics" },
    { id: "3", name: "Cybersecurity" },
    { id: "4", name: "Cloud Computing & DevOps" },
    { id: "5", name: "IT Support & Networking" },
    { id: "6", name: "Product & Project Management" },
    { id: "7", name: "UI/UX Design" },
    { id: "8", name: "Marketing & Advertising" },
    { id: "9", name: "Sales & Business Development" },
    { id: "10", name: "Finance & Accounting" },
    { id: "11", name: "Customer Service & Support" },
    { id: "12", name: "Human Resources & Recruiting" },
    { id: "13", name: "Legal & Compliance" },
    { id: "14", name: "Healthcare & Medical" },
    { id: "15", name: "Education & Training" },
    { id: "16", name: "Engineering & Architecture" },
    { id: "17", name: "Manufacturing & Logistics" },
    { id: "18", name: "Hospitality & Tourism" },
    { id: "19", name: "Creative & Media" },
    { id: "20", name: "Writing & Editing" },
];

export const JOBTYPES = [
    { id: "job-types-1", name: "Full Time" },
    { id: "job-types-2", name: "Part Time" },
    { id: "job-types-3", name: "One Time" },
];

export const JOBS = [
    {
        _id: {
            $oid: "67cafc00fc13ae020a527de5",
        },
        companyId: {
            $oid: "67cafc00fc13ae020a527de6",
        },
        title: "Technical Writer",
        description:
            "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        requirements: [
            "Degree in Computer Science",
            "2+ years of experience",
            "Strong communication skills",
        ],
        location: "Biliri",
        jobType: "Full Time",
        skills: [
            {
                name: "JavaScript",
                _id: "javascript",
            },
            {
                name: "Python",
                _id: "python",
            },
            {
                name: "Java",
                _id: "java",
            },
            {
                name: "C#",
                _id: "c#",
            },
        ],
        category: "Framing (Wood)",
        salaryRangeMin: 11778.05,
        salaryRangeMax: 14845.75,
        workMode: "Onsite",
        applicants: [
            {
                _id: "67cad545fc13ae017a527b24",
                name: "John Doe",
                email: "john.doe@example.com",
            },
            {
                _id: "67cad545fc13ae017a527b35",
                name: "Jane Doe",
                email: "jane.doe@example.com",
            },
        ],
        createdAt: "8/10/2022",
        updatedAt: "1/29/2021",
    },
    {
        _id: {
            $oid: "67cafc00fc13ae020a527de7",
        },
        companyId: {
            $oid: "67cafc00fc13ae020a527de8",
        },
        title: "Librarian",
        description:
            "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        requirements: [
            "Degree in Computer Science",
            "2+ years of experience",
            "Strong communication skills",
        ],
        location: "Melbourne",
        jobType: "One Time",
        skills: [
            {
                name: "JavaScript",
                _id: "javascript",
            },
            {
                name: "Python",
                _id: "python",
            },
            {
                name: "Java",
                _id: "java",
            },
            {
                name: "C#",
                _id: "c#",
            },
        ],
        category: "Electrical",
        salaryRangeMin: 41124.22,
        salaryRangeMax: 86621.58,
        workMode: "Remote",
        applicants: [
            {
                _id: "67cad545fc13ae017a527b24",
                name: "John Doe",
                email: "john.doe@example.com",
            },
            {
                _id: "67cad545fc13ae017a527b35",
                name: "Jane Doe",
                email: "jane.doe@example.com",
            },
        ],
        createdAt: "11/12/2021",
        updatedAt: "3/11/2022",
    },
    {
        _id: {
            $oid: "67cafc00fc13ae020a527de9",
        },
        companyId: {
            $oid: "67cafc00fc13ae020a527dea",
        },
        title: "Engineer I",
        description:
            "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        requirements: [
            "Degree in Computer Science",
            "2+ years of experience",
            "Strong communication skills",
        ],
        location: "Pontivy",
        jobType: "One Time",
        skills: [
            {
                name: "JavaScript",
                _id: "javascript",
            },
            {
                name: "Python",
                _id: "python",
            },
            {
                name: "Java",
                _id: "java",
            },
            {
                name: "C#",
                _id: "c#",
            },
        ],
        category: "Site Furnishings",
        salaryRangeMin: 59940.65,
        salaryRangeMax: 91755.39,
        workMode: "Remote",
        applicants: [
            {
                _id: "67cad545fc13ae017a527b24",
                name: "John Doe",
                email: "john.doe@example.com",
            },
            {
                _id: "67cad545fc13ae017a527b35",
                name: "Jane Doe",
                email: "jane.doe@example.com",
            },
        ],
        createdAt: "7/26/2020",
        updatedAt: "10/27/2022",
    },
    {
        _id: {
            $oid: "67cafc00fc13ae020a527deb",
        },
        companyId: {
            $oid: "67cafc00fc13ae020a527dec",
        },
        title: "Sales Representative",
        description:
            "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
        requirements: [
            "Degree in Computer Science",
            "2+ years of experience",
            "Strong communication skills",
        ],
        location: "Luan Balu",
        jobType: "One Time",
        skills: [
            {
                name: "JavaScript",
                _id: "javascript",
            },
            {
                name: "Python",
                _id: "python",
            },
            {
                name: "Java",
                _id: "java",
            },
            {
                name: "C#",
                _id: "c#",
            },
        ],
        category: "Fire Protection",
        salaryRangeMin: 49869.8,
        salaryRangeMax: 74594.42,
        workMode: "Remote",
        applicants: [
            {
                _id: "67cad545fc13ae017a527b24",
                name: "John Doe",
                email: "john.doe@example.com",
            },
            {
                _id: "67cad545fc13ae017a527b35",
                name: "Jane Doe",
                email: "jane.doe@example.com",
            },
        ],
        createdAt: "3/5/2021",
        updatedAt: "1/29/2021",
    },
    {
        _id: {
            $oid: "67cafc00fc13ae020a527ded",
        },
        companyId: {
            $oid: "67cafc00fc13ae020a527dee",
        },
        title: "Project Manager",
        description:
            "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        requirements: [
            "Degree in Computer Science",
            "2+ years of experience",
            "Strong communication skills",
        ],
        location: "Kudang",
        jobType: "Part Time",
        skills: [
            {
                name: "JavaScript",
                _id: "javascript",
            },
            {
                name: "Python",
                _id: "python",
            },
            {
                name: "Java",
                _id: "java",
            },
            {
                name: "C#",
                _id: "c#",
            },
        ],
        category: "Plumbing & Medical Gas",
        salaryRangeMin: 7630.42,
        salaryRangeMax: 86017.43,
        workMode: "Onsite",
        applicants: [
            {
                _id: "67cad545fc13ae017a527b24",
                name: "John Doe",
                email: "john.doe@example.com",
            },
            {
                _id: "67cad545fc13ae017a527b35",
                name: "Jane Doe",
                email: "jane.doe@example.com",
            },
        ],
        createdAt: "4/26/2020",
        updatedAt: "8/5/2022",
    },
    {
        _id: {
            $oid: "67cafc00fc13ae020a527def",
        },
        companyId: {
            $oid: "67cafc00fc13ae020a527df0",
        },
        title: "Chemical Engineer",
        description:
            "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        requirements: [
            "Degree in Computer Science",
            "2+ years of experience",
            "Strong communication skills",
        ],
        location: "Fontaínhas",
        jobType: "Full Time",
        skills: [
            {
                name: "JavaScript",
                _id: "javascript",
            },
            {
                name: "Python",
                _id: "python",
            },
            {
                name: "Java",
                _id: "java",
            },
            {
                name: "C#",
                _id: "c#",
            },
        ],
        category: "Casework",
        salaryRangeMin: 12672.37,
        salaryRangeMax: 97070.38,
        workMode: "Hybrid",
        applicants: [
            {
                _id: "67cad545fc13ae017a527b24",
                name: "John Doe",
                email: "john.doe@example.com",
            },
            {
                _id: "67cad545fc13ae017a527b35",
                name: "Jane Doe",
                email: "jane.doe@example.com",
            },
        ],
        createdAt: "12/10/2020",
        updatedAt: "7/22/2020",
    },
    {
        _id: {
            $oid: "67cafc00fc13ae020a527df1",
        },
        companyId: {
            $oid: "67cafc00fc13ae020a527df2",
        },
        title: "Help Desk Operator",
        description:
            "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        requirements: [
            "Degree in Computer Science",
            "2+ years of experience",
            "Strong communication skills",
        ],
        location: "Jablunkov",
        jobType: "One Time",
        skills: [
            {
                name: "JavaScript",
                _id: "javascript",
            },
            {
                name: "Python",
                _id: "python",
            },
            {
                name: "Java",
                _id: "java",
            },
            {
                name: "C#",
                _id: "c#",
            },
        ],
        category: "Asphalt Paving",
        salaryRangeMin: 5034.42,
        salaryRangeMax: 73430.31,
        workMode: "Onsite",
        applicants: [
            {
                _id: "67cad545fc13ae017a527b24",
                name: "John Doe",
                email: "john.doe@example.com",
            },
            {
                _id: "67cad545fc13ae017a527b35",
                name: "Jane Doe",
                email: "jane.doe@example.com",
            },
        ],
        createdAt: "5/7/2022",
        updatedAt: "8/2/2022",
    },
    {
        _id: {
            $oid: "67cafc00fc13ae020a527df3",
        },
        companyId: {
            $oid: "67cafc00fc13ae020a527df4",
        },
        title: "Electrical Engineer",
        description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        requirements: [
            "Degree in Computer Science",
            "2+ years of experience",
            "Strong communication skills",
        ],
        location: "Dingshan",
        jobType: "Full Time",
        skills: [
            {
                name: "JavaScript",
                _id: "javascript",
            },
            {
                name: "Python",
                _id: "python",
            },
            {
                name: "Java",
                _id: "java",
            },
            {
                name: "C#",
                _id: "c#",
            },
        ],
        category: "Roofing (Metal)",
        salaryRangeMin: 15734.26,
        salaryRangeMax: 76362.68,
        workMode: "Remote",
        applicants: [
            {
                _id: "67cad545fc13ae017a527b24",
                name: "John Doe",
                email: "john.doe@example.com",
            },
            {
                _id: "67cad545fc13ae017a527b35",
                name: "Jane Doe",
                email: "jane.doe@example.com",
            },
        ],
        createdAt: "6/9/2021",
        updatedAt: "7/30/2022",
    },
    {
        _id: {
            $oid: "67cafc00fc13ae020a527df5",
        },
        companyId: {
            $oid: "67cafc00fc13ae020a527df6",
        },
        title: "Executive Secretary",
        description:
            "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        requirements: [
            "Degree in Computer Science",
            "2+ years of experience",
            "Strong communication skills",
        ],
        location: "Bourges",
        jobType: "Full Time",
        skills: [
            {
                name: "JavaScript",
                _id: "javascript",
            },
            {
                name: "Python",
                _id: "python",
            },
            {
                name: "Java",
                _id: "java",
            },
            {
                name: "C#",
                _id: "c#",
            },
        ],
        category: "Roofing (Asphalt)",
        salaryRangeMin: 37077.03,
        salaryRangeMax: 11943.68,
        workMode: "Remote",
        applicants: [
            {
                _id: "67cad545fc13ae017a527b24",
                name: "John Doe",
                email: "john.doe@example.com",
            },
            {
                _id: "67cad545fc13ae017a527b35",
                name: "Jane Doe",
                email: "jane.doe@example.com",
            },
        ],
        createdAt: "7/24/2020",
        updatedAt: "9/1/2021",
    },
    {
        _id: {
            $oid: "67cafc00fc13ae020a527df7",
        },
        companyId: {
            $oid: "67cafc00fc13ae020a527df8",
        },
        title: "Structural Analysis Engineer",
        description:
            "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        requirements: [
            "Degree in Computer Science",
            "2+ years of experience",
            "Strong communication skills",
        ],
        location: "Sylvan Lake",
        jobType: "Part Time",
        skills: [
            {
                name: "JavaScript",
                _id: "javascript",
            },
            {
                name: "Python",
                _id: "python",
            },
            {
                name: "Java",
                _id: "java",
            },
            {
                name: "C#",
                _id: "c#",
            },
        ],
        category: "Construction Clean and Final Clean",
        salaryRangeMin: 56881.99,
        salaryRangeMax: 45245.94,
        workMode: "Remote",
        applicants: [
            {
                _id: "67cad545fc13ae017a527b24",
                name: "John Doe",
                email: "john.doe@example.com",
            },
            {
                _id: "67cad545fc13ae017a527b35",
                name: "Jane Doe",
                email: "jane.doe@example.com",
            },
        ],
        createdAt: "11/22/2022",
        updatedAt: "9/23/2021",
    },
];
