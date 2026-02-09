const commands = {
    help: {
        description: "List all available commands",
        run: () => {
            return [
                { type: "text", value: "Available commands:" },
                { type: "text", value: "\thelp" },
                { type: "text", value: "\tabout" },
                { type: "text", value: "\tprojects" },
                { type: "text", value: "\tskills" },
                { type: "text", value: "\tcontact" },
                { type: "text", value: "\tclear" }
            ];
        }
    },

    about: {
        description: "About me",
        run: () => {
            return [
                { type: "text", value: "Hi, I am Parmeet." },
                {
                    type: "text",
                    value:
                        "I'm a coder passionate about web development, data analysis, open-source, and AI."
                },
                {
                    type: "text",
                    value:
                        "I enjoy building efficient applications and exploring new technologies."
                }
            ];
        }
    },

    projects: {
        description: "View my projects",
        run: () => {
            return [
                { type: "text", value: "Projects:" },
                {
                    type: "link",
                    text: "\tTER-ME-NAL",
                    url: "https://parmeetdev.vercel.app"
                },
                {
                    type: "link",
                    text: "\tWhiffPy",
                    url: "https://pypi.org/project/whiffpy/"
                },
                {
                    type: "link",
                    text: "\tAI Image Captioning Tool",
                    url: "https://github.com/ParmeetBhamrah/AI-Image-Captioning"
                },
                {
                    type: "link",
                    text: "\tReact Notes App",
                    url: "https://react-notes-app-jet.vercel.app"
                },
                {
                    type: "link",
                    text: "\tValorant Server Status Checker",
                    url: "https://github.com/ParmeetBhamrah/valorant-server-status-checker"
                },
            ];
        }
    },

    skills: {
        description: "Tech and tools I can work with",
        run: () => {
            return [
                { type: "text", value: "Skills:" },
                { type: "text", value: "\tReact" },
                { type: "text", value: "\tTailwind CSS" },
                { type: "text", value: "\tJavaScript" },
                { type: "text", value: "\tPython" },
                { type: "text", value: "\tC++" },
                { type: "text", value: "\tGit & GitHub" }
            ];
        }
    },

    contact: {
        description: "How to contact me",
        run: () => {
            return [
                { type: "text", value: "Contact:" },
                {
                    type: "link",
                    text: "\tEmail - parmeetbhamrah@gmail.com",
                    url: "mailto:parmeetbhamrah@gmail.com"
                },
                {
                    type: "link",
                    text: "\tGitHub",
                    url: "https://github.com/ParmeetBhamrah"
                },
                {
                    type: "link",
                    text: "\tLinkedIn",
                    url: "https://linkedin.com/in/parmeetsinghbhamrah"
                }
            ];
        }
    }
};

export default commands;
