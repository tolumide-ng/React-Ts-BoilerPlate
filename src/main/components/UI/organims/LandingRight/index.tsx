import * as React from "react";
import { Button } from "../../atoms/Button";
import alert from "../../../../assets/images/alert.svg";
import downSmall from "../../../../assets/images/downarrowSmall.svg";
import "./index.css";
import { ProductTab } from "../ProductRoutes";

export const LandingRight = () => {
    return (
        <article className="ldr">
            <section className="ldr-location">
                <p className="ldr-location--text">Home</p>
                <p className="ldr-location--text ldr-dot"></p>
                <p className="ldr-location--text">Engagement rings</p>
            </section>

            <section className="ldr-product-info">
                <h2 className="ldr-productname">
                    18k Rose Gold Classic Wedfit
                </h2>
                <div className="ldr-productinfos">
                    <p className="ldr-price">£569.00</p>
                    <p className="ldr-settingprice">(Setting Price)</p>
                </div>
            </section>

            <section className="ldr-actions">
                <Button
                    buttonClass="ldr-button ldr-experience"
                    buttonText="Book Your Experience"
                    buttonTextClass="ldr-buttontext"
                />

                <Button
                    buttonClass="ldr-button ldr-choose"
                    buttonText="Choose A Diamond"
                    buttonTextClass="ldr-buttontext"
                />

                <Button
                    buttonText=""
                    buttonClass="ldr-button ldr-buttondrop"
                    buttonJsx={
                        <div className="ldr-buttoncont">
                            <p className="ldr-buttontext">Finger size</p>
                            <img
                                src={alert}
                                alt="alert icon"
                                className="ldr-alerticon"
                            />
                            <img
                                src={downSmall}
                                alt="icon showing down arrow"
                                className="ldr-downsmall"
                            />
                        </div>
                    }
                />

                <Button
                    buttonText=""
                    buttonClass="ldr-button ldr-buttondrop"
                    buttonJsx={
                        <div className="ldr-buttoncont">
                            <p className="ldr-buttontext">Add Engraving</p>
                            <img
                                src={alert}
                                alt="alert icon"
                                className="ldr-alerticon"
                            />
                            <img
                                src={downSmall}
                                alt="icon showing down arrow"
                                className="ldr-downsmall"
                            />
                        </div>
                    }
                />
            </section>

            <section>
                <ProductTab />
            </section>
        </article>
    );
};
