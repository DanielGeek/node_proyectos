'use strict'

const courses = [
  {
    _id: 'anyid',
    title: 'My title',
    teacher: 'My teacher',
    description: 'A description',
    topic: 'programation'
  },
  {
    _id: 'anyid2',
    title: 'My title 2',
    teacher: 'My teacher',
    description: 'A description',
    topic: 'programation'
  },
  {
    _id: 'anyid3',
    title: 'My title 3',
    teacher: 'My teacher',
    description: 'A description',
    topic: 'programation'
  }
]

module.exports = {
  Query: {
    getCourses: () => {
      return courses
    },
    getCourse: (root, args) => courses.find((course) => course._id === args.id)
  }
}
