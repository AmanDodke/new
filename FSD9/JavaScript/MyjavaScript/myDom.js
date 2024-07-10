

//      const first =document.querySelector('h2')
//         const name1= prompt('enter your name')
//         first.innerText=`hello `+ name1;

// const arr=['https://images.unsplash.com/photo-1717318491193-8320418c40cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
//             'https://images.unsplash.com/photo-1703023682845-705a990194ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D',
//             'https://images.unsplash.com/photo-1716094978938-3909e20d05e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D'
// ]
   
//    const image= document.querySelector('img')
//    index = 0 ;
//    function loader(){
//           image.setAttribute('src',arr[index])
//             index= (index+1)%arr.length;
//    }
   // setInterval(loader,2000)

   // adding element in document 
    const container = document.getElementById('section')
   const heading =document.createElement('h1')
    heading.innerText=`ha bahi kya haal hae`
    const heading2 =document.createElement("h2")
    heading2.innerText=` Sab badiya `
    // how to add or concadinate
    container.append(heading,heading2)
       


//   const container = document.getElementById('section')
//    const designation= document.getElementById('designation')
//    let user = `user`
//    user =prompt('enter your designation',user)

//remove elements from the dom 