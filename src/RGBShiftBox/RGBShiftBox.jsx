import './RGBShiftBox.css'

import react, {Component} from 'react';

const RGBShiftBox = props => (
    <div>
        <div className="Header_SubText_1">
            <div className="TitleBox__Outline_1">
                <div className="TitleBox__Inline_1">
                    {props.children}
                </div>
            </div>
            <div className="TitleBox__Outline_2">
                <div className="TitleBox__Inline_2">
                    {props.children}
                </div>
            </div>
            <div className="TitleBox__Outline_3">
                <div className="TitleBox__Inline_3">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
)

export default RGBShiftBox