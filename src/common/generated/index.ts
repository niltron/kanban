import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
  id = 'id',
  email = 'email',
  name = 'name',
  admin = 'admin',
}

export enum TaskScalarFieldEnum {
  id = 'id',
  title = 'title',
  description = 'description',
  ponctuation = 'ponctuation',
  status = 'status',
  columnId = 'columnId',
  assignedId = 'assignedId',
}

export enum TaskStatus {
  ACTIVE = 'ACTIVE',
  ARCHIVED = 'ARCHIVED',
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export enum ColumnStatus {
  ACTIVE = 'ACTIVE',
  ARCHIVED = 'ARCHIVED',
}

export enum BoardStatus {
  WORKING = 'WORKING',
  COMPLETED = 'COMPLETED',
}

export enum ColumnScalarFieldEnum {
  id = 'id',
  name = 'name',
  status = 'status',
  boardId = 'boardId',
}

export enum BoardScalarFieldEnum {
  id = 'id',
  name = 'name',
  status = 'status',
}

registerEnumType(BoardScalarFieldEnum, { name: 'BoardScalarFieldEnum' });
registerEnumType(ColumnScalarFieldEnum, { name: 'ColumnScalarFieldEnum' });
registerEnumType(BoardStatus, { name: 'BoardStatus' });
registerEnumType(ColumnStatus, { name: 'ColumnStatus' });
registerEnumType(SortOrder, { name: 'SortOrder' });
registerEnumType(TaskStatus, { name: 'TaskStatus' });
registerEnumType(TaskScalarFieldEnum, { name: 'TaskScalarFieldEnum' });
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum' });

@ObjectType()
export class AggregateBoard {
  @Field(() => BoardCountAggregate, { nullable: true })
  _count?: InstanceType<typeof BoardCountAggregate>;
  @Field(() => BoardCountAggregate, { nullable: true })
  count?: InstanceType<typeof BoardCountAggregate>;
  @Field(() => BoardMinAggregate, { nullable: true })
  _min?: InstanceType<typeof BoardMinAggregate>;
  @Field(() => BoardMinAggregate, { nullable: true })
  min?: InstanceType<typeof BoardMinAggregate>;
  @Field(() => BoardMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof BoardMaxAggregate>;
  @Field(() => BoardMaxAggregate, { nullable: true })
  max?: InstanceType<typeof BoardMaxAggregate>;
}

@ArgsType()
export class BoardAggregateArgs {
  @Field(() => BoardWhereInput, { nullable: true })
  where?: InstanceType<typeof BoardWhereInput>;
  @Field(() => [BoardOrderByInput], { nullable: true })
  orderBy?: Array<BoardOrderByInput>;
  @Field(() => BoardWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof BoardWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => BoardCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof BoardCountAggregateInput>;
  @Field(() => BoardMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof BoardMinAggregateInput>;
  @Field(() => BoardMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof BoardMaxAggregateInput>;
}

@InputType()
export class BoardCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  status?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class BoardCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  name!: number;
  @Field(() => Int, { nullable: false })
  status!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class BoardCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => BoardStatus, { nullable: true })
  status?: keyof typeof BoardStatus;
}

@InputType()
export class BoardCreateNestedManyWithoutMembersInput {
  @Field(() => [BoardCreateWithoutMembersInput], { nullable: true })
  create?: Array<BoardCreateWithoutMembersInput>;
  @Field(() => [BoardCreateOrConnectWithoutMembersInput], { nullable: true })
  connectOrCreate?: Array<BoardCreateOrConnectWithoutMembersInput>;
  @Field(() => [BoardWhereUniqueInput], { nullable: true })
  connect?: Array<BoardWhereUniqueInput>;
}

@InputType()
export class BoardCreateNestedOneWithoutColumnsInput {
  @Field(() => BoardCreateWithoutColumnsInput, { nullable: true })
  create?: InstanceType<typeof BoardCreateWithoutColumnsInput>;
  @Field(() => BoardCreateOrConnectWithoutColumnsInput, { nullable: true })
  connectOrCreate?: InstanceType<
    typeof BoardCreateOrConnectWithoutColumnsInput
  >;
  @Field(() => BoardWhereUniqueInput, { nullable: true })
  connect?: InstanceType<typeof BoardWhereUniqueInput>;
}

@InputType()
export class BoardCreateOrConnectWithoutColumnsInput {
  @Field(() => BoardWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof BoardWhereUniqueInput>;
  @Field(() => BoardCreateWithoutColumnsInput, { nullable: false })
  create!: InstanceType<typeof BoardCreateWithoutColumnsInput>;
}

@InputType()
export class BoardCreateOrConnectWithoutMembersInput {
  @Field(() => BoardWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof BoardWhereUniqueInput>;
  @Field(() => BoardCreateWithoutMembersInput, { nullable: false })
  create!: InstanceType<typeof BoardCreateWithoutMembersInput>;
}

@InputType()
export class BoardCreateWithoutColumnsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => BoardStatus, { nullable: true })
  status?: keyof typeof BoardStatus;
  @Field(() => UserCreateNestedManyWithoutBoardsInput, { nullable: true })
  members?: InstanceType<typeof UserCreateNestedManyWithoutBoardsInput>;
}

@InputType()
export class BoardCreateWithoutMembersInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => BoardStatus, { nullable: true })
  status?: keyof typeof BoardStatus;
  @Field(() => ColumnCreateNestedManyWithoutBoardInput, { nullable: true })
  columns?: InstanceType<typeof ColumnCreateNestedManyWithoutBoardInput>;
}

@InputType()
export class BoardCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => BoardStatus, { nullable: true })
  status?: keyof typeof BoardStatus;
  @Field(() => UserCreateNestedManyWithoutBoardsInput, { nullable: true })
  members?: InstanceType<typeof UserCreateNestedManyWithoutBoardsInput>;
  @Field(() => ColumnCreateNestedManyWithoutBoardInput, { nullable: true })
  columns?: InstanceType<typeof ColumnCreateNestedManyWithoutBoardInput>;
}

@ArgsType()
export class BoardGroupByArgs {
  @Field(() => BoardWhereInput, { nullable: true })
  where?: InstanceType<typeof BoardWhereInput>;
  @Field(() => [BoardOrderByInput], { nullable: true })
  orderBy?: Array<BoardOrderByInput>;
  @Field(() => [BoardScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof BoardScalarFieldEnum>;
  @Field(() => BoardScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof BoardScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => BoardCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof BoardCountAggregateInput>;
  @Field(() => BoardMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof BoardMinAggregateInput>;
  @Field(() => BoardMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof BoardMaxAggregateInput>;
}

@ObjectType()
export class BoardGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => BoardStatus, { nullable: false })
  status!: keyof typeof BoardStatus;
  @Field(() => BoardCountAggregate, { nullable: true })
  _count?: InstanceType<typeof BoardCountAggregate>;
  @Field(() => BoardMinAggregate, { nullable: true })
  _min?: InstanceType<typeof BoardMinAggregate>;
  @Field(() => BoardMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof BoardMaxAggregate>;
}

@InputType()
export class BoardListRelationFilter {
  @Field(() => BoardWhereInput, { nullable: true })
  every?: InstanceType<typeof BoardWhereInput>;
  @Field(() => BoardWhereInput, { nullable: true })
  some?: InstanceType<typeof BoardWhereInput>;
  @Field(() => BoardWhereInput, { nullable: true })
  none?: InstanceType<typeof BoardWhereInput>;
}

@InputType()
export class BoardMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  status?: true;
}

@ObjectType()
export class BoardMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => BoardStatus, { nullable: true })
  status?: keyof typeof BoardStatus;
}

@InputType()
export class BoardMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  status?: true;
}

@ObjectType()
export class BoardMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => BoardStatus, { nullable: true })
  status?: keyof typeof BoardStatus;
}

@InputType()
export class BoardOrderByInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;
}

@InputType()
export class BoardRelationFilter {
  @Field(() => BoardWhereInput, { nullable: true })
  is?: InstanceType<typeof BoardWhereInput>;
  @Field(() => BoardWhereInput, { nullable: true })
  isNot?: InstanceType<typeof BoardWhereInput>;
}

@InputType()
export class BoardScalarWhereWithAggregatesInput {
  @Field(() => [BoardScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<BoardScalarWhereWithAggregatesInput>;
  @Field(() => [BoardScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<BoardScalarWhereWithAggregatesInput>;
  @Field(() => [BoardScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<BoardScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => EnumBoardStatusWithAggregatesFilter, { nullable: true })
  status?: InstanceType<typeof EnumBoardStatusWithAggregatesFilter>;
}

@InputType()
export class BoardScalarWhereInput {
  @Field(() => [BoardScalarWhereInput], { nullable: true })
  AND?: Array<BoardScalarWhereInput>;
  @Field(() => [BoardScalarWhereInput], { nullable: true })
  OR?: Array<BoardScalarWhereInput>;
  @Field(() => [BoardScalarWhereInput], { nullable: true })
  NOT?: Array<BoardScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => EnumBoardStatusFilter, { nullable: true })
  status?: InstanceType<typeof EnumBoardStatusFilter>;
}

@InputType()
export class BoardUncheckedCreateWithoutColumnsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => BoardStatus, { nullable: true })
  status?: keyof typeof BoardStatus;
}

@InputType()
export class BoardUncheckedCreateWithoutMembersInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => BoardStatus, { nullable: true })
  status?: keyof typeof BoardStatus;
  @Field(() => ColumnUncheckedCreateNestedManyWithoutBoardInput, {
    nullable: true,
  })
  columns?: InstanceType<
    typeof ColumnUncheckedCreateNestedManyWithoutBoardInput
  >;
}

@InputType()
export class BoardUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => BoardStatus, { nullable: true })
  status?: keyof typeof BoardStatus;
  @Field(() => ColumnUncheckedCreateNestedManyWithoutBoardInput, {
    nullable: true,
  })
  columns?: InstanceType<
    typeof ColumnUncheckedCreateNestedManyWithoutBoardInput
  >;
}

@InputType()
export class BoardUncheckedUpdateManyWithoutBoardsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumBoardStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumBoardStatusFieldUpdateOperationsInput>;
}

@InputType()
export class BoardUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumBoardStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumBoardStatusFieldUpdateOperationsInput>;
}

@InputType()
export class BoardUncheckedUpdateWithoutColumnsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumBoardStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumBoardStatusFieldUpdateOperationsInput>;
}

@InputType()
export class BoardUncheckedUpdateWithoutMembersInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumBoardStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumBoardStatusFieldUpdateOperationsInput>;
  @Field(() => ColumnUncheckedUpdateManyWithoutBoardInput, { nullable: true })
  columns?: InstanceType<typeof ColumnUncheckedUpdateManyWithoutBoardInput>;
}

@InputType()
export class BoardUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumBoardStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumBoardStatusFieldUpdateOperationsInput>;
  @Field(() => ColumnUncheckedUpdateManyWithoutBoardInput, { nullable: true })
  columns?: InstanceType<typeof ColumnUncheckedUpdateManyWithoutBoardInput>;
}

@InputType()
export class BoardUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumBoardStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumBoardStatusFieldUpdateOperationsInput>;
}

@InputType()
export class BoardUpdateManyWithWhereWithoutMembersInput {
  @Field(() => BoardScalarWhereInput, { nullable: false })
  where!: InstanceType<typeof BoardScalarWhereInput>;
  @Field(() => BoardUpdateManyMutationInput, { nullable: false })
  data!: InstanceType<typeof BoardUpdateManyMutationInput>;
}

@InputType()
export class BoardUpdateManyWithoutMembersInput {
  @Field(() => [BoardCreateWithoutMembersInput], { nullable: true })
  create?: Array<BoardCreateWithoutMembersInput>;
  @Field(() => [BoardCreateOrConnectWithoutMembersInput], { nullable: true })
  connectOrCreate?: Array<BoardCreateOrConnectWithoutMembersInput>;
  @Field(() => [BoardUpsertWithWhereUniqueWithoutMembersInput], {
    nullable: true,
  })
  upsert?: Array<BoardUpsertWithWhereUniqueWithoutMembersInput>;
  @Field(() => [BoardWhereUniqueInput], { nullable: true })
  connect?: Array<BoardWhereUniqueInput>;
  @Field(() => [BoardWhereUniqueInput], { nullable: true })
  set?: Array<BoardWhereUniqueInput>;
  @Field(() => [BoardWhereUniqueInput], { nullable: true })
  disconnect?: Array<BoardWhereUniqueInput>;
  @Field(() => [BoardWhereUniqueInput], { nullable: true })
  delete?: Array<BoardWhereUniqueInput>;
  @Field(() => [BoardUpdateWithWhereUniqueWithoutMembersInput], {
    nullable: true,
  })
  update?: Array<BoardUpdateWithWhereUniqueWithoutMembersInput>;
  @Field(() => [BoardUpdateManyWithWhereWithoutMembersInput], {
    nullable: true,
  })
  updateMany?: Array<BoardUpdateManyWithWhereWithoutMembersInput>;
  @Field(() => [BoardScalarWhereInput], { nullable: true })
  deleteMany?: Array<BoardScalarWhereInput>;
}

@InputType()
export class BoardUpdateOneRequiredWithoutColumnsInput {
  @Field(() => BoardCreateWithoutColumnsInput, { nullable: true })
  create?: InstanceType<typeof BoardCreateWithoutColumnsInput>;
  @Field(() => BoardCreateOrConnectWithoutColumnsInput, { nullable: true })
  connectOrCreate?: InstanceType<
    typeof BoardCreateOrConnectWithoutColumnsInput
  >;
  @Field(() => BoardUpsertWithoutColumnsInput, { nullable: true })
  upsert?: InstanceType<typeof BoardUpsertWithoutColumnsInput>;
  @Field(() => BoardWhereUniqueInput, { nullable: true })
  connect?: InstanceType<typeof BoardWhereUniqueInput>;
  @Field(() => BoardUpdateWithoutColumnsInput, { nullable: true })
  update?: InstanceType<typeof BoardUpdateWithoutColumnsInput>;
}

@InputType()
export class BoardUpdateWithWhereUniqueWithoutMembersInput {
  @Field(() => BoardWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof BoardWhereUniqueInput>;
  @Field(() => BoardUpdateWithoutMembersInput, { nullable: false })
  data!: InstanceType<typeof BoardUpdateWithoutMembersInput>;
}

@InputType()
export class BoardUpdateWithoutColumnsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumBoardStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumBoardStatusFieldUpdateOperationsInput>;
  @Field(() => UserUpdateManyWithoutBoardsInput, { nullable: true })
  members?: InstanceType<typeof UserUpdateManyWithoutBoardsInput>;
}

@InputType()
export class BoardUpdateWithoutMembersInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumBoardStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumBoardStatusFieldUpdateOperationsInput>;
  @Field(() => ColumnUpdateManyWithoutBoardInput, { nullable: true })
  columns?: InstanceType<typeof ColumnUpdateManyWithoutBoardInput>;
}

@InputType()
export class BoardUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumBoardStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumBoardStatusFieldUpdateOperationsInput>;
  @Field(() => UserUpdateManyWithoutBoardsInput, { nullable: true })
  members?: InstanceType<typeof UserUpdateManyWithoutBoardsInput>;
  @Field(() => ColumnUpdateManyWithoutBoardInput, { nullable: true })
  columns?: InstanceType<typeof ColumnUpdateManyWithoutBoardInput>;
}

@InputType()
export class BoardUpsertWithWhereUniqueWithoutMembersInput {
  @Field(() => BoardWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof BoardWhereUniqueInput>;
  @Field(() => BoardUpdateWithoutMembersInput, { nullable: false })
  update!: InstanceType<typeof BoardUpdateWithoutMembersInput>;
  @Field(() => BoardCreateWithoutMembersInput, { nullable: false })
  create!: InstanceType<typeof BoardCreateWithoutMembersInput>;
}

@InputType()
export class BoardUpsertWithoutColumnsInput {
  @Field(() => BoardUpdateWithoutColumnsInput, { nullable: false })
  update!: InstanceType<typeof BoardUpdateWithoutColumnsInput>;
  @Field(() => BoardCreateWithoutColumnsInput, { nullable: false })
  create!: InstanceType<typeof BoardCreateWithoutColumnsInput>;
}

@InputType()
export class BoardWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
}

@InputType()
export class BoardWhereInput {
  @Field(() => [BoardWhereInput], { nullable: true })
  AND?: Array<BoardWhereInput>;
  @Field(() => [BoardWhereInput], { nullable: true })
  OR?: Array<BoardWhereInput>;
  @Field(() => [BoardWhereInput], { nullable: true })
  NOT?: Array<BoardWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => EnumBoardStatusFilter, { nullable: true })
  status?: InstanceType<typeof EnumBoardStatusFilter>;
  @Field(() => UserListRelationFilter, { nullable: true })
  members?: InstanceType<typeof UserListRelationFilter>;
  @Field(() => ColumnListRelationFilter, { nullable: true })
  columns?: InstanceType<typeof ColumnListRelationFilter>;
}

@ObjectType()
export class Board {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => BoardStatus, { nullable: false, defaultValue: 'WORKING' })
  status!: keyof typeof BoardStatus;
  @Field(() => [User], { nullable: true })
  members?: Array<User>;
  @Field(() => [Column], { nullable: true })
  columns?: Array<Column>;
}

@ArgsType()
export class CreateManyBoardArgs {
  @Field(() => [BoardCreateManyInput], { nullable: false })
  data!: Array<BoardCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneBoardArgs {
  @Field(() => BoardCreateInput, { nullable: false })
  data!: InstanceType<typeof BoardCreateInput>;
}

@ArgsType()
export class DeleteManyBoardArgs {
  @Field(() => BoardWhereInput, { nullable: true })
  where?: InstanceType<typeof BoardWhereInput>;
}

@ArgsType()
export class DeleteOneBoardArgs {
  @Field(() => BoardWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof BoardWhereUniqueInput>;
}

@ArgsType()
export class FindFirstBoardArgs {
  @Field(() => BoardWhereInput, { nullable: true })
  where?: InstanceType<typeof BoardWhereInput>;
  @Field(() => [BoardOrderByInput], { nullable: true })
  orderBy?: Array<BoardOrderByInput>;
  @Field(() => BoardWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof BoardWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [BoardScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof BoardScalarFieldEnum>;
}

@ArgsType()
export class FindManyBoardArgs {
  @Field(() => BoardWhereInput, { nullable: true })
  where?: InstanceType<typeof BoardWhereInput>;
  @Field(() => [BoardOrderByInput], { nullable: true })
  orderBy?: Array<BoardOrderByInput>;
  @Field(() => BoardWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof BoardWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [BoardScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof BoardScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueBoardArgs {
  @Field(() => BoardWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof BoardWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyBoardArgs {
  @Field(() => BoardUpdateManyMutationInput, { nullable: false })
  data!: InstanceType<typeof BoardUpdateManyMutationInput>;
  @Field(() => BoardWhereInput, { nullable: true })
  where?: InstanceType<typeof BoardWhereInput>;
}

@ArgsType()
export class UpdateOneBoardArgs {
  @Field(() => BoardUpdateInput, { nullable: false })
  data!: InstanceType<typeof BoardUpdateInput>;
  @Field(() => BoardWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof BoardWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneBoardArgs {
  @Field(() => BoardWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof BoardWhereUniqueInput>;
  @Field(() => BoardCreateInput, { nullable: false })
  create!: InstanceType<typeof BoardCreateInput>;
  @Field(() => BoardUpdateInput, { nullable: false })
  update!: InstanceType<typeof BoardUpdateInput>;
}

@ObjectType()
export class AggregateColumn {
  @Field(() => ColumnCountAggregate, { nullable: true })
  _count?: InstanceType<typeof ColumnCountAggregate>;
  @Field(() => ColumnCountAggregate, { nullable: true })
  count?: InstanceType<typeof ColumnCountAggregate>;
  @Field(() => ColumnMinAggregate, { nullable: true })
  _min?: InstanceType<typeof ColumnMinAggregate>;
  @Field(() => ColumnMinAggregate, { nullable: true })
  min?: InstanceType<typeof ColumnMinAggregate>;
  @Field(() => ColumnMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof ColumnMaxAggregate>;
  @Field(() => ColumnMaxAggregate, { nullable: true })
  max?: InstanceType<typeof ColumnMaxAggregate>;
}

@ArgsType()
export class ColumnAggregateArgs {
  @Field(() => ColumnWhereInput, { nullable: true })
  where?: InstanceType<typeof ColumnWhereInput>;
  @Field(() => [ColumnOrderByInput], { nullable: true })
  orderBy?: Array<ColumnOrderByInput>;
  @Field(() => ColumnWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof ColumnWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => ColumnCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ColumnCountAggregateInput>;
  @Field(() => ColumnMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ColumnMinAggregateInput>;
  @Field(() => ColumnMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ColumnMaxAggregateInput>;
}

@InputType()
export class ColumnCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  status?: true;
  @Field(() => Boolean, { nullable: true })
  boardId?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class ColumnCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  name!: number;
  @Field(() => Int, { nullable: false })
  status!: number;
  @Field(() => Int, { nullable: false })
  boardId!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class ColumnCreateManyBoardInputEnvelope {
  @Field(() => [ColumnCreateManyBoardInput], { nullable: false })
  data!: Array<ColumnCreateManyBoardInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class ColumnCreateManyBoardInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => ColumnStatus, { nullable: true })
  status?: keyof typeof ColumnStatus;
}

@InputType()
export class ColumnCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => ColumnStatus, { nullable: true })
  status?: keyof typeof ColumnStatus;
  @Field(() => String, { nullable: false })
  boardId!: string;
}

@InputType()
export class ColumnCreateNestedManyWithoutBoardInput {
  @Field(() => [ColumnCreateWithoutBoardInput], { nullable: true })
  create?: Array<ColumnCreateWithoutBoardInput>;
  @Field(() => [ColumnCreateOrConnectWithoutBoardInput], { nullable: true })
  connectOrCreate?: Array<ColumnCreateOrConnectWithoutBoardInput>;
  @Field(() => ColumnCreateManyBoardInputEnvelope, { nullable: true })
  createMany?: InstanceType<typeof ColumnCreateManyBoardInputEnvelope>;
  @Field(() => [ColumnWhereUniqueInput], { nullable: true })
  connect?: Array<ColumnWhereUniqueInput>;
}

@InputType()
export class ColumnCreateNestedOneWithoutTasksInput {
  @Field(() => ColumnCreateWithoutTasksInput, { nullable: true })
  create?: InstanceType<typeof ColumnCreateWithoutTasksInput>;
  @Field(() => ColumnCreateOrConnectWithoutTasksInput, { nullable: true })
  connectOrCreate?: InstanceType<typeof ColumnCreateOrConnectWithoutTasksInput>;
  @Field(() => ColumnWhereUniqueInput, { nullable: true })
  connect?: InstanceType<typeof ColumnWhereUniqueInput>;
}

@InputType()
export class ColumnCreateOrConnectWithoutBoardInput {
  @Field(() => ColumnWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof ColumnWhereUniqueInput>;
  @Field(() => ColumnCreateWithoutBoardInput, { nullable: false })
  create!: InstanceType<typeof ColumnCreateWithoutBoardInput>;
}

@InputType()
export class ColumnCreateOrConnectWithoutTasksInput {
  @Field(() => ColumnWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof ColumnWhereUniqueInput>;
  @Field(() => ColumnCreateWithoutTasksInput, { nullable: false })
  create!: InstanceType<typeof ColumnCreateWithoutTasksInput>;
}

@InputType()
export class ColumnCreateWithoutBoardInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => ColumnStatus, { nullable: true })
  status?: keyof typeof ColumnStatus;
  @Field(() => TaskCreateNestedManyWithoutColumnInput, { nullable: true })
  tasks?: InstanceType<typeof TaskCreateNestedManyWithoutColumnInput>;
}

@InputType()
export class ColumnCreateWithoutTasksInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => ColumnStatus, { nullable: true })
  status?: keyof typeof ColumnStatus;
  @Field(() => BoardCreateNestedOneWithoutColumnsInput, { nullable: false })
  board!: InstanceType<typeof BoardCreateNestedOneWithoutColumnsInput>;
}

@InputType()
export class ColumnCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => ColumnStatus, { nullable: true })
  status?: keyof typeof ColumnStatus;
  @Field(() => TaskCreateNestedManyWithoutColumnInput, { nullable: true })
  tasks?: InstanceType<typeof TaskCreateNestedManyWithoutColumnInput>;
  @Field(() => BoardCreateNestedOneWithoutColumnsInput, { nullable: false })
  board!: InstanceType<typeof BoardCreateNestedOneWithoutColumnsInput>;
}

@ArgsType()
export class ColumnGroupByArgs {
  @Field(() => ColumnWhereInput, { nullable: true })
  where?: InstanceType<typeof ColumnWhereInput>;
  @Field(() => [ColumnOrderByInput], { nullable: true })
  orderBy?: Array<ColumnOrderByInput>;
  @Field(() => [ColumnScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ColumnScalarFieldEnum>;
  @Field(() => ColumnScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof ColumnScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => ColumnCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ColumnCountAggregateInput>;
  @Field(() => ColumnMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ColumnMinAggregateInput>;
  @Field(() => ColumnMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ColumnMaxAggregateInput>;
}

@ObjectType()
export class ColumnGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => ColumnStatus, { nullable: false })
  status!: keyof typeof ColumnStatus;
  @Field(() => String, { nullable: false })
  boardId!: string;
  @Field(() => ColumnCountAggregate, { nullable: true })
  _count?: InstanceType<typeof ColumnCountAggregate>;
  @Field(() => ColumnMinAggregate, { nullable: true })
  _min?: InstanceType<typeof ColumnMinAggregate>;
  @Field(() => ColumnMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof ColumnMaxAggregate>;
}

@InputType()
export class ColumnListRelationFilter {
  @Field(() => ColumnWhereInput, { nullable: true })
  every?: InstanceType<typeof ColumnWhereInput>;
  @Field(() => ColumnWhereInput, { nullable: true })
  some?: InstanceType<typeof ColumnWhereInput>;
  @Field(() => ColumnWhereInput, { nullable: true })
  none?: InstanceType<typeof ColumnWhereInput>;
}

@InputType()
export class ColumnMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  status?: true;
  @Field(() => Boolean, { nullable: true })
  boardId?: true;
}

@ObjectType()
export class ColumnMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => ColumnStatus, { nullable: true })
  status?: keyof typeof ColumnStatus;
  @Field(() => String, { nullable: true })
  boardId?: string;
}

@InputType()
export class ColumnMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  status?: true;
  @Field(() => Boolean, { nullable: true })
  boardId?: true;
}

@ObjectType()
export class ColumnMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => ColumnStatus, { nullable: true })
  status?: keyof typeof ColumnStatus;
  @Field(() => String, { nullable: true })
  boardId?: string;
}

@InputType()
export class ColumnOrderByInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  boardId?: keyof typeof SortOrder;
}

@InputType()
export class ColumnRelationFilter {
  @Field(() => ColumnWhereInput, { nullable: true })
  is?: InstanceType<typeof ColumnWhereInput>;
  @Field(() => ColumnWhereInput, { nullable: true })
  isNot?: InstanceType<typeof ColumnWhereInput>;
}

@InputType()
export class ColumnScalarWhereWithAggregatesInput {
  @Field(() => [ColumnScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ColumnScalarWhereWithAggregatesInput>;
  @Field(() => [ColumnScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ColumnScalarWhereWithAggregatesInput>;
  @Field(() => [ColumnScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ColumnScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => EnumColumnStatusWithAggregatesFilter, { nullable: true })
  status?: InstanceType<typeof EnumColumnStatusWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  boardId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class ColumnScalarWhereInput {
  @Field(() => [ColumnScalarWhereInput], { nullable: true })
  AND?: Array<ColumnScalarWhereInput>;
  @Field(() => [ColumnScalarWhereInput], { nullable: true })
  OR?: Array<ColumnScalarWhereInput>;
  @Field(() => [ColumnScalarWhereInput], { nullable: true })
  NOT?: Array<ColumnScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => EnumColumnStatusFilter, { nullable: true })
  status?: InstanceType<typeof EnumColumnStatusFilter>;
  @Field(() => StringFilter, { nullable: true })
  boardId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class ColumnUncheckedCreateNestedManyWithoutBoardInput {
  @Field(() => [ColumnCreateWithoutBoardInput], { nullable: true })
  create?: Array<ColumnCreateWithoutBoardInput>;
  @Field(() => [ColumnCreateOrConnectWithoutBoardInput], { nullable: true })
  connectOrCreate?: Array<ColumnCreateOrConnectWithoutBoardInput>;
  @Field(() => ColumnCreateManyBoardInputEnvelope, { nullable: true })
  createMany?: InstanceType<typeof ColumnCreateManyBoardInputEnvelope>;
  @Field(() => [ColumnWhereUniqueInput], { nullable: true })
  connect?: Array<ColumnWhereUniqueInput>;
}

@InputType()
export class ColumnUncheckedCreateWithoutBoardInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => ColumnStatus, { nullable: true })
  status?: keyof typeof ColumnStatus;
  @Field(() => TaskUncheckedCreateNestedManyWithoutColumnInput, {
    nullable: true,
  })
  tasks?: InstanceType<typeof TaskUncheckedCreateNestedManyWithoutColumnInput>;
}

@InputType()
export class ColumnUncheckedCreateWithoutTasksInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => ColumnStatus, { nullable: true })
  status?: keyof typeof ColumnStatus;
  @Field(() => String, { nullable: false })
  boardId!: string;
}

@InputType()
export class ColumnUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => ColumnStatus, { nullable: true })
  status?: keyof typeof ColumnStatus;
  @Field(() => String, { nullable: false })
  boardId!: string;
  @Field(() => TaskUncheckedCreateNestedManyWithoutColumnInput, {
    nullable: true,
  })
  tasks?: InstanceType<typeof TaskUncheckedCreateNestedManyWithoutColumnInput>;
}

@InputType()
export class ColumnUncheckedUpdateManyWithoutBoardInput {
  @Field(() => [ColumnCreateWithoutBoardInput], { nullable: true })
  create?: Array<ColumnCreateWithoutBoardInput>;
  @Field(() => [ColumnCreateOrConnectWithoutBoardInput], { nullable: true })
  connectOrCreate?: Array<ColumnCreateOrConnectWithoutBoardInput>;
  @Field(() => [ColumnUpsertWithWhereUniqueWithoutBoardInput], {
    nullable: true,
  })
  upsert?: Array<ColumnUpsertWithWhereUniqueWithoutBoardInput>;
  @Field(() => ColumnCreateManyBoardInputEnvelope, { nullable: true })
  createMany?: InstanceType<typeof ColumnCreateManyBoardInputEnvelope>;
  @Field(() => [ColumnWhereUniqueInput], { nullable: true })
  connect?: Array<ColumnWhereUniqueInput>;
  @Field(() => [ColumnWhereUniqueInput], { nullable: true })
  set?: Array<ColumnWhereUniqueInput>;
  @Field(() => [ColumnWhereUniqueInput], { nullable: true })
  disconnect?: Array<ColumnWhereUniqueInput>;
  @Field(() => [ColumnWhereUniqueInput], { nullable: true })
  delete?: Array<ColumnWhereUniqueInput>;
  @Field(() => [ColumnUpdateWithWhereUniqueWithoutBoardInput], {
    nullable: true,
  })
  update?: Array<ColumnUpdateWithWhereUniqueWithoutBoardInput>;
  @Field(() => [ColumnUpdateManyWithWhereWithoutBoardInput], { nullable: true })
  updateMany?: Array<ColumnUpdateManyWithWhereWithoutBoardInput>;
  @Field(() => [ColumnScalarWhereInput], { nullable: true })
  deleteMany?: Array<ColumnScalarWhereInput>;
}

@InputType()
export class ColumnUncheckedUpdateManyWithoutColumnsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumColumnStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumColumnStatusFieldUpdateOperationsInput>;
}

@InputType()
export class ColumnUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumColumnStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumColumnStatusFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  boardId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ColumnUncheckedUpdateWithoutBoardInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumColumnStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumColumnStatusFieldUpdateOperationsInput>;
  @Field(() => TaskUncheckedUpdateManyWithoutColumnInput, { nullable: true })
  tasks?: InstanceType<typeof TaskUncheckedUpdateManyWithoutColumnInput>;
}

@InputType()
export class ColumnUncheckedUpdateWithoutTasksInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumColumnStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumColumnStatusFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  boardId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ColumnUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumColumnStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumColumnStatusFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  boardId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => TaskUncheckedUpdateManyWithoutColumnInput, { nullable: true })
  tasks?: InstanceType<typeof TaskUncheckedUpdateManyWithoutColumnInput>;
}

@InputType()
export class ColumnUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumColumnStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumColumnStatusFieldUpdateOperationsInput>;
}

@InputType()
export class ColumnUpdateManyWithWhereWithoutBoardInput {
  @Field(() => ColumnScalarWhereInput, { nullable: false })
  where!: InstanceType<typeof ColumnScalarWhereInput>;
  @Field(() => ColumnUpdateManyMutationInput, { nullable: false })
  data!: InstanceType<typeof ColumnUpdateManyMutationInput>;
}

@InputType()
export class ColumnUpdateManyWithoutBoardInput {
  @Field(() => [ColumnCreateWithoutBoardInput], { nullable: true })
  create?: Array<ColumnCreateWithoutBoardInput>;
  @Field(() => [ColumnCreateOrConnectWithoutBoardInput], { nullable: true })
  connectOrCreate?: Array<ColumnCreateOrConnectWithoutBoardInput>;
  @Field(() => [ColumnUpsertWithWhereUniqueWithoutBoardInput], {
    nullable: true,
  })
  upsert?: Array<ColumnUpsertWithWhereUniqueWithoutBoardInput>;
  @Field(() => ColumnCreateManyBoardInputEnvelope, { nullable: true })
  createMany?: InstanceType<typeof ColumnCreateManyBoardInputEnvelope>;
  @Field(() => [ColumnWhereUniqueInput], { nullable: true })
  connect?: Array<ColumnWhereUniqueInput>;
  @Field(() => [ColumnWhereUniqueInput], { nullable: true })
  set?: Array<ColumnWhereUniqueInput>;
  @Field(() => [ColumnWhereUniqueInput], { nullable: true })
  disconnect?: Array<ColumnWhereUniqueInput>;
  @Field(() => [ColumnWhereUniqueInput], { nullable: true })
  delete?: Array<ColumnWhereUniqueInput>;
  @Field(() => [ColumnUpdateWithWhereUniqueWithoutBoardInput], {
    nullable: true,
  })
  update?: Array<ColumnUpdateWithWhereUniqueWithoutBoardInput>;
  @Field(() => [ColumnUpdateManyWithWhereWithoutBoardInput], { nullable: true })
  updateMany?: Array<ColumnUpdateManyWithWhereWithoutBoardInput>;
  @Field(() => [ColumnScalarWhereInput], { nullable: true })
  deleteMany?: Array<ColumnScalarWhereInput>;
}

@InputType()
export class ColumnUpdateOneRequiredWithoutTasksInput {
  @Field(() => ColumnCreateWithoutTasksInput, { nullable: true })
  create?: InstanceType<typeof ColumnCreateWithoutTasksInput>;
  @Field(() => ColumnCreateOrConnectWithoutTasksInput, { nullable: true })
  connectOrCreate?: InstanceType<typeof ColumnCreateOrConnectWithoutTasksInput>;
  @Field(() => ColumnUpsertWithoutTasksInput, { nullable: true })
  upsert?: InstanceType<typeof ColumnUpsertWithoutTasksInput>;
  @Field(() => ColumnWhereUniqueInput, { nullable: true })
  connect?: InstanceType<typeof ColumnWhereUniqueInput>;
  @Field(() => ColumnUpdateWithoutTasksInput, { nullable: true })
  update?: InstanceType<typeof ColumnUpdateWithoutTasksInput>;
}

@InputType()
export class ColumnUpdateWithWhereUniqueWithoutBoardInput {
  @Field(() => ColumnWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof ColumnWhereUniqueInput>;
  @Field(() => ColumnUpdateWithoutBoardInput, { nullable: false })
  data!: InstanceType<typeof ColumnUpdateWithoutBoardInput>;
}

@InputType()
export class ColumnUpdateWithoutBoardInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumColumnStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumColumnStatusFieldUpdateOperationsInput>;
  @Field(() => TaskUpdateManyWithoutColumnInput, { nullable: true })
  tasks?: InstanceType<typeof TaskUpdateManyWithoutColumnInput>;
}

@InputType()
export class ColumnUpdateWithoutTasksInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumColumnStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumColumnStatusFieldUpdateOperationsInput>;
  @Field(() => BoardUpdateOneRequiredWithoutColumnsInput, { nullable: true })
  board?: InstanceType<typeof BoardUpdateOneRequiredWithoutColumnsInput>;
}

@InputType()
export class ColumnUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => EnumColumnStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumColumnStatusFieldUpdateOperationsInput>;
  @Field(() => TaskUpdateManyWithoutColumnInput, { nullable: true })
  tasks?: InstanceType<typeof TaskUpdateManyWithoutColumnInput>;
  @Field(() => BoardUpdateOneRequiredWithoutColumnsInput, { nullable: true })
  board?: InstanceType<typeof BoardUpdateOneRequiredWithoutColumnsInput>;
}

@InputType()
export class ColumnUpsertWithWhereUniqueWithoutBoardInput {
  @Field(() => ColumnWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof ColumnWhereUniqueInput>;
  @Field(() => ColumnUpdateWithoutBoardInput, { nullable: false })
  update!: InstanceType<typeof ColumnUpdateWithoutBoardInput>;
  @Field(() => ColumnCreateWithoutBoardInput, { nullable: false })
  create!: InstanceType<typeof ColumnCreateWithoutBoardInput>;
}

@InputType()
export class ColumnUpsertWithoutTasksInput {
  @Field(() => ColumnUpdateWithoutTasksInput, { nullable: false })
  update!: InstanceType<typeof ColumnUpdateWithoutTasksInput>;
  @Field(() => ColumnCreateWithoutTasksInput, { nullable: false })
  create!: InstanceType<typeof ColumnCreateWithoutTasksInput>;
}

@InputType()
export class ColumnWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
}

@InputType()
export class ColumnWhereInput {
  @Field(() => [ColumnWhereInput], { nullable: true })
  AND?: Array<ColumnWhereInput>;
  @Field(() => [ColumnWhereInput], { nullable: true })
  OR?: Array<ColumnWhereInput>;
  @Field(() => [ColumnWhereInput], { nullable: true })
  NOT?: Array<ColumnWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => EnumColumnStatusFilter, { nullable: true })
  status?: InstanceType<typeof EnumColumnStatusFilter>;
  @Field(() => TaskListRelationFilter, { nullable: true })
  tasks?: InstanceType<typeof TaskListRelationFilter>;
  @Field(() => BoardRelationFilter, { nullable: true })
  board?: InstanceType<typeof BoardRelationFilter>;
  @Field(() => StringFilter, { nullable: true })
  boardId?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class Column {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => ColumnStatus, { nullable: false, defaultValue: 'ACTIVE' })
  status!: keyof typeof ColumnStatus;
  @Field(() => [Task], { nullable: true })
  tasks?: Array<Task>;
  @Field(() => Board, { nullable: false })
  board?: InstanceType<typeof Board>;
  @Field(() => String, { nullable: false })
  boardId!: string;
}

@ArgsType()
export class CreateManyColumnArgs {
  @Field(() => [ColumnCreateManyInput], { nullable: false })
  data!: Array<ColumnCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneColumnArgs {
  @Field(() => ColumnCreateInput, { nullable: false })
  data!: InstanceType<typeof ColumnCreateInput>;
}

@ArgsType()
export class DeleteManyColumnArgs {
  @Field(() => ColumnWhereInput, { nullable: true })
  where?: InstanceType<typeof ColumnWhereInput>;
}

@ArgsType()
export class DeleteOneColumnArgs {
  @Field(() => ColumnWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof ColumnWhereUniqueInput>;
}

@ArgsType()
export class FindFirstColumnArgs {
  @Field(() => ColumnWhereInput, { nullable: true })
  where?: InstanceType<typeof ColumnWhereInput>;
  @Field(() => [ColumnOrderByInput], { nullable: true })
  orderBy?: Array<ColumnOrderByInput>;
  @Field(() => ColumnWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof ColumnWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ColumnScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ColumnScalarFieldEnum>;
}

@ArgsType()
export class FindManyColumnArgs {
  @Field(() => ColumnWhereInput, { nullable: true })
  where?: InstanceType<typeof ColumnWhereInput>;
  @Field(() => [ColumnOrderByInput], { nullable: true })
  orderBy?: Array<ColumnOrderByInput>;
  @Field(() => ColumnWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof ColumnWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ColumnScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ColumnScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueColumnArgs {
  @Field(() => ColumnWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof ColumnWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyColumnArgs {
  @Field(() => ColumnUpdateManyMutationInput, { nullable: false })
  data!: InstanceType<typeof ColumnUpdateManyMutationInput>;
  @Field(() => ColumnWhereInput, { nullable: true })
  where?: InstanceType<typeof ColumnWhereInput>;
}

@ArgsType()
export class UpdateOneColumnArgs {
  @Field(() => ColumnUpdateInput, { nullable: false })
  data!: InstanceType<typeof ColumnUpdateInput>;
  @Field(() => ColumnWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof ColumnWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneColumnArgs {
  @Field(() => ColumnWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof ColumnWhereUniqueInput>;
  @Field(() => ColumnCreateInput, { nullable: false })
  create!: InstanceType<typeof ColumnCreateInput>;
  @Field(() => ColumnUpdateInput, { nullable: false })
  update!: InstanceType<typeof ColumnUpdateInput>;
}

@ObjectType()
export class AffectedRows {
  @Field(() => Int, { nullable: false })
  count!: number;
}

@InputType()
export class BoolFieldUpdateOperationsInput {
  @Field(() => Boolean, { nullable: true })
  set?: boolean;
}

@InputType()
export class BoolFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => NestedBoolFilter, { nullable: true })
  not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => NestedBoolWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  _min?: InstanceType<typeof NestedBoolFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  min?: InstanceType<typeof NestedBoolFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  _max?: InstanceType<typeof NestedBoolFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class EnumBoardStatusFieldUpdateOperationsInput {
  @Field(() => BoardStatus, { nullable: true })
  set?: keyof typeof BoardStatus;
}

@InputType()
export class EnumBoardStatusFilter {
  @Field(() => BoardStatus, { nullable: true })
  equals?: keyof typeof BoardStatus;
  @Field(() => [BoardStatus], { nullable: true })
  in?: Array<keyof typeof BoardStatus>;
  @Field(() => [BoardStatus], { nullable: true })
  notIn?: Array<keyof typeof BoardStatus>;
  @Field(() => NestedEnumBoardStatusFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumBoardStatusFilter>;
}

@InputType()
export class EnumBoardStatusWithAggregatesFilter {
  @Field(() => BoardStatus, { nullable: true })
  equals?: keyof typeof BoardStatus;
  @Field(() => [BoardStatus], { nullable: true })
  in?: Array<keyof typeof BoardStatus>;
  @Field(() => [BoardStatus], { nullable: true })
  notIn?: Array<keyof typeof BoardStatus>;
  @Field(() => NestedEnumBoardStatusWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumBoardStatusWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumBoardStatusFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumBoardStatusFilter>;
  @Field(() => NestedEnumBoardStatusFilter, { nullable: true })
  min?: InstanceType<typeof NestedEnumBoardStatusFilter>;
  @Field(() => NestedEnumBoardStatusFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumBoardStatusFilter>;
  @Field(() => NestedEnumBoardStatusFilter, { nullable: true })
  max?: InstanceType<typeof NestedEnumBoardStatusFilter>;
}

@InputType()
export class EnumColumnStatusFieldUpdateOperationsInput {
  @Field(() => ColumnStatus, { nullable: true })
  set?: keyof typeof ColumnStatus;
}

@InputType()
export class EnumColumnStatusFilter {
  @Field(() => ColumnStatus, { nullable: true })
  equals?: keyof typeof ColumnStatus;
  @Field(() => [ColumnStatus], { nullable: true })
  in?: Array<keyof typeof ColumnStatus>;
  @Field(() => [ColumnStatus], { nullable: true })
  notIn?: Array<keyof typeof ColumnStatus>;
  @Field(() => NestedEnumColumnStatusFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumColumnStatusFilter>;
}

@InputType()
export class EnumColumnStatusWithAggregatesFilter {
  @Field(() => ColumnStatus, { nullable: true })
  equals?: keyof typeof ColumnStatus;
  @Field(() => [ColumnStatus], { nullable: true })
  in?: Array<keyof typeof ColumnStatus>;
  @Field(() => [ColumnStatus], { nullable: true })
  notIn?: Array<keyof typeof ColumnStatus>;
  @Field(() => NestedEnumColumnStatusWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumColumnStatusWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumColumnStatusFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumColumnStatusFilter>;
  @Field(() => NestedEnumColumnStatusFilter, { nullable: true })
  min?: InstanceType<typeof NestedEnumColumnStatusFilter>;
  @Field(() => NestedEnumColumnStatusFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumColumnStatusFilter>;
  @Field(() => NestedEnumColumnStatusFilter, { nullable: true })
  max?: InstanceType<typeof NestedEnumColumnStatusFilter>;
}

@InputType()
export class EnumTaskStatusFieldUpdateOperationsInput {
  @Field(() => TaskStatus, { nullable: true })
  set?: keyof typeof TaskStatus;
}

@InputType()
export class EnumTaskStatusFilter {
  @Field(() => TaskStatus, { nullable: true })
  equals?: keyof typeof TaskStatus;
  @Field(() => [TaskStatus], { nullable: true })
  in?: Array<keyof typeof TaskStatus>;
  @Field(() => [TaskStatus], { nullable: true })
  notIn?: Array<keyof typeof TaskStatus>;
  @Field(() => NestedEnumTaskStatusFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumTaskStatusFilter>;
}

@InputType()
export class EnumTaskStatusWithAggregatesFilter {
  @Field(() => TaskStatus, { nullable: true })
  equals?: keyof typeof TaskStatus;
  @Field(() => [TaskStatus], { nullable: true })
  in?: Array<keyof typeof TaskStatus>;
  @Field(() => [TaskStatus], { nullable: true })
  notIn?: Array<keyof typeof TaskStatus>;
  @Field(() => NestedEnumTaskStatusWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumTaskStatusWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumTaskStatusFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumTaskStatusFilter>;
  @Field(() => NestedEnumTaskStatusFilter, { nullable: true })
  min?: InstanceType<typeof NestedEnumTaskStatusFilter>;
  @Field(() => NestedEnumTaskStatusFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumTaskStatusFilter>;
  @Field(() => NestedEnumTaskStatusFilter, { nullable: true })
  max?: InstanceType<typeof NestedEnumTaskStatusFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
  @Field(() => Int, { nullable: true })
  set?: number;
  @Field(() => Int, { nullable: true })
  increment?: number;
  @Field(() => Int, { nullable: true })
  decrement?: number;
  @Field(() => Int, { nullable: true })
  multiply?: number;
  @Field(() => Int, { nullable: true })
  divide?: number;
}

@InputType()
export class IntFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedFloatFilter, { nullable: true })
  _avg?: InstanceType<typeof NestedFloatFilter>;
  @Field(() => NestedFloatFilter, { nullable: true })
  avg?: InstanceType<typeof NestedFloatFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _sum?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  sum?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _min?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  min?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _max?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedBoolFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => NestedBoolFilter, { nullable: true })
  not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedBoolWithAggregatesFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => NestedBoolWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  _min?: InstanceType<typeof NestedBoolFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  min?: InstanceType<typeof NestedBoolFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  _max?: InstanceType<typeof NestedBoolFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedEnumBoardStatusFilter {
  @Field(() => BoardStatus, { nullable: true })
  equals?: keyof typeof BoardStatus;
  @Field(() => [BoardStatus], { nullable: true })
  in?: Array<keyof typeof BoardStatus>;
  @Field(() => [BoardStatus], { nullable: true })
  notIn?: Array<keyof typeof BoardStatus>;
  @Field(() => NestedEnumBoardStatusFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumBoardStatusFilter>;
}

@InputType()
export class NestedEnumBoardStatusWithAggregatesFilter {
  @Field(() => BoardStatus, { nullable: true })
  equals?: keyof typeof BoardStatus;
  @Field(() => [BoardStatus], { nullable: true })
  in?: Array<keyof typeof BoardStatus>;
  @Field(() => [BoardStatus], { nullable: true })
  notIn?: Array<keyof typeof BoardStatus>;
  @Field(() => NestedEnumBoardStatusWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumBoardStatusWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumBoardStatusFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumBoardStatusFilter>;
  @Field(() => NestedEnumBoardStatusFilter, { nullable: true })
  min?: InstanceType<typeof NestedEnumBoardStatusFilter>;
  @Field(() => NestedEnumBoardStatusFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumBoardStatusFilter>;
  @Field(() => NestedEnumBoardStatusFilter, { nullable: true })
  max?: InstanceType<typeof NestedEnumBoardStatusFilter>;
}

@InputType()
export class NestedEnumColumnStatusFilter {
  @Field(() => ColumnStatus, { nullable: true })
  equals?: keyof typeof ColumnStatus;
  @Field(() => [ColumnStatus], { nullable: true })
  in?: Array<keyof typeof ColumnStatus>;
  @Field(() => [ColumnStatus], { nullable: true })
  notIn?: Array<keyof typeof ColumnStatus>;
  @Field(() => NestedEnumColumnStatusFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumColumnStatusFilter>;
}

@InputType()
export class NestedEnumColumnStatusWithAggregatesFilter {
  @Field(() => ColumnStatus, { nullable: true })
  equals?: keyof typeof ColumnStatus;
  @Field(() => [ColumnStatus], { nullable: true })
  in?: Array<keyof typeof ColumnStatus>;
  @Field(() => [ColumnStatus], { nullable: true })
  notIn?: Array<keyof typeof ColumnStatus>;
  @Field(() => NestedEnumColumnStatusWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumColumnStatusWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumColumnStatusFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumColumnStatusFilter>;
  @Field(() => NestedEnumColumnStatusFilter, { nullable: true })
  min?: InstanceType<typeof NestedEnumColumnStatusFilter>;
  @Field(() => NestedEnumColumnStatusFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumColumnStatusFilter>;
  @Field(() => NestedEnumColumnStatusFilter, { nullable: true })
  max?: InstanceType<typeof NestedEnumColumnStatusFilter>;
}

@InputType()
export class NestedEnumTaskStatusFilter {
  @Field(() => TaskStatus, { nullable: true })
  equals?: keyof typeof TaskStatus;
  @Field(() => [TaskStatus], { nullable: true })
  in?: Array<keyof typeof TaskStatus>;
  @Field(() => [TaskStatus], { nullable: true })
  notIn?: Array<keyof typeof TaskStatus>;
  @Field(() => NestedEnumTaskStatusFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumTaskStatusFilter>;
}

@InputType()
export class NestedEnumTaskStatusWithAggregatesFilter {
  @Field(() => TaskStatus, { nullable: true })
  equals?: keyof typeof TaskStatus;
  @Field(() => [TaskStatus], { nullable: true })
  in?: Array<keyof typeof TaskStatus>;
  @Field(() => [TaskStatus], { nullable: true })
  notIn?: Array<keyof typeof TaskStatus>;
  @Field(() => NestedEnumTaskStatusWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumTaskStatusWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumTaskStatusFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumTaskStatusFilter>;
  @Field(() => NestedEnumTaskStatusFilter, { nullable: true })
  min?: InstanceType<typeof NestedEnumTaskStatusFilter>;
  @Field(() => NestedEnumTaskStatusFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumTaskStatusFilter>;
  @Field(() => NestedEnumTaskStatusFilter, { nullable: true })
  max?: InstanceType<typeof NestedEnumTaskStatusFilter>;
}

@InputType()
export class NestedFloatFilter {
  @Field(() => Float, { nullable: true })
  equals?: number;
  @Field(() => [Float], { nullable: true })
  in?: Array<number>;
  @Field(() => [Float], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Float, { nullable: true })
  lt?: number;
  @Field(() => Float, { nullable: true })
  lte?: number;
  @Field(() => Float, { nullable: true })
  gt?: number;
  @Field(() => Float, { nullable: true })
  gte?: number;
  @Field(() => NestedFloatFilter, { nullable: true })
  not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedIntFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedFloatFilter, { nullable: true })
  _avg?: InstanceType<typeof NestedFloatFilter>;
  @Field(() => NestedFloatFilter, { nullable: true })
  avg?: InstanceType<typeof NestedFloatFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _sum?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  sum?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _min?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  min?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _max?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  min?: InstanceType<typeof NestedStringNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  min?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
  @Field(() => String, { nullable: true })
  set?: string;
}

@InputType()
export class StringFieldUpdateOperationsInput {
  @Field(() => String, { nullable: true })
  set?: string;
}

@InputType()
export class StringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  min?: InstanceType<typeof NestedStringNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  min?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateTask {
  @Field(() => TaskCountAggregate, { nullable: true })
  _count?: InstanceType<typeof TaskCountAggregate>;
  @Field(() => TaskCountAggregate, { nullable: true })
  count?: InstanceType<typeof TaskCountAggregate>;
  @Field(() => TaskAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof TaskAvgAggregate>;
  @Field(() => TaskAvgAggregate, { nullable: true })
  avg?: InstanceType<typeof TaskAvgAggregate>;
  @Field(() => TaskSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof TaskSumAggregate>;
  @Field(() => TaskSumAggregate, { nullable: true })
  sum?: InstanceType<typeof TaskSumAggregate>;
  @Field(() => TaskMinAggregate, { nullable: true })
  _min?: InstanceType<typeof TaskMinAggregate>;
  @Field(() => TaskMinAggregate, { nullable: true })
  min?: InstanceType<typeof TaskMinAggregate>;
  @Field(() => TaskMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof TaskMaxAggregate>;
  @Field(() => TaskMaxAggregate, { nullable: true })
  max?: InstanceType<typeof TaskMaxAggregate>;
}

@ArgsType()
export class CreateManyTaskArgs {
  @Field(() => [TaskCreateManyInput], { nullable: false })
  data!: Array<TaskCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneTaskArgs {
  @Field(() => TaskCreateInput, { nullable: false })
  data!: InstanceType<typeof TaskCreateInput>;
}

@ArgsType()
export class DeleteManyTaskArgs {
  @Field(() => TaskWhereInput, { nullable: true })
  where?: InstanceType<typeof TaskWhereInput>;
}

@ArgsType()
export class DeleteOneTaskArgs {
  @Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof TaskWhereUniqueInput>;
}

@ArgsType()
export class FindFirstTaskArgs {
  @Field(() => TaskWhereInput, { nullable: true })
  where?: InstanceType<typeof TaskWhereInput>;
  @Field(() => [TaskOrderByInput], { nullable: true })
  orderBy?: Array<TaskOrderByInput>;
  @Field(() => TaskWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof TaskWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [TaskScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof TaskScalarFieldEnum>;
}

@ArgsType()
export class FindManyTaskArgs {
  @Field(() => TaskWhereInput, { nullable: true })
  where?: InstanceType<typeof TaskWhereInput>;
  @Field(() => [TaskOrderByInput], { nullable: true })
  orderBy?: Array<TaskOrderByInput>;
  @Field(() => TaskWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof TaskWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [TaskScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof TaskScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueTaskArgs {
  @Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof TaskWhereUniqueInput>;
}

@ArgsType()
export class TaskAggregateArgs {
  @Field(() => TaskWhereInput, { nullable: true })
  where?: InstanceType<typeof TaskWhereInput>;
  @Field(() => [TaskOrderByInput], { nullable: true })
  orderBy?: Array<TaskOrderByInput>;
  @Field(() => TaskWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof TaskWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => TaskCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof TaskCountAggregateInput>;
  @Field(() => TaskAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof TaskAvgAggregateInput>;
  @Field(() => TaskSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof TaskSumAggregateInput>;
  @Field(() => TaskMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof TaskMinAggregateInput>;
  @Field(() => TaskMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof TaskMaxAggregateInput>;
}

@InputType()
export class TaskAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  ponctuation?: true;
}

@ObjectType()
export class TaskAvgAggregate {
  @Field(() => Float, { nullable: true })
  ponctuation?: number;
}

@InputType()
export class TaskCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  title?: true;
  @Field(() => Boolean, { nullable: true })
  description?: true;
  @Field(() => Boolean, { nullable: true })
  ponctuation?: true;
  @Field(() => Boolean, { nullable: true })
  status?: true;
  @Field(() => Boolean, { nullable: true })
  columnId?: true;
  @Field(() => Boolean, { nullable: true })
  assignedId?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class TaskCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  title!: number;
  @Field(() => Int, { nullable: false })
  description!: number;
  @Field(() => Int, { nullable: false })
  ponctuation!: number;
  @Field(() => Int, { nullable: false })
  status!: number;
  @Field(() => Int, { nullable: false })
  columnId!: number;
  @Field(() => Int, { nullable: false })
  assignedId!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class TaskCreateManyAssignedInputEnvelope {
  @Field(() => [TaskCreateManyAssignedInput], { nullable: false })
  data!: Array<TaskCreateManyAssignedInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class TaskCreateManyAssignedInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => Int, { nullable: true })
  ponctuation?: number;
  @Field(() => TaskStatus, { nullable: true })
  status?: keyof typeof TaskStatus;
  @Field(() => String, { nullable: false })
  columnId!: string;
}

@InputType()
export class TaskCreateManyColumnInputEnvelope {
  @Field(() => [TaskCreateManyColumnInput], { nullable: false })
  data!: Array<TaskCreateManyColumnInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class TaskCreateManyColumnInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => Int, { nullable: true })
  ponctuation?: number;
  @Field(() => TaskStatus, { nullable: true })
  status?: keyof typeof TaskStatus;
  @Field(() => String, { nullable: true })
  assignedId?: string;
}

@InputType()
export class TaskCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => Int, { nullable: true })
  ponctuation?: number;
  @Field(() => TaskStatus, { nullable: true })
  status?: keyof typeof TaskStatus;
  @Field(() => String, { nullable: false })
  columnId!: string;
  @Field(() => String, { nullable: true })
  assignedId?: string;
}

@InputType()
export class TaskCreateNestedManyWithoutAssignedInput {
  @Field(() => [TaskCreateWithoutAssignedInput], { nullable: true })
  create?: Array<TaskCreateWithoutAssignedInput>;
  @Field(() => [TaskCreateOrConnectWithoutAssignedInput], { nullable: true })
  connectOrCreate?: Array<TaskCreateOrConnectWithoutAssignedInput>;
  @Field(() => TaskCreateManyAssignedInputEnvelope, { nullable: true })
  createMany?: InstanceType<typeof TaskCreateManyAssignedInputEnvelope>;
  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  connect?: Array<TaskWhereUniqueInput>;
}

@InputType()
export class TaskCreateNestedManyWithoutColumnInput {
  @Field(() => [TaskCreateWithoutColumnInput], { nullable: true })
  create?: Array<TaskCreateWithoutColumnInput>;
  @Field(() => [TaskCreateOrConnectWithoutColumnInput], { nullable: true })
  connectOrCreate?: Array<TaskCreateOrConnectWithoutColumnInput>;
  @Field(() => TaskCreateManyColumnInputEnvelope, { nullable: true })
  createMany?: InstanceType<typeof TaskCreateManyColumnInputEnvelope>;
  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  connect?: Array<TaskWhereUniqueInput>;
}

@InputType()
export class TaskCreateOrConnectWithoutAssignedInput {
  @Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof TaskWhereUniqueInput>;
  @Field(() => TaskCreateWithoutAssignedInput, { nullable: false })
  create!: InstanceType<typeof TaskCreateWithoutAssignedInput>;
}

@InputType()
export class TaskCreateOrConnectWithoutColumnInput {
  @Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof TaskWhereUniqueInput>;
  @Field(() => TaskCreateWithoutColumnInput, { nullable: false })
  create!: InstanceType<typeof TaskCreateWithoutColumnInput>;
}

@InputType()
export class TaskCreateWithoutAssignedInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => Int, { nullable: true })
  ponctuation?: number;
  @Field(() => TaskStatus, { nullable: true })
  status?: keyof typeof TaskStatus;
  @Field(() => ColumnCreateNestedOneWithoutTasksInput, { nullable: false })
  column!: InstanceType<typeof ColumnCreateNestedOneWithoutTasksInput>;
}

@InputType()
export class TaskCreateWithoutColumnInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => Int, { nullable: true })
  ponctuation?: number;
  @Field(() => TaskStatus, { nullable: true })
  status?: keyof typeof TaskStatus;
  @Field(() => UserCreateNestedOneWithoutTasksInput, { nullable: true })
  assigned?: InstanceType<typeof UserCreateNestedOneWithoutTasksInput>;
}

@InputType()
export class TaskCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => Int, { nullable: true })
  ponctuation?: number;
  @Field(() => TaskStatus, { nullable: true })
  status?: keyof typeof TaskStatus;
  @Field(() => ColumnCreateNestedOneWithoutTasksInput, { nullable: false })
  column!: InstanceType<typeof ColumnCreateNestedOneWithoutTasksInput>;
  @Field(() => UserCreateNestedOneWithoutTasksInput, { nullable: true })
  assigned?: InstanceType<typeof UserCreateNestedOneWithoutTasksInput>;
}

@ArgsType()
export class TaskGroupByArgs {
  @Field(() => TaskWhereInput, { nullable: true })
  where?: InstanceType<typeof TaskWhereInput>;
  @Field(() => [TaskOrderByInput], { nullable: true })
  orderBy?: Array<TaskOrderByInput>;
  @Field(() => [TaskScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof TaskScalarFieldEnum>;
  @Field(() => TaskScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof TaskScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => TaskCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof TaskCountAggregateInput>;
  @Field(() => TaskAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof TaskAvgAggregateInput>;
  @Field(() => TaskSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof TaskSumAggregateInput>;
  @Field(() => TaskMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof TaskMinAggregateInput>;
  @Field(() => TaskMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof TaskMaxAggregateInput>;
}

@ObjectType()
export class TaskGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: false })
  description!: string;
  @Field(() => Int, { nullable: false })
  ponctuation!: number;
  @Field(() => TaskStatus, { nullable: false })
  status!: keyof typeof TaskStatus;
  @Field(() => String, { nullable: false })
  columnId!: string;
  @Field(() => String, { nullable: true })
  assignedId?: string;
  @Field(() => TaskCountAggregate, { nullable: true })
  _count?: InstanceType<typeof TaskCountAggregate>;
  @Field(() => TaskAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof TaskAvgAggregate>;
  @Field(() => TaskSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof TaskSumAggregate>;
  @Field(() => TaskMinAggregate, { nullable: true })
  _min?: InstanceType<typeof TaskMinAggregate>;
  @Field(() => TaskMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof TaskMaxAggregate>;
}

@InputType()
export class TaskListRelationFilter {
  @Field(() => TaskWhereInput, { nullable: true })
  every?: InstanceType<typeof TaskWhereInput>;
  @Field(() => TaskWhereInput, { nullable: true })
  some?: InstanceType<typeof TaskWhereInput>;
  @Field(() => TaskWhereInput, { nullable: true })
  none?: InstanceType<typeof TaskWhereInput>;
}

@InputType()
export class TaskMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  title?: true;
  @Field(() => Boolean, { nullable: true })
  description?: true;
  @Field(() => Boolean, { nullable: true })
  ponctuation?: true;
  @Field(() => Boolean, { nullable: true })
  status?: true;
  @Field(() => Boolean, { nullable: true })
  columnId?: true;
  @Field(() => Boolean, { nullable: true })
  assignedId?: true;
}

@ObjectType()
export class TaskMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => Int, { nullable: true })
  ponctuation?: number;
  @Field(() => TaskStatus, { nullable: true })
  status?: keyof typeof TaskStatus;
  @Field(() => String, { nullable: true })
  columnId?: string;
  @Field(() => String, { nullable: true })
  assignedId?: string;
}

@InputType()
export class TaskMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  title?: true;
  @Field(() => Boolean, { nullable: true })
  description?: true;
  @Field(() => Boolean, { nullable: true })
  ponctuation?: true;
  @Field(() => Boolean, { nullable: true })
  status?: true;
  @Field(() => Boolean, { nullable: true })
  columnId?: true;
  @Field(() => Boolean, { nullable: true })
  assignedId?: true;
}

@ObjectType()
export class TaskMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => Int, { nullable: true })
  ponctuation?: number;
  @Field(() => TaskStatus, { nullable: true })
  status?: keyof typeof TaskStatus;
  @Field(() => String, { nullable: true })
  columnId?: string;
  @Field(() => String, { nullable: true })
  assignedId?: string;
}

@InputType()
export class TaskOrderByInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  ponctuation?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  columnId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  assignedId?: keyof typeof SortOrder;
}

@InputType()
export class TaskScalarWhereWithAggregatesInput {
  @Field(() => [TaskScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<TaskScalarWhereWithAggregatesInput>;
  @Field(() => [TaskScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<TaskScalarWhereWithAggregatesInput>;
  @Field(() => [TaskScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<TaskScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  title?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  description?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  ponctuation?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => EnumTaskStatusWithAggregatesFilter, { nullable: true })
  status?: InstanceType<typeof EnumTaskStatusWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  columnId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  assignedId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}

@InputType()
export class TaskScalarWhereInput {
  @Field(() => [TaskScalarWhereInput], { nullable: true })
  AND?: Array<TaskScalarWhereInput>;
  @Field(() => [TaskScalarWhereInput], { nullable: true })
  OR?: Array<TaskScalarWhereInput>;
  @Field(() => [TaskScalarWhereInput], { nullable: true })
  NOT?: Array<TaskScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  title?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  description?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  ponctuation?: InstanceType<typeof IntFilter>;
  @Field(() => EnumTaskStatusFilter, { nullable: true })
  status?: InstanceType<typeof EnumTaskStatusFilter>;
  @Field(() => StringFilter, { nullable: true })
  columnId?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  assignedId?: InstanceType<typeof StringNullableFilter>;
}

@InputType()
export class TaskSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  ponctuation?: true;
}

@ObjectType()
export class TaskSumAggregate {
  @Field(() => Int, { nullable: true })
  ponctuation?: number;
}

@InputType()
export class TaskUncheckedCreateNestedManyWithoutAssignedInput {
  @Field(() => [TaskCreateWithoutAssignedInput], { nullable: true })
  create?: Array<TaskCreateWithoutAssignedInput>;
  @Field(() => [TaskCreateOrConnectWithoutAssignedInput], { nullable: true })
  connectOrCreate?: Array<TaskCreateOrConnectWithoutAssignedInput>;
  @Field(() => TaskCreateManyAssignedInputEnvelope, { nullable: true })
  createMany?: InstanceType<typeof TaskCreateManyAssignedInputEnvelope>;
  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  connect?: Array<TaskWhereUniqueInput>;
}

@InputType()
export class TaskUncheckedCreateNestedManyWithoutColumnInput {
  @Field(() => [TaskCreateWithoutColumnInput], { nullable: true })
  create?: Array<TaskCreateWithoutColumnInput>;
  @Field(() => [TaskCreateOrConnectWithoutColumnInput], { nullable: true })
  connectOrCreate?: Array<TaskCreateOrConnectWithoutColumnInput>;
  @Field(() => TaskCreateManyColumnInputEnvelope, { nullable: true })
  createMany?: InstanceType<typeof TaskCreateManyColumnInputEnvelope>;
  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  connect?: Array<TaskWhereUniqueInput>;
}

@InputType()
export class TaskUncheckedCreateWithoutAssignedInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => Int, { nullable: true })
  ponctuation?: number;
  @Field(() => TaskStatus, { nullable: true })
  status?: keyof typeof TaskStatus;
  @Field(() => String, { nullable: false })
  columnId!: string;
}

@InputType()
export class TaskUncheckedCreateWithoutColumnInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => Int, { nullable: true })
  ponctuation?: number;
  @Field(() => TaskStatus, { nullable: true })
  status?: keyof typeof TaskStatus;
  @Field(() => String, { nullable: true })
  assignedId?: string;
}

@InputType()
export class TaskUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => Int, { nullable: true })
  ponctuation?: number;
  @Field(() => TaskStatus, { nullable: true })
  status?: keyof typeof TaskStatus;
  @Field(() => String, { nullable: false })
  columnId!: string;
  @Field(() => String, { nullable: true })
  assignedId?: string;
}

@InputType()
export class TaskUncheckedUpdateManyWithoutAssignedInput {
  @Field(() => [TaskCreateWithoutAssignedInput], { nullable: true })
  create?: Array<TaskCreateWithoutAssignedInput>;
  @Field(() => [TaskCreateOrConnectWithoutAssignedInput], { nullable: true })
  connectOrCreate?: Array<TaskCreateOrConnectWithoutAssignedInput>;
  @Field(() => [TaskUpsertWithWhereUniqueWithoutAssignedInput], {
    nullable: true,
  })
  upsert?: Array<TaskUpsertWithWhereUniqueWithoutAssignedInput>;
  @Field(() => TaskCreateManyAssignedInputEnvelope, { nullable: true })
  createMany?: InstanceType<typeof TaskCreateManyAssignedInputEnvelope>;
  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  connect?: Array<TaskWhereUniqueInput>;
  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  set?: Array<TaskWhereUniqueInput>;
  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  disconnect?: Array<TaskWhereUniqueInput>;
  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  delete?: Array<TaskWhereUniqueInput>;
  @Field(() => [TaskUpdateWithWhereUniqueWithoutAssignedInput], {
    nullable: true,
  })
  update?: Array<TaskUpdateWithWhereUniqueWithoutAssignedInput>;
  @Field(() => [TaskUpdateManyWithWhereWithoutAssignedInput], {
    nullable: true,
  })
  updateMany?: Array<TaskUpdateManyWithWhereWithoutAssignedInput>;
  @Field(() => [TaskScalarWhereInput], { nullable: true })
  deleteMany?: Array<TaskScalarWhereInput>;
}

@InputType()
export class TaskUncheckedUpdateManyWithoutColumnInput {
  @Field(() => [TaskCreateWithoutColumnInput], { nullable: true })
  create?: Array<TaskCreateWithoutColumnInput>;
  @Field(() => [TaskCreateOrConnectWithoutColumnInput], { nullable: true })
  connectOrCreate?: Array<TaskCreateOrConnectWithoutColumnInput>;
  @Field(() => [TaskUpsertWithWhereUniqueWithoutColumnInput], {
    nullable: true,
  })
  upsert?: Array<TaskUpsertWithWhereUniqueWithoutColumnInput>;
  @Field(() => TaskCreateManyColumnInputEnvelope, { nullable: true })
  createMany?: InstanceType<typeof TaskCreateManyColumnInputEnvelope>;
  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  connect?: Array<TaskWhereUniqueInput>;
  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  set?: Array<TaskWhereUniqueInput>;
  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  disconnect?: Array<TaskWhereUniqueInput>;
  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  delete?: Array<TaskWhereUniqueInput>;
  @Field(() => [TaskUpdateWithWhereUniqueWithoutColumnInput], {
    nullable: true,
  })
  update?: Array<TaskUpdateWithWhereUniqueWithoutColumnInput>;
  @Field(() => [TaskUpdateManyWithWhereWithoutColumnInput], { nullable: true })
  updateMany?: Array<TaskUpdateManyWithWhereWithoutColumnInput>;
  @Field(() => [TaskScalarWhereInput], { nullable: true })
  deleteMany?: Array<TaskScalarWhereInput>;
}

@InputType()
export class TaskUncheckedUpdateManyWithoutTasksInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  ponctuation?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => EnumTaskStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumTaskStatusFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  columnId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TaskUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  ponctuation?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => EnumTaskStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumTaskStatusFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  columnId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  assignedId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class TaskUncheckedUpdateWithoutAssignedInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  ponctuation?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => EnumTaskStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumTaskStatusFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  columnId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TaskUncheckedUpdateWithoutColumnInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  ponctuation?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => EnumTaskStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumTaskStatusFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  assignedId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class TaskUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  ponctuation?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => EnumTaskStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumTaskStatusFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  columnId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  assignedId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class TaskUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  ponctuation?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => EnumTaskStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumTaskStatusFieldUpdateOperationsInput>;
}

@InputType()
export class TaskUpdateManyWithWhereWithoutAssignedInput {
  @Field(() => TaskScalarWhereInput, { nullable: false })
  where!: InstanceType<typeof TaskScalarWhereInput>;
  @Field(() => TaskUpdateManyMutationInput, { nullable: false })
  data!: InstanceType<typeof TaskUpdateManyMutationInput>;
}

@InputType()
export class TaskUpdateManyWithWhereWithoutColumnInput {
  @Field(() => TaskScalarWhereInput, { nullable: false })
  where!: InstanceType<typeof TaskScalarWhereInput>;
  @Field(() => TaskUpdateManyMutationInput, { nullable: false })
  data!: InstanceType<typeof TaskUpdateManyMutationInput>;
}

@InputType()
export class TaskUpdateManyWithoutAssignedInput {
  @Field(() => [TaskCreateWithoutAssignedInput], { nullable: true })
  create?: Array<TaskCreateWithoutAssignedInput>;
  @Field(() => [TaskCreateOrConnectWithoutAssignedInput], { nullable: true })
  connectOrCreate?: Array<TaskCreateOrConnectWithoutAssignedInput>;
  @Field(() => [TaskUpsertWithWhereUniqueWithoutAssignedInput], {
    nullable: true,
  })
  upsert?: Array<TaskUpsertWithWhereUniqueWithoutAssignedInput>;
  @Field(() => TaskCreateManyAssignedInputEnvelope, { nullable: true })
  createMany?: InstanceType<typeof TaskCreateManyAssignedInputEnvelope>;
  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  connect?: Array<TaskWhereUniqueInput>;
  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  set?: Array<TaskWhereUniqueInput>;
  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  disconnect?: Array<TaskWhereUniqueInput>;
  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  delete?: Array<TaskWhereUniqueInput>;
  @Field(() => [TaskUpdateWithWhereUniqueWithoutAssignedInput], {
    nullable: true,
  })
  update?: Array<TaskUpdateWithWhereUniqueWithoutAssignedInput>;
  @Field(() => [TaskUpdateManyWithWhereWithoutAssignedInput], {
    nullable: true,
  })
  updateMany?: Array<TaskUpdateManyWithWhereWithoutAssignedInput>;
  @Field(() => [TaskScalarWhereInput], { nullable: true })
  deleteMany?: Array<TaskScalarWhereInput>;
}

@InputType()
export class TaskUpdateManyWithoutColumnInput {
  @Field(() => [TaskCreateWithoutColumnInput], { nullable: true })
  create?: Array<TaskCreateWithoutColumnInput>;
  @Field(() => [TaskCreateOrConnectWithoutColumnInput], { nullable: true })
  connectOrCreate?: Array<TaskCreateOrConnectWithoutColumnInput>;
  @Field(() => [TaskUpsertWithWhereUniqueWithoutColumnInput], {
    nullable: true,
  })
  upsert?: Array<TaskUpsertWithWhereUniqueWithoutColumnInput>;
  @Field(() => TaskCreateManyColumnInputEnvelope, { nullable: true })
  createMany?: InstanceType<typeof TaskCreateManyColumnInputEnvelope>;
  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  connect?: Array<TaskWhereUniqueInput>;
  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  set?: Array<TaskWhereUniqueInput>;
  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  disconnect?: Array<TaskWhereUniqueInput>;
  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  delete?: Array<TaskWhereUniqueInput>;
  @Field(() => [TaskUpdateWithWhereUniqueWithoutColumnInput], {
    nullable: true,
  })
  update?: Array<TaskUpdateWithWhereUniqueWithoutColumnInput>;
  @Field(() => [TaskUpdateManyWithWhereWithoutColumnInput], { nullable: true })
  updateMany?: Array<TaskUpdateManyWithWhereWithoutColumnInput>;
  @Field(() => [TaskScalarWhereInput], { nullable: true })
  deleteMany?: Array<TaskScalarWhereInput>;
}

@InputType()
export class TaskUpdateWithWhereUniqueWithoutAssignedInput {
  @Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof TaskWhereUniqueInput>;
  @Field(() => TaskUpdateWithoutAssignedInput, { nullable: false })
  data!: InstanceType<typeof TaskUpdateWithoutAssignedInput>;
}

@InputType()
export class TaskUpdateWithWhereUniqueWithoutColumnInput {
  @Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof TaskWhereUniqueInput>;
  @Field(() => TaskUpdateWithoutColumnInput, { nullable: false })
  data!: InstanceType<typeof TaskUpdateWithoutColumnInput>;
}

@InputType()
export class TaskUpdateWithoutAssignedInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  ponctuation?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => EnumTaskStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumTaskStatusFieldUpdateOperationsInput>;
  @Field(() => ColumnUpdateOneRequiredWithoutTasksInput, { nullable: true })
  column?: InstanceType<typeof ColumnUpdateOneRequiredWithoutTasksInput>;
}

@InputType()
export class TaskUpdateWithoutColumnInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  ponctuation?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => EnumTaskStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumTaskStatusFieldUpdateOperationsInput>;
  @Field(() => UserUpdateOneWithoutTasksInput, { nullable: true })
  assigned?: InstanceType<typeof UserUpdateOneWithoutTasksInput>;
}

@InputType()
export class TaskUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  ponctuation?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => EnumTaskStatusFieldUpdateOperationsInput, { nullable: true })
  status?: InstanceType<typeof EnumTaskStatusFieldUpdateOperationsInput>;
  @Field(() => ColumnUpdateOneRequiredWithoutTasksInput, { nullable: true })
  column?: InstanceType<typeof ColumnUpdateOneRequiredWithoutTasksInput>;
  @Field(() => UserUpdateOneWithoutTasksInput, { nullable: true })
  assigned?: InstanceType<typeof UserUpdateOneWithoutTasksInput>;
}

@InputType()
export class TaskUpsertWithWhereUniqueWithoutAssignedInput {
  @Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof TaskWhereUniqueInput>;
  @Field(() => TaskUpdateWithoutAssignedInput, { nullable: false })
  update!: InstanceType<typeof TaskUpdateWithoutAssignedInput>;
  @Field(() => TaskCreateWithoutAssignedInput, { nullable: false })
  create!: InstanceType<typeof TaskCreateWithoutAssignedInput>;
}

@InputType()
export class TaskUpsertWithWhereUniqueWithoutColumnInput {
  @Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof TaskWhereUniqueInput>;
  @Field(() => TaskUpdateWithoutColumnInput, { nullable: false })
  update!: InstanceType<typeof TaskUpdateWithoutColumnInput>;
  @Field(() => TaskCreateWithoutColumnInput, { nullable: false })
  create!: InstanceType<typeof TaskCreateWithoutColumnInput>;
}

@InputType()
export class TaskWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
}

@InputType()
export class TaskWhereInput {
  @Field(() => [TaskWhereInput], { nullable: true })
  AND?: Array<TaskWhereInput>;
  @Field(() => [TaskWhereInput], { nullable: true })
  OR?: Array<TaskWhereInput>;
  @Field(() => [TaskWhereInput], { nullable: true })
  NOT?: Array<TaskWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  title?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  description?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  ponctuation?: InstanceType<typeof IntFilter>;
  @Field(() => EnumTaskStatusFilter, { nullable: true })
  status?: InstanceType<typeof EnumTaskStatusFilter>;
  @Field(() => ColumnRelationFilter, { nullable: true })
  column?: InstanceType<typeof ColumnRelationFilter>;
  @Field(() => StringFilter, { nullable: true })
  columnId?: InstanceType<typeof StringFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  assigned?: InstanceType<typeof UserRelationFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  assignedId?: InstanceType<typeof StringNullableFilter>;
}

@ObjectType()
export class Task {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false, defaultValue: 'New task' })
  title!: string;
  @Field(() => String, { nullable: false, defaultValue: '' })
  description!: string;
  @Field(() => Int, { nullable: false, defaultValue: 0 })
  ponctuation!: number;
  @Field(() => TaskStatus, { nullable: false, defaultValue: 'ACTIVE' })
  status!: keyof typeof TaskStatus;
  @Field(() => Column, { nullable: false })
  column?: InstanceType<typeof Column>;
  @Field(() => String, { nullable: false })
  columnId!: string;
  @Field(() => User, { nullable: true })
  assigned?: InstanceType<typeof User>;
  @Field(() => String, { nullable: true })
  assignedId!: string | null;
}

@ArgsType()
export class UpdateManyTaskArgs {
  @Field(() => TaskUpdateManyMutationInput, { nullable: false })
  data!: InstanceType<typeof TaskUpdateManyMutationInput>;
  @Field(() => TaskWhereInput, { nullable: true })
  where?: InstanceType<typeof TaskWhereInput>;
}

@ArgsType()
export class UpdateOneTaskArgs {
  @Field(() => TaskUpdateInput, { nullable: false })
  data!: InstanceType<typeof TaskUpdateInput>;
  @Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof TaskWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneTaskArgs {
  @Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof TaskWhereUniqueInput>;
  @Field(() => TaskCreateInput, { nullable: false })
  create!: InstanceType<typeof TaskCreateInput>;
  @Field(() => TaskUpdateInput, { nullable: false })
  update!: InstanceType<typeof TaskUpdateInput>;
}

@ObjectType()
export class AggregateUser {
  @Field(() => UserCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UserCountAggregate>;
  @Field(() => UserCountAggregate, { nullable: true })
  count?: InstanceType<typeof UserCountAggregate>;
  @Field(() => UserMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UserMinAggregate>;
  @Field(() => UserMinAggregate, { nullable: true })
  min?: InstanceType<typeof UserMinAggregate>;
  @Field(() => UserMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UserMaxAggregate>;
  @Field(() => UserMaxAggregate, { nullable: true })
  max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
  @Field(() => [UserCreateManyInput], { nullable: false })
  data!: Array<UserCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
  @Field(() => UserCreateInput, { nullable: false })
  data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
  @Field(() => UserWhereInput, { nullable: true })
  where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserArgs {
  @Field(() => UserWhereInput, { nullable: true })
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByInput], { nullable: true })
  orderBy?: Array<UserOrderByInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
  @Field(() => UserWhereInput, { nullable: true })
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByInput], { nullable: true })
  orderBy?: Array<UserOrderByInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
  @Field(() => UserUpdateManyMutationInput, { nullable: false })
  data!: InstanceType<typeof UserUpdateManyMutationInput>;
  @Field(() => UserWhereInput, { nullable: true })
  where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
  @Field(() => UserUpdateInput, { nullable: false })
  data!: InstanceType<typeof UserUpdateInput>;
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => UserCreateInput, { nullable: false })
  create!: InstanceType<typeof UserCreateInput>;
  @Field(() => UserUpdateInput, { nullable: false })
  update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
  @Field(() => UserWhereInput, { nullable: true })
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByInput], { nullable: true })
  orderBy?: Array<UserOrderByInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => UserCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserCountAggregateInput>;
  @Field(() => UserMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserMinAggregateInput>;
  @Field(() => UserMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  email?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  admin?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class UserCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  email!: number;
  @Field(() => Int, { nullable: false })
  name!: number;
  @Field(() => Int, { nullable: false })
  admin!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class UserCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Boolean, { nullable: false })
  admin!: boolean;
}

@InputType()
export class UserCreateNestedManyWithoutBoardsInput {
  @Field(() => [UserCreateWithoutBoardsInput], { nullable: true })
  create?: Array<UserCreateWithoutBoardsInput>;
  @Field(() => [UserCreateOrConnectWithoutBoardsInput], { nullable: true })
  connectOrCreate?: Array<UserCreateOrConnectWithoutBoardsInput>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  connect?: Array<UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutTasksInput {
  @Field(() => UserCreateWithoutTasksInput, { nullable: true })
  create?: InstanceType<typeof UserCreateWithoutTasksInput>;
  @Field(() => UserCreateOrConnectWithoutTasksInput, { nullable: true })
  connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutTasksInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateOrConnectWithoutBoardsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => UserCreateWithoutBoardsInput, { nullable: false })
  create!: InstanceType<typeof UserCreateWithoutBoardsInput>;
}

@InputType()
export class UserCreateOrConnectWithoutTasksInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => UserCreateWithoutTasksInput, { nullable: false })
  create!: InstanceType<typeof UserCreateWithoutTasksInput>;
}

@InputType()
export class UserCreateWithoutBoardsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Boolean, { nullable: false })
  admin!: boolean;
  @Field(() => TaskCreateNestedManyWithoutAssignedInput, { nullable: true })
  tasks?: InstanceType<typeof TaskCreateNestedManyWithoutAssignedInput>;
}

@InputType()
export class UserCreateWithoutTasksInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Boolean, { nullable: false })
  admin!: boolean;
  @Field(() => BoardCreateNestedManyWithoutMembersInput, { nullable: true })
  boards?: InstanceType<typeof BoardCreateNestedManyWithoutMembersInput>;
}

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Boolean, { nullable: false })
  admin!: boolean;
  @Field(() => TaskCreateNestedManyWithoutAssignedInput, { nullable: true })
  tasks?: InstanceType<typeof TaskCreateNestedManyWithoutAssignedInput>;
  @Field(() => BoardCreateNestedManyWithoutMembersInput, { nullable: true })
  boards?: InstanceType<typeof BoardCreateNestedManyWithoutMembersInput>;
}

@ArgsType()
export class UserGroupByArgs {
  @Field(() => UserWhereInput, { nullable: true })
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByInput], { nullable: true })
  orderBy?: Array<UserOrderByInput>;
  @Field(() => [UserScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof UserScalarFieldEnum>;
  @Field(() => UserScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => UserCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserCountAggregateInput>;
  @Field(() => UserMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserMinAggregateInput>;
  @Field(() => UserMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Boolean, { nullable: false })
  admin!: boolean;
  @Field(() => UserCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UserCountAggregate>;
  @Field(() => UserMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UserMinAggregate>;
  @Field(() => UserMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserListRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  every?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereInput, { nullable: true })
  some?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereInput, { nullable: true })
  none?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  email?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  admin?: true;
}

@ObjectType()
export class UserMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Boolean, { nullable: true })
  admin?: boolean;
}

@InputType()
export class UserMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  email?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  admin?: true;
}

@ObjectType()
export class UserMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Boolean, { nullable: true })
  admin?: boolean;
}

@InputType()
export class UserOrderByInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  admin?: keyof typeof SortOrder;
}

@InputType()
export class UserRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  is?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereInput, { nullable: true })
  isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UserScalarWhereWithAggregatesInput>;
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UserScalarWhereWithAggregatesInput>;
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UserScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  name?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  admin?: InstanceType<typeof BoolWithAggregatesFilter>;
}

@InputType()
export class UserScalarWhereInput {
  @Field(() => [UserScalarWhereInput], { nullable: true })
  AND?: Array<UserScalarWhereInput>;
  @Field(() => [UserScalarWhereInput], { nullable: true })
  OR?: Array<UserScalarWhereInput>;
  @Field(() => [UserScalarWhereInput], { nullable: true })
  NOT?: Array<UserScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  email?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  name?: InstanceType<typeof StringNullableFilter>;
  @Field(() => BoolFilter, { nullable: true })
  admin?: InstanceType<typeof BoolFilter>;
}

@InputType()
export class UserUncheckedCreateWithoutBoardsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Boolean, { nullable: false })
  admin!: boolean;
  @Field(() => TaskUncheckedCreateNestedManyWithoutAssignedInput, {
    nullable: true,
  })
  tasks?: InstanceType<
    typeof TaskUncheckedCreateNestedManyWithoutAssignedInput
  >;
}

@InputType()
export class UserUncheckedCreateWithoutTasksInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Boolean, { nullable: false })
  admin!: boolean;
}

@InputType()
export class UserUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Boolean, { nullable: false })
  admin!: boolean;
  @Field(() => TaskUncheckedCreateNestedManyWithoutAssignedInput, {
    nullable: true,
  })
  tasks?: InstanceType<
    typeof TaskUncheckedCreateNestedManyWithoutAssignedInput
  >;
}

@InputType()
export class UserUncheckedUpdateManyWithoutMembersInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  admin?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  admin?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutBoardsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  admin?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => TaskUncheckedUpdateManyWithoutAssignedInput, { nullable: true })
  tasks?: InstanceType<typeof TaskUncheckedUpdateManyWithoutAssignedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutTasksInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  admin?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  admin?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => TaskUncheckedUpdateManyWithoutAssignedInput, { nullable: true })
  tasks?: InstanceType<typeof TaskUncheckedUpdateManyWithoutAssignedInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  admin?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateManyWithWhereWithoutBoardsInput {
  @Field(() => UserScalarWhereInput, { nullable: false })
  where!: InstanceType<typeof UserScalarWhereInput>;
  @Field(() => UserUpdateManyMutationInput, { nullable: false })
  data!: InstanceType<typeof UserUpdateManyMutationInput>;
}

@InputType()
export class UserUpdateManyWithoutBoardsInput {
  @Field(() => [UserCreateWithoutBoardsInput], { nullable: true })
  create?: Array<UserCreateWithoutBoardsInput>;
  @Field(() => [UserCreateOrConnectWithoutBoardsInput], { nullable: true })
  connectOrCreate?: Array<UserCreateOrConnectWithoutBoardsInput>;
  @Field(() => [UserUpsertWithWhereUniqueWithoutBoardsInput], {
    nullable: true,
  })
  upsert?: Array<UserUpsertWithWhereUniqueWithoutBoardsInput>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  connect?: Array<UserWhereUniqueInput>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  set?: Array<UserWhereUniqueInput>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  disconnect?: Array<UserWhereUniqueInput>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  delete?: Array<UserWhereUniqueInput>;
  @Field(() => [UserUpdateWithWhereUniqueWithoutBoardsInput], {
    nullable: true,
  })
  update?: Array<UserUpdateWithWhereUniqueWithoutBoardsInput>;
  @Field(() => [UserUpdateManyWithWhereWithoutBoardsInput], { nullable: true })
  updateMany?: Array<UserUpdateManyWithWhereWithoutBoardsInput>;
  @Field(() => [UserScalarWhereInput], { nullable: true })
  deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUpdateOneWithoutTasksInput {
  @Field(() => UserCreateWithoutTasksInput, { nullable: true })
  create?: InstanceType<typeof UserCreateWithoutTasksInput>;
  @Field(() => UserCreateOrConnectWithoutTasksInput, { nullable: true })
  connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutTasksInput>;
  @Field(() => UserUpsertWithoutTasksInput, { nullable: true })
  upsert?: InstanceType<typeof UserUpsertWithoutTasksInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;
  @Field(() => Boolean, { nullable: true })
  delete?: boolean;
  @Field(() => UserUpdateWithoutTasksInput, { nullable: true })
  update?: InstanceType<typeof UserUpdateWithoutTasksInput>;
}

@InputType()
export class UserUpdateWithWhereUniqueWithoutBoardsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => UserUpdateWithoutBoardsInput, { nullable: false })
  data!: InstanceType<typeof UserUpdateWithoutBoardsInput>;
}

@InputType()
export class UserUpdateWithoutBoardsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  admin?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => TaskUpdateManyWithoutAssignedInput, { nullable: true })
  tasks?: InstanceType<typeof TaskUpdateManyWithoutAssignedInput>;
}

@InputType()
export class UserUpdateWithoutTasksInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  admin?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => BoardUpdateManyWithoutMembersInput, { nullable: true })
  boards?: InstanceType<typeof BoardUpdateManyWithoutMembersInput>;
}

@InputType()
export class UserUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  admin?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => TaskUpdateManyWithoutAssignedInput, { nullable: true })
  tasks?: InstanceType<typeof TaskUpdateManyWithoutAssignedInput>;
  @Field(() => BoardUpdateManyWithoutMembersInput, { nullable: true })
  boards?: InstanceType<typeof BoardUpdateManyWithoutMembersInput>;
}

@InputType()
export class UserUpsertWithWhereUniqueWithoutBoardsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => UserUpdateWithoutBoardsInput, { nullable: false })
  update!: InstanceType<typeof UserUpdateWithoutBoardsInput>;
  @Field(() => UserCreateWithoutBoardsInput, { nullable: false })
  create!: InstanceType<typeof UserCreateWithoutBoardsInput>;
}

@InputType()
export class UserUpsertWithoutTasksInput {
  @Field(() => UserUpdateWithoutTasksInput, { nullable: false })
  update!: InstanceType<typeof UserUpdateWithoutTasksInput>;
  @Field(() => UserCreateWithoutTasksInput, { nullable: false })
  create!: InstanceType<typeof UserCreateWithoutTasksInput>;
}

@InputType()
export class UserWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  email?: string;
}

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>;
  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>;
  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  email?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  name?: InstanceType<typeof StringNullableFilter>;
  @Field(() => BoolFilter, { nullable: true })
  admin?: InstanceType<typeof BoolFilter>;
  @Field(() => TaskListRelationFilter, { nullable: true })
  tasks?: InstanceType<typeof TaskListRelationFilter>;
  @Field(() => BoardListRelationFilter, { nullable: true })
  boards?: InstanceType<typeof BoardListRelationFilter>;
}

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: true })
  name!: string | null;
  @Field(() => Boolean, { nullable: false })
  admin!: boolean;
  @Field(() => [Task], { nullable: true })
  tasks?: Array<Task>;
  @Field(() => [Board], { nullable: true })
  boards?: Array<Board>;
}
