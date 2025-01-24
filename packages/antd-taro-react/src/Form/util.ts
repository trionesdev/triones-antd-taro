import { InternalNamePath } from './instance';

const formItemNameBlackList = ['parentNode'];

// default form item id prefix.
const defaultItemNamePrefixCls: string = 'form_item';

export function toArray<T>(candidate?: T | T[] | false): T[] {
  if (candidate === undefined || candidate === false) return [];

  return Array.isArray(candidate) ? candidate : [candidate];
}

export function getFieldId(namePath: InternalNamePath, formName?: string): string | undefined {
  if (!namePath.length) {
    return undefined;
  }

  const mergedId = namePath.join('_');

  if (formName) {
    return `${formName}_${mergedId}`;
  }

  const isIllegalName = formItemNameBlackList.includes(mergedId);

  return isIllegalName ? `${defaultItemNamePrefixCls}_${mergedId}` : mergedId;
}
