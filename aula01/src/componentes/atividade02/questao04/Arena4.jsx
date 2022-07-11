import React from 'react'
import Hero from './Hero4'
import Enemy from './Enemy4'

const Arena4 = (props) => {
    return (
        <div>
          {
              React.Children.map( 
                props.children,(pessoa) => {
                    return React.cloneElement(
                        pessoa,{arena:props.arena}
                    )
                }
              )
          } 
        </div>
    )
}
export default Arena4