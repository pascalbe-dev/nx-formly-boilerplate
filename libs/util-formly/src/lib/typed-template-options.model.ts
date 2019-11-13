import { FormlyTemplateOptions } from '@ngx-formly/core';
export interface TypedTemplateOptionsModel<TTestId extends string>
  extends FormlyTemplateOptions {
  //  enforce adding a data-cy attribute, which is also saved as custom type extending string
  //  this allows sharing the test IDs between test and app and avoids typos and inconsistent renamings
  attributes: {
    ['data-cy']: TTestId;
    [key: string]: string | number;
  };
}
