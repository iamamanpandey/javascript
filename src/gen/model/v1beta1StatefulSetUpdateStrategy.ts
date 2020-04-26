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
import { V1beta1RollingUpdateStatefulSetStrategy } from './v1beta1RollingUpdateStatefulSetStrategy';

/**
* StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
*/
export class V1beta1StatefulSetUpdateStrategy {
    'rollingUpdate'?: V1beta1RollingUpdateStatefulSetStrategy;
    /**
    * Type indicates the type of the StatefulSetUpdateStrategy.
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rollingUpdate",
            "baseName": "rollingUpdate",
            "type": "V1beta1RollingUpdateStatefulSetStrategy"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1StatefulSetUpdateStrategy.attributeTypeMap;
    }
}
