import Image from "next/image";
import coverImage from "../../public/images/contact-us.jpg";
const ContactUsComponent = () => {
  return (
    <>
      <div className="flex  flex-row mx-16 p-px bg-blue-500 h-screen content-center mt-8 mb-16 font-Dancing">
        <div className="flex ">
          <div className="mt-8 ml-24 basis-1/2">
            <Image width={600} height={600} src={coverImage}></Image>
          </div>
          <div className="bg-white  mt-8  mb-8 container basis-1/2">
            <div className="ml-24 mt-6  ">
              <h1 className="ml-2 text-xl mt-16">CONTACT US</h1>
              <div className="mt-8">
                <p className="font-bold mt-1 text-5xl">Let's Talk about </p>
                <p className="ml-2 font-bold text-5xl"> your problem.</p>
              </div>
            </div>
            <div className="mx-16 mt-16">
              <div class="mb-6">
                <label
                  for="large-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="large-input"
                  class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="mb-6">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="base-input"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  for="small-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your Message
                </label>
                <input
                  type="text"
                  id="small-input"
                  class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsComponent;
