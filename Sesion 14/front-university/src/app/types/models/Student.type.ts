import { Course } from "./Course.type"

export type Student = {
  id: number,
  firstName: string,
  lastName: string,
  dob: Date,
  courses: Course[]
}
