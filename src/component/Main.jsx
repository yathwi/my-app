import React from "react";
import About from "./About";
import Skills from "./Skills";
import Values from "./Values";
import Future from "./Future";

class Main extends React.Component {
  render() {
    const aboutList = [
      {
        image:"/about-1.png",
        item: "趣味",
        text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
      },
      {
        image:"/about-2.png",
        item: "好きな食べ物",
        text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
      },
      {
        image:"/about-3.png",
        item: "性格",
        text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
      }
    ];

    return (
      <div className="">
        <section className="bg-cover bg-about-pc">
          <div className="flex justify-center pt-10 text-xl items-center">
            <h2 className="text-2xl font-semibold text-black-base">私について</h2>
            <h3 className="flex-initial ml-4 font-semibold text-primary-dark">ABOUT</h3> 
          </div>  
          <div className="mx-auto max-w-[75%]">
            <div className="flex justify-between items-center ">
                {aboutList.map((aboutItem) => {
                  return(
                  <div className=" p-12">
                    <About 
                    image={aboutItem.image}
                    name={aboutItem.item} 
                    text={aboutItem.text} 
                      />
                  </div>
                    );
                })}
            </div>
          </div>
        </section>
        <Skills />
        <Values />
        <Future />
      </div>
    );
  }
}

export default Main;
