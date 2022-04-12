import Qr from "../components/QR_code";

// TODO: Contest for data
export default function paticipant() {
  const user = 2;
  return user ? (
    <>
      <section className="container mx-auto flex justify-center py-28">
        <div>
          <Qr value={{ name: "Krishna nayak" }} />
        </div>
      </section>
    </>
  ) : (
    <>NULL</>
  );
}
