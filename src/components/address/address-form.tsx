import Select from "react-select";
import Button from "@components/ui/button";
import Input from "@components/ui/input";
import Label from "@components/ui/label";
import { RadioBox as Radio } from "@components/ui/radiobox";
import TextArea from "@components/ui/text-area";
import { useTranslation } from "next-i18next";
import * as yup from "yup";
import { AddressType } from "@framework/utils/constants";
import { Form } from "@components/ui/forms/form";
import { useUpdateCustomer } from "@framework/customer";
import { useUI } from "@contexts/ui.context";
import { GoogleMapLocation } from "@type/index";

type FormValues = {
  __typename?: string;
  title: string;
  type: AddressType;
  address: {
    country: string;
    city: string;
    state: string;
    zip: string;
    street_address: string;
  };
  location: GoogleMapLocation;
};

// Static country options
const countryOptions = [
  { value: "United States", label: "United States" },
  { value: "Canada", label: "Canada" },
  { value: "India", label: "India" },
  { value: "Australia", label: "Australia" },
  { value: "United Kingdom", label: "United Kingdom" },
];

const addressSchema = yup.object().shape({
  type: yup
    .string()
    .oneOf([AddressType?.Billing, AddressType?.Shipping])
    .required("error-type-required"),
  title: yup.string().required("error-title-required"),
  address: yup.object().shape({
    country: yup.string().required("error-country-required"),
    city: yup.string().required("error-city-required"),
    state: yup.string().required("error-state-required"),
    zip: yup.string().required("error-zip-required"),
    street_address: yup.string().required("error-street-required"),
  }),
});

export const AddressForm: React.FC<any> = ({
  onSubmit,
  defaultValues,
  isLoading,
}) => {
  const { t } = useTranslation("common");

  return (
    <Form<FormValues>
      onSubmit={onSubmit}
      className="grid h-full grid-cols-2 gap-5"
      //@ts-ignore
      validationSchema={addressSchema}
      useFormProps={{
        shouldUnregister: true,
        defaultValues,
      }}
      resolver={defaultValues}
    >
      {({ register, formState: { errors }, setValue }) => {
        return (
          <>
            <div>
              <Label>{t("text-type")}</Label>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <Radio
                  id="billing"
                  {...register("type")}
                  type="radio"
                  value={AddressType?.Billing}
                  labelKey={t("text-billing")}
                />
                <Radio
                  id="shipping"
                  {...register("type")}
                  type="radio"
                  value={AddressType?.Shipping}
                  labelKey={t("text-shipping")}
                />
              </div>
            </div>

            <Input
              labelKey={t("text-title")}
              {...register("title")}
              errorKey={t(errors?.title?.message!)}
              variant="outline"
              className="col-span-2"
            />

            {/* Country Dropdown */}
            <div>
              <Label>{t("text-country")}</Label>
              <Select
                options={countryOptions}
                defaultValue={countryOptions.find(
                  (option) => option.value === defaultValues?.address?.country
                )}
                onChange={(selectedOption) => {
                  setValue("address.country", selectedOption?.value || "");
                }}
                classNamePrefix="react-select"
                placeholder={t("Select a Country")}
              />
              {errors?.address?.country && (
                <p className="text-sm text-red-500">
                  {t(errors?.address?.country?.message!)}
                </p>
              )}
            </div>

            <Input
              labelKey={t("text-city")}
              {...register("address.city")}
              errorKey={t(errors?.address?.city?.message!)}
              variant="outline"
              type="string"
            />

            <Input
              labelKey={t("text-state")}
              {...register("address.state")}
              errorKey={t(errors?.address?.state?.message!)}
              variant="outline"
              type="string"
            />

            <Input
              labelKey={t("text-zip")}
              {...register("address.zip")}
              errorKey={t(errors?.address?.zip?.message!)}
              variant="outline"
              type="number"
            />

            <TextArea
              labelKey={t("text-street-address")}
              {...register("address.street_address")}
              errorKey={t(errors?.address?.street_address?.message!)}
              variant="outline"
              className="col-span-2"
            />

            <Button
              className="w-full col-span-2"
              loading={isLoading}
              disabled={isLoading}
            >
              {Boolean(defaultValues) ? t("text-update") : t("text-save")}{" "}
              {t("text-address")}
            </Button>
          </>
        );
      }}
    </Form>
  );
};

export default function CreateOrUpdateAddressForm() {
  const { t } = useTranslation('common');
  const {
    modalData: { customerId, address, type },
    closeModal,
  } = useUI();

  const { mutate: updateProfile } = useUpdateCustomer();

  const onSubmit = (values: FormValues) => {
    const formattedInput = {
      id: address?.id,
      // customer_id: customerId,
      title: values?.title,
      type: values?.type,
      address: {
        ...values.address,
      },
      location: values?.location,
    };
    updateProfile({
      id: customerId,
      address: [formattedInput],
    });
    closeModal();
  };

  return (
    <div className="p-5 bg-white sm:p-8 max-w-lg sm:min-w-[450px]  md:rounded-xl">
      <h1 className="mb-4 text-lg font-semibold text-center text-heading sm:mb-6">
        {address ? t('text-update') : t('text-add-new')} {t('text-address')}
      </h1>
      <AddressForm
        onSubmit={onSubmit}
        defaultValues={{
          title: address?.title ?? '',
          type: address?.type ?? type,
          address: {
            city: address?.address?.city ?? '',
            country: address?.address?.country ?? '',
            state: address?.address?.state ?? '',
            zip: address?.address?.zip ?? '',
            street_address: address?.address?.street_address ?? '',
            ...address?.address,
          },
          location: address?.location ?? '',
        }}
      />
    </div>
  );
}


// import Button from "@components/ui/button";
// import Input from "@components/ui/input";
// import Label from "@components/ui/label";
// import { RadioBox as Radio } from "@components/ui/radiobox";
// import TextArea from "@components/ui/text-area";
// import { useTranslation } from "next-i18next";
// import * as yup from "yup";
// import { AddressType } from "@framework/utils/constants";
// import { Form } from "@components/ui/forms/form";
// import { useUpdateCustomer } from "@framework/customer";
// import { useUI } from "@contexts/ui.context";
// import { GoogleMapLocation } from "@type/index";
// import Select from 'react-select';

// type FormValues = {
//   __typename?: string;
//   title: string;
//   type: AddressType;
//   address: {
//     country: string;
//     city: string;
//     state: string;
//     zip: string;
//     street_address: string;
//   };
//   location: GoogleMapLocation;
// };

// const addressSchema = yup.object().shape({
//   type: yup
//     .string()
//     .oneOf([AddressType?.Billing, AddressType?.Shipping])
//     .required("error-type-required"),
//   title: yup.string().required("error-title-required"),
//   address: yup.object().shape({
//     country: yup.string().required("error-country-required"),
//     city: yup.string().required("error-city-required"),
//     state: yup.string().required("error-state-required"),
//     zip: yup.string().required("error-zip-required"),
//     street_address: yup.string().required("error-street-required"),
//   }),
// });

// const countries = [
//    { value: 'India', label: 'India' },
//   { value: 'USA', label: 'USA' },
//   { value: 'Canada', label: 'Canada' },
//   { value: 'Mexico', label: 'Mexico' },
//   { value: 'United Kingdom', label: 'United Kingdom' },
//   { value: 'Germany', label: 'Germany' },
//   { value: 'France', label: 'France' },
//   { value: 'Italy', label: 'Italy' },
//   { value: 'Spain', label: 'Spain' },
//   { value: 'Australia', label: 'Australia' },
//   { value: 'China', label: 'China' },
//   { value: 'Japan', label: 'Japan' },
 
// ];

// export const AddressForm: React.FC<any> = ({
//   onSubmit,
//   defaultValues,
//   isLoading,
// }) => {
//   const { t } = useTranslation("common");

//   return (
//     <>
//       <Form<FormValues>
//         onSubmit={onSubmit}
//         className="grid h-full grid-cols-2 gap-5"
//         //@ts-ignore
//         validationSchema={addressSchema}
//         useFormProps={{
//           shouldUnregister: true,
//           defaultValues,
//         }}
//         resolver={defaultValues}
//       >
//         {({ register, formState: { errors } }) => {
//           return (
//             <>
//               <div>
//                 <Label>{t('text-type')}</Label>
//                 <div className="flex items-center space-x-4 rtl:space-x-reverse">
//                   <Radio
//                     id="billing"
//                     {...register('type')}
//                     type="radio"
//                     value={AddressType?.Billing}
//                     labelKey={t('text-billing')}
//                   />
//                   <Radio
//                     id="shipping"
//                     {...register('type')}
//                     type="radio"
//                     value={AddressType?.Shipping}
//                     labelKey={t('text-shipping')}
//                   />
//                 </div>
//               </div>

//               <Input
//                 labelKey={t("text-title")}
//                 {...register("title")}
//                 errorKey={t(errors?.title?.message!)}
//                 variant="outline"
//                 className="col-span-2"
//               />

//               <div className="col-span-2">
//                 <Label>{t('text-country')}</Label>
//                 <Select
//                   options={countries}
//                   {...register('address.country')}
//                   className="w-full"
//                   placeholder={('please select a country')}
//                 />
//                 {errors?.address?.country?.message && (
//                   <div className="text-red-500">{t(errors?.address?.country?.message)}</div>
//                 )}
//               </div>

//               <Input
//                 labelKey={t('text-city')}
//                 {...register('address.city')}
//                 errorKey={t(errors?.address?.city?.message!)}
//                 variant="outline"
//                 type="string"
//               />

//               <Input
//                 labelKey={t('text-state')}
//                 {...register('address.state')}
//                 errorKey={t(errors?.address?.state?.message!)}
//                 variant="outline"
//                 type="string"
//               />

//               <Input
//                 labelKey={t('text-zip')}
//                 {...register('address.zip')}
//                 errorKey={t(errors?.address?. zip?.message!)}
//                 variant="outline"
//                 type="number"
//               />

//               <TextArea
//                 labelKey={t('text-street-address')}
//                 {...register('address.street_address')}
//                 errorKey={t(errors?.address?.street_address?.message!)}
//                 variant="outline"
//                 className="col-span-2"
//               />

//               <Button
//                 className="w-full col-span-2"
//                 loading={isLoading}
//                 disabled={isLoading}
//               >
//                 {Boolean(defaultValues) ? t('text-update') : t('text-save')}{' '}
//                 {t('text-address')}
//               </Button>
//             </>
//           )
//         }}
//       </Form>
//     </>
//   );
// };

// export default function CreateOrUpdateAddressForm() {
//   const { t } = useTranslation('common');
//   const {
//     modalData: { customerId, address, type },
//     closeModal,
//   } = useUI();

//   const { mutate: updateProfile } = useUpdateCustomer();

//   const onSubmit = (values: FormValues) => {
//     const formattedInput = {
//       id: address?.id,
//       title: values?.title,
//       type: values?.type,
//       address: {
//         ...values.address,
//       },
//       location: values?.location,
//     };
//     updateProfile({
//       id: customerId,
//       address: [formattedInput],
//     });
//     closeModal();
//   };

//   return (
//     <div className="p-5 bg-white sm:p-8 max-w-lg sm:min-w-[450px]  md:rounded-xl">
//       <h1 className="mb-4 text-lg font-semibold text-center text-heading sm:mb-6">
//         {address ? t('text-update') : t('text-add-new')} {t('text-address')}
//       </h1>
//       <AddressForm
//         onSubmit={onSubmit}
//         defaultValues={{
//           title: address?.title ?? '',
//           type: address?.type ?? type,
//           address: {
//             city: address?.address?.city ?? '',
//             country: address?.address?.country ?? '',
//             state: address?.address?.state ?? '',
//             zip: address?.address?.zip ?? '',
//             street_address: address?.address?.street_address ?? '',
//             ...address?.address,
//           },
//           location: address?.location ?? '',
//         }}
//       />
//     </div>
//   );
// }