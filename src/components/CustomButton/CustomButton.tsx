import React, { Children } from 'react'
import classes from './CustomButton.module.css'
import { JsxElement } from 'typescript'

type CustomButtonProps = {
    bgColor?: string
    children: string
}

const CustomButton = ({ bgColor = "#FCB72B", children}:CustomButtonProps) => {
    return (
        <button type="button" className={classes.custom_btn} style={{ backgroundColor: bgColor }}>
            {children}
        </button>
    )
}

export default CustomButton