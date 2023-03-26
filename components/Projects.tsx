import { FaLaptopCode, FaImage } from 'react-icons/fa';

const projects = [
    {
        title: 'Image Captioning with GPT-3',
        description: 'A machine learning project that generates captions for images using GPT-3.',
        icon: <FaImage size={64} />,
        link: 'https://github.com/sanjivg10/image-captioning-gpt3',
    },
    {
        title: 'ChatGPT',
        description: 'A website that allows users to chat with a large language model trained by OpenAI.',
        icon: <FaLaptopCode size={64} />,
        link: 'https://github.com/sanjivg10/chatgpt-website',
    },
];

const ProjectCard = ({ title, description, icon, link }) => (
    <a href={link} target="_blank" rel="noreferrer">
        <div className="bg-purple-500 rounded-md p-6 hover:bg-purple-600 hover:shadow-lg transition duration-300 ease-in-out">
            <div className="flex justify-center mb-6">{icon}</div>
            <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-white text-lg">{description}</p>
        </div>
    </a>
);

const Projects = () => (
    <div id="projects" className="max-w-screen-xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-center text-white">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
            {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </div>
    </div>
);

export default Projects;
