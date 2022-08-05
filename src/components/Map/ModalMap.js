import React from "react";
import { ReactComponent as ArrowIcon } from "./../../images/arrow.svg";
import { ReactComponent as Discount } from "./../../images/percent.svg";
import parse from "html-react-parser";

class ModalMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalData: "",
    };
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps() {
    this.closeModal();
    this.setState({
      modalData: this.props.newModalData,
    });
  }
  closeModal() {
    const shopModal = document.querySelector(".shop-modal");
    const shopModalClose = document.querySelector(".shop-modal__close");

    shopModalClose.addEventListener("click", function () {
      shopModal.classList.remove("open");
    });
    shopModal.addEventListener("click", function (e) {
      /* TODO: MIV 2022 */
      /*    e.target.classList.contains("shop-modal")
           ? shopModal.classList.remove("open")
           : null; */
    });

    this.setState({
      modalData: "",
    });
  }
  render() {
    const { modalData } = this.state;
    return (
      <React.Fragment>
        <aside className="shop-modal">
          <div className="shop-modal__before">
            <div className="shop-modal__wrap">
              <div className="shop-modal__wrap-bg">
                <div className="shop-modal__close"></div>
                <div className="shop-modal__intro-wrapper">

                  {modalData[0] ? (
                    modalData[0].field_shop_gallery_export ? (
                      modalData[0].field_shop_gallery_export[0] !== undefined ? (
                        <div
                          className="shop-modal__intro"

                          style={{
                            backgroundImage: modalData[0].field_shop_gallery_export ? `url(${modalData[0].field_shop_gallery_export[0].media_image})` : `url(https://picsum.photos/id/348/600/250)`
                          }}
                        ></div>
                      ) : null
                    ) : null
                  ) : null}
                </div>

                <div className="wrapper__shop-modal__category">
                  {modalData[0] ? (
                    modalData[0].field_shop_category_export.map((f, i) => (
                      f ? (
                        <div className="shop-modal__category" key={i}>
                          <span
                            className="shop-modal__category-color"
                            style={{
                              background: modalData[0].field_shop_category_export[i].category_of_units_color,
                            }}
                          ></span>
                          <p>{modalData[0].field_shop_category_export[i].name}</p>
                        </div>
                      ) : null
                    ))
                  ) : null}

                </div>
                <section className="shop-modal__content">
                  <div className="subheading shop-modal__title">
                    <h2>{modalData[0] ? modalData[0].title : ""}</h2>
                  </div>

                  <div className="shop-modal__detail">
                    <div className="shop-modal__logo">
                      {/*   <div className="list-of-shops__discount">
                        <Discount />
                      </div> */}
                      <img
                        src={modalData[0] ? modalData[0].field_shop_logo : ""}
                      />
                    </div>
                    <ul>
                      <p className="status">nyní otevřeno</p>
                      <ul className="shop-modal__open-hours">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14.705"
                            height="14.598"
                            viewBox="0 0 14.705 14.598"
                          >
                            <g
                              id="Group_592"
                              data-name="Group 592"
                              transform="translate(-259 -507)"
                            >
                              <g
                                id="time_2_"
                                data-name="time (2)"
                                transform="translate(259 507)"
                              >
                                <g id="Layer_2_16_" transform="translate(0 0)">
                                  <g
                                    id="Group_499"
                                    data-name="Group 499"
                                    transform="translate(0 0)"
                                  >
                                    <path
                                      id="Path_650"
                                      data-name="Path 650"
                                      d="M253.518,423.173c-.121.03-.245.057-.368.08a.591.591,0,0,0,.215,1.163c.146-.027.293-.059.438-.1a.591.591,0,0,0-.286-1.147Z"
                                      transform="translate(-244.68 -409.833)"
                                      fill="#009adf"
                                    ></path>
                                    <path
                                      id="Path_651"
                                      data-name="Path 651"
                                      d="M412.631,137.374a.591.591,0,0,0,1.122-.372c-.047-.141-.1-.283-.154-.421a.591.591,0,1,0-1.1.439C412.548,137.137,412.592,137.256,412.631,137.374Z"
                                      transform="translate(-399.422 -131.958)"
                                      fill="#009adf"
                                    ></path>
                                    <path
                                      id="Path_652"
                                      data-name="Path 652"
                                      d="M321.483,394.009c-.1.069-.212.135-.32.2a.591.591,0,1,0,.591,1.024c.129-.074.257-.153.381-.236a.591.591,0,0,0-.652-.986Z"
                                      transform="translate(-310.724 -381.513)"
                                      fill="#009adf"
                                    ></path>
                                    <path
                                      id="Path_653"
                                      data-name="Path 653"
                                      d="M428.816,207.879a.591.591,0,1,0-1.181.046c0,.125.006.251,0,.376a.591.591,0,1,0,1.182.026C428.823,208.179,428.822,208.028,428.816,207.879Z"
                                      transform="translate(-414.117 -200.812)"
                                      fill="#009adf"
                                    ></path>
                                    <path
                                      id="Path_654"
                                      data-name="Path 654"
                                      d="M377.96,344.187a.591.591,0,0,0-.828.118c-.075.1-.154.2-.235.294a.591.591,0,0,0,.067.833c.014.012.029.023.043.033a.591.591,0,0,0,.79-.1c.1-.113.191-.231.281-.351A.591.591,0,0,0,377.96,344.187Z"
                                      transform="translate(-364.847 -333.246)"
                                      fill="#009adf"
                                    ></path>
                                    <path
                                      id="Path_655"
                                      data-name="Path 655"
                                      d="M414.655,279.379a.591.591,0,0,0-.741.387c-.037.119-.079.239-.123.356a.591.591,0,0,0,1.1.421c.053-.139.1-.282.147-.423A.591.591,0,0,0,414.655,279.379Z"
                                      transform="translate(-400.673 -270.575)"
                                      fill="#009adf"
                                    ></path>
                                    <path
                                      id="Path_656"
                                      data-name="Path 656"
                                      d="M6.259,15.113a6.1,6.1,0,0,1-1.516-.482l-.017-.009c-.113-.053-.226-.11-.336-.17h0a6.306,6.306,0,0,1-.588-.368,6.169,6.169,0,0,1,.026-10.1l.021-.015a6.179,6.179,0,0,1,6.925-.056l-.462.667c-.128.186-.049.321.175.3l2.006-.18a.331.331,0,0,0,.3-.432l-.539-1.941c-.06-.218-.215-.244-.343-.058l-.463.669A7.3,7.3,0,0,0,6.1,1.8q-.284.049-.56.119h0l-.021.006A7.289,7.289,0,0,0,1.47,4.633c-.009.01-.017.02-.025.031-.034.045-.067.091-.1.138-.053.076-.106.153-.156.231-.006.009-.011.019-.017.028a7.288,7.288,0,0,0-1.165,4.3s0,.01,0,.015c.007.148.018.3.034.447,0,.01,0,.019,0,.028.017.149.037.3.063.447a7.3,7.3,0,0,0,2.057,3.956l.008.008,0,0a7.449,7.449,0,0,0,.942.787,7.289,7.289,0,0,0,2.931,1.227.591.591,0,0,0,.209-1.164Z"
                                      transform="translate(0 -1.688)"
                                      fill="#009adf"
                                    ></path>
                                    <path
                                      id="Path_657"
                                      data-name="Path 657"
                                      d="M206.465,83.2a.478.478,0,0,0-.478.478v4.765l4.358,2.253a.478.478,0,0,0,.439-.85l-3.841-1.986V83.676A.478.478,0,0,0,206.465,83.2Z"
                                      transform="translate(-199.476 -80.621)"
                                      fill="#009adf"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>

                          <div>
                            <p>pondělí–neděle 10:00–21:00 hod.</p>
                          </div>
                        </li>
                      </ul>
                    </ul>
                  </div>

                  <div className="shop-modal__info">
                    <div className="subheading shop-modal__title h3">
                      <h3>Informace o obchodu</h3>
                    </div>
                    {modalData[0] ? parse(modalData[0].body) : ""}
                    <div className="shop-modal__link">
                      <a
                        href={modalData[0] ? modalData[0].view_node : ""}
                        className="btn btn-primary"
                      >
                        Informace o obchodu <ArrowIcon />
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </aside>
      </React.Fragment>
    );
  }
}

export default ModalMap;
