import React from 'react'
import ReactMarkdown from 'react-markdown'


function ClaudeRecipe(props) {

  return (
    <div>
        <ReactMarkdown>       
             {props.recipe}
            </ReactMarkdown>

    </div>
  )
}

export default ClaudeRecipe
