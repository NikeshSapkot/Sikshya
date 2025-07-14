import { useState } from 'react';

export default function useCodeRunner(initialCode = '') {
  const [code, setCode] = useState(initialCode);
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

  return { code, setCode, output, runCode };
}