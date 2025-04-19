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
    <div className="flex flex-col md:flex-row p-4 gap-6">
      <div className="flex-1">
        <div className="rounded-xl overflow-hidden mb-4 shadow-lg">
          <iframe
            className="w-full h-64 md:h-96"
            src={`https://www.youtube.com/embed/${currentVideoId}`}
            title="Course Video"
            allowFullScreen
          ></iframe>
        </div>

        <h1 className="text-2xl font-bold mb-2">{chapters.find(chapter => chapter.videoId === currentVideoId).title}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-700">
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

      <div className="w-full md:w-80 p-4 border rounded-lg bg-white shadow-sm h-fit">
        <h3 className="font-semibold text-lg mb-3">Next</h3>
        <div className="flex flex-col gap-3">
          {chapters.map((item, index) => (
            <div
              key={index}
              className="flex gap-3 p-2 bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => setCurrentVideoId(item.videoId)}
            >
              <iframe
                className="w-16 h-14 bg-gray-300 rounded-md"
                src={`https://www.youtube.com/embed/${item.videoId}`}
                title={item.title}
                allowFullScreen
              ></iframe>
              <div>
                <h4 className="text-sm font-semibold">{item.title}</h4>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseVideoSection;