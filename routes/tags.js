import Router from 'koa-router'

import { Tag } from '../models'
import { General } from '../utils'

export const tags = Router()

/** 
 * @api {get} /api/tags/ Get all tags
 * @apiGroup Tag 
 * @apiSuccess (200) {object[]} void Array contains all tags
 */
tags.get('/', async (ctx) => {
  try {
    const data = await Tag.findAll()

    General.simpleSend(ctx, data)
  } catch (err) {
    General.logError(ctx, err)
  }
})

/** 
 * @api {put} /api/tags/ Create a tag
 * @apiGroup Tag 
 * @apiSuccess (200) {object} void The created tag
 */
tags.put('/', async (ctx) => {
  try {
    const { content, user_id } = ctx.request.body
    const data = await Tag.create({ content, user_id })

    General.simpleSend(ctx, data)
  } catch (err) {
    General.logError(ctx, err)
  }
})

/** 
 * @api {delete} /api/tags/:id Delete a tag
 * @apiGroup Tag 
 * @apiSuccess (200) {void} void void
 */
tags.delete('/:id', async (ctx) => {
  try {
    await Tag.destroy({ 
      where: { id: ctx.params.id }
    })
    ctx.status = 200
  } catch (err) {
    General.logError(ctx, err)
  }
})