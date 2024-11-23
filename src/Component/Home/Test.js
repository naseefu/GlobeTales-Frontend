import React, { useState } from 'react';

function StoryEditor() {
  const [content, setContent] = useState('');

  const handleContentChange = (event) => {
    // Replace newline characters with <br> tags
    const text = event.target.value;
    setContent(text);
  };

  return (
    <div>
      <textarea
        value={content}
        className={`aitext w-full text-[15px] min-h-[300px] leading-[1.8] bg-gray-950 p-4 text-left border-l border-r border-b border-gray-900 focus:outline-none flex flex-col`}
        onChange={handleContentChange}
        aria-label="Story content"
        role="textbox"
      />

      {/* Render the content with <br> replacing the newlines */}
      <div 
        className="story-preview mt-4 p-4 bg-gray-800 text-white"
        dangerouslySetInnerHTML={{
          __html: content.replace(/\n/g, '<br />') // Convert new lines to <br> tags
        }}
      />
    </div>
  );
}

export default StoryEditor;
