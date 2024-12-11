// import Link from "@components/ui/link";
// import { getLayout } from "@components/layout/layout";
// import AccountLayout from "@components/my-account/account-layout";
// import { ROUTES } from "@lib/routes";
// import { useTranslation } from "next-i18next";
// import {useUser} from "@framework/auth";
// import Spinner from "@components/ui/loaders/spinner/spinner";

// export { getStaticProps } from "@framework/common.ssr";

// export default function AccountPage() {
//   const { t } = useTranslation("common");
//   const { me, loading } = useUser();

//   if (loading) {
//     return (
//       <div className="w-full h-full flex items-center justify-center">
//         <Spinner showText={false} />
//       </div>
//     );
//   }

//   const currentUserIdentity = me?.name ?? me?.email;
//   return (
//     <AccountLayout>
//       <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-3 xl:mb-5">
//         {t("text-dashboard")}
//       </h2>
//       <div className="text-sm leading-7 md:text-base md:leading-loose">
//         <p className="capitalize">
//           {t("text-hello")}{" "}
//           <span className="font-bold">{currentUserIdentity}</span> (not{" "}
//           <span className="font-bold">{currentUserIdentity}</span>?{" "}
//           <Link
//             href={`${ROUTES.LOGOUT}`}
//             className="font-bold underline cursor-pointer focus:outline-none"
//           >
//             {t("text-logout")}
//           </Link>
//           )
//         </p>
//         <br />
//         {t("text-account-dashboard")}{" "}
//         <Link
//           href={ROUTES.ACCOUNT_ORDERS}
//           className="text-heading underline font-semibold"
//         >
//           {t("text-recent-orders")}
//         </Link>
//         , {t("text-manage-your")}{" "}
//         <Link
//           href={ROUTES.ACCOUNT_ADDRESS}
//           className="text-heading underline font-semibold"
//         >
//           {t("text-account-address")}
//         </Link>{" "}
//         {t("text-and")}{" "}
//         <Link
//           href={ROUTES.ACCOUNT_CONTACT_NUMBER}
//           className="text-heading underline font-semibold"
//         >
//           {t("text-contact-number")}
//         </Link>{" "}
//         {t("text-and")}{" "}
//         <Link
//           href={ROUTES.ACCOUNT_CHANGE_PASSWORD}
//           className="text-heading underline font-semibold"
//         >
//           {t("text-change-your-password")}
//         </Link>
//       </div>
//     </AccountLayout>
//   );
// }

// AccountPage.authenticate = true;
// AccountPage.getLayout = getLayout;
import Link from "@components/ui/link";
import { getLayout } from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import { ROUTES } from "@lib/routes";
import { useTranslation } from "next-i18next";
import { useUser } from "@framework/auth";
import Spinner from "@components/ui/loaders/spinner/spinner";
import { FaLock, FaPhone, FaAddressCard, FaBox, FaSignOutAlt } from 'react-icons/fa'; // Importing icons

export { getStaticProps } from "@framework/common.ssr";

export default function AccountPage() {
  const { t } = useTranslation("common");
  const { me, loading } = useUser();

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner showText={false} />
      </div>
    );
  }


  const cardsData = [
    {
      icon: <FaLock className="text-blue-500 text-2xl" />,
      title: "Change Your Password",
      text: "Keep your account secure by regularly updating your password.",
      route:ROUTES.ACCOUNT_CHANGE_PASSWORD
    },
    {
      icon: <FaPhone className="text-green-500 text-2xl" />,
      title: "Contact Number",
      text: "Update your contact details to stay informed about account updates.",
      route:ROUTES.ACCOUNT_CONTACT_NUMBER
    },
    {
      icon: <FaAddressCard className="text-orange-500 text-2xl" />,
      title: "Account Address",
      text: "Ensure your address is correct for seamless deliveries and correspondence.",
      route:ROUTES.ACCOUNT_ADDRESS
    },
    {
      icon: <FaBox className="text-teal-500 text-2xl" />,
      title: "Recent Orders",
      text: "View and track your recent orders for better management.",
      route:ROUTES.ACCOUNT_ORDERS
    },
    {
      icon: <FaSignOutAlt className="text-red-500 text-2xl" />,
      title: "Logout",
      text: "Log out of your account securely when you're done.",
      route:ROUTES.LOGOUT
    },
  ];
  const currentUserIdentity = me?.name ?? me?.email;

  return (
    <AccountLayout>
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-5">
        {t("text-dashboard")}
      </h2>
      {/* <div className="grid gap-5 md:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 dark:bg-white-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <div className="flex items-center mb-4">
            {card.icon}
            <h5 className="ml-3 text-lg font-bold text-gray-900 dark:text-white">
              {card.title}
            </h5>
          </div>
          <p className="text-gray-700 dark:text-gray-400">{card.text}</p>
        </div>
      ))}
    </div> */}

{/* <div className="grid gap-5 md:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
  {cardsData.map((card, index) => (
    <div
      key={index}
      className="p-6 border border-gray-300 rounded-lg shadow-md bg-gray-100 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        {card.icon}
        <h5 className="ml-3 text-lg font-bold text-black">{card.title}</h5>
      </div>
      <p className="text-black">{card.text}</p>
    </div>
  ))}
</div> */}

<div className="grid gap-5 md:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
  {cardsData.map((card, index) => (
    <Link
      key={index}
      href={card.route} // Ensure each card has a 'route' property
      className="p-6 border border-gray-300 rounded-lg shadow-md bg-gray-100 hover:shadow-lg transition-shadow duration-300 block"
    >
      <div className="flex items-center mb-4">
        {card.icon}
        <h5 className="ml-3 text-lg font-bold text-black">{card.title}</h5>
      </div>
      <p className="text-black">{card.text}</p>
    </Link>
  ))}
</div>


    </AccountLayout>
  );
}

AccountPage.authenticate = true;
AccountPage.getLayout = getLayout;
