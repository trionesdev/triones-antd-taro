import { FormProvider as RcFormProvider } from 'rc-field-form';
import type { FormProviderProps as RcFormProviderProps } from 'rc-field-form/lib/FormContext';
import type { Meta } from 'rc-field-form/lib/interface';
import React, { PropsWithChildren, ReactNode } from 'react';
import { FormInstance } from './hooks/useForm';
import { FormLabelAlign } from './instance';
import { RequiredMark } from './form';
import omit from "rc-util/lib/omit";

export interface FormContextProps {
  vertical: boolean;
  name?: string;
  colon?: boolean;
  labelAlign?: FormLabelAlign;
  labelWrap?: boolean;
  requiredMark?: RequiredMark;
  itemRef: (name: (string | number)[]) => (node: React.ReactElement) => void;
  form?: FormInstance;
}

export const FormContext = React.createContext<FormContextProps>({
  labelAlign: 'right',
  vertical: false,
  itemRef: (() => {}) as any,
});
export type ReportMetaChange = (meta: Meta, uniqueKeys: React.Key[]) => void;
export const NoStyleItemContext = React.createContext<ReportMetaChange | null>(
  null,
);

export interface FormProviderProps
  extends Omit<RcFormProviderProps, 'validateMessages'> {
  prefixCls?: string;
}

export const FormProvider: React.FC<FormProviderProps> = (props) => {
  const providerProps = props;
  return <RcFormProvider {...providerProps} />;
};

export interface FormItemStatusContextProps {
  isFormItemInput?: boolean;
  // status?: ValidateStatus;
  errors?: React.ReactNode[];
  warnings?: React.ReactNode[];
  hasFeedback?: boolean;
  feedbackIcon?: ReactNode;
}

export const FormItemInputContext =
  React.createContext<FormItemStatusContextProps>({});

if (process.env.NODE_ENV !== 'production') {
  FormItemInputContext.displayName = 'FormItemInputContext';
}

export type NoFormStyleProps = PropsWithChildren<{
  status?: boolean;
  override?: boolean;
}>;

export const NoFormStyle: React.FC<NoFormStyleProps> = ({
  children,
  status,
  override,
}) => {
  const formItemInputContext = React.useContext(FormItemInputContext);

  const newFormItemInputContext = React.useMemo(() => {
    const newContext = { ...formItemInputContext };
    if (override) {
      delete newContext.isFormItemInput;
    }
    if (status) {
      // delete newContext.status;
      delete newContext.hasFeedback;
      delete newContext.feedbackIcon;
    }
    return newContext;
  }, [status, override, formItemInputContext]);

  return (
    <FormItemInputContext.Provider value={newFormItemInputContext}>
      {children}
    </FormItemInputContext.Provider>
  );
};

export const VariantContext = React.createContext<any>(
  undefined,
);
