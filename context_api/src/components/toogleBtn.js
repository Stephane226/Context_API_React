import React, {Component, useState,setState} from 'react'
import {ThemeContext} from '../context/themeContext'

class ToogleBtn extends Component{

    static contextType = ThemeContext
    
    render(){
      
        return (
       
             <button onClick={this.context.toggleClick}>
                Change Theme
             </button>
      )
    }
   
}

export default ToogleBtn



