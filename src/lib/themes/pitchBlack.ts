// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const pitchBlack: Record<string, any> = {
  'code[class*="language-"]': {
    color: '#d4d4d4',
    background: '#000000',
    textShadow: 'none',
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: '14px',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    tabSize: 4,
    hyphens: 'none' as const,
  },
  'pre[class*="language-"]': {
    color: '#d4d4d4',
    background: '#000000',
    textShadow: 'none',
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: '14px',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    tabSize: 4,
    hyphens: 'none' as const,
    padding: '1em',
    margin: '0',
    overflow: 'auto',
    borderRadius: '0.3em',
  },
  ':not(pre) > code[class*="language-"]': {
    background: '#000000',
    padding: '.1em',
    borderRadius: '.3em',
    whiteSpace: 'normal',
  },
  comment: {
    color: '#6a9955',
    fontStyle: 'italic',
  },
  prolog: {
    color: '#6a9955',
  },
  doctype: {
    color: '#6a9955',
  },
  cdata: {
    color: '#6a9955',
  },
  punctuation: {
    color: '#d4d4d4',
  },
  '.namespace': {
    opacity: 0.7,
  },
  property: {
    color: '#9cdcfe',
  },
  tag: {
    color: '#569cd6',
  },
  boolean: {
    color: '#569cd6',
  },
  number: {
    color: '#b5cea8',
  },
  constant: {
    color: '#569cd6',
  },
  symbol: {
    color: '#569cd6',
  },
  deleted: {
    color: '#ce9178',
  },
  selector: {
    color: '#d7ba7d',
  },
  'attr-name': {
    color: '#92c5f7',
  },
  string: {
    color: '#ce9178',
  },
  char: {
    color: '#ce9178',
  },
  builtin: {
    color: '#ce9178',
  },
  inserted: {
    color: '#ce9178',
  },
  operator: {
    color: '#d4d4d4',
  },
  entity: {
    color: '#ce9178',
    cursor: 'help',
  },
  url: {
    color: '#ce9178',
  },
  '.language-css .token.string': {
    color: '#ce9178',
  },
  '.style .token.string': {
    color: '#ce9178',
  },
  variable: {
    color: '#9cdcfe',
  },
  atrule: {
    color: '#ce9178',
  },
  'attr-value': {
    color: '#ce9178',
  },
  function: {
    color: '#dcdcaa',
  },
  'class-name': {
    color: '#4ec9b0',
  },
  keyword: {
    color: '#569cd6',
  },
  regex: {
    color: '#d16969',
  },
  important: {
    color: '#569cd6',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
};

