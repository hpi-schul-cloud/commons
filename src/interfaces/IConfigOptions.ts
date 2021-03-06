import Ajv from 'ajv';
import { IExportOptions } from './IExportOptions';
import { NonEmptyArray } from './NonEmptyArray';

export interface IConfigOptions extends IExportOptions {
	/**
	 * set a custom logger
	 *
	 * @type {*}
	 * @memberof IConfigOptions
	 */
	logger?: any;
	/**
	 * throw an error when an undefined value is requested
	 *
	 * @type {boolean}
	 * @memberof IConfigOptions
	 */
	throwOnError?: boolean;
	/**
	 * If throwOnUndefined is not true, the default return value which is null may be overriden using this property.
	 *
	 * @type {*}
	 * @memberof IConfigOptions
	 */
	notFoundValue?: any;
	configDir?: string;
	/**
	 * enables debugging output for dotenv
	 */
	debug?: boolean;
	ajvOptions?: Ajv.Options;
	envDir?: string;
	baseDir?: string;
	schemaFileName?: string;
	useDotNotation?: boolean;
	fileEncoding?: BufferEncoding;
	app?: any;
	/** restrict runtime changes to specified NODE_ENV */
	allowRuntimeChangesInEnv?: string[];
	/** defines NODE_ENV default value */
	defaultNodeEnv?: string;
	/** ENV values parsed after NODE_ENV for filename lookup in given order */
	loadFilesFromEnv?: string[];
	/** print configuration hierarchy right after initialization */
	printHierarchy?: boolean;
	/** handle properties matching these expressions as secrets to be hashed before printing */
	secretMatches?: NonEmptyArray<string>;
}
