import Modal from "@/components/Modal";

import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import InviteForm from "../components/InviteForm";

import Head from "../components/Head";

import { Navigate } from "react-router-dom";

import Tabs from "@/components/Tabs";

import { constantTabs } from "../constants";

import MyReferralsList from "../components/MyReferralsList";

import MyReferencesList from "../components/MyReferencesList";

import MyEarningsList from "../components/MyEarningsList";

import Box from "@/components/Box";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import useQuery from "@/hooks/useQuery";

import { apiGetReferralData } from "../services";

export const Component = () => {
  usePageTitle("My Referral");

  const { tabSearchParams: tab } = useApiUrlFilter()

  const { data } = useQuery({
    queryFn: apiGetReferralData,
    queryKey: ["get-user-referral"],
  })

  if (!tab) return <Navigate to='?tab=my-referrals' replace />;


  console.log(data);

  return (
    <ModalProvider>
      <TransitionPage>
        <div className='mb-1.5rem'>
          <Tabs tabs={constantTabs} />
        </div>
        <Head />
        <div className='mt-2rem'>
          <Box>
            {tab === "my-referrals" ? (
              <MyReferralsList />
            ) : tab === "my-references" ? (
              <MyReferencesList />
            ) : (
              <MyEarningsList />
            )}
          </Box>
        </div>
      </TransitionPage>

      <Modal invite={InviteForm} />
    </ModalProvider>
  );
};

Component.displayName = "ReferralPage";
