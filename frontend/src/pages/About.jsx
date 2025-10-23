import React, { useEffect, useState } from "react";
import { getAbout } from "../api/api"; // make sure you have this endpoint in your api.js

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    getAbout()
      .then((res) => setAbout(res.data))
      .catch((err) => console.error("Error fetching about data:", err));
  }, []);

  if (!about) return null;

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-gray-200">
      <h2 className="text-3xl font-bold mb-10 text-pink-500">About Me</h2>

      {/* ABOUT ME */}
      <div className="mb-10">
        <p className="text-gray-400 leading-relaxed text-lg">{about.about_me}</p>
      </div>

      <div className="flex flex-col md:flex-row md:items-start gap-10">
        {/* LEFT COLUMN */}
        <div className="flex-1 space-y-10">
          {/* What I'm Doing */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">What I’m Doing</h3>
            <ul className="list-disc pl-5 text-gray-400 space-y-2">
              {about.what_im_doing.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Education</h3>
            <div className="space-y-3">
              {about.education.map((edu, i) => (
                <div key={i} className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-medium text-white">{edu.degree}</h4>
                  <p className="text-gray-400 text-sm">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTFs */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">CTFs</h3>
            <div className="space-y-3">
              {about.ctfs.map((ctf, i) => (
                <div key={i} className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-medium text-white">{ctf.platform}</h4>
                  <p className="text-gray-400 text-sm mb-2">{ctf.rank}</p>
                  <div className="flex flex-wrap gap-2">
                    {ctf.focus.map((tag, j) => (
                      <span
                        key={j}
                        className="bg-pink-500/10 text-pink-400 text-xs px-2 py-1 rounded-md border border-pink-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VERTICAL LINE */}
        <div className="hidden md:block w-px bg-gray-700 mx-4"></div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 space-y-8">
          {/* Languages */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Languages</h3>
            <ul className="flex flex-wrap gap-2 text-gray-400">
              {about.languages.map((lang, i) => (
                <li
                  key={i}
                  className="bg-gray-700/40 px-3 py-1 rounded-lg border border-gray-600"
                >
                  {lang}
                </li>
              ))}
            </ul>
          </div>

          {/* Spotify Top 10 */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Spotify Top 10</h3>
            <ol className="list-decimal pl-5 text-gray-400 space-y-1">
              {about.spotify_top_10.map((song, i) => (
                <li key={i}>{song}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* <div className="text-red-600">HELLO WORLD</div> */}
    </section>
  );
}
