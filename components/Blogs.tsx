import React from "react";

const blogs = [
    {
        id: 1,
        title: "ChatGPT - A Brief Introduction",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eros vel orci mattis, a facilisis nulla consectetur. Etiam consequat, ante vel sollicitudin molestie, tortor nisi ullamcorper odio, a sagittis dolor tellus sit amet mauris. Vestibulum sit amet varius lorem. ",
        date: "2022-05-01",
        link: "https://chatgpt.com/blog/chatgpt-introduction",
    },
    {
        id: 2,
        title: "OpenAI and Its Mission",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eros vel orci mattis, a facilisis nulla consectetur. Etiam consequat, ante vel sollicitudin molestie, tortor nisi ullamcorper odio, a sagittis dolor tellus sit amet mauris. Vestibulum sit amet varius lorem. ",
        date: "2022-06-01",
        link: "https://chatgpt.com/blog/openai-mission",
    },
    {
        id: 3,
        title: "5 Ways to Motivate Yourself at Work",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eros vel orci mattis, a facilisis nulla consectetur. Etiam consequat, ante vel sollicitudin molestie, tortor nisi ullamcorper odio, a sagittis dolor tellus sit amet mauris. Vestibulum sit amet varius lorem. ",
        date: "2022-07-01",
        link: "https://chatgpt.com/blog/work-motivation",
    },
];

const BlogSection = () => {
    return (
        <div className="bg-gray-900 py-10">
            <h2 className="text-center text-4xl text-white font-bold mb-10">Blogs</h2>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <div className="p-6">
                                <h3 className="text-white font-bold text-xl mb-2 hover:text-gray-400">
                                    <a href={blog.link} target="_blank" rel="noopener noreferrer">{blog.title}</a>
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">{blog.date}</p>
                                <p className="text-gray-300 text-base">{blog.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
