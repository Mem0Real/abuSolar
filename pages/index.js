import Layout from "../components/layout";
import FastMarquee from "../components/marquee";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <main
        className={`${styles.main} bg-fixed bg-heroBg bg-no-repeat bg-cover bg-center`}
      >
        {/* Hero */}
        <div className="h-screen relative w-screen">
          <div
            className={`absolute inset-x-0 lg:mt-36 h-1/3 font-rubik ${styles.shad} flex flex-col justify-center items-center`}
          >
            <h1 className="text-6xl font-bold text-center">Abu Solar Tech</h1>
            <h1 className="text-4xl lg:mt-6 italic text-center">
              Providing Reliable Solar Equipments
            </h1>
          </div>
        </div>

        {/* Deets */}
        <div className="h-96 w-screen bg-white text-center font-black flex flex-col justify-center items-center border border-x-0 border-y-black border-y-2">
          <p className="text-4xl text-gray-800">
            We provide quality solar products at fair prices. Browse through our
            inventory and take a step towards a better future.
          </p>
        </div>

        {/* Batteries */}
        <div
          className="h-fit w-screen bg-fixed bg-transparent bg-no-repeat bg-cover bg-center"
          id="batteries"
        >
          <h3 className="underline text-3xl pl-5">Batteries</h3>
          <FastMarquee type="batteries" />
        </div>

        {/* Line Interactive UPS */}
        <div className="h-fit w-screen bg-gray-800" id="lineIU">
          <h3 className="underline text-3xl pl-5">Line Interactive UPS</h3>
          <FastMarquee type="lineIU" />
        </div>

        {/* Online UPS */}
        <div className="h-fit w-screen bg-transparent" id="onlineU">
          <h3 className="underline text-3xl pl-5">Online UPS</h3>
          <FastMarquee type="onlineU" />
        </div>

        {/* Power Inverter */}
        <div className="h-fit w-screen bg-gray-800" id="powInv">
          <h3 className="underline text-3xl pl-5">Power Inverter</h3>
          <FastMarquee type="powInv" />
        </div>

        {/* Solar Lighting System */}
        <div className="h-fit w-screen bg-transparent" id="soli">
          <h3 className="underline text-3xl pl-5">Solar Lighting System</h3>
          <FastMarquee type="soli" />
        </div>

        {/* Solar Charge Controller */}
        <div className="h-fit w-screen bg-gray-800" id="socc">
          <h3 className="underline text-3xl pl-5">Solar Charge Controller</h3>
          <FastMarquee type="socc" />
        </div>

        {/* Solar Inverter */}
        <div className="h-fit w-screen bg-transparent" id="soInv">
          <h3 className="underline text-3xl pl-5">Solar Inverter</h3>
          <FastMarquee type="soInv" />
        </div>

        {/* Solar Panel */}
        <div className="h-fit w-screen bg-gray-800" id="sopan">
          <h3 className="underline text-3xl pl-5">Solar Panel</h3>
          <FastMarquee type="sopan" />
        </div>

        {/* Solar Power System */}
        <div className="h-fit w-screen bg-transparent" id="sops">
          <h3 className="underline text-3xl pl-5">Solar Power System</h3>
          <FastMarquee type="sops" />
        </div>
      </main>
    </Layout>
  );
}
