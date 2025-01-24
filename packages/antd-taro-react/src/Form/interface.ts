import * as React from 'react';
import type { FormInstance as RcFormInstance } from 'rc-field-form';
import { useForm as useRcForm } from 'rc-field-form';

export interface FormInstance<Values = any> extends RcFormInstance<Values> {

}
