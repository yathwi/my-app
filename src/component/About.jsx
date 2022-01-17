import React from "react";


class About extends React.Component {
  render() {
    return (
      <div className="">
            <div className="w-auto">
                <img className="mx-10 " src={this.props.image} alt="" />
                <p className="flex justify-center mt-5 ">{this.props.name}</p>
                <p className="flex justify-center mt-5">{this.props.text}</p>
            </div>
      </div>
    );
  }
}

export default About;