import React, { Component } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import Floor from "./Floor";
import Navigation from "../Navigation/Navigation";
import Svg from "./Svg";
import { ReactComponent as ZoomInSvg } from "./../../images/map-icons/zoom-in.svg";
import { ReactComponent as ZoomOutSvg } from "./../../images/map-icons/zoom-out.svg";
import ModalMap from "./ModalMap";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: true,
            limitToBounds: false,
            //limitToBounds: true,
            panningEnabled: true,
            transformEnabled: true,
            pinchEnabled: true,
            limitToWrapper: false,
            disabled: false,
            dbClickEnabled: false,
            lockAxisX: false,
            lockAxisY: false,
            velocityEqualToMove: true,
            enableWheel: true,

            enableTouchPadPinch: true,
            enableVelocity: true,
            limitsOnWheel: false,
            // my settings
            mouseDownEvent: false,
            mouseMoveEvent: false,
            mouseUpEvent: false,
            //svgWidth: null,
            svgWidth: "",
            svgHeight: "",
            positionSvgLeft: null,
            visibilityFloor: 1,
            // floor
            svgJson: [{ floor: 0 }, { floor: 1 }],
            floorList: [],
            newModalData: "",
        };
        this.getClickOrDrag = this.getClickOrDrag.bind(this);
        this.pathClick = this.pathClick.bind(this);
        this.positionElement = this.positionElement.bind(this);
        this.onHoverPath = this.onHoverPath.bind(this);

        this.createDataForModal = this.createDataForModal.bind(this);
        this.showSmallLogo = this.showSmallLogo.bind(this);
        this.handleLegend = this.handleLegend.bind(this);
    }

    componentDidMount() {
        this.getClickOrDrag();
        this.pathClick();
        this.onHoverPath();

        var floorList = [];
        this.state.svgJson.map((floor) => floorList.push(floor.floor));

        document.querySelector("body").addEventListener("touchend", (e) => {
            this.showSmallLogo();
        });

        this.setState({
            floorList: floorList.sort(),
        });
    }

    showSmallLogo() {
        setTimeout(function () {
            let reactTransformElement = document.querySelector(
                ".react-transform-element"
            );
            let smallImg = document.querySelectorAll(".smallImg");
            smallImg = [...smallImg];

            let getTransform = reactTransformElement.style.transform;
            let scaleValuePosition = getTransform.indexOf("scale");
            let scaleString = getTransform.substring(scaleValuePosition, 55);
            let scaleValue = scaleString.replace("scale(", "").replace(")", "");
            if (scaleValue > 1.3) {
                smallImg.map((img) => img.classList.add("addedScale"));
            }
            if (scaleValue <= 1.3) {
                smallImg.map((img) => img.classList.remove("addedScale"));
            }
        }, 500);
    }

    componentWillMount() {
        this.positionElement();
    }

    handleLegend(index) {
        const buttons = Array.from(
            document.querySelectorAll(".map__legend-button")
        ),
            services = Array.from(document.querySelectorAll(`[data-type]`)),
            activeService = Array.from(
                document.querySelectorAll(`[data-type="${index}"]`)
            ),
            activeButton = buttons[index];

        this.props.resetCategoryStyles();
        /* TODO: MIV 2022 */
        /*   activeButton.classList.contains("active")
              ? (activeButton.classList.remove("active"),
                  services.map((icon) => icon.classList.remove("active")))
              : (buttons.map((button) => button.classList.remove("active")),
                  services.map((icon) => icon.classList.remove("active")),
                  activeButton.classList.add("active"),
                  activeService.map((icon) => icon.classList.add("active"))); */
    }

    componentDidUpdate() {
        let pathPlaceForSvh;
        let activeShop;
        var arrayOfPathPlace;

        if (this.props.resolveSearchMap) {
            pathPlaceForSvh = document.querySelectorAll(
                ".map__wrap svg g[data-place]"
            );

            arrayOfPathPlace = Array.from(pathPlaceForSvh);
            arrayOfPathPlace.map((path) => path.classList.remove("active"));

            activeShop = arrayOfPathPlace.filter(
                (place) =>
                    place.dataset.place ==
                    this.props.resolveSearchMap.field_shop_location_on_map
            );
            /* exe 25 */
            if (activeShop[0] !== undefined) {
                activeShop[0].classList.add("active");
            }
        }
    }

    /* add event listener on paths svg and  return active path */
    onHoverPath() {
        const paths = Array.from(
            document.querySelectorAll(".map__wrap svg g[data-place]")
        );

        const tooltipWrapper = document.querySelector(".map__tooltip-wrapper");

        paths.map((path) => {
            // at every path set addEventListener for hover
            path.addEventListener("mouseover", (e) => {
                tooltipWrapper.classList.add("hover");
                // find hover path
                let shopHover = this.props.list.filter(
                    (shop) =>
                        path.dataset.place == shop.field_shop_location_on_map
                );
                // find position path

                let hoverPath = document.querySelector(
                    `.map__wrap svg g[data-place="${shopHover[0].field_shop_location_on_map}"] [data-popup]`
                );

                var hoverPathPosition = hoverPath.getBoundingClientRect();
                var tooltipWrapperPosition =
                    tooltipWrapper.getBoundingClientRect();

                /* set position for tooltip */
                tooltipWrapper.setAttribute(
                    "style",
                    `top : ${hoverPathPosition.top - tooltipWrapperPosition.top + 10
                    }px; left:${hoverPathPosition.left}px;`
                );

                const listOfOpenHours =
                    shopHover[0].field_opening_hours_export.map(
                        (open, key) =>
                            ` <li key="key">
          ${open.label} ${open.value}
          </li>`
                    );
                const createString = listOfOpenHours.join(" ");

                /*    let markup = `
          <div class="map__tooltip">
          <p class="title">${shopHover[0].title}</p>
          </div>
          `; */
                let markup = `
            <div class="map__tooltip">
              <p class="title">${shopHover[0].title}</p>
                ${createString &&
                    `
                  <ul class="open">
                  ${createString}
                  </ul>
                  <div class="map__tooltip-img">
                    <img src="${shopHover[0].field_shop_logo}" alt="${shopHover[0].title}">
                  </div>
                  `
                    }
            </div>
          `;

                tooltipWrapper.innerHTML = markup;
            });

            path.addEventListener("wheel", (e) => {
                // at every path set addEventListener for end hover
                // and hide text data
                this.showSmallLogo();
                tooltipWrapper.innerHTML = "";
                tooltipWrapper.classList.remove("hover");
                tooltipWrapper.removeAttribute("style");
            });

            // at every path set addEventListener for end hover
            // and hide text data
            path.addEventListener("mouseout", () => {
                tooltipWrapper.innerHTML = "";
                tooltipWrapper.classList.remove("hover");
                tooltipWrapper.removeAttribute("style");
            });
        });
    }

    getClickOrDrag() {
        const tooltipWrapper = document.querySelector(".map__tooltip-wrapper");
        const svgComponent = document.querySelector(".map__wrapper");

        let isDown = false;
        let startX;
        let scrollLeft;

        svgComponent.addEventListener("mousedown", (e) => {
            let mouseDownEvent = this.state.mouseDownEvent;
            isDown = true;
            startX = e.pageX - svgComponent.offsetLeft;
            scrollLeft = svgComponent.scrollLeft;
            document.getElementById("page").classList.add("grabbing");

            // hide popup
            tooltipWrapper.innerHTML = "";
            tooltipWrapper.classList.remove("hover");
            tooltipWrapper.removeAttribute("style");

            this.setState({
                mouseDownEvent: true,
            });
        });
        svgComponent.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const walk = "(x - startX) * 3"; //scroll-fast
            svgComponent.scrollLeft = scrollLeft - walk;

            this.setState({
                mouseMoveEvent: true,
            });
        });

        svgComponent.addEventListener("mouseup", (e) => {
            let mouseUpEvent;
            document.getElementById("page").classList.remove("grabbing");
            isDown = false;
            this.state.mouseDownEvent && this.state.mouseMoveEvent
                ? (mouseUpEvent = true)
                : (mouseUpEvent = false);

            this.setState({
                mouseMoveEvent: false,
                mouseDownEvent: false,
                mouseUpEvent,
            });
        });
    }

    toggleSetting(type) {
        this.setState((p) => ({ [type]: !p[type] }));
    }
    // on click at path, take data-place and use for modal
    pathClick() {
        const paths = Array.from(
            document.querySelectorAll(".map__wrap svg.platform g")
        );

        let exist;
        const shopModal = document.querySelector(".shop-modal");
        paths.map((path) =>
            path.addEventListener("click", () => {
                const onClickSvg = this.state.mouseUpEvent;

                exist = this.props.list.filter(
                    (shop) =>
                        shop.field_shop_location_on_map == path.dataset.place
                );

                if (!onClickSvg && path.dataset.place && exist[0]) {
                    shopModal.classList.add("open");
                    this.createDataForModal(path.dataset.place);
                }
            })
        );
    }

    createDataForModal(shopId) {
        const list = this.props.list;
        const category = this.props.category;
        const modalData = [];

        let selectedShop = list.filter(
            (l) => l.field_shop_location_on_map == shopId
        );

        let newModalData = {
            ...selectedShop,
        };

        this.setState({
            newModalData,
        });
    }

    positionElement() {
        // width wrapper
        const map = document.querySelector(".map");

        // width svg will be same as container on page
        let svgWidth = document
            .querySelector(".skip-link")
            .getBoundingClientRect().width;

        if (svgWidth > 575 && svgWidth < 1500) {
            svgWidth += 500;
        }

        // position svg from left
        let mapWapperWidth = document
            .querySelector(".skip-link")
            .getBoundingClientRect().width;
        let positionSvgLeft = (mapWapperWidth - svgWidth) / 2;

        // height svg
        let headerHeight = document
            .querySelector(".header")
            .getBoundingClientRect().height;
        let windowHeight = window.innerHeight;
        let svgHeight = windowHeight - headerHeight - 100;

        this.setState({
            svgWidth,
            svgHeight,
            positionSvgLeft,
        });
    }

    render() {
        const {
            type,
            limitToBounds,
            panningEnabled,
            transformEnabled,
            pinchEnabled,
            limitToWrapper,
            disabled,
            dbClickEnabled,
            lockAxisX,
            lockAxisY,
            velocityEqualToMove,
            enableWheel,
            enableTouchPadPinch,
            enableVelocity,
            limitsOnWheel,
            // floor
            floorList,
            newModalData,
        } = this.state;
        /*   const { category, onFilteredShops, onSelectCategory, list } = this.props; */
        const {
            legend,
            activeFloor,
            selectFloor,
            list,
            resolveSearchMap,
            idIncommingShop,
        } = this.props;

        return (
            <div className="body">
                <section>
                    <div className="row align-items-center">
                        <div className="col-lg-12 order-lg-2 example">
                            <TransformWrapper
                                options={{
                                    limitToBounds,
                                    transformEnabled,
                                    disabled,
                                    limitToWrapper,
                                    minScale: -1,
                                }}
                                pan={{
                                    disabled: !panningEnabled,
                                    lockAxisX,
                                    lockAxisY,
                                    velocityEqualToMove,
                                    velocity: enableVelocity,
                                }}
                                zoomIn={{
                                    step: 20,
                                }}
                                zoomOut={{
                                    step: 20,
                                }}
                                pinch={{ disabled: !pinchEnabled }}
                                doubleClick={{ disabled: !dbClickEnabled }}
                                wheel={{
                                    wheelEnabled: enableWheel,
                                    touchPadEnabled: enableTouchPadPinch,
                                    limitsOnWheel,
                                    step: 200,
                                }}
                            //  defaultScale={1.01}
                            //  defaultPositionX={0}
                            //  defaultPositionY={0}
                            //  options={{
                            //    limitToWrapper: true,
                            //  }}
                            >
                                {({
                                    zoomIn,
                                    zoomOut,
                                    resetTransform,
                                    setDefaultState,
                                    positionX,
                                    positionY,
                                    scale,
                                    setPositionX,
                                    setPositionY,
                                    setScale,
                                    previousScale,
                                    onZoomChange,

                                    options: {
                                        limitToBounds,
                                        transformEnabled,
                                        disabled,
                                    },
                                    ...rest
                                }) => (
                                    <React.Fragment>
                                        <ModalMap
                                            newModalData={newModalData}
                                        ></ModalMap>

                                        <div className="container map__functionality">
                                            <div className="map__functionality-wrapper">
                                                <div className="map__legend">
                                                    <p className="map__legend-title">
                                                        {activeFloor == 0
                                                            ? "Přízemí"
                                                            : activeFloor +
                                                            ".PATRO"}
                                                    </p>
                                                    <ul>
                                                        {legend &&
                                                            legend.map(
                                                                (l, index) => (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        <button
                                                                            type="button"
                                                                            className="map__legend-button"
                                                                            data-legend={
                                                                                index
                                                                            }
                                                                            onClick={() =>
                                                                                this.handleLegend(
                                                                                    index
                                                                                )
                                                                            }
                                                                        >
                                                                            <img
                                                                                src={
                                                                                    l.field_image
                                                                                }
                                                                                alt={
                                                                                    l.name
                                                                                }
                                                                            />
                                                                            <p>
                                                                                {
                                                                                    l.name
                                                                                }
                                                                            </p>
                                                                        </button>
                                                                    </li>
                                                                )
                                                            )}
                                                    </ul>
                                                </div>
                                                {/*  <div className="map__info">
                          <span className="badge badge-secondary">
                            Position x : {positionX}px
                          </span>
                          <span className="badge badge-secondary">
                            Position y : {positionY}px
                          </span>
                          <span className="badge badge-secondary">
                            Scale : {scale}
                          </span>
                          <span className="badge badge-secondary">
                            Previous scale : {previousScale}
                          </span>
                        </div> */}
                                                <div className="main-functions">
                                                    <div
                                                        className="map__tools"
                                                        onClick={
                                                            this.showSmallLogo
                                                        }
                                                    >
                                                        <div
                                                            className="zoom-in"
                                                            onClick={zoomIn}
                                                            data-testid="zoom-in-button"
                                                        >
                                                            <ZoomInSvg />
                                                        </div>
                                                        <div
                                                            className="zoom-out"
                                                            onClick={zoomOut}
                                                            data-testid="zoom-out-button"
                                                        >
                                                            <ZoomOutSvg />
                                                        </div>

                                                        {/*    <button
                              className="reset"
                              onClick={setDefaultState}
                              onClick={() => {
                                setPositionX(900);
                                setPositionY(500);
                                setScale(1.4);
                              }}
                              data-testid="reset-button"
                              >
                              set
                            </button> */}
                                                        {/*     <button
                              className="reset"
                              onClick={setDefaultState}
                              data-testid="reset-button"
                            >
                              X
                            </button>  */}
                                                    </div>
                                                    <Floor
                                                        floorList={floorList}
                                                        activeFloor={
                                                            activeFloor
                                                        }
                                                        selectFloor={
                                                            selectFloor
                                                        }
                                                        numberActiveShopOnFloor={
                                                            this.props
                                                                .numberActiveShopOnFloor
                                                        }
                                                    ></Floor>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="map__wrapper">
                                            <div className="container pos--relative"></div>
                                            <div className="map__tooltip-wrapper"></div>
                                            <TransformComponent>
                                                <div className="map__wrap">
                                                    {/*    <img src={Road} /> */}

                                                    <Svg
                                                        activeFloor={
                                                            activeFloor
                                                        }
                                                        svgWidth={
                                                            this.state.svgWidth
                                                        }
                                                        svgHeight={
                                                            this.state.svgHeight
                                                        }
                                                        list={list}
                                                        idIncommingShop={
                                                            idIncommingShop
                                                        }
                                                    ></Svg>
                                                </div>
                                            </TransformComponent>
                                        </div>
                                    </React.Fragment>
                                )}
                            </TransformWrapper>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
