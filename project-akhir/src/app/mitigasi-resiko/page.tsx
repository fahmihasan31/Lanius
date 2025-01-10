import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Page = () => {
  const questions = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur. Nunc augue arcu in at adipiscing lacus facilisis. Dolor odio eu nullam sem dignissim.",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur. Nunc augue arcu in at adipiscing lacus facilisis. Dolor odio eu nullam sem dignissim.",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur. Nunc augue arcu in at adipiscing lacus facilisis. Dolor odio eu nullam sem dignissim.",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet consectetur. Nunc augue arcu in at adipiscing lacus facilisis. Dolor odio eu nullam sem dignissim.",
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet consectetur. Nunc augue arcu in at adipiscing lacus facilisis. Dolor odio eu nullam sem dignissim.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      {/* Main Content */}
      <main className=" bg-gray-100 mb-8">
        <div className="mb-6">
          <h1 className="bg-green-700 text-center text-3xl font-bold text-white p-6">
            Mitigasi Resiko
          </h1>
        </div>

        {/* Questions Section */}
        <div className="max-w-4xl mx-auto space-y-6">
          {questions.map((question) => (
            <div
              key={question.id}
              className="bg-white shadow-md rounded-md p-6 flex flex-col space-y-4"
            >
              <p className="text-gray-600 text-center">{question.text}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Setuju</span>
                <div className="flex items-center space-x-4">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    className="w-5 h-5 text-green-700"
                  />
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    className="w-5 h-5 text-green-700"
                  />
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    className="w-5 h-5 text-green-700"
                  />
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    className="w-5 h-5 text-green-700"
                  />
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    className="w-5 h-5 text-green-700"
                  />
                </div>
                <span className="text-gray-600">Tidak Setuju</span>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="max-w-4xl mx-auto text-center mt-8">
          <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition duration-200">
            Cek Resiko
          </button>
        </div>
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Page;
