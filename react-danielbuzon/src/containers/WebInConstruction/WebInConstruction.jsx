import React, { useState, useEffect, useRef } from "react";
import { PrimaryButton } from "../../components";
import "./WebInConstruction.css";

import Pdf from "../../assets/files/danielbuzon_CV.pdf";
import video from "../../assets/images/mp4bg_2_c.mp4";

import { charReveal, elementReveal, textReveal } from "../../hooks/textReveal";

export default function WebInConstruction(props) {
    const card = useRef();
    const h1 = useRef();
    const h2 = useRef();
    const h3 = useRef();
    const buttons = useRef();

    useEffect(() => {
        elementReveal(card.current, card.current);
        setTimeout(() => {
            elementReveal(h3.current, h3.current);
            charReveal(h1.current, h1.current, true, false, false, false);
            textReveal(
                h2.current.childNodes[0],
                h2.current,
                true,
                false,
                false,
                false
            );
            textReveal(
                h2.current.childNodes[1],
                h2.current,
                true,
                false,
                false,
                false
            );

            setTimeout(() => {
                elementReveal(buttons.current, buttons.current);
            }, 350);
        }, 200);
    }, []);

    return (
        <>
            <div className="fixed top-0 right-0 w-full h-full">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="h-screen grid place-content-center text-white px-2 md:px-0">
                <div
                    ref={card}
                    className="card px-9 py-10 sm:p-10 md:p-20 backdrop-blur-2xl rounded-[30px] opacity-0"
                >
                    <h3 ref={h3} className="text-slate-300 mb-2 opacity-0">
                        Hi!
                    </h3>
                    <div className="mb-2">
                        <h1 ref={h1} className="inline font-bold md:ml-[-4px]">
                            Daniel Here.
                        </h1>
                        {/* <span className="text-slate-400 annotation">
                            (obviously)
                        </span> */}
                    </div>
                    <h2 ref={h2} className="text-slate-200 mb-12">
                        <div>
                            Right now the website is{" "}
                            <span className="font-bold text-white">
                                under construction.
                            </span>
                        </div>
                        <div>But make sure to check it once in a while :)</div>
                    </h2>
                    <div ref={buttons} className="sm:space-y-4 opacity-0">
                        <div className="space-x-0 sm:space-x-4 space-y-2 sm:space-y-0 mb-2 sm:mb-0">
                            <a href={Pdf} target="_blank">
                                <PrimaryButton>RESUME</PrimaryButton>
                            </a>
                            <a
                                href="https://github.com/dencs08"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <PrimaryButton>GITHUB</PrimaryButton>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/danielbuzon/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                            >
                                <PrimaryButton className="w-full sm:w-auto">
                                    LINKEDIN
                                </PrimaryButton>
                            </a>
                        </div>
                        <div className="space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
                            <a
                                href="https://buzon.studio/start"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <PrimaryButton>BRAND WEBSITE</PrimaryButton>
                            </a>

                            <a href="mailto:daniel.buzon08@gmail.com?subject=Hej Daniel!&body=Wiadomość">
                                <PrimaryButton>Email Me</PrimaryButton>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
