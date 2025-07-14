import { useState } from 'react';
import CodeEditor from '../components/playground/CodeEditor';
import OutputPanel from '../components/playground/OutputPanel';

export default function Playground() {
  const [code, setCode] = useState('// Write your code here\nconsole.log("Hello World!");');
  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      const originalConsole = console.log;
      let result = '';
      console.log = (msg) => (result += msg + '\n');
      new Function(code)();
      console.log = originalConsole;
      setOutput(result);
    } catch (error) {
      setOutput(error.toString());
    }
  };

  return (
    <div className="h-screen flex flex-col p-4 gap-4">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <CodeEditor code={code} onChange={setCode} />
        <OutputPanel output={output} />
      </div>
      <button 
        onClick={runCode}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
      >
        Run Code
      </button>
    </div>
  );
}