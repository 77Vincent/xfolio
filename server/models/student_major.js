import sequelize from './sequelize.js';
import Sequelize from 'sequelize';
const Student_Major = sequelize.define('student_major', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    major_id: {
        type: Sequelize.INTEGER
    },
    student_id: {
        type: Sequelize.INTEGER
    }
},{
    tableName: 'Student_Major'
});

export default Student_Major;


