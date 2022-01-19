/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface LenderAbiInterface extends utils.Interface {
  functions: {
    "AcceptRequest(bytes32)": FunctionFragment;
    "ReportBorrower(bytes32)": FunctionFragment;
    "borrowRequest(bytes32)": FunctionFragment;
    "borrowRequestId(address,uint256)": FunctionFragment;
    "borrower(address)": FunctionFragment;
    "borrowerCnic(address)": FunctionFragment;
    "borrowerReported(address)": FunctionFragment;
    "borrowingIntrest()": FunctionFragment;
    "payBackLender(bytes32)": FunctionFragment;
    "registerAsBorrower(string)": FunctionFragment;
    "registrationCollateral()": FunctionFragment;
    "removedAsBorrower()": FunctionFragment;
    "requestFundsToBorrow(uint256,uint256)": FunctionFragment;
    "tokenAddress()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "AcceptRequest",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "ReportBorrower",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowRequest",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowRequestId",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "borrower", values: [string]): string;
  encodeFunctionData(
    functionFragment: "borrowerCnic",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowerReported",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowingIntrest",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "payBackLender",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerAsBorrower",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "registrationCollateral",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removedAsBorrower",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestFundsToBorrow",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "AcceptRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ReportBorrower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowRequestId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "borrower", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowerCnic",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowerReported",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowingIntrest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "payBackLender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerAsBorrower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registrationCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removedAsBorrower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestFundsToBorrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenAddress",
    data: BytesLike
  ): Result;

  events: {
    "BorrowerRegistered(address)": EventFragment;
    "BorrowerRemoved(address)": EventFragment;
    "BorrowerRequestAccepted(bytes32,address,uint256)": EventFragment;
    "BorrowerRequestAdded(bytes32,address,uint256,uint256,string)": EventFragment;
    "BorrowerRequestCompleted(bytes32)": EventFragment;
    "BorrowerRequestReported(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BorrowerRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BorrowerRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BorrowerRequestAccepted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BorrowerRequestAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BorrowerRequestCompleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BorrowerRequestReported"): EventFragment;
}

export type BorrowerRegisteredEvent = TypedEvent<
  [string],
  { addedBorrower: string }
>;

export type BorrowerRegisteredEventFilter =
  TypedEventFilter<BorrowerRegisteredEvent>;

export type BorrowerRemovedEvent = TypedEvent<
  [string],
  { removedBorrower: string }
>;

export type BorrowerRemovedEventFilter = TypedEventFilter<BorrowerRemovedEvent>;

export type BorrowerRequestAcceptedEvent = TypedEvent<
  [string, string, BigNumber],
  { id: string; lender: string; startingTimeStamp: BigNumber }
>;

export type BorrowerRequestAcceptedEventFilter =
  TypedEventFilter<BorrowerRequestAcceptedEvent>;

export type BorrowerRequestAddedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, string],
  {
    id: string;
    borrower: string;
    amount: BigNumber;
    timeStampDuration: BigNumber;
    CNIC: string;
  }
>;

export type BorrowerRequestAddedEventFilter =
  TypedEventFilter<BorrowerRequestAddedEvent>;

export type BorrowerRequestCompletedEvent = TypedEvent<
  [string],
  { id: string }
>;

export type BorrowerRequestCompletedEventFilter =
  TypedEventFilter<BorrowerRequestCompletedEvent>;

export type BorrowerRequestReportedEvent = TypedEvent<[string], { id: string }>;

export type BorrowerRequestReportedEventFilter =
  TypedEventFilter<BorrowerRequestReportedEvent>;

export interface LenderAbi extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LenderAbiInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    AcceptRequest(
      requestId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ReportBorrower(
      requestId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    borrowRequest(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber, BigNumber, number] & {
        borrower: string;
        borrowerCNIC: string;
        lender: string;
        amount: BigNumber;
        initiationTime: BigNumber;
        duration: BigNumber;
        status: number;
      }
    >;

    borrowRequestId(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    borrower(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    borrowerCnic(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    borrowerReported(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    borrowingIntrest(overrides?: CallOverrides): Promise<[BigNumber]>;

    payBackLender(
      requestId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerAsBorrower(
      Cnic: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registrationCollateral(overrides?: CallOverrides): Promise<[BigNumber]>;

    removedAsBorrower(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestFundsToBorrow(
      _amount: BigNumberish,
      _duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  AcceptRequest(
    requestId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ReportBorrower(
    requestId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  borrowRequest(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, BigNumber, BigNumber, number] & {
      borrower: string;
      borrowerCNIC: string;
      lender: string;
      amount: BigNumber;
      initiationTime: BigNumber;
      duration: BigNumber;
      status: number;
    }
  >;

  borrowRequestId(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  borrower(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  borrowerCnic(arg0: string, overrides?: CallOverrides): Promise<string>;

  borrowerReported(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  borrowingIntrest(overrides?: CallOverrides): Promise<BigNumber>;

  payBackLender(
    requestId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerAsBorrower(
    Cnic: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registrationCollateral(overrides?: CallOverrides): Promise<BigNumber>;

  removedAsBorrower(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestFundsToBorrow(
    _amount: BigNumberish,
    _duration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    AcceptRequest(
      requestId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    ReportBorrower(
      requestId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    borrowRequest(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber, BigNumber, number] & {
        borrower: string;
        borrowerCNIC: string;
        lender: string;
        amount: BigNumber;
        initiationTime: BigNumber;
        duration: BigNumber;
        status: number;
      }
    >;

    borrowRequestId(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    borrower(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    borrowerCnic(arg0: string, overrides?: CallOverrides): Promise<string>;

    borrowerReported(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    borrowingIntrest(overrides?: CallOverrides): Promise<BigNumber>;

    payBackLender(
      requestId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    registerAsBorrower(Cnic: string, overrides?: CallOverrides): Promise<void>;

    registrationCollateral(overrides?: CallOverrides): Promise<BigNumber>;

    removedAsBorrower(overrides?: CallOverrides): Promise<void>;

    requestFundsToBorrow(
      _amount: BigNumberish,
      _duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "BorrowerRegistered(address)"(
      addedBorrower?: null
    ): BorrowerRegisteredEventFilter;
    BorrowerRegistered(addedBorrower?: null): BorrowerRegisteredEventFilter;

    "BorrowerRemoved(address)"(
      removedBorrower?: null
    ): BorrowerRemovedEventFilter;
    BorrowerRemoved(removedBorrower?: null): BorrowerRemovedEventFilter;

    "BorrowerRequestAccepted(bytes32,address,uint256)"(
      id?: null,
      lender?: null,
      startingTimeStamp?: null
    ): BorrowerRequestAcceptedEventFilter;
    BorrowerRequestAccepted(
      id?: null,
      lender?: null,
      startingTimeStamp?: null
    ): BorrowerRequestAcceptedEventFilter;

    "BorrowerRequestAdded(bytes32,address,uint256,uint256,string)"(
      id?: null,
      borrower?: null,
      amount?: null,
      timeStampDuration?: null,
      CNIC?: null
    ): BorrowerRequestAddedEventFilter;
    BorrowerRequestAdded(
      id?: null,
      borrower?: null,
      amount?: null,
      timeStampDuration?: null,
      CNIC?: null
    ): BorrowerRequestAddedEventFilter;

    "BorrowerRequestCompleted(bytes32)"(
      id?: null
    ): BorrowerRequestCompletedEventFilter;
    BorrowerRequestCompleted(id?: null): BorrowerRequestCompletedEventFilter;

    "BorrowerRequestReported(bytes32)"(
      id?: null
    ): BorrowerRequestReportedEventFilter;
    BorrowerRequestReported(id?: null): BorrowerRequestReportedEventFilter;
  };

  estimateGas: {
    AcceptRequest(
      requestId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ReportBorrower(
      requestId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    borrowRequest(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowRequestId(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrower(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    borrowerCnic(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    borrowerReported(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowingIntrest(overrides?: CallOverrides): Promise<BigNumber>;

    payBackLender(
      requestId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerAsBorrower(
      Cnic: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registrationCollateral(overrides?: CallOverrides): Promise<BigNumber>;

    removedAsBorrower(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestFundsToBorrow(
      _amount: BigNumberish,
      _duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    AcceptRequest(
      requestId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ReportBorrower(
      requestId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    borrowRequest(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowRequestId(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrower(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowerCnic(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowerReported(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowingIntrest(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payBackLender(
      requestId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerAsBorrower(
      Cnic: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registrationCollateral(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removedAsBorrower(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestFundsToBorrow(
      _amount: BigNumberish,
      _duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
