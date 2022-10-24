// smithy-typescript generated code
import { EndpointParameters as __EndpointParameters, Provider } from "@aws-sdk/types";

export interface ClientInputEndpointParameters {
  region?: string | Provider<string>;
  useFipsEndpoint?: boolean | Provider<boolean>;
  useDualstackEndpoint?: boolean | Provider<boolean>;
  endpoint?: string | Provider<string>;
  useArnRegion?: boolean | Provider<boolean>;
}

export type ClientResolvedEndpointParameters = ClientInputEndpointParameters & {
  defaultSigningName: string;
};

export const resolveClientEndpointParameters = <T>(
  options: T & ClientInputEndpointParameters
): T & ClientResolvedEndpointParameters => {
  return {
    ...options,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    defaultSigningName: "s3",
  };
};

export interface EndpointParameters extends __EndpointParameters {
  Region?: string;
  UseFIPS?: boolean;
  UseDualStack?: boolean;
  Endpoint?: string;
  AccountId?: string;
  RequiresAccountId?: boolean;
  OutpostId?: string;
  Bucket?: string;
  AccessPointName?: string;
  UseArnRegion?: boolean;
}