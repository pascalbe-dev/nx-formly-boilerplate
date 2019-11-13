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
      attributes: {
        'data-cy': 'Name'
      }
    }
  },
  {
    key: 'email',
    type: 'input',
    templateOptions: {
      attributes: {
        'data-cy': 'Email Address'
      }
    }
  },
  {
    key: 'phone',
    type: 'input',
    templateOptions: {
      attributes: {
        'data-cy': 'Phone Number'
      }
    }
  }
];
