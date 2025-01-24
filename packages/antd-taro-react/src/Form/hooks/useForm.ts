import * as React from 'react';
import type {FormInstance as RcFormInstance} from 'rc-field-form';
import {useForm as useRcForm} from 'rc-field-form';
import {FormInstance} from '../interface';

export default function useForm<Values = any>(form?: FormInstance<Values>): [FormInstance<Values>] {
    const [rcForm] = useRcForm();
    const itemsRef = React.useRef<Record<string, React.ReactElement>>({});

    const wrapForm: FormInstance<Values> = React.useMemo(() => {
        return form ?? {...rcForm}
    }, [form, rcForm]);

    return [wrapForm];
}
