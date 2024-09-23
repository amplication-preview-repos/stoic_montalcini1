import * as graphql from "@nestjs/graphql";
import { ProUserResolverBase } from "./base/proUser.resolver.base";
import { ProUser } from "./base/ProUser";
import { ProUserService } from "./proUser.service";

@graphql.Resolver(() => ProUser)
export class ProUserResolver extends ProUserResolverBase {
  constructor(protected readonly service: ProUserService) {
    super(service);
  }
}
