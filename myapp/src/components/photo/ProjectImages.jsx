import { Component } from "react";

const images = require.context('./Images', true);

 function ProjectImages(){
     imgs={
        example_logo,
        wedding
    };

    const img=images(wedding.webp);

        return (
            <div>
                <p>{this.imgs}</p>
            </div>
        )
    }




//  const imgs={
//     "img1": images('./wedding.webp'),
//     "img2": images('./wedding-photo-3.jpg'),
//     }

export default ProjectImages;
// export default imgs;
export {example_logo};
