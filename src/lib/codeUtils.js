export const formatCode = (code) => {
  // Simple code formatter
  return code
    .replace(/\b(function|if|else|for|while)\b/g, '\n$1')
    .replace(/{/g, ' {\n')
    .replace(/}/g, '\n}\n');
};

export const detectLanguage = (code) => {
  if (code.includes('console.log')) return 'javascript';
  if (code.includes('print(')) return 'python';
  if (code.includes('<html')) return 'html';
  return 'javascript';
};