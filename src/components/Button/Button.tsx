import React from 'react'
import './Button.css'

interface ButtonProps {
    label: string;
    variant?: string
    size?: string
    "border-radius"?: string
}

const Button= (props: ButtonProps) =>{
    let propValues= Object.keys(props).map((propKey: string) =>{
        if(propKey === "border-radius" && props["border-radius" as keyof typeof props]==="true") {
            return "border-radius"
        } else if(propKey!=="label"){
            return props[propKey as keyof typeof props]
        } else{
            return ""
        }
    });

    return <button className={propValues.join(" ")}>{props.label}</button>
}

export default Button