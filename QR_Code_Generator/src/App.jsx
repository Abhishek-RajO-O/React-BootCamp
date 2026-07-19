import { useCallback, useState } from "react";
import QRCode from "react-qr-code";
import { useRef } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [hidden, setHidden] = useState(true);
  const [qrValue, setQrValue] = useState("");
  const qrRef = useRef(null);

  const downloadQR = ()=>{
    const svg = qrRef.current.querySelector("svg");
    // SVG is actually XML.
    // The browser stores it as a DOM object.
    // XMLSerializer converts that DOM object back into plain text.
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    // A Blob stands for Binary Large Object.
    const blob = new Blob([svgString], {
      // MIME stands for Multipurpose Internet Mail Extensions.
      // "What kind of data is this?"

        type: "image/svg+xml",//this ia a SVG 
        // image → It's an image.
        // svg+xml → Specifically, an SVG written in XML.
    });

     const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "qrcode.svg";
    a.click();

    URL.revokeObjectURL(url);
  }

  const handleClick = useCallback(
    function (e) {
      e.preventDefault();
      console.log(url);

      setQrValue(url);
      setHidden(false);
      console.log("Clicked");
    },
    [hidden, url],
  );
  return (
    <>
      <div className="flex justify-center bg-[#0F0F0F] p-5 h-screen">
        <div className="flex flex-col items-center gap-8 bg-[#202020] rounded-2xl w-screen p-5">
          <h1 className="text-5xl font-mono font-bold text-[#F8F8F8]">QR Code Generator</h1>
          <form>
            <input
              type="text"
              placeholder="eg. https://www.google.com/"
              className="bg-amber-50 p-4 text-xl rounded-l-2xl"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
            <button
              className="bg-[#0F0F0F] text-[#5DD62C] font-bold  p-4 text-xl rounded-r-2xl"
              onClick={handleClick}
            >
              <p className="hover:drop-shadow-[0_0_10px_#5DD62C]">Generate</p>
            </button>
          </form>
          <div ref={qrRef}
            className="p-5 bg-[#337418] border-6 rounded-2xl border-amber-50"  
            hidden={hidden}
          >
            <QRCode
              value={qrValue}
              size={400}
              fgColor="#000"
              bgColor="transparent"
            />
          </div>
          <button
            onClick={downloadQR}
            hidden={hidden}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Download SVG
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
