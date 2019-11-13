import { Moment } from 'moment';

export interface ClaimInformation {
  claimDate: Moment;
  description: string;
}

export type ClaimInformationTestIdType = 'Claim Date' | 'Claim Description';
