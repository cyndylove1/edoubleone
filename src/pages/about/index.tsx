import about from "../../assets/Section.png";
import Core from "../../components/core";
import Features from "../../components/features";
import JoinEcosystem from "../../components/joinEcosystem";
import Partners from "../../components/partners";

const About = () => {
  return (
    <>
      <section className="w-full text-white px-4 md:px-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
            {/* Main Heading */}
            <div className="md:col-span-8 lg:col-span-9">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05]">
                <span className="text-[#F0F0F0] block">Built on the</span>
                <span className="text-[#F0F0F0] block">foundation of</span>
                <span className="text-[#4C4A52] block">curiosity and</span>
                <span className="text-[#4C4A52] block">code.</span>
              </h1>
            </div>

            {/* Subtext Paragraph */}
            <div className="md:col-span-4 lg:col-span-3 pt-2 md:pt-4">
              <p className="text-[#F0F0F0] text-[15px] leading-[28px] font-[400] max-w-2xl">
                We are a collective of engineers, designers, and strategists
                obsessed with the intersection of intelligence and business.
              </p>
            </div>
          </div>

          {/* Hero Image Container */}
          <div className="w-full md:h-[400px] h-full relative rounded-lg overflow-hidden border border-white/5">
            <img
              src={about}
              alt="Office space with city view at night"
              className="w-full h-full object-cover brightness-[0.65] contrast-[1.1]"
            />
          </div>
        </div>
      </section>
      <Features />
      <Core />
      <Partners />
      <JoinEcosystem />
    </>
  );
};

export default About;
