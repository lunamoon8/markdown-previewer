import { useState } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { marked } from 'marked';

const renderer = new marked.Renderer();

function App() {
	const [text, setText] = useState(placeholder);

	return (
		<div className="app">
			<h1 className="title">Markdown Previewer</h1>
			<div className="e-p-container">
				<Editor value={text} onChange={(e) => setText(e.target.value)} />
				<Previewer
					dangerouslySetInnerHTML={{
						__html: marked(text, { renderer: renderer }),
					}}
				/>
			</div>
		</div>
	);
}

const placeholder = `# My Markdown Previewer

Type of text that you can do. I used an ordered list:

1. Normal
2. _Italic_
3. **Bold**
4. **_Both_**

You can also do some code. I used an unordered list here:

- \`<div></div>\`
- \`<p></p>\`
- \`<h1></h1>\`

Multi-line code:

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

Other stuff that you can do are [links](https://github.com/) and
 > Block Quotes!

You can also do tables:

Header 1 | Header 2 | Header 3
------------ | ------------- | -------------
content 1 | content 2 | content 3
content 4 | content 5 | content 6

- You can also do lists
  - Some are bulleted.
     - Different indentation level.


You can also do images:

![Flowers Image](https://i.postimg.cc/PrkTDxP4/pexels-irina-iriser-1005711.jpg)

Created by lunamoon8`;

export default App;
