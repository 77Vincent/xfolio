import Router from 'koa-router';
import majors from './majors';
import teachers from './teachers';
import users from './users';
import student from './student';
const router = Router();

// routes表示的是路由的嵌套处理
// 学生身份的接口请求
router.use('/api/student', student.routes());

// 老师身份的请求接口
router.use('/api/teacher', teachers.routes());

// user 模块做登陆登出修改密码校验操作
router.use('/api/user', users.routes());

export default router;