import * as React from "react";
import { LandingRight } from "../../UI/organims/LandingRight";
import "./index.css";

export const LandingPage = () => {
    return (
        <article className="ldpg">
            <article className="ldpg-cont">
                <article className="ldpg-left"></article>
                <article className="ldpg-right">
                    <LandingRight />
                </article>
            </article>
        </article>
    );
};
