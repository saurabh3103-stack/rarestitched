// import { useEffect } from "react";
// import { useAtom } from "jotai";
// import { customerContactAtom } from "@store/checkout";
// import PlusIcon from "@components/icons/plus-icon";
// import { useTranslation } from "next-i18next";
// import { useUI } from "@contexts/ui.context";
// import PhoneInput from '@components/ui/forms/phone-input';
// import classNames from "classnames";

// interface ContactProps {
//   contact: string | undefined | null;
//   label: string;
//   count?: number;
//   userId?: string;
//   profileId?: string;
//   className?: string;
// }

// const ContactGrid = ({ contact, label, count, className, userId, profileId }: ContactProps) => {
//   const [contactNumber, setContactNumber] = useAtom(customerContactAtom);
//   const { openModal, setModalView, setModalData } = useUI();
//   const { t } = useTranslation("common");

//   useEffect(() => {
//     if (contact) {
//       setContactNumber(contact);
//       return;
//     }
//     setContactNumber('');
//   }, [contact, setContactNumber]);

//   function onAddOrChange() {
//     setModalData({
//       customerId: userId,
//       profileId,
//       contact,
//     })
//     setModalView("ADD_OR_UPDATE_CHECKOUT_CONTACT");

//     return openModal();
    
//   }
 

//   return (
//     <div className={className}>
//       <div className="flex items-center justify-between mb-5 lg:mb-6 xl:mb-7 -mt-1 xl:-mt-2">
//         <div className="flex items-center gap-3 md:gap-4 text-lg lg:text-xl text-heading capitalize font-medium">
//           {count && (
//             <span className="flex h-8 w-8 items-center justify-center rounded-full bg-heading text-base text-white lg:text-xl">
//               {count}
//             </span>
//           )}
//           {label}
//         </div>

//         {/* <button
//           className="flex items-center text-sm font-semibold text-heading transition-colors duration-200 focus:outline-none focus:opacity-70 hover:opacity-70 mt-1"
//           onClick={onAddOrChange}
//         >
//           <PlusIcon className="w-4 h-4 stroke-2 ltr:mr-0.5 rtl:ml-0.5 relative top-[1px]" />
//           {contactNumber ? t("text-update") : t("text-add")}
//         </button> */}
//       </div>

//       <div className={classNames('w-full')}  onClick={onAddOrChange}>
//         <PhoneInput
//           country="in"
//           value={contactNumber}
//           onlyCountries={["in", "pk", "lk", "ca"]} // Limit dropdown to India, Pakistan, Sri Lanka, Canada
//           // preferredCountries={["in", "pk"]}// Show Pakistan and India at the top
//           inputClass="!p-0 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm focus:!outline-none focus:!ring-0 !border !border-gray-400 !rounded focus:!border-heading !h-12"
//           dropdownClass="focus:!ring-0 !border !border-gray-400 !shadow-350"
//         />
//       </div>

     
//     </div>
//   );
// };

// export default ContactGrid;


import { useEffect } from "react";
import { useAtom } from "jotai";
import { customerContactAtom } from "@store/checkout";
import PlusIcon from "@components/icons/plus-icon";
import { useTranslation } from "next-i18next";
import { useUI } from "@contexts/ui.context";
import PhoneInput from "@components/ui/forms/phone-input";
import classNames from "classnames";
import { useSettings } from "@framework/settings";
import { useLogout, useUser } from '@framework/auth';
interface ContactProps {
  contact: string | undefined | null;
  label: string;
  count?: number;
  userId?: string;
  profileId?: string;
  className?: string;
}

const ContactGrid = ({ contact, label, count, className, userId, profileId }: ContactProps) => {
  const [contactNumber, setContactNumber] = useAtom(customerContactAtom);
  const { openModal, setModalView, setModalData } = useUI();
  const { t } = useTranslation("common");
  const { data: settings } = useSettings();
 const { me } = useUser();

  const defaultContactNumber = me?.last_order?.customer_contact || "DefaultContactNumber";
  const effectiveContactNumber = contactNumber || defaultContactNumber;
  console.log("contact",defaultContactNumber)

  useEffect(() => {
    if (contact) {
      setContactNumber(contact);
      return;
    }
    setContactNumber("");
  }, [contact, setContactNumber]);

  function onAddOrChange() {
    setModalData({
      customerId: userId,
      profileId,
      contact,
    });
    setModalView("ADD_OR_UPDATE_CHECKOUT_CONTACT");

    return openModal();
  }

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-5 lg:mb-6 xl:mb-7 -mt-1 xl:-mt-2">
        <div className="flex items-center gap-3 md:gap-4 text-lg lg:text-xl text-heading capitalize font-medium">
          {count && (
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-heading text-base text-white lg:text-xl">
              {count}
            </span>
          )}
          {label}
        </div>
      </div>

      <div className={classNames("w-full")} onClick={onAddOrChange}>
        <PhoneInput
          country="in"
          value={effectiveContactNumber}
          onlyCountries={["in", "pk", "lk", "ca"]} // Limit dropdown to India, Pakistan, Sri Lanka, Canada
          inputClass="!p-0 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm focus:!outline-none focus:!ring-0 !border !border-gray-400 !rounded focus:!border-heading !h-12"
          dropdownClass="focus:!ring-0 !border !border-gray-400 !shadow-350"
        />
      </div>
    </div>
  );
};

export default ContactGrid;

