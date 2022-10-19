'use strict'

const connectDB = require('./db')
const { ObjectId } = require('mongodb')

module.exports = {
  Course: {
    people: async ({ people }) => {
      let db
      let peopleData
      let ids
      try {
        db = await connectDB()
        ids = people ? people.map(id => ObjectId(id)) : []
        peopleData = ids.length > 0
          ? await db.collection('students').find(
            { _id: { $in: ids } }
          ).toArray()
          : []
      } catch (error) {
        console.log(error)
      }

      return peopleData
    }
  }
}
