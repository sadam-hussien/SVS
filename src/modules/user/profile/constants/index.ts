import * as Yup from "yup";

import {IIdVerificationForm} from "../interfaces";
import {FILE_SIZE_LIMIT} from "@/constants";

export const schemaIdVerification: Yup.ObjectSchema<IIdVerificationForm> = Yup.object().shape({
  file_two: Yup.mixed<File>()
    .required("Back Id Image is required")
    .test("fileSize", "File is too large, should be less than 8MB", (value) => {
      // Ensure value is defined and has a size property
      return value && value.size <= FILE_SIZE_LIMIT;
    }),
  file_three: Yup.mixed<File>()
    .required("Front Id Image is required")
    .test("fileSize", "File is too large, should be less than 8MB", (value) => {
      return value && value.size <= FILE_SIZE_LIMIT;
    }),
});

export const constantProfileTabs = [
  {
    label: "Global Settings",
    value: "/user/profile/global-settings",
  },
  {
    label: "Edit Profile",
    value: "/user/profile/edit-profile",
  },
  {
    label: "Phone Verification",
    value: "/user/profile/phone-verification",
  },
  {
    label: "ID Verification",
    value: "/user/profile/id-verification",
  },
  {
    label: "Security",
    value: "/user/profile/security",
  },
];

export const constantCountries = [
  {
    label: "Select Country",
    value: "",
    disabled: true,
  },
  {value: "af", label: "Afghanistan"},
  {value: "al", label: "Albania"},
  {value: "dz", label: "Algeria"},
  {value: "ds", label: "American Samoa"},
  {value: "ad", label: "Andorra"},
  {value: "ao", label: "Angola"},
  {value: "ai", label: "Anguilla"},
  {value: "aq", label: "Antarctica"},
  {value: "ag", label: "Antigua and Barbuda"},
  {value: "ar", label: "Argentina"},
  {value: "am", label: "Armenia"},
  {value: "aw", label: "Aruba"},
  {value: "au", label: "Australia"},
  {value: "at", label: "Austria"},
  {value: "az", label: "Azerbaijan"}, // This one is selected
  {value: "bs", label: "Bahamas"},
  {value: "bh", label: "Bahrain"},
  {value: "bd", label: "Bangladesh"},
  {value: "bb", label: "Barbados"},
  {value: "by", label: "Belarus"},
  {value: "be", label: "Belgium"},
  {value: "bz", label: "Belize"},
  {value: "bj", label: "Benin"},
  {value: "bm", label: "Bermuda"},
];

export const constantGender = [
  {
    label: "Select Gender",
    value: "",
    disabled: true,
  },
  {value: 1, label: "Male"},
  {value: 2, label: "Female"},
];
