import Editor from '@monaco-editor/react';

export default function CodeEditor({ code, language = 'javascript', onChange }) {
  return (
    <div className="code-editor-wrapper border rounded-lg overflow-hidden h-full">
      <Editor
        height="100%"
        defaultLanguage={language}
        value={code}
        onChange={onChange}
        theme="vs-light"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          scrollBeyondLastLine: false
        }}
      />
    </div>
  );
}