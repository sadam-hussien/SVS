import {EnumAppStatuses} from "@/enums";

export const constantStatusColors = {
  [EnumAppStatuses.pending]: "border-warning/20 text-warning",
  [EnumAppStatuses.active]: "border-success/20 text-success",
  [EnumAppStatuses.inactive]: "border-error/20 text-error",
  [EnumAppStatuses.deactive]: "border-error/20 text-error",
  // [EnumBuyCoinStatus.pending]: "border-warning/20 text-warning",
  [EnumAppStatuses.completed]: "border-success/20 text-success",
  // [EnumBuyCoinStatus.active]: "border-success/20 text-success",
  [EnumAppStatuses.failed]: "border-error/20 text-error",
  [EnumAppStatuses.banned]: "border-error/20 text-error",
  // [EnumBuyCoinStatus.inactive]: "border-error/20 text-error",

  // [EnumCoinHistoryStatus.pending]: "border-warning/20 text-warning",
  [EnumAppStatuses.accepted]: "border-success/20 text-success",
  [EnumAppStatuses.rejected]: "border-error/20 text-error",
  // [EnumCoinHistoryStatus.failed]: "border-error/20 text-error",
};

export const constantLanguage = [
  {label: "Select Language", value: "", disabled: true},
  {label: "Arabic", value: "ar"},
  {label: "German", value: "de"},
  {label: "English", value: "en"},
  {label: "Spanish", value: "es"},
  {label: "Estonian", value: "et"},
  {label: "Farsi", value: "fa"},
  {label: "French", value: "fr"},
  {label: "Greece", value: "gr"},
  {label: "Indonesian", value: "id"},
  {label: "Italian", value: "it"},
  {label: "Japanese", value: "ja"},
  {label: "Korean", value: "ko"},
  {label: "Dutch", value: "nl"},
  {label: "Polish", value: "pl"},
  {label: "Portuguese (Brazil)", value: "pt-br"},
  {label: "Portuguese (European)", value: "pt"},
  {label: "Romanian", value: "ro"},
  {label: "Russian", value: "ru"},
  {label: "Thai", value: "th"},
  {label: "Turkish", value: "tr"}, // This is the selected option
  {label: "Chinese (Simplified)", value: "zh-CN"},
  {label: "Chinese (Traditional)", value: "zh-TW"},
];

export const baseURL = import.meta.env.VITE_APP_API_URL;

export const constantRoles = [
  {label: "Select Role", value: "", disabled: true},
  {label: "Admin", value: 1},
  {label: "User", value: 2},
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

export const constantEnableAndDisablesOptions = [
  {
    label: "Enabled",
    value: 1,
  },
  {
    label: "Disabled",
    value: 0,
  },
];

export const constantStatusOptions = [
  {
    label: "Active",
    value: 1,
  },
  {
    label: "Inactive",
    value: 0,
  },
];

export const constantCountriesList = [
  {label: "Afghanistan", value: "af"},
  {label: "Albania", value: "al"},
  {label: "Algeria", value: "dz"},
  {label: "American Samoa", value: "ds"},
  {label: "Andorra", value: "ad"},
  {label: "Angola", value: "ao"},
  {label: "Anguilla", value: "ai"},
  {label: "Antarctica", value: "aq"},
  {label: "Antigua and Barbuda", value: "ag"},
  {label: "Argentina", value: "ar"},
  {label: "Armenia", value: "am"},
  {label: "Aruba", value: "aw"},
  {label: "Australia", value: "au"},
  {label: "Austria", value: "at"},
  {label: "Azerbaijan", value: "az"},
  {label: "Bahamas", value: "bs"},
  {label: "Bahrain", value: "bh"},
  {label: "Bangladesh", value: "bd"},
  {label: "Barbados", value: "bb"},
  {label: "Belarus", value: "by"},
  {label: "Belgium", value: "be"},
  {label: "Belize", value: "bz"},
  {label: "Benin", value: "bj"},
  {label: "Bermuda", value: "bm"},
  {label: "Bhutan", value: "bt"},
  {label: "Bolivia", value: "bo"},
  {label: "Bosnia and Herzegovina", value: "ba"},
  {label: "Botswana", value: "bw"},
  {label: "Brazil", value: "br"},
  {label: "British Indian Ocean Territory", value: "io"},
  {label: "Brunei", value: "bn"},
  {label: "Bulgaria", value: "bg"},
  {label: "Burkina", value: "bf"},
  {label: "Burundi", value: "bi"},
  {label: "Cambodia", value: "kh"},
  {label: "Cameroon", value: "cm"},
  {label: "Canada", value: "ca"},
  {label: "Cape Verde", value: "cv"},
  {label: "Cayman Islands", value: "ky"},
  {label: "Central African Republic", value: "cf"},
  {label: "Chad", value: "td"},
  {label: "Chile", value: "cl"},
  {label: "China", value: "cn"},
  {label: "Christmas Island", value: "cx"},
  {label: "Cocos Islands", value: "cc"},
  {label: "Colombia", value: "co"},
  {label: "Comoros", value: "km"},
  {label: "Cook Islands", value: "ck"},
  {label: "Costa Rica", value: "cr"},
  {label: "Croatia", value: "hr"},
  {label: "Cuba", value: "cu"},
  {label: "Cyprus", value: "cy"},
  {label: "Czech Republic", value: "cz"},
  {label: "Congo", value: "cg"},
  {label: "Denmark", value: "dk"},
  {label: "Djibouti", value: "dj"},
  {label: "Dominica", value: "dm"},
  {label: "East Timor", value: "tp"},
  {label: "Ecuador", value: "ec"},
  {label: "Egypt", value: "eg"},
  {label: "El Salvador", value: "sv"},
  {label: "Equatorial Guinea", value: "gq"},
  {label: "Eritrea", value: "er"},
  {label: "Estonia", value: "ee"},
  {label: "Ethiopia", value: "et"},
  {label: "Falkland Islands", value: "fk"},
  {label: "Faroe", value: "fo"},
  {label: "Fiji", value: "fj"},
  {label: "Finland", value: "fi"},
  {label: "France", value: "fr"},
  {label: "French Polynesia", value: "pf"},
  {label: "Gabon", value: "ga"},
  {label: "Gambia", value: "gm"},
  {label: "Georgia", value: "ge"},
  {label: "Germany", value: "de"},
  {label: "Ghana", value: "gh"},
  {label: "Gibraltar", value: "gi"},
  {label: "Greece", value: "gr"},
  {label: "Greenland", value: "gl"},
  {label: "Grenada", value: "gd"},
  {label: "Guam", value: "gu"},
  {label: "Guatemala", value: "gt"},
  {label: "Guernsey", value: "gk"},
  {label: "Guinea", value: "gn"},
  {label: "Guinea-", value: "gw"},
  {label: "Guyana", value: "gy"},
  {label: "Haiti", value: "ht"},
  {label: "Honduras", value: "hn"},
  {label: "Hong Kong", value: "hk"},
  {label: "Hungary", value: "hu"},
  {label: "Iceland", value: "is"},
  {label: "India", value: "in"},
  {label: "Indonesia", value: "id"},
  {label: "Iran", value: "ir"},
  {label: "Iraq", value: "iq"},
  {label: "Ireland", value: "ie"},
  {label: "Italy", value: "it"},
  {label: "Ivory", value: "ci"},
  {label: "Jamaica", value: "jm"},
  {label: "Japan", value: "jp"},
  {label: "Jersey", value: "je"},
  {label: "Jordan", value: "jo"},
  {label: "Kazakhstan", value: "kz"},
  {label: "Kenya", value: "ke"},
  {label: "Kiribati", value: "ki"},
  {label: "North Korea", value: "kp"},
  {label: "South Korea", value: "kr"},
  {label: "Kosovo", value: "xk"},
  {label: "Kuwait", value: "kw"},
  {label: "Kyrgyzstan", value: "kg"},
  {label: "Laos", value: "la"},
  {label: "Latvia", value: "lv"},
  {label: "Lebanon", value: "lb"},
  {label: "Lesotho", value: "ls"},
  {label: "Liberia", value: "lr"},
  {label: "Libya", value: "ly"},
  {label: "Liechtenstein", value: "li"},
  {label: "Lithuania", value: "lt"},
  {label: "Luxembourg", value: "lu"},
  {label: "Macau", value: "mo"},
  {label: "Macedonia", value: "mk"},
  {label: "Madagascar", value: "mg"},
  {label: "Malawi", value: "mw"},
  {label: "Malaysia", value: "my"},
  {label: "Maldives", value: "mv"},
  {label: "Mali", value: "ml"},
  {label: "Malta", value: "mt"},
  {label: "Marshall Islands", value: "mh"},
  {label: "Mauritania", value: "mr"},
  {label: "Mauritius", value: "mu"},
  {label: "Mayotte", value: "ty"},
  {label: "Mexico", value: "mx"},
  {label: "Micronesia", value: "fm"},
  {label: "Moldova, Republic of", value: "md"},
  {label: "Monaco", value: "mc"},
  {label: "Mongolia", value: "mn"},
  {label: "Montenegro", value: "me"},
  {label: "Montserrat", value: "ms"},
  {label: "Morocco", value: "ma"},
  {label: "Mozambique", value: "mz"},
  {label: "Myanmar", value: "mm"},
  {label: "Namibia", value: "na"},
  {label: "Nauru", value: "nr"},
  {label: "Nepal", value: "np"},
  {label: "Netherlands", value: "nl"},
  {label: "Netherlands Antilles", value: "an"},
  {label: "New Caledonia", value: "nc"},
  {label: "New Zealand", value: "nz"},
  {label: "Nicaragua", value: "ni"},
  {label: "Niger", value: "ne"},
  {label: "Nigeria", value: "ng"},
  {label: "Niue", value: "nu"},
  {label: "Northern Mariana Islands", value: "mp"},
  {label: "Norway", value: "no"},
  {label: "Oman", value: "om"},
  {label: "Pakistan", value: "pk"},
  {label: "Palau", value: "pw"},
  {label: "Palestine", value: "ps"},
  {label: "Panama", value: "pa"},
  {label: "Papua New Guinea", value: "pg"},
  {label: "Paraguay", value: "py"},
  {label: "Peru", value: "pe"},
  {label: "Philippines", value: "ph"},
  {label: "Pitcairn", value: "pn"},
  {label: "Poland", value: "pl"},
  {label: "Portugal", value: "pt"},
  {label: "Qatar", value: "qa"},
  {label: "Reunion", value: "re"},
  {label: "Romania", value: "ro"},
  {label: "Russian", value: "ru"},
  {label: "Rwanda", value: "rw"},
  {label: "Saint Kitts and Nevis", value: "kn"},
  {label: "Saint Lucia", value: "lc"},
  {label: "Saint Vincent and the Grenadines", value: "vc"},
  {label: "Samoa", value: "ws"},
  {label: "San Marino", value: "sm"},
  {label: "Sao Tome and", value: "st"},
  {label: "Saudi Arabia", value: "sa"},
  {label: "Senegal", value: "sn"},
  {label: "Serbia", value: "rs"},
  {label: "Seychelles", value: "sc"},
  {label: "Sierra", value: "sl"},
  {label: "Singapore", value: "sg"},
  {label: "Slovakia", value: "sk"},
  {label: "Slovenia", value: "si"},
  {label: "Solomon Islands", value: "sb"},
  {label: "Somalia", value: "so"},
  {label: "South Africa", value: "za"},
  {label: "Spain", value: "es"},
  {label: "Sri Lanka", value: "lk"},
  {label: "Sudan", value: "sd"},
  {label: "Suriname", value: "sr"},
  {label: "Svalbard and Jan Mayen", value: "sj"},
  {label: "Swaziland", value: "sz"},
  {label: "Sweden", value: "se"},
  {label: "Switzerland", value: "ch"},
  {label: "Syria", value: "sy"},
  {label: "Taiwan", value: "tw"},
  {label: "Tajikistan", value: "tj"},
  {label: "Tanzania", value: "tz"},
  {label: "Thailand", value: "th"},
  {label: "Togo", value: "tg"},
  {label: "Tokelau", value: "tk"},
  {label: "Tonga", value: "to"},
  {label: "Trinidad and Tobago", value: "tt"},
  {label: "Tunisia", value: "tn"},
  {label: "Turkey", value: "tr"},
  {label: "Turkmenistan", value: "tm"},
  {label: "Turks and Caicos Islands", value: "tc"},
  {label: "Tuvalu", value: "tv"},
  {label: "Uganda", value: "ug"},
  {label: "Ukraine", value: "ua"},
  {label: "United Arab Emirates", value: "ae"},
  {label: "United", value: "gb"},
  {label: "Uruguay", value: "uy"},
  {label: "Uzbekistan", value: "uz"},
  {label: "Vanuatu", value: "vu"},
  {label: "Vatican City State", value: "va"},
  {label: "Venezuela", value: "ve"},
  {label: "Vietnam", value: "vn"},
  {label: "Virgin Islands (U.S.)", value: "vi"},
  {label: "Wallis and Futuna Islands", value: "wf"},
  {label: "Western", value: "eh"},
  {label: "Yemen", value: "ye"},
  {label: "Zambia", value: "zm"},
  {label: "Zimbabwe", value: "zw"},
];
