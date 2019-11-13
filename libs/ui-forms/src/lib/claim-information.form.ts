import { TypedFieldConfigModel } from '@nx-formly-boilerplate/util-formly';
import {
  ClaimInformation,
  ClaimInformationTestIdType
} from '@nx-formly-boilerplate/ui-interfaces';

export const getClaimInformationForm = (): TypedFieldConfigModel<
  ClaimInformation,
  ClaimInformationTestIdType
>[] => [
  {
    key: 'claimDate',
    type: 'datepicker',
    templateOptions: {
      attributes: {
        'data-cy': 'Claim Date'
      }
    }
  },
  {
    key: 'description',
    type: 'input',
    templateOptions: {
      attributes: {
        'data-cy': 'Claim Description'
      }
    }
  }
];
