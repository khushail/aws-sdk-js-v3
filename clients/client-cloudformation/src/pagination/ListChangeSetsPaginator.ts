// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListChangeSetsCommand,
  ListChangeSetsCommandInput,
  ListChangeSetsCommandOutput,
} from "../commands/ListChangeSetsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: ListChangeSetsCommandInput,
  ...args: any
): Promise<ListChangeSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChangeSetsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListChangeSets(
  config: CloudFormationPaginationConfiguration,
  input: ListChangeSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListChangeSetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChangeSetsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof CloudFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFormation | CloudFormationClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
