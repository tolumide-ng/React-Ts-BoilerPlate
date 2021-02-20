import * as React from "react";
import "./index.css";
import promo from "../../../../assets/images/promo.jpeg";

export const ProductTab = () => {
    const { matches: motionOk } = window.matchMedia(
        "(prefers-reduced-motion: no-preference)"
    );

    const tabGroup = React.useRef(null);
    const tabSection = React.useRef(null);
    const tabNav = React.useRef(null);
    const tabIndicator = React.useRef(null);

    const tabgroup = document.querySelector("snap-tabs");
    const tabsection = tabgroup?.querySelector(":scope > section");
    const tabnav: HTMLElement | undefined | null = tabgroup?.querySelector(
        ":scope nav"
    );
    const tabnavitems:
        | NodeListOf<HTMLAnchorElement>
        | undefined = tabnav?.querySelectorAll(":scope a");
    const tabindicator = tabgroup?.querySelector(":scope .snap-indicator");

    if (tabnavitems) {
        tabnavitems.forEach((navitem) => {
            navitem.animate(
                {
                    color: [...tabnavitems].map((item) => {
                        if (item === navitem) {
                            return `var(--text-active-color)`;
                        } else {
                            return `var(--text-color)`;
                        }
                    }),
                },
                {
                    duration: 1000,
                    fill: "both",
                    // timeline: "",
                }
            );
        });

        if (motionOk) {
            tabindicator?.animate(
                {
                    transform: [...tabnavitems].map(
                        ({ offsetLeft }) => `translateX(${offsetLeft}px)`
                    ),
                    width: [...tabnavitems].map(
                        ({ offsetWidth }) => `${offsetWidth}px`
                    ),
                },
                {
                    duration: 1000,
                    fill: "both",
                }
            );
        }

        const setActiveTab = (tabbtn: any) => {
            tabnav
                ?.querySelector(":scope a[active]")
                ?.removeAttribute("active");

            tabbtn.setAttribute("active", "");
            tabbtn.scrollIntoView();
        };

        const determineActiveTabSection = () => {
            if (tabsection) {
                const i = tabsection.scrollLeft / tabsection.clientWidth;
                const matchingNavItem = tabnavitems[i];

                matchingNavItem && setActiveTab(matchingNavItem);
            }

            tabnav?.addEventListener("click", (e) => {
                if (e.target) {
                    const eventTarget = e.target as HTMLElement;
                    if (eventTarget.nodeName === "A") return;
                    setActiveTab(eventTarget);
                }
            });
        };

        // tabsection?.addEventListener("scroll", () => {
        //     clearTimeout(Number(tabsection.scrollEndTimer));
        //     tabsection.scrollEndTimer = String(
        //         setTimeout(determineActiveTabSection, 100)
        //     );
        // });

        window.onload = () => {
            if (location.hash && tabsection)
                if (
                    document.querySelector(location.hash) instanceof HTMLElement
                ) {
                    const elem = document.querySelector(
                        location.hash
                    ) as HTMLElement;
                    tabsection.scrollLeft = Number(elem?.offsetLeft);
                }

            determineActiveTabSection();
        };
    }

    return (
        <>
            <section className="product-parent">
                <div className="product snap-tabs">
                    <header className="scroll-snap-x product-header">
                        <nav ref={tabNav} className="product-nav">
                            <a href="#product" id="product">
                                Product Details
                            </a>
                            <a href="#ring" id="ring">
                                Ring information
                            </a>
                            <a href="#finance" id="finance">
                                finance information
                            </a>
                            <a href="#shipping" id="shipping">
                                shipping & returns
                            </a>
                        </nav>

                        <div
                            className="product-indicator"
                            ref={tabIndicator}
                        ></div>
                    </header>

                    <section
                        className="product-cont scroll-snap-x "
                        ref={tabSection}
                    >
                        <article id="product" className="">
                            <p>
                                A four claw solitaire style engagement ring. The
                                ring is set in 18ct rose gold and features a
                                round brilliant diamond. This setting is
                                suitable for a round brilliant diamond between
                                0.18ct and 2.00ct. If you were to require this
                                design to feature a larger diamond, then please
                                do contact us. Reference: PRS0004
                            </p>
                        </article>
                        <article id="ring">
                            <p>
                                At Steven Stone presentation is very important,
                                so we ensure ever last detail is perfect when
                                you purchase diamonds or jewellery from us. All
                                of our jewellery is presented in high quality
                                boxes made from recycled materials. We provide
                                discreet packaging for all postage orders on
                                engagement rings.
                            </p>
                        </article>
                        <article id="finance">
                            <p>
                                At Steven Stone we give you the option of
                                spreading the cost of your jewellery over 12, 24
                                or 36 months making those larger purchase much
                                more affordable. As with every product at Steven
                                Stone, we believe in tailoring your experience
                                to meet your every need. Therefore, we have
                                introduced flexible deposits on our financing
                                options so you can decide an upfront cost that
                                suits you and your budget.
                            </p>
                        </article>
                        <article id="shipping">
                            <p>
                                Our shipping is fast & free. We use our fully
                                tracked and insured courier service to ensure
                                your item is safe. If you are not happy with
                                your ring then it can be returned within 30
                                days. Simply contact one of our customer service
                                team to organise a return or exchange. We also
                                offer free resizing if you happen to purchase
                                the incorrect ring size, we are always happy to
                                help.
                            </p>
                        </article>
                    </section>
                </div>
                <div className="product-promo">
                    <img src={promo} alt="" className="product-promo--img" />
                    <div className="product-promo-cont">
                        <p className="product-promo--text">
                            Purchase an engagement <br /> ring and recieve{" "}
                            <strong>10% off</strong>
                            <br />
                            your order*
                        </p>
                        <p className="product-promo--footer">
                            *Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum euis mod tellus justo.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};
