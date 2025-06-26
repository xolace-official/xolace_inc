import { Bokor } from "next/font/google";
import localFont from "next/font/local";

const bokorFont = Bokor({
  subsets: ["latin"],
  weight: "400",
});

const criticalFont = localFont({
  src: "../../../fonts/critical-mass/critical-mass.ttf",
});
const aiconFont = localFont({
  src: "../../../fonts/aicon/aicon-bold.otf",
});
const bordFont = localFont({
  src: "../../../fonts/bord/Bord.ttf",
});
const distorterFont = localFont({
  src: "../../../fonts/distorter/distorter.ttf",
});
const faconFont = localFont({
  src: "../../../fonts/facon/Facon.ttf",
});
const flouriteFont = localFont({
  src: "../../../fonts/flourite/FlouriteDemo.otf",
});
const manropeFont = localFont({
  src: "../../../fonts/manrope/manrope-bold.otf",
});
const mescalitoFont = localFont({
  src: "../../../fonts/mescalito/mescalito.otf",
});
const mustardFont = localFont({
  src: "../../../fonts/mustard/Mustard Bold.otf",
});
const outfitFont = localFont({
  src: "../../../fonts/outfit/Outfit-Medium.ttf",
});
const partmediaFont = localFont({
  src: "../../../fonts/partmedia/partmedia.otf",
});
const proracingFont = localFont({
  src: "../../../fonts/pro-racing/Pro Racing.otf",
});
const speedFont = localFont({
  src: "../../../fonts/speedbeast/speedbeast.ttf",
});

const struicFont = localFont({
  src: "../../../fonts/struic/struic.ttf",
});
const veterFont = localFont({
  src: "../../../fonts/veter/Veter.ttf",
});

export default function TextPage() {
  return (
    <>
      {/* bokor font example */}
      <div className="p-30 ">
        <div>
          <h1 className={`${bokorFont.className}`}>Bokor</h1>
          <p className="p-10">
            This is a test page. It is used to verify that the app is working
            correctly and that the routing is functioning as expected. If you
            see this page, it means that the application has been set up
            correctly and you can start building your application from here.
          </p>
        </div>

        {/* aicon font example */}

        <div>
          <h1 className={`${aiconFont.className}`}>Aicon</h1>
          <p className="p-10">
            This is a test page. It is used to verify that the app is working
            correctly and that the routing is functioning as expected. If you
            see this page, it means that the application has been set up
            correctly and you can start building your application from here.
          </p>
        </div>

        {/* bord font example */}

        <div>
          <h1 className={`${bordFont.className}`}>Bord</h1>
          <p className="p-10">
            This is a test page. It is used to verify that the app is working
            correctly and that the routing is functioning as expected. If you
            see this page, it means that the application has been set up
            correctly and you can start building your application from here.
          </p>
        </div>

        {/* critical mass font example */}

        <div>
          <h1 className={`${criticalFont.className}`}>Critical Mass</h1>
          <p className="p-10">
            This is a test page. It is used to verify that the app is working
            correctly and that the routing is functioning as expected. If you
            see this page, it means that the application has been set up
            correctly and you can start building your application from here.
          </p>
        </div>

        <div>
          <h1 className={`${distorterFont.className} text-4xl`}>Distorter</h1>
          <h1 className={`${faconFont.className} text-4xl`}>Facon</h1>
          <h1 className={`${flouriteFont.className} text-6xl`}>Flourite</h1>
          <h1 className={`${manropeFont.className} text-6xl`}>Manrope</h1>
          <h1 className={`${mescalitoFont.className} text-6xl`}>Mescalito</h1>
          <h1 className={`${mustardFont.className} text-6xl`}>Mustard</h1>
          <h1 className={`${outfitFont.className} text-6xl`}>Outfit</h1>
          <h1 className={`${partmediaFont.className} text-6xl`}>Partmedia</h1>
          <h1 className={`${proracingFont.className} text-6xl`}>Pro-Racing</h1>
          <h1 className={`${speedFont.className} text-6xl`}>Speed Beast</h1>
          <h1 className={`${struicFont.className} text-6xl`}>Struic</h1>
          <h1 className={`${veterFont.className} text-6xl`}>Veter</h1>
        </div>
      </div>
    </>
  );
}
