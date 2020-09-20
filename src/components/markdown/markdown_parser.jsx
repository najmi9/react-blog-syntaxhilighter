import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import CodeBlock from "./CodeBlock.jsx";

const MarkDownParser = ({content}) => {

	const [markdown, setMarkdown] = useState('');

	useEffect(()=>{

		fetch(content)
        .then(res=>res.text())
        .then(text=>{
            setMarkdown(text);
        })
        .catch(err=>{
            console.log(err)
        });

	}, [content]);

    return (
    	    <div className="container">
                <ReactMarkdown 
                source={markdown}
                 renderers={{ code: CodeBlock }}
                />
            </div>
       
    );
};

export default MarkDownParser;
