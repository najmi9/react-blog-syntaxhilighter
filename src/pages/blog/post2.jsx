import React from 'react';

import content from '../../posts/post1.md';
import MarkDown from '../../components/markdown/markdown_parser';


const Post2 = () => {
    return (
         <div style={{ "margin":60 + "px"}}>
        	<MarkDown content={content} />
        </div>
    );
};

export default Post2;
