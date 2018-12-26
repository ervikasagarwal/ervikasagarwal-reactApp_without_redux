
import React,{Component} from 'react';

class CourseForm extends Component {
 
  render(){
        return(
            <div className="row col-sm-12 pt-3">
                    <div className="col-sm-12">
                        <button className="btn btn-primary " onClick={this.props.backBtnClicked}>back</button>
                    </div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 ">
                         <h3 className="pt-2">{this.props.heading}</h3>
                        <form onSubmit={this.props.handleSubmit} className="text-left form " >
                            <label htmlFor="name">Course Name</label>
                            <input type="text" className="form-control" name="courseName" required="required" defaultValue={this.props.course.courseName || ''} />
                            <label htmlFor="author">Author</label>
                            <input type="text" className="form-control " name="author"  required="required"  defaultValue={this.props.course.author || ''} />
                            <label htmlFor="language">Language</label>
                            <input  type="text" className=" form-control" name="language"  required="required"  defaultValue={this.props.course.language || ''} /><br />
                            <label htmlFor="length">Length</label>
                            <input  type="number" className="form-control" name="length"  required="required" defaultValue={this.props.course.length || ''} /><br />
                            <input type="submit" value="submit" className="btn btn-primary form-control"  />
                        </form >
                    </div>
            </div>
        );
  }
}
export default CourseForm;
