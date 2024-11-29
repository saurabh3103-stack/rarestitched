// import Widgets from "./widgets";
// import Copyright from "./copyright";
// import { footer } from "./data";

// const { widgets } = footer;

// const Footer: React.FC = () => (
//   <footer className="bg-gray-900 text-white mt-9 md:mt-11 lg:mt-16 3xl:mt-20 pt-6 lg:pt-8 2xl:pt-10 border-t-4 border-gray-700">
//     <Widgets widgets={widgets} />
//     <div className="border-t border-gray-800 mt-6 pt-4">
//       <Copyright />
//     </div>
//   </footer>
// );

// export default Footer;

import Widgets from "./widgets";
import Copyright from "./copyright";
import { footer } from "./data";


const { widgets } = footer;

const Footer: React.FC = () => (
  <footer className="bg-black text-white mt-9 md:mt-11 lg:mt-16 3xl:mt-20 pt-6 lg:pt-8 2xl:pt-10 border-t-4 border-yellow-500">
    <Widgets widgets={widgets} />
    <div className="border-t border-gray-800 mt-6 pt-4">
      <Copyright />
    </div>
  </footer>
);

export default Footer;

