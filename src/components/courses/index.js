import React from 'react';
import CourseTable from './courseTable.js';
import CourseForm from './courseForm.js';

class Courses extends React.Component {

    constructor() {
        super();
        this.state = {
            courses: [
                { id: 1, courseName: 'learn js', author: "Nitesh", language: "JavaScript", length: 10, },
                { id: 2, courseName: 'learn java', author: "bell", language: "go", length: 20, },
                { id: 3, courseName: 'zxy', author: "xyz", language: "python", length: 30, }
            ],
            showCourseForm: false,
            showDetails: true,
            courseBeforEdit: {},
            formHeading: 'Add Course',
            currentEvent: 'add', // edit

        }
    }
    editBtnClicked = (course) => {
        this.setState({ showCourseForm: true, showDetails: false, courseBeforEdit: course, formHeading: 'Edit Course', currentEvent: 'edit' });
    }
    addBtnClicked = () => {

        this.setState({ showCourseForm: true, showDetails: false, formHeading: 'Add New Course', currentEvent: 'add', courseBeforEdit: {} });
    }
    backBtnClicked = () => {
        this.setState({ showCourseForm: false, showDetails: true });

    }
    handleFormSubmit = async (event) => {

        event.preventDefault();
        const courseName = event.target[0].value;
        const author = event.target[1].value;
        const language = event.target[2].value;
        const length = event.target[3].value;



        // alert(name+'   '+email+"   "+mobile);
        if (this.state.currentEvent === 'edit') {
            const _id = this.state.courseBeforEdit.id;
            //   const res = await fetch('http://localhost:6789/course', {
            //     method: 'put',
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({_id, courseName, author, language, length}),
            //   });
            const res = { ok: true };
            if (res.ok) {
                //  const data = await res.json();
                const courses = this.state.courses;
                courses.map((course) => {
                    if (course.id === _id) {
                        course.courseName = courseName;
                        course.author = author;
                        course.language = language;
                        course.length = length;
                    }
                });
                this.setState({ showCourseForm: false, showDetails: true, courses: courses });
                alert('Record updated Successfully');
            } else {
                alert('error in updating record');
            }
        } else if (this.state.currentEvent === 'add') {
            //   const res = await fetch('http://localhost:6789/course', {
            //   method: 'post',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify({courseName,language,author,length}),
            // });
            const res = { ok: 1 };
            if (res.ok) {
                // const data = await res.json();
                // const id = data.insertId;
                const id = Math.max.apply(Math, this.state.courses.map(function (course) { return course.id; })) + 1;
                
                const newCourse = { id, courseName, author, language, length };
                const { courses } = this.state;
                courses.push(newCourse);
                this.setState({ showCourseForm: false, showDetails: true, courses: courses });
                alert('Record added Successfully');
            } else {
                alert('error in adding record');
            }
        }
    }
    //   async componentDidMount(){
    //     const coursess = await fetch('http://localhost:6789/courses');
    //     const jsonCourses = await courses.json();
    //     this.setState({courses:jsonCourses});
    //   }


    render() {

        return (
            <div className="row">

                {this.state.showDetails && <CourseTable courses={this.state.courses} editBtnClicked={(course) => this.editBtnClicked(course)} addBtnClicked={() => this.addBtnClicked()} />

                }
                {this.state.showCourseForm && <CourseForm course={this.state.courseBeforEdit} heading={this.state.formHeading} backBtnClicked={() => { this.backBtnClicked() }} handleSubmit={(event) => { this.handleFormSubmit(event) }} />}


            </div>
        );
    }
}
export default Courses;
