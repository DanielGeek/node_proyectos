'use strict'

const connectDB = require('./db')
const { ObjectId } = require('mongodb')

module.exports = {
  createCourse: async (root, { input }) => {
    const defaults = {
      teacher: '',
      topic: ''
    }

    const newCourse = Object.assign(defaults, input)
    let db
    let course
    try {
      db = await connectDB()
      course = await db.collection('courses').insertOne(newCourse)
      newCourse._id = course.insertedId
    } catch (error) {
      console.log(error)
    }
    return newCourse
  },
  createStudent: async (root, { input }) => {
    let db
    let student
    try {
      db = await connectDB()
      student = await db.collection('students').insertOne(input)
      input._id = student.insertedId
    } catch (error) {
      console.log(error)
    }
    return input
  },
  editCourse: async (root, { _id, input }) => {
    let db
    let course

    try {
      db = await connectDB()
      await db.collection('courses').updateOne(
        { _id: ObjectId(_id) },
        { $set: input }
      )
      course = await db.collection('courses').findOne(
        { _id: ObjectId(_id) }
      )
    } catch (error) {
      console.error(error)
    }

    return course
  },
  editStudent: async (root, { _id, input }) => {
    let db
    let student

    try {
      db = await connectDB()
      await db.collection('students').updateOne(
        { _id: ObjectId(_id) },
        { $set: input }
      )
      student = await db.collection('students').findOne(
        { _id: ObjectId(_id) }
      )
    } catch (error) {
      console.error(error)
    }

    return student
  },
  addPeople: async (root, { courseID, personID }) => {
    let db
    let person
    let course

    try {
      db = await connectDB()
      course = await db.collection('courses').findOne(
        { _id: ObjectId(courseID) }
      )
      person = await db.collection('students').findOne(
        { _id: ObjectId(personID) }
      )

      if (!course || !person) throw new Error("The person or course don't exist")

      await db.collection('courses').updateOne(
        { _id: ObjectId(courseID) },
        { $addToSet: { people: ObjectId(personID) } }
      )
    } catch (error) {
      console.log(error)
    }

    return course
  }

}
