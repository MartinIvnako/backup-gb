import React, { Component } from "react";

export default class Svg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // type: true,
    };
    this.addLogo = this.addLogo.bind(this);
  }

  componentDidMount() {
    this.addLogo();
  }
  addLogo() {
    // in all svgs find paths with data-place attr (paths for shops)
    let pathPlaceForSvh = document.querySelectorAll(
      ".map__wrap svg g[data-place]"
    );
    pathPlaceForSvh = pathPlaceForSvh ? pathPlaceForSvh : "";
    var arrayOfPathPlace = Array.from(pathPlaceForSvh);
    //
    const allShops = this.props.list;
    let freePlace = document.querySelector(".map__wrap");
    /* TODO: 2022 MIV */

    let bodyWidth = 1920;
    let headerHeight = 50;
    /*   let bodyWidth = document.querySelector("body").getBoundingClientRect()
        .width;
      let headerHeight = document.querySelector(".header").getBoundingClientRect()
        .height; */
    // for each path
    let urlLogo;
    let localiationShop;
    let logo;
    let moreData;
    let imgLogo;

    arrayOfPathPlace.map((place) => {
      logo = place.querySelector("[data-logo]");
      localiationShop = allShops.filter(
        (shop) => shop.field_shop_location_on_map == place.dataset.place
      );

      // check if array is filled or not
      if (
        typeof localiationShop !== "undefined" &&
        localiationShop.length > 0 &&
        logo !== null
      ) {
        // if array has field_shop_logo
        if (localiationShop[0].hasOwnProperty("field_shop_logo")) {
          logo = logo.getBoundingClientRect();

          /* check size logo and if he is toosmal, hide him */
          let tooSmallImg =
            logo.width > 20 && logo.width > 20 ? null : "smallImg";
          /* end check size */

          urlLogo = localiationShop[0].field_shop_logo;
          imgLogo = document.createElement("img");
          // img settings
          Object.assign(imgLogo, {
            className: `shop__logo ${tooSmallImg}`,
            src: urlLogo,
          });

          let fromLeft = logo.left + "px";
          let fromTop = logo.top - headerHeight + "px";

          Object.assign(imgLogo.style, {
            maxWidth: logo.width + "px",
            maxHeight: logo.height + "px",
            left: fromLeft,
            top: fromTop,
            display:
              this.props.activeFloor == localiationShop[0].field_floor
                ? "inline-block"
                : "none",
          });

          imgLogo.setAttribute(
            "data-platform",
            `${localiationShop[0].field_floor}`
          );
          freePlace.appendChild(imgLogo);
        }
      }
    });
  }
  render() {
    const { activeFloor, svgWidth, svgHeight } = this.props;
    return (
      <React.Fragment>

        {/*
        data-floor="2"
        className="platform"
        data-style={activeFloor == 1 ? true : false}



          data-floor="1"
          data-style={activeFloor == 0 ? true : false}
          className="platform"
          */}

        <svg
          data-floor="2"
          className="platform"
          data-style={activeFloor == 1 ? true : false}
          viewBox="0 0 1129.56 1062.075"
        >
          <defs>
            <filter
              id="Path_36"
              width="367.272"
              height="254.649"
              x="367.667"
              y="293.313"
              filterUnits="userSpaceOnUse"
            >
              <feOffset></feOffset>
              <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
              <feFlood floodOpacity="0.161"></feFlood>
              <feComposite in2="blur" operator="in"></feComposite>
              <feComposite in="SourceGraphic"></feComposite>
            </filter>
          </defs>
          <g id="patro" transform="translate(167.621 140.308)">
            <path
              id="Rectangle_8"
              fill="none"
              d="M0 0H779V617H0z"
              data-name="Rectangle 8"
            ></path>
            <path
              id="Rectangle_1"
              fill="none"
              d="M0 0H945V684H0z"
              data-name="Rectangle 1"
              opacity="0.28"
              transform="rotate(11 494.484 132.153)"
            ></path>
            <g
              id="Group_7"
              data-name="Group 7"
              transform="rotate(-123.99 636.409 493.268)"
            >
              <path
                id="Path_38"
                fill="#fff"
                d="M1238.068 131.537s-68.77-16.442-169.308-5.97-175.069 61.964-242.1 68.946c-20.209 2.1-39.733-1.81-57.612-8.929 40.321-50.6 80.422-95.782 104.216-108.889 61.789-34.037 65.83-122.72 65.83-122.72l-24.7 24.7s-2.074 31.732-23.44 58.418-27.114 18.654-62.023 48.327c-19.422 16.508-58.347 63.048-80.544 90.228-31.41-17.7-33.687-21.219-33.687-21.219l-11.918 19.8s23.335 18.789 29.2 21.725l-.1.123s-156.567 211.549-181.7 239.3-67.025 60.742-67.025 60.742v31.418c4.554-2.546 9.1-5.358 13.622-8.374.307.143 144.542 67.554 169.127 75.4 17.617 5.622 50.525 8.293 67.807 9.357l-3.051 11.239s9.339 8.728 24.088 19.9 18.851 9.426 18.851 9.426c12.567 1.222 32.029-5.5 32.029-5.5s-15.8 12.043-1.746 27.4c13.964 12.131 30.022 2.008 41.193 1.4 25.571.611 22.516 9.687 44.945 11.869s23.3-6.2 28.626-5.935c43.549 9.6 73.4 3.229 83.869-.611s34.647-12.305 73.222-18.763 37.876-23.04 39.447-35.171-3.316-37.964-35.433-36.393-42.85 28.276-53.5 39.884-19.025 8.465-52.713 7.243S929.211 641 912.8 644.753s-22.866-4.1-44.6-8.9-36.829-5.586-58.647-1.746-35.235 6.62-40.669 4.1c-14.313-6.632-32.2-25.483-32.2-25.483l2.875-8.461c3.409.18 5.416.257 5.416.257l.292.262c2.065 15.622 16.439 29.062 34.421 29.062a34.469 34.469 0 0024.953-10.654 149.432 149.432 0 0120.451-3.485c24.349-2.88 53.948 11.141 79.743 11.582s52.187-4.026 52.187-4.026 22.8-5.723 43.226-7.556 18.589-24.872 18.589-24.872l56.815-84.306-33.1-22.257s-77.035 117.873-82.272 124.191-6.264 5.547-13.055 7.432c-56.9 4.187-72.123-3.591-99.614-7.518-23.788-3.4-32.476-17.766-34.386-21.578a34.47 34.47 0 00-7.392-14.159l.149.129 66.91-99.2-6.567-4.43-66.238 98.2a34.417 34.417 0 00-20.4-6.661c-.28 0-.556.015-.835.021l-16.6-139.788s-6.545-38.488.524-48.437 24.761-36.233 24.761-36.233l74.966 66.5 37.727-47.813a49.4 49.4 0 01.786-19.637c2.618-10.734 12.043-21.207 12.043-21.207s-64.843-44.073-71.389-49.047c11.52-13.091 25.309-10.386 23.477-10.648-1.048 16.233 3.789 23.438 14.4 31.419s37.178 23.563 37.178 23.563l5.242-8.369s-25.309-15.709-37.178-23.04-10.822-26.182-10.822-26.182l212.248-40.494-11.365-67.844c81.192-9.578 145.536 3.373 145.536 3.373l54.141 5.315zm-196.537 479.79c14.313-15.185 28.276-31.243 54.982-19.374 0 0 12.916 5.914 12.916 25.134 0 12.218-5.062 21.993-17.8 27.055s-49.92 15.883-56.2 10.647-7.855-11.694-7.331-19.025c-.007 0-.88-9.251 13.433-24.437zM930.345 642.4s10.822-5.585 28.8-7.156 35.259-.873 47.128 3.142 19.112 13.178 9.687 23.476-48.436 14.138-65.891 11.08c0 0-22.5-2.012-30.894-13.266-7.68-10.298 11.17-17.276 11.17-17.276zm-103.5-5.585c24.436-1.571 33.687 3.142 43.113 5.062s14.836 4.712 28.1 7.854 12.567 18.153 4.712 22.342c-15.011 5.586-32.116-5.411-40.494-7.5s-11.171-4.015-34.211 1.745-28.393-14-21.12-22.342c5.931-6.816 19.895-7.165 19.895-7.165zm-13.114-31.452l9.269 6.488-11.534 1.068a34.3 34.3 0 002.26-7.56zm-34.035-32.747a26.65 26.65 0 11-26.65 26.65 26.65 26.65 0 0126.645-26.654zm80.863-232.2l-44.6-28.578.762-1.135 44.6 28.578zm12.631-20.13l-.762 1.135-44.684-28.565.762-1.135zm-17.458-71.568c-16.232 3.927-25.4 16.756-25.4 16.756S770.636 347.153 756.76 366s-6.807 39.534-6.807 39.534L770.924 565.8a34.616 34.616 0 00-25.424 28.282c-4.936.143-26.55.5-48.17-3.177-24.611-4.189-56.029-15.709-91.112-32.465-28.371-13.55-80.363-37.713-99.223-46.464 70.449-52.233 132.735-150.947 132.735-150.947s54.813-79.878 113.648-155.521c21.817 8.464 42.948 12.513 65.436 11.521 42.376-1.869 69.64-13.184 164.771-48.174a395.126 395.126 0 0180.243-19.972l10 58.982s-201.868 36.917-218.101 40.844z"
                data-name="Path 38"
              ></path>
            </g>
            <g
              id="Vrstva_124"
              data-name="Vrstva 124"
              transform="translate(306.899 177.319)"
            >
              <g id="legend-icon" transform="translate(0 177.637)">
                <path
                  id="Path_644-2"
                  fill="#ba3d8e"
                  d="M336.984 352.69a6.2 6.2 0 11-6.194 6.206 6.2 6.2 0 016.194-6.206z"
                  data-name="Path 644-2"
                  transform="translate(-330.79 -352.69)"
                ></path>
                <g
                  id="Group_466-2"
                  data-name="Group 466-2"
                  transform="translate(4.627 2.805)"
                >
                  <path
                    id="Path_640-2"
                    fill="#fff"
                    d="M341.982 363.885l-.1.4-.7.266a2.053 2.053 0 01-.612.091 1.206 1.206 0 01-.827-.26.833.833 0 01-.3-.663 2.984 2.984 0 010-.317 1.63 1.63 0 01.074-.369l.369-1.3c.034-.119.056-.238.079-.357a1.32 1.32 0 00.034-.3.488.488 0 00-.1-.351.566.566 0 00-.391-.1 1.034 1.034 0 00-.295.045l-.252.084.1-.4c.243-.1.47-.181.691-.252a2.081 2.081 0 01.623-.1 1.235 1.235 0 01.822.252.878.878 0 01.289.672v.323a2.384 2.384 0 01-.074.391l-.363 1.3a3.475 3.475 0 00-.084.357 2.55 2.55 0 00-.034.3.425.425 0 00.113.351.663.663 0 00.4.1 1.428 1.428 0 00.306-.045 2.079 2.079 0 00.244-.084zm.091-5.441a.771.771 0 01-.252.567.919.919 0 01-1.235 0 .748.748 0 010-1.134.918.918 0 011.235 0 .8.8 0 01.252.568z"
                    data-name="Path 640-2"
                    transform="translate(-338.953 -357.639)"
                  ></path>
                </g>
              </g>
            </g>
            <g
              id="no-entry_1_"
              data-name="no-entry (1)"
              transform="translate(618.907 254.613)"
            >
              <path
                id="Path_60"
                fill="#ea473b"
                d="M6.239 0a6.239 6.239 0 106.239 6.239A6.239 6.239 0 006.239 0zm0 10.85a4.611 4.611 0 114.611-4.611 4.611 4.611 0 01-4.611 4.611z"
                data-name="Path 60"
              ></path>
              <path
                id="Path_61"
                fill="#e03b36"
                d="M.532 6.254A6.239 6.239 0 016.5.022a6.238 6.238 0 100 12.465A6.239 6.239 0 01.532 6.254z"
                data-name="Path 61"
                transform="translate(0 -.015)"
              ></path>
            </g>
            <text
              id="Jeremiášova"
              fill="#acacac"
              fontFamily="ArialMT, Arial"
              fontSize="9"
              letterSpacing=".1em"
              transform="rotate(1 -32417.048 24559.265)"
            >
              <tspan x="0" y="8">
                Jeremiášova
              </tspan>
            </text>
            <g
              id="Group_34"
              data-name="Group 34"
              transform="rotate(11 432.254 288.625)"
            >
              <g
                id="legend-icon-2"
                data-name="legend-icon"
                transform="rotate(-12.04 912.376 -2691.96)"
              >
                <path
                  id="Path_644"
                  fill="#0cc3a5"
                  d="M484.109 144.19a6.135 6.135 0 11-4.355 1.81 6.135 6.135 0 014.355-1.81z"
                  data-name="Path 644"
                  transform="translate(-477.968 -144.19)"
                ></path>
              </g>
              <g
                id="Group_23"
                fill="#fff"
                data-name="Group 23"
                transform="rotate(-11 806.028 -2950.128)"
              >
                <path
                  id="Path_46"
                  d="M32.281 35.08l-.486-1.213h-1.968q-.045.082-.093.161l.679.672h.654v.453h-.84l-.754-.746a4.091 4.091 0 01-.615.635l.658.651h.654v.453h-.84l-.84-.831a4.09 4.09 0 01-.82.415l.674.667H29v.453h-.84l-.966-.955-.237.081a1.219 1.219 0 00-.825 1.153v.186a.615.615 0 00.615.615h2.567l.681-.374a.418.418 0 01.5.071l.3.3h1.868v-.89a5.268 5.268 0 00-.378-1.96z"
                  data-name="Path 46"
                  transform="translate(-25.758)"
                ></path>
                <path
                  id="Path_47"
                  d="M.83 350.134a.83.83 0 10.83.83.83.83 0 00-.83-.83z"
                  data-name="Path 47"
                  transform="translate(0 -311.778)"
                ></path>
                <path
                  id="Path_48"
                  d="M127.5 350.134a.83.83 0 10.83.83.83.83 0 00-.83-.83z"
                  data-name="Path 48"
                  transform="translate(-124.869 -311.778)"
                ></path>
                <path
                  id="Path_49"
                  d="M254.163 350.134a.83.83 0 10.83.83.83.83 0 00-.83-.83z"
                  data-name="Path 49"
                  transform="translate(-249.737 -311.778)"
                ></path>
                <path
                  id="Path_50"
                  d="M380.83 350.134a.83.83 0 10.83.83.83.83 0 00-.83-.83z"
                  data-name="Path 50"
                  transform="translate(-374.606 -311.778)"
                ></path>
              </g>
            </g>
            <g
              id="Group_33"
              data-name="Group 33"
              transform="rotate(11 432.254 288.625)"
            >
              <g
                id="legend-icon-3"
                data-name="legend-icon"
                transform="rotate(-12.04 665.736 -1905.547)"
              >
                <g data-type="5">
                  <path
                    id="Path_644-2-2"
                    fill="#ffbc00"
                    d="M484.109 144.19a6.135 6.135 0 11-4.355 1.81 6.135 6.135 0 014.355-1.81z"
                    data-name="Path 644"
                    transform="translate(-477.968 -144.19)"
                  ></path>
                </g>
              </g>
              <g
                id="Group_24"
                fill="#fff"
                data-name="Group 24"
                transform="rotate(-10.02 771.12 -2257.082)"
              >
                <path
                  id="Path_51"
                  d="M18.477 179.228l-1.092-2.1a.821.821 0 00-.728-.442h-.6v-1.735h-4.425v2.679h1.088v-.93a1.123 1.123 0 112.246-.014v.946h1.694l1.092 2.1a.821.821 0 00.728.442h.42a.3.3 0 00.3-.3v-.335a.3.3 0 00-.3-.3z"
                  data-name="Path 51"
                  transform="translate(0 -172.242)"
                ></path>
                <path
                  id="Path_52"
                  d="M15.078 378.7h-2.47v-.8h-.976v2.077h.976v-.806h2.47v.806h.976V377.9h-.976z"
                  data-name="Path 52"
                  transform="translate(0 -372.045)"
                ></path>
                <path
                  id="Path_53"
                  d="M16.047 0l-2.173 2.245h4.353z"
                  data-name="Path 53"
                  transform="translate(-2.207)"
                ></path>
                <path
                  id="Path_54"
                  d="M112.533 244.295a.659.659 0 00-.658.658v.943h1.316v-.943a.659.659 0 00-.658-.658z"
                  data-name="Path 54"
                  transform="translate(-98.69 -240.511)"
                ></path>
              </g>
            </g>
            <text
              id="Radlická"
              fill="#acacac"
              fontFamily="ArialMT, Arial"
              fontSize="9"
              letterSpacing=".1em"
              transform="rotate(36 -548.597 548.45)"
            >
              <tspan x="0" y="8">
                Radlická
              </tspan>
            </text>
            <g
              id="Group_30"
              data-name="Group 30"
              transform="rotate(11 452.024 276.24)"
            >
              <g id="podklady_1_patro" transform="rotate(-11 1140.556 -888.128)">
                <g id="Vrstva_1" data-name="Vrstva 1">
                  <g filter="url(#Path_36)" transform="translate(-377.14 -293.08)">
                    <path
                      id="Path_36-2"
                      fill="#fff"
                      stroke="#fff"
                      strokeWidth="1"
                      d="M501.678 535.362c21.3 6.9 60.707.467 96.2-1.868s27.788 2.659 41.2.86 49.4-3.2 49.4-3.2l9.339-55.57h-17.288l20.079-119.074h16.811l7.939-53.7H586.2S376.781 454.971 377.14 456.049s80.822 77.445 80.822 77.445l3.233-4.526 2.155 2.191s17.027-2.694 38.328 4.203z"
                      data-name="Path 36"
                    ></path>
                  </g>
                  <g data-place="2" transform="translate(137.651 173.125)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M20.754 30.718l4.48-25.541L19.827 0 4.174 11.365 8.493 15.1 0 25.824s7.942 4.776 20.754 4.894z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M9.918 12.606v6.835h9.841v-6.835z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M11.656 28.183v.919h.9v-.919z"
                    ></path>
                  </g>
                  <g data-place="3" transform="translate(129.817 184.735)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M7.505 13.846l8.21-10.331L11.625 0 0 8.3a57.771 57.771 0 007.505 5.546z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M5.759 4.97v3.652h4.687V4.97z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M6.885 12.2v.544h.551V12.2z"
                    ></path>
                  </g>
                  <g data-place="4" transform="translate(120.627 155.327)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M8.921 37.3l27.57-19.835L18.272 0 1.347 12.315H.259a32.112 32.112 0 00.567 11.311c.728-.345 22.531-16.282 22.531-16.282l2.5 2.55L1.875 27.179A59.192 59.192 0 008.921 37.3z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M15.712 19.827v5.584h7.278v-5.584z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M8.875 35.573v.812h.842v-.812z"
                    ></path>
                  </g>
                  <g data-place="5" transform="translate(120.963 149.032)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M0 18.235h.919L17.653 6.05 11.426 0 3.094 6.372H2.083z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M5.943 5.866v3.92h4.415v-3.92z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M1.386 15.661v.651h.72v-.651z"
                    ></path>
                  </g>
                  <g data-place="6" transform="translate(123.146 142.453)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M0 12.43h.919L8.822 6.3 2.267 0z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M2.389 4.878v2.4H6.05V4.916z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M1.026 10.262v.651h.6v-.651z"
                    ></path>
                  </g>
                  <g data-place="7" transform="translate(126.194 100.24)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M22.316 13l-8.57 6.249L5.514 28.4l5.6 5.637L0 42.351l37.419 35.688 28.512-.139L72.9 39.555 58.288 24.79l12.705-9.382-.613-2.228-.28-1.172L57.591 0 29.783 20.172z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M32.428 39.019v15.422h20.29V39.019z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M41.842 75.928l-.022 1.279 1.461.025.022-1.28z"
                    ></path>
                  </g>
                  <g data-place="8" transform="translate(149.1 104)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M11.465 0l2.6 2.7-1.241.911L17.339 8 7.023 15.47 0 8.508z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M5.644 6.395v4.536h6.242V6.395z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M6.693 14.059v.354h.608v-.354z"
                    ></path>
                  </g>
                  <g data-place="9" transform="translate(161.063 92.98)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M15.187 0l7.023 6.893L5.889 18.7l-4.12-4 1.164-.957L0 10.523z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M8.688 7.306v4.342h4.832V7.306z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M5.644 17.078v.682h.712v-.682z"
                    ></path>
                  </g>
                  <g data-place="10" transform="translate(148.855 54.773)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M0 8.776L11.939 0l11.082 10.454-12.445 8.424z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M7.972 7.482v5.537h7.672v-5.56z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M10.14 16.465v1.08h1.149v-1.08z"
                    ></path>
                  </g>
                  <g data-place="11" transform="translate(185.163 103.909)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M12.031 33.069L0 21.206l12.475-9.022-.559-2.734 1.379-1.271h10.032L24.637 0H64.92l-4.358 25.655H22.63z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M32.341 7.965v10.967h12.07V7.965z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M38.024 23.659v1h1.13v-1z"
                    ></path>
                  </g>
                  <g data-place="12" transform="translate(159.11 178.754)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M15.539 22.623L17.423.107 4.327 0 0 24.951l5.139-.084s2.803-1.241 10.4-2.244z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M6.219 2.336v5.591h8.608V2.336z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M2.581 21.436v1.333h1.3v-1.333z"
                    ></path>
                  </g>
                  <g data-place="13" transform="translate(175.345 178.761)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M12.889 21.688L16.611.077 1.892 0 0 22.516s5.054-.498 12.889-.828z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M3.645 1.83v5.951h9.956V1.83z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M1.892 19.146v1.409h1.532v-1.409z"
                    ></path>
                  </g>
                  <g data-place="14" transform="translate(188.939 130.223)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M16.19 71.828l1.21-5.981h.865l3.553-22.209 3.668-.038 1.156-6.4 23.925.038L56.588 0 19.062.054 8.7 7.184l2.205 2.106L0 70.235s11.794.665 16.19 1.593z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M25.441 10.323V22.17h14V10.323z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M31.82 35.244v1.422h1.321v-1.422z"
                    ></path>
                  </g>
                  <g data-place="15" transform="translate(205.573 196.353)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M1.156.168L20.915 0l2.925 4.718-4.817 2.787-10.438.643L0 5.767z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M9.404 1.294v4.142h5.42V1.294z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M11.687 6.471v.766h.766v-.766z"
                    ></path>
                  </g>
                  <g data-place="16" transform="translate(267.016 217.528)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M10.546 0h10.132l-2.3 13.953H0A124.589 124.589 0 0010.546 0z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M8.483 5.445v5.346h6.078V5.445z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M11.227 12.654v.488h.589v-.488z"
                    ></path>
                  </g>
                  <g data-place="17" transform="translate(277.63 207.733)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M3.477 1.738l7.543-1.7L21.742 0l-.62 3.829h-1.869L18.886 6.3h-8.233l-.544 3.163H0z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M8.312 1.738v3.127h5.119V1.738z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M8.715 8.707v.537h.623v-.537z"
                    ></path>
                  </g>
                  <g data-place="18" transform="translate(281.138 199.76)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M2.359 3.408l-.153-.766L9.634 0h7.727l-.406 2.55h2.229l-.9 5.077H7.567L0 9.259l.283-5.437z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M8.294 2.657v3.707h5.079V2.657z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M10.078 6.936v.477h.5v-.494z"
                    ></path>
                  </g>
                  <g data-place="19" transform="translate(276.964 187.262)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M9.787.107L25.87 0l-1.287 8.1H22.5l-.406 2.366h-8.546L3.492 13.693 0 7.9l9.106-4.507z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M11.625 2.956v5.3h7.069v-5.3z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M14.566 9.689v.42h.39v-.42z"
                    ></path>
                  </g>
                  <g data-place="20" transform="translate(270.209 181.817)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M5.9 0l11.148.107-1.4 8.547L6.533 13.1 0 9.274z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M6.15 3.783v4.725h5.959V3.814z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M6.15 12.084v.536h.746v-.536z"
                    ></path>
                  </g>
                  <g data-place="21" transform="translate(269.436 167.013)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M4.128 0h17.706l-1.922 11.794h1.532l-.268 1.846-1.892.911H6.441L.467 23.886 0 23.749z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M7.445 3.699v6.663h7.953V3.699z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M10.814 13.593v.529h.608v-.529z"
                    ></path>
                  </g>
                  <g data-place="22" transform="translate(273.556 154.109)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M0 12.606l.911-5.9L10.331 0 19.7.038l-1.91 12.545z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M7.39 4.863v4.164h5.43V4.863z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M9.799 11.212v1h1.072v-1z"
                    ></path>
                  </g>
                  <g data-place="23" transform="translate(226.764 191.857)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M.835 0h8.3l-2.2 6.2-3.872 2.745L0 4.227z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M2.435 1.807v2.964h4.234V1.807z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M4.434 6.934v.456h.5v-.456z"
                    ></path>
                  </g>
                  <g data-place="24" transform="translate(227.698 180.017)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M1.21 0l8.363.084-1.065 7.972H0z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M3.201 2.152v2.964h3.9V2.152z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M4.932 7.62v.39h.454v-.406z"
                    ></path>
                  </g>
                  <g data-place="25" transform="translate(219.036 167.879)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M18.457 11.725l-15.509-.084L4.074 4.5 0 4.4.643 0h19.675z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M8.041 2.987V7.75h5.743V2.987z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M10.668 10.896v.484h.53v-.484z"
                    ></path>
                  </g>
                  <g data-place="26" transform="translate(125.496 129.059)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M5.96 0l5.1 5.093L0 13.356S-.251 11.763 5.96 0z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M4.933 3.959v2.482h3.2V3.959z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M1.242 10.408v.766h.865v-.766z"
                    ></path>
                  </g>
                  <g data-place="27" transform="translate(176.571 82.274)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M14.405 0l13.4 12.759 2.3.084-1.869 12.016-2.765 1.248h-4.51l-2.619 1.83L0 10.262z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M11.526 9.941V18.6h10.768V9.941z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M22.293 25.242v.635h.577v-.635z"
                    ></path>
                  </g>
                  <g data-place="28" transform="translate(191.275 76.338)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M15.623 18.342l.7-5.361L7.9 0 0 5.6l13.295 12.673z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M13.617 17.411v.5h.581v-.5z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M6.31 6.87v4.141h5.009V6.913z"
                    ></path>
                  </g>
                  <g data-place="29" transform="translate(199.592 69.814)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M0 6.249L8.991 0l5.928 11.059-1.754 11.012-5.065-.046.291-2.719z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M6.219 7.758v5.108h6.2V7.758z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M10.124 20.891v.721h.633v-.721z"
                    ></path>
                  </g>
                  <g data-place="30" transform="translate(209.042 65.226)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M0 4.427S4.051 1.631 11.824 0l2.489 9.374h3.661l-1.409 8.508h-2.42l-1.463 8.8-8.562-.115L5.874 15.5z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M8.401 10.637v5.409h6.084v-5.409z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M8.868 25.694v.613h.682v-.6z"
                    ></path>
                  </g>
                  <g data-place="31" transform="translate(221.395 65.104)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M0 0l10.974.2-5.215 8.944H2.382z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M3.304 1.999v2.573h3.248V2.014z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M4.511 8.024v.462h.325v-.462z"
                    ></path>
                  </g>
                  <g data-place="32" transform="translate(226.159 65.349)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M7.053 17.714l.437-2.6L18.02 4.741A29.546 29.546 0 006.678 0c-.054.038-5.261 9.106-5.261 9.106L0 17.714z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M4.35 6.272v4.589h5.614V6.272z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M3.446 16.504v.49h.562v-.478z"
                    ></path>
                  </g>
                  <g data-place="33" transform="translate(238.014 72.77)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M14.543 9.672S13.4 3.546 9.4 0C9.443 0 .3 8.876.3 8.876L0 10.86l3.883.061-.452 2.167z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M5.552 5.843v3.362h4.485V5.843z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M7.329 10.974v.628h.62v-.628z"
                    ></path>
                  </g>
                  <g data-place="34" transform="translate(236.206 83.177)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M15.455 11.419l.911-5.407V0L5.062 3.117 4.61 6.18H.513L0 11.419s15.5-.046 15.455 0z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M7.168 4.158v3.73h6.016v-3.73z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M8.608 10.14v.574h.582v-.574z"
                    ></path>
                  </g>
                  <g data-place="35" transform="translate(209.793 95.117)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M0 8.279l1.049-6.2H4.97L5.231.551 26.329.5V0h15.455l-1.532 8.248z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M17.07 2.221v5.154h7.893V2.221z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M20.111 6.854v1.05h1.233V6.839z"
                    ></path>
                  </g>
                  <g data-place="36" transform="translate(260.713 37.733)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M33.934 78.483L44 18.058h28.548L75.841 0 29.768.207l-.153.988-5.284 2.4-.429 2.3h-8.179L0 22.523s4.434 2.849 8.026 11.825c3.293 8.1.689 17.07-.406 23.84S4.2 78.536 4.2 78.536z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M15.095 22.229v17.04h21.286v-17.04z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M21.191 76.535v1.174h1.628v-1.174z"
                    ></path>
                  </g>
                  <g data-place="37" transform="translate(242.907 19.276)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M0 33.276L17.04 0h79.785l-3.064 18-46.241.3.459-3.01h-4.6l1.677-8.891h-7.4l-1.333 8.57h-6.08l-1.532 9.6-13.563 14.3A48.165 48.165 0 000 33.276z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M14.551 11.886v9.244h11.167v-9.244z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M13.134 35.89v1.307h1.417V35.89z"
                    ></path>
                  </g>
                  <g data-place="38" transform="translate(222.299 19.276)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M0 31.943l1.394-7.812 2.083-.061L6.893 5.085l7.7-.115.923-4.97h21.7L20.149 33.2l-9.956-1.271z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M9.06 10.752v10.722h14.12V10.752z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M11.61 30.961v.943h1.18v-.943z"
                    ></path>
                  </g>
                  <g data-place="39" transform="translate(200.978 38.453)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M0 0h14.145l-2.114 13.019-8.187-.119z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M4.687 3.998v4.506h5.827V3.998z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M6.984 11.556v.888h.865v-.888z"
                    ></path>
                  </g>
                  <g data-place="40" transform="translate(161.239 28.183)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M11.028 36.668L0 26.306 36.063 0l7.023 23.251-8.064.115-6.127 1.853z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M17.783 15.355v8.1h11.483v-8.1z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M11.304 34.378v.973h.956v-.973z"
                    ></path>
                  </g>
                  <g data-place="41" transform="translate(115.419 63.963)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M12.039 41.2l-7.658-7.312 3.163-2.7L0 23.741 33.092 0l10.476 10.132L18.97 28.19z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M19.697 12.307v6.066h9.611v-6.066z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M11.61 39.194v.722h.766v-.722z"
                    ></path>
                  </g>
                  <g data-place="42" transform="translate(87.098 190.685)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M25.119 0a92.947 92.947 0 007.168 10.094C32.21 10.171 7.78 28.083 7.78 28.083l-6.616-5.889 1.654-1.233L0 18.411z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M12.384 11.893v5.412h7.191v-5.412z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M7.207 26.431v.55h.709v-.55z"
                    ></path>
                  </g>
                  <g data-place="43" transform="translate(18.403 147.546)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M16.534 0l13.732 11.878 59.268-.115s-3.707 17.369 1.447 26.4c0 .054-25.449 18.694-25.449 18.694l-5.943-5.79-11.8 8.914L0 12.284z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M44.464 22.868v18.311h24.78V22.868z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M47.842 55.423v1.234h1.625v-1.234z"
                    ></path>
                  </g>
                  <g data-place="44" transform="translate(35.726 114.048)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M44.893 0l18.319 17.936 13.915 3.216s-3.707 13.571-4.94 23.335l-58.877.161L0 33.008z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M34.27 21.261v16.785h22.032V21.261z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M44.432 42.649v1.647h1.708v-1.647z"
                    ></path>
                  </g>
                  <g data-place="45" transform="translate(85.995 201.33)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M33.865 0s10.454 12.353 7.658 29.1a15.268 15.268 0 01-1.164 1.624s-8.485-2.3-29.01-1.386c0 .077-2.627-2.244-2.627-2.244l-3.706 2.858L0 24.859z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M25.625 28.055v.694h.909v-.694z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M20.218 15.194v9.726h12.917v-9.726z"
                    ></path>
                  </g>
                  <g data-place="46" transform="translate(81.339 94.374)">
                    <path

                      data-position fill="#e2e1e1"
                      d="M0 19.215L26.038 0l17.117 16.3a188.053 188.053 0 00-11.427 23.922c.077 0-13.923-3.339-13.923-3.339z"
                    ></path>
                    <path
                      data-logo fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M14.245 15.294v12.978h17.989V15.294z"
                    ></path>
                    <path
                      data-popup fill="none"
                      stroke="#717171"
                      strokeWidth="0.2"
                      d="M25.342 37.332v1.051h1.046v-1.051z"
                    ></path>
                  </g>
                  <g
                    id="legend-icon-4"
                    data-name="legend-icon"
                    transform="translate(172.706 72.77)"
                  >
                    <g id="Group_471" data-name="Group 471" data-type="4">
                      <ellipse
                        id="Ellipse_23"
                        cx="5.964"
                        cy="5.964"
                        fill="#e85d0c"
                        data-name="Ellipse 23"
                        rx="5.964"
                        ry="5.964"
                      ></ellipse>
                      <g
                        id="Group_443"
                        fill="#fff"
                        data-name="Group 443"
                        transform="translate(1.997 1.981)"
                      >
                        <path
                          id="Path_621"
                          d="M.943 1.875A.938.938 0 00.943 0 .932.932 0 000 .932a.932.932 0 00.927.938z"
                          data-name="Path 621"
                          transform="translate(2.638)"
                        ></path>
                        <path
                          id="Path_622"
                          d="M6.219.07L2.4 3.523a.271.271 0 01-.175.069H.265A.265.265 0 000 3.857v.773a.27.27 0 00.265.27h2.352a.259.259 0 00.18-.074l3.814-3.448a.259.259 0 01.175-.069h1.742a.265.265 0 00.265-.265V.266A.275.275 0 008.528 0H6.409a.243.243 0 00-.19.07z"
                          data-name="Path 622"
                          transform="translate(0 2.203)"
                        ></path>
                        <path
                          id="Path_623"
                          d="M1.012 0A1.012 1.012 0 000 1.012v1.727L2.018.911A1.012 1.012 0 001.012 0z"
                          data-name="Path 623"
                          transform="translate(2.574 2.135)"
                        ></path>
                        <path
                          id="Path_624"
                          d="M0 3.062h1.144A.27.27 0 001.308 3l3.311-3H3.475a.217.217 0 00-.159.064z"
                          data-name="Path 624"
                          transform="translate(3.501 4.026)"
                        ></path>
                      </g>
                    </g>
                  </g>
                  <g
                    id="legend-icon-5"
                    data-name="legend-icon"
                    transform="translate(146.412 219.885)"
                  >
                    <g id="Group_471-2" data-name="Group 471-2" data-type="4">
                      <circle
                        id="Ellipse_23-2"
                        cx="6.032"
                        cy="6.032"
                        r="6.032"
                        fill="#e85d0c"
                        data-name="Ellipse 23-2"
                      ></circle>
                      <g
                        id="Group_443-2"
                        fill="#fff"
                        data-name="Group 443-2"
                        transform="translate(2.003 2.014)"
                      >
                        <path
                          id="Path_621-2"
                          d="M.932 1.886A.943.943 0 100 .932a.943.943 0 00.932.953z"
                          data-name="Path 621-2"
                          transform="translate(2.7)"
                        ></path>
                        <path
                          id="Path_622-2"
                          d="M6.3.07L2.443 3.557a.257.257 0 01-.182.07H.273A.268.268 0 000 3.895v.787a.268.268 0 00.268.268h2.378a.3.3 0 00.182-.07l3.857-3.492a.306.306 0 01.182-.07h1.757a.268.268 0 00.268-.268V.268A.268.268 0 008.624 0H6.482A.246.246 0 006.3.07z"
                          data-name="Path 622-2"
                          transform="translate(0 2.223)"
                        ></path>
                        <path
                          id="Path_623-2"
                          d="M1.023 0A1.034 1.034 0 000 1.023v1.746L2.041.927A1.034 1.034 0 001.023 0z"
                          data-name="Path 623-2"
                          transform="translate(2.619 2.175)"
                        ></path>
                        <path
                          id="Path_624-2"
                          d="M0 3.1h1.162a.225.225 0 00.161-.064L4.671 0H3.519a.262.262 0 00-.166.059z"
                          data-name="Path 624-2"
                          transform="translate(3.552 4.087)"
                        ></path>
                      </g>
                    </g>
                  </g>
                  <g
                    id="legend-icon-6"
                    data-name="legend-icon"
                    transform="translate(254.696 112.86)"
                  >
                    <g id="Group_471-3" data-name="Group 471-3" data-type="4">
                      <ellipse
                        id="Ellipse_23-3"
                        cx="6.16"
                        cy="6.16"
                        fill="#e85d0c"
                        data-name="Ellipse 23-3"
                        rx="6.16"
                        ry="6.16"
                      ></ellipse>
                      <g
                        id="Group_443-3"
                        fill="#fff"
                        data-name="Group 443-3"
                        transform="translate(2.057 2.046)"
                      >
                        <path
                          id="Path_621-3"
                          d="M.974 1.937A.968.968 0 00.974 0 .963.963 0 000 .963a.974.974 0 00.974.974z"
                          data-name="Path 621-3"
                          transform="translate(2.724)"
                        ></path>
                        <path
                          id="Path_622-3"
                          d="M6.423.054L2.484 3.621a.3.3 0 01-.186.071H.279A.274.274 0 000 3.965v.8a.29.29 0 00.279.279H2.73a.3.3 0 00.186-.071l3.939-3.568a.279.279 0 01.186-.071h1.794a.274.274 0 00.274-.274V.278A.274.274 0 008.835 0H6.647a.3.3 0 00-.224.054z"
                          data-name="Path 622-3"
                          transform="translate(0 2.293)"
                        ></path>
                        <path
                          id="Path_623-3"
                          d="M1.045 0A1.034 1.034 0 000 1.034v1.794L2.084.941A1.05 1.05 0 001.045 0z"
                          data-name="Path 623-3"
                          transform="translate(2.664 2.205)"
                        ></path>
                        <path
                          id="Path_624-3"
                          d="M0 3.162h1.187a.262.262 0 00.164-.06L4.776 0H3.594a.235.235 0 00-.169.066z"
                          data-name="Path 624-3"
                          transform="translate(3.616 4.141)"
                        ></path>
                      </g>
                    </g>
                  </g>
                  <g
                    id="legend-icon-7"
                    data-name="legend-icon"
                    transform="translate(255.797 202.123)"
                  >
                    <g id="Group_473-2" data-name="Group 473-2" data-type="0">
                      <circle
                        id="Ellipse_28-2"
                        cx="5.61"
                        cy="5.61"
                        r="5.61"
                        fill="#fbbd39"
                        data-name="Ellipse 28-2"
                      ></circle>
                      <g
                        id="Group_455-2"
                        fill="#fff"
                        data-name="Group 455-2"
                        transform="translate(2.523 2.527)"
                      >
                        <path
                          id="Path_631-2"
                          d="M1.983.036H1.9A.994.994 0 011.684.01L.059 1.636a.2.2 0 000 .284l.423.423a.206.206 0 00.289 0L2.721.392 2.36 0z"
                          data-name="Path 631-2"
                          transform="translate(.025 3.918)"
                        ></path>
                        <path
                          id="Path_632-2"
                          d="M3.005 1.338a.191.191 0 00-.268 0L1.7 2.37a.258.258 0 01-.361-.361L2.376.977a.208.208 0 10-.238-.341L2.1.677 1.065 1.71a.258.258 0 01-.351 0 .253.253 0 010-.356L1.746.321a.2.2 0 000-.279.2.2 0 00-.248 0L.317 1.23a1.089 1.089 0 00-.284 1.032l.795.795a1.094 1.094 0 001.032-.284l1.181-1.182a.2.2 0 000-.279z"
                          data-name="Path 632-2"
                          transform="translate(3.281)"
                        ></path>
                        <path
                          id="Path_633-2"
                          d="M.532.063a.217.217 0 00-.3 0 .146.146 0 00-.046.056 1.879 1.879 0 00.362 2.142L1.58 3.267a.516.516 0 00.372.155h.057l.583-.046 2.549 2.75a.217.217 0 00.155.067.206.206 0 00.15-.062l.439-.439a.233.233 0 00.062-.15.217.217 0 00-.062-.155z"
                          data-name="Path 633-2"
                          transform="translate(0 .099)"
                        ></path>
                      </g>
                    </g>
                  </g>
                  <g
                    id="legend-icon-8"
                    data-name="legend-icon"
                    transform="translate(210.934 21.007)"
                  >
                    <circle
                      id="Ellipse_20"
                      cx="5.682"
                      cy="5.682"
                      r="5.682"
                      fill="#59aeb9"
                      data-name="Ellipse 20"
                      data-type="1"
                    ></circle>
                    <g
                      id="Group_437"
                      fill="#fff"
                      data-name="Group 437"
                      transform="translate(2.265 2.778)"
                    >
                      <path
                        id="Path_608"
                        d="M.939 1.92A.96.96 0 111.92.944a.955.955 0 01-.934.976z"
                        data-name="Path 608"
                        transform="translate(.304 .077)"
                      ></path>
                      <path
                        id="Path_609"
                        d="M1.243 3.1a.187.187 0 01-.182-.125L.024.265a.187.187 0 010-.182A.192.192 0 01.184 0H2.26a.192.192 0 01.156.083.2.2 0 01.026.182L1.4 2.979a.207.207 0 01-.157.121z"
                        data-name="Path 609"
                        transform="translate(0 2.386)"
                      ></path>
                      <path
                        id="Path_610"
                        d="M.96 1.92a.96.96 0 11.96-.96.96.96 0 01-.96.96z"
                        data-name="Path 610"
                        transform="translate(4.377 .077)"
                      ></path>
                      <path
                        id="Path_611"
                        d="M2.26 3.1H.184a.192.192 0 01-.161-.083.187.187 0 010-.182L1.061.123a.2.2 0 01.255-.109.2.2 0 01.109.109l1.038 2.714a.2.2 0 01-.114.254h-.068z"
                        data-name="Path 611"
                        transform="translate(4.141 2.388)"
                      ></path>
                      <path
                        id="Path_612"
                        d="M.207 5.489a.2.2 0 01-.2-.2V.258A.2.2 0 11.394.18a.124.124 0 010 .062v5.05a.2.2 0 01-.187.2z"
                        data-name="Path 612"
                        transform="translate(3.096)"
                      ></path>
                    </g>
                  </g>
                  <g
                    id="legend-icon-9"
                    data-name="legend-icon"
                    transform="translate(267.523 234.836)"
                  >
                    <ellipse
                      id="Ellipse_33"
                      cx="5.897"
                      cy="5.897"
                      fill="#59aeb9"
                      data-name="Ellipse 33"
                      rx="5.897"
                      ry="5.897"
                      data-type="2"
                    ></ellipse>
                    <g
                      id="Group_464"
                      data-name="Group 464"
                      transform="translate(2.666 2.152)"
                    >
                      <g id="Group_463" fill="#fff" data-name="Group 463">
                        <path
                          id="Path_638"
                          d="M3.973 3.393a1.913 1.913 0 01-3.4-1.209A1.984 1.984 0 011.361.656V0A2.526 2.526 0 000 2.168a2.477 2.477 0 004.575 1.339c-.032-.076-.07-.146-.1-.217a4.775 4.775 0 01-.502.103z"
                          data-name="Path 638"
                          transform="translate(0 2.775)"
                        ></path>
                        <ellipse
                          id="Ellipse_34"
                          cx="0.883"
                          cy="0.883"
                          data-name="Ellipse 34"
                          rx="0.883"
                          ry="0.883"
                          transform="translate(1.68)"
                        ></ellipse>
                        <path
                          id="Path_639"
                          d="M4.575 4.577l-.927-2.14A.574.574 0 003 2.111l-1.859.428V.545A.542.542 0 00.624 0H.6a.542.542 0 00-.6.485v2.8a.542.542 0 00.542.569h.185l2.1-.482.737 1.7a.542.542 0 00.748.282.542.542 0 00.288-.733z"
                          data-name="Path 639"
                          transform="translate(1.837 2.122)"
                        ></path>
                      </g>
                    </g>
                  </g>
                  <g
                    id="legend-icon-10"
                    data-name="legend-icon"
                    transform="translate(281.36 234.836)"
                  >
                    <ellipse
                      id="Ellipse_31"
                      cx="5.897"
                      cy="5.897"
                      fill="#59aeb9"
                      data-name="Ellipse 31"
                      rx="5.897"
                      ry="5.897"
                      data-type="3"
                    ></ellipse>
                    <g
                      id="Group_461"
                      data-name="Group 461"
                      transform="translate(2.644 3.539)"
                    >
                      <g id="Group_460" fill="#fff" data-name="Group 460">
                        <path
                          id="Path_637"
                          d="M1.155 2.111H.391s-.39 0-.39.6a.428.428 0 00.369.444h1.56a.428.428 0 00.406-.45v-.469a.108.108 0 01.092-.108h1.22a.032.032 0 01.033.033l.293.656a.482.482 0 00.585.358h.081a.428.428 0 00.3-.542v-.056L4.228.409A.737.737 0 003.507 0h-1.68a1.132 1.132 0 00-.64 2.076h-.032z"
                          data-name="Path 637"
                          transform="translate(0 1.526)"
                        ></path>
                        <ellipse
                          id="Ellipse_32"
                          cx="1.127"
                          cy="1.127"
                          data-name="Ellipse 32"
                          rx="1.127"
                          ry="1.127"
                          transform="translate(4.25)"
                        ></ellipse>
                      </g>
                    </g>
                  </g>
                  <g
                    id="legend-icon-11"
                    data-name="legend-icon"
                    transform="translate(295.197 234.836)"
                  >
                    <ellipse
                      id="Ellipse_20-2"
                      cx="5.897"
                      cy="5.897"
                      fill="#59aeb9"
                      data-name="Ellipse 20-2"
                      rx="5.897"
                      ry="5.897"
                      data-type="1"
                    ></ellipse>
                    <g
                      id="Group_437-2"
                      fill="#fff"
                      data-name="Group 437-2"
                      transform="translate(2.472 3.015)"
                    >
                      <path
                        id="Path_608-2"
                        d="M1 1.995a1 1 0 11.992-1 1 1 0 01-.992 1z"
                        data-name="Path 608-2"
                        transform="translate(.287 .064)"
                      ></path>
                      <path
                        id="Path_609-2"
                        d="M1.29 3.2a.2.2 0 01-.19-.13L.016.255A.2.2 0 01.114 0h2.254a.206.206 0 01.168.087.2.2 0 010 .19L1.452 3.095a.2.2 0 01-.163.114z"
                        data-name="Path 609-2"
                        transform="translate(0 2.497)"
                      ></path>
                      <path
                        id="Path_610-2"
                        d="M1 1.995a1 1 0 11.992-1 1 1 0 01-.992 1z"
                        data-name="Path 610-2"
                        transform="translate(4.558 .064)"
                      ></path>
                      <path
                        id="Path_611-2"
                        d="M2.355 3.223H.187a.189.189 0 01-.162-.087.184.184 0 010-.184L1.109.128a.206.206 0 01.265-.114.222.222 0 01.109.114l1.084 2.818a.211.211 0 01-.119.266h-.093z"
                        data-name="Path 611-2"
                        transform="translate(4.289 2.478)"
                      ></path>
                      <path
                        id="Path_612-2"
                        d="M.211 5.7a.211.211 0 01-.2-.2V.27a.206.206 0 11.4-.081.129.129 0 010 .065v5.23a.206.206 0 01-.2.217z"
                        data-name="Path 612-2"
                        transform="translate(3.215)"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
              <g
                id="Group_10"
                data-name="Group 10"
                transform="translate(421.26 397.287)"
              >
                <g id="Group_11" data-name="Group 11">
                  <path
                    id="Path_41"
                    fill="#fff"
                    d="M-472.142 106.075a2.631 2.631 0 01-1.729.5h-1.435v2.143a.334.334 0 01-.334.334h-.763a.334.334 0 01-.334-.334V102.5a.334.334 0 01.334-.334h2.626a2.391 2.391 0 011.632.533 2.08 2.08 0 01.609 1.65 2.136 2.136 0 01-.606 1.726zm-1.1-2.481a1.161 1.161 0 00-.767-.229h-1.3v2.028h1.3a1.1 1.1 0 00.767-.248 1.01 1.01 0 00.274-.785.949.949 0 00-.274-.767z"
                    data-name="Path 41"
                    transform="translate(476.738 -102.168)"
                  ></path>
                  <path
                    id="Path_42"
                    fill="#e6e6e6"
                    d="M-385.434 102.7a2.39 2.39 0 00-1.632-.533h-.891a2.39 2.39 0 011.632.533 2.079 2.079 0 01.609 1.65 2.137 2.137 0 01-.605 1.724 2.631 2.631 0 01-1.729.5h.891a2.631 2.631 0 001.729-.5 2.137 2.137 0 00.605-1.724 2.079 2.079 0 00-.609-1.65z"
                    data-name="Path 42"
                    transform="translate(390.026 -102.172)"
                  ></path>
                </g>
              </g>

              <g data-type="5" transform="translate(418.473 357.025) rotate(-11)">
                <circle cx="6.087" cy="6.087" r="6.087" fill="#85bf40" />
                <g transform="translate(3.198 1.957)">
                  <g>
                    <g>
                      <path d="M105.016,57.641a.419.419,0,0,0-.4-.26c-.084,0-.092,0-.143,0h-1.51a.4.4,0,0,0-.4.257l-.73,2.222a.363.363,0,0,0,.21.466.357.357,0,0,0,.462-.211l.195-.523s.014-.053.014.178v3.083a.483.483,0,1,0,.966,0V60.84a.015.015,0,0,1,.016-.017h.183a.016.016,0,0,1,.016.017v2.015a.483.483,0,1,0,.966,0V59.772c0-.235.021-.16.021-.16l.188.506a.357.357,0,0,0,.462.211.363.363,0,0,0,.21-.466Z" transform="translate(-101.815 -55.083)" fill="#fff" />
                      <ellipse cx="1.038" cy="1.027" rx="1.038" ry="1.027" transform="translate(0.949)" fill="#fff" />
                    </g>
                    <g transform="translate(5.558 2.344)">
                      <path d="M107.681,58.443c.05.079.014.145-.081.145h-1.209c-.094,0-.13-.066-.081-.145l.595-.965a.1.1,0,0,1,.18,0Z" transform="translate(-106.289 -57.418)" fill="#fff" />
                      <path d="M106.311,59.111c-.05-.079-.014-.145.081-.145H107.6c.094,0,.13.066.081.145l-.595.965a.1.1,0,0,1-.18,0Z" transform="translate(-106.289 -57.043)" fill="#fff" />
                    </g>
                  </g>
                </g>
              </g>

              <g data-type="5" transform="translate(361.327 262.187) rotate(-11)">
                <g>
                  <circle cx="6.087" cy="6.087" r="6.087" fill="#85bf40" />
                  <g transform="translate(3.199 1.957)">
                    <g>
                      <g>
                        <path d="M105.016,57.641a.419.419,0,0,0-.4-.26c-.084,0-.092,0-.143,0h-1.51a.4.4,0,0,0-.4.257l-.73,2.222a.363.363,0,0,0,.21.466.357.357,0,0,0,.462-.211l.195-.523s.014-.053.014.178v3.083a.483.483,0,1,0,.966,0V60.84a.015.015,0,0,1,.016-.017h.183a.016.016,0,0,1,.016.017v2.015a.483.483,0,1,0,.966,0V59.772c0-.235.021-.16.021-.16l.188.506a.357.357,0,0,0,.462.211.363.363,0,0,0,.21-.466Z" transform="translate(-101.815 -55.083)" fill="#fff" />
                        <ellipse cx="1.038" cy="1.027" rx="1.038" ry="1.027" transform="translate(0.949)" fill="#fff" />
                      </g>
                      <g transform="translate(5.558 2.344)">
                        <path d="M107.681,58.443c.05.079.014.145-.081.145h-1.209c-.094,0-.13-.066-.081-.145l.595-.965a.1.1,0,0,1,.18,0Z" transform="translate(-106.289 -57.418)" fill="#fff" />
                        <path d="M106.311,59.111c-.05-.079-.014-.145.081-.145H107.6c.094,0,.13.066.081.145l-.595.965a.1.1,0,0,1-.18,0Z" transform="translate(-106.289 -57.043)" fill="#fff" />
                      </g>
                    </g>
                  </g>
                </g>
              </g>

            </g>
          </g>
        </svg>
        <svg
          data-floor="1"
          data-style={activeFloor == 0 ? true : false}
          className="platform"
          viewBox="0 0 1129.56 1062.075"
        >
          <defs>
            <filter
              id="bg-path"
              width="399.871"
              height="282.956"
              x="348.875"
              y="298.34"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="1"></feOffset>
              <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
              <feFlood floodOpacity="0.161"></feFlood>
              <feComposite in2="blur" operator="in"></feComposite>
              <feComposite in="SourceGraphic"></feComposite>
            </filter>
          </defs>
          <g id="prizemi" transform="translate(167.621 140.308)">
            <path
              id="Rectangle_8"
              fill="none"
              d="M0 0H779V617H0z"
              data-name="Rectangle 8"
            ></path>
            <g
              id="Group_7"
              data-name="Group 7"
              transform="rotate(-123.99 636.409 493.268)"
            >
              <path
                id="Path_38"
                fill="#fff"
                d="M1238.068 131.537s-68.77-16.442-169.308-5.97-175.069 61.964-242.1 68.946c-20.209 2.1-39.733-1.81-57.612-8.929 40.321-50.6 80.422-95.782 104.216-108.889 61.789-34.037 65.83-122.72 65.83-122.72l-24.7 24.7s-2.074 31.732-23.44 58.418-27.114 18.654-62.023 48.327c-19.422 16.508-58.347 63.048-80.544 90.228-31.41-17.7-33.687-21.219-33.687-21.219l-11.918 19.8s23.335 18.789 29.2 21.725l-.1.123s-156.567 211.549-181.7 239.3-67.025 60.742-67.025 60.742v31.418c4.554-2.546 9.1-5.358 13.622-8.374.307.143 144.542 67.554 169.127 75.4 17.617 5.622 50.525 8.293 67.807 9.357l-3.051 11.239s9.339 8.728 24.088 19.9 18.851 9.426 18.851 9.426c12.567 1.222 32.029-5.5 32.029-5.5s-15.8 12.043-1.746 27.4c13.964 12.131 30.022 2.008 41.193 1.4 25.571.611 22.516 9.687 44.945 11.869s23.3-6.2 28.626-5.935c43.549 9.6 73.4 3.229 83.869-.611s34.647-12.305 73.222-18.763 37.876-23.04 39.447-35.171-3.316-37.964-35.433-36.393-42.85 28.276-53.5 39.884-19.025 8.465-52.713 7.243S929.211 641 912.8 644.753s-22.866-4.1-44.6-8.9-36.829-5.586-58.647-1.746-35.235 6.62-40.669 4.1c-14.313-6.632-32.2-25.483-32.2-25.483l2.875-8.461c3.409.18 5.416.257 5.416.257l.292.262c2.065 15.622 16.439 29.062 34.421 29.062a34.469 34.469 0 0024.953-10.654 149.432 149.432 0 0120.451-3.485c24.349-2.88 53.948 11.141 79.743 11.582s52.187-4.026 52.187-4.026 22.8-5.723 43.226-7.556 18.589-24.872 18.589-24.872l56.815-84.306-33.1-22.257s-77.035 117.873-82.272 124.191-6.264 5.547-13.055 7.432c-56.9 4.187-72.123-3.591-99.614-7.518-23.788-3.4-32.476-17.766-34.386-21.578a34.47 34.47 0 00-7.392-14.159l.149.129 66.91-99.2-6.567-4.43-66.238 98.2a34.417 34.417 0 00-20.4-6.661c-.28 0-.556.015-.835.021l-16.6-139.788s-6.545-38.488.524-48.437 24.761-36.233 24.761-36.233l74.966 66.5 37.727-47.813a49.4 49.4 0 01.786-19.637c2.618-10.734 12.043-21.207 12.043-21.207s-64.843-44.073-71.389-49.047c11.52-13.091 25.309-10.386 23.477-10.648-1.048 16.233 3.789 23.438 14.4 31.419s37.178 23.563 37.178 23.563l5.242-8.369s-25.309-15.709-37.178-23.04-10.822-26.182-10.822-26.182l212.248-40.494-11.365-67.844c81.192-9.578 145.536 3.373 145.536 3.373l54.141 5.315zm-196.537 479.79c14.313-15.185 28.276-31.243 54.982-19.374 0 0 12.916 5.914 12.916 25.134 0 12.218-5.062 21.993-17.8 27.055s-49.92 15.883-56.2 10.647-7.855-11.694-7.331-19.025c-.007 0-.88-9.251 13.433-24.437zM930.345 642.4s10.822-5.585 28.8-7.156 35.259-.873 47.128 3.142 19.112 13.178 9.687 23.476-48.436 14.138-65.891 11.08c0 0-22.5-2.012-30.894-13.266-7.68-10.298 11.17-17.276 11.17-17.276zm-103.5-5.585c24.436-1.571 33.687 3.142 43.113 5.062s14.836 4.712 28.1 7.854 12.567 18.153 4.712 22.342c-15.011 5.586-32.116-5.411-40.494-7.5s-11.171-4.015-34.211 1.745-28.393-14-21.12-22.342c5.931-6.816 19.895-7.165 19.895-7.165zm-13.114-31.452l9.269 6.488-11.534 1.068a34.3 34.3 0 002.26-7.56zm-34.035-32.747a26.65 26.65 0 11-26.65 26.65 26.65 26.65 0 0126.645-26.654zm80.863-232.2l-44.6-28.578.762-1.135 44.6 28.578zm12.631-20.13l-.762 1.135-44.684-28.565.762-1.135zm-17.458-71.568c-16.232 3.927-25.4 16.756-25.4 16.756S770.636 347.153 756.76 366s-6.807 39.534-6.807 39.534L770.924 565.8a34.616 34.616 0 00-25.424 28.282c-4.936.143-26.55.5-48.17-3.177-24.611-4.189-56.029-15.709-91.112-32.465-28.371-13.55-80.363-37.713-99.223-46.464 70.449-52.233 132.735-150.947 132.735-150.947s54.813-79.878 113.648-155.521c21.817 8.464 42.948 12.513 65.436 11.521 42.376-1.869 69.64-13.184 164.771-48.174a395.126 395.126 0 0180.243-19.972l10 58.982s-201.868 36.917-218.101 40.844z"
                data-name="Path 38"
              ></path>
            </g>
            <path
              id="Rectangle_1"
              fill="none"
              d="M0 0H945V684H0z"
              data-name="Rectangle 1"
              opacity="0.28"
              transform="rotate(11 494.484 132.153)"
            ></path>
            <g
              id="legend-icon"
              fill="#1a9ed9"
              transform="rotate(11 -1403.45 1917.186)"
            >
              <path
                id="Path_647"
                d="M449.8 395.83a7.832 7.832 0 107.832 7.832 7.832 7.832 0 00-7.832-7.832zm0 14.036a6.2 6.2 0 116.2-6.212 6.2 6.2 0 01-6.19 6.2z"
                data-name="Path 647"
                transform="translate(-441.97 -395.83)"
              ></path>
              <path
                id="Path_648"
                d="M453.554 404h-1.634v1.958h1.634a.979.979 0 000-1.958z"
                data-name="Path 648"
                transform="translate(-444.758 -398.12)"
              ></path>
              <path
                id="Path_649"
                d="M450.687 399a5.55 5.55 0 105.542 5.556 5.542 5.542 0 00-5.542-5.542zm.978 6.852h-1.633v2.635h-1.3v-6.55a.654.654 0 01.654-.655h2.282a2.289 2.289 0 010 4.57z"
                data-name="Path 649"
                transform="translate(-442.856 -396.718)"
              ></path>
            </g>
            <g
              id="bg"
              filter="url(#bg-path)"
              transform="translate(186.029 181.107) translate(-353.13 -319.63)"
            >
              <path
                id="bg-path-2"
                fill="#fff"
                stroke="#fff"
                strokeWidth="1"
                d="M540.39 307.694l194.738-1.985-33.417 237.187-28.228 19.645-75.894 1.518 7.987-57.798a34.936 34.936 0 00-13.907.278c-7.12 1.732-15.076 1.494-26.225.525s-19.678 1.819-26.957 3.719-37.721 3.762-64.124-1.138-37.578-.008-37.578-.008l-3.11-3.061-3.737 3.198-68.251-65.262z"
                data-name="bg-path"
              ></path>
            </g>
            <g data-place="47" transform="translate(466.373 178.436)">
              <path

                data-position fill="#e2e1e1"
                d="M519.51 226.1l6.289-40.5 12.594-.067 5.3-31.57 68.758.109-11.925 72.128z"
                transform="translate(-519.51 -153.96)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M28.27 9.95V49.9h44.442V9.95z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M45.693 69.387v1.612h1.679v-1.612z"
              ></path>
            </g>
            <g data-place="48" transform="translate(453.912 178.478)">
              <path

                data-position fill="#e2e1e1"
                d="M509.792 153.75l30.118.151-5.122 30.328-30.118.252z"
                transform="translate(-504.67 -153.75)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M8.388 6.264V22.88H27.7V6.264z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M15.97 28.489v1.5h1.587v-1.5z"
              ></path>
            </g>
            <g data-place="49" transform="translate(460.455 252.153)">
              <path

                data-position fill="#e2e1e1"
                d="M599.041 241.889l-7.809 47.859-69.916-.1 1.058-6.465H510.93l6.675-41.562z"
                transform="translate(-510.93 -241.62)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M27.905 9.832V30.47h32.8V9.832z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M43.468 45.836v1.59h1.679v-1.59z"
              ></path>
            </g>
            <g data-place="50" transform="translate(460.848 294.907)">
              <path

                data-position fill="#e2e1e1"
                d="M510.51 292.54l10.386.143-.924 5.038-6.6.059z"
                transform="translate(-510.51 -292.54)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M4.064.765v2.06h3.264V.765z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M5.696 4.081v.5h.588v-.5z"
              ></path>
            </g>
            <g data-place="51" transform="translate(460.153 301.721)">
              <path

                data-position fill="#e2e1e1"
                d="M513.427 300.64h77.2l-4.386 25.86-76.7-.143z"
                transform="translate(-509.54 -300.64)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M31.176 5.029v13.17H51.94V5.029z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M40.143 23.611v1.469h1.587v-1.469z"
              ></path>
            </g>
            <g data-place="52" transform="translate(455.831 329.291)">
              <path

                data-position fill="#e2e1e1"
                d="M503.82 360.425l4.24-27.045h77.2l-4.039 27.045z"
                transform="translate(-503.82 -333.38)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M31.326 6.44v12.594h18.783V6.44z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M39.496 24.66v1.679h1.948V24.66z"
              ></path>
            </g>
            <g data-place="53" transform="translate(446.724 357.917)">
              <path

                data-position fill="#e2e1e1"
                d="M501.776 367.28h62.133l-6.717 42.511-22.5 15.189-42.309-.143z"
                transform="translate(-492.38 -367.28)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M20.218 16.95v21.841h29.429V16.95z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M33.896 56.248v1.149h1.133v-1.149z"
              ></path>
            </g>
            <g data-place="54" transform="translate(436.478 361.682)">
              <path

                data-position fill="#e2e1e1"
                d="M484.542 383l7.951.218-3.182 22.88h-8.161z"
                transform="translate(-481.15 -383)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M3.514 9.01v4.886H7.83V9.01z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M4.072 21.374v.784h1.024v-.784z"
              ></path>
            </g>
            <g data-place="55" transform="translate(399.802 349.021)">
              <path

                data-position fill="#e2e1e1"
                d="M436.69 364.182l.957-6.1 1.2-2.368 5.617 3.073-.747 5.718s-1.855-.155-7.027-.323z"
                transform="translate(-436.69 -355.71)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M1.94 3.384v2.813h4.2V3.384z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M4.097 7.506v.445h.479v-.445z"
              ></path>
            </g>
            <g data-place="56" transform="translate(402.027 342.751)">
              <path

                data-position fill="#e2e1e1"
                d="M439.47 354.083a27.053 27.053 0 019.009-5.793c.134.076 5.1 7.893 5.1 7.893l-1.343 8.548a74.9 74.9 0 00-7.607-1.285l.84-6.113z"
                transform="translate(-439.47 -348.29)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M5.357 3.711v4.013h5.632V3.748z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M8.783 13.963v.739h.764v-.739z"
              ></path>
            </g>
            <g data-place="57" transform="translate(411.307 336.047)">
              <path

                data-position fill="#e2e1e1"
                d="M450.66 346.738l13.073-6.238 4.5 6.675-.9 5.323 13.61.059-1.579 9.639h-6.714s-10.915 1.553-12.2 1.553-5.978-.252-5.978-.252l1.385-8.707z"
                transform="translate(-450.66 -340.5)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M5.432 5.852v6.33h9.009v-6.3z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M15.508 21.427v.772h.741v-.772z"
              ></path>
            </g>
            <g data-place="58" transform="translate(424.697 332.454)">
              <path

                data-position fill="#e2e1e1"
                d="M466.68 339.682l6.776-3.182 4.24 6.465-1.427 8.531h-5.827l.789-5.088z"
                transform="translate(-466.68 -336.5)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M3.85 3.758v3.74h4.962v-3.74z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M6.457 13.799v.609h.714v-.609z"
              ></path>
            </g>
            <g data-place="59" transform="translate(431.814 327.4)">
              <path

                data-position fill="#e2e1e1"
                d="M482.674 330.63l4.526 6.6-2.166 13.434-6.919-.076 1.536-8.732-4.391-6.566z"
                transform="translate(-475.26 -330.63)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M4.181 4.71v4.322h5.676V4.71z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M5.743 18.75v.52h.771v-.52z"
              ></path>
            </g>
            <g data-place="60" transform="translate(372.653 347.647)">
              <path

                data-position fill="#e2e1e1"
                d="M404.39 365.878a138.49 138.49 0 0015.752-2.292c0 .067 1.73-10.076 1.73-10.076h-9.034l-7.422 5.3z"
                transform="translate(-404.39 -353.51)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M5.529 3.543v5.1h6.423v-5.1z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M8.136 10.244v.84h.84v-.84z"
              ></path>
            </g>
            <g data-place="61" transform="translate(310.819 315.287)">
              <path

                data-position fill="#e2e1e1"
                d="M336.3 313.69h8.547l-2.309 13.434-2.359 2.939a37.4 37.4 0 01-8.749-7.154 47.317 47.317 0 003.887-2.83z"
                transform="translate(-331.43 -313.69)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M5.945 4.055v5.483h5V4.064h-5z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M7.498 14.24v.672h.756v-.672z"
              ></path>
            </g>
            <g data-place="62" transform="translate(307.317 315.289)">
              <path

                data-position fill="#e2e1e1"
                d="M327.26 316.223l3.812-2.519 3.921-.084-.993 6.28-3.493 2.435a16.272 16.272 0 01-3.249-6.113z"
                transform="translate(-327.26 -313.62)"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M3.191 6.616v.646h.672v-.646z"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M2.107 2.393v2.611H5.86V2.393z"
              ></path>
            </g>
            <g data-place="63" transform="translate(320.161 315.023)">
              <path

                data-position fill="#e2e1e1"
                d="M347.262 313.57l7.632.076-3.359 20.235s-5.575-1.125-8.976-3.526c.84-.932 1.679-1.9 2.46-2.914z"
                transform="translate(-342.56 -313.57)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M4.878 8.702v4.254h3.955V8.687z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M5.147 17.909v.688h.672v-.688z"
              ></path>
            </g>
            <g data-place="64" transform="translate(329.848 319.582)">
              <path

                data-position fill="#e2e1e1"
                d="M356.645 319.267l4.828-.067-.982 5.877 3.972.076-1.621 10.831a51.841 51.841 0 01-8.841-1z"
                transform="translate(-354 -319.2)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M2.519 7.933v5.056h5.5V7.933z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M4.274 15.533v.6h.638v-.6z"
              ></path>
            </g>
            <g data-place="65" transform="translate(351.696 308.393)">
              <path

                data-position fill="#e2e1e1"
                d="M384.381 306.406l12.225-.076-3.535 24.719s-10.6.957-12.821 1.486c.034 0 4.131-26.129 4.131-26.129z"
                transform="translate(-380.25 -306.33)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M4.232 10.333v6.611h8v-6.611z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M6.549 24.123v.789h.747v-.764z"
              ></path>
            </g>
            <g data-place="67" transform="translate(339.248 308.719)">
              <path

                data-position fill="#e2e1e1"
                d="M365.42 333.933l4.055-27.473h11.973l-4.2 26.155-7.708 1.352z"
                transform="translate(-365.42 -306.46)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M4.333 10.16v6.465h7.269V10.16z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M6.104 25.592v.84h.781v-.84z"
              ></path>
            </g>
            <g data-place="66" transform="translate(305.679 287.354)">
              <path

                data-position fill="#e2e1e1"
                d="M326.259 303.41l3.359-1.478 58.371-.428 3.283-21.184-44.761.16-1.427 6.885-17.741.05s-1.226 8.1-1.377 9.328a28.548 28.548 0 00.294 6.667z"
                transform="translate(-325.889 -280.32)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M24.065 4.316v12.7h18.464v-12.7z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M31.999 20.042v1.05h1.134v-1.05z"
              ></path>
            </g>
            <g data-place="108" transform="translate(308.252 279.835)">
              <path

                data-position fill="#e2e1e1"
                d="M329.11 278.414s.84-5.432 1.839-6.994c.05.059 11.9 3.283 11.9 3.283l-.63 3.82z"
                transform="translate(-329.11 -271.42)"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M6.767 5.919v.445h.5v-.428z"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M4.945 3.305V5.92h3.793V3.305z"
              ></path>
            </g>
            <g data-place="68" transform="translate(307.151 287.488)">
              <path

                data-position fill="#e2e1e1"
                d="M346.179 280.544l-1.125 6.322-17.414.059 1.134-6.415z"
                transform="translate(-327.64 -280.51)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M6.474 1.604v3.207h4.214V1.604z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M8.332 5.298v.445h.5v-.445z"
              ></path>
            </g>
            <g data-place="69" transform="translate(310.037 268.509)">
              <path

                data-position fill="#e2e1e1"
                d="M331.47 268.734s1.763-4.408 6.986-10.764c.285.134 20.151 13.518 20.151 13.518l-.672 4.845h-13.174l-1.217-4.274z"
                transform="translate(-331.47 -257.97)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M10.047 7.393v3.577h4.445V7.393z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M18.69 17.112v.84h.94v-.84z"
              ></path>
            </g>
            <g data-place="70" transform="translate(316.726 224.993)">
              <path

                data-position fill="#e2e1e1"
                d="M340.34 249.111s33.9-28.422 58.338-42.821c.353 1.125 2.015 6.919 2.015 6.919h2.678l-.05 1.008 8.212 7.893-1.427 1.058 2.116 1.906 1.327-1.058.42.689h8.85l-4.929 30.353 3.174.05-2.008 12.392-57.263.529-1.36-5.382z"
                transform="translate(-340.34 -206.29)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M41.239 30.869v16.247H60.67V30.869z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M49.387 59.597v1.343h1.318v-1.343z"
              ></path>
            </g>
            <g data-place="71" transform="translate(375.927 221.021)">
              <path

                data-position fill="#e2e1e1"
                d="M410.92 205.368l5.508-2.578-1.553 9.177h-2.335z"
                transform="translate(-410.92 -202.79)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M1.369 2.884v2.259h2.519v-2.3z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M2.082 8.144v.613h.672v-.613z"
              ></path>
            </g>
            <g data-place="72" transform="translate(383.421 220.31)">
              <path

                data-position fill="#e2e1e1"
                d="M427.979 218.145h-1.52l-6.6-6.054 1.679-9.992h20.042l-1.923 11.243h-10.94z"
                transform="translate(-419.86 -202.1)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M7.389 1.427v7.011h7.04V1.427z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M6.423 14.316v.714h.8v-.714z"
              ></path>
            </g>
            <g data-place="73" transform="translate(403.981 219.977)">
              <path

                data-position fill="#e2e1e1"
                d="M446.248 202.13h8.06l-1.8 11.192h-8.158z"
                transform="translate(-444.35 -202.13)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M2.761 3.296v4.271h4.64V3.296z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M3.812 9.689v.663h.672v-.663z"
              ></path>
            </g>
            <g data-place="74" transform="translate(420.579 219.712)">
              <path

                data-position fill="#e2e1e1"
                d="M466.043 202.16h8.245l-1.94 11.176h-8.228z"
                transform="translate(-464.12 -202.16)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M2.588 3.469v4.675H7.33V3.469z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M4.526 9.815v.63h.689v-.63z"
              ></path>
            </g>
            <g data-place="75" transform="translate(401.563 219.985)">
              <path

                data-position fill="#e2e1e1"
                d="M471.5 202.09l18.329.059 5.558 5.668-3.543 20.815H441.47l1.327-7.095h1.679l.47-2.914h1.906l.638-4.484h21.881z"
                transform="translate(-441.47 -202.09)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M31.167 7.834v14.2h15.266v-14.2z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.1"
                d="M21.847 25.433v1.108h1.066v-1.088z"
              ></path>
            </g>
            <g data-place="76" transform="translate(364.59 285.956)">
              <path

                data-position fill="#e2e1e1"
                d="M396.07 326.706l7.238-46.457 45.231-.369-1.109 7.82 12.872-.05-3.123 20.882-24.139-.176-1.679 9.924-10.076-.126-1.763 11.092-1.746.319a38.768 38.768 0 00-5.877-1.679c-3.293-.617-15.829-1.18-15.829-1.18z"
                transform="translate(-396.07 -279.88)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M12.376 6.759v15.07h33.048V6.759z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M19.043 44.417v1.293h1.394v-1.293z"
              ></path>
            </g>
            <g data-place="77" transform="translate(389.386 324.329)">
              <path

                data-position fill="#e2e1e1"
                d="M424.8 336.627l6-.319 1.763-10.076-6.138-.143z"
                transform="translate(-424.8 -326.09)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M2.203 3.158v3.215h3.62V3.158z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M3.203 9.11v.646h.68V9.11z"
              ></path>
            </g>
            <g data-place="78" transform="translate(395.847 314.399)">
              <path

                data-position fill="#e2e1e1"
                d="M432.7 334.434l1.73-10.076 3.359.067 1.629-10.025h6.071l-3.006 18.648z"
                transform="translate(-432.7 -314.4)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M2.578 11.217v5.04h6.3v-5.04z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M4.391 18.254v.655h.747v-.655z"
              ></path>
            </g>
            <g data-place="79" transform="translate(406.106 314.262)">
              <path

                data-position fill="#e2e1e1"
                d="M448.085 314.45l7.515.076-2.519 15.852-8.161 2.522z"
                transform="translate(-444.92 -314.45)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M3.241 6.928v3.417h4.2V6.928z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M4.089 15.785v.714h.756v-.714z"
              ></path>
            </g>
            <g data-place="80" transform="translate(414.737 314.162)">
              <path

                data-position fill="#e2e1e1"
                d="M455.2 330.194l2.687-15.684 8.757.076 4.836 6.986s-8.614 5.776-16.28 8.622z"
                transform="translate(-455.2 -314.51)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M5.147 2.824v5.021h5.464V2.824z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M7.098 10.697v.764h.781v-.764z"
              ></path>
            </g>
            <g data-place="81" transform="translate(427.104 307.244)">
              <path

                data-position fill="#e2e1e1"
                d="M476.938 318.159l8.086-5.365.092-1.008-10.076-5.256h-4.458l-.512 3.174h3.359l-.479 2.569z"
                transform="translate(-470.07 -306.53)"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M7.867 9.127v.7h.672v-.7z"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M5.55 4.047v3.107h4.677V4.047z"
              ></path>
            </g>
            <g data-place="82" transform="translate(427.556 300.93)">
              <path

                data-position fill="#e2e1e1"
                d="M470.74 304.822l.9-5.8h15.953a56.158 56.158 0 01-2.175 11.108c0-.176-10.134-5.3-10.134-5.3z"
                transform="translate(-470.74 -299.02)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M7.447.974v4.791h7.05V.974z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M13.652 8.9v.588h.655V8.9z"
              ></path>
            </g>
            <g data-place="83" transform="translate(431.146 292.495)">
              <path

                data-position fill="#e2e1e1"
                d="M488.3 297.027l1.293-7.977-13.2.05-1.2 7.926z"
                transform="translate(-475.19 -289.05)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M3.82 1.05v4.61h5.709V1.05z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M6.436 6.675v.756H7.2v-.756z"
              ></path>
            </g>
            <g data-place="107" transform="translate(416.475 271.782)">
              <path

                data-position fill="#e2e1e1"
                d="M487 284.659l3.308-20.579h-28.942l-3.216 20.563z"
                transform="translate(-458.15 -264.08)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#707070"
                strokeWidth="0.2"
                d="M10.721 7.044v9.359h10.715V7.049z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#707070"
                strokeWidth="0.2"
                d="M15.365 19.401v.817h.714v-.817z"
              ></path>
            </g>
            <g data-place="84" transform="translate(398.072 247.523)">
              <path

                data-position fill="#e2e1e1"
                d="M455.17 271.855h-18.413l2.107-13.736h-2.124l3.359-20.412h1.587l.529-2.9h48.8l-2.36 14.693-29.715.42z"
                transform="translate(-436.74 -234.81)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M6.272 7.884v9.62h12.777v-9.62z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M9.034 35.565v1.091h1.28v-1.091z"
              ></path>
            </g>
            <g data-place="85" transform="translate(435.332 199.359)">
              <path

                data-position fill="#e2e1e1"
                d="M489.49 178.23l-1.8 11.016-5.584.067 1.763-11.016z"
                transform="translate(-482.11 -178.23)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M1.612 3.683v3.7h4.04v-3.7z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M2.678 9.715v.621h.647v-.621z"
              ></path>
            </g>
            <g data-place="86" transform="translate(441.602 199.208)">
              <path

                data-position fill="#e2e1e1"
                d="M495.936 189.33l1.772-11.066-6.339-.084-1.788 11.1z"
                transform="translate(-489.58 -178.18)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M1.996 3.259v4.2h4.325v-4.2z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M3.501 9.799v.6h.663v-.6z"
              ></path>
            </g>
            <g data-place="87" transform="translate(426.264 199.476)">
              <path

                data-position fill="#e2e1e1"
                d="M473.25 178.18l8.128.059-1.805 11.15h-8.263z"
                transform="translate(-471.31 -178.18)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M2.93 2.695v5.03h4.366v-5.03z"
                data-name="logo-41"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M4.668 9.656v.688h.688v-.688z"
                data-name="popup-41"
              ></path>
            </g>
            <g data-place="88" transform="translate(415.042 194.053)">
              <path

                data-position fill="#e2e1e1"
                d="M468.337 188.283l2.888-16.793h-10.377l-2.788 16.734z"
                transform="translate(-458.06 -171.49)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M3.492 5.353v5.844h6.58V5.353z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M5.617 15.147v.789h.84v-.789z"
              ></path>
            </g>
            <g data-place="89" transform="translate(400.361 190.581)">
              <path

                data-position fill="#e2e1e1"
                d="M454.378 187.537l2.863-17.389h.579l.529-3.1h-14.441L440.65 187.5z"
                transform="translate(-440.65 -167.05)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M4.425 9.451v6.51h7.515v-6.51z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M7.212 18.799v.907h.9v-.907z"
              ></path>
            </g>
            <g data-place="90" transform="translate(386.114 190.788)">
              <path

                data-position fill="#e2e1e1"
                d="M436.955 187.487L440.263 167l-11.469.1-1.008 5.567h-1.637l-2.469 14.853z"
                transform="translate(-423.68 -167)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M4.591 8.335v7.323h7.4V8.335z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M6.683 18.715v1.041h1.142v-1.041z"
              ></path>
            </g>
            <g data-place="91" transform="translate(364.998 179.937)">
              <path

                data-position fill="#e2e1e1"
                d="M411.262 185.622l5.231-31.906-7.842-.076-9.891 7.17 3.233 3.073 1.679 5.508-2.821 16.171z"
                transform="translate(-398.76 -153.64)"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M7.238 30.319v1.31h1.36v-1.31z"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M7.238 9.471v5.617h6.073V9.471z"
              ></path>
            </g>
            <g data-place="92" transform="translate(344.191 187.774)">
              <path

                data-position fill="#e2e1e1"
                d="M393.971 186.957l3.652-21.134-3.443-3.283-20.36 15.113 11.411 10.915z"
                transform="translate(-373.82 -162.54)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M8.287 10.898v8.22h11.176v-8.22z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M13.417 24.056v.957h1.008v-.957z"
              ></path>
            </g>
            <g data-place="93" transform="translate(337.245 203.557)">
              <path

                data-position fill="#e2e1e1"
                d="M383.188 191.946l-11.31-10.756-6.658 4.643 10.311 10.034z"
                transform="translate(-365.22 -181.19)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M6.532 5.442v3.8h5.038v-3.8z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M10.059 12.561v.949h1.008v-.949z"
              ></path>
            </g>
            <g data-place="94" transform="translate(330.226 208.945)">
              <path

                data-position fill="#e2e1e1"
                d="M363.316 187.46l10.168 9.908-7.557 3.652-9.177-9.009z"
                transform="translate(-356.75 -187.46)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M5.248 4.783v3.993h5.39V4.783z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M8.984 11.612v.924h1.108v-.924z"
              ></path>
            </g>
            <g data-place="95" transform="translate(323.12 214.133)">
              <path

                data-position fill="#e2e1e1"
                d="M363.9 202.466l-9.236-8.976-6.482 4.685 9.085 8.581z"
                transform="translate(-348.18 -193.49)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M5.726 5.097V8.17h4.358V5.097z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M8.833 11.234v.84h.89v-.84z"
              ></path>
            </g>
            <g data-place="96" transform="translate(309.056 219.534)">
              <path

                data-position fill="#e2e1e1"
                d="M344.88 199.63l9.06 8.64-13.61 9.74-9.01-8.61z"
                transform="translate(-331.32 -199.63)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M7.977 6.549v4.559h5.357V6.549z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M8.69 16.549v.966h1.117v-.966z"
              ></path>
            </g>
            <g data-place="97" transform="translate(298.17 230.003)">
              <path

                data-position fill="#e2e1e1"
                d="M337.687 220.51l-9.009-8.64-10.537 7.666 10.8 10.5 2.091-4.131z"
                transform="translate(-318.14 -211.87)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M7.07 5.558v4.727h7.448V5.558z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M9.891 15.844v.663h.7v-.663z"
              ></path>
            </g>
            <g data-place="98" transform="translate(283.716 243.372)">
              <path

                data-position fill="#e2e1e1"
                d="M315.931 233.519l1.805-1.4 5.4 5.122-4.87 9.034-7.2-6.885-2.191 1.629-8.22-7.851 8.077-5.676 3.535 3.636.663-.512z"
                transform="translate(-300.65 -227.49)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M8.182 6.188v4.882h6.121V6.188z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M16.759 16.138v.932h1.033v-.932z"
              ></path>
            </g>
            <g data-place="102" transform="translate(249.196 250.223)">
              <path

                data-position fill="#e2e1e1"
                d="M311.441 248.087l-7.019-6.717-2.385 1.679-8.505-8.119L259.4 259.7l1.856 1.679h43.913s3.014-7.557 3.359-8.262 2.913-5.03 2.913-5.03z"
                transform="translate(-259.4 -234.93)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M22.729 12.427v11.142h12.906V12.427z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M28.917 24.408v1.461h1.377v-1.461z"
              ></path>
            </g>
            <g data-place="99" transform="translate(282.855 338.868)">
              <path

                data-position fill="#e2e1e1"
                d="M314.735 341.19l-17.095 12.368 2.964 2.788 18.581-6.818a29.326 29.326 0 00-4.45-8.338z"
                transform="translate(-297.64 -341.19)"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M9.614 11.317v.825h1.025v-.825z"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M10.672 5.726v3.7h5.038v-3.7z"
              ></path>
            </g>
            <g data-place="100" transform="translate(232.788 275.761)">
              <path

                data-position fill="#e2e1e1"
                d="M255.711 265l2.116 1.948 43.863-.109-5.248 19.8h-47.313l-9.8-9.589z"
                transform="translate(-239.33 -265)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M24.358 5.533v12.821h16.851V5.533z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M31.352 19.194v1.679h1.679v-1.679z"
              ></path>
            </g>
            <g data-place="101" transform="translate(211.738 288.481)">
              <path

                data-position fill="#e2e1e1"
                d="M292.145 289.6h-47.456l-10.076-9.891L214 294.756l32.746 31.537 16.675-12.259 1.553 1.343 6.986-5.088 18.724-1.906s-1.293-2.821 1.461-18.783z"
                transform="translate(-214 -279.71)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M34.845 15.265v13.526h18.8V15.265z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M44.769 33.493v1.78h2v-1.78z"
              ></path>
            </g>
            <g data-place="106" transform="translate(264.125 317.009)">
              <path

                data-position fill="#e2e1e1"
                d="M300.643 314.77l2.124 7.506-12.434 8.824-5.877-5.365-2.4 1.906-6.266-6.141 6.3-4.87z"
                transform="translate(-275.79 -314.77)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M10.407 3.258v6.406h8.35V3.258z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M14.047 14.593v.949h1.075v-.949z"
              ></path>
            </g>
            <g data-place="103" transform="translate(269.542 330.493)">
              <path

                data-position fill="#e2e1e1"
                d="M283.2 347.464l22.53-16.524s2.611 5.223 5.877 7.977c-.05.109-23.938 17.2-23.938 17.2l-5.709-5.332 2.914-1.906z"
                transform="translate(-281.96 -330.94)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M10.89 11.369v4.2h6.02v-4.2z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M5.306 23.694v.772h.84v-.772z"
              ></path>
            </g>
            <g data-place="104" transform="translate(270.487 348.095)">
              <path

                data-position fill="#e2e1e1"
                d="M294.584 355.807l-11.864 8.825 4.2 4.24 3.6-2.435 2.015 1.906a116.2 116.2 0 0124.685 1.024 20.925 20.925 0 00-.109-17.448c.109 0-19.244 6.927-19.244 6.927z"
                transform="translate(-282.72 -351.92)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M20.756 5.606v7.534h9.454V5.606z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M20.479 14.82v.789h.84v-.789z"
              ></path>
            </g>
            <g data-place="105" transform="translate(412.696 219.867)">
              <path

                data-position fill="#e2e1e1"
                d="M456.636 202.18h7.313l-1.889 11.176h-7.33z"
                transform="translate(-454.73 -202.18)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M2.626 3.329v4.488h4.066V3.329z"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M3.778 9.664v.672h.705v-.672z"
              ></path>
            </g>
            <g
              id="Vrstva_116"
              data-name="Vrstva 116"
              transform="translate(343.512 222.955)"
            >
              <g
                id="legend-icon-2"
                data-name="legend-icon"
                transform="translate(14.274 126.444)"
              >
                <circle
                  id="Ellipse_23"
                  cx="6.245"
                  cy="6.245"
                  r="6.245"
                  fill="#e85d0c"
                  data-name="Ellipse 23"
                  data-type="4"
                ></circle>
                <g
                  id="Group_443"
                  fill="#fff"
                  data-name="Group 443"
                  transform="translate(2.086 2.085)"
                >
                  <path
                    id="Path_621"
                    d="M384.065 358.082a.976.976 0 10-.694-.289.976.976 0 00.694.289z"
                    data-name="Path 621"
                    transform="translate(-380.289 -356.129)"
                  ></path>
                  <path
                    id="Path_622"
                    d="M384.551 360.337l-4 3.616a.282.282 0 01-.183.072h-2.052a.277.277 0 00-.277.277v.8a.277.277 0 00.272.283h2.479a.284.284 0 00.183-.072l4-3.616a.272.272 0 01.183-.072h1.819a.277.277 0 00.277-.277v-.815a.277.277 0 00-.266-.277h-2.218a.26.26 0 00-.217.081z"
                    data-name="Path 622"
                    transform="translate(-378.04 -357.967)"
                  ></path>
                  <path
                    id="Path_623"
                    d="M384 360.19a1.054 1.054 0 00-1.06 1.06v1.808l2.113-1.914a1.06 1.06 0 00-1.053-.954z"
                    data-name="Path 623"
                    transform="translate(-380.222 -357.937)"
                  ></path>
                  <path
                    id="Path_624"
                    d="M384.65 366.916h1.217a.283.283 0 00.168-.061l3.466-3.144h-1.191a.228.228 0 00-.168.066z"
                    data-name="Path 624"
                    transform="translate(-380.984 -359.505)"
                  ></path>
                </g>
              </g>
              <g
                id="Group_471-2"
                data-name="Group 471-2"
                transform="translate(95.043 41.982)"
              >
                <g id="legend-icon-3" data-name="legend-icon" data-type="4">
                  <circle
                    id="Ellipse_23-2"
                    cx="5.879"
                    cy="5.879"
                    r="5.879"
                    fill="#e85d0c"
                    data-name="Ellipse 23-2"
                  ></circle>
                  <g
                    id="Group_443-2"
                    fill="#fff"
                    data-name="Group 443-2"
                    transform="translate(2.206 2.068)"
                  >
                    <path
                      id="Path_621-2"
                      d="M499.112 260.925a.873.873 0 10-.62-.258.873.873 0 00.62.258z"
                      data-name="Path 621-2"
                      transform="translate(-495.755 -259.179)"
                    ></path>
                    <path
                      id="Path_622-2"
                      d="M499.071 263.4l-3.586 3.249a.251.251 0 01-.164.065h-1.835a.252.252 0 00-.252.252v.724a.252.252 0 00.252.252h2.2a.233.233 0 00.164-.07l3.576-3.228a.242.242 0 01.164-.065h1.627a.252.252 0 00.252-.252v-.727a.252.252 0 00-.238-.252h-1.984a.234.234 0 00-.179.065z"
                      data-name="Path 622-2"
                      transform="translate(-493.234 -261.279)"
                    ></path>
                    <path
                      id="Path_623-2"
                      d="M499.037 263.19a.942.942 0 00-.947.947v1.617l1.89-1.711a.947.947 0 00-.943-.853z"
                      data-name="Path 623-2"
                      transform="translate(-495.679 -261.2)"
                    ></path>
                    <path
                      id="Path_624-2"
                      d="M499.85 269.627h1.066a.234.234 0 00.154-.06l3.1-2.807h-1.07a.2.2 0 00-.149.06z"
                      data-name="Path 624-2"
                      transform="translate(-496.566 -262.999)"
                    ></path>
                  </g>
                </g>
              </g>
              <g id="Group_471-2-2" data-name="Group 471-2">
                <g id="legend-icon-4" data-name="legend-icon" data-type="4">
                  <circle
                    id="Ellipse_23-2-2"
                    cx="6.176"
                    cy="6.176"
                    r="6.176"
                    fill="#e85d0c"
                    data-name="Ellipse 23-2"
                  ></circle>
                  <g
                    id="Group_443-2-2"
                    fill="#fff"
                    data-name="Group 443-2"
                    transform="translate(2.323 2.174)"
                  >
                    <path
                      id="Path_621-2-2"
                      d="M499.157 261.014a.917.917 0 10-.652-.271.917.917 0 00.652.271z"
                      data-name="Path 621-2"
                      transform="translate(-495.635 -259.18)"
                    ></path>
                    <path
                      id="Path_622-2-2"
                      d="M499.368 263.4l-3.767 3.413a.266.266 0 01-.168.068H493.5a.26.26 0 00-.26.26v.761a.266.266 0 00.26.265h2.313a.245.245 0 00.168-.073l3.757-3.392a.252.252 0 01.168-.068h1.709a.26.26 0 00.26-.26v-.766a.26.26 0 00-.252-.26h-2.083a.245.245 0 00-.187.068z"
                      data-name="Path 622-2"
                      transform="translate(-493.241 -261.177)"
                    ></path>
                    <path
                      id="Path_623-2-2"
                      d="M499.085 263.19a.99.99 0 00-.995.995v1.7l1.985-1.8a1 1 0 00-.99-.895z"
                      data-name="Path 623-2"
                      transform="translate(-495.564 -261.1)"
                    ></path>
                    <path
                      id="Path_624-2-2"
                      d="M499.85 269.772h1.12a.245.245 0 00.161-.062l3.257-2.949h-1.126a.214.214 0 00-.156.062z"
                      data-name="Path 624-2"
                      transform="translate(-496.407 -262.81)"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <g
              id="Vrstva_126"
              data-name="Vrstva 126"
              transform="translate(236.115 335.552)"
            >
              <circle
                id="Ellipse_31"
                cx="5.855"
                cy="5.855"
                r="5.855"
                fill="#59aeb9"
                data-name="Ellipse 31"
                data-type="3"
              ></circle>
              <g
                id="Group_461"
                data-name="Group 461"
                transform="translate(2.623 3.514)"
              >
                <g id="Group_460" fill="#fff" data-name="Group 460">
                  <path
                    id="Path_637"
                    d="M234.067 344.88h-.756s-.387 0-.387.588a.42.42 0 00.371.442h1.54a.431.431 0 00.4-.442v-.463a.107.107 0 01.092-.107h1.211a.038.038 0 01.038.033l.285.646a.49.49 0 00.588.36l.076-.027a.415.415 0 00.3-.5v-.054l-.71-2.153a.732.732 0 00-.715-.4h-1.668c-.9 0-1.657 1.049-.63 2.061v.027z"
                    data-name="Path 637"
                    transform="translate(-232.923 -341.264)"
                  ></path>
                  <circle
                    id="Ellipse_32"
                    cx="1.119"
                    cy="1.119"
                    r="1.119"
                    data-name="Ellipse 32"
                    transform="translate(4.222)"
                  ></circle>
                </g>
              </g>
            </g>
            <g
              id="Vrstva_127"
              data-name="Vrstva 127"
              transform="translate(251.516 328.521)"
              data-type="1"
            >
              <circle
                id="Ellipse_20"
                cx="5.855"
                cy="5.855"
                r="5.855"
                fill="#59aeb9"
                data-name="Ellipse 20"
              ></circle>
              <g
                id="Group_437"
                fill="#fff"
                data-name="Group 437"
                transform="translate(2.44 3.052)"
              >
                <path
                  id="Path_608"
                  d="M259.66 341.071a.99.99 0 11.99-.99 1 1 0 01-.99.99z"
                  data-name="Path 608"
                  transform="translate(-258.371 -339.091)"
                ></path>
                <path
                  id="Path_609"
                  d="M259.4 346.752a.2.2 0 01-.188-.129l-1.076-2.8a.194.194 0 010-.188.2.2 0 01.168-.084h2.153a.194.194 0 01.194.2.316.316 0 010 .076l-1.076 2.8a.21.21 0 01-.161.129z"
                  data-name="Path 609"
                  transform="translate(-258.115 -341.151)"
                ></path>
                <path
                  id="Path_610"
                  d="M267.546 341.071a.99.99 0 11.985-1 .985.985 0 01-.985 1z"
                  data-name="Path 610"
                  transform="translate(-262.011 -339.091)"
                ></path>
                <path
                  id="Path_611"
                  d="M268.388 346.754h-2.153a.2.2 0 01-.168-.084.194.194 0 010-.188l1.076-2.8a.2.2 0 01.264-.113.21.21 0 01.113.113l1.076 2.8a.2.2 0 01-.113.259h-.076z"
                  data-name="Path 611"
                  transform="translate(-261.777 -341.153)"
                ></path>
                <path
                  id="Path_612"
                  d="M264.285 344.721a.2.2 0 01-.2-.2v-5.193a.2.2 0 01.232-.168.2.2 0 01.172.168v5.193a.2.2 0 01-.2.2z"
                  data-name="Path 612"
                  transform="translate(-260.87 -339.12)"
                ></path>
              </g>
            </g>
            <g
              id="Vrstva_124"
              data-name="Vrstva 124"
              transform="translate(306.899 177.319)"
            >
              <g
                id="legend-icon-5"
                data-name="legend-icon"
                transform="translate(0 177.637)"
              >
                <path
                  id="Path_644-2"
                  fill="#ba3d8e"
                  d="M336.984 352.69a6.2 6.2 0 11-6.194 6.206 6.2 6.2 0 016.194-6.206z"
                  data-name="Path 644-2"
                  transform="translate(-330.79 -352.69)"
                ></path>
                <g
                  id="Group_466-2"
                  data-name="Group 466-2"
                  transform="translate(4.627 2.805)"
                >
                  <path
                    id="Path_640-2"
                    fill="#fff"
                    d="M341.982 363.885l-.1.4-.7.266a2.053 2.053 0 01-.612.091 1.206 1.206 0 01-.827-.26.833.833 0 01-.3-.663 2.984 2.984 0 010-.317 1.63 1.63 0 01.074-.369l.369-1.3c.034-.119.056-.238.079-.357a1.32 1.32 0 00.034-.3.488.488 0 00-.1-.351.566.566 0 00-.391-.1 1.034 1.034 0 00-.295.045l-.252.084.1-.4c.243-.1.47-.181.691-.252a2.081 2.081 0 01.623-.1 1.235 1.235 0 01.822.252.878.878 0 01.289.672v.323a2.384 2.384 0 01-.074.391l-.363 1.3a3.475 3.475 0 00-.084.357 2.55 2.55 0 00-.034.3.425.425 0 00.113.351.663.663 0 00.4.1 1.428 1.428 0 00.306-.045 2.079 2.079 0 00.244-.084zm.091-5.441a.771.771 0 01-.252.567.919.919 0 01-1.235 0 .748.748 0 010-1.134.918.918 0 011.235 0 .8.8 0 01.252.568z"
                    data-name="Path 640-2"
                    transform="translate(-338.953 -357.639)"
                  ></path>
                </g>
              </g>
            </g>
            <g
              id="no-entry_1_"
              data-name="no-entry (1)"
              transform="translate(618.907 254.613)"
            >
              <path
                id="Path_60"
                fill="#ea473b"
                d="M6.239 0a6.239 6.239 0 106.239 6.239A6.239 6.239 0 006.239 0zm0 10.85a4.611 4.611 0 114.611-4.611 4.611 4.611 0 01-4.611 4.611z"
                data-name="Path 60"
              ></path>
              <path
                id="Path_61"
                fill="#e03b36"
                d="M.532 6.254A6.239 6.239 0 016.5.022a6.238 6.238 0 100 12.465A6.239 6.239 0 01.532 6.254z"
                data-name="Path 61"
                transform="translate(0 -.015)"
              ></path>
            </g>
            <text
              id="Jeremiášova"
              fill="#acacac"
              fontFamily="ArialMT, Arial"
              fontSize="9"
              letterSpacing=".1em"
              transform="rotate(1 -32417.048 24559.265)"
            >
              <tspan x="0" y="8">
                Jeremiášova
              </tspan>
            </text>
            <text
              id="Vchod"
              fill="#acacac"
              fontFamily="ArialMT, Arial"
              fontSize="8"
              letterSpacing=".05em"
              transform="rotate(-2 10991.487 -9812.241)"
            >
              <tspan x="26.392" y="7">
                Vchod
              </tspan>
            </text>
            <text
              id="Vjezd"
              fill="#acacac"
              fontFamily="ArialMT, Arial"
              fontSize="8"
              letterSpacing=".05em"
              transform="translate(545.1 305.886)"
            >
              <tspan x="27.727" y="7">
                Vjezd
              </tspan>
            </text>
            <text
              id="Vchod-2"
              fill="#acacac"
              data-name="Vchod"
              fontFamily="ArialMT, Arial"
              fontSize="8"
              letterSpacing=".05em"
              transform="rotate(-83 461.221 -8.617)"
            >
              <tspan x="26.392" y="7">
                Vchod
              </tspan>
            </text>
            <text
              id="Vjezd-2"
              fill="#acacac"
              data-name="Vjezd"
              fontFamily="ArialMT, Arial"
              fontSize="8"
              letterSpacing=".05em"
              transform="rotate(-89 387.185 58.92)"
            >
              <tspan x="27.727" y="7">
                Vjezd
              </tspan>
            </text>
            <path
              id="Path_39"
              fill="#898989"
              d="M-116.63 528.935l-11.043-8.593-.007.009-5.495 2.215.816 2.024 4.343-1.751 9.085 7.069-.621 4.62 2.162.291.79-5.875z"
              data-name="Path 39"
              transform="rotate(-32 -159.718 -332.06)"
            ></path>
            <path
              id="Path_40"
              fill="#898989"
              d="M-116.63 528.935l-11.043-8.593-.007.009-5.495 2.215.816 2.024 4.343-1.751 9.085 7.069-.621 4.62 2.162.291.79-5.875z"
              data-name="Path 40"
              transform="rotate(-117.97 147.584 215.997)"
            ></path>
            <g
              id="Group_37"
              data-name="Group 37"
              transform="translate(-2.302 -4.494)"
              data-type="6"
            >
              <rect
                id="Rectangle_3"
                width="13"
                height="13"
                fill="#1a9ed9"
                data-name="Rectangle 3"
                rx="2"
                transform="rotate(1 -17276.7 32192.14)"
              ></rect>
              <g
                id="Group_8"
                data-name="Group 8"
                transform="rotate(1 -16747.627 66233.03)"
              >
                <path
                  id="Path_41"
                  fill="#fff"
                  d="M-472.028 106.172a2.7 2.7 0 01-1.772.517h-1.471v2.2a.342.342 0 01-.342.342h-.782a.342.342 0 01-.342-.342v-6.379a.342.342 0 01.342-.342h2.691a2.45 2.45 0 011.673.546 2.131 2.131 0 01.624 1.691 2.19 2.19 0 01-.621 1.767zm-1.127-2.543a1.19 1.19 0 00-.786-.235h-1.33v2.079h1.33a1.129 1.129 0 00.786-.254 1.035 1.035 0 00.281-.8.972.972 0 00-.281-.79z"
                  data-name="Path 41"
                  transform="translate(-113.194 -83.792)"
                ></path>
                <path
                  id="Path_42"
                  fill="#e6e6e6"
                  d="M-385.369 102.718a2.45 2.45 0 00-1.673-.546h-.913a2.45 2.45 0 011.673.546 2.131 2.131 0 01.624 1.691 2.19 2.19 0 01-.62 1.767 2.7 2.7 0 01-1.772.517h.913a2.7 2.7 0 001.772-.517 2.19 2.19 0 00.62-1.767 2.131 2.131 0 00-.624-1.691z"
                  data-name="Path 42"
                  transform="translate(-199.856 -83.796)"
                ></path>
                <path
                  id="Path_43"
                  fill="#fff"
                  d="M-583.675 18.723h1.067a.152.152 0 00.1-.266l-2.253-2a.152.152 0 00-.1-.038H-590.295l-2.237 2.038a.152.152 0 00.1.265l1.008-.005a.152.152 0 00.1-.038l1.478-1.311a.152.152 0 01.1-.038h4.419a.152.152 0 01.1.04l1.437 1.309a.152.152 0 00.115.044z"
                  data-name="Path 43"
                ></path>
              </g>
            </g>

            <g
              id="Group_36"
              data-name="Group 36"
              transform="rotate(11 448.996 313.7)"
              data-type="6"
            >
              <rect
                id="Rectangle_4"
                width="13"
                height="13"
                fill="#1a9ed9"
                data-name="Rectangle 4"
                rx="2"
                transform="rotate(-13 1940.138 -1263.801)"
              ></rect>
              <g
                id="Group_9"
                data-name="Group 9"
                transform="rotate(-13 1579.862 -3863.397)"
              >
                <path
                  id="Path_41-2"
                  fill="#fff"
                  d="M-472.028 106.172a2.7 2.7 0 01-1.772.517h-1.471v2.2a.342.342 0 01-.342.342h-.782a.342.342 0 01-.342-.342v-6.379a.342.342 0 01.342-.342h2.691a2.45 2.45 0 011.673.546 2.131 2.131 0 01.624 1.691 2.19 2.19 0 01-.621 1.767zm-1.127-2.543a1.19 1.19 0 00-.786-.235h-1.33v2.079h1.33a1.129 1.129 0 00.786-.254 1.035 1.035 0 00.281-.8.972.972 0 00-.281-.79z"
                  data-name="Path 41"
                  transform="translate(-113.194 -83.792)"
                ></path>
                <path
                  id="Path_42-2"
                  fill="#e6e6e6"
                  d="M-385.369 102.718a2.45 2.45 0 00-1.673-.546h-.913a2.45 2.45 0 011.673.546 2.131 2.131 0 01.624 1.691 2.19 2.19 0 01-.62 1.767 2.7 2.7 0 01-1.772.517h.913a2.7 2.7 0 001.772-.517 2.19 2.19 0 00.62-1.767 2.131 2.131 0 00-.624-1.691z"
                  data-name="Path 42"
                  transform="translate(-199.856 -83.796)"
                ></path>
                <path
                  id="Path_43-2"
                  fill="#fff"
                  d="M-583.675 18.723h1.067a.152.152 0 00.1-.266l-2.253-2a.152.152 0 00-.1-.038H-590.295l-2.237 2.038a.152.152 0 00.1.265l1.008-.005a.152.152 0 00.1-.038l1.478-1.311a.152.152 0 01.1-.038h4.419a.152.152 0 01.1.04l1.437 1.309a.152.152 0 00.115.044z"
                  data-name="Path 43"
                ></path>
              </g>
            </g>
            <g
              id="Group_35"
              data-name="Group 35"
              transform="rotate(11 407.832 300.772)"
              data-type="6"
            >
              <rect
                id="Rectangle_5"
                width="13"
                height="13"
                fill="#1a9ed9"
                data-name="Rectangle 5"
                rx="2"
                transform="rotate(-11 2300.274 -1989.51)"
              ></rect>
              <g
                id="Group_10"
                data-name="Group 10"
                transform="rotate(-11 1928.395 -5066.842)"
              >
                <g
                  id="Group_11"
                  data-name="Group 11"
                  transform="translate(-.084 -.958)"
                >
                  <path
                    id="Path_41-3"
                    fill="#fff"
                    d="M-472.028 106.172a2.7 2.7 0 01-1.772.517h-1.471v2.2a.342.342 0 01-.342.342h-.782a.342.342 0 01-.342-.342v-6.379a.342.342 0 01.342-.342h2.691a2.45 2.45 0 011.673.546 2.131 2.131 0 01.624 1.691 2.19 2.19 0 01-.621 1.767zm-1.127-2.543a1.19 1.19 0 00-.786-.235h-1.33v2.079h1.33a1.129 1.129 0 00.786-.254 1.035 1.035 0 00.281-.8.972.972 0 00-.281-.79z"
                    data-name="Path 41"
                    transform="translate(-113.193 -83.792)"
                  ></path>
                  <path
                    id="Path_42-3"
                    fill="#e6e6e6"
                    d="M-385.369 102.718a2.45 2.45 0 00-1.673-.546h-.913a2.45 2.45 0 011.673.546 2.131 2.131 0 01.624 1.691 2.19 2.19 0 01-.62 1.767 2.7 2.7 0 01-1.772.517h.913a2.7 2.7 0 001.772-.517 2.19 2.19 0 00.62-1.767 2.131 2.131 0 00-.624-1.691z"
                    data-name="Path 42"
                    transform="translate(-199.856 -83.796)"
                  ></path>
                </g>
              </g>
            </g>

            <g data-type="5" transform="translate(369.528 327.414)">
              <circle cx="5.948" cy="5.948" r="5.948" fill="#85bf40" />
              <g transform="translate(3.125 1.912)">
                <g>
                  <g>
                    <path d="M104.943,57.635a.409.409,0,0,0-.388-.254c-.083,0-.09,0-.14,0h-1.476a.386.386,0,0,0-.388.251l-.714,2.171a.354.354,0,0,0,.205.455.348.348,0,0,0,.451-.206l.191-.511s.013-.052.013.174V62.73a.472.472,0,1,0,.944,0V60.761a.015.015,0,0,1,.016-.017h.178a.015.015,0,0,1,.016.017V62.73a.472.472,0,1,0,.944,0V59.717c0-.229.021-.157.021-.157l.183.494a.349.349,0,0,0,.451.206.354.354,0,0,0,.205-.455Z" transform="translate(-101.815 -55.136)" fill="#fff" />
                    <ellipse cx="1.014" cy="1.004" rx="1.014" ry="1.004" transform="translate(0.928)" fill="#fff" />
                  </g>
                  <g transform="translate(5.431 2.29)">
                    <path d="M107.65,58.419c.049.078.013.142-.079.142H106.39c-.092,0-.127-.064-.079-.142l.581-.943a.1.1,0,0,1,.176,0Z" transform="translate(-106.289 -57.418)" fill="#fff" />
                    <path d="M106.311,59.108c-.049-.078-.013-.142.079-.142h1.181c.092,0,.127.064.079.142l-.581.943a.1.1,0,0,1-.176,0Z" transform="translate(-106.289 -57.087)" fill="#fff" />
                  </g>
                </g>
              </g>
            </g>

            <g data-type="5" transform="translate(310.528 260.414)">
              <circle cx="5.948" cy="5.948" r="5.948" fill="#85bf40" />
              <g transform="translate(3.125 1.912)">
                <g>
                  <g>
                    <path d="M104.943,57.635a.409.409,0,0,0-.388-.254c-.083,0-.09,0-.14,0h-1.476a.386.386,0,0,0-.388.251l-.714,2.171a.354.354,0,0,0,.205.455.348.348,0,0,0,.451-.206l.191-.511s.013-.052.013.174V62.73a.472.472,0,1,0,.944,0V60.761a.015.015,0,0,1,.016-.017h.178a.015.015,0,0,1,.016.017V62.73a.472.472,0,1,0,.944,0V59.717c0-.229.021-.157.021-.157l.183.494a.349.349,0,0,0,.451.206.354.354,0,0,0,.205-.455Z" transform="translate(-101.815 -55.136)" fill="#fff" />
                    <ellipse cx="1.014" cy="1.004" rx="1.014" ry="1.004" transform="translate(0.928)" fill="#fff" />
                  </g>
                  <g transform="translate(5.431 2.29)">
                    <path d="M107.65,58.419c.049.078.013.142-.079.142H106.39c-.092,0-.127-.064-.079-.142l.581-.943a.1.1,0,0,1,.176,0Z" transform="translate(-106.289 -57.418)" fill="#fff" />
                    <path d="M106.311,59.108c-.049-.078-.013-.142.079-.142h1.181c.092,0,.127.064.079.142l-.581.943a.1.1,0,0,1-.176,0Z" transform="translate(-106.289 -57.087)" fill="#fff" />
                  </g>
                </g>
              </g>
            </g>

            <g
              id="Group_32"
              data-name="Group 32"
              transform="rotate(11 432.254 288.625)"
            >
              <g
                id="legend-icon-8"
                data-name="legend-icon"
                transform="rotate(-12.04 912.376 -2691.96)"
              >
                <path
                  id="Path_644"
                  fill="#0cc3a5"
                  d="M484.109 144.19a6.135 6.135 0 11-4.355 1.81 6.135 6.135 0 014.355-1.81z"
                  data-name="Path 644"
                  transform="translate(-477.968 -144.19)"
                ></path>
              </g>
              <g
                id="Group_23"
                fill="#fff"
                data-name="Group 23"
                transform="rotate(-11 806.028 -2950.128)"
              >
                <path
                  id="Path_46"
                  d="M32.281 35.08l-.486-1.213h-1.968q-.045.082-.093.161l.679.672h.654v.453h-.84l-.754-.746a4.091 4.091 0 01-.615.635l.658.651h.654v.453h-.84l-.84-.831a4.09 4.09 0 01-.82.415l.674.667H29v.453h-.84l-.966-.955-.237.081a1.219 1.219 0 00-.825 1.153v.186a.615.615 0 00.615.615h2.567l.681-.374a.418.418 0 01.5.071l.3.3h1.868v-.89a5.268 5.268 0 00-.378-1.96z"
                  data-name="Path 46"
                  transform="translate(-25.758)"
                ></path>
                <path
                  id="Path_47"
                  d="M.83 350.134a.83.83 0 10.83.83.83.83 0 00-.83-.83z"
                  data-name="Path 47"
                  transform="translate(0 -311.778)"
                ></path>
                <path
                  id="Path_48"
                  d="M127.5 350.134a.83.83 0 10.83.83.83.83 0 00-.83-.83z"
                  data-name="Path 48"
                  transform="translate(-124.869 -311.778)"
                ></path>
                <path
                  id="Path_49"
                  d="M254.163 350.134a.83.83 0 10.83.83.83.83 0 00-.83-.83z"
                  data-name="Path 49"
                  transform="translate(-249.737 -311.778)"
                ></path>
                <path
                  id="Path_50"
                  d="M380.83 350.134a.83.83 0 10.83.83.83.83 0 00-.83-.83z"
                  data-name="Path 50"
                  transform="translate(-374.606 -311.778)"
                ></path>
              </g>
            </g>
            <g
              id="Group_31"
              data-name="Group 31"
              transform="rotate(11 432.254 288.625)"
            >
              <g
                id="legend-icon-9"
                data-name="legend-icon"
                transform="rotate(-12.04 665.736 -1905.547)"
              >
                <path
                  id="Path_644-2-4"
                  fill="#ffbc00"
                  d="M484.109 144.19a6.135 6.135 0 11-4.355 1.81 6.135 6.135 0 014.355-1.81z"
                  data-name="Path 644"
                  transform="translate(-477.968 -144.19)"
                ></path>
              </g>
              <g
                id="Group_24"
                fill="#fff"
                data-name="Group 24"
                transform="rotate(-10.02 771.12 -2257.082)"
              >
                <path
                  id="Path_51"
                  d="M18.477 179.228l-1.092-2.1a.821.821 0 00-.728-.442h-.6v-1.735h-4.425v2.679h1.088v-.93a1.123 1.123 0 112.246-.014v.946h1.694l1.092 2.1a.821.821 0 00.728.442h.42a.3.3 0 00.3-.3v-.335a.3.3 0 00-.3-.3z"
                  data-name="Path 51"
                  transform="translate(0 -172.242)"
                ></path>
                <path
                  id="Path_52"
                  d="M15.078 378.7h-2.47v-.8h-.976v2.077h.976v-.806h2.47v.806h.976V377.9h-.976z"
                  data-name="Path 52"
                  transform="translate(0 -372.045)"
                ></path>
                <path
                  id="Path_53"
                  d="M16.047 0l-2.173 2.245h4.353z"
                  data-name="Path 53"
                  transform="translate(-2.207)"
                ></path>
                <path
                  id="Path_54"
                  d="M112.533 244.295a.659.659 0 00-.658.658v.943h1.316v-.943a.659.659 0 00-.658-.658z"
                  data-name="Path 54"
                  transform="translate(-98.69 -240.511)"
                ></path>
              </g>
            </g>
            <text
              id="Radlická"
              fill="#acacac"
              fontFamily="ArialMT, Arial"
              fontSize="9"
              letterSpacing=".1em"
              transform="rotate(36 -548.597 548.45)"
            >
              <tspan x="0" y="8">
                Radlická
              </tspan>
            </text>
            <g data-place="130" transform="rotate(-3 4591.006 -8639.17)">
              <path

                data-position fill="#e2e1e1"
                d="M465.634 202.16l6.379.334-1.772 8.787-6.121-.321z"
                data-name="position-29"
                transform="translate(-464.12 -202.16)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M2.038 2.732v3.682h3.734V2.732z"
                data-name="logo-29"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M3.564 7.73v.5h.542v-.5z"
                data-name="popup-29"
              ></path>
            </g>
            <g data-place="131" transform="rotate(-3 6547.226 -8380.61)">
              <path

                data-position fill="#e2e1e1"
                d="M465.634 202.16l6.379.334-1.772 8.787-6.121-.321z"
                data-name="position-29"
                transform="translate(-464.12 -202.16)"
              ></path>
              <path
                data-logo fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M2.038 2.732v3.682h3.734V2.732z"
                data-name="logo-29"
              ></path>
              <path
                data-popup fill="none"
                stroke="#717171"
                strokeWidth="0.2"
                d="M3.564 7.73v.5h.542v-.5z"
                data-name="popup-29"
              ></path>
            </g>
            <g
              id="right-arrow_3_"
              data-name="right-arrow (3)"
              transform="scale(-1) rotate(85.99 90.206 -326.31)"
            >
              <g
                id="Group_38"
                data-name="Group 38"
                transform="translate(0 127.369)"
              >
                <path
                  id="Path_62"
                  fill="#acacac"
                  stroke="#acacac"
                  strokeWidth="0.3"
                  d="M7.806 1.849h0L6.02.063a.179.179 0 10-.252.252l1.481 1.482H.179a.179.179 0 000 .357h7.07l-1.48 1.477a.179.179 0 10.232.271l.019-.019 1.786-1.786a.179.179 0 000-.248z"
                  data-name="Path 62"
                ></path>
              </g>
            </g>
            <g
              id="right-arrow_3_2"
              data-name="right-arrow (3)"
              transform="rotate(7 -1962.634 3710.442)"
            >
              <g
                id="Group_38-2"
                data-name="Group 38"
                transform="translate(0 127.369)"
              >
                <path
                  id="Path_62-2"
                  fill="#acacac"
                  stroke="#acacac"
                  strokeWidth="0.3"
                  d="M7.806 1.849h0L6.02.063a.179.179 0 10-.252.252l1.481 1.482H.179a.179.179 0 000 .357h7.07l-1.48 1.477a.179.179 0 10.232.271l.019-.019 1.786-1.786a.179.179 0 000-.248z"
                  data-name="Path 62"
                ></path>
              </g>
            </g>
          </g>
        </svg>


      </React.Fragment>
    );
  }
}
