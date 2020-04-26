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
import { V1DeploymentCondition } from './v1DeploymentCondition';

/**
* DeploymentStatus is the most recently observed status of the Deployment.
*/
export class V1DeploymentStatus {
    /**
    * Total number of available pods (ready for at least minReadySeconds) targeted by this deployment.
    */
    'availableReplicas'?: number;
    /**
    * Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
    */
    'collisionCount'?: number;
    /**
    * Represents the latest available observations of a deployment\'s current state.
    */
    'conditions'?: Array<V1DeploymentCondition>;
    /**
    * The generation observed by the deployment controller.
    */
    'observedGeneration'?: number;
    /**
    * Total number of ready pods targeted by this deployment.
    */
    'readyReplicas'?: number;
    /**
    * Total number of non-terminated pods targeted by this deployment (their labels match the selector).
    */
    'replicas'?: number;
    /**
    * Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
    */
    'unavailableReplicas'?: number;
    /**
    * Total number of non-terminated pods targeted by this deployment that have the desired template spec.
    */
    'updatedReplicas'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "availableReplicas",
            "baseName": "availableReplicas",
            "type": "number"
        },
        {
            "name": "collisionCount",
            "baseName": "collisionCount",
            "type": "number"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1DeploymentCondition>"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        },
        {
            "name": "readyReplicas",
            "baseName": "readyReplicas",
            "type": "number"
        },
        {
            "name": "replicas",
            "baseName": "replicas",
            "type": "number"
        },
        {
            "name": "unavailableReplicas",
            "baseName": "unavailableReplicas",
            "type": "number"
        },
        {
            "name": "updatedReplicas",
            "baseName": "updatedReplicas",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return V1DeploymentStatus.attributeTypeMap;
    }
}
