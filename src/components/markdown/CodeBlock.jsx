import React from "react"
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import php from 'react-syntax-highlighter/dist/esm/languages/prism/php';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('php', php);
SyntaxHighlighter.registerLanguage('python', python);

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} showLineNumbers={true} style={dracula}>
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock