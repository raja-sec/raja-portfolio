import React, { useEffect, useState } from "react";
import { getProfile } from "../../api/api";
import Button from "../ui/Button";

export default function About() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile()
      .then((res) => setProfile(res.data))
      .catch((err) => console.error("Error fetching profile:", err));
  }, []);

  if (!profile) return null;

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-gray-200">
      <h2 className="text-3xl font-bold mb-10 text-pink-500 text-center md:text-left">
        About Me
      </h2>

      {/* Parent Layout */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start w-full">
        {/* Left: Story */}
        <div className="md:w-2/3 space-y-5">
          <p className="text-gray-400 leading-relaxed">
            I’m a{" "}
            <span className="text-white font-semibold">full-stack developer</span>{" "}
            and{" "}
            <span className="text-white font-semibold">
              cybersecurity enthusiast
            </span>{" "}
            passionate about building secure and efficient digital systems. My
            journey blends development and security—creating applications that
            are not only powerful but resilient.
          </p>

          <p className="text-gray-400 leading-relaxed">
            From achieving a{" "}
            <span className="text-white font-semibold">
              Top 10% rank on TryHackMe
            </span>{" "}
            to solving CTF challenges in{" "}
            <span className="text-white font-semibold">reverse engineering</span>
            , <span className="text-white font-semibold">OSINT</span>, and{" "}
            <span className="text-white font-semibold">network analysis</span>,
            I love exploring how technology works beneath the surface.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-6 py-5">
            <Button to="/about">Learn More</Button>
          </div>
        </div>

        {/* Divider (hidden on small screens) */}
        <div className="hidden md:block w-px bg-gray-700 h-auto self-stretch opacity-50"></div>

        {/* Right: Info Column */}
        <div className="md:w-1/3 flex flex-col gap-6 text-gray-400 md:pl-6">
          <div>
            <h4 className="text-white font-semibold mb-1">Location</h4>
            <p>Mumbai, India</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Focus Areas</h4>
            <p>Cybersecurity, Web Development</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Core Skills</h4>
            <p>Python, React, Docker</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Interests</h4>
            <p>CTFs, Reverse Engineering</p>
          </div>
        </div>
      </div>
    </section>
  );
}


