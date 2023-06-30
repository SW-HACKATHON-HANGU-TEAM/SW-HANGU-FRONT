import React from 'react'
import ReactMarkdown from 'react-markdown'
// import MarkdownDisplay from './MarkdownDisplay';

const mdData = `
> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |


dadawdwda

\`\`\`
dadawdad
DADADA
ADWDADAD
\`\`\`
`

const Test = () => {
    return <div>
        <ReactMarkdown children={mdData} />
    </div>
}

export default Test