import Select from "@/components/Select";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import useBuyCoinForm from "../hooks/useBuyCoinForm";

import {constantBuyCoinPaymentType} from "../constants";

import {ENUM_BUY_COIN_PAYMENT_TYPE} from "../enums";

import CoinPaymentForm from "./CoinPaymentForm";

import BankDepositsForm from "./BankDepositsForm";

import CreditCardForm from "./CreditCardForm";

import Button from "@/components/Button";

const BuyCoinForm = () => {
  const {form, handleSubmit, data} = useBuyCoinForm();

  const paymentType = form.watch("payment_type");

  const renderPaymentForm = () => {
    if (!data) return null;
    switch (paymentType) {
      case ENUM_BUY_COIN_PAYMENT_TYPE.COIN_PAYMENT:
        return <CoinPaymentForm coins={data?.coins} />;
      case ENUM_BUY_COIN_PAYMENT_TYPE.BANK_DEPOSIT:
        return <BankDepositsForm />;
      case ENUM_BUY_COIN_PAYMENT_TYPE.CREDIT_CARD:
        return <CreditCardForm />;
    }
  };

  return (
    <form noValidate name='buy-coin' id='buy-coin' onSubmit={handleSubmit}>
      <h2 className='mb-1.5rem'>Today’s Coin Rate</h2>
      <div className='mb-1.25rem flex w-full items-center justify-between rounded-lg bg-neutral-800 px-8 py-6'>
        <p>1 NETWORK</p>
        <p>=</p>
        <p>10.000000 USD</p>
      </div>
      <h2 className='mb-1.5rem'>Buy Our Coin From Here</h2>
      <div>
        <div className='mb-1.25rem'>
          <Label htmlFor='send-request-amount'>Amount</Label>
          <Input
            type='text'
            {...form.register("coin")}
            placeholder='Enter Coin Amount'
            id='send-request-amount'
            isError={!!form.formState.errors.coin}
          />
          <ErrorMessage>{form.formState.errors.coin?.message}</ErrorMessage>
        </div>

        <div className='mb-1.25rem'>
          <Label htmlFor='send-request-wallet'>Select Payment Type</Label>
          <Select
            {...form.register("payment_type")}
            options={constantBuyCoinPaymentType}
            id='send-request-wallet'
            isError={!!form.formState.errors.payment_type}
            defaultValue=''
          />
          <ErrorMessage>{form.formState.errors.payment_type?.message}</ErrorMessage>
        </div>

        <div className='mt-2rem border-t border-t-neutral-500 pt-2rem'>{renderPaymentForm()}</div>
      </div>

      <Button type='submit' className='mt-1.25rem min-w-[150px]'>
        Buy Now
      </Button>
    </form>
  );
};

export default BuyCoinForm;
