import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProUserService } from "./proUser.service";
import { ProUserControllerBase } from "./base/proUser.controller.base";

@swagger.ApiTags("proUsers")
@common.Controller("proUsers")
export class ProUserController extends ProUserControllerBase {
  constructor(protected readonly service: ProUserService) {
    super(service);
  }
}
