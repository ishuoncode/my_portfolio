import Link from 'next/link';

export default function Contact() {
  return (
    <div className=" h-[900px] lg:h-[700px] ">
      <div className="llg:mx-[10%] lg:mx-[15%] xl:mx-[20%]">
        <div className="my-[5%]">
          <p className="text-[4.5rem] font-bold text-[#EDE9FE]">Contact</p>
          <p className="mt-[6px] w-auto text-[1.5rem] text-gray-300 md:w-[710px]">
            Get in touch with me anytime, through social media, e-mail, or phone
            number.
          </p>
        </div>
        <div className="mb-[2rem] mt-[1.5rem] h-[412px] w-[100%] overflow-x-auto rounded-[0.5rem] border-[1px] text-[0.85rem] leading-[1.25rem] md:h-[370px]">
          <table className="w-full text-left text-sm ">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr className="  text-[black]">
                <th scope="col" className="px-6 py-3 text-[1.05rem] ">
                  Social Media
                </th>
                <th scope="col" className="py-3 pl-28 text-[1.05rem]">
                  Profile Url
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[#EDE9FE]">
                <td className="px-6  py-2 text-[1rem]">LinkedIn</td>
                <td className="mxs:pl-[1rem] py-2 text-[0.8rem] mxs:text-[1rem] sm:pl-[3rem] xl:pl-28">
                  <Link
                    href="https://www.linkedin.com/in/ishu-singh-software-developer/"
                    className="text-blue-400"
                  >
                    https://www.linkedin.com/in/ishu-singh-software-developer/
                  </Link>
                </td>
              </tr>
              <tr className="text-[#EDE9FE]">
                <td colSpan="2" className="px-6 py-2 text-[1rem]">
                  <hr className="my-2 border-gray-300 dark:border-gray-700" />
                </td>
              </tr>
              <tr className="text-[#EDE9FE]">
                <td className="px-6 py-2 text-[1rem]">Github</td>
                <td className="mxs:pl-[1rem] py-2 text-[0.8rem] mxs:text-[1rem] sm:pl-[3rem] xl:pl-28  ">
                  <Link
                    href="https://github.com/ishuoncode"
                    className="text-blue-400"
                  >
                    https://github.com/ishuoncode
                  </Link>
                </td>
              </tr>
              <tr className="text-[#EDE9FE]">
                <td colSpan="2" className="px-6 py-2 text-[1rem]">
                  <hr className="my-2 border-gray-300 dark:border-gray-700" />
                </td>
              </tr>

              <tr className="text-[#EDE9FE]">
                <td className="px-6 py-2 text-[1rem]">Instagram</td>
                <td className="mxs:pl-[1rem] py-2 text-[0.8rem] mxs:text-[1rem] sm:pl-[3rem] xl:pl-28">
                  <Link
                    href="https://www.instagram.com/_._ishurajput/"
                    className="text-blue-400"
                  >
                    https://www.instagram.com/_._ishurajput/
                  </Link>
                </td>
              </tr>
              <tr className="text-[#EDE9FE]">
                <td colSpan="2" className="px-6 py-2 text-[1rem]">
                  <hr className="my-2 border-gray-300 dark:border-gray-700" />
                </td>
              </tr>

              <tr className="text-[#EDE9FE]">
                <td className="px-6 py-2 text-[1rem]">Mail</td>

                <td className="mxs:pl-[1rem] py-2 text-[0.8rem] mxs:text-[1rem] sm:pl-[3rem] xl:pl-28">
                  <Link
                    href="mailto:ishusingh8127@gmail.com"
                    className="text-blue-400"
                  >
                    ishusingh8127@gmail.com
                  </Link>
                </td>
              </tr>
              <tr className="text-[#EDE9FE]">
                <td colSpan="2" className="px-6 py-2 text-[1rem]">
                  <hr className="my-2 border-gray-300 dark:border-gray-700" />
                </td>
              </tr>

              <tr className="text-[#EDE9FE]">
                <td className="px-6 py-2 text-[1rem]">WhataApp</td>
                <td className="mxs:pl-[1rem] py-2 text-[0.8rem] mxs:text-[1rem] sm:pl-[3rem] xl:pl-28">
                  <Link
                    href="https://api.whatsapp.com/send?phone=919587080064"
                    className="text-blue-400"
                  >
                    https://api.whatsapp.com/send?phone=919587080064
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
