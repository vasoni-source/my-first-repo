import React, { useState } from 'react';
import { Play, Terminal, Code, ChevronDown } from 'lucide-react';
import axios from 'axios';
export default function CodeEditor() {
  const [language, setLanguage] = useState("cpp");
  const [code, setCode] = useState("console.log('Hello World');");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const languages = [
    { value: "javascript", label: "JavaScript", icon: "JS" },
    { value: "python", label: "Python", icon: "PY" },
    { value: "cpp", label: "C++", icon: "C++" },
    { value: "java", label: "Java", icon: "JV" },
  ];

  const runCode = async () => {
    setLoading(true);
    setOutput("");

  
    try {
      const res = await axios.post(
        "https://ce.judge0.com/submissions/?base64_encoded=false&wait=true",
        {
          source_code: code,
          language_id: getLanguageId(language),
        },
        {
          headers: {
            "X-RapidAPI-Key": "968e77ed3cmsh07f4ef5624380e1p1fc76ejsn522c24d262d0",
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
            "Content-Type": "application/json"
          },
        }
      );
      setOutput(
        res.data.stdout ||
        res.data.stderr ||
        res.data.compile_output ||
        "No output"
      );
    } catch (error) {
      setOutput("Error: " + error.message);
    }
    setLoading(false);
    
  };

  const getLanguageId = (lang) => {
    switch (lang) {
      case "javascript": return 63;
      case "python": return 71;
      case "cpp": return 54;
      case "java": return 62;
      default: return 63;
    }
  };

  return (
    <div className="h-screen bg-gray-950 flex flex-col">
      <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Code className="w-6 h-6 text-blue-500" />
            <h1 className="text-xl font-bold text-white">Code Editor</h1>
          </div>
          {/* <div className="text-sm text-gray-400">
            Practice coding in multiple languages
          </div> */}
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col border-r border-gray-800">
          <div className="bg-gray-900 border-b border-gray-800 px-6 py-4">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-400">Language:</label>
              <div className="relative">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="appearance-none bg-gray-800 border border-gray-700 text-white px-4 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent cursor-pointer hover:bg-gray-750 transition-colors"
                >
                  {languages.map((lang) => (
                    <option key={lang.value} value={lang.value}>
                      {lang.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              
              <div className="flex gap-2 ml-auto">
                {languages.map((lang) => (
                  <button
                    key={lang.value}
                    onClick={() => setLanguage(lang.value)}
                    className={`
                      px-3 py-1.5 rounded-lg text-xs font-semibold transition-all
                      ${language === lang.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                      }
                    `}
                  >
                    {lang.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          
          <div className="flex-1 bg-gray-950">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full bg-gray-950 text-gray-100 p-6 font-mono text-sm focus:outline-none resize-none"
              placeholder="Write your code here..."
              spellCheck="false"
              style={{
                fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
                lineHeight: "1.6",
                tabSize: 4
              }}
            />
          </div>
        </div>

        <div className="w-full lg:w-2/5 flex flex-col bg-gray-900">
         
          <div className="bg-gray-900 border-b border-gray-800 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-green-500" />
                <h2 className="text-lg font-semibold text-white">Output</h2>
              </div>
              <button
                onClick={runCode}
                disabled={loading}
                className={`
                  flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all
                  ${loading
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-900/30'
                  }
                `}
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                    Running...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Run Code
                  </>
                )}
              </button>
            </div>
          </div>

          
          <div className="flex-1 overflow-y-auto bg-gray-950 p-6">
            {output ? (
              <pre className="font-mono text-sm text-green-400 whitespace-pre-wrap break-words">
                {output}
              </pre>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-gray-600">
                  <Terminal className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">Click "Run Code" to see output</p>
                </div>
              </div>
            )}
          </div>

         
          {output && (
            <div className="bg-gray-900 border-t border-gray-800 px-6 py-3">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Execution completed
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}