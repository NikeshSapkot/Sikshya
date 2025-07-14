export default function OutputPanel({ output, error }) {
  return (
    <div className="output-panel bg-gray-800 text-gray-100 p-4 rounded-lg h-full overflow-auto">
      {error ? (
        <pre className="text-red-400">{error}</pre>
      ) : (
        <pre className="whitespace-pre-wrap">{output || 'Run code to see output...'}</pre>
      )}
    </div>
  );
}