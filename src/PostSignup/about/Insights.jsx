import React from 'react';

const insightsData = [
  { date: '27-12-2024', title: 'Maximise your freelance income by learning the art of effective pricing', author: 'GAIN', category: 'For Talent' },
  { date: '12-12-2024', title: 'How to approach your independent career like an entrepreneur', author: 'GAIN', category: 'For Talent' },
  { date: '27-12-2024', title: 'How to choose the right talent partner for your organisation', author: 'GAIN', category: 'For Client' },
  { date: '27-12-2024', title: 'Maximise your freelance income by learning the art of effective pricing', author: 'GAIN', category: 'For Talent' },
  { date: '12-12-2024', title: 'How to approach your independent career like an entrepreneur', author: 'GAIN', category: 'For Talent' },
  { date: '27-12-2024', title: 'How to choose the right talent partner for your organisation', author: 'GAIN', category: 'For Client' },
  { date: '27-12-2024', title: 'Maximise your freelance income by learning the art of effective pricing', author: 'GAIN', category: 'For Talent' },
  { date: '12-12-2024', title: 'How to approach your independent career like an entrepreneur', author: 'GAIN', category: 'For Talent' },
  { date: '27-12-2024', title: 'How to choose the right talent partner for your organisation', author: 'GAIN', category: 'For Client' },
];

const InsightsPage = () => {
  return (
    <div className="bg-white py-10 w-full overflow-x-hidden">
      <div className="section-container"  >
        {/* Top Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 w-full">
          <div className="w-full md:w-1/2 max-w-md">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug mb-4">
              Insights
            </h2>
            <p className="max-w-4xl text-left text-gray-600 onest-regular text-base sm:text-lg md:text-xl">
              Articles, guides, and interviews for <br className="hidden sm:block" /> clients and talent.
            </p>
          </div>
          {/* Placeholder image or graphic */}
          <div className="w-full md:w-1/2 h-40 md:h-48 bg-gray-300 rounded-xl mt-6 md:mt-0"></div>
        </section>

        {/* Filters: Category and Search */}
        <div className="flex flex-col md:flex-row gap-4 w-full mb-8" >
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-[#313131] mb-1">Category</label>
            <select className="border border-[#313131] rounded-xl px-4 py-3 text-[#313131] bg-white w-full">
              <option>Select a category</option>
              <option>For Talent</option>
              <option>For Client</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-[#313131] mb-1 invisible md:visible md:mb-1">
              {/* For alignment, but visually hidden on mobile */}
              Search
            </label>
            <div className="flex w-full relative">
              <input
                type="search"
                placeholder="Search"
                className="border border-[#313131] rounded-xl px-4 py-3 w-full text-[#313131]"
              />
              <button className="bg-[#313131] text-white rounded-full px-5 absolute right-2 top-1/2 -translate-y-1/2 h-[40px]">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Insights Cards Grid */}
              <div className="section-container">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-6
            justify-items-center
            w-full
          "

          
        >
          {insightsData.map((item, index) => (
            <div
              key={index}
              className="
                border border-[#030923] border-opacity-50
                rounded-2xl
                overflow-hidden
                shadow-sm
                w-full
                max-w-xs
                flex flex-col
                bg-white
                min-h-[420px]
              "
              style={{
                minHeight: '420px',
                height: '100%',
              }}
            >
              <div className="bg-gray-200 h-40 sm:h-44 md:h-48 rounded-2xl w-full"></div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-sm text-gray-700 mb-2">{item.date}</p>
                <h2 className="text-lg sm:text-xl font-semibold text-[#030923] mt-2">{item.title}</h2>
                <p className="text-md text-gray-500 mt-2">By {item.author}</p>
                <p className="text-sm text-gray-700 mt-4">{item.category}</p>
                <hr className="mb-4 border-black mt-5 w-full" />
                <div className="text-gray-700 mt-3 text-md flex justify-between items-center w-full">
                  <span className="font-medium">Read Insight</span>
                  <button className="ml-auto hover:underline hover:bg-gray-200 p-1 rounded">
                    <img src="/assets/arrowupright.png" alt="arrow" className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;
