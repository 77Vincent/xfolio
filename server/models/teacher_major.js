import sequelize from './sequelize.js';
import Sequelize from 'sequelize';
const Teacher_Major = sequelize.define('teacher_major', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    price:{
        type: Sequelize.INTEGER
    },
    major_id: {
        type: Sequelize.INTEGER
    },
    teacher_id: {
        type: Sequelize.INTEGER
    }
},{
    tableName: 'Teacher_Major'
});
// Major.hasOne(Teacher_Major,{as:'teacher_major',foreignKey:'major_id'});
// Teacher_Major.belongsTo(Major, {as:'major',foreignKey:'major_id'});

// Teacher_Major.belongsTo(Teacher, {as:'teacher',foreignKey:'teacher_id'});
// Teacher.hasOne(Teacher_Major,{as:'teacher_major',foreignKey:'teacher_id'});
export default Teacher_Major;