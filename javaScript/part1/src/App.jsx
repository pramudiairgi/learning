import React from "react";

// --- IMPORT KOMPONEN ---
// Karena file komponen Anda ada di folder 'src/component',
// kita harus mengimpornya dengan path relative './component/NamaFile'
import JavascriptPractice from "./component/JavascriptPractice";
import Notes from "./component/Note";
import Course from "./component/CourseTentangProps";
import Counter from "./component/MateriCounter";
import Shopper from "./component/MateriPassingState";
import ClickCounterDemo from "./component/conditionalRendering";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Kumpulan Materi Belajar React
        </h1>

        {/* Container untuk memberikan jarak antar materi */}
        <div className="space-y-6">
          {/* 1. Materi Javascript Dasar */}
          <JavascriptPractice />

          {/* 2. Materi List & Mapping */}
          <Notes />

          {/* 3. Materi Props */}
          <Course />

          {/* 4. Materi State & Event */}
          <Counter />

          {/* 5. Materi Lifting State Up */}
          <Shopper />

          {/* 6. Materi Conditional Rendering */}
          <ClickCounterDemo />
        </div>
      </div>
    </div>
  );
};

export default App;
