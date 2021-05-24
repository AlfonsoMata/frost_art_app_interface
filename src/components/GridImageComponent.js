import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import "./GridImageComponent.css";

export const ImageGrid = (props) => {
    
    const [text, setText] = useState("");

    const breakpoints = {
        default: 3,
        1000: 2,
        700: 1
    }





    return (

        <body>
            <p>Imagenes</p>
            <Masonry breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">

                <div ><img src="https://i.pinimg.com/236x/99/71/c5/9971c513d344181b0949baf24fa703b1.jpg" /></div>
                <div ><img src="https://i.pinimg.com/564x/b8/f4/aa/b8f4aa0980cbc8a75c3e7a481d1b4c23.jpg" /></div>
                <div class="grid-item"><img src="https://i.pinimg.com/564x/3b/c0/1c/3bc01ca7e6bacab49565538f36b53d78.jpg" alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" /></div>

                <div class="grid-item"><img src="https://i.pinimg.com/564x/93/39/4d/93394d174ef6098d66a3ab750a8e6299.jpg" alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" /></div>
                <div class="grid-item"><img src="https://i.pinimg.com/236x/99/71/c5/9971c513d344181b0949baf24fa703b1.jpg" alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" /></div>
                <div class="grid-item"><img src="https://i.pinimg.com/564x/b8/f4/aa/b8f4aa0980cbc8a75c3e7a481d1b4c23.jpg" alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" /></div>
                <div class="grid-item"><img src="https://i.pinimg.com/564x/3b/c0/1c/3bc01ca7e6bacab49565538f36b53d78.jpg" alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" /></div>
                <div class="grid-item"><img src="https://i.pinimg.com/236x/99/71/c5/9971c513d344181b0949baf24fa703b1.jpg" alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" /></div>
                <div class="grid-item"><img src="https://i.pinimg.com/564x/b8/f4/aa/b8f4aa0980cbc8a75c3e7a481d1b4c23.jpg" alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" /></div>
                <div class="grid-item"><img src="https://i.pinimg.com/564x/3b/c0/1c/3bc01ca7e6bacab49565538f36b53d78.jpg" alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" /></div>
                <div class="grid-item"><img src="https://i.pinimg.com/564x/93/39/4d/93394d174ef6098d66a3ab750a8e6299.jpg" alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" /></div>
                <div class="grid-item"><img src="https://i.pinimg.com/236x/99/71/c5/9971c513d344181b0949baf24fa703b1.jpg" alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" /></div>
                <div class="grid-item"><img src="https://i.pinimg.com/564x/b8/f4/aa/b8f4aa0980cbc8a75c3e7a481d1b4c23.jpg" alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" /></div>
                <div class="grid-item"><img src="https://i.pinimg.com/564x/3b/c0/1c/3bc01ca7e6bacab49565538f36b53d78.jpg" alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" /></div>

            </Masonry>
            <div class="grid-container">

            </div>
            {}
        </body>

    );
}


export default ImageGrid;