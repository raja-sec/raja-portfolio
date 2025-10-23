import React, { useEffect, useState } from 'react';
import { getProfile } from '../../api/api';
import { FaCode, FaServer, FaCloud, FaLock } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function Skills() {
  const [skills, setSkills] = useState({});
  const [openCategories, setOpenCategories] = useState({});

  useEffect(() => {
    getProfile()
      .then((res) => setSkills(res.data.skills || {}))
      .catch((err) => console.error('Error fetching skills:', err));
  }, []);

  if (!skills || Object.keys(skills).length === 0) return null;

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const skillCategories = [
    { key: 'frontend', label: 'Frontend', icon: <FaCode className="text-accent text-xl" /> },
    { key: 'backend', label: 'Backend', icon: <FaServer className="text-accent text-xl" /> },
    { key: 'cloud', label: 'Cloud & DevOps', icon: <FaCloud className="text-accent text-xl" /> },
    { key: 'cybersecurity', label: 'Cybersecurity', icon: <FaLock className="text-accent text-xl" /> },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-gray-200">
      <h2 className="text-3xl font-bold mb-10 text-accent text-left">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
        {skillCategories.map(({ key, label, icon }) => {
          const isOpen = openCategories[key];
          return (
            <div
              key={key}
              onClick={() => toggleCategory(key)}
              className={`cursor-pointer bg-[#1C1C1B] p-6 rounded-xl shadow-md hover:shadow-pink-500/20 transition-all transform hover:scale-[1.02] border ${
                isOpen ? 'border-pink-500/40' : 'border-transparent'
              } ${isOpen ? 'h-[200px]' : 'h-[100px]'} overflow-hidden`}
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  {icon}
                  <h3 className="text-xl font-semibold text-white">{label}</h3>
                </div>
                {isOpen ? (
                  <FiChevronUp className="text-accent" />
                ) : (
                  <FiChevronDown className="text-accent" />
                )}
              </div>

              {/* Dropdown */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isOpen ? 'opacity-100 mt-4' : 'opacity-0 mt-0'
                }`}
              >
                {isOpen && (
                  <div className="flex flex-wrap gap-3">
                    {skills[key]?.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-800 rounded-lg text-sm font-medium hover:bg-gray-700 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
