import React, { useState } from 'react';
import QRCode from 'qrcode';

const QRCodeGenerator: React.FC = () => {
  const [text, setText] = useState('');
  const [qrCode, setQRCode] = useState('');

  const generateQRCode = async () => {
    try {
      const qrCodeDataUrl = await QRCode.toDataURL(text);
      setQRCode(qrCodeDataUrl);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {qrCode && <img src={qrCode} alt="QR Code" />}
    </div>
  );
};

export default QRCodeGenerator;
