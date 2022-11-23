function td(elementName,value){
    let res3 = document.createElement(elementName);
    res3.innerHTML = value;
    return res3;
  }
  
  function input(elementName,Attribute,Attrivalue,Id,Idvalue,Attclass,classvalue,placeholdername,placevalue){
    let res2 = document.createElement(elementName);
    res2.setAttribute(Attribute,Attrivalue);
    res2.setAttribute(Id,Idvalue);
    res2.setAttribute(Attclass,classvalue);
    res2.setAttribute(placeholdername,placevalue);
    return res2;
  }
  
  function inputcheckbox(elementName,Attribute,Attrivalue,Id,Idvalue,Attname,attvalue,elevaluename,elevalue,Attclass,classvalue){
    let res4 = document.createElement(elementName);
    res4.setAttribute(Attribute,Attrivalue);
    res4.setAttribute(Id,Idvalue,Attname,attvalue,);
    res4.setAttribute(elevaluename,elevalue,Attclass,classvalue,);
   
    return res4;
  
  }
  function label(elementName,Attribute,Attrivalue,value){
    let res = document.createElement(elementName);
    res.setAttribute(Attribute,Attrivalue);
    res.innerHTML= value;
    return res;
  }
  
  function br(elementName){
    let res5 = document.createElement(elementName) ;
    return res5;
  }
  
  /**************************************************************************************************************** */
  // ***********************************   Front End Code  ************************************************/
  
  
  let div1 = document.createElement("div");
  div1.setAttribute("class","margin");
 
  
  let div2 = document.createElement("div");
  div2.setAttribute("class","row modified d-flex justify-content-between");
 
  
  
  //*********************  Form Section ******************* */
  let div3 = document.createElement("div");
  div3.setAttribute("class","col-sm-12 col-md-12 col-lg-3" ,"id","head1");
  
  
  let form1 = document.createElement("form");
  form1.setAttribute("action","");
  form1.setAttribute("class","mt-3 mb-5 form-style");
  form1.setAttribute("id","form");
  
  let head = document.createElement("h1");
  head.innerHTML = "Form Submission ";
  
  let label1 = label("label","for","fname","FirstName :");
  let input1 = input("input","type","text","id","fname","class","form-control","placeholder","FirstName");
  let br1 = br("br");

  let label2 = label("label","for","lname","LastName : ");
  let input2 = input("input","type","text","id","lname","class","form-control","placeholder","LastName");
  let br2 = br("br");

  let label3 = label("label","for","address","Address :");
  let input3 = input("input","type","text","id","address","class","form-control","placeholder","Address");
  let br3 = br("br");

  let label4 = label("label","for","pincode","Pincode : ");
  let input4 = input("input","type","number","id","pin","class","form-control","placeholder","Pincode");
  let br4 = br("br");

  //*****************************************    Radio ********************************************** */
  let label5 = label("label","for","gender","Gender : ");
  let br5 = br("br");
  let br6 = br("br");
  let span1 =document.createElement("span");
  span1.innerHTML = "  Male :";
  
  let input5 = document.createElement("input");
  input5.setAttribute("type","radio");
  input5.setAttribute("id","gender");
  input5.setAttribute("name","gender");
  input5.setAttribute("value","Male");
  input5.setAttribute("class","gender mb-2 md-2");
  let br7 = br("br");
  
  let span2 =document.createElement("span");
  span2.innerHTML = " Female :";
  
  let input6 = document.createElement("input");
  input6.setAttribute("type","radio");
  input6.setAttribute("id","gender");
  input6.setAttribute("name","gender");
  input6.setAttribute("value","Female");
  input6.setAttribute("class","gender mb-2 md-2");
  let br8 = br("br");
  
  //*****************************************    CheckBox  ********************************************** */
  let label6 = document.createElement("label");
   label6.setAttribute("for","food");
   label6.innerHTML = ` Select the food <span class = "span">(choose at least 2 out of 5 in the option)</span> `
   let br9 = br("br");
  
  let input7  = inputcheckbox("input","type","checkbox","id","vegfood","name","food","value","veg-food","class","food m-2");
  let span3 =document.createElement("span");
  span3.setAttribute("for","vegfood");
  span3.innerHTML = " Veg-food ";
  let br10 = br("br");
  
  let input8  = inputcheckbox("input","type","checkbox","id","nonvegfood","name","food","value","Non-veg-food","class","food m-2");
  let span4 =document.createElement("span");
  span4.setAttribute("for","nonvegfood");
  span4.innerHTML = " Non-veg-food ";
  let br11 = br("br");
  
  let input9  = inputcheckbox("input","type","checkbox","id","biriyani","name","food","value","Biriyani","class","food m-2");
  let span5 =document.createElement("span");
  span5.setAttribute("for","biriyani");
  span5.innerHTML = " Biriyani ";
  let br12 = br("br");
  
  let input10 = inputcheckbox("input","type","checkbox","id","rice","name","food","value","verity-Rice","class","food m-2");
  let span6 =document.createElement("span");
  span6.setAttribute("for","rice");
  span6.innerHTML = " verity-Rice ";
  let br13 = br("br");
  
  let input11 = inputcheckbox("input","type","checkbox","id","fastfood","name","food","value","Fast-food","class","food m-2");
  let span7 =document.createElement("span");
  span7.setAttribute("for","fastfood");
  span7.innerHTML = " Fast-food ";
  let br14 = br("br");
  
  let label7 = label("label","for","state","State : ");
  let input12 = input("input","type","text","id","state","class","form-control","placeholder","State");
  let br15 = br("br");

  let label8 = label("label","for","country","Country :");
  let input13 = input("input","type","text","id","country","class","form-control","placeholder","country");
  let br16 = br("br");

  //*****************************************   Button  ********************************************** */
  let button1 =document.createElement("button");
  button1.setAttribute("type","submit");
  button1.setAttribute("id","submit");
  button1.setAttribute("class","form-control btn btn-secondary");
  button1.innerHTML = "Submit";
  
  //*****************  Table Section ***************/
  
  let div4 = document.createElement("div");
  div4.setAttribute("class","col col-sm-12 col-md-12 col-lg-8","id","head2");

  let head2 = document.createElement("h1");
  head2.innerHTML = "Form DataBase";
  
  let br17 = br("br");
  
  let table1 = document.createElement("table");
  table1.setAttribute("class","table table-striped");
  
  let tablehead = document.createElement("thead");
  tablehead.setAttribute("class","bg-dark text-light");
  
  let tablerow = document.createElement("tr");
  
  let td1 = td("td","FirstName");
  let td2 = td("td","LastName");
  let td3 = td("td","Address");
  let td4 = td("td","Pincode");
  let td5 = td("td","Gender");
  let td6 = td("td","Food");
  let td7 = td("td","State");
  let td8 = td("td","Country");
  
  let tablebody = document.createElement("tbody");
  tablebody.setAttribute("class","tbody");
  tablebody.setAttribute("id","tbody");
  
  
  
  ///************    Append section ****************** */
  
  
  div1.appendChild(div2);
  div2.appendChild(div3);
  div2.appendChild(div4);
  
  div4.appendChild(head2);
  div4.appendChild(table1);
  table1.appendChild(tablehead);
  table1.appendChild(tablebody);
  tablehead.appendChild(tablerow);
  tablerow.appendChild(td1);
  tablerow.appendChild(td2);
  tablerow.appendChild(td3);
  tablerow.appendChild(td4);
  tablerow.appendChild(td5);
  tablerow.appendChild(td6);
  tablerow.appendChild(td7);
  tablerow.appendChild(td8);
  
  div3.appendChild(form1);
  form1.appendChild(head);
  form1.appendChild(label1);
  form1.appendChild(input1);
  form1.appendChild(br1);
  form1.appendChild(label2);
  form1.appendChild(input2);
  form1.appendChild(br2);
  form1.appendChild(label3);
  form1.appendChild(input3);
  form1.appendChild(br3);
  form1.appendChild(label4);
  form1.appendChild(input4);
  form1.appendChild(br4);
  form1.appendChild(label5);
  form1.appendChild(br5);
  form1.appendChild(br6);
  form1.appendChild(span1);
  form1.appendChild(input5);
  form1.appendChild(br7);
  form1.appendChild(span2);
  form1.appendChild(input6);
  form1.appendChild(br8);
  form1.appendChild(label6);
  form1.appendChild(br9);
  form1.appendChild(input7);
  form1.appendChild(span3);
  form1.appendChild(br10);
  form1.appendChild(input8);
  form1.appendChild(span4);
  form1.appendChild(br11);
  form1.appendChild(input9);
  form1.appendChild(span5);
  form1.appendChild(br12);
  form1.appendChild(input10);
  form1.appendChild(span6);
  form1.appendChild(br13);
  form1.appendChild(input11);
  form1.appendChild(span7);
  form1.appendChild(br14);
  form1.appendChild(label7);
  form1.appendChild(input12);
  form1.appendChild(br15);
  form1.appendChild(label8);
  form1.appendChild(input13);
  form1.appendChild(br16);
  form1.appendChild(button1);
  form1.appendChild(br17);
  
  document.body.append(div1);
  
  
  ///****************************************  Back End Code ********************************* */
  
  
  let submit1 = document.getElementById("submit");
  submit1.addEventListener("click",function(e){
      e.preventDefault();
  
     let gender = document.getElementsByName("gender");
     console.log(gender);
     let inputvalue;
     for(i=0; i<gender.length;i++){
      if(gender[i].checked){
          inputvalue = gender[i].value;
      }
      
     }
       
     let food1 = document.querySelectorAll('input[type="checkbox"]');
     
  
     var box =[];
     var count =0;
     for(i=0;i<food1.length;i++){
         if(food1[i].checked){
             box.push(food1[i].value);
             count++;       
         }
     }
     
     if (box.length>=2){
         var result =box.join(",");
         
     }else{
         result = alert("Choose atleast 2 foods");
     }
  
  tableData(fname.value,lname.value,address.value,pincode.value,
      inputvalue,result,state.value,country.value);
  
           alert(`  Form Submited
                     Thank You😊`);
      document.getElementById("form").reset();
  
  });
  
     let fname = document.getElementById("fname");
     let lname = document.getElementById("lname");
     let address = document.getElementById("address");
     let pincode = document.getElementById("pin");
     let gender = document.getElementById("gender");
     let food = document.getElementById("food");
     let state = document.getElementById("state");
     let country = document.getElementById("country");
  
  
  
  
  function tableData(fname,lname,address,pincode,gender,food,state,country){
      let tbody = document.getElementById("tbody");
      let tr = document.createElement("tr");
      let btd1 = document.createElement("td");
      let btd2 = document.createElement("td");
      let btd3 = document.createElement("td");
      let btd4 = document.createElement("td");
      let btd5 = document.createElement("td");
      let btd6 = document.createElement("td");
      let btd7 = document.createElement("td");
      let btd8 = document.createElement("td");
      
      btd1.innerHTML = fname;
      btd2.innerHTML = lname;
      btd3.innerHTML = address;
      btd4.innerHTML = pincode;
      btd5.innerHTML = gender;
      btd6.innerHTML = food;
      btd7.innerHTML = state;
      btd8.innerHTML = country;
      
      tr.append(btd1);
      tr.append(btd2);
      tr.append(btd3);
      tr.append(btd4);
      tr.append(btd5);
      tr.append(btd6);
      tr.append(btd7);
      tr.append(btd8);
      tbody.append(tr);
    
  
  
  }