// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListImportJobsCommand,
  ListImportJobsCommandInput,
  ListImportJobsCommandOutput,
} from "../commands/ListImportJobsCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SESv2Client,
  input: ListImportJobsCommandInput,
  ...args: any
): Promise<ListImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListImportJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListImportJobs(
  config: SESv2PaginationConfiguration,
  input: ListImportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListImportJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListImportJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof SESv2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SESv2 | SESv2Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
