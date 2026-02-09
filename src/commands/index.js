const commands = {
    help: {
        description: "List all availabe commands",
        run: () => {
            return [
                "Available commands:",
                "\thelp",
                "\tabout",
                "\tprojects",
                "\tskills",
                "\tcontact",
                "\tclear"
            ]
        }
    },

    about: {
        description: "About me",
        run: () => {
            return [
                "Hi, I am Parmeet.",
                "I'm a coder passionate about web development, data-analysis, open-source, and AI.",
                "I enjoy building efficient applications and exploring new technologies."
            ]
        }
    },

    projects: {
        description: "View my projects",
        run: () => {
            return [
                "Projects:",
                "\t- ter-me-nal",
                "\t- WhiffPy",
                "\t- AI Image Captioning Tool",
                "\t- React Notes App"
            ]
        }
    },

    skills: {
        description: "Tech and tools I can work with",
        run: () => {
            return [
                "Skills:",
                "\t- React",
                "\t- Tailwind CSS",
                "\t- JavaScript",
                "\t- Python",
                "\t- C++",
                "\t- Git & GitHub"
            ]
        }
    },

    contact: {
        description: "How to contact me",
        run: () => {
            return [
                "Contact:",
                "\tEmail: parmeetbhamrah@gmail.com",
                "\tGitHub: github.com/ParmeetBhamrah",
                "\tLinkedIn: linkedin.com/in/parmeetsinghbhamrah"
            ]
        }
    }
}

export default commands