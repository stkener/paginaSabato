import React from "react";

const PublicacionFaceJardin = ({ texto }) => {
    return(
         <div
            dangerouslySetInnerHTML={{
                __html: `<iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fjardinelosoyogui&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                    width="340"
                    height="500"
                    style="border:none;overflow:hidden"
                    scrolling="no"
                    frameborder="0"
                    allowfullscreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>`
            }}
        />
    );
}

export default PublicacionFaceJardin;