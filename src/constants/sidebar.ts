import {EnumUserRole} from "@/enums";

interface ISidebarItemSubMenu {
  title: string;
  path: string;
}

interface ISidebarItemBase {
  title: string;
  path: string;
  icon: string;
  end?: boolean;
}

interface ISidebarItemWithSubMenu extends ISidebarItemBase {
  isSubmenu: true;
  subMenu: ISidebarItemSubMenu[];
}

interface ISidebarItemWithoutSubMenu extends ISidebarItemBase {
  isSubmenu: false;
  subMenu?: never;
}

type ISidebarItem = {
  [key in keyof typeof EnumUserRole]: (ISidebarItemWithSubMenu | ISidebarItemWithoutSubMenu)[];
};

export const constantSidebar: ISidebarItem = {
  [EnumUserRole.admin]: [
    {
      title: "Dashboard",
      path: "/admin",
      icon: "dashboard",
      end: true,
      isSubmenu: false,
    },
    {
      title: "Users",
      path: "/admin/users",
      icon: "users",
      end: true,
      isSubmenu: false,
    },
    {
      title: "Coins List",
      path: "/admin/coins-list",
      icon: "coins",
      end: true,
      isSubmenu: false,
    },
    {
      title: "Buy Coin Orders",
      path: "/admin/orders",
      icon: "orders",
      end: true,
      isSubmenu: false,
    },

    {
      title: "Wallets",
      icon: "wallets",
      path: "/admin/wallets",
      isSubmenu: false,
    },
    {
      title: "Transactions",
      icon: "ledgers",
      path: "/admin/transactions",
      isSubmenu: true,
      subMenu: [
        {
          title: "Withdrawals Requests",
          path: "/admin/transactions-withdrawals",
        },
        {
          title: "Deposit Requests",
          path: "/admin/transactions-deposit",
        },
      ],
    },
    {
      title: "Membership",
      icon: "membership",
      path: "/admin/membership",
      isSubmenu: true,
      subMenu: [
        {
          title: "Member List",
          path: "/admin/member-list",
        },
        {
          title: "Plans",
          path: "/admin/membership-plans",
        },
        {
          title: "Transaction History",
          path: "/admin/transaction-history",
        },
        {
          title: "Bonus Distribution",
          path: "/admin/bonus-distribution",
        },
      ],
    },
    {
      title: "Bank Management",
      icon: "creditCard",
      path: "/admin/bank-management",
      isSubmenu: false,
    },
    {
      title: "Settings",
      path: "/admin/settings",
      icon: "cog",
      isSubmenu: true,
      subMenu: [
        {
          title: "General",
          path: "/admin/settings/general",
        },
        {
          title: "Feature",
          path: "/admin/settings/feature",
        },
        {
          title: "Payment Methods",
          path: "/admin/settings/payment-methods",
        },
        {
          title: "Configurations",
          path: "/admin/settings/configuration",
        },
      ],
    },
  ],
  [EnumUserRole.user]: [
    {
      title: "Dashboard",
      path: "/user",
      icon: "dashboard",
      end: true,
      isSubmenu: false,
    },
    {
      title: "Buy Coin",
      icon: "buy",
      path: "/user/buy-coin",
      isSubmenu: true,
      subMenu: [
        {
          title: "Buy",
          path: "/user/buy-coin",
        },
        {
          title: "History",
          path: "/user/buy-coin-history",
        },
        {
          title: "Referral History",
          path: "/user/buy-coin-referral-history",
        },
      ],
    },
    {
      title: "Send/Receive",
      icon: "sendReceive",
      path: "/user/request-coin",
      isSubmenu: false,
      // subMenu: [
      //   {
      //     title: "Sent History",
      //     path: "/user/request-coin-sent-history",
      //   },
      //   {
      //     title: "Received History",
      //     path: "/user/request-coin-received-history",
      //   },
      //   {
      //     title: "Pending Requests",
      //     path: "/user/request-coin-pending-requests",
      //   },
      // ],
    },
    {
      title: "Wallets",
      icon: "wallets",
      path: "/user/my-wallets",
      isSubmenu: true,
      subMenu: [
        {
          title: "My Wallets",
          path: "/user/my-wallets",
        },
        {
          title: "Swap History",
          path: "/user/my-wallets-swap-history",
        },
      ],
    },
    {
      title: "Membership",
      icon: "membership",
      path: "/user/membership",
      isSubmenu: true,
      subMenu: [
        {
          title: "Plans",
          path: "/user/membership-plans",
        },
        // {
        //   title: "Transfer Coin",
        //   path: "/user/membership-transfer-coin",
        // },
        {
          title: "My Membership",
          path: "/user/membership-history",
        },
      ],
    },
    {
      title: "Referral",
      path: "/user/referral",
      icon: "referral",
      isSubmenu: false,
    },
    {
      title: "Settings",
      path: "/user/profile",
      icon: "cog",
      isSubmenu: false,
    },
  ],
};
