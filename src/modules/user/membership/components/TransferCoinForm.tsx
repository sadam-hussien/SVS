import ModalHeader from "@/components/ModalHeader";

import useTransferCoinForm from "../hooks/useTransferCoinForm";

import ModalBody from "@/components/ModalBody";

import ModalFooter from "@/components/ModalFooter";

import Label from "@/components/Label";

import Input from "@/components/Input";

import ErrorMessage from "@/components/ErrorMessage";

import Select from "@/components/Select";

import RadioBoxInput from "@/components/RadioBoxInput";

import { constantTransferCoinMethods } from "../constants";

import { IWallet } from "../interfaces";

import { useCallback } from "react";

const TransferCoinForm = ({ data }: IModalComponentProps) => {
  const { form, handleSubmit, isPending } = useTransferCoinForm();

  const wallets = data as IWallet[]

  const handelOpthions = useCallback(() => {
    return wallets?.map((data) => {
      return {
        label: data.name,
        value: data.id
      }
    })
  }, [wallets])

  return (
    <form noValidate name='transfer-form' id='transfer-form' onSubmit={handleSubmit}>
      <ModalHeader title='Transfer Coin' />
      <ModalBody>
        <div className='mb-1.25rem'>
          <Label>Select Transfer Coin Method</Label>
          <div className='flex flex-col gap-0.75rem'>
            <RadioBoxInput
              {...form.register("type")}
              label='From your main wallet to club wallet'
              value={constantTransferCoinMethods[0]}
            />
            <RadioBoxInput
              {...form.register("type")}
              label='From your club wallet to main wallet'
              value={constantTransferCoinMethods[1]}
            />
          </div>
          <ErrorMessage>{form.formState.errors.type?.message}</ErrorMessage>
        </div>

        <div className='mb-1.25rem'>
          <Label htmlFor='transfer-form-wallet'>Select Wallet</Label>
          <Select
            {...form.register("wallet_id")}
            options={handelOpthions()}
            id='transfer-form-wallet'
            isError={!!form.formState.errors.wallet_id}
            defaultValue=''
          />
          <ErrorMessage>{form.formState.errors.wallet_id?.message}</ErrorMessage>
        </div>

        <div className='mb-1.25rem'>
          <Label htmlFor='transfer-form-amount'>Amount</Label>
          <Input
            type='text'
            {...form.register("amount")}
            placeholder='Enter amount'
            id='transfer-form-amount'
            isError={!!form.formState.errors.amount}
          />
          <ErrorMessage>{form.formState.errors.amount?.message}</ErrorMessage>
        </div>
      </ModalBody>
      <ModalFooter isLoading={isPending} title='Transfer' />
    </form>
  );
};

export default TransferCoinForm;
