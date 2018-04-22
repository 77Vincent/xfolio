import Router from 'koa-router'

import { Course } from '../models'
import { db, fn } from '../utils'
import c from '../config'

export const courses = Router()

const filters = ['id', 'user_id']

/** 
 * @api {get} /api/courses Get all courses
 * @apiGroup Courses 
 * @apiParam (Query String) {string} [id] Filtered by the major ID
 * @apiParam (Query String) {string} [user_id] Filtered by the creator's id
 * @apiParam (Query String) {string} [label] Search by course name
 * @apiSuccess (200) {object[]} void Array contains all course objects
 */
courses.get('/', async (ctx) => {
  try {
    const qs = fn.parseQuerystring(ctx.request.querystring)
    const filter = fn.objToObjGroupsInArr(qs, filters)
    const page = !isNaN(qs.page) && qs.page > 0 ? qs.page : 1

    // this part is for majors filtering
    if (qs.majors) {
      const courses_id = await db.model('course_major').findAll({
        where: { major_id: qs.majors.split(',') }
      })
      filter.push({ id: courses_id.map(item => item.dataValues.course_id) })
    }

    // Search
    if (qs.label) {
      filter.push({
        label: { $like: `%${decodeURI(qs.label)}%` }
      })
    }

    const data = await Course.findAll({
      limit: c.queryLimit,
      offset: fn.getOffset(page, c.queryLimit),
      where: { $and: filter }
    })
    fn.simpleSend(ctx, data)
  } catch (err) {
    fn.logError(ctx, err)
  }
})

/** 
 * @api {post} /api/courses/:id Update a course
 * @apiGroup Courses 
 * @apiParam {string} [label] The course name
 * @apiParam {string} [description] The course description
 * @apiParamExample {json} Request-example:
 *  {
 *    "label": "course name",
 *    "description": "course description" 
 *  }
 * @apiSuccess (200) {object} void The updated course object
 */
courses.post('/:id', async (ctx) => {
  try {
    const { id } = ctx.params
    const { label, description } = ctx.request.body
    let course = await Course.findOne({ where: { id } })
    course = await course.update({ label, description })

    ctx.status = 200
    ctx.body = fn.prettyJSON(course) 
  } catch (err) {
    fn.logError(ctx, err)
  }
})

/** 
 * @api {delete} /api/courses/:id Delete a course
 * @apiGroup Courses 
 * @apiSuccess (200) {void} void void
 */
courses.delete('/:id', async (ctx) => {
  try {
    await Course.destroy({ where: { id: ctx.params.id } })
    ctx.status = 200
  } catch (err) {
    fn.logError(ctx, err)
  }
})
