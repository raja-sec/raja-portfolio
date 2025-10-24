import React, { useEffect, useState } from 'react';
import { getProfile } from '../../api/api';
import Button from '../ui/Button';
import HeroImage from '../../assets/hero-image.png'; // put your illustration here
// import ResumeFile from '../../assets/raja_resume.pdf'; // <-- Add your resume file here

export default function Hero() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile()
      .then((res) => setProfile(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!profile) return null;

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left: Text */}
      <div className="flex-1 space-y-4">
        <h1 className="text-5xl font-bold">
          Hey, I'm <span className="text-pink-500">{profile.name}</span> 👋
        </h1>
        <p className="text-gray-300 text-lg">{profile.title}</p>
        <p className="text-gray-300 text-lg">{profile.bio}</p>

        <div className="flex justify-center md:justify-start gap-4 mt-6">
          {/* <Button to="/about">About Me</Button> */}

          {/* View Resume Button */}
          {/* <a
            href={ResumeFile}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Resume</Button>
          </a> */}

          <Button to="/contact" variant="primary">
            Contact
          </Button>
        </div>
      </div>

      {/* Right: Image */}
<div className="flex-1 flex justify-center mt-10 md:mt-0">
  <div
    className="w-64 h-64 md:w-80 md:h-80 overflow-hidden bg-pink-900"
    style={{
      borderRadius: "38% 62% 56% 44% / 35% 38% 62% 65% ",
    }}
  >
    <img
      src={HeroImage}
      alt="Hero illustration"
      className="w-80 h-80 object-cover"
    />
  </div>
</div>

  {/* <div className="flex-1 flex justify-center mt-10 md:mt-0">
  <div
    className="w-64 h-64 md:w-80 md:h-80 overflow-hidden bg-pink-900"
    style={{
      borderRadius: "38% 62% 56% 44% / 35% 38% 62% 65% ",
    }}
  >
    <img
      src={HeroImage} // This is your transparent PNG
      alt="Hero illustration"
      // Updated className for better control
      className="w-full h-full object-cover object-[50%_top]"
      // object-[50%_top] means centered horizontally, aligned to the top vertically.
      // You can adjust 'top' to a percentage or pixel value (e.g., 'object-[50%_-20px]')
      // if you want to push it down further or 'object-[50%_20%]'
    />
  </div>
</div> */}


    </section>
  );
}



      {/* Right: Image */}
      {/* <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src={HeroImage}
          alt="Hero illustration"
          // className="w-64 h-64 md:w-80 md:h-80 object-contain rounded-full bg-pink-500/10"
          className="w-64 h-64 object-cover [clip-path:polygon(38%62%51%49% , 25%33%67%75%)]"
        />
      </div> */}