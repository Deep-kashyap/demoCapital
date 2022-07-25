import Head from "next/head";
import ContactUsComponent from "../../components/contactUsComponent/index";
const contactUs = () => {
  return (
    <>
      <div>
        <Head>
          <title>Contact-Us</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      </div>
      <div>
        <ContactUsComponent />
      </div>
    </>
  );
};

export default contactUs;
