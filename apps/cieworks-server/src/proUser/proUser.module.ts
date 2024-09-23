import { Module } from "@nestjs/common";
import { ProUserModuleBase } from "./base/proUser.module.base";
import { ProUserService } from "./proUser.service";
import { ProUserController } from "./proUser.controller";
import { ProUserResolver } from "./proUser.resolver";

@Module({
  imports: [ProUserModuleBase],
  controllers: [ProUserController],
  providers: [ProUserService, ProUserResolver],
  exports: [ProUserService],
})
export class ProUserModule {}
