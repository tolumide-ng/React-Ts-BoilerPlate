import React from "react";

import placeholder from "../../../../assets/images/placeholder.svg";
import "./index.css";

interface LoadImgDef {
    loadDefaultImg?: string;
    loadImg: string;
    loadAlt: string;
    loadClass?: string;
    loadHeight?: string;
    loadWidth?: string;
    loadImgMob?: string;
    loadPictureClass?: string;
}

export function LoadImg(props: LoadImgDef) {
    return (
        <picture className={props.loadPictureClass}>
            <source
                media="(max-width: 745px)"
                srcSet={props.loadImgMob}
                className={props.loadClass}
            />

            <source
                media="(min-width: 745px)"
                srcSet={props.loadImg}
                className={props.loadClass}
            />
            <img
                className={props.loadClass}
                src={props?.loadDefaultImg ?? placeholder}
                data-src={props.loadImg}
                alt={props.loadAlt}
                height={props?.loadHeight}
                width={props?.loadWidth}
                loading="lazy"
            />
        </picture>
    );
}
