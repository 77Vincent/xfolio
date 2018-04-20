import db from '../utils/db.js'
import {
  User,
  Major,
  Role,
  Course,
  Post,
  Picture
} from '../models'

(async () => {
  try {
    await db.dropAllSchemas()
    await db.sync({ force: true })

    await Role.bulkCreate([{ id: 'admin' }, { id: 'teacher' }, { id: 'student' }])
    await Major.bulkCreate([
      { label: '建筑', description: '建筑设计' },
      { label: '景观', description: '景观设计' },
      { label: '室内', description: '室内，装潢设计' },
      { label: '平面', description: '平面，视觉设计' },
      { label: '工业', description: '工业产品设计' },
      { label: '服装', description: '服装设计' },
      { label: 'UI/UX', description: '界面及交互设计' }
    ])
    await User.create({
      password: '000000',
      name: '老师1',
      role_id: 'teacher',
      school: '北京大学',
      title: '建筑师',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
      gender: '1',
      cost: 300,
      country: 'US',
      place: 'online',
      mobilephone: 18811111111,
      email: 'teacher1@xfolio.cn'
    })
    await User.create({
      password: '000000',
      name: '老师2',
      role_id: 'teacher',
      school: '哈佛大学',
      title: '插画师',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
      gender: '0',
      cost: 200,
      province: '31',
      country: 'HK',
      city: '3101',
      place: 'offline',
      mobilephone: 18822222222,
      email: 'teacher2@xfolio.cn'
    })
    await User.create({
      password: '000000',
      name: '老师3',
      role_id: 'teacher',
      school: '耶鲁大学',
      title: '服装设计师',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
      gender: '1',
      place: 'online',
      cost: 400,
      province: '11',
      country: 'AU',
      city: '1101',
      mobilephone: 18833333333,
      email: 'teacher3@xfolio.cn'
    })
    await User.create({
      password: '000000',
      name: '老师4',
      role_id: 'teacher',
      school: 'MIT',
      title: '工业设计师',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
      gender: '0',
      cost: 999,
      province: '45',
      country: 'GB',
      city: '4501',
      mobilephone: 18844444444,
      email: 'teacher4@xfolio.cn'
    })
    await User.create({
      password: '000000',
      name: '学生1',
      role_id: 'student',
      school: '清华大学',
      title: '景观设计师',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
      gender: '1',
      mobilephone: 17711111111,
      province: '45',
      city: '4503',
      email: 'student1@xfolio.cn'
    })
    await Course.bulkCreate([{
      label: 'test course 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
      user_id: 1
    }, {
      label: 'test course 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
      user_id: 1
    }, {
      label: 'test course 3 more',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
      user_id: 2 
    }, {
      label: 'test course 4 not a label',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
      user_id: 2
    }, {
      label: 'test course 5 some more',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
      user_id: 3 
    }, {
      label: 'test course 6 with label',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
      user_id: 3 
    }])
    await Post.bulkCreate([{
      user_id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
    }, {
      user_id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
    }, {
      user_id: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
    }, {
      user_id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
    }, {
      user_id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
    }, {
      user_id: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
    }, {
      user_id: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
    }, {
      user_id: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
    }])
    await Picture.bulkCreate([
      { post_id: 1, url: 'http://url' },
      { post_id: 1, url: 'http://url' },
      { post_id: 1, url: 'http://url' },
      { post_id: 2, url: 'http://url' },
      { post_id: 2, url: 'http://url' },
      { post_id: 2, url: 'http://url' },
      { post_id: 3, url: 'http://url' },
      { post_id: 3, url: 'http://url' },
      { post_id: 4, url: 'http://url' },
      { post_id: 4, url: 'http://url' },
      { post_id: 4, url: 'http://url' },
      { post_id: 5, url: 'http://url' },
      { post_id: 5, url: 'http://url' },
      { post_id: 5, url: 'http://url' },
    ])
    await db.model('follower_following').bulkCreate([
      { follower_id: 1, following_id: 2 },
      { follower_id: 1, following_id: 3 },
      { follower_id: 1, following_id: 4 },
      { follower_id: 2, following_id: 3 },
      { follower_id: 2, following_id: 1 },
      { follower_id: 3, following_id: 4 },
      { follower_id: 3, following_id: 2 },
      { follower_id: 4, following_id: 1 }
    ])
    await db.model('student_teacher').bulkCreate([
      { student_id: 5, teacher_id: 1 },
      { student_id: 5, teacher_id: 2 },
      { student_id: 5, teacher_id: 3 },
      { student_id: 5, teacher_id: 4 }
    ])
    await db.model('user_major').bulkCreate([
      { user_id: 1, major_id: 1 },
      { user_id: 1, major_id: 2 },
      { user_id: 2, major_id: 3 },
      { user_id: 2, major_id: 4 },
      { user_id: 3, major_id: 5 },
      { user_id: 4, major_id: 6 }
    ])
    await db.model('course_major').bulkCreate([
      { course_id: 1, major_id: 1 },
      { course_id: 1, major_id: 2 },
      { course_id: 1, major_id: 3 },
      { course_id: 1, major_id: 4 },
      { course_id: 2, major_id: 3 },
      { course_id: 2, major_id: 6 },
      { course_id: 3, major_id: 3 },
      { course_id: 3, major_id: 5 },
      { course_id: 4, major_id: 4 },
      { course_id: 5, major_id: 5 },
      { course_id: 6, major_id: 6 },
      { course_id: 6, major_id: 1 },
    ])
    db.close()

  } catch (err) {
    console.error('init Error', err)
  }
})()