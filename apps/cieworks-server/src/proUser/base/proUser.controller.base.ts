/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProUserService } from "../proUser.service";
import { ProUserCreateInput } from "./ProUserCreateInput";
import { ProUser } from "./ProUser";
import { ProUserFindManyArgs } from "./ProUserFindManyArgs";
import { ProUserWhereUniqueInput } from "./ProUserWhereUniqueInput";
import { ProUserUpdateInput } from "./ProUserUpdateInput";

export class ProUserControllerBase {
  constructor(protected readonly service: ProUserService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProUser })
  async createProUser(
    @common.Body() data: ProUserCreateInput
  ): Promise<ProUser> {
    return await this.service.createProUser({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ProUser] })
  @ApiNestedQuery(ProUserFindManyArgs)
  async proUsers(@common.Req() request: Request): Promise<ProUser[]> {
    const args = plainToClass(ProUserFindManyArgs, request.query);
    return this.service.proUsers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async proUser(
    @common.Param() params: ProUserWhereUniqueInput
  ): Promise<ProUser | null> {
    const result = await this.service.proUser({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ProUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProUser(
    @common.Param() params: ProUserWhereUniqueInput,
    @common.Body() data: ProUserUpdateInput
  ): Promise<ProUser | null> {
    try {
      return await this.service.updateProUser({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ProUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProUser(
    @common.Param() params: ProUserWhereUniqueInput
  ): Promise<ProUser | null> {
    try {
      return await this.service.deleteProUser({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
