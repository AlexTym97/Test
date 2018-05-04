  // 1 Завданняя
  let xhr = new XMLHttpRequest();
  let n=0; //count of null in massives
  let newObj;
  xhr.open('GET', 'https://api.myjson.com/bins/1gl053', false);
  xhr.send();

  // get result
  if (xhr.status != 200){
      console.error('Error ' + xhr.status + ': ' + xhr.statusText);
  } else {
      let obj = JSON.parse(xhr.responseText);
      newObj = ChangeNull(obj);
  }


  function ChangeNull(obj) {
      let isArr = Array.isArray(obj);
      for(let key in obj) {

          if(obj[key] === null)
              obj[key] = "null";
          else if(typeof obj[key] === "object" && !isArr) {
              ChangeNull(obj[key]);
          }
          else if(typeof obj[key] === "object" && isArr) {
              for(let k in obj[key])
                  if(k === null)
                      n++;
          }
      }
      return obj;
  }
