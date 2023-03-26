import { FaStar } from 'react-icons/fa';


const Skills = () => {
    const skills = [
        { name: 'React', rating: 5 },
        { name: 'NextJS', rating: 5 },
        { name: 'NodeJS', rating: 5 },
        { name: 'Django', rating: 5 },
        { name: 'Flask', rating: 5 },
        { name: 'ChatGPT', rating: 5 },
        { name: 'Tolerating stupidity', rating: 6 },
    ];

    return (
        <section className="bg-gray-900 py-10">
            <div className="max-w-screen-lg mx-auto">
                <h2 className="text-3xl text-white font-bold text-center mb-8">Skills</h2>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-800">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider"
                                            >
                                                Skill
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider"
                                            >
                                                Rating
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-900 divide-y divide-gray-200">
                                        {skills.map((skill) => (
                                            <tr key={skill.name}>
                                                <td className="px-6 py-4 whitespace-nowrap text-gray-50">
                                                    {skill.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-gray-50">
                                                    <div className="flex items-center">
                                                        {[...Array(skill.rating)].map((_, i) => (
                                                            <FaStar key={i} className="text-yellow-500 mr-1" />
                                                        ))}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
