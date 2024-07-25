import mongoose, { type InferSchemaType } from 'mongoose';
declare const semesterSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    term: string;
    year: number;
    active: boolean;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    term: string;
    year: number;
    active: boolean;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    term: string;
    year: number;
    active: boolean;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export declare const SemesterModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    term: string;
    year: number;
    active: boolean;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    term: string;
    year: number;
    active: boolean;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    term: string;
    year: number;
    active: boolean;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    term: string;
    year: number;
    active: boolean;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    term: string;
    year: number;
    active: boolean;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    term: string;
    year: number;
    active: boolean;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export type SemesterType = InferSchemaType<typeof semesterSchema>;
export {};
//# sourceMappingURL=schedule.d.ts.map