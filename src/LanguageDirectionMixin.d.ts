// Elix is a JavaScript project, but we use TypeScript as an internal tool to
// confirm our code is type safe.

/// <reference path="../src/shared.d.ts"/>

import * as symbols from './symbols.js';

declare const LanguageDirectionMixin: StateMixin<{}, {}, {
  rightToLeft: boolean;
}, {
  languageDirection: string;
  [symbols.rightToLeft]: boolean;
}>;

export default LanguageDirectionMixin;
