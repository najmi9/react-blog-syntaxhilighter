import React from 'react';

import content from '../../posts/post1.md';
import MarkDown from '../../components/markdown/markdown_parser';


const Post1 = () => {
    return (
         <div className="main">
        	<MarkDown content={content} />
        </div>
    );
};

export default Post1;