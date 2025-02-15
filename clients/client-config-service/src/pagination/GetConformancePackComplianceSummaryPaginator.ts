// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetConformancePackComplianceSummaryCommand,
  GetConformancePackComplianceSummaryCommandInput,
  GetConformancePackComplianceSummaryCommandOutput,
} from "../commands/GetConformancePackComplianceSummaryCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: GetConformancePackComplianceSummaryCommandInput,
  ...args: any
): Promise<GetConformancePackComplianceSummaryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetConformancePackComplianceSummaryCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetConformancePackComplianceSummary(
  config: ConfigServicePaginationConfiguration,
  input: GetConformancePackComplianceSummaryCommandInput,
  ...additionalArguments: any
): Paginator<GetConformancePackComplianceSummaryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetConformancePackComplianceSummaryCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
