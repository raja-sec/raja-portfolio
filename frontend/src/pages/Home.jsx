// import React from 'react';
// import Hero from '../components/sections/Hero';
// import About from '../components/sections/About';
// import Skills from '../components/sections/Skills';
// import ProjectsPreview from '../components/sections/ProjectsPreview';
// import ArticlesPreview from '../components/sections/ArticlesPreview';

// export default function Home() {
//   return (
//     <div>
//       <Hero />
//       <About />
//       <Skills />
//       <ProjectsPreview />
//       <ArticlesPreview />
//     </div>
//   );
// }   



import React, { useState } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import ProjectsPreview from '../components/sections/ProjectsPreview';
import ArticlesPreview from '../components/sections/ArticlesPreview';
import SubjectBadge from '../components/ui/SubjectBadge';

// Paste your data here
const videoData = [
  {
    subject: 'data warehousing & mining',
    slaStage: 2,
    title: "SLA Stage 2 - DWM",
    videoDriveId: "1QdclLXPefeUw1bC0iDgHdiscnooTFEiz"
  },
  {
    subject: 'data warehousing & mining',
    slaStage: 3,
    title: "SLA Stage 3 - DWM",
    videoDriveId: "1HHih4o00h2Urs5hnGI54zAOABkyHq3k4"
  },
  {
    subject: 'theory of computation & compiler design',
    slaStage: 2,
    title: "SLA Stage 2 - TCCD",
    videoDriveId: "1I1SErEwU4QlSmIvwL9ev9eAh1ycalb-k"
  },
  {
    subject: 'theory of computation & compiler design',
    slaStage: 3,
    title: "SLA Stage 3 - TCCD",
    videoDriveId: "1oV1CWHr7xAfXg8Toj4o7YiqK8lp8x9LU"
  },
  {
    subject: 'cybersecurity principles & practices',
    slaStage: 2,
    title: "SLA Stage 2 - CSPP",
    videoDriveId: "1ESnS8Lw59e0IRibqFx60H5q6ZIEKH-W7"
  },
  {
    subject: 'cybersecurity principles & practices',
    slaStage: 3,
    title: "SLA Stage 3 - CSPP",
    videoDriveId: "1iKqCTrpve62bmNK8wIS4mKJAQ3EeUiNz"
  },
  {
    subject: 'cyber crime investigation & digital forensics',
    slaStage: 2,
    title: "SLA Stage 2 - CCIDF",
    videoDriveId: "1E6Tu6LsA6EaE-Gj_gBPxlo9UYB2SlG9t"
  },
  {
    subject: 'cyber crime investigation & digital forensics',
    slaStage: 3,
    title: "SLA Stage 3 - CCIDF",
    videoDriveId: "1gx5NBDD6JEZjnfrSOVDnWyLXmOexJlc2"
  },
  {
    subject: 'software engineering & project management',
    slaStage: 2,
    title: "SLA Stage 2 - SEPM",
    videoDriveId: "1wvP07eJ-AeCyVdBWVXyIPvsTl3enQLa3"
  },
  {
    subject: 'software engineering & project management',
    slaStage: 3,
    title: "SLA Stage 3 - SEPM",
    videoDriveId: "1FM8-C5nXhIvKmQbknJIsk69OSpF0DFDR"
  }
];




export default function Home() {
  const [openIdx, setOpenIdx] = useState(null);

  const handleOpenModal = (idx) => setOpenIdx(idx);
  const handleClose = () => setOpenIdx(null);

  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <ProjectsPreview />
      <ArticlesPreview />

      {/* --- Videos Section --- */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-gray-200">
        <h2 className="text-3xl font-bold mb-10 text-left">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoData.map((video, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-2xl flex flex-col shadow-lg cursor-pointer hover:ring-2 hover:ring-pink-400"
              onClick={() => handleOpenModal(idx)}
              tabIndex={0}
              role="button"
            >
              <div className="mb-3">
                <SubjectBadge subject={video.subject} size="sm" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{video.title}</h3>
              <p className="text-xs text-pink-400 font-semibold mb-2">SLA Stage {video.slaStage}</p>
              <div className="aspect-video rounded-lg overflow-hidden mb-3 pointer-events-none">
                {video.videoDriveId ? (
                  <iframe
                    src={`https://drive.google.com/file/d/${video.videoDriveId}/preview`}
                    title={video.title}
                    allow="autoplay"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <div className="bg-gray-800 w-full h-full flex items-center justify-center text-yellow-400 text-xs">
                    Paste your Google Drive file ID
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Modal --- */}
      {openIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={handleClose}
        >
          <div
            className="bg-gray-900 rounded-xl max-w-2xl w-full p-6 relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-4 text-xl text-pink-400 hover:text-pink-300"
              onClick={handleClose}
              aria-label="Close Video"
            >
              ×
            </button>

            {/* Video and info */}
            <div className="mb-4">
              <SubjectBadge subject={videoData[openIdx].subject} size="md" />
              <h2 className="text-2xl font-bold mt-2 mb-1">{videoData[openIdx].title}</h2>
              <p className="text-xs text-pink-400 font-semibold mb-3">SLA Stage {videoData[openIdx].slaStage}</p>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              {videoData[openIdx].videoDriveId ? (
                <iframe
                  src={`https://drive.google.com/file/d/${videoData[openIdx].videoDriveId}/preview`}
                  title={videoData[openIdx].title}
                  allow="autoplay"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <div className="bg-gray-800 w-full h-full flex items-center justify-center text-yellow-400 text-xs">
                  Paste your google drive file id here
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
