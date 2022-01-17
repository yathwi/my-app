import React from "react";

class Hero extends React.Component {
    render() {
      return (
        // 背景色を変える、タイトルを２行にかえる    
      <div className="flex bg-bg-green text-white py-10">
        <div className="w-2/4  my-auto ml-32">
            <p className="text-4xl font-bold">メインタイトル</p>
            <p className="pt-5 text-3xl ">サブタイトル</p>
        </div>
        <div className="w-2/4">
            <img className="" src="./hero.png" alt="hero" className="grid justify-items-end " />
        </div>
      </div>
        
      );
    }
  }
  
  export default Hero;