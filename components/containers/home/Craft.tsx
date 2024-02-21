import Image from "next/image";
import Link from "next/link";
import CraftThumb from "@/public/images/craft-thumb.png";
import Shape from "@/public/images/footer/shape-one.png";

const Craft = () => {
  return (
    <section className="section craft" id="scrollPosition">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="section__content">
              <span className="sub-title">About me</span>
              <h2 className="title title-animation">
                Hi, This is Steven Lee{" "}
                <span>Full stack Blockchain Developer</span>
              </h2>
              <p>
                Experienced software engineer with over 5 years in blockchain
                development, cofounding a successful DEX, ConanSwap, boasting
                20,000 active supporters. Proficient in JavaScript, Golang, and
                Python, with expertise in smart contracts, consensus algorithms,
                and data structures. Seeking a Blockchain Developer role to
                contribute to shaping the future of the financial system.
              </p>
              <div className="section__content-cta">
                <Link href="#work" className="btn btn--primary">
                  Projects
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-7">
            <div className="craft__thumb text-start text-lg-end">
              <div className="reveal-img parallax-img">
                <Image src={CraftThumb} alt="Image" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anime-one">
        <Image src={Shape} alt="Image" priority />
      </div>
    </section>
  );
};

export default Craft;
