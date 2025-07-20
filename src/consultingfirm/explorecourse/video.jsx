import React, { useState } from "react";

const chapters = [
  { title: "1. Introduction", description: "Introduction to the course.", videoId: "0HabxsuXW4g" },
  { title: "2. Basics", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", videoId: "dQw4w9WgXcQ" },
  { title: "3. Chapter III", description: "Suspendisse potenti. Sed tristique tortor vel est.", videoId: "eYq7WapuDLU" },
  { title: "4. Chapter IV", description: "Mauris efficitur orci eget enim cursus.", videoId: "3JZ_D3ELwOQ" },
  { title: "5. Chapter V", description: "Cras nec odio vel justo cursus.", videoId: "9bZkp7q19f0" },
  { title: "6. Chapter VI", description: "Aliquam erat volutpat. Ut pretium.", videoId: "fJ9rUzIMcZQ" },
  { title: "7. Chapter VII", description: "Praesent dignissim nisi vitae felis.", videoId: "hT_nvWreIhg" },
  { title: "8. Chapter VIII", description: "Nulla facilisi. Sed mattis.", videoId: "RgKAFK5djSk" },
  { title: "9. Chapter IX", description: "Integer id elit eu sem.", videoId: "OPf0YbXqDm0" },
  { title: "10. Chapter X", description: "Donec laoreet justo nec lacus.", videoId: "2Vv-BfVoq4g" },
];

const CourseVideoSection = () => {
  const [currentVideoId, setCurrentVideoId] = useState(chapters[0].videoId);

  return (
    <div
      className="w-full min-h-screen bg-white"
      style={{ overflowX: "hidden" }}
    >
      <div
        className="
          flex flex-col md:flex-row
          gap-6
          px-2 sm:px-4 md:px-10 lg:px-20
          py-4
          max-w-6xl
          mx-auto
        "
      >
        <div className="flex-1 min-w-0">
          <div className="rounded-xl overflow-hidden mb-4 shadow-lg w-full">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${currentVideoId}`}
                title="Course Video"
                allowFullScreen
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-2 break-words">
            {chapters.find(chapter => chapter.videoId === currentVideoId).title}
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
            <img
              src="https://i.pravatar.cc/40?img=12"
              alt="Instructor"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="font-medium">Tyrion Lannister</div>
              <div className="text-xs text-gray-500">King's Landing</div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-80 p-4 border rounded-lg bg-white shadow-sm h-fit min-w-0">
          <h3 className="font-semibold text-lg mb-3">Next</h3>
          <div className="flex flex-col gap-3">
            {chapters.map((item, index) => (
              <div
                key={index}
                className={`flex gap-3 p-2 rounded-lg cursor-pointer transition
                  ${item.videoId === currentVideoId ? "bg-blue-100" : "bg-gray-100 hover:bg-gray-200"}
                `}
                onClick={() => setCurrentVideoId(item.videoId)}
              >
                <div className="flex-shrink-0 w-16 h-14 bg-gray-300 rounded-md overflow-hidden">
                  <div className="relative w-full h-full">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${item.videoId}`}
                      title={item.title}
                      allowFullScreen
                      style={{ border: 0 }}
                    ></iframe>
                  </div>
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold truncate">{item.title}</h4>
                  <p className="text-xs text-gray-600 truncate">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseVideoSection;