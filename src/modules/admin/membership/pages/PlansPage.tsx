import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import Head from "../components/Head";

import UsersList from "../components/UsersList";

import Modal from "@/components/Modal";

import DeleteForm from "../components/DeleteForm";

import EditPlanForm from "../components/EditPlanForm";

import CreatePlanForm from "../components/CreatePlanForm";

import SettingsForm from "../components/SettingsForm";

export const Component = () => {
  usePageTitle("Plans List");
  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <div className='mt-2rem'>
          <UsersList />
        </div>
      </TransitionPage>

      <Modal edit={EditPlanForm} add={CreatePlanForm} delete={DeleteForm} settings={SettingsForm} />
    </ModalProvider>
  );
};

Component.displayName = "PlansPage";
