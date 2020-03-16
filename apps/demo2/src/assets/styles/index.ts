import { AntDesignDarkTheme, AntDesignLightTheme, ThemeService } from '@nx-monorepo-demo/shared/ui-styles';
import * as CustomDarkTheme from './themes/themeDark';
import * as CustomLightTheme from './themes/themeLight';


console.log(AntDesignLightTheme)

const mergeDeep = (...objects) => {
    const isObject = obj => obj && typeof obj === 'object';

    return objects.reduce((prev, obj) => {
        Object.keys(obj).forEach(key => {
            const pVal = prev[key];
            const oVal = obj[key];

            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                prev[key] = pVal.concat(...oVal);
            }
            else if (isObject(pVal) && isObject(oVal)) {
                prev[key] = mergeDeep(pVal, oVal);
            }
            else {
                prev[key] = oVal;
            }
        });

        return prev;
    }, {});
}

export default {
    "AntDesignDarkTheme": mergeDeep(AntDesignDarkTheme, CustomDarkTheme),
    "AntDesignLightTheme": mergeDeep(AntDesignLightTheme, CustomLightTheme),
    ThemeService
}
