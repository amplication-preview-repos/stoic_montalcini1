import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProUserServiceBase } from "./base/proUser.service.base";

@Injectable()
export class ProUserService extends ProUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
