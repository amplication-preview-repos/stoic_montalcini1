/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ProUser as PrismaProUser } from "@prisma/client";

export class ProUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ProUserCountArgs, "select">): Promise<number> {
    return this.prisma.proUser.count(args);
  }

  async proUsers(args: Prisma.ProUserFindManyArgs): Promise<PrismaProUser[]> {
    return this.prisma.proUser.findMany(args);
  }
  async proUser(
    args: Prisma.ProUserFindUniqueArgs
  ): Promise<PrismaProUser | null> {
    return this.prisma.proUser.findUnique(args);
  }
  async createProUser(args: Prisma.ProUserCreateArgs): Promise<PrismaProUser> {
    return this.prisma.proUser.create(args);
  }
  async updateProUser(args: Prisma.ProUserUpdateArgs): Promise<PrismaProUser> {
    return this.prisma.proUser.update(args);
  }
  async deleteProUser(args: Prisma.ProUserDeleteArgs): Promise<PrismaProUser> {
    return this.prisma.proUser.delete(args);
  }
}
