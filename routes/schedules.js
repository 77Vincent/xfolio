import Router from 'koa-router'

import { Schedule, Class } from '../models'
import { General } from '../utils'
import c from '../config'

export const schedules = Router()

/** 
 * @api {get} /api/schedules Get all schedules
 * @apiGroup Schedules 
 * @apiParam (Query String) {string} [teacher_id] Filtered by teacher ID
 * @apiParam (Query String) {string} [student_id] Filtered by student ID
 * @apiParam (Query String) {boolean} [finished=0,1] Filtered by if the schedule is finished 
 * @apiParam (Query String) {integer} [page=1] Pagination
 * @apiSuccess (200) {object[]} void Array contains all schedules
 */
schedules.get('/', async (ctx) => {
  try {
    const filters = ['teacher_id', 'student_id', 'finished']
    const qs = General.parseQuerystring(ctx.request.querystring)
    const filter = General.objToObjGroupsInArr(qs, filters)

    const data = await Schedule.findAll({
      limit: c.queryLimit,
      offset: General.getOffset(qs.page, c.queryLimit),
      where: { $and: filter }
    })

    General.simpleSend(ctx, data)
  } catch (err) {
    General.logError(ctx, err)
  }
})

/** 
 * @api {get} /api/schedules/:id Get a schedule
 * @apiGroup Schedules 
 * @apiSuccess (200) {object} void A schedule
 */
schedules.get('/:id', async (ctx) => {
  try {
    const { id } = ctx.params
    const data = await Schedule.findOne({ where: { id } })
    const classes = await Class.findAll({ where: { schedule_id: id } })

    data.dataValues.classes = classes.length
    data.dataValues.classes_url = General.getDomain(`/api/classes?teacher_id=${id}`) 

    General.simpleSend(ctx, data)
  } catch (err) {
    General.logError(ctx, err)
  }
})

/** 
 * @api {put} /api/schedules Create a schedule
 * @apiGroup Schedules 
 * @apiParam {string} [label] The schedule name
 * @apiParam {integer} teacher_id The teacher user ID
 * @apiParam {integer} student_id The student user ID
 * @apiSuccess (200) {object} void The created schedule 
 */
schedules.put('/', async (ctx) => {
  try {
    const { label, teacher_id, student_id } = ctx.request.body
    const data = await Schedule.create({ label, teacher_id, student_id })

    General.simpleSend(ctx, data)
  } catch (err) {
    General.logError(ctx, err)
  }
})

/** 
 * @api {post} /api/schedules/:id Update a schedule
 * @apiGroup Schedules 
 * @apiParam {string} label The schedule name
 * @apiSuccess (200) {object} void The updated schedule 
 */
schedules.post('/:id', async (ctx) => {
  try {
    const { label } = ctx.request.body
    let data = await Schedule.findOne({ where: { id: ctx.params.id } })
    data = await data.update({ label })

    General.simpleSend(ctx, data)
  } catch (err) {
    General.logError(ctx, err)
  }
})

/** 
 * @api {delete} /api/schedules/:id Delete a schedule
 * @apiGroup Schedule 
 * @apiSuccess (200) {void} void void
 */
schedules.delete('/:id', async (ctx) => {
  try {
    await Schedule.destroy({ where: { id: ctx.params.id } })
    ctx.status = 200
  } catch (err) {
    General.logError(ctx, err)
  }
})
