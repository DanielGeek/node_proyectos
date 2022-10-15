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
    _id: 'anyid',
    title: 'My title 2',
    teacher: 'My teacher',
    description: 'A description',
    topic: 'programation'
  },
  {
    _id: 'anyid',
    title: 'My title 3',
    teacher: 'My teacher',
    description: 'A description',
    topic: 'programation'
  }
]

module.exports = {
  getCourses: () => {
    return courses
  }
}
