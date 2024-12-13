// // import { OTP } from '@framework/otp';
// // import { customerContactAtom } from '@store/checkout';
// // import { useAtom } from 'jotai';
// // import { useTranslation } from 'next-i18next';
// // import { useUI } from '@contexts/ui.context';
// // import React from 'react';
// // import { useSettings } from '@framework/settings';
// // import PhoneNumberForm from '@components/auth/otp/phone-number-form';

// // type Props = {
// //   data: {
// //     customerId: string;
// //     profileId: string;
// //     contactNumber: string;
// //   };
// // };

// // const AddOrUpdateCheckoutContact: React.FC<Props> = () => {
// //   const { closeModal } = useUI();
// //   const { t } = useTranslation('common');
// //   const { data: settings } = useSettings();
// //   const { useOtp } = settings?.options!;
// //   const [contactNumber, setContactNumber] = useAtom(customerContactAtom);

// //   function onContactUpdate(phone_number: string) {
// //     setContactNumber(phone_number);
// //     closeModal();
// //   }

// //   function onNumberUpdate({ phone_number }: { phone_number: string }) {
// //     setContactNumber(phone_number);
// //     closeModal();
// //   }

// //   return (
// //     <div className="p-6 sm:p-8 bg-white rounded-lg md:rounded-xl flex flex-col justify-center md:min-h-0">
// //       <h3 className="text-heading text-sm md:text-base font-semibold mb-5 text-center">
// //         {contactNumber ? t('text-update') : t('text-add-new')}{' '}
// //         {t('text-contact-number')}
// //       </h3>
// //       {useOtp ? (
// //         <OTP
// //           phoneNumber={contactNumber}
// //           //@ts-ignore
// //           onVerify={onContactUpdate}
// //         />
// //       ) : (
// //         <PhoneNumberForm
// //           onSubmit={onNumberUpdate}
// //           phoneNumber={contactNumber}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default AddOrUpdateCheckoutContact;


// import { OTP } from '@framework/otp';
// import { customerContactAtom } from '@store/checkout';
// import { useAtom } from 'jotai';
// import { useTranslation } from 'next-i18next';
// import { useUI } from '@contexts/ui.context';
// import React from 'react';
// import { useSettings } from '@framework/settings';
// import PhoneNumberForm from '@components/auth/otp/phone-number-form';

// type Props = {
//   data: {
//     customerId: string;
//     profileId: string;
//     contactNumber: string;
//   };
// };

// const AddOrUpdateCheckoutContact: React.FC<Props> = () => {
//   const { closeModal } = useUI();
//   const { t } = useTranslation('common');
//   const { data: settings } = useSettings();
//   const defaultContactNumber=settings?.options?.contactDetails?.contact
//   const useOtp = settings?.options?.useOtp ?? false;
//   const [contactNumber, setContactNumber] = useAtom(customerContactAtom);

//   function onContactUpdate(phone_number: string) {
//     setContactNumber(phone_number);
//     closeModal();
//   }

//   function onNumberUpdate({ phone_number }: { phone_number: string }) {
//     setContactNumber(phone_number);
//     closeModal();
//   }

//   return (
//     <div className="p-6 sm:p-8 bg-white rounded-lg md:rounded-xl flex flex-col justify-center md:min-h-0">
//       <h3 className="text-heading text-sm md:text-base font-semibold mb-5 text-center">
//         {contactNumber ? t('text-update') : t('text-add-new')}{' '}
//         {t('text-contact-number')}
//       </h3>
//       {useOtp ? (
//         <OTP
//           phoneNumber={contactNumber}
//           //@ts-ignore
//           onVerify={onContactUpdate}
//         />
//       ) : (
//         <PhoneNumberForm
//           onSubmit={onNumberUpdate}
//           phoneNumber={contactNumber}
//         />
//       )}
//     </div>
//   );
// };

// export default AddOrUpdateCheckoutContact;


import { OTP } from '@framework/otp';
import { customerContactAtom } from '@store/checkout';
import { useAtom } from 'jotai';
import { useTranslation } from 'next-i18next';
import { useUI } from '@contexts/ui.context';
import React from 'react';
import { useSettings } from '@framework/settings';
import PhoneNumberForm from '@components/auth/otp/phone-number-form';
import { useLogout, useUser } from '@framework/auth';
type Props = {
  data: {
    customerId: string;
    profileId: string;
    contactNumber: string;
  };
};

const AddOrUpdateCheckoutContact: React.FC<Props> = () => {
  const { closeModal } = useUI();
  const { t } = useTranslation('common');
  const { data: settings } = useSettings();
  const { me } = useUser();





  const defaultContactNumber = me?.last_order?.customer_contact || 'DefaultContactNumber';
  const useOtp = settings?.options?.useOtp ?? false;
  const [contactNumber, setContactNumber] = useAtom(customerContactAtom);
  

  const effectiveContactNumber = contactNumber || defaultContactNumber;

  function onContactUpdate(phone_number: string) {
    setContactNumber(phone_number);
    closeModal();
  }

  function onNumberUpdate({ phone_number }: { phone_number: string }) {
    setContactNumber(phone_number);
    closeModal();
  }

  console.log("contact",defaultContactNumber)
  return (
    <div className="p-6 sm:p-8 bg-white rounded-lg md:rounded-xl flex flex-col justify-center md:min-h-0">
      <h3 className="text-heading text-sm md:text-base font-semibold mb-5 text-center">
        {contactNumber ? t('text-update') : t('text-add-new')}{' '}
        {t('text-contact-number')}
      </h3>
      {useOtp ? (
        <OTP
          phoneNumber={effectiveContactNumber}
          //@ts-ignore
          onVerify={onContactUpdate}
        />
      ) : (
        <PhoneNumberForm
          onSubmit={onNumberUpdate}
          phoneNumber={effectiveContactNumber}
        />
      )}
    </div>
  );
};

export default AddOrUpdateCheckoutContact;

