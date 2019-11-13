import { FormlyFieldConfig } from '@ngx-formly/core';
import { TypedTemplateOptionsModel } from './typed-template-options.model';

export interface TypedFieldConfigModel<TModel, TTestId extends string>
  extends FormlyFieldConfig {
  //  enforce to use a key which is part of the model interface
  key?: Extract<keyof TModel, string>;
  templateOptions?: TypedTemplateOptionsModel<TTestId>;
}
