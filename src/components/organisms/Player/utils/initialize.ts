import Plyr from 'plyr';

import { controlOptions, i18nOptions, settingOptions } from './constants';

export const initialOptions = (options?: Plyr.Options) => {
  const newOptions = options || {};
  newOptions.i18n = i18nOptions;
  newOptions.controls = controlOptions(options?.controls as string[]);
  newOptions.settings = settingOptions;

  return newOptions;
};
