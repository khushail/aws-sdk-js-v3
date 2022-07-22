// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  GetTransitGatewayRouteTableAttachmentRequest,
  GetTransitGatewayRouteTableAttachmentResponse,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1GetTransitGatewayRouteTableAttachmentCommand,
  serializeAws_restJson1GetTransitGatewayRouteTableAttachmentCommand,
} from "../protocols/Aws_restJson1";

export interface GetTransitGatewayRouteTableAttachmentCommandInput
  extends GetTransitGatewayRouteTableAttachmentRequest {}
export interface GetTransitGatewayRouteTableAttachmentCommandOutput
  extends GetTransitGatewayRouteTableAttachmentResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about a transit gateway route table attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetTransitGatewayRouteTableAttachmentCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetTransitGatewayRouteTableAttachmentCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new GetTransitGatewayRouteTableAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTransitGatewayRouteTableAttachmentCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayRouteTableAttachmentCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 */
export class GetTransitGatewayRouteTableAttachmentCommand extends $Command<
  GetTransitGatewayRouteTableAttachmentCommandInput,
  GetTransitGatewayRouteTableAttachmentCommandOutput,
  NetworkManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTransitGatewayRouteTableAttachmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTransitGatewayRouteTableAttachmentCommandInput, GetTransitGatewayRouteTableAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "GetTransitGatewayRouteTableAttachmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTransitGatewayRouteTableAttachmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTransitGatewayRouteTableAttachmentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetTransitGatewayRouteTableAttachmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetTransitGatewayRouteTableAttachmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTransitGatewayRouteTableAttachmentCommandOutput> {
    return deserializeAws_restJson1GetTransitGatewayRouteTableAttachmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}