import React from 'react';

const posts = [
    {
        name: 'Tyrion Lannister',
        title: 'Senior Finance Manager',
        time: '3 Days Ago',
        content: `Machine Learning—the clever sorcery of our age
It takes the drudgery of menial tasks and does them with unerring precision, leaving us free to dip our quills into best next move. It peers into the future, spotting patterns mere mortals would miss, turning grime and toil into foresight. A trusted aide, if you’re wise enough to wield it.
It sees patterns where others see noise, whispering secrets of the future to those wise enough to listen.
An automation—Why waste human effort when an unblinking mind can handle tedious tasks flawlessly(?)`
    },
    {
        name: 'Tyrion Lannister',
        title: 'Senior Finance Manager',
        time: '3 Days Ago',
        content: `Machine Learning—the clever sorcery of our age
It takes the drudgery of menial tasks and does them with unerring precision, leaving us free to dip our quills into best next move. It peers into the future, spotting patterns mere mortals would miss, turning grime and toil into foresight. A trusted aide, if you’re wise enough to wield it.
It sees patterns where others see noise, whispering secrets of the future to those wise enough to listen.
An automation—Why waste human effort when an unblinking mind can handle tedious tasks flawlessly(?)`
    },
    {
        name: 'Tyrion Lannister',
        title: 'Senior Finance Manager',
        time: '3 Days Ago',
        content: `Machine Learning—the clever sorcery of our age
It takes the drudgery of menial tasks and does them with unerring precision, leaving us free to dip our quills into best next move. It peers into the future, spotting patterns mere mortals would miss, turning grime and toil into foresight. A trusted aide, if you’re wise enough to wield it.
It sees patterns where others see noise, whispering secrets of the future to those wise enough to listen.
An automation—Why waste human effort when an unblinking mind can handle tedious tasks flawlessly(?)`
    }
];

const PostFeed = () => {
    return (
        <div className="flex flex-col items-center py-6 px-2 sm:px-4 bg-white min-h-screen w-full">
            <div className="w-full flex flex-col items-center">
                {posts.map((post, index) => (
                    <div
                        key={index}
                        className="
                            bg-white shadow-sm border rounded-lg p-3 sm:p-4 mb-6
                            w-full
                            transition-all
                        "
                    >
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0" /> {/* Placeholder for profile pic */}
                            <div>
                                <h4 className="font-semibold text-gray-800">{post.name}</h4>
                                <p className="text-sm text-gray-500">{post.title} • {post.time}</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="text-sm sm:text-base text-gray-800 mb-4 whitespace-pre-line">
                            {post.content}
                        </div>

                        {/* Footer actions */}
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm text-gray-600">
                            <button className="hover:underline text-left w-fit">Read Less</button>
                            <div className="flex gap-2 sm:gap-4 flex-wrap">
                                <button className="hover:underline">Like</button>
                                <button className="hover:underline">Comment</button>
                                <button className="hover:underline">Share</button>
                                <button className="hover:underline">More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostFeed;