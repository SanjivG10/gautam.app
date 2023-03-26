import { FaGithub, FaTwitter } from 'react-icons/fa';

function Contact() {
    return (
        <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contact Me</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                        Get in Touch
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        If you have any questions or would like to work together on a project, feel free to reach out to me using the links below:
                    </p>
                </div>
                <div className="mt-10 sm:flex sm:justify-center">
                    <div className="flex items-center justify-center rounded-md shadow-lg">
                        <a href="https://github.com/sanjivg10" className="text-gray-100 hover:text-indigo-500 transition duration-300">
                            <FaGithub className="w-8 h-8" />
                        </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3 flex items-center justify-center rounded-md shadow-lg">
                        <a href="https://twitter.com/sanjivg10" className="text-gray-100 hover:text-indigo-500 transition duration-300">
                            <FaTwitter className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
