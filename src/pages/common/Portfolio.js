import React from 'react';

const Portfolio = () => {
    return (
        <div className='mt-10 mx-4'>
            <div className='lg:flex justify-center items-center'>
                <div className='w-[350px] h-[350px]'>
                    <img className='rounded-full' src="https://i.ibb.co/wNF8RnN/New-Project.jpg" alt="" />
                </div>
                <div className='w-[360px] lg:w-[450px] mt-6 lg:ml-8'>
                    <h1 className='lg:text-4xl text-3xl mb-4 font-bold'>MD NAZMUL HOSSAIN</h1>
                    <p className='text-gray-700'>In Short, I am reliable, hard-working with strong attention
                        to detail and eager to learn about new technologies. I am
                        able to work well both on my own initiative and as part of
                        a team.</p>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='lg:w-[450px]'>
                    <div>
                        <h1 className='text-center lg:text-xl mt-20 mb-10 font-medium'><span className='mr-4'>E D U C A T I O N A L</span> Q U A L I F I C A T I O N</h1>
                        <div className='mb-6'>
                            <h1 className='text-sm lg:text-lg font-bold'>Bachelor of Science in Computer Science and Engineering</h1>
                            <p>CGPA- 3.75, Passing Year- 2021</p>
                            <p>Manarat International University</p>
                        </div>
                        <div className='mb-6'>
                            <h1 className='text-sm lg:text-lg font-bold'>Higher Secondary Certificate</h1>
                            <p>GPA- 4.92, Passing Year- 2016, Group- Science</p>
                            <p> Shaheed Police Smrity Collage</p>
                        </div>
                        <div className='mb-6'>
                            <h1 className='text-sm lg:text-lg font-bold'>Secondary School Certificate</h1>
                            <p>GPA- 5.00, Passing Year- 2014, Group- Science</p>
                            <p>Muhammadabad Islamia Alim madrasah</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='lg:w-[450px]'>
                    <div>
                        <h1 className='text-center lg:text-xl mt-20 mb-10 font-medium'><span className='mr-4'>W O R K</span> E X P E R I E N C E</h1>
                        <div className='mb-6'>
                            <h1 className='text-sm lg:text-lg font-bold'>Communication Executive at Illusion Media</h1>
                            <p>(January 2019 to December-2020)</p>
                        </div>
                        <div className='mb-6'>
                            <h1 className='text-sm lg:text-lg font-bold'>HGeneral Secretary, CSE club, Manarat International
                                University</h1>
                            <p>(January-2021 to December-2021)</p>
                        </div>
                        <div className='mb-6'>
                            <h1 className='text-sm lg:text-lg font-bold'>IT and publicity secretary, CSE club, Manarat International
                                University</h1>
                            <p>(January-2020 to December-2020)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='lg:w-[450px]'>
                    <div>
                        <h1 className='text-center lg:text-xl mt-20 mb-10 font-medium'><span className='mr-4'>K E Y-</span> S K I L L S</h1>
                        <div className='mb-6'>
                            <h1 className='text-sm lg:text-lg font-bold'>React JS, Node JS, Express JS, MongoDB, Python, C++, JavaScript, HTML, CSS, Bootstrap, Tailwind, DevTools, Figma, Problem Solving skill, Git and GitHub</h1>
                            <p>Adobe Photoshop and illustrator</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='lg:w-[450px]'>
                    <div>
                        <h1 className='text-center lg:text-xl mt-20 mb-10 font-medium'><span className='mr-4'>M Y</span> W O R K S</h1>
                        <div>
                            <div className='mb-12'>
                                <a href="https://gear-guide-inventory.web.app/">
                                    <img src="https://i.ibb.co/55GK7p7/Screenshot-from-2022-05-26-23-14-23.png" alt="" />
                                </a>
                                <p className='text-center'>Click on the picture</p>
                            </div>
                            <div className='mb-12'>
                                <a href="https://gear-guide-inventory.web.app/">
                                    <img src="https://i.ibb.co/9Z50pT2/Screenshot-from-2022-05-26-23-16-59.png" alt="" />
                                </a>
                                <p className='text-center'>Click on the picture</p>
                            </div>
                            <div className='mb-12'>
                                <a href="https://meek-master-f2a90.web.app/services">
                                    <img src="https://i.ibb.co/m9C47Gq/Screenshot-from-2022-05-26-23-21-45.png" alt="" />
                                </a>
                                <p className='text-center'>Click on the picture</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;