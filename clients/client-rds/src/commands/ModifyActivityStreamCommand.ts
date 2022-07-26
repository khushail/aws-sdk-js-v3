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
  ModifyActivityStreamRequest,
  ModifyActivityStreamRequestFilterSensitiveLog,
  ModifyActivityStreamResponse,
  ModifyActivityStreamResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryModifyActivityStreamCommand,
  serializeAws_queryModifyActivityStreamCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface ModifyActivityStreamCommandInput extends ModifyActivityStreamRequest {}
export interface ModifyActivityStreamCommandOutput extends ModifyActivityStreamResponse, __MetadataBearer {}

/**
 * <p>Changes the audit policy state of a database activity stream to either locked (default) or unlocked. A locked policy is read-only,
 *             whereas an unlocked policy is read/write. If your activity stream is started and locked, you can unlock it, customize your audit policy,
 *             and then lock your activity stream. Restarting the activity stream isn't required. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.Modifying.html"> Modifying a database activity stream</a> in the
 *                 <i>Amazon RDS User Guide</i>. </p>
 *         <p>This operation is supported for RDS for Oracle only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyActivityStreamCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyActivityStreamCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyActivityStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyActivityStreamCommandInput} for command's `input` shape.
 * @see {@link ModifyActivityStreamCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class ModifyActivityStreamCommand extends $Command<
  ModifyActivityStreamCommandInput,
  ModifyActivityStreamCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyActivityStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyActivityStreamCommandInput, ModifyActivityStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyActivityStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyActivityStreamRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyActivityStreamResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyActivityStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyActivityStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyActivityStreamCommandOutput> {
    return deserializeAws_queryModifyActivityStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}