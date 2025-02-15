// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetSamplingRulesCommand,
  GetSamplingRulesCommandInput,
  GetSamplingRulesCommandOutput,
} from "../commands/GetSamplingRulesCommand";
import { XRayClient } from "../XRayClient";
import { XRayPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: XRayClient,
  input: GetSamplingRulesCommandInput,
  ...args: any
): Promise<GetSamplingRulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetSamplingRulesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetSamplingRules(
  config: XRayPaginationConfiguration,
  input: GetSamplingRulesCommandInput,
  ...additionalArguments: any
): Paginator<GetSamplingRulesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetSamplingRulesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof XRayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected XRay | XRayClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
