import React from 'react'
import './Button.css'

interface ButtonProps {
    label: string;
    variant?: string;
    size?: string;
    borderRadius?: string;
}

const Button: React.FC<ButtonProps>= (props: ButtonProps) =>{
    let propValues= Object.keys(props).map((propKey: string) =>{
        if(propKey === "borderRadius" && props["borderRadius" as keyof typeof props]==="true") {
            return "borderRadius"
        } else if(propKey!=="label"){
            return props[propKey as keyof typeof props]
        } else{
            return ""
        }
    });

    return <button className={propValues.join(" ")}>{props.label}</button>
}

export default Button