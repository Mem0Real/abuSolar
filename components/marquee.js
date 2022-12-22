import Marquee from "react-fast-marquee";
import Image from "next/image";
import battery1 from "../public/images/battery/battery1.jpg";
import battery2 from "../public/images/battery/battery2.jpg";
import battery3 from "../public/images/battery/battery3.jpg";
import battery4 from "../public/images/battery/battery4.jpg";
import battery5 from "../public/images/battery/battery5.jpg";
// import battery6 from "../public/images/battery/battery6.jpg";

import lineIU1 from "../public/images/lineIU/lineIU1.jpg";
import lineIU2 from "../public/images/lineIU/lineIU2.jpg";
import lineIU3 from "../public/images/lineIU/lineIU3.jpg";
import lineIU4 from "../public/images/lineIU/lineIU4.jpg";
import lineIU5 from "../public/images/lineIU/lineIU5.jpg";
import lineIU6 from "../public/images/lineIU/lineIU6.jpg";

import ou1 from "../public/images/onlineU/ou1.jpg";
import ou2 from "../public/images/onlineU/ou2.jpg";
import ou3 from "../public/images/onlineU/ou3.jpg";
import ou4 from "../public/images/onlineU/ou4.jpg";
import ou5 from "../public/images/onlineU/ou5.jpg";
import ou6 from "../public/images/onlineU/ou6.jpg";

import pi1 from "../public/images/powinv/pi1.jpg";
import pi2 from "../public/images/powinv/pi2.jpg";
import pi3 from "../public/images/powinv/pi3.jpg";
import pi4 from "../public/images/powinv/pi4.jpg";
import pi5 from "../public/images/powinv/pi5.jpg";
import pi6 from "../public/images/powinv/pi6.jpg";

import sl1 from "../public/images/soli/sl1.jpg";
import sl2 from "../public/images/soli/sl2.jpg";
import sl3 from "../public/images/soli/sl3.jpg";
import sl4 from "../public/images/soli/sl4.jpg";
import sl5 from "../public/images/soli/sl5.jpg";
import sl6 from "../public/images/soli/sl6.jpg";

import scc1 from "../public/images/socc/scc1.jpg";
import scc2 from "../public/images/socc/scc2.jpg";
import scc3 from "../public/images/socc/scc3.jpg";
import scc4 from "../public/images/socc/scc4.jpg";
import scc5 from "../public/images/socc/scc5.jpg";
import scc6 from "../public/images/socc/scc6.jpg";

import si1 from "../public/images/solarinv/si1.jpg";
import si2 from "../public/images/solarinv/si2.jpg";
import si3 from "../public/images/solarinv/si3.jpg";
import si4 from "../public/images/solarinv/si4.jpg";
import si5 from "../public/images/solarinv/si5.jpg";
import si6 from "../public/images/solarinv/si6.jpg";

import sp1 from "../public/images/sopan/sp1.jpg";
import sp2 from "../public/images/sopan/sp2.jpg";
import sp3 from "../public/images/sopan/sp3.jpg";
import sp4 from "../public/images/sopan/sp4.jpg";
import sp5 from "../public/images/sopan/sp5.jpg";
import sp6 from "../public/images/sopan/sp6.jpg";

import sps1 from "../public/images/sps/sps1.jpg";
import sps2 from "../public/images/sps/sps2.jpg";
import sps3 from "../public/images/sps/sps3.jpg";
import sps4 from "../public/images/sps/sps4.jpg";
import sps5 from "../public/images/sps/sps5.jpg";
import sps6 from "../public/images/sps/sps6.jpg";

export default function FastMarquee({ type }) {
  switch (type) {
    case "batteries":
      return (
        <Marquee speed="80" gradient={false} className="mt-12 mb-24">
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
            <Image
              placeholder="blur"
              src={battery1}
              alt="Batteries"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              Durable Solar Battery
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer">
            <Image
              placeholder="blur"
              src={battery2}
              alt="Batteries"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              Mobile Solar Battery with 6hrs storage capacity
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={battery3}
              alt="Batteries"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              Lightweight Handheld Battery
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={battery4}
              alt="Batteries"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              Wall Mount, vehicle charger battery with 6hrs storage capacity
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={battery5}
              alt="Batteries"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              Wall Mount, vehicle charger battery with 12hrs storage capacity
            </p>
          </div>
        </Marquee>
      );
    case "lineIU":
      return (
        <Marquee speed="50" gradient={false} className="mt-12 mb-24">
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60 box-content">
            <Image
              placeholder="blur"
              src={lineIU1}
              alt="Line Interactive UPS"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-96 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              SmartPro 230V 1.5kVA 900W Line-Interactive UPS, Tower, LCD, USB, 8
              Outlets
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer">
            <Image
              placeholder="blur"
              src={lineIU2}
              alt="Line Interactive UPS"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-96 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              1500VA 900W Line-Interactive UPS - 8 C13 Outlets, AVR, 230V, 50/60
              Hz, USB, DB9, LCD, 2U Rack/Tower
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={lineIU3}
              alt="Line Interactive UPS"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-96 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              SmartPro 230V 1.5kVA 940W Line-Interactive UPS, Tower, DB9, 6
              Outlets
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={lineIU4}
              alt="Line Interactive UPS"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-96 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              OmniVS 230V 800VA 475W Line-Interactive UPS, USB port, C13 Outlets
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={lineIU5}
              alt="Line Interactive UPS"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-96 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              OmniVS 230V 1500VA 940W Line-Interactive UPS, Extended Run, Tower,
              USB port, C13 Outlets
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={lineIU6}
              alt="Line Interactive UPS"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-96 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              SmartPro 230V 1500VA 1350W Line-Interactive Sine Wave UPS, 2U,
              Extended Run, WEBCARDLX, LCD, USB, DB9
            </p>
          </div>
        </Marquee>
      );
    case "onlineU":
      return (
        <Marquee speed="70" gradient={false} className="mt-12 mb-24">
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60 box-contentlg:mx-5">
            <Image
              placeholder="blur"
              src={ou1}
              alt="Online UPS"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-72 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              SmartOnline Double-Conversion UPS - 2U, USB, DB9, 230V, 3kVA,
              2.5kW, On-Line
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointerlg:mx-5">
            <Image
              placeholder="blur"
              src={ou2}
              alt="Online UPS"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-72 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              SmartOnline SVTX Series 3-Phase 380/400/415V 20kVA 18kW On-Line
              Double-Conversion UPS, Tower, Extended Run, SNMP Option
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer lg:mx-5">
            <Image
              placeholder="blur"
              src={ou3}
              alt="Online UPS"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-72 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              SmartOnline S3MX Series 3-Phase 380/400/415V 120kVA 108kW On-Line
              Double-Conversion UPS
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer lg:mx-5">
            <Image
              placeholder="blur"
              src={ou4}
              alt="Online UPS"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-72 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              SmartOnline SUTX Series 3-Phase 220/380V, 230/400V, 240/415V 20kVA
              20kW On-Line Double-Conversion UPS, Tower, Extended Run, SNMP
              Option
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer lg:mx-5">
            <Image
              placeholder="blur"
              src={ou5}
              alt="Online UPS"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-72 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              SmartOnline 200-240V 10kVA 7kW Online, Double-Conversion UPS, 6U
              Rack/Tower, Extended Run, Pre-installed SNMP port, RS232, 3 Phase
              in-Single Phase out
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer lg:mx-5">
            <Image
              placeholder="blur"
              src={ou6}
              alt="Online UPS"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-72 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              SmartOnline 200-240V 20kVA 18kW Double-Conversion UPS, N+1, 12U,
              Network Card Slot, USB, DB9, Bypass Switch, C19
            </p>
          </div>
        </Marquee>
      );
    case "powInv":
      return (
        <Marquee speed="80" gradient={false} className="mt-12 mb-24">
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60 box-content">
            <Image
              placeholder="blur"
              src={pi1}
              alt="Power Inverter"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-72 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              1250W APS X Series 12VDC 230V Inverter/Charger with Auto Transfer
              Switching, 2 C13 Outlets
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer">
            <Image
              placeholder="blur"
              src={pi2}
              alt="Power Inverter"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-72 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              2000W APS INT Series 12VDC 230V Inverter/Charger with Auto
              Transfer Switching, Hardwired
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={pi3}
              alt="Power Inverter"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-72 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              3000W APS X Series 24VDC 230V Inverter/Charger with Pure Sine-Wave
              Output, Hardwired
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={pi4}
              alt="Power Inverter"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-72 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              6000W APS X Series 48VDC 208/230V Inverter/Charger with Pure
              Sine-Wave Output, AVR, Hardwired
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={pi5}
              alt="Power Inverter"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-72 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              Remote Control Module for Tripp Lite PowerVerter Inverters and
              Inverter/Chargers
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={pi6}
              alt="Power Inverter"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:transparent lg:mx-10"
            />
            <p className="text-lg h-36 w-72 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              150W Power Inverter/Charger for Mobile Medical Equipment, 230V -
              IEC 60601-1
            </p>
          </div>
        </Marquee>
      );
    case "soli":
      return (
        <Marquee speed="80" gradient={false} className="mt-12 mb-24">
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60 box-content">
            <Image
              placeholder="blur"
              src={sl1}
              alt="Solar Lighting Systems"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mr-8 lg:ml-8"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              SG1230W Series Solar Lighting System
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer">
            <Image
              placeholder="blur"
              src={sl2}
              alt="Solar Lighting Systems"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mr-8 lg:ml-8"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              SG1220W Series Solar Lighting System
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={sl3}
              alt="Solar Lighting Systems"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mr-8 lg:ml-8"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              SG1210W Series Solar Lighting System
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={sl4}
              alt="Solar Lighting Systems"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mr-8 lg:ml-8"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              SG0603W Series Solar Lighting System
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={sl5}
              alt="Solar Lighting Systems"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mr-8 lg:ml-8"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              Mini ground lighting system
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={sl6}
              alt="Solar Lighting Systems"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mr-8 lg:ml-8"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              Mounted Grid Lighting system
            </p>
          </div>
        </Marquee>
      );
    case "socc":
      return (
        <Marquee speed="80" gradient={false} className="mt-12 mb-24">
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60 box-content">
            <Image
              placeholder="blur"
              src={scc1}
              alt="Solar Charge Controller"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:ml-5 lg:mr-5"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              PC1800A Series MPPT Solar Charge Controller (60A/80A)
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer">
            <Image
              placeholder="blur"
              src={scc2}
              alt="Solar Charge Controller"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:ml-5 lg:mr-5"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              PC1800F Series MPPT Solar Charge Controller (60/80/100A)
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={scc3}
              alt="Solar Charge Controller"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:ml-5 lg:mr-5"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              PC1500B TK Series PWM Solar Charge Controller (40-60A)
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={scc4}
              alt="Solar Charge Controller"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:ml-5 lg:mr-5"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              PC1500A SK Series PWM Solar Charge Controller (70-80A)
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={scc5}
              alt="Solar Charge Controller"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:ml-5 lg:mr-5"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              PC1600A Series MPPT Solar Charge Controller (20-40A)
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={scc6}
              alt="Solar Charge Controller"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:ml-5 lg:mr-5"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              MUST Solar Charge Controller PC1600 with MPPT Technology
            </p>
          </div>
        </Marquee>
      );
    case "soInv":
      return (
        <Marquee speed="80" gradient={false} className="mt-12 mb-24">
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60 box-content">
            <Image
              placeholder="blur"
              src={si1}
              alt="Solar Inverters"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mr-5 lg:ml-5"
            />
            <p className="text-lg h-36 w-96 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              High Frequency Off Grid Solar Inverter PV1800 LHM Series (AC:120V
              1-3KW)
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer">
            <Image
              placeholder="blur"
              src={si2}
              alt="Solar Inverters"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mr-5 lg:ml-5"
            />
            <p className="text-lg h-36 w-96 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              Mid Frequency Mobile Solar Inverter
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={si3}
              alt="Solar Inverters"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mr-5 lg:ml-5"
            />
            <p className="text-lg h-36 w-96 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              High Frequency Off Grid Solar Inverter PV1800 VM Series (2.5/3KVA)
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={si4}
              alt="Solar Inverters"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mr-5 lg:ml-5"
            />
            <p className="text-lg h-36 w-96 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              High Frequency Rack-mount Solar Inverter PV5000 Series (3-5KW)
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={si5}
              alt="Solar Inverter"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mr-5 lg:ml-5"
            />
            <p className="text-lg h-36 w-96 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              High Frequency Off Grid Solar Inverter PV1800 Pro Series(PV:450V
              3/5.2KW)
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={si6}
              alt="Solar Inverter"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mr-5 lg:ml-5"
            />
            <p className="text-lg h-36 w-96 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              Hybrid Solar Inverter PV1800 Series (8-10KW)
            </p>
          </div>
        </Marquee>
      );
    case "sopan":
      return (
        <Marquee speed="80" gradient={false} className="mt-12 mb-24">
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60 box-content">
            <Image
              placeholder="blur"
              src={sp1}
              alt="Solar Panels"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mr-5 lg:ml-5"
            />
            <p className="text-lg h-36 w-72 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              Mono-crystalline Silicon Solar Panel SM300W
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer">
            <Image
              placeholder="blur"
              src={sp2}
              alt="Solar Panels"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mr-5 lg:ml-5"
            />
            <p className="text-lg h-36 w-72 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              Mono-crystalline Silicon Solar Panel SM250W
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={sp3}
              alt="Solar Panels"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mr-5 lg:ml-5"
            />
            <p className="text-lg h-36 w-72 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              Mono-crystalline Silicon Solar Panel SM200W
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={sp4}
              alt="Solar Panels"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mr-5 lg:ml-5"
            />
            <p className="text-lg h-36 w-72 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              Mono-crystalline Silicon Solar Panel SM150W
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer ">
            <Image
              placeholder="blur"
              src={sp5}
              alt="Solar Panels"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mr-5 lg:ml-5"
            />
            <p className="text-lg h-36 w-72 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              Poly-crystalline Silicon Solar Panel SP300W
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer lg:ml-5 lg:mr-5">
            <Image
              placeholder="blur"
              src={sp6}
              alt="Solar Panels"
              height={300}
              className="shadow-lg rounded-full bg-clip-padding bg-transparent lg:mr-5 lg:ml-5"
            />
            <p className="text-lg h-36 w-72 text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              Poly-crystalline Silicon Solar Panel SP250W
            </p>
          </div>
        </Marquee>
      );
    case "sops":
      return (
        <Marquee speed="80" gradient={false} className="mt-12 mb-24">
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60 box-content lg:ml-5 lg:mr-5">
            <Image
              placeholder="blur"
              src={sps1}
              alt="Solar Power System"
              height={300}
              className="shadow-lg rounded-3xl bg-clip-padding bg-transparent"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              12KW Solar Power System
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer lg:ml-5 lg:mr-5">
            <Image
              placeholder="blur"
              src={sps2}
              alt="Solar Power System"
              height={300}
              className="shadow-lg rounded-3xl bg-clip-padding bg-transparent"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              10KW Solar Power System
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer lg:ml-5 lg:mr-5">
            <Image
              placeholder="blur"
              src={sps3}
              alt="Solar Power System"
              height={300}
              className="shadow-lg rounded-3xl bg-clip-padding bg-transparent"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              6KW Solar Power System
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer lg:ml-5 lg:mr-5">
            <Image
              placeholder="blur"
              src={sps4}
              alt="Solar Power System"
              height={300}
              className="shadow-lg rounded-3xl bg-clip-padding bg-transparent"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              5KW Solar Power System
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer  lg:ml-5 lg:mr-5">
            <Image
              placeholder="blur"
              src={sps5}
              alt="Solar Power System"
              height={300}
              className="shadow-lg rounded-3xl bg-clip-padding bg-transparent"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              4KW Solar Power System
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center hover:cursor-pointer lg:ml-5 lg:mr-5">
            <Image
              placeholder="blur"
              src={sps6}
              alt="Solar Power System"
              height={300}
              className="shadow-lg rounded-3xl bg-clip-padding bg-transparent"
            />
            <p className="text-lg h-36 w-full text-center text-white flex flex-col items-center justify-center bg-gray-600 shadow-lg sm:rounded-3xl sm:rounded-t-none bg-clip-padding bg-opacity-60">
              1KW Solar Power System
            </p>
          </div>
        </Marquee>
      );
  }
}
