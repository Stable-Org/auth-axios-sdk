/* tslint:disable */
/* eslint-disable */
/**
 * Stable - Auth Service
 * An authentication service API for Stable
 *
 * The version of the OpenAPI document: 0.0.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface AcceptedResponseDto
 */
export interface AcceptedResponseDto {
    /**
     * An informational message
     * @type {string}
     * @memberof AcceptedResponseDto
     */
    'message': string;
}
/**
 * 
 * @export
 * @interface BadRequestResponseDto
 */
export interface BadRequestResponseDto {
    /**
     * HTTP status code of the error
     * @type {number}
     * @memberof BadRequestResponseDto
     */
    'statusCode': number;
    /**
     * Short descriptions of the errors
     * @type {Array<string>}
     * @memberof BadRequestResponseDto
     */
    'message': Array<string>;
    /**
     * Error type
     * @type {string}
     * @memberof BadRequestResponseDto
     */
    'error': string;
}
/**
 * 
 * @export
 * @interface ConfirmForgotPasswordRequestDto
 */
export interface ConfirmForgotPasswordRequestDto {
    /**
     * The email of the user
     * @type {string}
     * @memberof ConfirmForgotPasswordRequestDto
     */
    'email': string;
    /**
     * The verification code sent to the email
     * @type {string}
     * @memberof ConfirmForgotPasswordRequestDto
     */
    'verificationCode': string;
    /**
     * The password of the user
     * @type {string}
     * @memberof ConfirmForgotPasswordRequestDto
     */
    'newPassword': string;
}
/**
 * 
 * @export
 * @interface ConfirmRequestDto
 */
export interface ConfirmRequestDto {
    /**
     * The email of the user
     * @type {string}
     * @memberof ConfirmRequestDto
     */
    'email': string;
    /**
     * The confirmation code sent to the user\'s email
     * @type {string}
     * @memberof ConfirmRequestDto
     */
    'code': string;
}
/**
 * 
 * @export
 * @interface ForgotPasswordRequestDto
 */
export interface ForgotPasswordRequestDto {
    /**
     * The email of the user
     * @type {string}
     * @memberof ForgotPasswordRequestDto
     */
    'email': string;
}
/**
 * 
 * @export
 * @interface LoginRequestDto
 */
export interface LoginRequestDto {
    /**
     * The email of the user
     * @type {string}
     * @memberof LoginRequestDto
     */
    'email': string;
    /**
     * The password of the user
     * @type {string}
     * @memberof LoginRequestDto
     */
    'password': string;
    /**
     * The new password to set for the user (optional)
     * @type {string}
     * @memberof LoginRequestDto
     */
    'newPassword'?: string;
}
/**
 * 
 * @export
 * @interface LoginResponseDto
 */
export interface LoginResponseDto {
    /**
     * The ID token for the user
     * @type {string}
     * @memberof LoginResponseDto
     */
    'idToken': string;
    /**
     * The access token for the user
     * @type {string}
     * @memberof LoginResponseDto
     */
    'accessToken': string;
    /**
     * The refresh token for the user
     * @type {string}
     * @memberof LoginResponseDto
     */
    'refreshToken': string;
}
/**
 * 
 * @export
 * @interface RefreshTokenRequestDto
 */
export interface RefreshTokenRequestDto {
    /**
     * The refresh token to be used for generating new tokens.
     * @type {string}
     * @memberof RefreshTokenRequestDto
     */
    'refreshToken': string;
}
/**
 * 
 * @export
 * @interface RefreshTokenResponseDto
 */
export interface RefreshTokenResponseDto {
    /**
     * The ID token for the user
     * @type {string}
     * @memberof RefreshTokenResponseDto
     */
    'idToken': string;
    /**
     * The access token for the user
     * @type {string}
     * @memberof RefreshTokenResponseDto
     */
    'accessToken': string;
}
/**
 * 
 * @export
 * @interface RegisterRequestDto
 */
export interface RegisterRequestDto {
    /**
     * The email of the user
     * @type {string}
     * @memberof RegisterRequestDto
     */
    'email': string;
    /**
     * The password of the user
     * @type {string}
     * @memberof RegisterRequestDto
     */
    'password': string;
    /**
     * The given name of the user
     * @type {string}
     * @memberof RegisterRequestDto
     */
    'givenName': string;
    /**
     * The family name of the user
     * @type {string}
     * @memberof RegisterRequestDto
     */
    'familyName': string;
    /**
     * Gender query parameter
     * @type {string}
     * @memberof RegisterRequestDto
     */
    'gender'?: RegisterRequestDtoGenderEnum;
    /**
     * Acceptance of Terms and Privacy Policy
     * @type {boolean}
     * @memberof RegisterRequestDto
     */
    'acceptTerms': boolean;
}

export const RegisterRequestDtoGenderEnum = {
    Male: 'male',
    Female: 'female'
} as const;

export type RegisterRequestDtoGenderEnum = typeof RegisterRequestDtoGenderEnum[keyof typeof RegisterRequestDtoGenderEnum];

/**
 * 
 * @export
 * @interface UnauthorizedResponseDto
 */
export interface UnauthorizedResponseDto {
    /**
     * HTTP status code of the error
     * @type {number}
     * @memberof UnauthorizedResponseDto
     */
    'statusCode': number;
    /**
     * Short description of the error
     * @type {string}
     * @memberof UnauthorizedResponseDto
     */
    'message': string;
    /**
     * Error type
     * @type {string}
     * @memberof UnauthorizedResponseDto
     */
    'error': string;
}

/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Confirm user account
         * @param {ConfirmRequestDto} confirmRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        confirm: async (confirmRequestDto: ConfirmRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'confirmRequestDto' is not null or undefined
            assertParamExists('confirm', 'confirmRequestDto', confirmRequestDto)
            const localVarPath = `/auth/users/confirm`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(confirmRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Confirm and reset forgotten password
         * @param {ConfirmForgotPasswordRequestDto} confirmForgotPasswordRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        confirmForgotPassword: async (confirmForgotPasswordRequestDto: ConfirmForgotPasswordRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'confirmForgotPasswordRequestDto' is not null or undefined
            assertParamExists('confirmForgotPassword', 'confirmForgotPasswordRequestDto', confirmForgotPasswordRequestDto)
            const localVarPath = `/auth/users/confirm-forgot-password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(confirmForgotPasswordRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Initiate forgot password
         * @param {ForgotPasswordRequestDto} forgotPasswordRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        forgotPassword: async (forgotPasswordRequestDto: ForgotPasswordRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'forgotPasswordRequestDto' is not null or undefined
            assertParamExists('forgotPassword', 'forgotPasswordRequestDto', forgotPasswordRequestDto)
            const localVarPath = `/auth/users/forgot-password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(forgotPasswordRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Log in a user
         * @param {LoginRequestDto} loginRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login: async (loginRequestDto: LoginRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'loginRequestDto' is not null or undefined
            assertParamExists('login', 'loginRequestDto', loginRequestDto)
            const localVarPath = `/auth/users/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(loginRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Refresh user tokens
         * @param {RefreshTokenRequestDto} refreshTokenRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refreshToken: async (refreshTokenRequestDto: RefreshTokenRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'refreshTokenRequestDto' is not null or undefined
            assertParamExists('refreshToken', 'refreshTokenRequestDto', refreshTokenRequestDto)
            const localVarPath = `/auth/users/refresh-token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(refreshTokenRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Register a user
         * @param {RegisterRequestDto} registerRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        register: async (registerRequestDto: RegisterRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'registerRequestDto' is not null or undefined
            assertParamExists('register', 'registerRequestDto', registerRequestDto)
            const localVarPath = `/auth/users/register`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(registerRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Confirm user account
         * @param {ConfirmRequestDto} confirmRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async confirm(confirmRequestDto: ConfirmRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.confirm(confirmRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Confirm and reset forgotten password
         * @param {ConfirmForgotPasswordRequestDto} confirmForgotPasswordRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async confirmForgotPassword(confirmForgotPasswordRequestDto: ConfirmForgotPasswordRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.confirmForgotPassword(confirmForgotPasswordRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Initiate forgot password
         * @param {ForgotPasswordRequestDto} forgotPasswordRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async forgotPassword(forgotPasswordRequestDto: ForgotPasswordRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.forgotPassword(forgotPasswordRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Log in a user
         * @param {LoginRequestDto} loginRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async login(loginRequestDto: LoginRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.login(loginRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Refresh user tokens
         * @param {RefreshTokenRequestDto} refreshTokenRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async refreshToken(refreshTokenRequestDto: RefreshTokenRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RefreshTokenResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.refreshToken(refreshTokenRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Register a user
         * @param {RegisterRequestDto} registerRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async register(registerRequestDto: RegisterRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.register(registerRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * 
         * @summary Confirm user account
         * @param {ConfirmRequestDto} confirmRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        confirm(confirmRequestDto: ConfirmRequestDto, options?: any): AxiosPromise<void> {
            return localVarFp.confirm(confirmRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Confirm and reset forgotten password
         * @param {ConfirmForgotPasswordRequestDto} confirmForgotPasswordRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        confirmForgotPassword(confirmForgotPasswordRequestDto: ConfirmForgotPasswordRequestDto, options?: any): AxiosPromise<LoginResponseDto> {
            return localVarFp.confirmForgotPassword(confirmForgotPasswordRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Initiate forgot password
         * @param {ForgotPasswordRequestDto} forgotPasswordRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        forgotPassword(forgotPasswordRequestDto: ForgotPasswordRequestDto, options?: any): AxiosPromise<void> {
            return localVarFp.forgotPassword(forgotPasswordRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Log in a user
         * @param {LoginRequestDto} loginRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login(loginRequestDto: LoginRequestDto, options?: any): AxiosPromise<LoginResponseDto> {
            return localVarFp.login(loginRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Refresh user tokens
         * @param {RefreshTokenRequestDto} refreshTokenRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refreshToken(refreshTokenRequestDto: RefreshTokenRequestDto, options?: any): AxiosPromise<RefreshTokenResponseDto> {
            return localVarFp.refreshToken(refreshTokenRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Register a user
         * @param {RegisterRequestDto} registerRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        register(registerRequestDto: RegisterRequestDto, options?: any): AxiosPromise<LoginResponseDto> {
            return localVarFp.register(registerRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @summary Confirm user account
     * @param {ConfirmRequestDto} confirmRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public confirm(confirmRequestDto: ConfirmRequestDto, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).confirm(confirmRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Confirm and reset forgotten password
     * @param {ConfirmForgotPasswordRequestDto} confirmForgotPasswordRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public confirmForgotPassword(confirmForgotPasswordRequestDto: ConfirmForgotPasswordRequestDto, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).confirmForgotPassword(confirmForgotPasswordRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Initiate forgot password
     * @param {ForgotPasswordRequestDto} forgotPasswordRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public forgotPassword(forgotPasswordRequestDto: ForgotPasswordRequestDto, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).forgotPassword(forgotPasswordRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Log in a user
     * @param {LoginRequestDto} loginRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public login(loginRequestDto: LoginRequestDto, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).login(loginRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Refresh user tokens
     * @param {RefreshTokenRequestDto} refreshTokenRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public refreshToken(refreshTokenRequestDto: RefreshTokenRequestDto, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).refreshToken(refreshTokenRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Register a user
     * @param {RegisterRequestDto} registerRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public register(registerRequestDto: RegisterRequestDto, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).register(registerRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}



