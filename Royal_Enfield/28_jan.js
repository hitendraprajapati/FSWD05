// var age = prompt("enter your age");
//       if(age <= 18)
//          document.write(" <h1>you are a child</h1>");
//       if(age <= 30 && age > 18)
//           document.write("<h1>you are an adult</h1>");
//       if(age > 30)
//           document.write("<h1>you are senior citizen</h1>");
       // function declaration 
      function display_age()
      {
            var age = prompt("enter your age");
            if(age <= 18)
               alert(" <h1>you are a child</h1>");
            if(age <= 30 && age > 18)
                alert("<h1>you are an adult</h1>");
            if(age > 30)
                alert("<h1>you are senior citizen</h1>");      
      }  
      // function call or invoking the function
      // display_age(); 
      
    // let names = ['nikita' , 'aparna', 'Rahul', 'satish'];
    //   console.log(names);
    //   console.log(names[3]); 

    //  function add(a,b){
    //   return(a+b);
    //  } 
    //  var a = parseInt(prompt("enter number 1"));
    //  var b = parseInt(prompt("enter number 2"));
 
    // document.write("Addition is " +" " + add(a,b));// parameters
    // display_age();

    let names = ['nikita' , 'aparna', 'Rahul', 'satish']; // index
    console.log(names);
    console.log(names[3]);
    let nums = ['agarwal' , 'sharma' , 90, 100 , 1000 ];

    document.write(" " + names.concat(nums));
    console.log(names);// immutable

    // assignment-2 create a JS file , implement all in-build functions inside array class

    nums.fill(90,1,3);

    // loops 
    for(let i=0; i<nums.length ; i++)
    {
      document.write("<br> element" + i + nums[i]);
    }

    nums.forEach(function display(e){
      document.write("<br>" +e)
    });

    // callback is a function passed as a parameter to another function 
    
    function disp()
    {
      // function body
    }
    var output = (a,b) => {
      return(a+b);
    }
    document.write(output(4,5));

    function add(a,b)
    {
      return(a+b);
    }

    document.write("reversed " + nums.reverse());
    document.write(nums);
    nums.filter((f) =>{
      if(f>=100)
      document.write(f);
    })

    nums.map((n) => {
      document.write(2*n);
    })

    var arr = [12, 34, 35,65,15];
    document.write("<br>shify method" +arr.shift());
    arr.push(900);
    document.write("after push <br> "+ arr);
    document.write("<br> after pop"+ arr.pop());

