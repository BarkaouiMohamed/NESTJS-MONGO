//Schema is a definition of the data that we are going to save in our database
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
//this is gonna be a combination of the user we've just defined as well as the union 
// of the document from mongoose it self
export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop()
  userId: string;

  @Prop()
  email: string;

  @Prop()
  age: number;

  @Prop([String])
  favoriteFoods: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
