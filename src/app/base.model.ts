export interface BaseModel {
  readonly id: string | number; // ! readonly, nos proteje este valor para que NO sea sobrescrito.
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
