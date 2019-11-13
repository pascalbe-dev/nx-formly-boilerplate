import { TypedFieldConfigModel } from '@nx-formly-boilerplate/util-formly';
import {
  ReportPerson,
  ReportPersonTestIdType
} from '@nx-formly-boilerplate/ui-interfaces';

export const getReportPersonForm = (): TypedFieldConfigModel<
  ReportPerson,
  ReportPersonTestIdType
>[] => [
  {
    key: 'name',
    type: 'input',
    templateOptions: {
      label: 'Name of the reporting person',
      required: true,
      attributes: {
        'data-cy': 'Name'
      }
    }
  },
  {
    key: 'email',
    type: 'input',
    templateOptions: {
      label: 'Email address of the reporting person',
      required: true,
      attributes: {
        'data-cy': 'Email Address'
      }
    }
  },
  {
    key: 'phone',
    type: 'input',
    templateOptions: {
      label: 'Phone number of the reporting person',
      description: 'Only mobile phone number expected',
      attributes: {
        'data-cy': 'Phone Number'
      }
    }
  }
];
