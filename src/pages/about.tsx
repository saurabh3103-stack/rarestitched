// // import { getLayout } from "@components/layout/layout";
// // import Container from "@components/ui/container";
// // import PageHeader from "@components/ui/page-header";
// // import { aboutContent } from "@settings/about-settings"; // Create an `about-settings` file for your content
// // import { Link, Element } from "react-scroll";
// // import { useTranslation } from "next-i18next";
// // import { GetStaticProps } from "next";
// // import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// // import { QueryClient } from "react-query";
// // import { API_ENDPOINTS } from "@framework/utils/endpoints";
// // import client from '@framework/utils/index';

// // function makeTitleToDOMId(title: string) {
// //   return title.toLowerCase().split(" ").join("_");
// // }

// // export default function AboutUsPage() {
// //   const { t } = useTranslation("about");

// //   return (
// //     <>
// //       <PageHeader pageHeader="text-page-about-us" />
// //       <div className="mt-12 lg:mt-14 xl:mt-16 lg:py-1 xl:py-0 border-b border-gray-300 px-4 md:px-10 lg:px-7 xl:px-16 2xl:px-24 3xl:px-32 pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24">
// //         <Container>
// //           <div className="flex flex-col md:flex-row">
// //             <nav className="md:w-72 xl:w-3/12 mb-8 md:mb-0">
// //               <ol className="sticky md:top-16 lg:top-28 z-10">
// //                 {aboutContent?.map((item, index) => (
// //                   <li key={item.id}>
// //                     <Link
// //                       spy={true}
// //                       offset={-120}
// //                       smooth={true}
// //                       duration={500}
// //                       to={makeTitleToDOMId(item.title)}
// //                       activeClass="text-heading font-semibold"
// //                       className="block cursor-pointer py-3 lg:py-3.5 text-sm lg:text-base text-gray-700 uppercase"
// //                     >
// //                       {(index <= 9 ? "0" : "") +
// //                         index +
// //                         " " +
// //                         t(`${item.title}`)}
// //                     </Link>
// //                   </li>
// //                 ))}
// //               </ol>
// //             </nav>
// //             {/* End of section scroll spy menu */}

// //             <div className="md:w-9/12 ltr:md:pl-8 rtl:md:pr-8 pt-0 lg:pt-2">
// //               {aboutContent?.map((item) => (
// //                 <Element
// //                   key={item.title}
// //                   id={makeTitleToDOMId(item.title)}
// //                   className="mb-10"
// //                 >
// //                   <h2 className="text-lg md:text-xl lg:text-2xl text-heading font-bold mb-4">
// //                     {t(`${item.title}`)}
// //                   </h2>
// //                   <div
// //                     className="text-heading text-sm leading-7 lg:text-base lg:leading-loose"
// //                     dangerouslySetInnerHTML={{
// //                       __html: t(`${item.description}`),
// //                     }}
// //                   />
// //                 </Element>
// //               ))}
// //             </div>
// //             {/* End of content */}
// //           </div>
// //         </Container>
// //       </div>
// //     </>
// //   );
// // }

// // AboutUsPage.getLayout = getLayout;

// // export const getStaticProps: GetStaticProps = async ({ locale }) => {
// //   const queryClient = new QueryClient();
// //   await queryClient.prefetchQuery(API_ENDPOINTS.SETTINGS, () => client.settings.findAll());

// //   return {
// //     props: {
// //       ...(await serverSideTranslations(locale!, [
// //         "common",
// //         "menu",
// //         "forms",
// //         "footer",
// //         "about",
// //       ])),
// //     },
// //   };
// // };



// import React from 'react';
// import { FaTrophy, FaUsers, FaBoxOpen, FaDownload } from 'react-icons/fa';
// import { getLayout } from "@components/layout/layout";
// import Container from "@components/ui/container";
// import PageHeader from "@components/ui/page-header";
// import { useTranslation } from "next-i18next";

// function makeTitleToDOMId(title: string) {
//   return title.toLowerCase().split(" ").join("_");
// }

// export default function AboutUsPage() {
//   const { t } = useTranslation("about");

//   return (
//     <>
//       <PageHeader pageHeader="About Us" />
//       <div className="mt-12 lg:mt-14 xl:mt-16 lg:py-1 xl:py-0 border-b border-gray-300 px-4 md:px-10 lg:px-7 xl:px-16 2xl:px-24 3xl:px-32 pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-12">
//         <Container>
//           <section className="bg-white text-gray-800  px-6 md:px-12">
//             <div className="text-center mb-8">
//               <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">Our Story</h1>
//               <p className="text-lg text-gray-600">
//                 Our story begins with a simple, bold idea: <span className="text-yellow-500 font-semibold">FUN2SH</span>
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="flex flex-col justify-center">
//                 <p className="text-gray-700 mb-4">
//                   Society often labels those who are unconventional or take a different approach as “silly” or “foolish.”
//                   But what does society really know? In many cases, the ones deemed “foolish” are the trailblazers who
//                   dared to break the mold and reshaped the world around them.
//                 </p>
//                 <p className="text-gray-700 mb-4">
//                   At <span className="font-bold text-yellow-500">FUN2SH</span>, we embody that spirit — the spirit of
//                   challenging norms and embracing originality. We’re the brand for those who aren’t afraid to stand out
//                   and push the boundaries of everyday fashion.
//                 </p>
//                 <p className="text-gray-700 mb-4">
//                   Our belief is simple: fashion should not just reflect trends but tell your story and inspire others.
//                   This is the philosophy we have carried since our inception in 2012.
//                 </p>
//                 <p className="text-gray-700">
//                   We believe that true success goes beyond profits; it’s about leaving a lasting impact. At{' '}
//                   <span className="font-bold text-yellow-500">FUN2SH</span>, we aim to innovate, create, and inspire —
//                   one outfit at a time.
//                 </p>
//               </div>
//               <div className="flex justify-center items-center">
//                 <img
//                   src="https://www.shutterstock.com/image-vector/two-happy-families-riding-on-600nw-2110126145.jpg"
//                   alt="Our Story Image"
//                   className="w-full md:w-3/4 rounded-lg shadow-lg"
//                 />
//               </div>
//             </div>

//             <div className="mt-12 text-center">
//               <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">The Essence of FUN2SH</h2>
//               <p className="text-gray-600 mb-6">What Makes Us Different?</p>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
//                   <h3 className="text-xl font-semibold text-black mb-2">Innovative Design</h3>
//                   <p className="text-gray-700">
//                     Our designs go beyond the ordinary. They’re bold, unique, and a perfect blend of comfort and style.
//                   </p>
//                 </div>
//                 <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
//                   <h3 className="text-xl font-semibold text-black mb-2">Direct to Consumer</h3>
//                   <p className="text-gray-700">
//                     We bring you the best of fashion directly to your doorstep, cutting out the middleman and adding
//                     value.
//                   </p>
//                 </div>
//                 <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
//                   <h3 className="text-xl font-semibold text-black mb-2">Made in India, Imagined by Us</h3>
//                   <p className="text-gray-700">
//                     Our products are proudly designed and crafted in India, keeping the spirit of local craftsmanship at
//                     the forefront.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-12 text-center">
//               <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Journey So Far</h2>
//               <div className="flex justify-center gap-12 flex-wrap">
//                 <div className="px-4 py-6 bg-gray-100 rounded-lg shadow-md">
//                   <div className="flex items-center justify-center mb-3">
//                     <FaTrophy className="text-yellow-500 text-3xl mr-2" />
//                     <h3 className="text-2xl font-bold text-black">11+ Years</h3>
//                   </div>
//                   <p className="text-gray-700">of innovation and growth</p>
//                 </div>
//                 <div className="px-4 py-6 bg-gray-100 rounded-lg shadow-md">
//                   <div className="flex items-center justify-center mb-3">
//                     <FaUsers className="text-yellow-500 text-3xl mr-2" />
//                     <h3 className="text-2xl font-bold text-black">500+</h3>
//                   </div>
//                   <p className="text-gray-700">Passionate team members</p>
//                 </div>
//                 <div className="px-4 py-6 bg-gray-100 rounded-lg shadow-md">
//                   <div className="flex items-center justify-center mb-3">
//                     <FaBoxOpen className="text-yellow-500 text-3xl mr-2" />
//                     <h3 className="text-2xl font-bold text-black">1.5 Crore+</h3>
//                   </div>
//                   <p className="text-gray-700">Products sold</p>
//                 </div>
//                 <div className="px-4 py-6 bg-gray-100 rounded-lg shadow-md">
//                   <div className="flex items-center justify-center mb-3">
//                     <FaDownload className="text-yellow-500 text-3xl mr-2" />
//                     <h3 className="text-2xl font-bold text-black">70 Lakh+</h3>
//                   </div>
//                   <p className="text-gray-700">App downloads</p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-12 text-center">
//               <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Join Us on This Journey</h2>
//               <p className="text-gray-600 mb-6">
//                 FUN2SH isn’t just a fashion brand. It’s a community of dreamers, creators, and game-changers. When you
//                 wear FUN2SH, you’re not just wearing clothes — you’re wearing a statement.
//               </p>
//               <button className="bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">
//                 Dare to be FUN2SH
//               </button>
//             </div>
//           </section>
//         </Container>
//       </div>
//     </>
//   );
// }

// AboutUsPage.getLayout = getLayout;




import { getLayout } from "@components/layout/layout";
import Container from "@components/ui/container";
import PageHeader from "@components/ui/page-header";
import { privacyPolicy } from "@settings/privacy-settings";
import { FaTrophy, FaUsers, FaBoxOpen, FaDownload } from 'react-icons/fa';
import { Link, Element } from "react-scroll";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {QueryClient} from "react-query";
import {API_ENDPOINTS} from "@framework/utils/endpoints";
import client from '@framework/utils/index'

function makeTitleToDOMId(title: string) {
  return title.toLowerCase().split(" ").join("_");
}

export default function AboutUsPage() {
  const { t } = useTranslation("privacy");
  return (
    <>
      <PageHeader pageHeader="About us" />
      <div className="mt-12 lg:mt-14 xl:mt-16 lg:py-1 xl:py-0 border-b border-gray-300 px-4 md:px-10 lg:px-7 xl:px-16 2xl:px-24 3xl:px-32 pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-12">
        <Container>
          <section className="bg-white text-gray-800  px-6 md:px-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">Our Story</h1>
              <p className="text-lg text-gray-600">
                Our story begins with a simple, bold idea: <span className="text-yellow-500 font-semibold">FUN2SH</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <p className="text-gray-700 mb-4">
                  Society often labels those who are unconventional or take a different approach as “silly” or “foolish.”
                  But what does society really know? In many cases, the ones deemed “foolish” are the trailblazers who
                  dared to break the mold and reshaped the world around them.
                </p>
                <p className="text-gray-700 mb-4">
                  At <span className="font-bold text-yellow-500">FUN2SH</span>, we embody that spirit — the spirit of
                  challenging norms and embracing originality. We’re the brand for those who aren’t afraid to stand out
                  and push the boundaries of everyday fashion.
                </p>
                <p className="text-gray-700 mb-4">
                  Our belief is simple: fashion should not just reflect trends but tell your story and inspire others.
                  This is the philosophy we have carried since our inception in 2012.
                </p>
                <p className="text-gray-700">
                  We believe that true success goes beyond profits; it’s about leaving a lasting impact. At{' '}
                  <span className="font-bold text-yellow-500">FUN2SH</span>, we aim to innovate, create, and inspire —
                  one outfit at a time.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="https://www.shutterstock.com/image-vector/two-happy-families-riding-on-600nw-2110126145.jpg"
                  alt="Our Story Image"
                  className="w-full md:w-3/4 rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">The Essence of FUN2SH</h2>
              <p className="text-gray-600 mb-6">What Makes Us Different?</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-black mb-2">Innovative Design</h3>
                  <p className="text-gray-700">
                    Our designs go beyond the ordinary. They’re bold, unique, and a perfect blend of comfort and style.
                  </p>
                </div>
                <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-black mb-2">Direct to Consumer</h3>
                  <p className="text-gray-700">
                    We bring you the best of fashion directly to your doorstep, cutting out the middleman and adding
                    value.
                  </p>
                </div>
                <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-black mb-2">Made in India, Imagined by Us</h3>
                  <p className="text-gray-700">
                    Our products are proudly designed and crafted in India, keeping the spirit of local craftsmanship at
                    the forefront.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Journey So Far</h2>
              <div className="flex justify-center gap-12 flex-wrap">
                <div className="px-4 py-6 bg-gray-100 rounded-lg shadow-md">
                  <div className="flex items-center justify-center mb-3">
                    <FaTrophy className="text-yellow-500 text-3xl mr-2" />
                    <h3 className="text-2xl font-bold text-black">11+ Years</h3>
                  </div>
                  <p className="text-gray-700">of innovation and growth</p>
                </div>
                <div className="px-4 py-6 bg-gray-100 rounded-lg shadow-md">
                  <div className="flex items-center justify-center mb-3">
                    <FaUsers className="text-yellow-500 text-3xl mr-2" />
                    <h3 className="text-2xl font-bold text-black">500+</h3>
                  </div>
                  <p className="text-gray-700">Passionate team members</p>
                </div>
                <div className="px-4 py-6 bg-gray-100 rounded-lg shadow-md">
                  <div className="flex items-center justify-center mb-3">
                    <FaBoxOpen className="text-yellow-500 text-3xl mr-2" />
                    <h3 className="text-2xl font-bold text-black">1.5 Crore+</h3>
                  </div>
                  <p className="text-gray-700">Products sold</p>
                </div>
                <div className="px-4 py-6 bg-gray-100 rounded-lg shadow-md">
                  <div className="flex items-center justify-center mb-3">
                    <FaDownload className="text-yellow-500 text-3xl mr-2" />
                    <h3 className="text-2xl font-bold text-black">70 Lakh+</h3>
                  </div>
                  <p className="text-gray-700">App downloads</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Join Us on This Journey</h2>
              <p className="text-gray-600 mb-6">
                FUN2SH isn’t just a fashion brand. It’s a community of dreamers, creators, and game-changers. When you
                wear FUN2SH, you’re not just wearing clothes — you’re wearing a statement.
              </p>
              <button className="bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300 my-3">
                Dare to be FUN2SH
              </button>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
}

AboutUsPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(API_ENDPOINTS.SETTINGS, () => client.settings.findAll());

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "menu",
        "forms",
        "footer",
        "privacy",
      ])),
    },
  };
};

