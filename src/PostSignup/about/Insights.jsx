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
    <>
      <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="max-w-md">
              <h2 className="text-4xl font-semibold text-gray-900 leading-snug mb-4">
              Insights
              </h2>
              <p className="max-w-4xl text-left text-gray-600 onest-regular" style={{fontSize: '20px'}}>
              Articles, guides, and interviews for <br /> clients and talent.
        </p>
            </div>
            {/* Placeholder image or graphic */}
            <div className="w-full md:w-1/2 h-40 md:h-48 bg-gray-300 rounded-xl"></div>
          </section>
</div>

          <div className="flex justify-center items-end gap-4">
            <div className="flex flex-col w-[450px]">
              <label className="text-sm font-medium text-[#313131] mb-1">Category</label>
              <select className="border border-[#313131] rounded-xl px-4 py-3 text-[#313131] bg-white">
                <option>Select a category</option>
              </select>
            </div>

            <div className="flex w-[450px] relative">
              <input
                type="search"
                placeholder="Search"
                className="border border-[#313131]  rounded-xl px-4 py-3 w-full text-[#313131]"
              />
              <button className="bg-[#313131] text-white rounded-full px-5   absolute right-0 mr-5 mt-[5px]  h-[40px]">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-3">


          <div className="flex flex-wrap justify-center gap-y-6">
            {insightsData.map((item, index) => (
              <div key={index} className="border border-#030923 border-opacity-50 rounded-2xl overflow-hidden shadow-sm w-[24%] h-[570px] p-5 m-2">
                <div className="bg-gray-200 h-56 rounded-3xl"></div>
                <div className="p-4">
                  <p className="text-sm text-black-700 mb-2">{item.date}</p>
                  <h2 className="text-2xl font-[#030923] font-semibold mt-4">{item.title}</h2>
                  <p className="text-md font-lg text-black-500 mt-2 ">By {item.author}</p>
                  <p className="text-sm text-gray-700 mt-4 ">{item.category}</p>
                  <hr className="mb-4 border-black mt-5 w-76 item-center" /> {/* Divider added here and color changed to black */}
                  <div className="text-black-600 mt-3 font-sm text-md flex justify-between items-center w-full">
                    <span>Read Insight</span>
                    <button className="ml-auto hover:underline hover:bg-gray-200 p-1 rounded">
                      <img src="/assets/arrowupright.png" alt="arrow" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </>
      );
};

      export default InsightsPage;
