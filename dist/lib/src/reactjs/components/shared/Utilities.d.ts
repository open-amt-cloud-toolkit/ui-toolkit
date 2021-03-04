/** Checks whether the given value is an object or not */
export declare const isObject: (value: any) => any;
/** Takes an object and converts the keys into camelcase  */
export declare const camelCaseKeys: (data: any) => any;
/** Takes an object and converts it to another structure using dot-notation */
export declare const reshape: (response: any, model: any) => any;
/** Takes an object, camel cases the keys, and converts it to another structure using dot-notation */
export declare const camelCaseReshape: (response: any, model: any) => any;
/** Tests if a value is a function */
export declare const isFunc: (value: any) => any;
export declare const passwordLengthValidation: (length: any) => any;
export declare const nameValidation: (value: any) => any;
export declare const passwordValidation: (value: any) => any;
export declare const portValidation: (value: any) => any;
export declare const commonNameValidation: (value: any) => any;
export declare const ipAddressValidation: (ipType: any, value: any) => any;
/** utility function to join the css class names */
export declare const joinClasses: (...classNames: any[]) => any;
/**
 * encode the special characters
 */
export declare const encodeSpecialCharacters: (configName: any) => string;
export declare const prepareHeaders: (apiKey: any, isMpsControl?: boolean | undefined) => any;
export declare const validateFileExtensions: (filePath: any) => boolean;
export declare const isFalsy: (value: any) => boolean;
