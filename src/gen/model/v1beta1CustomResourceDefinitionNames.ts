/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.15.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
* CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
*/
export class V1beta1CustomResourceDefinitionNames {
    /**
    * Categories is a list of grouped resources custom resources belong to (e.g. \'all\')
    */
    'categories'?: Array<string>;
    /**
    * Kind is the serialized kind of the resource.  It is normally CamelCase and singular.
    */
    'kind': string;
    /**
    * ListKind is the serialized kind of the list for this resource.  Defaults to <kind>List.
    */
    'listKind'?: string;
    /**
    * Plural is the plural name of the resource to serve.  It must match the name of the CustomResourceDefinition-registration too: plural.group and it must be all lowercase.
    */
    'plural': string;
    /**
    * ShortNames are short names for the resource.  It must be all lowercase.
    */
    'shortNames'?: Array<string>;
    /**
    * Singular is the singular name of the resource.  It must be all lowercase  Defaults to lowercased <kind>
    */
    'singular'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<string>"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "listKind",
            "baseName": "listKind",
            "type": "string"
        },
        {
            "name": "plural",
            "baseName": "plural",
            "type": "string"
        },
        {
            "name": "shortNames",
            "baseName": "shortNames",
            "type": "Array<string>"
        },
        {
            "name": "singular",
            "baseName": "singular",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1CustomResourceDefinitionNames.attributeTypeMap;
    }
}
