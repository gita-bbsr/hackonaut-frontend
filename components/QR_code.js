import QRCode from "react-qr-code";

const qrGen = (data) => {
  console.log(data);
  const details = toString(data.value);

  return <QRCode value={details} />;
};

export default qrGen;
