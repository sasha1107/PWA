import { useState, useEffect } from 'react';
import { Support } from 'components';
const QrCode = () => {
  const [support, setSupport] = useState(false);
  const [barcodeDetector, setBarcodeDetector] = useState(null);
  useEffect(() => {
    // check compatibility
    if (!('BarcodeDetector' in window)) {
      console.log('Barcode Detector is not supported by this browser.');
      return;
    } else {
      setSupport(true);
      // create new detector
      // const barcodeDetector = new BarcodeDetector({
      //   formats: ['qr_code']
      // });
      // setBarcodeDetector(barcodeDetector);
    }
  }, []);
  return <div>index</div>;
};

export default QrCode;
