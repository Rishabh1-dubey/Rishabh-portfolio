import React from 'react';

const About = () => {
  const stackList = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png',
      name: 'HTML',
    },
    {
      img: 'https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/css3.svg',
      name: 'CSS',
    },
    {
      img: 'https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/javascript.svg',
      name: 'JavaScript',
    },
    {
      img: 'https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/react.svg',
      name: 'React',
    },
    {
      img: 'https://i.ibb.co/ydWrDJZ/1-t-OI6-UC5-Ea-S2f-PIt-Ces-I-AQ.png',
      name: 'Redux',
    },
    {
      img: 'https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/git.svg',
      name: 'GitHub',
    },
    {
      img: 'https://www.svgrepo.com/show/333609/tailwind-css.svg',
      name: 'Tailwind',
    },
    {
      img: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png',
      name: 'Next.js',
    },
    {
      img: 'https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png',
      name: 'TypeScript',
    },
  ];

  return (
    <div className="container   pt-12">
      <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
      <div className="flex m-auto w-9/12 md:flex-col flex-row items-center bg-white rounded-lg shadow-lg p-6">
        <img
          className="h-48 w-48 rounded-full mx-auto mb-6 md:mb-0"
          src="https://cdn-icons-png.flaticon.com/512/3242/3242257.png"
          alt="Avatar"
        />
        <div className="md:ml-6 w-9/12 text-center md:text-left">
          <p className="text-lg">
            Hello! My name is <strong>Rishabh Dubey</strong>. I am currently into front-end web development. My favorite part of programming is the problem-solving aspect and learning new technologies. I love the feeling of finally getting that red squiggly line out of the way. My core stack is React, Tailwind, Redux-toolkit, Java (DSA). I am also familiar with Jest. I am always looking to learn new technologies. I am currently looking for a full-time position as a software developer.
          </p>
        </div>
      <div className="mt-8">
        <h2 className="text-xl  text-center mb-6">I have become confident using the following technologies.</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {stackList.map((stack, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                className="h-16 w-16 mb-2"
                src={stack.img}
                alt={stack.name}
                />
              <p className="text-sm font-medium">{stack.name}</p>
            </div>
          ))}
        </div>
      </div>
        </div>
    </div>
  );
};

export default About;
